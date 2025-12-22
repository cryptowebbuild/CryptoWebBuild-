// Removed broken reference to vite/client
// /// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly API_KEY: string;
  [key: string]: any;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Augment NodeJS namespace to type process.env.API_KEY
declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string;
    [key: string]: string | undefined;
  }
}
