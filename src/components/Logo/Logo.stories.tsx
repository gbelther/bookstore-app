import { Meta, Story } from '@storybook/react/types-6-0';
import Logo from '.';
import { ILogoProps } from './interfaces';

export default {
  title: 'Logo',
  component: Logo,
  args: {
    size: '50px',
  },
} as Meta;

export const Default: Story<ILogoProps> = args => (
  <div>
    <Logo {...args} />
  </div>
);
