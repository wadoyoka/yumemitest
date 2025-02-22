import SearchPrefecture from '@/components/layout/SerchPrefecturre/SearchPrefecture'
import type { Prefecture } from '@/types/Prefecture/Prefecture'
import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/test'

const mockPrefectures: Prefecture[] = [
  { prefCode: 1, prefName: '北海道' },
  { prefCode: 2, prefName: '青森県' },
  { prefCode: 3, prefName: '岩手県' },
  { prefCode: 4, prefName: '宮城県' },
  { prefCode: 5, prefName: '秋田県' },
]

// デフォルトのprops
const defaultArgs = {
  prefectures: mockPrefectures,
  onSearch: action('onSearch'),
}

const meta = {
  title: 'Components/SearchPrefecture',
  component: SearchPrefecture,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    prefectures: {
      control: 'object',
      description: '都道府県の配列',
    },
    onSearch: {
      action: 'searched',
      description: '検索結果が変更された時に呼ばれる関数',
    },
    ref: {
      description: 'コンポーネントへの参照',
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SearchPrefecture>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
}

export const Empty: Story = {
  args: {
    ...defaultArgs,
    prefectures: [],
  },
}

export const Mobile: Story = {
  args: {
    ...defaultArgs,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
}

export const WithInteractions: Story = {
  args: {
    ...defaultArgs,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    try {
      // 検索入力フィールドの取得と入力
      const searchInput = await canvas.findByPlaceholderText('都道府県を検索')
      await userEvent.type(searchInput, '北海')

      // 入力のクリア
      await userEvent.clear(searchInput)
    } catch (error) {
      console.error('Error in SearchPrefecture interactions:', error)
    }
  },
}
