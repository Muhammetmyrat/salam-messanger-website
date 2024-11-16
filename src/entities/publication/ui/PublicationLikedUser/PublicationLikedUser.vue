<template>
  <div class="publication-liked-user">
    <div class="publication-liked-user__avatar">
      <Avatar active />
    </div>
    <div class="publication-liked-user__content">
      <div class="publication-liked-user__username">Username</div>
      <div class="publication-liked-user__last-login">15:55 | 27.07.2024</div>
    </div>
    <button class="publication-liked-user__button">Follow</button>
  </div>
</template>

<script setup lang="ts">
  import { Avatar } from '@/entities/chat'
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
