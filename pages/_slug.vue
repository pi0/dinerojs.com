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
        `http://localhost:4000/docs/en/${route.params.slug}`
      )
    } catch (err) {
      throw err
    }
    data.body = res.data
    return data
  }
}
</script>
