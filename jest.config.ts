import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coverageReporters: ['text'],
  modulePathIgnorePatterns: ['<rootDir>/e2e/', '<rootDir>/__tests__/setup/'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-vector-icons)/)',
  ],
  setupFiles: ['<rootDir>/__tests__/setup/jest.setup.ts'],
};

export default config;
