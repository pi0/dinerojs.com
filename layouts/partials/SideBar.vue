<template>
  <nav class="hidden bg-moonstone-grey">
    <div class="flex flex-col items-end w-full">
      <div
        class="flex justify-end flex-no-grow flex-no-shrink w-full h-72 border-solid border-b border-grey-light"
      >
        <div class="w-360 py-3 px-8 flex justify-between items-center">
          <a href="/" class="flex items-center text-sapphire-blue no-underline">
            <dinero-logo class="w-40 mr-2" />
            <h1 class="text-lg">Dinero.js</h1>
          </a>
          <span class="text-xs text-grey-dark">{{ $store.getters.latestVersion }}</span>
        </div>
      </div>
      <div class="w-360 overflow-y-auto">
        <div class="py-6">
          <tree-menu :label="tree.label" :link="tree.link" :nodes="tree.nodes" :depth="-1" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import TreeMenu from '@/components/TreeMenu'

import DineroLogo from '@/assets/img/logo.svg'
import ChevronRightIcon from '@/assets/img/icons/chevron-right.svg'

export default {
  components: { TreeMenu, DineroLogo, ChevronRightIcon },
  props: {
    navigation: {
      type: Array,
      required: true
    },
    ignore: {
      type: Array,
      default: []
    }
  },
  computed: {
    tree() {
      return {
        nodes: this.navigation.filter(
          item => this.ignore.indexOf(item.slug) === -1
        )
      }
    }
  }
}
</script>
