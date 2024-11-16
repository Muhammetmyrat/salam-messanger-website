<template>
  <div class="book-preview-main__type-box">
    <a href="#" class="book-preview-main__type book-preview-main__type_read">
      <div class="book-preview-main__type-logo">
        <IconBookDuo />
      </div>
      <div class="book-preview-main__type-name">Read</div>
    </a>
  </div>
</template>

<script setup lang="ts">
  import {
    IconBookDuo,
  } from '@/shared/ui/Icons'
</script>

<style scoped lang="scss">
@import './styles.scss';
</style>
