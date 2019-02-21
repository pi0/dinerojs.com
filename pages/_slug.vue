<template>
  <div v-html="marked(content)"/>
</template>

<script>
import axios from 'axios'
import marked from 'marked'

export default {
  async asyncData({ route, store, error }) {
    let res = null
    try {
      res = await axios.get(
        `http://localhost:4000/docs/en/${route.params.slug}`
      )
    } catch (err) {
      throw err
    }
    return {
      content: res.data.data
    }
  },
  data() {
    return { marked }
  }
}
</script>
