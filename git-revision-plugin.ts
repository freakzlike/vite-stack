import { execSync } from 'child_process'
import type { Plugin } from 'vite'

const removeEmptyLines = (v: string): string => v.replace(/[\s\r\n]+$/, '')

export default (): Plugin => {
  return {
    name: 'vite:git-revision',
    config: (config) => {
      if (!config.define) {
        config.define = {}
      }
      const commitHash = removeEmptyLines(execSync([
        'git',
        'rev-parse HEAD'
      ].join(' ')).toString())

      config.define.COMMIT_HASH = `'${commitHash}'`
    }
  }
}