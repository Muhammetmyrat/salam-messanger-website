<template>
  <div class="chat-room-header">
    <div class="chat-room-header__user">
      <div class="chat-room-header-user">
        <div class="chat-room-header-user__avatar">
          <Avatar active />
        </div>
        <div class="chat-room-header-user__info">
          <div class="chat-room-header-user__username">Username</div>
          <div class="chat-room-header-user__last-login">Был(а) в 19:00</div>
        </div>
      </div>
    </div>
    <div class="chat-room-header__action">
      <button class="chat-header-more">
        <IconMoreVertical />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Avatar } from '@/entities/chat'
  import { IconMoreVertical } from '@/shared/ui/Icons'
</script>

<style scoped>
  @import 'styles.scss';
</style>
