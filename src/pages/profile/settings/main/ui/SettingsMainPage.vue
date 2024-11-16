<template>
  <ProfileBoxItem>
    <SettingsMain />
  </ProfileBoxItem>
  <RouterView />
</template>

<script setup lang="ts">
  import { ProfileBoxItem } from '@/entities/profile'
  import { SettingsMain } from '@/widgets/settings/SettingsMain'
</script>

<style scoped></style>
