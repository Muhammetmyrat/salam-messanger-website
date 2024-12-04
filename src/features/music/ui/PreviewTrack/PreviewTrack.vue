<template>
  <div class="preview-track">
    <div class="preview-track__thumbnail" @click="trackPlay(track?.id)">
      <MusicThumbnail :img-path="track?.image_path" :title="track?.title">
        <div class="preview-track__action">
          <IconMusicPauseMini
            v-if="
              musicStore.isPlayTrack && musicStore.selectTrackId === track?.id
            "
          />
          <IconMusicPlayMini v-else />
        </div>
      </MusicThumbnail>
    </div>
    <div class="preview-track__info">
      <div class="preview-track__name">{{ track?.title }}</div>
      <div class="preview-track__artist">
        {{ track?.singers?.map((singer: any) => singer.name).join(', ') }}
      </div>
    </div>
    <div class="preview-track__duration">
      {{ formatMusicDuration(track?.duration) }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { MusicThumbnail } from '@/shared/ui/music'
  import { IconMusicPlayMini, IconMusicPauseMini } from '@/shared/ui/Icons'
  import { MusicModel } from '@/entities/music'
  import { formatMusicDuration } from '@/shared/lib/helpers/formatMusicDuration'

  defineProps<{
    track: Record<string, any> | null
  }>()

  const emit = defineEmits(['trackPlay'])

  const musicStore = MusicModel.useMusicStore()

  const trackPlay = (id: number) => {
    if (musicStore.selectTrackId === id) {
      musicStore.pauseTrack()
    } else {
      musicStore.playTrack(id)
    }

    emit('trackPlay')
  }
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
