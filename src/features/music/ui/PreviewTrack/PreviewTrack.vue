<template>
  <div class="preview-track">
    <div class="preview-track__thumbnail">
      <MusicThumbnail>
        <div class="preview-track__action">
          <IconMusicPlayMini />
        </div>
      </MusicThumbnail>
    </div>
    <div class="preview-track__info">
      <div class="preview-track__name">Song name</div>
      <div class="preview-track__artist">Artist name, Genre</div>
    </div>
    <div class="preview-track__duration">04:32</div>
  </div>
</template>

<script setup lang="ts">
  import { MusicThumbnail } from '@/shared/ui/music'
  import { IconMusicPlayMini } from '@/shared/ui/Icons'
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
