import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import Logo from '.';

describe('<Logo />', () => {
  it('Renders with sizes default correcly', () => {
    render(<Logo />);

    expect(screen.getByLabelText('Logo')).toHaveStyle({
      width: '50px',
      height: '50px',
    });
  });
});
