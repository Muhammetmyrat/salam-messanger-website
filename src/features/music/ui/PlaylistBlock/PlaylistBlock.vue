<template>
  <BlockBox>
    <template v-slot:header>
      <BlockHeader :title="getLocalizedTitle(block)" :link="`/music/block/${block?.id}`" />
    </template>
    <SSwiper :space-between="32">
      <swiper-slide v-for="playlist in block?.data" :key="playlist.id">
        <PlaylistElement class="playlist-slide" :playlist="playlist" />
      </swiper-slide>
    </SSwiper>
  </BlockBox>
</template>

<script setup lang="ts">
  import { SwiperSlide } from 'swiper/vue'
  import { SSwiper } from '@/shared/ui/swipers'
  import { BlockBox, BlockHeader } from '@/shared/ui/block'
  import { PlaylistElement } from '@/entities/music'
  import { getLocalizedTitle } from '@/shared/lib/helpers/localized'

defineProps<{
  block: Record<string, any> | null
}>()
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
