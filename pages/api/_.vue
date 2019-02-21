<template>
  <div>
    <template v-if="typeof content === 'object'">
      <h1>{{ content.title }}</h1>
      <pre>{{ content.signature }} → {{ content.response_type }}</pre>
      <div v-html="marked(content.description)"/>
      <div :key="id" v-for="(example, id) in content.examples">
        <h3>{{ example.title }}</h3>
        <pre>{{ example.code }}</pre>
      </div>
    </template>
    <div v-else v-html="marked(content)"/>
  </div>
</template>

<script>
import axios from 'axios'
import marked from 'marked'

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
  data() {
    return { marked }
  }
}
</script>
