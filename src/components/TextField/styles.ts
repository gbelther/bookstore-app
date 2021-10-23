import styled from 'styled-components';

export const Wrapper = styled.section`
  width: auto;
  position: relative;
`;

export const Icon = styled.div`
  position: absolute;
  top: 25%;
  right: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.grayLight};
  width: 100%;
  height: 2rem;
  padding: 4px 8px;
  border: 0.5px solid ${({ theme }) => theme.colors.grayLight};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;
