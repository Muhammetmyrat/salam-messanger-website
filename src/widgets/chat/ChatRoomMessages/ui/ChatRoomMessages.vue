<template>
  <div class="chat-room-messages">
    <div class="chat-room-messages__wrapper">
      <div class="chat-room-messages__list">
        <template v-for="index in 5" :key="index">
          <div class="chat-room-messages__group" :id="index.toString()">
            <div class="chat-room-messages__item">
              <ChatRoomMessage />
            </div>
            <div class="chat-room-messages__item">
              <ChatRoomMessage />
            </div>
          </div>
          <div class="chat-room-messages__group">
            <div class="chat-room-messages__item chat-room-messages__item_inside">
              <ChatRoomMessage inside />
            </div>
            <div class="chat-room-messages__item chat-room-messages__item_inside">
              <ChatRoomMessage inside />
            </div>
            <div class="chat-room-messages__item chat-room-messages__item_inside">
              <ChatRoomMessage inside />
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ChatRoomMessage } from '@/entities/chat'
</script>

<style scoped>
  @import 'styles.scss';
</style>
