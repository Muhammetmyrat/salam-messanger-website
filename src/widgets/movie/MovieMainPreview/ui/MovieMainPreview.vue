<template>
  <div class="movie-main-preview">
    <div class="movie-main-preview__trailer">
      <button class="movie-main-preview__volume">
        <IconPlayerVolumeOff />
      </button>
      <div class="movie-main-preview__video">
        <video src="/video.mp4" poster="/movie.webp" autoplay muted loop></video>
      </div>
    </div>
    <div class="movie-main-preview__info">
      <div class="movie-main-preview-info">
        <div class="movie-main-preview-info__play">
          <div class="movie-main-preview-info__play-icon">
            <IconPlayerPlay />
          </div>
          <p>Watch</p>
        </div>
        <div class="movie-main-preview-info__name">Interstellar</div>
        <div class="movie-main-preview-info__description">
          Set in a dystopian future where humanity is embroiled in a catastrophic blight and famine, the film follows a
          group of astronauts who travel through a wormhole near Saturn in search of a new home for humankind.
        </div>
      </div>
    </div>
    <div class="movie-main-preview__actions">
      <div class="movie-main-preview-actions">
        <div class="movie-main-preview-actions__action movie-main-preview-actions__action_no-action">
          <div class="movie-main-preview-actions__icon">
            <IconEye />
          </div>
          <div class="movie-main-preview-actions__count">12K</div>
        </div>
        <button class="movie-main-preview-actions__action movie-main-preview-actions__action_favorite">
          <div class="movie-main-preview-actions__icon">
            <IconPlayerHeart />
          </div>
          <div class="movie-main-preview-actions__count">16</div>
        </button>
        <button class="movie-main-preview-actions__action movie-main-preview-actions__action_share">
          <div class="movie-main-preview-actions__icon">
            <IconPlayerShare />
          </div>
          <div class="movie-main-preview-actions__count">32</div>
        </button>
        <button class="movie-main-preview-actions__action movie-main-preview-actions__action_share">
          <div class="movie-main-preview-actions__icon">
            <IconPlayerBookmark />
          </div>
          <div class="movie-main-preview-actions__count">256</div>
        </button>
        <button class="movie-main-preview-actions__action movie-main-preview-actions__action_download">
          <div class="movie-main-preview-actions__icon">
            <IconPlayerDownload />
          </div>
          <div class="movie-main-preview-actions__count">128</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {
    IconPlayerVolumeOff,
    IconPlayerPlay,
    IconEye,
    IconPlayerHeart,
    IconPlayerShare,
    IconPlayerBookmark,
    IconPlayerDownload
  } from '@/shared/ui/Icons'
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
