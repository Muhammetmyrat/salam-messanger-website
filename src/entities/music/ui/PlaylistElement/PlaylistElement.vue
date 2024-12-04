<template>
  <div class="playlist-element">
    <div class="playlist-element__thumbnail">
      <MusicThumbnail
        :img-path="playlist?.image_path"
        :title="playlist?.title"
      />
    </div>
    <div class="playlist-element__info">
      <div class="playlist-element__name">{{ playlist?.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { MusicThumbnail } from '@/shared/ui/music'

  defineProps<{
    playlist: Record<string, any> | null
  }>()
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
