import * as Crypto from 'expo-crypto';
import api from '../api/config';
import { generateHash } from './index';
import { PRIVATE_KEY, PUBLIC_KEY } from '../../constants/api';

jest.mock('../api');

describe('generateHash', () => {
  const md5Spy = jest.spyOn(Crypto, 'digestStringAsync');

  afterEach(() => {
    md5Spy.mockClear();
    api.defaults.params = {};
  });

  it('should generate a valid hash', async () => {
    const timestamp = 1;
    const hash = 'generated-hash';
    md5Spy.mockResolvedValueOnce(hash);

    await generateHash();

    expect(md5Spy).toHaveBeenCalledWith(
      Crypto.CryptoDigestAlgorithm.MD5,
      `${timestamp}${PRIVATE_KEY}${PUBLIC_KEY}`,
    );
    expect(api.defaults.params).toEqual({
      ts: timestamp,
      apikey: PUBLIC_KEY,
      hash,
    });
  });
});
