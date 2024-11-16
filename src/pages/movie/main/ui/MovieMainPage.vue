<template>
  <MainBox>
    <template v-slot:header>
      <MovieHeader />
    </template>
    <div class="movie-main">
      <div class="movie-main__preview">
        <MovieMainPreview />
      </div>
      <div class="movie-main__block">
        <MovieMainBlock />
      </div>
      <div class="movie-main__block">
        <MovieMainBlock />
      </div>
    </div>
  </MainBox>
</template>

<script setup lang="ts">
  import { MainBox } from '@/shared/ui/MainBox'
  import { MovieHeader } from '@/widgets/movie/MovieHeader'
  import { MovieMainPreview } from '@/widgets/movie/MovieMainPreview'
  import { MovieMainBlock } from '@/widgets/movie/MovieMainBlock'
</script>

<style scoped>
  @import './styles.scss';
</style>
