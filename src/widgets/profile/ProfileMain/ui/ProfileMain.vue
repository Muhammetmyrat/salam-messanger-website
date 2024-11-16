<template>
  <div class="profile-main">
    <div class="profile-main__header">
      <div class="profile-main-header">
        <div class="profile-main-header__username">Name Surname</div>
        <div class="profile-main-header__actions">
          <div class="profile-main-header__action">
            <a href="#">
              <IconProfileAdd />
            </a>
          </div>
          <div class="profile-main-header__action">
            <a href="#">
              <IconProfileNotification />
            </a>
          </div>
          <div class="profile-main-header__action">
            <router-link to="/profile/settings">
              <IconProfileSettings />
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="profile-main__info">
      <div class="profile-main-info">
        <div class="profile-main-info__user">
          <div class="profile-main-user">
            <div class="profile-main-user__image">
              <div class="profile-main-user__avatar">
                <Avatar active />
              </div>
              <button class="profile-main-user__edit">
                <IconProfileEdit />
              </button>
            </div>
            <div class="profile-main-user__username">Username</div>
          </div>
        </div>
        <div class="profile-main-info__counts">
          <div class="profile-main-info__count">
            <span>{{ profile.counts?.following_count }}</span>
            <p>Subscribes</p>
          </div>
          <div class="profile-main-info__count">
            <span>{{ profile.counts?.all_like_count }}</span>
            <p>Likes</p>
          </div>
          <div class="profile-main-info__count">
            <span>{{ profile.counts?.follower_count }}</span>
            <p>Followers</p>
          </div>
        </div>
      </div>
    </div>
    <div class="profile-main__publications">
      <div class="profile-main-publications">
        <div class="profile-main-publications__wrapper">
          <template v-for="index in 6" :key="index">
            <router-link :to="`/profile/publications?publication=${index}`" class="profile-main-publications__item">
              <div class="profile-main-publications__image">
                <img src="/publication/1.png" />
              </div>
            </router-link>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { Avatar } from '@/entities/chat'
  import { IconProfileAdd, IconProfileNotification, IconProfileSettings, IconProfileEdit } from '@/shared/ui/Icons'

  import { ProfileModel } from '@/entities/profile'
  const profileStore = ProfileModel.useProfileStore()

  const profile = computed(() => profileStore.profile)
</script>

<style scoped>
  @import 'styles.scss';
</style>
