import { Meta, Story } from '@storybook/react/types-6-0';

import TextField from '.';
import { BiSearchAlt } from 'react-icons/bi';
import { ITextInputProps } from './interfaces';

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'Label',
    placeholder: 'Pesquisar...',
    icon: <BiSearchAlt />,
  },
} as Meta;

export const Default: Story<ITextInputProps> = args => (
  <div
    style={{
      maxWidth: '500px',
    }}
  >
    <TextField {...args} />
  </div>
);
