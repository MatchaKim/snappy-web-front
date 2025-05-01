import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {AnimationControlButtonGroup} from './AnimationControlButtonGroup';

const meta: Meta<typeof AnimationControlButtonGroup> = {
  component: AnimationControlButtonGroup,
};

export default meta;

type Story = StoryObj<typeof AnimationControlButtonGroup>;

export const Basic: Story = {args: {}};
