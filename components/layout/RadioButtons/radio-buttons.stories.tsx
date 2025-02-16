'use client'

import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import RadioButtons from './RadioButtons'

const populationTypes = ['総人口', '年少人口', '生産年齢人口', '老年人口']

const meta: Meta<typeof RadioButtons> = {
  title: 'Components/RadioButtons',
  component: RadioButtons,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'number', min: 16, max: 64, step: 1 },
      description: 'ラジオボタンのサイズ',
    },
    radioButtonStrokeWidth: {
      control: { type: 'number', min: 1, max: 5, step: 0.5 },
      description: 'ラジオボタンの線の太さ',
    },
    textSize: {
      control: { type: 'number', min: 12, max: 32, step: 1 },
      description: 'テキストのサイズ',
    },
    textDatas: {
      control: 'object',
      description: '選択肢のテキスト配列',
    },
    selectIndex: {
      control: 'number',
      description: '選択されているインデックス',
    },
  },
  args: {
    textDatas: populationTypes,
  },
  parameters: {
    docs: {
      description: {
        component: 'ラジオボタングループコンポーネント。複数の選択肢から1つのみを選択できます。',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof RadioButtons>

// デフォルトのストーリー
export const Default: Story = {
  args: {
    size: 24,
    radioButtonStrokeWidth: 2,
    textSize: 16,
    selectIndex: 0,
  },
}

// 大きいサイズのストーリー
export const Large: Story = {
  args: {
    size: 32,
    radioButtonStrokeWidth: 3,
    textSize: 20,
    selectIndex: 1,
  },
}

// 小さいサイズのストーリー
export const Small: Story = {
  args: {
    size: 16,
    radioButtonStrokeWidth: 1,
    textSize: 12,
    selectIndex: 2,
  },
}

// インタラクティブなストーリー
const InteractiveRadioButtons = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <RadioButtons
      size={24}
      radioButtonStrokeWidth={2}
      textSize={16}
      textDatas={populationTypes}
      selectIndex={selectedIndex}
      onSelectChange={setSelectedIndex}
    />
  )
}

export const Interactive: Story = {
  render: () => <InteractiveRadioButtons />,
}
