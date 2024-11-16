<template>
  <ProfileBoxItem double>
    <div class="profile-publications">
      <div v-for="index in 10" :key="index" class="profile-publications__publication">
        <Publication />
      </div>
    </div>
  </ProfileBoxItem>
</template>

<script setup lang="ts">
  import { ProfileBoxItem } from '@/entities/profile'
  import { Publication } from '@/widgets/publication'
</script>

<style scoped lang="scss">
  .profile-publications {
    height: 100vh;
    overflow: auto;
    // .profile-publications__publication
    &__publication {
      &:not(:first-child) {
        margin-top: 1px;
      }
    }
  }
</style>
