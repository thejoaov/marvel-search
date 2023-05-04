import React from 'react';
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { Styles } from './styles';

export type LogoProps = {
  testID?: string;
};

const Logo: React.FC<LogoProps> = ({ testID }) => {
  const { colors } = useTheme();
  return (
    <View style={Styles.container} testID={testID ?? 'container'}>
      <View>
        <Text
          testID="search"
          style={[
            Styles.search,
            {
              color: colors.primary,
            },
          ]}>
          BUSCA
        </Text>
        <View
          testID="underline"
          style={[Styles.underline, { backgroundColor: colors.primary }]}
        />
      </View>
      <Text
        testID="marvel"
        style={[
          Styles.marvel,
          {
            color: colors.primary,
          },
        ]}>
        MARVEL
      </Text>
      <Text
        testID="name"
        style={[
          Styles.name,
          {
            color: colors.primary,
          },
        ]}>
        TESTE FRONT-END
      </Text>
    </View>
  );
};

export default Logo;
