/**
 * More Info:
 *
 * https://nextjs.org/docs/testing#quickstart-2
 * https://github.com/vercel/next.js/blob/canary/examples/with-jest/jest.config.js
 */

// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // remove if jest.setup.js is deleted
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    //app router
    '^@/button/(.*)$': ['<rootDir>/app/components/ui/button/$1'],
    '^@/tooltip/(.*)$': ['<rootDir>/app/components/ui/tooltip/$1'],
    '^@/transition/(.*)$': ['<rootDir>/app/components/ui/transition/$1'],
    '^@/container/(.*)$': ['<rootDir>/app/components/ui/container/$1'],
    '^@/ui/(.*)$': ['<rootDir>/app/components/ui/$1'],
    '^@/section/(.*)$': ['<rootDir>/app/components/section/$1'],
    '^@/next/(.*)$': ['<rootDir>/app/components/next/$1'],
    '^@/components/(.*)$': ['<rootDir>/app/components/$1'],
    '^@/(.*)$': ['<rootDir>/app/$1'],
    //page router
    '^@collections/(.*)$': ['<rootDir>/lib/data/collections/$1'],
    '^@constAssertions/(.*)$': ['<rootDir>/lib/data/constAssertions/$1'],
    '^@options/(.*)$': ['<rootDir>/lib/data/options/$1'],
    '^@effects/(.*)$': ['<rootDir>/lib/stateLogics/effects/$1'],
    '^@hooks/(.*)$': ['<rootDir>/lib/stateLogics/hooks/$1'],
    '^@states/(.*)$': ['<rootDir>/lib/stateLogics/states/$1'],
    '^@stateLogics/(.*)$': ['<rootDir>/lib/stateLogics/$1'],
    '^@data/(.*)$': ['<rootDir>/lib/data/$1'],
    '^@lib/(.*)$': ['<rootDir>/lib/$1'],
    '^@auth/(.*)$': ['<rootDir>/components/auth/$1'],
    '^@serviceWorker/(.*)$': ['<rootDir>/components/serviceWorker/$1'],
    '^@editor/(.*)$': ['<rootDir>/components/editor/$1'],
    '^@icon/(.*)$': ['<rootDir>/components/icon/$1'],
    '^@label/(.*)$': ['<rootDir>/components/label/$1'],
    '^@layout/(.*)$': ['<rootDir>/components/layout/$1'],
    '^@user/(.*)$': ['<rootDir>/components/user/$1'],
    '^@buttons/(.*)$': ['<rootDir>/components/ui/buttons/$1'],
    '^@dropdowns/(.*)$': ['<rootDir>/components/ui/dropdowns/$1'],
    '^@inputs/(.*)$': ['<rootDir>/components/ui/inputs/$1'],
    '^@modals/(.*)$': ['<rootDir>/components/ui/modals/$1'],
    '^@tooltips/(.*)$': ['<rootDir>/components/ui/tooltips/$1'],
    '^@ui/(.*)$': ['<rootDir>/components/ui/$1'],
    '^@components/(.*)$': ['<rootDir>/components/$1'],
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
