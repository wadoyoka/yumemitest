import type { Meta, StoryObj } from '@storybook/react'
import ButtonWithText from './ButtonWithText'

const meta: Meta<typeof ButtonWithText> = {
  title: 'Components/ButtonWithText',
  component: ButtonWithText,
  tags: ['autodocs'],
  argTypes: {
    ButtonSize: {
      control: { type: 'number', min: 16, max: 64, step: 1 },
    },
    ButtonStrokeWidth: {
      control: { type: 'number', min: 1, max: 5, step: 0.5 },
    },
    isCheck: {
      control: 'boolean',
    },
    textSize: {
      control: { type: 'number', min: 12, max: 32, step: 1 },
    },
    text: {
      control: 'text',
    },
    mode: {
      control: 'radio',
      options: ['checkbox', 'radio'],
    },
    onChange: { action: 'changed' },
  },
}

export default meta
type Story = StoryObj<typeof ButtonWithText>

export const CheckboxMode: Story = {
  args: {
    ButtonSize: 24,
    ButtonStrokeWidth: 2,
    isCheck: true,
    textSize: 16,
    text: '北海道',
    mode: 'checkbox',
  },
}

export const RadioMode: Story = {
  args: {
    ButtonSize: 24,
    ButtonStrokeWidth: 2,
    isCheck: true,
    textSize: 16,
    text: '総人口',
    mode: 'radio',
  },
}

export const Large: Story = {
  args: {
    ButtonSize: 32,
    ButtonStrokeWidth: 3,
    isCheck: false,
    textSize: 24,
    text: 'Large Text',
    mode: 'checkbox',
  },
}

export const Small: Story = {
  args: {
    ButtonSize: 16,
    ButtonStrokeWidth: 1,
    isCheck: false,
    textSize: 12,
    text: 'Small Text',
    mode: 'radio',
  },
}
