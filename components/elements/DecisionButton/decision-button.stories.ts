import type { Meta, StoryObj } from "@storybook/react"
import DecisionButton from "./DecisionButton"

const meta: Meta<typeof DecisionButton> = {
  title: "Components/DecisionButton",
  component: DecisionButton,
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: { type: "number", min: 120, max: 480, step: 10 },
      description: "ボタンの幅",
    },
    height: {
      control: { type: "number", min: 32, max: 96, step: 4 },
      description: "ボタンの高さ",
    },
    borderColor: {
      control: "color",
      description: "ボーダーの色",
    },
    borderWidth: {
      control: { type: "number", min: 1, max: 4, step: 1 },
      description: "ボーダーの太さ",
    },
    baseColor: {
      control: "color",
      description: "通常時の背景色",
    },
    hoverColor: {
      control: "color",
      description: "ホバー時の背景色",
    },
    text: {
      control: "text",
      description: "ボタンのテキスト",
    },
    textColor: {
      control: "color",
      description: "テキストの色",
    },
    hoverTextColor: {
      control: "color",
      description: "ホバー時のテキストの色",
    },
    submitText: {
      control: "text",
      description: "送信中のテキスト",
    },
  },
}

export default meta
type Story = StoryObj<typeof DecisionButton>

export const Default: Story = {
  args: {
    width: 240,
    height: 48,
    borderColor: "#3B82F6",
    borderWidth: 2,
    baseColor: "#3B82F6",
    hoverColor: "#FFFFFF",
    text: "決定",
    textColor: "#FFFFFF",
    hoverTextColor: "#3B82F6",
    submitText: "送信中",
  },
}

export const CustomStyle: Story = {
  args: {
    width: 320,
    height: 56,
    borderColor: "#2563EB",
    borderWidth: 2,
    baseColor: "#2563EB",
    hoverColor: "#FFFFFF",
    text: "カスタム決定",
    textColor: "#FFFFFF",
    hoverTextColor: "#2563EB",
    submitText: "処理中...",
  },
}

// Loading state simulation
export const Loading: Story = {
  args: {
    ...Default.args,
    onClick: async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000))
    },
  },
}

