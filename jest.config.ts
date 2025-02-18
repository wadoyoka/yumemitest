import type { Config } from 'jest'
import nextJest from 'next/jest.js'
import { resolve } from 'path'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom',
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': resolve(__dirname, './$1'),
  },
}

export default createJestConfig(config)
