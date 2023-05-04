import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { IconButton, Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackScreenProps } from '../../router/types';
import Logo from '../../components/Logo';
import { useTranslation } from 'react-i18next';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { GetCharacters } from '../../services/api/types';
import { debounce } from 'lodash';
import { getCharacters } from '../../services/api';
import CharacterRow from '../../components/CharacterRow';
import { Styles } from './styles';
import useTheme from '../../hooks/useTheme';

const Home: React.FC<RootStackScreenProps<'Home'>> = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState<GetCharacters['data'] | null>(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const { t } = useTranslation('home');
  const { colors } = useTheme();

  const handleGetCharacters = useCallback(
    async (req: { page: number; name?: string }) => {
      try {
        setLoading(true);
        setPage(req.page);
        const response = await getCharacters(req);
        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const handleSearch = useCallback(
    async (text: string, initialPage: number) => {
      await handleGetCharacters({ name: text, page: initialPage });
    },
    [handleGetCharacters],
  );

  const debouncedSearch = useMemo(
    () => debounce(handleSearch, 500),
    [handleSearch],
  );

  const handleRefresh = useCallback(async () => {
    await handleGetCharacters({ page: 0 });
  }, [handleGetCharacters]);

  useEffect(() => {
    if (search.length) {
      debouncedSearch(search, page);
    }
  }, [debouncedSearch, page, search]);

  useEffect(() => {
    handleGetCharacters({ page });
  }, [handleGetCharacters, page]);

  const currentPlaceholderEasterEgg = useMemo(
    () =>
      t(`input-search-placeholders.${Math.floor(Math.random() * 30)}`) ??
      'Nome do personagem',
    [t],
  );

  const renderPagination = useMemo(() => {
    if (data && data?.results.length) {
      return (
        <View style={Styles.footer} testID="container-footer">
          <IconButton
            testID="button-previous-page"
            iconColor={colors.primary}
            icon="menu-left"
            size={40}
            onPress={() => {
              if (page > 0) {
                setPage(page - 1);
              }
            }}
          />

          <TouchableOpacity
            testID="button-page"
            style={[
              Styles.pageButton,
              {
                backgroundColor: colors.primary,
                borderColor: colors.primary,
              },
            ]}>
            <Text
              style={[
                Styles.pageButtonText,
                { color: colors.onPrimaryContainer },
              ]}>
              {page + 1}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            testID="button-page-2"
            onPress={() => setPage(prev => prev + 1)}
            style={[
              Styles.pageButton,
              {
                borderColor: colors.primary,
              },
            ]}>
            <Text style={[Styles.pageButtonText, { color: colors.primary }]}>
              {page + 2}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            testID="button-page-3"
            onPress={() => setPage(prev => prev + 2)}
            style={[
              Styles.pageButton,
              {
                borderColor: colors.primary,
              },
            ]}>
            <Text style={[Styles.pageButtonText, { color: colors.primary }]}>
              {page + 3}
            </Text>
          </TouchableOpacity>
          <IconButton
            testID="button-next-page"
            iconColor={colors.primary}
            icon="menu-right"
            size={40}
            onPress={() => setPage(prev => prev + 1)}
          />
        </View>
      );
    }
    return null;
  }, [colors.onPrimaryContainer, colors.primary, data, page]);

  return (
    <SafeAreaView testID="screen-home" style={Styles.screen}>
      <View style={Styles.header} testID="container-header">
        <View style={Styles.appBar} testID="container-appbar">
          <Logo testID="component-logo" />
          <IconButton
            testID="button-settings"
            icon="cog"
            onPress={() => {
              navigation.navigate('Settings');
            }}
          />
        </View>
        <Text
          style={[Styles.search, { color: colors.primary }]}
          testID="text-search">
          {t('search') ?? 'Nome do Personagem'}
        </Text>
        <TextInput
          mode="outlined"
          testID="input-search"
          value={search}
          onChangeText={setSearch}
          placeholder={currentPlaceholderEasterEgg}
        />
      </View>

      <View
        testID="container-column-text-name"
        style={[
          Styles.column,
          {
            backgroundColor: colors.primary,
          },
        ]}>
        <Text
          testID="text-column-name"
          style={[Styles.columnText, { color: colors.onPrimaryContainer }]}>
          {t('search') ?? 'Nome'}
        </Text>
      </View>

      <FlatList
        testID="list-characters"
        refreshing={loading}
        onRefresh={handleRefresh}
        data={data?.results}
        keyExtractor={item => item.id.toString()}
        style={Styles.list}
        renderItem={({ item }) => (
          <CharacterRow
            testID="component-row-character"
            character={item}
            onPress={() => navigation.navigate('Details', item)}
          />
        )}
      />
      {renderPagination}
    </SafeAreaView>
  );
};

export default Home;
