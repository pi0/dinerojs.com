<template>
  <content-page>
    <div v-html="highlightedMarkdown(content)" />
  </content-page>
</template>

<script>
import axios from 'axios'
import { highlightedMarkdown } from '@/scripts/utils.js'

import ContentPage from '@/components/ContentPage'

export default {
  components: { ContentPage },
  data() {
    return { highlightedMarkdown }
  },
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
  }
}
</script>
