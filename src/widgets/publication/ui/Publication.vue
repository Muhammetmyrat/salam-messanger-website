<template>
  <div class="publication">
    <div class="publication__main">
      <div class="publication__header">
        <div class="publication__user-info">
          <div class="publication__user-avatar">
            <Avatar />
          </div>
          <div class="publication__user-content">
            <p>Username</p>
            <span>15:55 | 27.07.2024</span>
          </div>
        </div>
        <div class="publication__more">
          <button>
            <IconMoreVertical />
          </button>
        </div>
      </div>
      <div class="publication__image">
        <img src="/publication/1.png" />
      </div>
      <div class="publication__actions">
        <div class="publication__actions-left">
          <div class="publication__action">
            <div class="publication__favorite publication__favorite_active">
              <button>
                <IconHeartFilled />
              </button>
              <span>560.5K</span>
            </div>
          </div>
          <div class="publication__action">
            <div class="publication__comment publication__comment_active">
              <button @click="toggleComments">
                <IconComment />
              </button>
              <span>0</span>
            </div>
          </div>
        </div>
        <div class="publication__actions-right">
          <div class="publication__action">
            <div class="publication__bookmark publication__bookmark_active">
              <button>
                <IconBookmarkFilled />
              </button>
              <span>56</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="publication__comments">
      <div class="publication-comments">
        <div class="publication-comments__header">
          <div class="publication-comments__title">Comments</div>
        </div>
        <div class="publication-comments__body">
          <div class="publication-comments__list">
            <div class="publication-comments__item">
              <PublicationCommentsItem />
              <div class="publication-comments__sub">
                <PublicationCommentsItem />
              </div>
            </div>
            <div v-for="index in 10" class="publication-comments__item">
              <PublicationCommentsItem />
            </div>
          </div>
          <form class="publication-comments__message">
            <label class="publication-comments__message-file">
              <input type="file" />
              <IconChatFile />
            </label>
            <textarea class="publication-comments__message-input" placeholder="Сообщение..."></textarea>
            <button class="publication-comments__send-message">
              <IconSend />
            </button>
          </form>
        </div>
      </div>
    </div>
    <div v-if="showComments" class="publication__likes">
      <div class="publication-likes">
        <div class="publication-likes__header">
          <div class="publication-likes__title">Likes</div>
          <button @click="toggleComments" class="publication-likes__dismiss">
            <IconDismiss />
          </button>
        </div>
        <div class="publication-likes__body">
          <div class="publication-likes__list">
            <div v-for="index in 10" class="publication-likes__item">
              <PublicationLikedUser />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { Avatar } from '@/entities/chat'
  import { PublicationCommentsItem, PublicationLikedUser } from '@/entities/publication'
  import {
    IconBookmarkFilled,
    IconChatFile,
    IconComment,
    IconDismiss,
    IconHeartFilled,
    IconMoreVertical,
    IconSend
  } from '@/shared/ui/Icons'

  const showComments = ref(false)
  function toggleComments() {
    showComments.value = !showComments.value
  }
</script>

<style scoped lang="scss">
  @import 'styles.scss';
</style>
