import React from 'react';
import {
  render,
  fireEvent,
  waitFor,
  RenderResult,
} from '@testing-library/react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from '../../Home';
import { GetCharacters } from '../../../services/api/types';
import { getCharacters } from '../../../services/api';

jest.mock('../../../services/api');

const mockNavigation: any = {
  navigate: jest.fn(),
};

const mockRoute: any = {
  params: {},
};

const mockData: GetCharacters = {
  code: 200,
  status: 'Ok',
  copyright: 'Copyright 2023 Marvel',
  attributionText: 'Data provided by Marvel. © 2023 MARVEL',
  attributionHTML:
    '<a href="http://marvel.com">Data provided by Marvel. © 2023 MARVEL</a>',
  data: {
    offset: 0,
    limit: 1,
    total: 1,
    count: 1,
    results: [
      {
        id: 1,
        name: 'Test Character',
        description: 'Test character description',
        modified: '2023-05-03T00:00:00-0400',
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1',
        urls: [],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
          extension: 'jpg',
        },
        comics: {
          available: 0,
          returned: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1/comics',
          items: [],
        },
        stories: {
          available: 0,
          returned: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1/stories',
          items: [],
        },
        events: {
          available: 0,
          returned: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1/events',
          items: [],
        },
        series: {
          available: 0,
          returned: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/characters/1/series',
          items: [],
        },
      },
    ],
  },
  etag: 'etag',
};

describe('Home screen', () => {
  let testComponent: RenderResult;

  beforeEach(() => {
    (getCharacters as jest.Mock).mockResolvedValue(mockData);

    testComponent = render(
      <PaperProvider>
        <Home navigation={mockNavigation} route={mockRoute} />
      </PaperProvider>,
    );
  });

  it('renders Home screen correctly', () => {
    expect(testComponent.getByTestId('text-search')).toBeTruthy();
    expect(testComponent.getByTestId('input-search')).toBeTruthy();
    expect(testComponent.getByTestId('container-header')).toBeTruthy();
    expect(testComponent.getByTestId('container-appbar')).toBeTruthy();
    expect(
      testComponent.getByTestId('container-column-text-name'),
    ).toBeTruthy();
    expect(testComponent.getByTestId('text-column-name')).toBeTruthy();
  });

  it('searches for characters', async () => {
    fireEvent.changeText(testComponent.getByTestId('input-search'), 'Test');

    await waitFor(
      () => {
        expect(getCharacters).toHaveBeenLastCalledWith(
          expect.objectContaining({
            name: 'Test',
            page: 0,
          }),
        );
      },
      {
        timeout: 5000,
      },
    );
  });

  it('navigates to the Details screen on character press', async () => {
    fireEvent.press(testComponent.getByText('Test Character'));

    expect(mockNavigation.navigate).toHaveBeenCalledWith(
      'Details',
      mockData.data.results[0],
    );
  });

  it('navigates to the Settings screen on character press', () => {
    fireEvent.press(testComponent.getByTestId('button-settings'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Settings');
  });

  it('Press the button to change pagination', async () => {
    fireEvent.press(testComponent.getByTestId('button-previous-page'));
    fireEvent.press(testComponent.getByTestId('button-next-page'));
    fireEvent.press(testComponent.getByTestId('button-page-2'));
    fireEvent.press(testComponent.getByTestId('button-page-3'));
    fireEvent.press(testComponent.getByTestId('button-previous-page'));

    await waitFor(() => {
      expect(getCharacters).toHaveBeenLastCalledWith(
        expect.objectContaining({
          page: 3,
        }),
      );
    });
  });

  // test onRefresh
  it('refreshes the list', async () => {
    fireEvent(testComponent.getByTestId('list-characters'), 'onRefresh');

    await waitFor(
      () => {
        expect(getCharacters).toHaveBeenLastCalledWith(
          expect.objectContaining({
            page: 0,
          }),
        );
      },
      {
        timeout: 1000,
      },
    );
  });
});
