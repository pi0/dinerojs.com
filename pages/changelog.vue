<template>
  <content-page>
    <h1>Changelog</h1>
    <div class="-mb-16">
      <div v-for="(release, releaseId) in $store.state.changelog" :key="releaseId" class="mb-16">
        <div class="mb-6" v-html="marked(h1ToH2(release.body))" />
        <div class="flex -mx-2">
          <a
            v-for="(download, downloadId) in [{ type: 'zip', key: 'zipball_url' }, { type: 'tar.gz', key: 'tarball_url' }]"
            :key="downloadId"
            class="flex items-center mx-2"
            :href="release[download.key]"
          >
            <download-icon class="w-16 h-16 mr-2 text-grey-dark stroke-current" />
            <span>
              <strong>Source code</strong>
              ({{ download.type }})
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
