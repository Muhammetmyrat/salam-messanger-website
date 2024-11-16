<template>
  <div class="top-track">
    <div class="top-track__number">
      <span>
        {{ number }}
      </span>
      <IconTopUp v-if="track.status === 1" />
      <IconTopLine v-else-if="track.status === 0" />
      <IconTopDown v-else-if="track.status === -1" />
    </div>
    <div class="top-track__thumbnail">
      <MusicThumbnail>
        <div class="top-track__action">
          <IconMusicPlayMini />
        </div>
      </MusicThumbnail>
    </div>
    <div class="top-track__info">
      <div class="top-track__name">{{ track.name }}</div>
      <div class="top-track__artist">Artist name, Genre</div>
    </div>
    <div class="top-track__duration">{{ formatDuration(track.duration) }}</div>
  </div>
</template>

<script setup lang="ts">
  import { MusicThumbnail } from '@/shared/ui/music'
  import { IconMusicPlayMini } from '@/shared/ui/Icons'
  import { IconTopUp, IconTopDown, IconTopLine } from '@/shared/ui/Icons/chat'
  import { formatDuration } from '@/shared/lib/helpers/formatDuration'

  defineProps({
    number: { type: Number, default: 0 },
    track: { type: Object, default: () => ({}) }
  })
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
