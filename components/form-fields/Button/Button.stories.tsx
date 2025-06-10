import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost"],
    },
    size: {
      control: "select",
      options: ["default", "icon"],
    },
    className: {
      control: "text",
    },
    children: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "default",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "default",
    children: "Secondary Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "default",
    children: "Ghost Button",
  },
};

export const Icon: Story = {
  args: {
    variant: "primary",
    size: "icon",
    children: "★",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    size: "default",
    children: "Disabled Button",
    disabled: true,
  },
};

export const CustomClass: Story = {
  args: {
    variant: "primary",
    size: "default",
    children: "Custom Button",
    className: "border-2 border-red-500",
  },
};
