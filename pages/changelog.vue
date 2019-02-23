<template>
  <content-page>
    <h1>Changelog</h1>
    <div class="-mb-16">
      <div class="mb-16" :key="id" v-for="(release, id) in $store.state.changelog">
        <div class="mb-6" v-html="marked(h1ToH2(release.body))"/>
        <div class="flex -mx-2">
          <a
            :key="id"
            v-for="(downloads, id) in [{ type: 'zip', key: 'zipball_url' }, { type: 'tar.gz', key: 'tarball_url' }]"
            class="flex items-center mx-2"
            :href="release[downloads.key]"
          >
            <download-icon class="w-16 h-16 mr-2 text-grey-dark stroke-current"/>
            <span>
              <strong>Source code</strong>
              ({{ downloads.type }})
            </span>
          </a>
        </div>
      </div>
    </div>
  </content-page>
</template>

<script>
import marked from 'marked'

import ContentPage from '@/components/ContentPage'

import DownloadIcon from '@/assets/img/icons/download.svg'

export default {
  components: { ContentPage, DownloadIcon },
  data() {
    return { marked }
  },
  methods: {
    h1ToH2(markdownContent) {
      return markdownContent.replace(/^(#? )/gm, '#$1')
    }
  }
}
</script>
