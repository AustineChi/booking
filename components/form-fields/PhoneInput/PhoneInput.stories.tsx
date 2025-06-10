import type { Meta, StoryObj } from "@storybook/nextjs";
import { PhoneInput } from "./PhoneInput";

const meta: Meta<typeof PhoneInput> = {
  title: "Components/PhoneInput",
  component: PhoneInput,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: "text",
    },
    error: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    className: {
      control: "text",
    },
    wrapperClassName: {
      control: "text",
    },
    initialValue: {
      control: "text",
    },
    initialCountryCode: {
      control: "select",
      options: ["US", "GB", "CA", "AU"],
    },
    onChange: { action: "changed" },
    onCountryChange: { action: "countryChanged" },
    required: {
      control: "boolean",
    },
    id: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof PhoneInput>;

export const Default: Story = {
  args: {
    id: "phone-input-default",
    label: "Phone Number",
    placeholder: "Enter phone number",
  },
};

export const Required: Story = {
  args: {
    id: "phone-input-required",
    label: "Phone Number",
    placeholder: "Enter phone number",
    required: true,
  },
};

export const WithError: Story = {
  args: {
    id: "phone-input-error",
    label: "Phone Number",
    placeholder: "Enter phone number",
    error: "Invalid phone number",
  },
};

export const WithInitialValue: Story = {
  args: {
    id: "phone-input-initial",
    label: "Phone Number",
    placeholder: "Enter phone number",
    initialValue: "1234567890",
    initialCountryCode: "US",
  },
};

export const CustomStyles: Story = {
  args: {
    id: "phone-input-custom",
    label: "Phone Number",
    placeholder: "Enter phone number",
    className: "bg-gray-100",
    wrapperClassName: "p-4 bg-gray-50",
  },
};

export const Disabled: Story = {
  args: {
    id: "phone-input-disabled",
    label: "Phone Number",
    placeholder: "Enter phone number",
    disabled: true,
  },
};
