import type { Meta, StoryObj } from "@storybook/nextjs";
import { TextareaInput } from "./TextareaInput";

const meta: Meta<typeof TextareaInput> = {
  title: "Components/TextareaInput",
  component: TextareaInput,
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
    id: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    error: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextareaInput>;

export const Default: Story = {
  args: {
    id: "textarea-input-default",
    placeholder: "Enter text here",
  },
};

export const WithValue: Story = {
  args: {
    id: "textarea-input-value",
    placeholder: "Enter text here",
    value: "Sample text content",
  },
};

export const Required: Story = {
  args: {
    id: "textarea-input-required",
    placeholder: "Enter text here",
    required: true,
  },
};

export const WithError: Story = {
  args: {
    id: "textarea-input-error",
    placeholder: "Enter text here",
    error: "This field is required.",
  },
};

export const Disabled: Story = {
  args: {
    id: "textarea-input-disabled",
    placeholder: "Enter text here",
    disabled: true,
  },
};

export const CustomStyles: Story = {
  args: {
    id: "textarea-input-custom",
    placeholder: "Enter text here",
    className: "border-blue-500 bg-gray-100",
  },
};