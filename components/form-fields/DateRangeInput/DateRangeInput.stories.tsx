import type { Meta, StoryObj } from "@storybook/nextjs";
import { DateRangeInput } from "./DateRangeInput";

const meta: Meta<typeof DateRangeInput> = {
  title: "Components/DateRangeInput",
  component: DateRangeInput,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: {
      control: "object",
      description: "Selected check-in and check-out dates",
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
    resetLabel: {
      control: "text",
    },
    doneLabel: {
      control: "text",
    },
    error: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof DateRangeInput>;

export const Default: Story = {
  args: {
    id: "date-range-default",
    placeholder: "Select dates",
    resetLabel: "Reset",
    doneLabel: "Done",
  },
};

export const WithSelectedDates: Story = {
  args: {
    id: "date-range-selected",
    placeholder: "Select dates",
    resetLabel: "Reset",
    doneLabel: "Done",
    value: {
      checkIn: new Date("2025-06-10"),
      checkOut: new Date("2025-06-12"),
    },
  },
};

export const WithError: Story = {
  args: {
    id: "date-range-error",
    placeholder: "Select dates",
    resetLabel: "Reset",
    doneLabel: "Done",
    error: "Please select valid dates",
  },
};

export const CustomStyles: Story = {
  args: {
    id: "date-range-custom",
    placeholder: "Select dates",
    resetLabel: "Reset",
    doneLabel: "Done",
    className: "border-blue-500 bg-gray-100",
    wrapperClassName: "p-4 bg-gray-50",
  },
};

export const WithoutPlaceholder: Story = {
  args: {
    id: "date-range-no-placeholder",
    resetLabel: "Reset",
    doneLabel: "Done",
  },
};
