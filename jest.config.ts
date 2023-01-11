import type {Config} from 'jest'

const config: Config = {
  verbose: true,
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coverageReporters: ['text'],
  modulePathIgnorePatterns: ['<rootDir>/e2e/'],
}

export default config
