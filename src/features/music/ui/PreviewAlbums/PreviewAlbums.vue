<template>
  <div class="preview-albums">
    <div class="preview-albums__header">
      <BlockHeader title="Albums" />
    </div>
    <div class="preview-albums__slider">
      <SSwiper :spaceBetween="24">
        <swiper-slide v-for="index in 10" :key="index" class="preview-albums__slide">
          <AlbumElement />
        </swiper-slide>
      </SSwiper>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { SwiperSlide } from 'swiper/vue'
  import { SSwiper } from '@/shared/ui/swipers'
  import { AlbumElement } from '@/entities/music'
  import { BlockHeader } from '@/shared/ui/block'
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
