<template>
  <div class="album-element">
    <div class="album-element__thumbnail">
      <MusicThumbnail />
    </div>
    <div class="album-element__info">
      <div class="album-element__name">Album name</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { MusicThumbnail } from '@/shared/ui/music'
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
