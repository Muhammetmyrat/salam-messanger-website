<template>
  <div :class="classes">
    <div class="music-thumbnail__image">
      <img
        :src="`${imageBasePath}?image_name=${imgPath}.webp`"
        :alt="title"
        :title="title"
        loading="lazy"
      />
    </div>
    <div class="music-thumbnail__action">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { imageBasePath } from '@/shared/lib/constants/constants'

  const props = defineProps({
    imgPath: { type: String, default: '' },
    title: { type: String, default: '' },
    circle: { type: Boolean, required: false, default: false },
  })

  const classes = computed(() => [
    'music-thumbnail',
    {
      'music-thumbnail__circle': props.circle,
    },
  ])
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
