<template>
  <BlockBox>
    <template #header>
      <BlockHeader
        :title="getLocalizedTitle(block)"
        :link="`/music/block/${block?.id}`"
      />
    </template>
    <SSwiper :space-between="32">
      <swiper-slide v-for="(track, index) in block?.data" :key="track.id">
        <TrackElement
          class="track-slide"
          :track="track"
          @track-play="$emit('trackPlay', { trackIndex: index })"
        />
      </swiper-slide>
    </SSwiper>
  </BlockBox>
</template>

<script setup lang="ts">
  import { SwiperSlide } from 'swiper/vue'
  import { SSwiper } from '@/shared/ui/swipers'
  import { BlockBox, BlockHeader } from '@/shared/ui/block'
  import { TrackElement } from '@/entities/music'
  import { getLocalizedTitle } from '@/shared/lib/helpers/localized'

  defineProps<{
    block: Record<string, any> | null
  }>()

  defineEmits(['trackPlay'])
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
