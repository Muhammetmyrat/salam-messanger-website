<template>
  <div class="settings">
    <div class="settings__header">
      <div class="settings__title">Settings</div>
    </div>
    <div class="settings__body">
      <div class="settings__groups">
        <div class="settings__group">
          <router-link to="/profile/settings/username" class="settings__item">
            <div class="settings__icon">
              <IconSettingsMention />
            </div>
            <div class="settings__item-title">Username</div>
            <div class="settings__more">
              <div class="settings__label">qbaaazz</div>
              <div class="settings__right">
                <IconSettingsChevronRight />
              </div>
            </div>
          </router-link>
          <router-link to="/profile/settings/phone-number" class="settings__item">
            <div class="settings__icon">
              <IconSettingsCall />
            </div>
            <div class="settings__item-title">Phone number</div>
            <div class="settings__more">
              <div class="settings__label">+99365093295</div>
              <div class="settings__right">
                <IconSettingsChevronRight />
              </div>
            </div>
          </router-link>
          <!-- <a href="#" class="settings__item">
            <div class="settings__icon">
              <IconSettingsArchive />
            </div>
            <div class="settings__item-title">Cache</div>
            <div class="settings__more">
              <div class="settings__label">238 MB</div>
              <div class="settings__right">
                <IconSettingsChevronRight />
              </div>
            </div>
          </a> -->
        </div>
        <div v-for="group in settingMenu" class="settings__group">
          <router-link v-for="groupItem in group" :to="groupItem.link" class="settings__item">
            <div class="settings__icon">
              <component :is="groupItem.icon" />
            </div>
            <div class="settings__item-title">{{ groupItem.name }}</div>
            <div class="settings__more">
              <div class="settings__label"></div>
              <div class="settings__right">
                <IconSettingsChevronRight />
              </div>
            </div>
          </router-link>
        </div>
        <div class="settings__group">
          <a href="" @click.prevent="exitPlatform" class="settings__item">
            <div class="settings__icon">
              <IconSettingsExit />
            </div>
            <div class="settings__item-title">Exit</div>
            <div class="settings__more">
              <div class="settings__label"></div>
              <div class="settings__right">
                <IconSettingsChevronRight />
              </div>
            </div>
          </a>
          <a href="" @click.prevent="deleteAccount" class="settings__item">
            <div class="settings__icon">
              <IconSettingsPersonDelete />
            </div>
            <div class="settings__item-title">Delete account</div>
            <div class="settings__more">
              <div class="settings__label"></div>
              <div class="settings__right">
                <IconSettingsChevronRight />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <Teleport to="#pop-up">
      <PopUpConfirm v-if="isConfirmVisible"  @close="isConfirmVisible = false"/>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import {
    IconSettingsChevronRight,
    IconSettingsMention,
    IconSettingsCall,
    IconSettingsShield,
    IconSettingsPhoneLaptop,
    IconSettingsDarkTheme,
    IconSettingsLocalLanguage,
    IconSettingsNotification,
    IconSettingsLockClosed,
    IconSettingsQrCode,
    IconSettingsPersonDelete,
    IconSettingsBulletList,
    IconSettingsDocumentBulletList,
    IconSettingsPersonSupport,
    IconSettingsAboutUs,
    IconSettingsExit
  } from '@/shared/ui/Icons'

  import { PopUpConfirm } from '@/shared/ui/popUp/PopUpConfirm'

  const isConfirmVisible = ref(false)
  const settingMenu = [
    [
      { id: '1', icon: IconSettingsShield, name: 'Security', link: '/profile/settings/security' },
      { id: '2', icon: IconSettingsPhoneLaptop, name: 'Devices', link: '/profile/settings/devices' },
      { id: '3', icon: IconSettingsDarkTheme, name: 'Theme', link: '/profile/settings/themes' },
      { id: '4', icon: IconSettingsLocalLanguage, name: 'Language', link: '/profile/settings/languages' }
    ],
    [
      { id: '5', icon: IconSettingsNotification, name: 'Notification', link: '' },
      { id: '6', icon: IconSettingsLockClosed, name: 'Confidential', link: '' },
      { id: '7', icon: IconSettingsQrCode, name: 'QR Code', link: '/profile/settings/qr-code' }
    ],
    [
      { id: '8', icon: IconSettingsPersonDelete, name: 'Black list', link: '/profile/settings/black-list' },
      { id: '9', icon: IconSettingsBulletList, name: 'Private Policy', link: '' },
      { id: '10', icon: IconSettingsDocumentBulletList, name: 'Terms and conditions', link: '' },
      { id: '11', icon: IconSettingsPersonSupport, name: 'Support', link: '' },
      { id: '12', icon: IconSettingsAboutUs, name: 'About us', link: '' }
    ],
  ]

  const exitPlatform = () => {
    isConfirmVisible.value = true
  }


  const deleteAccount = () => {
    isConfirmVisible.value = true
  }
</script>

<style scoped>
  @import 'styles.scss';
</style>
