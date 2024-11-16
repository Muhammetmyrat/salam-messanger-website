<template>
  <ProfileBox>
    <ProfileBoxItem>
      <ProfileMain />
    </ProfileBoxItem>
    <RouterView />
  </ProfileBox>
</template>

<script setup lang="ts">
  import { ProfileBox, ProfileBoxItem } from '@/entities/profile'
  import { ProfileMain } from '@/widgets/profile/ProfileMain'
</script>

<style scoped></style>
