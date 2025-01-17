/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_MAINTENANCE_MODE: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}