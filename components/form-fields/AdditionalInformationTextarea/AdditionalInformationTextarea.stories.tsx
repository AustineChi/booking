import type { Meta, StoryObj } from "@storybook/nextjs";
import { AdditionalInformationTextarea } from "./AdditionalInformationTextarea";

const meta: Meta<typeof AdditionalInformationTextarea> = {
  title: "Components/AdditionalInformationTextarea",
  component: AdditionalInformationTextarea,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: "text",
    },
    instructions: {
      control: "text",
    },
    subInstructions: {
      control: "text",
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
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof AdditionalInformationTextarea>;

export const Default: Story = {
  args: {
    id: "textarea-default",
    title: "Comments",
    placeholder: "Enter your comments",
    required: false,
  },
};

export const Required: Story = {
  args: {
    id: "textarea-required",
    title: "Feedback",
    placeholder: "Enter your feedback",
    required: true,
  },
};

export const WithInstructions: Story = {
  args: {
    id: "textarea-instructions",
    title: "Additional Information",
    placeholder: "Enter additional details",
    instructions: "Please provide any special requests or requirements.",
    subInstructions:
      "Include details such as dietary preferences or accessibility needs.",
    required: false,
  },
};

export const WithError: Story = {
  args: {
    id: "textarea-error",
    title: "Comments",
    placeholder: "Enter your comments",
    error: "This field is required.",
    required: true,
  },
};

export const WithValue: Story = {
  args: {
    id: "textarea-value",
    title: "Notes",
    placeholder: "Enter your notes",
    value: "This is a sample note.",
    required: false,
  },
};

export const CustomStyles: Story = {
  args: {
    id: "textarea-custom",
    title: "Comments",
    placeholder: "Enter your comments",
    className: "border-blue-500 bg-gray-100",
    wrapperClassName: "p-4 bg-gray-50",
    required: false,
  },
};

export const Disabled: Story = {
  args: {
    id: "textarea-disabled",
    title: "Comments",
    placeholder: "Enter your comments",
    disabled: true,
    required: false,
  },
};