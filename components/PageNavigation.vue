<template>
  <div class="flex justify-between w-full">
    <div class="w-half">
      <a
        v-if="!isObjectEmpty(previous)"
        :href="`/${previous.link}`"
        class="flex items-center w-full no-underline group"
      >
        <span
          class="flex items-center justify-center flex-no-grow flex-no-shrink w-48 h-48 mr-4 bg-white text-grey-darker rounded shadow group-hover:shadow-md transition-fast-out"
        >←</span>
        <span class="flex flex-col flex-1 truncate text-left">
          <span class="text-grey text-sm">Previous</span>
          <span class="text-grey-darkest truncate">{{ previous.text }}</span>
        </span>
      </a>
    </div>
    <div class="w-half">
      <a
        v-if="!isObjectEmpty(next)"
        :href="`/${next.link}`"
        class="flex items-center w-full no-underline group"
      >
        <span class="flex flex-col flex-1 truncate text-right">
          <span class="text-grey text-sm">Next</span>
          <span class="text-grey-darkest truncate">{{ next.text }}</span>
        </span>
        <span
          class="flex items-center justify-center flex-no-grow flex-no-shrink w-48 h-48 ml-4 bg-white text-grey-darker rounded shadow group-hover:shadow-md transition-fast-out"
        >→</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    previous: {
      type: Object,
      default() {
        return {}
      }
    },
    next: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    isObjectEmpty(obj) {
      return !Object.values(obj).join('')
    }
  }
}
</script>
