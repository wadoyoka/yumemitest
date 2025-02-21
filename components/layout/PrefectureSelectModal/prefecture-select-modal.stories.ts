import type { Prefecture } from '@/types/Prefecture/Prefecture'
import type { Meta, StoryObj } from '@storybook/react'
import PrefectureSelectModal from './PrefectureSelectModal'

// サンプルデータ
const PREFECTURES: Prefecture[] = [
  { prefCode: 1, prefName: '北海道' },
  { prefCode: 2, prefName: '青森県' },
  { prefCode: 3, prefName: '岩手県' },
  { prefCode: 4, prefName: '宮城県' },
  { prefCode: 5, prefName: '秋田県' },
  { prefCode: 6, prefName: '山形県' },
  { prefCode: 7, prefName: '福島県' },
  { prefCode: 8, prefName: '茨城県' },
  { prefCode: 9, prefName: '栃木県' },
  { prefCode: 10, prefName: '群馬県' },
  { prefCode: 11, prefName: '埼玉県' },
  { prefCode: 12, prefName: '千葉県' },
  { prefCode: 13, prefName: '東京都' },
  { prefCode: 14, prefName: '神奈川県' },
]

const meta = {
  title: 'Components/PrefectureSelectModal',
  component: PrefectureSelectModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '都道府県を選択するためのモーダルコンポーネント。チェックボックスで複数選択が可能です。',
      },
    },
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'モーダルの表示/非表示',
    },
    onClose: {
      action: 'closed',
      description: 'モーダルを閉じる際のコールバック',
    },
    onConfirm: {
      action: 'confirmed',
      description: '選択を確定する際のコールバック',
    },
    onCheckChange: {
      action: 'checkChanged',
      description: 'チェックボックスの状態が変更された際のコールバック',
    },
    prefectures: {
      control: 'object',
      description: '選択可能な都道府県の配列',
    },
    currentSelected: {
      control: 'object',
      description: '現在選択されている都道府県コードの配列',
    },
  },
} satisfies Meta<typeof PrefectureSelectModal>

export default meta
type Story = StoryObj<typeof meta>

// デフォルトの props を作成
const defaultProps = {
  onClose: () => console.log('Modal closed'),
  onConfirm: (selectedPrefCodes: number[]) => console.log('Confirmed:', selectedPrefCodes),
  onCheckChange: (prefCode: number, indexes: number[]) => console.log('Check changed:', prefCode, indexes),
}

export const Default: Story = {
  args: {
    ...defaultProps,
    isOpen: true,
    prefectures: PREFECTURES,
    currentSelected: [1, 13], // 北海道と東京都
  },
}

export const Empty: Story = {
  args: {
    ...defaultProps,
    isOpen: true,
    prefectures: PREFECTURES,
    currentSelected: [],
  },
}

export const ManySelected: Story = {
  args: {
    ...defaultProps,
    isOpen: true,
    prefectures: PREFECTURES,
    currentSelected: [1, 2, 3, 4, 5], // 最初の5県を選択
  },
}

export const Closed: Story = {
  args: {
    ...defaultProps,
    isOpen: false,
    prefectures: PREFECTURES,
    currentSelected: [1, 13],
  },
}

// モバイル表示のストーリー
export const Mobile: Story = {
  args: {
    ...defaultProps,
    isOpen: true,
    prefectures: PREFECTURES,
    currentSelected: [1, 13],
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}
