import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {EditorPreviewUnit} from './EditorPreviewUnit';

const meta: Meta<typeof EditorPreviewUnit> = {
  component: EditorPreviewUnit,
};

export default meta;

type Story = StoryObj<typeof EditorPreviewUnit>;

export const Basic: Story = {args: {}};
