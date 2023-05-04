import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react-native';
import Settings from '../../Settings';
import { Provider as PaperProvider } from 'react-native-paper';
import { I18nextProvider, getI18n } from 'react-i18next';

const mockNavigation: any = {
  goBack: jest.fn(),
};

const i18n = getI18n();
const routeMock: any = {};

describe('Settings screen', () => {
  let testComponent: RenderResult;

  beforeEach(() => {
    testComponent = render(
      <I18nextProvider i18n={i18n}>
        <PaperProvider>
          <Settings navigation={mockNavigation} route={routeMock} />
        </PaperProvider>
      </I18nextProvider>,
    );
  });

  it('renders Settings screen correctly', () => {
    expect(testComponent.getByTestId('back-button')).toBeTruthy();
    expect(testComponent.getByTestId('change-language-button')).toBeTruthy();
    expect(testComponent.getByText('Settings')).toBeTruthy();
  });

  it('navigates back on back button press', () => {
    fireEvent.press(testComponent.getByTestId('back-button'));
    expect(mockNavigation.goBack).toHaveBeenCalled();
  });

  it('changes language when language menu item is pressed', () => {
    fireEvent.press(testComponent.getByTestId('change-language-button'));
    fireEvent.press(testComponent.getByTestId('pt-BR-menu-item'));
    expect(i18n.language).toBe('pt-BR');
    fireEvent.press(testComponent.getByTestId('change-language-button'));
    fireEvent.press(testComponent.getByTestId('en-menu-item'));
    expect(i18n.language).toBe('en');
  });

  it('closes the language menu when dismissed', () => {
    fireEvent.press(testComponent.getByTestId('change-language-button'));
    fireEvent(
      testComponent.getByTestId('change-language-button-container-outer-layer'),
      'onDismiss',
    );
    expect(testComponent.queryByText('Português')).toBeNull();
    expect(testComponent.queryByText('English')).toBeNull();
  });
});
