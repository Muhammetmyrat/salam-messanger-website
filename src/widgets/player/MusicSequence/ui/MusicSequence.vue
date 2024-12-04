<template>
  <div>
    <div
      class="backdrop"
      v-if="musicStore.isShowPlayerPreview"
      @click="musicStore.togglePlayerPreview"
    ></div>
    <PreviewBlock
      :is-show="musicStore.isShowPlayerPreview"
      @close="musicStore.togglePlayerPreview"
      @back="musicStore.togglePlayerPreview"
      title="Playlist Preview"
    >
      <div class="artist-preview">
        <div class="artist-preview__songs">
          <PreviewSongs
            v-if="selectedBlockData.data && selectedBlockData.data.length > 0"
          >
            <PreviewTrack
              v-for="(track, trackIndex) in selectedBlockData.data"
              :key="track.id"
              :track="track"
              @track-play="
                trackPlay({
                  trackIndex,
                  block: selectedBlockData,
                })
              "
            />
          </PreviewSongs>
        </div>
      </div>
    </PreviewBlock>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { MusicModel, PreviewSongs } from '@/entities/music'
  import { MusicStore } from '@/features/music'
  import { PreviewTrack } from '@/features/music'
  import { PreviewBlock } from '@/shared/ui/block'

  const musicStore = MusicModel.useMusicStore()

  const { block, trackPlay } = MusicStore

  const selectedBlockData = computed(() => block.value || null)
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
