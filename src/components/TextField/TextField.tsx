import { ITextInputProps } from './interfaces';
import * as Sty from './styles';

const TextField = ({ label, placeholder, icon, ...props }: ITextInputProps) => {
  return (
    <Sty.Wrapper>
      {icon && <Sty.Icon>{icon}</Sty.Icon>}
      <Sty.Input
        type="text"
        aria-label={label}
        placeholder={placeholder}
        {...props}
      />
    </Sty.Wrapper>
  );
};

export default TextField;
