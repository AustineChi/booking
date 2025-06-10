import type { Meta, StoryObj } from "@storybook/nextjs";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: "text",
    },
    checked: {
      control: "boolean",
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

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    id: "checkbox-default",
    label: "Default Checkbox",
    checked: false,
    required: false,
  },
};

export const Checked: Story = {
  args: {
    id: "checkbox-checked",
    label: "Checked Checkbox",
    checked: true,
    required: false,
  },
};

export const Required: Story = {
  args: {
    id: "checkbox-required",
    label: "Required Checkbox",
    checked: false,
    required: true,
  },
};

export const WithError: Story = {
  args: {
    id: "checkbox-error",
    label: "Checkbox with Error",
    checked: false,
    error: "This field is required.",
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    id: "checkbox-disabled",
    label: "Disabled Checkbox",
    checked: false,
    disabled: true,
  },
};

export const CustomStyles: Story = {
  args: {
    id: "checkbox-custom",
    label: "Custom Styled Checkbox",
    checked: false,
    className: "border-blue-500 bg-gray-100",
    wrapperClassName: "p-4 bg-gray-50",
  },
};
