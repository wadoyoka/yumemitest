import type { Meta, StoryObj } from '@storybook/react'
import PrefecturesMobile from './PrefecturesMobile'

const meta: Meta<typeof PrefecturesMobile> = {
  title: 'Components/PrefecturesMobile',
  component: PrefecturesMobile,
  tags: ['autodocs'],
  argTypes: {
    plusSize: {
      control: { type: 'number', min: 16, max: 48, step: 1 },
      description: 'プラスボタンのサイズ',
    },
    plusStrokeWidth: {
      control: 'text',
      description: 'プラスボタンの線の太さ',
    },
    plusColor: {
      control: 'color',
      description: 'プラスボタンの色',
    },
    plusHoverColor: {
      control: 'color',
      description: 'ホバー時のプラスボタンの色',
    },
    deleteButtonSize: {
      control: { type: 'number', min: 16, max: 48, step: 1 },
      description: '削除ボタンのサイズ',
    },
    deleteButtonStrokeWidth: {
      control: 'text',
      description: '削除ボタンの線の太さ',
    },
    deleteButtonColor: {
      control: 'color',
      description: '削除ボタンの色',
    },
    deleteButtonHoverColor: {
      control: 'color',
      description: 'ホバー時の削除ボタンの色',
    },
    prefectures: {
      control: 'object',
      description: '都道府県の配列',
    },
    textSize: {
      control: { type: 'number', min: 12, max: 32, step: 1 },
      description: 'テキストのサイズ',
    },
    textColor: {
      control: 'color',
      description: 'テキストの色',
    },
    hoverTextColor: {
      control: 'color',
      description: 'ホバー時のテキストの色',
    },
    baseColor: {
      control: 'color',
      description: '通常時の背景色',
    },
    hoverColor: {
      control: 'color',
      description: 'ホバー時の背景色',
    },
    borderColor: {
      control: 'color',
      description: 'ボーダーの色',
    },
  },
}

export default meta
type Story = StoryObj<typeof PrefecturesMobile>

export const Default: Story = {
  args: {
    plusSize: 24,
    plusStrokeWidth: '2',
    plusColor: '#6B7280',
    plusHoverColor: '#374151',
    deleteButtonSize: 24,
    deleteButtonStrokeWidth: '2',
    deleteButtonColor: '#6B7280',
    deleteButtonHoverColor: '#374151',
    prefectures: ['北海道', '岩手県'],
    textSize: 16,
    textColor: '#1F2937',
    hoverTextColor: '#111827',
    baseColor: '#E5E7EB',
    hoverColor: '#F3F4F6',
    borderColor: '#D1D5DB',
  },
}

export const Empty: Story = {
  args: {
    ...Default.args,
    prefectures: [],
  },
}

export const CustomStyle: Story = {
  args: {
    ...Default.args,
    plusSize: 32,
    deleteButtonSize: 32,
    textSize: 20,
    textColor: '#1F2937',
    hoverTextColor: '#111827',
    baseColor: '#F3F4F6',
    hoverColor: '#E5E7EB',
    borderColor: '#9CA3AF',
  },
}
