<script setup lang="ts">
  import { ref, reactive, computed, watch, onMounted, onUnmounted } from 'vue'
  import {
    imageBasePath,
    musicBasePath,
  } from '@/shared/lib/constants/constants'
  import { MusicStore } from '@/features/music'
  import { MusicModel } from '@/entities/music'
  import { formatMusicDuration } from '@/shared/lib/helpers/formatMusicDuration'
  import { formatCount } from '@/shared/lib/helpers/formatCount'
  import Hls from 'hls.js'

  import {
    IconPlayerBookmark,
    IconPlayerDownload,
    IconPlayerHeadphone,
    IconPlayerHeart,
    IconPlayerShare,
    IconPlayerPause,
    IconPlayerPlay,
    IconPlayerNext,
    IconPlayerPlaylist,
    IconPlayerRepeatAll,
    IconPlayerShuffle,
    IconPlayerRepeat,
    IconPlayerRepeatOne,
    IconPlayerShuffleOff,
    IconPlayerVolumeAll,
    IconPlayerVolumeOff,
  } from '@/shared/ui/Icons'

  const {
    block,
    selectedTrackIndex,
    repeatMusic,
    updateRepeatMusic,
    isPlaying,
    isRandomPlayTrack,
    updateRandomPlayTrack,
    updateTrack,
    updatePlaying,
  } = MusicStore

  const { pauseTrack, playTrack, togglePlayerPreview, trackListening } =
    MusicModel.useMusicStore()

  // Refs and Reactives
  const player = ref<HTMLMediaElement | null>(null)
  const showVolume = ref(false)
  const trackTimeout = ref<any>(null)

  const tooltipX = ref(0)
  const tooltipTime = ref('00:00')
  const isTooltipVisible = ref(false)
  const volume = ref(100)

  const TOOLTIP_WIDTH = 35 // Tooltip width constant

  const range = reactive({
    min: 0,
    max: 0,
    value: 0,
  })

  const selectedTrack = reactive({
    currentTime: '00:00',
    duration: '00:00',
    progress: '0%',
    hlsLoadProgress: '0%',
  })

  const randomTrack = reactive({
    isGenerated: false,
    isSend: false,
    duration: 0,
  })

  // Computed Properties
  const track = computed(() => block.value.data[selectedTrackIndex.value])
  const blockDataLength = computed(() => block.value.data.length)

  const trackDuration = computed(
    () => block.value.data[selectedTrackIndex.value].duration
  )

  watch(track, () => {
    if (track.value.file_path) {
      loadHls(track.value.file_path)
      randomTrack.isSend = false
      randomTrack.isGenerated = false
      randomTrack.duration = 0
    }
  })

  watch(isPlaying, (newVal) => {
    if (player.value) newVal ? player.value.play() : player.value.pause()
    updatePlaying(newVal)
  })

  function loadHls(path: string): void {
    if (!player.value) {
      console.error('Player element is not yet initialized.')
      return
    }

    if (Hls.isSupported()) {
      const hls = new Hls({
        loader: class CustomLoader extends Hls.DefaultConfig.loader {
          constructor(config: any) {
            super(config)
          }

          load(context: any, config: any, callbacks: any) {
            // Check if the request is for a segment file
            if (context.url) {
              const fileName = context.url.split('/').pop() // Extract segment file name

              context.url = `${musicBasePath}?file_name=${path}/${fileName}`
            }
            // Call the default loader's load method
            super.load(context, config, callbacks)
          }
        },
      })

      let totalFragments = 0
      let loadedFragments = 0

      // Attach HLS.js to the media player
      hls.attachMedia(player.value)

      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        console.log('HLS.js and audio element are now bound!')

        // Load the .m3u8 playlist with the correct path
        const source = `${musicBasePath}/?file_name=${path}/playlist.m3u8`

        hls.loadSource(source)
      })

      // Count total fragments
      hls.on(Hls.Events.MANIFEST_PARSED, (_, data) => {
        totalFragments = data.levels.reduce((acc, level) => {
          if (level.details?.fragments) {
            return acc + level.details.fragments.length
          }
          return acc
        }, 0)

        if (totalFragments === 0) {
          console.warn(
            'No fragments found in the manifest. Check your HLS source.'
          )
        }
      })

      // Update loaded fragments
      hls.on(Hls.Events.FRAG_BUFFERED, () => {
        console.log('FRAG_BUFFERED', totalFragments)

        loadedFragments += 1
        const progress = (loadedFragments / totalFragments) * 100
        selectedTrack.hlsLoadProgress = `${progress}%`
      })

      // hls.on(Hls.Events.FRAG_BUFFERED, (_, data) => {
      //   if (data.frag) {
      //     console.log(data.frag.sn)

      //     selectedTrack.hlsLoadProgress = `${(data.frag.sn / data.frag.cc) * 100}%`
      //   }
      // })

      hls.on(Hls.Events.ERROR, (_, data) => {
        console.error('HLS.js error:', data)
        selectedTrack.hlsLoadProgress = '0%' // Reset on error
      })
    } else {
      console.error('HLS.js is not supported in this browser.')
    }
  }

  // Methods
  function updateVolume(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value) / 100
    volume.value = value * 100
    if (player.value) player.value.volume = value
  }

  function rangeChange(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value)
    if (!player.value) return

    const maxDuration = player.value.duration
    const percentage = (value / maxDuration) * 100

    player.value.currentTime = (maxDuration * percentage) / 100
    selectedTrack.progress = `${percentage.toFixed(2)}%`
  }

  function updateTooltip(event: MouseEvent): void {
    const progressBar = event.currentTarget as HTMLElement
    const rect = progressBar.getBoundingClientRect()
    const mouseX = event.clientX - rect.left
    const progressW = rect.width
    const time = Math.floor((mouseX / progressW) * trackDuration.value)

    tooltipTime.value = formatMusicDuration(time)
    tooltipX.value = Math.min(Math.max(mouseX, 0), progressW - TOOLTIP_WIDTH)

    isTooltipVisible.value = true
  }

  function hideTooltip(): void {
    isTooltipVisible.value = false
  }

  function togglePlayPause(): void {
    if (!player.value) return

    if (isPlaying.value) {
      player.value.pause()
      pauseTrack()
    } else {
      player.value.play()
      playTrack(track.value.id)
    }

    updatePlaying(!isPlaying.value)
  }

  function toggleVolume(): void {
    showVolume.value = !showVolume.value
  }

  function handleUpdateTrack(payload: number) {
    updateTrack(payload)
    playTrack(track.value.id)
  }

  function calculateProgress(currentTime: number, duration: number): string {
    return duration ? `${((currentTime / duration) * 100).toFixed(2)}%` : '0%'
  }

  function handleRandomTrackGeneration(duration: number | undefined) {
    if (duration && !randomTrack.isGenerated) {
      randomTrack.duration = Math.floor(Math.random() * (duration - 1)) + 1
      randomTrack.isGenerated = true
    }
  }

  async function handleRandomTrackTime(
    currentTime: number,
    duration: number | undefined
  ) {
    if (randomTrack.isSend || !duration) return

    if (currentTime >= randomTrack.duration) {
      randomTrack.isSend = true
      await trackListening({
        duration: randomTrack.duration || 0,
        musicId: track.value.id,
      })
    }
  }

  function updateTime() {
    if (!player.value) return
    const { currentTime, duration } = player.value

    range.value = currentTime
    selectedTrack.progress = calculateProgress(currentTime, duration)
    selectedTrack.currentTime = formatMusicDuration(currentTime)

    handleRandomTrackGeneration(duration)

    handleRandomTrackTime(currentTime, duration)
  }

  function loadMetadata() {
    if (!player.value) return

    selectedTrack.duration = formatMusicDuration(trackDuration.value)
    range.min = 0
    range.max = trackDuration.value
    range.value = 0
  }

  function handleTrackEnd() {
    if (!player.value) return

    if (player.value && repeatMusic.one) {
      player.value.currentTime = 0
      player.value?.play()
    } else if (!repeatMusic.one && !repeatMusic.all) {
      player.value.currentTime = 0
      player.value?.pause()
    } else {
      handleUpdateTrack(1)
    }
  }

  // Lifecycle Hooks
  onMounted(() => {
    if (!player.value) return

    loadHls(track.value.file_path)

    player.value.addEventListener('timeupdate', updateTime)
    player.value.addEventListener('loadedmetadata', loadMetadata)
    player.value.addEventListener('ended', handleTrackEnd)
  })

  // Cleanup
  onUnmounted(() => {
    player.value?.removeEventListener('timeupdate', updateTime)
    player.value?.removeEventListener('loadedmetadata', loadMetadata)
    player.value?.removeEventListener('ended', handleTrackEnd)
  })
</script>

<template>
  <div class="player">
    <div class="player__progress-bar">
      <div
        class="player-progress-bar"
        @mousemove="updateTooltip"
        @mouseleave="hideTooltip"
      >
        <input
          type="range"
          class="player-progress-bar__progress-range"
          @input="rangeChange"
          :min="range.min"
          :max="range.max"
          v-model.number="range.value"
        />
        <div
          class="player-progress-bar__progress-line"
          :style="`width: ${selectedTrack.progress}`"
        ></div>
        <div class="player-progress-bar__loading">
          <span :style="`width: ${selectedTrack.hlsLoadProgress}`"></span>
        </div>
        <div
          class="player-progress-bar__tooltip"
          :style="{
            left: tooltipX + 'px',
            display: isTooltipVisible ? 'block' : 'none',
          }"
        >
          {{ tooltipTime }}
        </div>
      </div>
    </div>
    <div class="player__body">
      <div class="player__controllers">
        <div class="player-track-controllers">
          <div class="player-track-controllers__controller">
            <button
              class="player-track-controllers__prev"
              :disabled="
                !repeatMusic.all && !repeatMusic.one && selectedTrackIndex === 0
              "
              @click="handleUpdateTrack(-1)"
            >
              <IconPlayerNext />
            </button>
          </div>
          <div class="player-track-controllers__controller">
            <button
              class="player-track-controllers__play-pause"
              @click="togglePlayPause"
            >
              <IconPlayerPause v-if="isPlaying" />
              <IconPlayerPlay v-else />
            </button>
          </div>
          <div class="player-track-controllers__controller">
            <button
              class="player-track-controllers__next"
              :disabled="
                !repeatMusic.all &&
                !repeatMusic.one &&
                selectedTrackIndex === blockDataLength - 1
              "
              @click="handleUpdateTrack(1)"
            >
              <IconPlayerNext />
            </button>
          </div>
          <div class="player-track-controllers__controller">
            <button
              @click="togglePlayerPreview"
              class="player-track-controllers__playlist"
            >
              <IconPlayerPlaylist />
            </button>
          </div>
        </div>
      </div>
      <div class="player__album">
        <div class="player-album">
          <div class="player-album__image">
            <img
              :src="`${imageBasePath}?image_name=${track?.image_path}.webp`"
              :alt="track?.title"
              :title="track?.title"
              loading="lazy"
            />
          </div>
          <div class="player-album__content">
            <div class="player-album__name">{{ track?.title }}</div>
            <div class="player-album__info">
              {{ track?.singers?.map((singer: any) => singer.name).join(', ') }}
            </div>
          </div>
        </div>
      </div>
      <div class="player__actions">
        <div class="player-actions">
          <div class="player-actions__action player-actions__action_no-action">
            <div class="player-actions__icon">
              <IconPlayerHeadphone />
            </div>
            <div class="player-actions__count">
              {{ formatCount(track.listening_count) }}
            </div>
          </div>
          <button
            class="player-actions__action player-actions__action_favorite"
          >
            <div class="player-actions__icon">
              <IconPlayerHeart />
            </div>
            <div class="player-actions__count">
              {{ formatCount(track.listening_count) }}
            </div>
          </button>
          <!-- <button class="player-actions__action player-actions__action_share">
            <div class="player-actions__icon">
              <IconPlayerShare />
            </div>
            <div class="player-actions__count">32</div>
          </button> -->
          <!-- <button class="player-actions__action player-actions__action_share">
            <div class="player-actions__icon">
              <IconPlayerBookmark />
            </div>
            <div class="player-actions__count">256</div>
          </button> -->
          <button
            class="player-actions__action player-actions__action_download"
          >
            <div class="player-actions__icon">
              <IconPlayerDownload />
            </div>
            <div class="player-actions__count">
              {{ formatCount(track.download_count) }}
            </div>
          </button>
        </div>
      </div>
      <div class="player__controllers">
        <div class="player-track-actions">
          <div class="player-track-actions__action">
            <button
              class="player-track-actions__repeat"
              v-if="repeatMusic.all"
              @click="updateRepeatMusic('all')"
            >
              <IconPlayerRepeatAll />
            </button>
            <button
              class="player-track-actions__repeat"
              v-else-if="repeatMusic.one"
              @click="updateRepeatMusic('one')"
            >
              <IconPlayerRepeatOne />
            </button>
            <button
              class="player-track-actions__repeat"
              v-else
              @click="updateRepeatMusic()"
            >
              <IconPlayerRepeat />
            </button>
          </div>
          <div class="player-track-actions__action">
            <button
              v-if="!isRandomPlayTrack"
              class="player-track-actions__shuffle"
              @click="updateRandomPlayTrack"
            >
              <IconPlayerShuffleOff />
            </button>
            <button
              class="player-track-actions__shuffle"
              v-else
              @click="updateRandomPlayTrack"
            >
              <IconPlayerShuffle />
            </button>
          </div>
          <div class="player-track-actions__action">
            <div class="player-track-actions__volume">
              <div class="player-volume">
                <button @click="toggleVolume" class="player-volume__button">
                  <IconPlayerVolumeAll v-if="volume > 0" />
                  <IconPlayerVolumeOff v-else />
                </button>
                <div v-if="showVolume" class="player-volume__range-box">
                  <div class="player-volume__range">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      v-model.number="volume"
                      @input="updateVolume"
                    />
                    <div
                      class="player-volume__range-progress-line"
                      :style="{ height: `${volume}%` }"
                    ></div>
                    <div
                      class="player-volume__range-progress-thumb"
                      :style="{ bottom: `calc(${volume}% - 8px)` }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="player__audio">
      <audio ref="player" id="hls-audio" autoplay></audio>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
