import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CharacterInfo } from '../models/Character';

export type RootStackParamList = {
  Home: undefined;
  Details: CharacterInfo;
  Settings: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
