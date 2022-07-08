import vue from '@vitejs/plugin-vue';

export default {
  plugins: [
    vue(),

  ],
  base: '',
  build: {
    // assetsInlineLimit: 0,
    emptyOutDir: true,
    // rollupOptions: {
    //   treeshake: false,
    // },
  },
  resolve: {
    alias: {
      '@': './src'
    }
  },
  server: {
    host: true,
  },

};
