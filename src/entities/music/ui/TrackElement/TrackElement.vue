<template>
  <div class="track-element">
    <div class="track-element__thumbnail" @click="trackPlay(track?.id)">
      <MusicThumbnail :img-path="track?.image_path" :title="track?.title">
        <div class="track-element__play-pause">
          <IconMusicPause
            v-if="
              musicStore.isPlayTrack && musicStore.selectTrackId === track?.id
            "
          />
          <IconMusicPlay v-else />
        </div>
      </MusicThumbnail>
    </div>
    <div class="track-element__info">
      <div class="track-element__name">{{ track?.title }}</div>
      <div class="track-element__artists">
        {{ track?.singers?.map((singer: any) => singer.name).join(', ') }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { IconMusicPlay, IconMusicPause } from '@/shared/ui/Icons'
  import { MusicThumbnail } from '@/shared/ui/music'
  import { MusicModel } from '@/entities/music'

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
