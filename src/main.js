import DefaultLayout from '~/layouts/Default.vue'
import VueGtag from 'vue-gtag'

import 'tailwindcss/tailwind.css'

export default function(Vue) {
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueGtag, {
    config: { id: 'G-T6132Z1GPP' },
  })

  Vue.filter('pluralize', (word, amount) => (amount > 1 || amount == 0 ? `${word}s` : word))
}
