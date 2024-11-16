<template>
  <div class="preview-artist">
    <div class="preview-artist__avatar">
      <MusicThumbnail circle />
    </div>
    <div class="preview-artist__info">
      <div class="preview-artist__artist-name">Artist name</div>
      <div class="preview-artist__songs-count">70 songs</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { MusicThumbnail } from '@/shared/ui/music'
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
