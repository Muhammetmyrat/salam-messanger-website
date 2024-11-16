<template>
  <div class="settings-blackList">
    <div class="settings-blackList__header">
      <div class="settings-blackList__title">Black list</div>
    </div>
    <div class="settings-blackList__body">
      <ProfileSettingsBlackList v-for="index in 10" :key="10">
        <SettingsBlackListActions />
      </ProfileSettingsBlackList>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProfileSettingsBlackList } from '@/entities/profile/ui/ProfileSettingsBlackList'
import { SettingsBlackListActions } from '@/features/profile/ui/SettingsBlackList'
</script>

<style scoped lang="scss">
  @import 'styles.scss';
</style>
