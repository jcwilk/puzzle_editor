// vite.config.js
export default {
  root: 'src',
  build: {
    outDir: '../dist', // Output directory for build
  },
  base: '/vite-github-pages-template/', // Replace with your repository name
  test: {
    globals: true,
    environment: 'jsdom', // if you're doing any DOM testing
    reporters: ['junit'],
    outputFile: '../tests.xml',
  },
};
