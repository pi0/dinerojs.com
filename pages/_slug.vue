<template>
  <content-page v-html="highlightedMarkdown(content)"/>
</template>

<script>
import axios from 'axios'
import { highlightedMarkdown } from '@/scripts/utils.js'

import ContentPage from '@/components/ContentPage'

export default {
  async asyncData({ route, store, error }) {
    let res = null
    try {
      res = await axios.get(
        `${store.state.apiUrl}${store.state.locale}/${route.params.slug}`
      )
    } catch (err) {
      throw err
    }
    return {
      content: res.data.data
    }
  },
  components: { ContentPage },
  data() {
    return { highlightedMarkdown }
  }
}
</script>
