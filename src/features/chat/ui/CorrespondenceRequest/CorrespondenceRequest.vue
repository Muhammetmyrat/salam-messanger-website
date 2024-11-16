<template>
  <div class="correspondence-request">
    <div class="correspondence-request__avatar">
      <IconMailUnread />
    </div>
    <div class="correspondence-request__info">
      <div class="correspondence-request__title">Запросы на переписку</div>
      <div class="correspondence-request__counts">
        <p>10</p>
        <IconChatChevronForward />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { IconChatChevronForward, IconMailUnread } from '@/shared/ui/Icons'
</script>

<style scoped lang="scss">
  @import 'styles.scss';
</style>
