<template>
  <content-page>
    <div v-html="markdown(content)"/>
  </content-page>
</template>

<script>
import axios from 'axios'
import markdown from '@/utils/markdown.js'

import ContentPage from '@/components/ContentPage'

export default {
  components: { ContentPage },
  data() {
    return { markdown }
  },
  async asyncData({ route, store, error }) {
    let res = null
    try {
      res = await axios.get(
        `${store.state.apiUrl}${store.state.locale}${route.path || ''}`
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
