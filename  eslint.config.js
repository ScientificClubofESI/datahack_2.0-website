import nextjs from '@next/eslint-plugin-next'

export default [
  {
    plugins: {
      '@next/next': nextjs
    },
    extends: [
      'eslint:recommended',
      'plugin:@next/next/recommended'
    ]
  }
]