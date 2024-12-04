<template>
  <div class="web-player">
    <div class="web-player__player">
      <Teleport to="#pop-up">
        <DesktopPlayer />
      </Teleport>
    </div>
    <div class="web-player__playlist">
      <Teleport to="#pop-up">
        <MusicSequence />
      </Teleport>
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
