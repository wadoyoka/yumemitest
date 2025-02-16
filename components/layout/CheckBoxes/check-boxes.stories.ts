import type { Prefecture } from '@/types/Prefecture/Prefecture'
import type { Meta, StoryObj } from '@storybook/react'
import CheckBoxes from './CheckBoxes'

const mockPrefectures: Prefecture[] = [
  { prefCode: 1, prefName: '北海道' },
  { prefCode: 2, prefName: '青森県' },
  { prefCode: 3, prefName: '岩手県' },
  { prefCode: 4, prefName: '宮城県' },
  { prefCode: 5, prefName: '秋田県' },
  { prefCode: 6, prefName: '山形県' },
]

const meta: Meta<typeof CheckBoxes> = {
  title: 'Components/CheckBoxes',
  component: CheckBoxes,
  tags: ['autodocs'],
  argTypes: {
    checkBoxSize: {
      control: { type: 'number', min: 16, max: 64, step: 1 },
    },
    checkBoxStrokeWidth: {
      control: { type: 'number', min: 1, max: 5, step: 0.5 },
    },
    checkIndexes: {
      control: 'object',
    },
    textSize: {
      control: { type: 'number', min: 12, max: 32, step: 1 },
    },
    prefectures: {
      control: 'object',
    },
    onCheckChange: { action: 'checked' },
  },
}

export default meta
type Story = StoryObj<typeof CheckBoxes>

export const Default: Story = {
  args: {
    checkBoxSize: 24,
    checkBoxStrokeWidth: 2,
    checkIndexes: [1],
    textSize: 16,
    prefectures: mockPrefectures,
  },
}

export const Large: Story = {
  args: {
    checkBoxSize: 32,
    checkBoxStrokeWidth: 3,
    checkIndexes: [1, 2],
    textSize: 20,
    prefectures: mockPrefectures,
  },
}

export const Small: Story = {
  args: {
    checkBoxSize: 16,
    checkBoxStrokeWidth: 1,
    checkIndexes: [],
    textSize: 12,
    prefectures: mockPrefectures,
  },
}
