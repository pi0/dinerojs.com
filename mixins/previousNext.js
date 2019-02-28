import unslug from '@/utils/unslug.js'

export default {
  computed: {
    previousNext() {
      const currentPageIndex = this.$store.getters.sidebarRoutesFromEndpoints.findIndex(
        endpoint => `/${endpoint}` === this.currentApiUrl
      )
      const previousUrl =
        this.$store.getters.sidebarRoutesFromEndpoints[currentPageIndex - 1] ||
        ''
      const nextUrl =
        this.$store.getters.sidebarRoutesFromEndpoints[currentPageIndex + 1] ||
        ''
      return {
        previous: {
          text: unslug(previousUrl.split('/').pop()),
          link: `${previousUrl}`
        },
        next: {
          text: unslug(nextUrl.split('/').pop()),
          link: `${nextUrl}`
        }
      }
    }
  }
}
