<template>
  <div class="book-header">
    <div class="book-header__search">
      <BookSearch />
    </div>
    <div class="book-header__filter">
      <BookFilter />
    </div>
    <div class="book-header__download">
      <BookDownload />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { BookSearch, BookFilter, BookDownload } from '@/features/book'
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
