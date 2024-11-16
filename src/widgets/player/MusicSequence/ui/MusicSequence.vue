<template>
  <PreviewBlock
    :is-show="musicStore.isShowPlayerPreview"
    @close="musicStore.closePlayerPreview"
    @back="musicStore.closePlayerPreview"
    title="Playlist Preview"
  >
    <div class="artist-preview">
      <div class="artist-preview__songs">
        <PreviewSongs>
          <PreviewTrack v-for="index in 20" :key="index" />
        </PreviewSongs>
      </div>
    </div>
  </PreviewBlock>
</template>

<script setup lang="ts">
  import { MusicModel, PreviewSongs } from '@/entities/music'
  import { PreviewTrack } from '@/features/music'
  import { PreviewBlock } from '@/shared/ui/block'

  const musicStore = MusicModel.useMusicStore()
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
