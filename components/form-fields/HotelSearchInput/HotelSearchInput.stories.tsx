import type { Meta, StoryObj } from "@storybook/nextjs";
import { HotelSearchInput } from "./HotelSearchInput";

const meta: Meta<typeof HotelSearchInput> = {
  title: "Components/HotelSearchInput",
  component: HotelSearchInput,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: {
      control: "text",
    },
    onChange: { action: "changed" },
    className: {
      control: "text",
    },
    wrapperClassName: {
      control: "text",
    },
    id: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    instruction: {
      control: "text",
    },
    error: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof HotelSearchInput>;

export const Default: Story = {
  args: {
    id: "hotel-search-default",
    placeholder: "Search for a hotel",
  },
};

export const WithValue: Story = {
  args: {
    id: "hotel-search-value",
    placeholder: "Search for a hotel",
    value: "Hotel Sunshine",
  },
};

export const WithInstruction: Story = {
  args: {
    id: "hotel-search-instruction",
    placeholder: "Search for a hotel",
    instruction: "Enter the name of the hotel or city",
  },
};

export const WithError: Story = {
  args: {
    id: "hotel-search-error",
    placeholder: "Search for a hotel",
    error: "Please enter a valid hotel name",
  },
};

export const CustomStyles: Story = {
  args: {
    id: "hotel-search-custom",
    placeholder: "Search for a hotel",
    className: "border-blue-500 bg-gray-100",
    wrapperClassName: "p-4 bg-gray-50",
  },
};

export const Disabled: Story = {
  args: {
    id: "hotel-search-disabled",
    placeholder: "Search for a hotel",
    disabled: true,
  },
};
