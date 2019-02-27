<template>
  <content-page>
    <div v-if="isRefPage">
      <h1>{{ content.title }}</h1>
      <pre><span
  class="block mb-3 text-xxs uppercase font-sans text-grey-dark font-semibold tracking-wide"
>Method signature</span><code
  class="block"
      >{{ content.signature }} → {{ content.response_type }}</code></pre>
      <h2>About this method</h2>
      <div v-html="markdown(content.description)" />
      <h2>Examples</h2>
      <div v-for="(example, id) in content.examples" :key="id">
        <h3>{{ example.title }}</h3>
        <pre v-html="highlight(example.code)" />
      </div>
    </div>
    <div v-else v-html="markdown(content)" />
  </content-page>
</template>

<script>
import axios from 'axios'
import markdown from '@/utils/markdown.js'
import highlight from '@/utils/highlight.js'

import ContentPage from '@/components/ContentPage'

export default {
  components: { ContentPage },
  data() {
    return { markdown, highlight }
  },
  computed: {
    isRefPage() {
      return typeof this.content === 'object'
    }
  },
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
  }
}
</script>
