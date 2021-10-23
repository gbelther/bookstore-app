import { ImBook } from 'react-icons/im';
import { ILogoProps } from './interfaces';

import * as Sty from './styles';

const Logo = ({ size = '50px' }: ILogoProps) => {
  return (
    <Sty.Wrapper
      aria-label="Logo"
      style={{
        width: size,
        height: size,
      }}
    >
      <ImBook fontSize={50} />
    </Sty.Wrapper>
  );
};

export default Logo;
