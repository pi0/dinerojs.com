<template>
  <content-page>
    <div v-html="markdown(content)" />
  </content-page>
</template>

<script>
import markdown from '@/utils/markdown.js'

import ContentPage from '@/components/ContentPage'

export default {
  components: { ContentPage },
  data() {
    return { markdown }
  },
  async asyncData({ route, store, error, $axios }) {
    const { data } = await $axios.$get(
      `${store.state.locale}/${route.params.slug}`
    )

    return {
      content: data
    }
  }
}
</script>
