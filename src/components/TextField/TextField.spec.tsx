import { screen } from '@testing-library/react';

import { renderTheme } from 'utils/renderTheme';
import TextField from '.';
import { BiSearchAlt } from 'react-icons/bi';

describe('<TextField />', () => {
  it('Renders with correct label', () => {
    renderTheme(<TextField label="Label" />);

    expect(screen.getByLabelText('Label')).toBeInTheDocument();
  });

  it('Renders with placeholder', () => {
    renderTheme(<TextField label="Label" placeholder="Pesquisar..." />);

    expect(screen.getByPlaceholderText('Pesquisar...')).toBeInTheDocument();
  });

  it('Renders with icon', () => {
    renderTheme(<TextField icon={<BiSearchAlt data-testid="icon" />} />);

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
