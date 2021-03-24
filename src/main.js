import DefaultLayout from '~/layouts/Default.vue'
import VueGtag from 'vue-gtag'

import 'tailwindcss/tailwind.css'

export default function(Vue) {
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueGtag, {
    config: { id: 'G-T6132Z1GPP' },
  })
}
