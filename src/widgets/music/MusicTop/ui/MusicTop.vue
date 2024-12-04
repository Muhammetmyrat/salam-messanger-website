<template>
  <div class="music-top">
    <BorderBlockBox>
      <!-- Header Slot -->
      <template v-slot:header>
        <BlockHeader :title="getLocalizedTitle(blockTop)" />
      </template>

      <!-- Music Rows -->
      <div class="music-top__row">
        <div
          v-for="(chunk, chunkIndex) in chunkedTracks"
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
                <TopTrack
                  :number="calculateTrackNumber(trackIndex, chunkIndex, chunk)"
                  :track="track"
                  @track-play="handleTrackPlay(trackIndex, chunkIndex, chunk)"
                />
              </div>
            </div>
          </TopTrackBox>
        </div>
      </div>
    </BorderBlockBox>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { BorderBlockBox, BlockHeader } from '@/shared/ui/block'
  import { TopTrackBox } from '@/entities/music'
  import { TopTrack } from '@/features/music'
  import { getLocalizedTitle } from '@/shared/lib/helpers/localized'
  import { MusicStore } from '@/features/music'

  const props = defineProps<{
    blockTop: any
  }>()

  const { trackPlay } = MusicStore

  // Process and parse music_data for each track
  const processedTracks = computed(
    () =>
      props.blockTop?.data?.map((track: any) => ({
        ...track,
        ...JSON.parse(track.music_data),
      })) || []
  )

  // Chunk tracks into groups of 5 and limit to 2 groups
  const chunkedTracks = computed(() => {
    const chunkSize = 5
    const chunks = []
    for (let i = 0; i < processedTracks.value.length; i += chunkSize) {
      chunks.push(processedTracks.value.slice(i, i + chunkSize))
    }
    return chunks.slice(0, 2)
  })

  // Calculate the track number for display
  const calculateTrackNumber = (
    trackIndex: number,
    chunkIndex: number,
    chunk: any[]
  ) => trackIndex + 1 + chunkIndex * chunk.length

  // Handle track play event
  const handleTrackPlay = (
    trackIndex: number,
    chunkIndex: number,
    chunk: any[]
  ) => {
    const trackNumber = calculateTrackNumber(trackIndex, chunkIndex, chunk)
    trackPlay({
      trackIndex: trackNumber - 1,
      block: { ...props.blockTop, data: processedTracks.value },
    })
  }
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
