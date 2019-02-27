<template>
  <header
    class="flex items-center justify-between h-72 border-solid border-b border-grey-lighter text-sm"
  >
    <ul
      class="flex items-center h-full lg:w-2/3 w-auto list-reset flex -mx-2 px-8 border-t-2 border-solid border-transparent"
    >
      <li
        v-for="(item, id) in navigation"
        :key="id"
        class="flex items-center h-full mx-3 border-b-2 border-solid"
        :class="[ $route.path === item.link ? 'border-sapphire-blue' : 'border-transparent' ]"
      >
        <a
          class="flex items-center h-full py-3 text-grey-dark hover:text-grey-darker no-underline whitespace-no-wrap"
          :href="item.link"
        >{{ item.label }}</a>
      </li>
    </ul>
    <div class="flex flex-1 items-center h-48 mr-3 px-5 bg-grey-lighter rounded">
      <search-icon class="text-grey stroke-current h-16 w-16" />
      <input
        class="block w-full w-auto h-auto py-2 pl-4 bg-transparent text-size-inherit"
        type="text"
        placeholder="Search for guides, code, etc."
      >
    </div>
  </header>
</template>

<script>
import SearchIcon from '@/assets/img/icons/search.svg'

export default {
  components: { SearchIcon },
  props: {
    navigation: {
      type: Array,
      required: true
    }
  }
}
</script>
