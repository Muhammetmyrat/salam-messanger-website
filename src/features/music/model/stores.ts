import { ref, reactive } from 'vue'

// State
export const isShowPlayer = ref(false)
export const selectedBlockIndex = ref<number>(0)
export const selectedTrackIndex = ref<number>(0)
export const isPlaying = ref(false)
export const isRandomPlayTrack = ref(false)
export const block = ref<any>([])

export const repeatMusic = reactive({
  all: true,
  one: false,
})

// Methods

export const updateRandomPlayTrack = (): void => {
  isRandomPlayTrack.value = !isRandomPlayTrack.value
}

export const openPlayer = (): void => {
  isShowPlayer.value = true
}

export const closePlayer = (): void => {
  isShowPlayer.value = false
}

export const updateRepeatMusic = (payload?: string): void => {
  if (payload === 'all') {
    repeatMusic.one = true
    repeatMusic.all = false
  } else if (payload === 'one') {
    repeatMusic.all = false
    repeatMusic.one = false
  } else {
    repeatMusic.all = true
  }
}

export const updatePlaying = (playing: boolean): void => {
  isPlaying.value = playing
}
export const updateTrack = (direction = 0): void => {
  if (!block.value.data.length) return

  const trackCount = block.value.data.length

  let randomIndex = Math.floor(Math.random() * trackCount)

  // Ensure the random track is different from the current one
  while (randomIndex === selectedTrackIndex.value) {
    randomIndex = Math.floor(Math.random() * trackCount)
  }

  let newIndex =
    (selectedTrackIndex.value + direction + trackCount) % trackCount

  selectedTrackIndex.value = isRandomPlayTrack.value ? randomIndex : newIndex
  updatePlaying(true)
}

export const trackPlay = ({
  trackIndex,
  block: newBlock,
}: {
  trackIndex: number
  block: any
}): void => {
  const isSameTrack =
    selectedTrackIndex.value === trackIndex && block.value === newBlock

  if (isSameTrack) {
    updatePlaying(!isPlaying.value)
  } else {
    selectedTrackIndex.value = trackIndex
    block.value = newBlock

    openPlayer()
    updatePlaying(true)
  }
}
