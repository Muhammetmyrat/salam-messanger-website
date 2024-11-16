<template>
  <div class="track-element">
    <div class="track-element__thumbnail">
      <MusicThumbnail>
        <div class="track-element__play-pause">
          <IconMusicPlay />
        </div>
      </MusicThumbnail>
    </div>
    <div class="track-element__info">
      <div class="track-element__name">{{ track?.title }}</div>
      <div class="track-element__artists">{{ track?.singers.map((singer: any) => singer.name).join(', ')}}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { IconMusicPlay } from '@/shared/ui/Icons'
  import { MusicThumbnail } from '@/shared/ui/music'

  defineProps<{
    track: Record<string, any> | null
  }>()
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
