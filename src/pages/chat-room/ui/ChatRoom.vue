<template>
  <div class="chat-room">
    <div class="chat-room__header">
      <ChatRoomHeader />
    </div>
    <div class="chat-room__body">
      <div class="chat-room__messages">
        <ChatRoomMessages />
      </div>
      <div class="chat-room__send">
        <ChatRoomSendMessage />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ChatRoomHeader } from '@/widgets/chat/ChatRoomHeader'
  import { ChatRoomMessages } from '@/widgets/chat/ChatRoomMessages'
  import { ChatRoomSendMessage } from '@/widgets/chat/ChatRoomSendMessage'
</script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
