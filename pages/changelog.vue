<template>
  <div>
    <h1>Changelog</h1>
    <ul>
      <li :key="id" v-for="(release, id) in releases">
        <div v-html="marked(h1ToH2(release.body))"/>
        <h3>Assets</h3>
        <ul>
          <li>
            <a :href="release.zipball_url">
              <strong>Source code</strong> (zip)
            </a>
          </li>
          <li>
            <a :href="release.tarball_url">
              <strong>Source code</strong> (tar.gz)
            </a>
          </li>
        </ul>
      </li>
    </ul>
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
        'https://api.github.com/repos/sarahdayan/dinero.js/releases'
      )
    } catch (err) {
      throw err
    }
    return {
      releases: res.data
    }
  },
  data() {
    return { marked }
  },
  methods: {
    h1ToH2(content) {
      return content.replace(/^(#? )/gm, '#$1')
    }
  }
}
</script>
