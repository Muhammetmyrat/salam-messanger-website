<template>
  <Swiper :slides-per-view="slidesPerView" :space-between="spaceBetween" class="s-swiper">
    <slot />
  </Swiper>
</template>

<script setup lang="ts">
  import { Swiper } from 'swiper/vue'
  import { PropType } from 'vue'

  defineProps({
    slidesPerView: {
      type: [Number, String] as PropType<number | 'auto'>,
      required: false,
      default: 'auto'
    },
    spaceBetween: {
      type: Number,
      required: false,
      default: 0
    }
  })
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
