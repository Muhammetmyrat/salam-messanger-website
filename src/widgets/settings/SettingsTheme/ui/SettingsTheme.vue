<template>
  <div class="settings-theme">
    <div class="settings-theme__header">
      <h2 class="settings-theme__title">Theme</h2>
    </div>
    <div class="settings-theme__body">
      <ProfileSettingsItems>
        <SettingsItem
          :items="themes"
          @item-click="handleThemeChange"
        />
      </ProfileSettingsItems>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ProfileSettingsItems } from '@/entities/profile/ui'
import { SettingsItem } from '@/features/profile/ui'
import { ProfileModel } from '@/entities/profile'

const { state } = ProfileModel.useProfileStore()

const themes = computed(() => state.settings.themes)

const handleThemeChange = (item: { mode: string }) => {
  ProfileModel.toggleSettingsTheme(item.mode)
}
</script>

<style scoped lang="scss">
  @import 'styles.scss';
</style>
