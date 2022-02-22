import type { Plugin } from 'vite'
import path from 'path'

export default (rootDir: string): Plugin => {
  const _rootDir = rootDir.replace(/\\/g, '/')

  return {
    name: 'vite:filename-plugin',
    transform (code, id) {
      if (id.startsWith(_rootDir) && /\.(ts|js|vue)$/.test(id)) {
        const filepath = id.substring(_rootDir.length)
        if (filepath.startsWith('/node_modules/')) return undefined

        const filename = path.basename(filepath)
        const dirname = path.dirname(filepath)
        return code
          .replace(/\bimport.meta.dirname\b/g, `'${dirname}'`)
          .replace(/\bimport.meta.filename\b/g, `'${filename}'`)
          .replace(/\bimport.meta.filepath\b/g, `'${filepath}'`)
      }

      return undefined
    }
  }
}