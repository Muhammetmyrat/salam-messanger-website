<template>
  <div class="settings-security">
    <div class="settings-security__header">
      <div class="settings-security__title">Security</div>
    </div>
    <div class="settings-security__body">
      <div class="settings-security__sub-title">
        Защита
      </div>
      <div class="settings-security__switcher">
        <SettingsSecuritySwitcher />
      </div>
    </div>
  </div>

  <Teleport to="#pop-up">
    <ProfileSettingsSecurityPass v-if="state.settings.security.isSecurity">
      <template #fields>
        <SettingsSecurityFields />
      </template>
      <template #actions>
        <SettingsSecurityActions />
      </template>
    </ProfileSettingsSecurityPass>
  </Teleport>
</template>

<script setup lang="ts">
import { SettingsSecuritySwitcher } from '@/features/profile/ui/SettingsSecurity'
import { ProfileSettingsSecurityPass } from '@/entities/profile/ui/PopUp'
import { SettingsSecurityFields } from '@/features/profile/ui/SettingsSecurity'
import { SettingsSecurityActions } from '@/features/profile/ui/SettingsSecurity'

import { ProfileModel } from '@/entities/profile'

const { state } = ProfileModel.useProfileStore()

</script>

<style scoped lang="scss">
  @import 'styles.scss';
</style>
