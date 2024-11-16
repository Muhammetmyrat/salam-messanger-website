<template>
  <div class="artist-element">
    <div class="artist-element__thumbnail">
      <MusicThumbnail circle />
    </div>
    <div class="artist-element__info">
      <div class="artist-element__name">{{ artist?.name }}</div> 
    </div>
  </div>
</template>

<script setup lang="ts">
  import { MusicThumbnail } from '@/shared/ui/music'

  defineProps<{
    artist: Record<string, any> | null
  }>()
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
