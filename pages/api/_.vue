<template>
  <div v-html="body.data"/>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ route, store, error }) {
    const data = {
      body: ''
    }
    let res = null
    try {
      res = await axios.get(
        `${store.state.apiUrl}${store.state.locale}/api/${route.params
          .pathMatch || ''}`
      )
    } catch (err) {
      throw err
    }
    data.body = res.data
    return data
  }
}
</script>
