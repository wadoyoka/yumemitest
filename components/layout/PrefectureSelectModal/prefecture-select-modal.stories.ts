import PrefectureSelectModal from '@/components/layout/PrefectureSelectModal/PrefectureSelectModal'
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
  isOpen: true,
  prefectures: mockPrefectures,
  filteredPrefectures: mockPrefectures,
  currentSelected: [1, 3],
  onClose: action('onClose'),
  onConfirm: action('onConfirm'),
  onCheckChange: action('onCheckChange'),
  onSearch: action('onSearch'),
}

const meta = {
  title: 'Components/PrefectureSelectModal',
  component: PrefectureSelectModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'モーダルの表示状態',
    },
    prefectures: {
      control: 'object',
      description: '都道府県の配列',
    },
    filteredPrefectures: {
      control: 'object',
      description: '検索でフィルタリングされた都道府県の配列',
    },
    currentSelected: {
      control: 'object',
      description: '現在選択されている都道府県のコード配列',
    },
    onClose: {
      action: 'closed',
      description: 'モーダルが閉じられた時に呼ばれる関数',
    },
    onConfirm: {
      action: 'confirmed',
      description: '選択が確定された時に呼ばれる関数',
    },
    onCheckChange: {
      action: 'checkChanged',
      description: 'チェックボックスの状態が変更された時に呼ばれる関数',
    },
    onSearch: {
      action: 'searched',
      description: '検索が実行された時に呼ばれる関数',
    },
    ref: {
      description: 'コンポーネントへの参照',
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof PrefectureSelectModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
}

export const Closed: Story = {
  args: {
    ...defaultArgs,
    isOpen: false,
  },
}

export const NoSelection: Story = {
  args: {
    ...defaultArgs,
    currentSelected: [],
  },
}

export const Filtered: Story = {
  args: {
    ...defaultArgs,
    filteredPrefectures: mockPrefectures.filter((pref) => pref.prefName.includes('県')),
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
}

export const WithInteractions: Story = {
  args: {
    ...defaultArgs,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    try {
      // モーダルが表示されるのを待つ
      await new Promise((resolve) => setTimeout(resolve, 100))

      // 検索入力のテスト
      const searchInput = await canvas.findByPlaceholderText('都道府県を検索')
      await userEvent.type(searchInput, '北海')

      // チェックボックスのテスト
      const checkboxes = await canvas.findAllByRole('checkbox')
      if (checkboxes.length > 0) {
        await userEvent.click(checkboxes[0])
      }

      // 決定ボタンのクリックテスト
      const confirmButton = await canvas.findByText('決定')
      await userEvent.click(confirmButton)

      // 閉じるボタンのクリックテスト
      const closeButton = await canvas.findByLabelText('閉じる')
      await userEvent.click(closeButton)
    } catch (error) {
      console.error('Error in PrefectureSelectModal interactions:', error)
    }
  },
}
