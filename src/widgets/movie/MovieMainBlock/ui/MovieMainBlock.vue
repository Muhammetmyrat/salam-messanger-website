<template>
  <BlockBox>
    <template v-slot:header>
      <BlockHeader title="Block name" />
    </template>
    <SSwiper :space-between="32">
      <swiper-slide v-for="index in 10" :key="index">
        <MovieElement />
      </swiper-slide>
    </SSwiper>
  </BlockBox>
</template>

<script setup lang="ts">
  import { SwiperSlide } from 'swiper/vue'
  import { SSwiper } from '@/shared/ui/swipers'
  import { BlockBox, BlockHeader } from '@/shared/ui/block'
  import { MovieElement } from '@/entities/movie'
</script>

<style scoped></style>
