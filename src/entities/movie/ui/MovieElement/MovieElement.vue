<template>
  <div class="movie-element">
    <div class="movie-element__main">
      <div class="movie-element__image">
        <img src="/images/book.svg" alt="book" />
      </div>
      <div class="movie-element__season-info">10 season, 31 episode</div>
      <div class="movie-element__watched" style="--watched: 50%"></div>
    </div>
    <div class="movie-element__info">
      <h3 class="movie-element__title">Book name</h3>
      <h4 class="movie-element__description">Author name</h4>
    </div>
  </div>
</template>

<script setup>
  import { IconAudioBookType, IconBookType } from '@/shared/ui/Icons'
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
