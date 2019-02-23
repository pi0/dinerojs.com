<template>
  <content-page>
    <div v-if="isRefPage">
      <h1>{{ content.title }}</h1>
      <pre><span
  class="block mb-3 text-xxs uppercase font-sans text-grey-dark font-semibold tracking-wide"
>Method signature</span><code
  class="block"
>{{ content.signature }} → {{ content.response_type }}</code></pre>
      <div v-html="highlightedMarkdown(content.description)"/>
      <div :key="id" v-for="(example, id) in content.examples">
        <h3>{{ example.title }}</h3>
        <pre v-html="javascriptHighlight(example.code)"/>
      </div>
    </div>
    <div v-else v-html="highlightedMarkdown(content)"/>
  </content-page>
</template>

<script>
import axios from 'axios'
import { highlightedMarkdown, javascriptHighlight } from '@/scripts/utils.js'

import ContentPage from '@/components/ContentPage'

export default {
  async asyncData({ route, store, error }) {
    let res = null
    try {
      res = await axios.get(
        `${store.state.apiUrl}${store.state.locale}/api/${route.params
          .pathMatch || ''}`
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
    return { highlightedMarkdown, javascriptHighlight }
  },
  computed: {
    isRefPage() {
      return typeof this.content === 'object'
    }
  }
}
</script>
