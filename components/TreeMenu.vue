<template>
  <div :class="[ isRootLevel ? '' : !isSubnavigation ? 'px-8' : 'pl-4' ]">
    <div v-if="label" :class="[ !isSubnavigation ? 'py-3' : 'py-2' ]" @click="toggleChildren">
      <span class="flex items-center">
        <chevron-right-icon
          v-if="hasChevron"
          class="block w-16 h-16 -ml-6 mr-2 text-grey stroke-current"
          :class="{ 'rotate-90': !shouldHideChildren }"
        />
        <component
          :is="nodes ? 'span' : 'a'"
          :href="nodes ? false : link"
          class="w-full no-underline"
          :class="[ isCurrent && !nodes ? 'text-sapphire-blue' : isSubnavigation ? 'text-grey-dark' : 'text-grey-darker', isSubnavigation ? (nodes ? 'cursor-pointer hover:text-grey-darker' : 'cursor-pointer hover:text-sapphire-blue') : (nodes ? '' : 'cursor-pointer hover:text-grey-darkest') ]"
        >{{ label }}</component>
      </span>
    </div>
    <tree-menu
      v-for="(node, id) in nodes"
      :key="id"
      :class="{ 'hidden': shouldHideChildren }"
      :nodes="node.nodes"
      :label="node.label"
      :link="node.link"
      :depth="depth + 1"
    />
  </div>
</template>

<script>
import ChevronRightIcon from '@/assets/img/icons/chevron-right.svg'

export default {
  name: 'TreeMenu',
  components: { ChevronRightIcon },
  props: {
    label: {
      type: String,
      default: undefined
    },
    link: {
      type: String,
      default: ''
    },
    nodes: {
      type: Array,
      default: undefined
    },
    depth: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      hideChildren: true
    }
  },
  computed: {
    hasChevron() {
      return this.nodes && this.isSubnavigation
    },
    shouldHideChildren() {
      return this.hideChildren && this.isSubnavigation && !this.hasActiveChild
    },
    isSubnavigation() {
      return this.depth > 0
    },
    isRootLevel() {
      return this.depth === -1
    },
    isCurrent() {
      return this.$route.path === this.link
    },
    hasActiveChild() {
      return JSON.stringify(this.nodes).indexOf(this.$route.path) !== -1
    }
  },
  methods: {
    toggleChildren() {
      this.hideChildren = !this.hideChildren
    }
  }
}
</script>
