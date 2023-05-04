import React from 'react';
import { View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';

import { Image } from 'expo-image';
import { CharacterInfo } from '../../models/Character';
import { Styles } from './styles';
import useTheme from '../../hooks/useTheme';

export type CharacterRowProps = {
  character: CharacterInfo;
  onPress: () => void;
  testID?: string;
};

const CharacterRow: React.FC<CharacterRowProps> = ({
  character,
  onPress,
  testID,
}) => {
  const theme = useTheme();

  return (
    <TouchableRipple
      testID={testID ?? 'button-character'}
      onPress={onPress}
      style={[
        Styles.wrapper,
        {
          borderBottomColor: theme.colors.primary,
        },
      ]}>
      <View style={Styles.container}>
        <View style={Styles.imageContainer} testID="image-container">
          <Image
            testID="image-thumbnail"
            transition={{ duration: 500, effect: 'cross-dissolve' }}
            style={Styles.image}
            source={{
              uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
            }}
          />
        </View>

        <Text testID="text-name" style={Styles.text}>
          {character.name}
        </Text>
      </View>
    </TouchableRipple>
  );
};

export default CharacterRow;
