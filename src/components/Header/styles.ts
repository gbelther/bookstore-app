import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  color: #fff;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const LogoWrapper = styled.section`
  padding: 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const LogoName = styled.p`
  font-size: 2rem;
`;

export const InputWrapper = styled.section`
  width: 100%;
  max-width: 500px;
  min-width: 200px;
  padding: 0 0.5rem;
`;

export const LoginWrapper = styled.section`
  padding: 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

export const LinkToLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const LoginText = styled.p`
  font-size: 0.75rem;
`;

export const CartWrapper = styled.section`
  padding: 0 0.5rem;
  cursor: pointer;
`;
