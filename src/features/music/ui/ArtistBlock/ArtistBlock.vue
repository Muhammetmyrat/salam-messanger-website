<template>
  <BlockBox>
    <template v-slot:header>
      <BlockHeader :title="getLocalizedTitle(block)" :link="`/music/block/${block?.id}`" />
    </template>
    <SSwiper :space-between="32">
      <swiper-slide v-for="artist in block?.data" :key="artist.id">
        <ArtistElement class="artist-slide" :artist="artist" />
      </swiper-slide>
    </SSwiper>
  </BlockBox>
</template>

<script setup lang="ts">
  import { SwiperSlide } from 'swiper/vue'
  import { SSwiper } from '@/shared/ui/swipers'
  import { BlockBox, BlockHeader } from '@/shared/ui/block'
  import { ArtistElement } from '@/entities/music'
  import { getLocalizedTitle } from '@/shared/lib/helpers/localized';

defineProps<{
  block: Record<string, any> | null
}>()
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
