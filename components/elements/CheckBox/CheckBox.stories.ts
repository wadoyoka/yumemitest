import CheckBox from '@/components/elements/CheckBox/CheckBox'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CheckBox> = {
  title: 'Components/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'number', min: 16, max: 64, step: 1 },
    },
    strokeWidth: {
      control: { type: 'number', min: 1, max: 5, step: 0.5 },
    },
    isCheck: {
      control: 'boolean',
    },
    onChange: { action: 'changed' },
  },
}

export default meta
type Story = StoryObj<typeof CheckBox>

export const Default: Story = {
  args: {
    size: 24,
    strokeWidth: 2,
    isCheck: false,
  },
}

export const Checked: Story = {
  args: {
    size: 24,
    strokeWidth: 2,
    isCheck: true,
  },
}

export const Large: Story = {
  args: {
    size: 48,
    strokeWidth: 3,
    isCheck: false,
  },
}

export const Small: Story = {
  args: {
    size: 16,
    strokeWidth: 1,
    isCheck: false,
  },
}
