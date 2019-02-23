<template>
  <header
    class="flex items-center justify-between h-72 py-3 border-solid border-b border-grey-lighter text-sm"
  >
    <ul class="lg:w-2/3 w-auto list-reset flex -mx-2 px-8">
      <li class="mx-2">
        <a
          class="text-grey-dark hover:text-grey-darker no-underline whitespace-no-wrap"
          href="/quick-start"
        >Quick Start</a>
      </li>
      <li class="mx-2">
        <a
          class="text-grey-dark hover:text-grey-darker no-underline whitespace-no-wrap"
          href="/api/overview"
        >API</a>
      </li>
      <li class="mx-2">
        <a
          class="text-grey-dark hover:text-grey-darker no-underline whitespace-no-wrap"
          href="/changelog"
        >Changelog</a>
      </li>
      <li class="mx-2">
        <a
          class="text-grey-dark hover:text-grey-darker no-underline whitespace-no-wrap"
          href="/about"
        >About</a>
      </li>
    </ul>
    <div class="flex flex-1 items-center h-48 mr-3 px-5 bg-grey-lighter rounded">
      <search-icon class="text-grey stroke-current h-16 w-16"/>
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
  components: { SearchIcon }
}
</script>
