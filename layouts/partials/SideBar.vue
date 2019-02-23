<template>
  <nav class="hidden bg-moonstone-grey">
    <div class="flex flex-col items-end w-full">
      <div
        class="flex justify-end flex-no-grow flex-no-shrink w-full h-72 border-solid border-b border-grey-light"
      >
        <div class="w-360 py-3 px-8 flex justify-between items-center">
          <a href="/" class="flex items-center text-sapphire-blue no-underline">
            <dinero-logo class="w-40 mr-2"/>
            <h1 class="text-lg">Dinero.js</h1>
          </a>
          <span class="text-xs text-grey-dark">{{ $store.getters.getLatestVersion }}</span>
        </div>
      </div>
      <div class="w-360 overflow-y-auto">
        <ul class="list-reset py-6">
          <li v-for="(item, navIndex) in navigation" :key="navIndex" class="py-3 px-8">
            <a :href="item.link" class="text-grey-darker hover:text-grey-darkest no-underline">
              <span>{{ item.label }}</span>
            </a>
            <ul v-if="item.subnavigation" class="list-reset pt-6 -my-2">
              <li
                v-for="(subitem, subNavindex) in item.subnavigation"
                :key="subNavindex"
                class="py-2 pl-4"
              >
                <a
                  :href="subitem.link"
                  class="text-grey-dark hover:text-sapphire-blue no-underline"
                >{{ subitem.label }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import DineroLogo from '@/assets/img/logo.svg'

export default {
  components: { DineroLogo },
  props: {
    navigation: {
      type: Array,
      required: true
    }
  }
}
</script>
