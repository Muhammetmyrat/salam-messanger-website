<template>
  <div class="history-add">
    <div class="history-add__main">
      <div class="history-add__avatar">
        <Avatar active />
      </div>
      <div class="history-add__add-icon">
        <IconAddHistory />
      </div>
    </div>
    <div class="history-add__title">My Stories</div>
  </div>
</template>

<script setup lang="ts">
  import { IconAddHistory } from '@/shared/ui/Icons'
  import { Avatar } from '@/entities/chat'
</script>

<style scoped lang="scss">
  @import 'styles.scss';
</style>
