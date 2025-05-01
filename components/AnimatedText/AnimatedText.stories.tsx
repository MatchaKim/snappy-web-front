import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {AnimatedText} from './AnimatedText';

const meta: Meta<typeof AnimatedText> = {
  component: AnimatedText,
};

export default meta;

type Story = StoryObj<typeof AnimatedText>;

export const Basic: Story = {args: {}};
