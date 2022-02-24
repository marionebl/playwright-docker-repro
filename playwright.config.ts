import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ['test.ts'],
  use: {
    headless: true,
  },
};

export default config;
