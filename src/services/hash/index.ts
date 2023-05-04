import { PRIVATE_KEY, PUBLIC_KEY } from '../../constants/api';
import * as Crypto from 'expo-crypto';
import api from '../api/config';

export const generateHash = async (): Promise<void> => {
  const timestamp = 1;

  const hash = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.MD5,
    timestamp + PRIVATE_KEY + PUBLIC_KEY,
  );

  api.defaults.params = {
    ts: timestamp,
    apikey: PUBLIC_KEY,
    hash,
  };
};
