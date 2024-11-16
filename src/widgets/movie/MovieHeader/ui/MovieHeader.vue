<template>
  <div class="movie-header">
    <div class="movie-header__search">
      <MovieSearch />
    </div>
    <div class="movie-header__filter">
      <MovieFilter />
    </div>
    <div class="movie-header__download">
      <MovieDownload />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { MovieSearch, MovieFilter, MovieDownload } from '@/features/movie'
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
