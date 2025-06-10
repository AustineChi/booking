import { render } from "@testing-library/react";
import { ThemeProvider } from "@/context/ThemeContext";
import React from "react";

export const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

export const withTheme = (Story: React.ComponentType) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
);
