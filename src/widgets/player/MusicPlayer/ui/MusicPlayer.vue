<template>
  <div class="web-player">
    <div class="web-player__player">
      <DesktopPlayer />
    </div>
    <div class="web-player__playlist">
      <MusicSequence />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { DesktopPlayer } from '@/widgets/player/DesktopPlayer'
  import { MusicSequence } from '@/widgets/player/MusicSequence'
</script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
