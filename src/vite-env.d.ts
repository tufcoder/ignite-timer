/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LOCAL_STORAGE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
