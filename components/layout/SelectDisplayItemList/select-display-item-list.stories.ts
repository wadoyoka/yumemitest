import SelectDisplayItemList from '@/components/layout/SelectDisplayItemList/SelectDisplayItemList'
import type { Meta, StoryObj } from '@storybook/react'

const populationTypes = ['総人口', '年少人口', '生産年齢人口', '老年人口']

const meta: Meta<typeof SelectDisplayItemList> = {
  title: 'Components/SelectDisplayItemList',
  component: SelectDisplayItemList,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: '表示する項目の配列',
    },
    selectedIndex: {
      control: { type: 'number', min: 0 },
      description: '選択されている項目のインデックス',
    },
    onSelect: {
      action: 'selected',
      description: '項目が選択された時のコールバック',
    },
    textSize: {
      control: { type: 'number', min: 12, max: 32, step: 1 },
      description: 'テキストのサイズ',
    },
    textColor: {
      control: 'color',
      description: 'テキストの色',
    },
    baseColor: {
      control: 'color',
      description: '通常時の背景色',
    },
    borderWidth: {
      control: { type: 'number', min: 0, max: 4, step: 1 },
      description: 'ボーダーの太さ',
    },
    borderColor: {
      control: 'color',
      description: 'ボーダーの色',
    },
  },
}

export default meta
type Story = StoryObj<typeof SelectDisplayItemList>

export const Default: Story = {
  args: {
    items: populationTypes,
    selectedIndex: 0,
    onSelect: (index: number) => console.log('Selected index:', index),
    textSize: 16,
    textColor: '#1F2937',
    baseColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
}

export const CustomStyle: Story = {
  args: {
    items: populationTypes,
    selectedIndex: 0,
    onSelect: (index: number) => console.log('Selected index:', index),
    textSize: 20,
    textColor: '#374151',
    baseColor: '#F3F4F6',
    borderWidth: 2,
    borderColor: '#9CA3AF',
  },
}

export const WithSelection: Story = {
  args: {
    ...Default.args,
    selectedIndex: 2,
  },
}
