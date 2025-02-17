import type { PopulationData } from '@/types/Population/Population'
import type { Meta, StoryObj } from '@storybook/react'
import PopulationGraph from './PopulationGraph'

const mockData: PopulationData[] = [
  { year: 1960, 北海道: 2500, 青森県: 2000 },
  { year: 1980, 北海道: 1500, 青森県: 2500 },
  { year: 2000, 北海道: 9000, 青森県: 2000 },
  { year: 2020, 北海道: 4000, 青森県: 2500 },
  { year: 2040, 北海道: 5000, 青森県: 2000 },
  { year: 2045, 北海道: 4000, 青森県: 2500 },
]

const meta: Meta<typeof PopulationGraph> = {
  title: 'Components/PopulationGraph',
  component: PopulationGraph,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '都道府県の人口推移を表示するグラフコンポーネント',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof PopulationGraph>

export const Default: Story = {
  args: {
    data: mockData,
  },
}

export const SinglePrefecture: Story = {
  args: {
    data: mockData.map((item) => ({
      year: item.year,
      北海道: item['北海道'],
    })),
  },
}

export const MultiplePrefectures: Story = {
  args: {
    data: [
      { year: 1960, 北海道: 2500, 青森県: 2000, 岩手県: 1800 },
      { year: 1980, 北海道: 1500, 青森県: 2500, 岩手県: 2200 },
      { year: 2000, 北海道: 9000, 青森県: 2000, 岩手県: 2400 },
      { year: 2020, 北海道: 4000, 青森県: 2500, 岩手県: 2100 },
      { year: 2040, 北海道: 5000, 青森県: 2000, 岩手県: 1900 },
      { year: 2045, 北海道: 4000, 青森県: 2500, 岩手県: 1700 },
    ],
  },
}
