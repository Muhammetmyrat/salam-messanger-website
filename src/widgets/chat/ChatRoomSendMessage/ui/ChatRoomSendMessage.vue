<template>
  <div class="send-message">
    <div class="send-message__wrapper">
      <label class="send-message__select-file">
        <input type="file" />
        <IconChatFile />
      </label>
      <form class="send-message__text-area">
        <textarea placeholder="Сообщение..."></textarea>
      </form>
      <button class="send-message__voice">
        <IconMic />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { IconChatFile, IconMic } from '@/shared/ui/Icons'
</script>

<style scoped lang="scss">
  @import 'styles.scss';
</style>
