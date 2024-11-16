<template>
  <div class="player">
    <div class="player__progress-bar">
      <div class="player-progress-bar">
        <input type="range" class="player-progress-bar__progress-range" :min="0" :max="1000" />
        <div class="player-progress-bar__progress-line"></div>
      </div>
    </div>
    <div class="player__body">
      <div class="player__controllers">
        <div class="player-track-controllers">
          <div class="player-track-controllers__controller">
            <button class="player-track-controllers__play-pause">
              <IconPlayerPause />
            </button>
          </div>
          <div class="player-track-controllers__controller">
            <button class="player-track-controllers__next">
              <IconPlayerNext />
            </button>
          </div>
          <div class="player-track-controllers__controller">
            <button @click="musicStore.openPlayerPreview" class="player-track-controllers__playlist">
              <IconPlayerPlaylist />
            </button>
          </div>
        </div>
      </div>
      <div class="player__album">
        <div class="player-album">
          <div class="player-album__image">
            <img src="/images/book.svg" alt="image" />
          </div>
          <div class="player-album__content">
            <div class="player-album__name">Part 1</div>
            <div class="player-album__info">Part name test all</div>
          </div>
        </div>
      </div>
      <div class="player__actions">
        <div class="player-actions">
          <div class="player-actions__action player-actions__action_no-action">
            <div class="player-actions__icon">
              <IconPlayerHeadphone />
            </div>
            <div class="player-actions__count">12K</div>
          </div>
          <button class="player-actions__action player-actions__action_favorite">
            <div class="player-actions__icon">
              <IconPlayerHeart />
            </div>
            <div class="player-actions__count">16</div>
          </button>
          <button class="player-actions__action player-actions__action_share">
            <div class="player-actions__icon">
              <IconPlayerShare />
            </div>
            <div class="player-actions__count">32</div>
          </button>
          <button class="player-actions__action player-actions__action_share">
            <div class="player-actions__icon">
              <IconPlayerBookmark />
            </div>
            <div class="player-actions__count">256</div>
          </button>
          <button class="player-actions__action player-actions__action_download">
            <div class="player-actions__icon">
              <IconPlayerDownload />
            </div>
            <div class="player-actions__count">128</div>
          </button>
        </div>
      </div>
      <div class="player__controllers">
        <div class="player-track-actions">
          <div class="player-track-actions__action">
            <button class="player-track-actions__repeat">
              <IconPlayerRepeatAll />
            </button>
          </div>
          <div class="player-track-actions__action">
            <button class="player-track-actions__shuffle">
              <IconPlayerShuffle />
            </button>
          </div>
          <div class="player-track-actions__action">
            <div class="player-track-actions__volume">
              <div class="player-volume">
                <button @click="toggleVolume" class="player-volume__button">
                  <IconPlayerVolumeAll />
                </button>
                <div v-if="showVolume" class="player-volume__range-box">
                  <div class="player-volume__range">
                    <input type="range" min="0" max="100" />
                    <div class="player-volume__range-progress-line"></div>
                    <div class="player-volume__range-progress-thumb"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { MusicModel } from '@/entities/music'

  import {
    IconPlayerBookmark,
    IconPlayerDownload,
    IconPlayerHeadphone,
    IconPlayerHeart,
    IconPlayerShare,
    IconPlayerPause,
    IconPlayerNext,
    IconPlayerPlaylist,
    IconPlayerRepeatAll,
    IconPlayerShuffle,
    IconPlayerVolumeAll
  } from '@/shared/ui/Icons'

  const musicStore = MusicModel.useMusicStore()

  const showVolume = ref(false)

  const toggleVolume = () => {
    showVolume.value = !showVolume.value
  }
</script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
