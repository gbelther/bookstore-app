import { InputHTMLAttributes, ReactNode } from 'react';

export interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  icon?: ReactNode;
}
