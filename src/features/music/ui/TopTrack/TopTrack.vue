<template>
  <div class="top-track">
    <div class="top-track__number">
      <span>
        {{ number }}
      </span>
      <IconTopUp v-if="track?.status === 1" />
      <IconTopLine v-else-if="track?.status === 0" />
      <IconTopDown v-else-if="track?.status === -1" />
    </div>
    <div class="top-track__thumbnail" @click="trackPlay(track?.id)">
      <MusicThumbnail :img-path="track?.image_path" :title="track?.title">
        <div class="top-track__action">
          <IconMusicPauseMini
            v-if="
              musicStore.isPlayTrack && musicStore.selectTrackId === track?.id
            "
          />
          <IconMusicPlayMini v-else />
        </div>
      </MusicThumbnail>
    </div>
    <div class="top-track__info">
      <div class="top-track__name">{{ track?.title }}</div>
      {{ track?.singers?.map((singer: any) => singer.name).join(', ') }}
      <div class="top-track__artist"></div>
    </div>
    <div class="top-track__duration">
      {{ formatMusicDuration(track?.duration) }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { MusicThumbnail } from '@/shared/ui/music'
  import { IconMusicPlayMini, IconMusicPauseMini } from '@/shared/ui/Icons'
  import { IconTopUp, IconTopDown, IconTopLine } from '@/shared/ui/Icons/chat'
  import { formatMusicDuration } from '@/shared/lib/helpers/formatMusicDuration'
  import { MusicModel } from '@/entities/music'

  defineProps({
    number: { type: Number, default: 0 },
    track: { type: Object, default: () => ({}) },
  })

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
