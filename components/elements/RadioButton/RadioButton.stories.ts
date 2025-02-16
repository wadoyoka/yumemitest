import type { Meta, StoryObj } from '@storybook/react'
import RadioButton from './RadioButton'

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'number', min: 16, max: 64, step: 1 },
    },
    strokeWidth: {
      control: { type: 'number', min: 1, max: 5, step: 0.5 },
    },
    isSelected: {
      control: 'boolean',
    },
    onChange: { action: 'changed' },
  },
}

export default meta
type Story = StoryObj<typeof RadioButton>

export const Default: Story = {
  args: {
    size: 24,
    strokeWidth: 2,
    isSelected: false,
  },
}

export const Selected: Story = {
  args: {
    size: 24,
    strokeWidth: 2,
    isSelected: true,
  },
}

export const Large: Story = {
  args: {
    size: 48,
    strokeWidth: 3,
    isSelected: false,
  },
}

export const Small: Story = {
  args: {
    size: 16,
    strokeWidth: 1,
    isSelected: false,
  },
}
