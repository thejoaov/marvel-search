import React from 'react';

import { View, Text, ScrollView, Linking, ImageBackground } from 'react-native';
import { RootStackScreenProps } from '../../router/types';
import { Appbar, Avatar, Button, Chip } from 'react-native-paper';
import { Styles } from './styles';
import useTheme from '../../hooks/useTheme';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

const Details: React.FC<RootStackScreenProps<'Details'>> = ({
  route,
  navigation,
}) => {
  const character = route.params;
  const { colors } = useTheme();

  const { t } = useTranslation('details');

  return (
    <SafeAreaView edges={['bottom']} style={Styles.animatedView}>
      <View style={Styles.animatedView}>
        <ImageBackground
          testID="image-background"
          blurRadius={70}
          source={{
            uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
          }}>
          <Appbar style={Styles.header}>
            <Appbar.BackAction
              testID="back-button"
              onPress={navigation.goBack}
              iconColor={colors.onPrimaryContainer}
            />
            <Appbar.Content
              testID="title-details"
              title={character.name}
              color={colors.onPrimaryContainer}
            />
          </Appbar>
          <View style={Styles.descriptionContainer}>
            <Text
              testID="description-details"
              style={[
                Styles.description,
                {
                  color: colors.onPrimaryContainer,
                },
              ]}>
              {character.description.length
                ? character.description
                : t('no-description')}
            </Text>
            <Avatar.Image
              testID="avatar-image"
              style={Styles.avatar}
              size={200}
              source={{
                uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
              }}
            />
          </View>
        </ImageBackground>
        <ScrollView style={Styles.container} testID="scrollview-container">
          <View style={Styles.body}>
            <View style={Styles.eventsContainer}>
              <Text
                testID="events-title"
                style={[
                  Styles.eventTitle,
                  {
                    color: colors.onPrimary,
                  },
                ]}>
                {t('events-title')}
              </Text>
              <View style={Styles.events}>
                {character.events.items.map(event => (
                  <Chip key={event.name} style={Styles.chip} icon="star">
                    {event.name}
                  </Chip>
                ))}
              </View>
            </View>

            <View style={Styles.eventsContainer}>
              <Text
                testID="series-title"
                style={[
                  Styles.eventTitle,
                  {
                    color: colors.onPrimary,
                  },
                ]}>
                {t('series-title')}
              </Text>
              <View style={Styles.events}>
                {character.series.items.map(serie => (
                  <Chip
                    key={serie.name}
                    icon="star-outline"
                    style={Styles.chip}>
                    {serie.name}
                  </Chip>
                ))}
              </View>
            </View>

            <View style={Styles.eventsContainer}>
              <Text
                testID="urls-title"
                style={[
                  Styles.eventTitle,
                  {
                    color: colors.onPrimary,
                  },
                ]}>
                {t('urls-title')}
              </Text>
              <View style={Styles.events}>
                {character.urls.map(url => (
                  <Button
                    testID="url-button"
                    key={url.url}
                    onPress={() => Linking.openURL(url.url)}
                    style={Styles.chip}
                    mode="text">
                    {url.url}
                  </Button>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Details;
