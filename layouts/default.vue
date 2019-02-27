<template>
  <div class="flex">
    <div
      class="wrapper w-full lg:grid flex flex-col min-h-screen text-grey-darkest font-sans leading-none"
    >
      <side-bar
        :navigation="navigation"
        :ignore="['about']"
        class="sticky pin-t lg:flex hidden h-screen min-w-360 w-full justify-end flex-no-grow flex-no-shrink"
      />
      <top-bar class="sticky pin-t bg-white" style="grid-column: 2/5" />
      <section class="flex flex-col flex-1" style="grid-column: 2/4">
        <main class="w-full p-8 leading-normal text-grey-darker">
          <nuxt />
        </main>
      </section>
    </div>
  </div>
</template>

<script>
import SideBar from '@/layouts/partials/SideBar'
import TopBar from '@/layouts/partials/TopBar'

import unslug from '@/utils/unslug.js'

export default {
  components: { SideBar, TopBar },
  computed: {
    navigation() {
      return this.getNestedChildren(
        this.$store.getters.routesFromEndpoints
          .map(endpoint =>
            endpoint.split('/').map((part, i, arr) => ({
              slug: part,
              label: unslug(part),
              link: endpoint,
              parent: arr[i - 1] || 0
            }))
          )
          .flat()
          .filter(
            (item, i, arr) =>
              arr.findIndex(
                el => el.slug === item.slug && el.parent === item.parent
              ) === i
          )
      )
    }
  },
  methods: {
    getNestedChildren(arr, parent = 0) {
      return arr
        .map((item, i, arr) => {
          if (arr[i].parent === parent) {
            const nodes = this.getNestedChildren(arr, arr[i].slug)
            return Object.assign(
              {},
              {
                label: arr[i].label,
                slug: arr[i].slug,
                link: `/${arr[i].link}`
              },
              nodes.length ? { nodes } : {}
            )
          }
          return null
        })
        .filter(item => item !== null)
    }
  }
}
</script>

<style lang="scss" scoped>
$sidebar-width: 360;
$main-width: 600;
$free-space-width: ($main-width - $sidebar-width) / 2;
$offset: calc(50% - #{$free-space-width}px);

.wrapper {
  grid-template-columns:
    minmax(#{$sidebar-width}px, #{$offset}) #{$main-width}px calc(
      100vw - #{$main-width}px - #{$offset} - #{$sidebar-width}px
    )
    1fr;
  grid-template-rows: 72px 1fr;
}
</style>
