<template>
  <div class="chat-list">
    <div class="chat-list__head">
      <div class="chat-list__status">
        <div class="chat-list__connection">Connection...</div>
        <div class="chat-list__add-user">
          <AddContact />
        </div>
      </div>
      <div class="chat-list__history">
        <div class="chat-history">
          <div class="chat-history__slider">
            <div class="chat-history__item">
              <HistoryAdd />
            </div>
            <div v-for="index in 10" :key="index" class="chat-history__item">
              <HistoryItem />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="chat-list__rooms">
      <div class="chat-history__room">
        <CorrespondenceRequest />
      </div>
      <div v-for="index in 2" :key="index" class="chat-history__room">
        <ChatListRoom />
      </div>
      <div class="chat-history__room">
        <ChatListFavorites />
      </div>
      <div v-for="index in 10" :key="index" class="chat-history__room">
        <ChatListRoom />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {
    HistoryAdd,
    HistoryItem,
    ChatListRoom,
    AddContact,
    ChatListFavorites,
    CorrespondenceRequest
  } from '@/features/chat'
</script>

<style scoped lang="scss">
  @import 'styles.scss';
</style>
