<template>
  <div class="settings-language">
    <div class="settings-language__header">
      <div class="settings-language__title">Languages</div>
    </div>
    <div class="settings-language__body">
      <ProfileSettingsItems>
        <SettingsItem :items="languages" />
      </ProfileSettingsItems>
    </div>
  </div>
</template>

<script setup lang="ts">
import  { computed } from 'vue'
import { ProfileSettingsItems } from '@/entities/profile/ui'
import { SettingsItem } from '@/features/profile/ui';
import { ProfileModel } from '@/entities/profile'


const { state } = ProfileModel.useProfileStore()

const languages = computed(() => state.settings.languages)
</script>

<style scoped lang="scss">
  @import 'styles.scss';
</style>
