<template>
  <div class="book-blocks">
    <div v-for="index in 10" :key="index" class="book-blocks__block">
      <BookBlock />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { BookBlock } from '@/features/book'
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
