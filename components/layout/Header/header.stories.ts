import type { Meta, StoryObj } from '@storybook/react'
import Header from './Header'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'デスクトップ表示時のテキスト',
    },
    mobileText: {
      control: 'text',
      description: 'モバイル表示時のテキスト',
    },
    textSize: {
      control: { type: 'number', min: 12, max: 48, step: 1 },
      description: 'テキストのサイズ',
    },
    height: {
      control: { type: 'number', min: 40, max: 120, step: 1 },
      description: 'ヘッダーの高さ',
    },
    color: {
      control: 'color',
      description: '背景色',
    },
    textColor: {
      control: 'color',
      description: 'テキストの色',
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'レスポンシブ対応のヘッダーコンポーネント。画面サイズに応じてレイアウトが変化します。',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Header>

export const Desktop: Story = {
  args: {
    text: 'YUMEMI_TEST',
    mobileText: 'YUMEMI',
    textSize: 24,
    height: 60,
    color: '#3DA9FC',
    textColor: '#FFFFFF',
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
}

export const Mobile: Story = {
  args: {
    text: 'YUMEMI_TEST',
    mobileText: 'YUMEMI',
    textSize: 24,
    height: 60,
    color: '#3DA9FC',
    textColor: '#FFFFFF',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}

export const CustomStyle: Story = {
  args: {
    text: 'カスタムヘッダー',
    mobileText: 'カスタム',
    textSize: 32,
    height: 80,
    color: '#2B2D42',
    textColor: '#EDF2F4',
  },
}

export const LongText: Story = {
  args: {
    text: 'とても長いヘッダーテキストの例',
    mobileText: '長いテキスト',
    textSize: 24,
    height: 60,
    color: '#3DA9FC',
    textColor: '#FFFFFF',
  },
}
