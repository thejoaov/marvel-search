import React from 'react';
import {
  render,
  fireEvent,
  waitFor,
  RenderResult,
} from '@testing-library/react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from '..';
import { getCharacters } from '../../../services/api';

jest.mock('../../../services/api');
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: () => null }),
}));

jest.spyOn(console, 'log').mockImplementation(() => {});

const mockNavigation: any = {
  navigate: jest.fn(),
};

const mockRoute: any = {
  params: {},
};

describe('Home screen', () => {
  let testComponent: RenderResult;

  beforeEach(() => {
    (getCharacters as jest.Mock).mockRejectedValue(new Error('Error'));

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
        timeout: 1000,
      },
    );
  });

  it('handles error when fetching characters', async () => {
    (getCharacters as jest.Mock).mockRejectedValue(new Error('Network error'));

    fireEvent.changeText(testComponent.getByTestId('input-search'), 'Error');

    await waitFor(() => {
      expect(console.log).toHaveBeenCalled();
    });
  });

  it('navigates to the Settings screen on character press', () => {
    fireEvent.press(testComponent.getByTestId('button-settings'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Settings');
  });
});
