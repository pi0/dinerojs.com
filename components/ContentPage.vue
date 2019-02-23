<template>
  <div class="mb-12">
    <slot/>
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
  }
}
</script>

<style lang="scss" scoped src="~/assets/css/content.scss">
</style>
