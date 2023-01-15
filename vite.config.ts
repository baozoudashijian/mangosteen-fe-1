import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { svgsprite } from './plugins/svgsprite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgsprite(),
    vueJsx({
      transformOn: true,
      mergeProps: true
    })
  ]
})
