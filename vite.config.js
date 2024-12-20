import path from 'path';

const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env;

export default {
  root: 'src/',
  publicDir: '../static/',
  base: './',
  server: {
    host: true,
    open: !isCodeSandbox, // Open if it's not a CodeSandbox
  },
  resolve: {
    alias: {
      'three': path.resolve('node_modules/three'), // Just point to the 'three' module
    },
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
  },
};
