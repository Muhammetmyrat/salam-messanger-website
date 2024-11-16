<template>
  <div class="book-preview-main__type-box">
    <a href="#" class="book-preview-main__type book-preview-main__type_listen">
      <div class="book-preview-main__type-logo">
        <IconPlayerHeadphone />
      </div>
      <div class="book-preview-main__type-name">Listen</div>
    </a>
  </div>
</template>

<script setup lang="ts">
  import {
    IconPlayerHeadphone,
  } from '@/shared/ui/Icons'
</script>

<style scoped lang="scss">
@import './styles.scss';
</style>
