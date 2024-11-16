<template>
  <div class="chat-area">
    <div class="chat-area__body">
      <div class="chat-area__chat-list">
        <ChatList />
      </div>
      <div class="chat-area__char-room">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ChatList } from '@/widgets/chat/ChatList'
</script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
