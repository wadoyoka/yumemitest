import type { Meta, StoryObj } from "@storybook/react"
import SelectDisplayItem from "./SelectDisplayItem"

const meta: Meta<typeof SelectDisplayItem> = {
  title: "Components/SelectDisplayItem",
  component: SelectDisplayItem,
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      description: "表示するテキスト",
    },
    textSize: {
      control: { type: "number", min: 12, max: 32, step: 1 },
      description: "テキストのサイズ",
    },
    textColor: {
      control: "color",
      description: "テキストの色",
    },
    hoverTextColor: {
      control: "color",
      description: "ホバー時のテキストの色",
    },
    baseColor: {
      control: "color",
      description: "通常時の背景色",
    },
    hoverColor: {
      control: "color",
      description: "ホバー時の背景色",
    },
  },
}

export default meta
type Story = StoryObj<typeof SelectDisplayItem>

export const Default: Story = {
  args: {
    text: "総人口",
    textSize: 16,
    textColor: "#1F2937",
    hoverTextColor: "#FFFFFF",
    baseColor: "#FFFFFF",
    hoverColor: "#3B82F6",
  },
}

export const Hovered: Story = {
  args: {
    text: "年少人口",
    textSize: 16,
    textColor: "#FFFFFF",
    hoverTextColor: "#FFFFFF",
    baseColor: "#3B82F6",
    hoverColor: "#3B82F6",
  },
}

export const CustomStyle: Story = {
  args: {
    text: "カスタムスタイル",
    textSize: 20,
    textColor: "#374151",
    hoverTextColor: "#F3F4F6",
    baseColor: "#F3F4F6",
    hoverColor: "#2563EB",
  },
}

