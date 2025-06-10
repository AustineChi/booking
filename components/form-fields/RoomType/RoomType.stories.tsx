import type { Meta, StoryObj } from "@storybook/nextjs";
import { RoomType } from "./RoomType";

const meta: Meta<typeof RoomType> = {
  title: "Components/RoomType",
  component: RoomType,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: "text",
    },
    subLabel: {
      control: "text",
    },
    value: {
      control: "number",
    },
    onDecrement: { action: "decremented" },
    onIncrement: { action: "incremented" },
    className: {
      control: "text",
    },
    id: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof RoomType>;

export const Default: Story = {
  args: {
    id: "room-type-default",
    label: "Single Occupancy",
    subLabel: "1 person",
    value: 0,
  },
};

export const WithValue: Story = {
  args: {
    id: "room-type-value",
    label: "Double Occupancy",
    subLabel: "2 persons",
    value: 2,
  },
};

export const CustomStyles: Story = {
  args: {
    id: "room-type-custom",
    label: "Twin",
    subLabel: "2 beds",
    value: 1,
    className: "border-blue-500 bg-gray-100",
  },
};

export const ZeroValue: Story = {
  args: {
    id: "room-type-zero",
    label: "Single Occupancy",
    subLabel: "1 person",
    value: 0,
  },
};

export const HighValue: Story = {
  args: {
    id: "room-type-high",
    label: "Suite",
    subLabel: "Luxury room",
    value: 5,
  },
};