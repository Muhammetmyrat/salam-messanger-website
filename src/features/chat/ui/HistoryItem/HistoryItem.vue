<template>
  <div class="history-item">
    <div class="history-item__main">
      <div class="history-item__avatar">
        <Avatar active />
      </div>
    </div>
    <div class="history-item__title">Storie avatr user</div>
  </div>
</template>

<script setup lang="ts">
  import { Avatar } from '@/entities/chat'
</script>

<style scoped lang="scss">
  @import 'styles.scss';
</style>
