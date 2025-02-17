import type { Meta, StoryObj } from "@storybook/react"
import PlusButton from "./PlusButton"

const meta: Meta<typeof PlusButton> = {
  title: "Components/PlusButton",
  component: PlusButton,
  tags: ["autodocs"],
  argTypes: {
    plusSize: {
      control: { type: "number", min: 16, max: 48, step: 1 },
      description: "プラスアイコンのサイズ",
    },
    plusStrokeWidth: {
      control: { type: "number", min: 1, max: 5, step: 0.5 },
      description: "プラスアイコンの線の太さ",
    },
    plusColor: {
      control: "color",
      description: "プラスアイコンの色",
    },
    plusHoverColor: {
      control: "color",
      description: "ホバー時のプラスアイコンの色",
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
type Story = StoryObj<typeof PlusButton>

export const Default: Story = {
  args: {
    plusSize: 24,
    plusStrokeWidth: 2,
    plusColor: "#6B7280",
    plusHoverColor: "#374151",
    baseColor: "#E5E7EB",
    hoverColor: "#F3F4F6",
  },
}

export const Large: Story = {
  args: {
    plusSize: 32,
    plusStrokeWidth: 3,
    plusColor: "#6B7280",
    plusHoverColor: "#374151",
    baseColor: "#E5E7EB",
    hoverColor: "#F3F4F6",
  },
}

export const CustomColors: Story = {
  args: {
    plusSize: 24,
    plusStrokeWidth: 2,
    plusColor: "#1F2937",
    plusHoverColor: "#111827",
    baseColor: "#F3F4F6",
    hoverColor: "#E5E7EB",
  },
}

