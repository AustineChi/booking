import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  stories: [
    // '../components/ui/**/*.mdx',
    '../components/form-fields/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    // Removed '@storybook/addon-vitest' since you're using Jest
    // Optionally add '@storybook/addon-jest' if you want Jest integration
  ],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
  staticDirs: ['../public'],
};

export default config;