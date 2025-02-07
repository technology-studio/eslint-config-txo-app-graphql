/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2024-02-07T15:21:12+01:00
 * @Copyright: Technology Studio
**/

import {
  stylisticConfig,
  typescriptConfigList,
  typescriptEslintConfig,
  jestConfig,
} from 'eslint-config-txo-typescript'

const defaultConfigList = typescriptEslintConfig(
  {
    files: ['**/*.js', '**/*.ts'],
    extends: [
      // eslint-disable-next-line @typescript-eslint/no-deprecated -- remove when migrated to prettier
      stylisticConfig,
      ...typescriptConfigList,
    ],
  },
  {
    files: ['seed/**/*.ts', 'seed/**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './seed/tsconfig.json',
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './seed/tsconfig.json',
        },
      },
    },
  },
  {
    files: ['app/**/*.ts', 'app/**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './app/tsconfig.json',
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './app/tsconfig.json',
        },
      },
    },
  },
)

const jestConfigList = typescriptEslintConfig(
  {
    files: ['__tests__/**/*.ts'],
    extends: [
      jestConfig,
    ],
  },

)

export const configList = typescriptEslintConfig(
  ...defaultConfigList,
  ...jestConfigList,
  {
    ignores: [
      '.releaserc.js',
      'cli.js',
      'commitlint.config.js',
      'coverage/**/*',
      'eslint-ci.config.js',
      'eslint.config.js',
      'jest.config.js',
      'lib/**/*',
      'node_modules',
      'release.config.js',
      '__tests__/GraphqlCodeGen/index.ts',
      'webpack.config.js',
      '.serverless/',
      '.warmup/',
      '.webpack/',
    ],
  },
)
