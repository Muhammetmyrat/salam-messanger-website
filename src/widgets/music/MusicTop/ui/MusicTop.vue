<template>
  <div class="music-top">
    <BorderBlockBox>
      <template v-slot:header>
        <BlockHeader :title="getLocalizedTitle(blockTop)" />
      </template>
      <div class="music-top__row">
        <div
          v-for="(chunk, chunkIndex) in blockTop?.data"
          :key="chunkIndex"
          class="music-top__col"
        >
          <TopTrackBox>
            <div class="music-top__track-list">
              <div
                v-for="(track, trackIndex) in chunk"
                :key="trackIndex"
                class="music-top__track"
              >
                <TopTrack :number="trackIndex + 1 + chunkIndex * chunk.length" :track="track" />
              </div>
            </div>
          </TopTrackBox>
        </div>
      </div>
    </BorderBlockBox>
  </div>
</template>

<script setup lang="ts">
  import { BorderBlockBox, BlockHeader } from '@/shared/ui/block'
  import { TopTrackBox } from '@/entities/music'
  import { TopTrack } from '@/features/music'
  import { getLocalizedTitle } from '@/shared/lib/helpers/localized';

defineProps<{
  blockTop: Record<string, any> | null
}>()
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
