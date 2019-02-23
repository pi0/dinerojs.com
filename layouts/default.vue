<template>
  <div class="flex">
    <div
      class="wrapper w-full lg:grid flex flex-col min-h-screen text-grey-darkest font-sans leading-none"
    >
      <side-bar
        :navigation="navigation"
        class="sticky pin-t lg:flex hidden h-screen min-w-360 w-full justify-end flex-no-grow flex-no-shrink"
      />
      <top-bar class="sticky pin-t bg-white" style="grid-column: 2/5"/>
      <section class="flex flex-col flex-1" style="grid-column: 2/4">
        <main class="w-full p-8 leading-normal text-grey-darker">
          <nuxt/>
        </main>
      </section>
    </div>
  </div>
</template>

<script>
import SideBar from '@/layouts/partials/SideBar'
import TopBar from '@/layouts/partials/TopBar'

export default {
  components: { SideBar, TopBar },
  data() {
    return {
      navigation: [
        { label: 'Home', link: '/', icon: 'home' },
        {
          label: 'Getting Started',
          link: '#',
          subnavigation: [
            {
              label: 'What is Dinero.js?',
              link: '/what-is-dinerojs'
            },
            {
              label: 'Quick Start',
              link: '/quick-start'
            }
          ]
        },
        {
          label: 'API Reference',
          link: '#',
          subnavigation: [
            { label: 'Overview', link: '/api/overview' },
            { label: 'Installation Guide', link: '/api/install' },
            { label: 'Access', link: '#' },
            { label: 'Manipulation', link: '#' },
            { label: 'Testing', link: '#' },
            { label: 'Configuration', link: '#' },
            { label: 'Transformation & Formatting', link: '#' },
            { label: 'Global & Default Configuration', link: '#' }
          ]
        },
        {
          label: 'Demos',
          link: '#',
          subnavigation: [
            {
              label: 'A shopping cart with Dinero.js',
              link: '#'
            }
          ]
        }
      ]
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
