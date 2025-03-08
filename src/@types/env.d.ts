interface ImportMetaEnv {
  readonly VITE_BASENAME: string
  readonly VITE_LOCAL_STORAGE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
