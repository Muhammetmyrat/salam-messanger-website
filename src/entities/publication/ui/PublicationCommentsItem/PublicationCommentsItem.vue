<template>
  <div class="publication-comments-item">
    <div class="publication-comments-item__avatar">
      <Avatar />
    </div>
    <div class="publication-comments-item__content">
      <div class="publication-comments-item__info-action">
        <div class="publication-comments-item__info">
          <div class="publication-comments-item__username">Username</div>
          <div class="publication-comments-item__comment-date">15:55 | 27.07.2024</div>
        </div>
        <button class="publication-comments-item__action">
          <IconMoreVertical />
        </button>
      </div>
      <div class="publication-comments-item__message">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the
      </div>
      <a href="#" class="publication-comments-item__reply">Reply</a>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Avatar } from '@/entities/chat'
  import { IconMoreVertical } from '@/shared/ui/Icons'
</script>

<style scoped>
  @import './styles.scss';
</style>
