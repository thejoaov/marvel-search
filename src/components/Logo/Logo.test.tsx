import React from 'react';
import { render } from '@testing-library/react-native';
import Logo from '../Logo';

describe('Logo component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Logo />);

    expect(getByText('BUSCA')).toBeDefined();
    expect(getByText('MARVEL')).toBeDefined();
    expect(getByText('TESTE FRONT-END')).toBeDefined();
  });
});
