<template>
  <div class="chat-room-favorites">
    <div class="chat-room-favorites__icon">
      <IconChatBookmark />
    </div>
    <div class="chat-room-favorites__info">
      <div class="chat-room-favorites__main">
        <div class="chat-room-favorites__username">Username</div>
        <div class="chat-room-favorites__message-reed-status">
          <IconRead />
        </div>
        <div class="chat-room-favorites__message-date">15:32</div>
      </div>
      <div class="chat-room-favorites__body">
        <div class="chat-room-favorites__description">
          Lorem Ipsum is simply dummy text of th assassra al printing and typesetting industry. Lorem Ipsum qzd.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { IconChatBookmark, IconRead } from '@/shared/ui/Icons'
</script>

<style scoped lang="scss">
  @import 'styles.scss';
</style>
