import type { Meta, StoryObj } from "@storybook/nextjs";
import { RadioGroup } from "./RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: "text",
    },
    options: {
      control: "object",
    },
    value: {
      control: "text",
    },
    onChange: { action: "changed" },
    error: {
      control: "text",
    },
    className: {
      control: "text",
    },
    wrapperClassName: {
      control: "text",
    },
    required: {
      control: "boolean",
    },
    id: {
      control: "text",
    },
    name: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    id: "radio-group-default",
    name: "radio-group",
    label: "Select an option",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    value: "option1",
  },
};

export const Required: Story = {
  args: {
    id: "radio-group-required",
    name: "radio-group",
    label: "Select an option",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    required: true,
  },
};

export const WithError: Story = {
  args: {
    id: "radio-group-error",
    name: "radio-group",
    label: "Select an option",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    error: "Please select an option",
  },
};

export const Disabled: Story = {
  args: {
    id: "radio-group-disabled",
    name: "radio-group",
    label: "Select an option",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    disabled: true,
  },
};

export const CustomStyles: Story = {
  args: {
    id: "radio-group-custom",
    name: "radio-group",
    label: "Select an option",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    className: "border-blue-500 bg-gray-100",
    wrapperClassName: "p-4 bg-gray-50",
  },
};
