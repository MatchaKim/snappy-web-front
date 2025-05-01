import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {EditorPreview} from './EditorPreview';

const meta: Meta<typeof EditorPreview> = {
  component: EditorPreview,
};

export default meta;

type Story = StoryObj<typeof EditorPreview>;

export const Basic: Story = {args: {}};
