import type { Meta, StoryObj } from '@storybook/react'
import MobileItemButton from './MobileItemButton'

const meta: Meta<typeof MobileItemButton> = {
  title: 'Components/MobileItemButton',
  component: MobileItemButton,
  tags: ['autodocs'],
  argTypes: {
    rightIconSize: {
      control: { type: 'number', min: 16, max: 48, step: 1 },
      description: 'アイコンのサイズ',
    },
    rightIconStrokeWidth: {
      control: { type: 'number', min: 1, max: 5, step: 0.5 },
      description: 'アイコンの線の太さ',
    },
    rightIconColor: {
      control: 'color',
      description: 'アイコンの色',
    },
    rightIconHoverColor: {
      control: 'color',
      description: 'ホバー時のアイコンの色',
    },
    hoverColor: {
      control: 'color',
      description: 'ホバー時の背景色',
    },
    baseColor: {
      control: 'color',
      description: '通常時の背景色',
    },
    text: {
      control: 'text',
      description: 'ボタンのテキスト',
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
    borderWidth: {
      control: { type: 'number', min: 0, max: 4, step: 1 },
      description: 'ボーダーの太さ',
    },
    borderColor: {
      control: 'color',
      description: 'ボーダーの色',
    },
    variant: {
      control: 'radio',
      options: ['chevron', 'close'],
      description: 'ボタンのバリアント（下矢印/閉じる）',
    },
  },
}

export default meta
type Story = StoryObj<typeof MobileItemButton>

export const ChevronVariant: Story = {
  args: {
    text: '総人口',
    variant: 'chevron',
    textColor: '#1F2937',
    hoverTextColor: '#111827',
  },
}

export const CloseVariant: Story = {
  args: {
    text: '北海道',
    variant: 'close',
    textColor: '#1F2937',
    hoverTextColor: '#111827',
  },
}

export const CustomStyle: Story = {
  args: {
    text: 'カスタムスタイル',
    variant: 'chevron',
    rightIconSize: 32,
    rightIconStrokeWidth: 3,
    rightIconColor: '#1F2937',
    rightIconHoverColor: '#111827',
    hoverColor: '#F9FAFB',
    baseColor: '#F3F4F6',
    textSize: 20,
    textColor: '#1F2937',
    hoverTextColor: '#111827',
    borderWidth: 2,
    borderColor: '#9CA3AF',
  },
}
