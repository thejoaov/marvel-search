import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Linking } from 'react-native';
import Details from '../../Details';
import { CharacterInfo } from '../../../models/Character';

jest.mock('react-native/Libraries/Linking/Linking', () => ({
  openURL: jest.fn(),
}));

const mockCharacter: CharacterInfo = {
  id: 1,
  name: 'Test Character',
  description: 'Test character description',
  modified: '2023-05-03T00:00:00-0400',
  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1',
  urls: [
    {
      type: 'detail',
      url: 'http://www.example.com',
    },
  ],
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
    extension: 'jpg',
  },
  comics: {
    available: 0,
    returned: 0,
    collectionURI: 'http://gateway.marvel.com/v1/public/characters/1/comics',
    items: [],
  },
  stories: {
    available: 0,
    returned: 0,
    collectionURI: 'http://gateway.marvel.com/v1/public/characters/1/stories',
    items: [],
  },
  events: {
    available: 1,
    returned: 1,
    collectionURI: 'http://gateway.marvel.com/v1/public/characters/1/events',
    items: [
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/events/1',
        name: 'Test Event',
      },
    ],
  },
  series: {
    available: 1,
    returned: 1,
    collectionURI: 'http://gateway.marvel.com/v1/public/characters/1/series',
    items: [
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/series/1',
        name: 'Test Series',
      },
    ],
  },
};

const mockNavigation: any = {
  goBack: jest.fn(),
};

const mockRoute: any = {
  params: mockCharacter,
};

describe('Details screen', () => {
  let testComponent: any;

  beforeEach(() => {
    testComponent = render(
      <PaperProvider>
        <Details navigation={mockNavigation} route={mockRoute} />
      </PaperProvider>,
    );
  });

  it('renders Details screen correctly', () => {
    expect(
      testComponent.getByTestId('title-details-title-text').props.children,
    ).toEqual('Test Character');
    expect(
      testComponent.getByTestId('description-details').props.children,
    ).toEqual('Test character description');
  });

  it('renders events, series, and urls correctly', () => {
    expect(testComponent.getByTestId('events-title')).toBeTruthy();
    expect(testComponent.getByTestId('series-title')).toBeTruthy();
    expect(testComponent.getByTestId('urls-title')).toBeTruthy();

    expect(testComponent.getByText('Test Event')).toBeTruthy();
    expect(testComponent.getByText('Test Series')).toBeTruthy();
    expect(testComponent.getByText('http://www.example.com')).toBeTruthy();
  });

  it('navigates back on back button press', () => {
    fireEvent.press(testComponent.getByTestId('back-button'));
    expect(mockNavigation.goBack).toHaveBeenCalled();
  });

  it('opens the URL when the button is pressed', () => {
    fireEvent.press(testComponent.getByText('http://www.example.com'));
    expect(Linking.openURL).toHaveBeenCalledWith('http://www.example.com');
  });
});
