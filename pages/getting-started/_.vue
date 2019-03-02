<template>
  <div>
    <content-page>
      <div v-html="markdown(content)" />
    </content-page>
    <page-navigation class="mt-12" :previous="previousNext.previous" :next="previousNext.next" />
  </div>
</template>

<script>
import markdown from '@/utils/markdown.js'

import previousNext from '@/mixins/previousNext.js'

import ContentPage from '@/components/ContentPage'
import PageNavigation from '@/components/PageNavigation'

export default {
  components: { ContentPage, PageNavigation },
  mixins: [previousNext],
  data() {
    return { markdown }
  },
  async asyncData({ route, store, error, $axios }) {
    const { data } = await $axios.$get(
      `${store.state.locale}${route.path || ''}`
    )

    return {
      content: data,
      currentApiUrl: `${route.path || ''}`
    }
  }
}
</script>
