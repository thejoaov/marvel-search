import api from './config';
import { GetCharacters } from './types';
import { getCharacters } from '../api';

jest.mock('./config', () => ({
  get: jest.fn(),
}));

describe('getCharacters', () => {
  it('returns character data from the API', async () => {
    const mockData: GetCharacters = {
      copyright: '',
      code: 200,
      status: 'Ok',
      attributionText: '',
      attributionHTML: '',
      etag: '',
      data: {
        offset: 0,
        limit: 20,
        total: 100,
        count: 20,
        results: [
          {
            id: 1011334,
            name: '3-D Man',
            description: '',
            modified: new Date().toDateString(),
            thumbnail: {
              path: '',
              extension: '',
            },
            resourceURI: '',
            comics: {
              available: 0,
              returned: 0,
              collectionURI: '',
              items: [],
            },
            series: {
              available: 0,
              returned: 0,
              collectionURI: '',
              items: [],
            },
            stories: {
              available: 0,
              returned: 0,
              collectionURI: '',
              items: [],
            },
            events: {
              available: 0,
              returned: 0,
              collectionURI: '',
              items: [],
            },
            urls: [],
          },
        ],
      },
    };
    (api.get as jest.Mock).mockResolvedValueOnce({
      data: mockData,
    });

    const result = await getCharacters();

    expect(api.get).toHaveBeenCalledWith('/characters?', {
      params: {
        offset: 0,
        limit: 4,
        nameStartsWith: undefined,
      },
    });

    expect(result).toEqual(mockData);
  });

  it('returns character data from the API passing all the parameters', async () => {
    const mockData: GetCharacters = {
      copyright: '',
      code: 200,
      status: 'Ok',
      attributionText: '',
      attributionHTML: '',
      etag: '',
      data: {
        offset: 0,
        limit: 20,
        total: 100,
        count: 20,
        results: [
          {
            id: 1011334,
            name: '3-D Man',
            description: '',
            modified: new Date().toDateString(),
            thumbnail: {
              path: '',
              extension: '',
            },
            resourceURI: '',
            comics: {
              available: 0,
              returned: 0,
              collectionURI: '',
              items: [],
            },
            series: {
              available: 0,
              returned: 0,
              collectionURI: '',
              items: [],
            },
            stories: {
              available: 0,
              returned: 0,
              collectionURI: '',
              items: [],
            },
            events: {
              available: 0,
              returned: 0,
              collectionURI: '',
              items: [],
            },
            urls: [],
          },
        ],
      },
    };
    (api.get as jest.Mock).mockResolvedValueOnce({
      data: mockData,
    });

    const result = await getCharacters({ page: 1 });

    expect(api.get).toHaveBeenCalledWith('/characters?', {
      params: {
        offset: 4,
        limit: 4,
        nameStartsWith: undefined,
      },
    });

    expect(result).toEqual(mockData);
  });
});
