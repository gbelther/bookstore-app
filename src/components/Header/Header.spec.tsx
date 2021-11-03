import { screen } from '@testing-library/react';

import { renderTheme } from 'utils/renderTheme';
import Header from '.';

describe('<Header />', () => {
  it('Renders correctly', () => {
    renderTheme(<Header data-testid="header" />);

    expect(screen.getAllByTestId('header')).toBeInTheDocument();
  });
});
