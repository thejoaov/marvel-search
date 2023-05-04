import React from 'react';
import { View } from 'react-native';
import { Provider, Text } from 'react-native-paper';
import { render, fireEvent, RenderResult } from '@testing-library/react-native';
import { CharacterInfo } from '../../models/Character';
import { Styles } from './styles';
import CharacterRow from '../CharacterRow';
import { lightTheme } from '../../styles/themes';

const character: CharacterInfo = {
  id: 1016452,
  name: 'Spider-Man (Ai Apaec)',
  description: '',
  modified: '2012-08-06T16:22:54-0400',
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/60/4fce7a4d900f4',
    extension: 'jpg',
  },
  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1016452',
  comics: {
    available: 15,
    collectionURI:
      'http://gateway.marvel.com/v1/public/characters/1016452/comics',
    items: [
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/40775',
        name: 'Dark Avengers (2012) #175',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/40776',
        name: 'Dark Avengers (2012) #177',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/40780',
        name: 'Dark Avengers (2012) #178',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/40773',
        name: 'Dark Avengers (2012) #179',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/40774',
        name: 'Dark Avengers (2012) #180',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/40778',
        name: 'Dark Avengers (2012) #181',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/40787',
        name: 'Dark Avengers (2012) #182',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/40786',
        name: 'Dark Avengers (2012) #183',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/40785',
        name: 'Dark Avengers (2012) #184',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/46026',
        name: 'Dark Avengers (2012) #186',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/46027',
        name: 'Dark Avengers (2012) #187',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/46028',
        name: 'Dark Avengers (2012) #188',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/46029',
        name: 'Dark Avengers (2012) #189',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/46030',
        name: 'Dark Avengers (2012) #190',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/35246',
        name: 'New Avengers (2010) #18',
      },
    ],
    returned: 15,
  },
  series: {
    available: 2,
    collectionURI:
      'http://gateway.marvel.com/v1/public/characters/1016452/series',
    items: [
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/series/789',
        name: 'Dark Avengers (2012 - 2013)',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/series/9922',
        name: 'New Avengers (2010 - 2012)',
      },
    ],
    returned: 2,
  },
  stories: {
    available: 29,
    collectionURI:
      'http://gateway.marvel.com/v1/public/characters/1016452/stories',
    items: [
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/77855',
        name: 'New Avengers (2010) #18 - Int',
        type: 'interiorStory',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/92370',
        name: 'Dark Avengers (2012) #179',
        type: 'cover',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/92371',
        name: 'Interior #92371',
        type: 'interiorStory',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/92372',
        name: 'Dark Avengers (2012) #180',
        type: 'cover',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/92373',
        name: 'Interior #92373',
        type: 'interiorStory',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/92374',
        name: 'Dark Avengers (2012) #175',
        type: 'cover',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/92375',
        name: 'Interior #92375',
        type: 'interiorStory',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/92376',
        name: 'Dark Avengers (2012) #177',
        type: 'cover',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/92377',
        name: 'Interior #92377',
        type: 'interiorStory',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/92380',
        name: 'Dark Avengers (2012) #181',
        type: 'cover',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/92381',
        name: 'Interior #92381',
        type: 'interiorStory',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/92384',
        name: 'Dark Avengers (2012) #178',
        type: 'cover',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/92385',
        name: 'Interior #92385',
        type: 'interiorStory',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/92394',
        name: 'Dark Avengers (2012) #184',
        type: 'cover',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/92395',
        name: 'Interior #92395',
        type: 'interiorStory',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/92396',
        name: 'Dark Avengers (2012) #183',
        type: 'cover',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/92397',
        name: 'Interior #92397',
        type: 'interiorStory',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/92398',
        name: 'Dark Avengers (2012) #182',
        type: 'cover',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/92399',
        name: 'Interior #92399',
        type: 'interiorStory',
      },
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/103582',
        name: 'Dark Avengers (2012) #186',
        type: 'cover',
      },
    ],
    returned: 20,
  },
  events: {
    available: 0,
    collectionURI:
      'http://gateway.marvel.com/v1/public/characters/1016452/events',
    items: [],
    returned: 0,
  },
  urls: [
    {
      type: 'detail',
      url: 'http://marvel.com/comics/characters/1016452/spider-man_ai_apaec?utm_campaign=apiRef&utm_source=38265e839f468d7abc9bc297726b4e49',
    },
    {
      type: 'comiclink',
      url: 'http://marvel.com/comics/characters/1016452/spider-man_ai_apaec?utm_campaign=apiRef&utm_source=38265e839f468d7abc9bc297726b4e49',
    },
  ],
};

let onPressMock: jest.Mock;
let testComponent: RenderResult;

describe('CharacterRow', () => {
  beforeEach(() => {
    onPressMock = jest.fn();
    testComponent = render(
      <Provider theme={lightTheme}>
        <CharacterRow character={character} onPress={onPressMock} />
      </Provider>,
    );
  });

  it('should render character name', () => {
    const { getByText } = testComponent;
    const nameElement = getByText(character.name);
    expect(nameElement).toBeDefined();
  });

  it('should call onPress callback', () => {
    const { getByTestId } = testComponent;
    const touchable = getByTestId('button-character');
    fireEvent.press(touchable);
    expect(onPressMock).toHaveBeenCalled();
  });

  it('should render image with valid source', () => {
    const { getByTestId } = render(
      <CharacterRow character={character} onPress={onPressMock} />,
    );
    const image = getByTestId('image-thumbnail');
    expect(image).toBeDefined();

    expect(image.props.proxiedProperties.source[0].uri).toContain(
      character.thumbnail.path,
    );
    expect(image.props.proxiedProperties.source[0].uri).toContain(
      character.thumbnail.extension,
    );
  });

  it('should render properly with default props', () => {
    const { getByTestId } = testComponent;
    const wrapper = getByTestId('button-character');
    expect(wrapper).toBeDefined();
    expect(wrapper.props.style).toEqual([
      false,
      false,
      [
        Styles.wrapper,
        {
          borderBottomColor: '#D42026',
        },
      ],
    ]);

    const container = getByTestId('button-character').findByType(View);
    expect(container).toBeDefined();
    expect(container.props.style).toEqual(Styles.container);

    const imageContainer = getByTestId('image-container');
    expect(imageContainer).toBeDefined();
    expect(imageContainer.props.style).toEqual(Styles.imageContainer);

    const text = container.findByType(Text);
    expect(text).toBeDefined();
    expect(text.props.style).toEqual(Styles.text);
  });
});
