<template>
  <div class="music-header">
    <div class="music-header__search">
      <MusicSearch />
    </div>
    <div class="music-header__filter">
      <MusicFilter />
    </div>
    <div class="music-header__download">
      <MusicDownload />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { MusicSearch, MusicFilter, MusicDownload } from '@/features/music'
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
