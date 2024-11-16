<template>
  <PreviewBlock
    :is-show="musicStore.isShowArtistPreview"
    @close="musicStore.closeArtistPreview"
    @back="musicStore.closeArtistPreview"
    title="Artists"
  >
    <div class="artist-preview">
      <div class="artist-preview__artist">
        <PreviewArtist />
      </div>
      <div class="artist-preview__albums">
        <PreviewAlbums />
      </div>
      <div class="artist-preview__songs">
        <PreviewSongs>
          <template v-slot:header>
            <BlockHeader title="Songs" />
          </template>
          <PreviewTrack v-for="index in 20" :key="index" />
        </PreviewSongs>
      </div>
    </div>
  </PreviewBlock>
</template>

<script setup lang="ts">
  import { MusicModel, PreviewArtist, PreviewSongs } from '@/entities/music'
  import { PreviewAlbums, PreviewTrack } from '@/features/music'
  import { BlockHeader, PreviewBlock } from '@/shared/ui/block'

  const musicStore = MusicModel.useMusicStore()
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
