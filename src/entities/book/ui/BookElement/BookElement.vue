<template>
  <div class="book-element">
    <div class="book-element__main">
      <div class="book-element__image">
        <img src="/images/book.svg" alt="book" />
      </div>
      <div class="book-element__types">
        <div class="book-element__type">
          <IconAudioBookType />
        </div>
        <div class="book-element__type">
          <IconBookType />
        </div>
      </div>
    </div>
    <div class="book-element__info">
      <h3 class="book-element__title">Book name</h3>
      <h4 class="book-element__author">Author name</h4>
    </div>
  </div>
</template>

<script setup>
  import { IconAudioBookType, IconBookType } from '@/shared/ui/Icons'
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
