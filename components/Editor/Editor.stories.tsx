import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {Editor} from './Editor';

const meta: Meta<typeof Editor> = {
  component: Editor,
};

export default meta;

type Story = StoryObj<typeof Editor>;

export const Basic: Story = {args: {}};
