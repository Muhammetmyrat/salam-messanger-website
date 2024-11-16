<template>
  <div :class="classes">
    <div class="music-thumbnail__image">
      <img src="/images/book.svg" />
    </div>
    <div class="music-thumbnail__action">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  const props = defineProps({
    circle: { type: Boolean, required: false, default: false }
  })

  const classes = computed(() => [
    'music-thumbnail',
    {
      'music-thumbnail__circle': props.circle
    }
  ])
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
