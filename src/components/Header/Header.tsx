import { BiUser } from 'react-icons/bi';
import { MdOutlineShoppingCart } from 'react-icons/md';

import { Logo, TextField } from '..';
import * as Sty from './styles';

const Header = () => {
  return (
    <Sty.Wrapper>
      <Sty.LogoWrapper>
        <Logo size="2rem" />
        <Sty.LogoName>BOOKSTORE</Sty.LogoName>
      </Sty.LogoWrapper>
      <Sty.InputWrapper>
        <TextField placeholder="Pesquisar..." />
      </Sty.InputWrapper>
      <Sty.LoginWrapper>
        <BiUser size={32} />
        <Sty.LinkToLoginWrapper>
          <Sty.LoginText>Entrar ou</Sty.LoginText>
          <Sty.LoginText>Cadastrar</Sty.LoginText>
        </Sty.LinkToLoginWrapper>
      </Sty.LoginWrapper>
      <Sty.CartWrapper>
        <MdOutlineShoppingCart size={32} />
      </Sty.CartWrapper>
    </Sty.Wrapper>
  );
};

export default Header;
