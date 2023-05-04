import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Details from '../../Details';
import { CharacterInfo } from '../../../models/Character';

jest.spyOn(console, 'log').mockImplementation(() => {});

const mockCharacter: CharacterInfo = {
  id: 1,
  name: 'Test Character',
  description: '',
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
    available: 0,
    returned: 0,
    collectionURI: 'http://gateway.marvel.com/v1/public/characters/1/events',
    items: [],
  },
  series: {
    available: 0,
    returned: 0,
    collectionURI: 'http://gateway.marvel.com/v1/public/characters/1/series',
    items: [],
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
    ).toEqual('No description provided.');
  });

  it('navigates back on back button press', () => {
    fireEvent.press(testComponent.getByTestId('back-button'));
    expect(mockNavigation.goBack).toHaveBeenCalled();
  });
});
