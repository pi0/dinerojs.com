<template>
  <div>
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
    <page-navigation class="mt-12" :previous="previousNext.previous" :next="previousNext.next" />
  </div>
</template>

<script>
import markdown from '@/utils/markdown.js'
import highlight from '@/utils/highlight.js'
import unslug from '@/utils/unslug.js'

import previousNext from '@/mixins/previousNext.js'

import ContentPage from '@/components/ContentPage'
import PageNavigation from '@/components/PageNavigation'

export default {
  components: { ContentPage, PageNavigation },
  mixins: [previousNext],
  data() {
    return { markdown, highlight }
  },
  computed: {
    isRefPage() {
      return typeof this.content === 'object'
    }
  },
  async asyncData({ route, store, error, $axios }) {
    const { data } = await $axios.$get(
      `${store.state.locale}/api/${route.params.pathMatch || ''}`
    )

    return {
      content: data,
      currentApiUrl: `/api/${route.params.pathMatch || ''}`
    }
  },
  head() {
    return {
      title: `${this.$route.params.pathMatch
        .split('/')
        .reverse()
        .map(word => unslug(word))
        .join(' | ')} | Dinero.js`
    }
  }
}
</script>
