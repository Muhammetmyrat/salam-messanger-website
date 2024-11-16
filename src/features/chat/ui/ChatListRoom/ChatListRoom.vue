<template>
  <div class="chat-room">
    <div class="chat-room__avatar">
      <Avatar active />
    </div>
    <div class="chat-room__info">
      <div class="chat-room__main">
        <div class="chat-room__username">Username</div>
        <div class="chat-room__message-reed-status">
          <IconRead />
        </div>
        <div class="chat-room__message-date">15:32</div>
      </div>
      <div class="chat-room__body">
        <div class="chat-room__description">
          Lorem Ipsum is simply dummy text of th assassra al printing and typesetting industry. Lorem Ipsum qzd.
        </div>
        <div class="chat-room__message-count">1024</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { IconRead } from '@/shared/ui/Icons'
  import { Avatar } from '@/entities/chat'
</script>

<style scoped lang="scss">
  @import 'styles.scss';
</style>
