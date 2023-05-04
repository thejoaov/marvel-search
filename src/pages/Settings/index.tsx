import React, { useCallback, useState } from 'react';

import { View } from 'react-native';
import { RootStackScreenProps } from '../../router/types';
import { useTranslation } from 'react-i18next';
import { Appbar, Button, Menu, Provider } from 'react-native-paper';
import useTheme from '../../hooks/useTheme';
import { Styles } from './styles';

const Settings: React.FC<RootStackScreenProps<'Settings'>> = ({
  navigation,
}) => {
  const { i18n, t } = useTranslation('settings');
  const [changeLanguageVisible, setChangeLanguageVisible] = useState(false);

  const theme = useTheme();

  const handleChangeLanguage = useCallback(
    (lang: string) => {
      i18n.changeLanguage(lang);
    },
    [i18n],
  );

  return (
    <Provider theme={theme}>
      <Appbar.Header mode="small">
        <Appbar.BackAction
          testID="back-button"
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content title={t('title')} />
      </Appbar.Header>
      <View style={Styles.container} testID="settings-container">
        <Menu
          testID="change-language-menu"
          visible={changeLanguageVisible}
          onDismiss={() => setChangeLanguageVisible(false)}
          anchor={
            <Button
              testID="change-language-button"
              onPress={() => setChangeLanguageVisible(true)}
              mode="outlined">
              {t('change-language')}
            </Button>
          }>
          <Menu.Item
            testID="pt-BR-menu-item"
            onPress={() => handleChangeLanguage('pt-BR')}
            title={t('language.pt')}
            trailingIcon={i18n.language === 'pt-BR' ? 'check' : ''}
          />
          <Menu.Item
            testID="en-menu-item"
            onPress={() => handleChangeLanguage('en')}
            title={t('language.en')}
            trailingIcon={i18n.language === 'en' ? 'check' : ''}
          />
        </Menu>
      </View>
    </Provider>
  );
};

export default Settings;
