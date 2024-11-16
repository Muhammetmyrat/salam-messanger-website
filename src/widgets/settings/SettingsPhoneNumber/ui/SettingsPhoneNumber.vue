<template>
  <div class="settings-phone">
    <div class="settings-phone__header">
      <div class="settings-phone__title">Change phone number</div>
    </div>
    <div class="settings-phone__body">
      <div class="settings-phone__sub-title">Укажите номер на который должен придти код подтверждения</div>
      <SettingsPhoneCountries />
      <SettingsPhoneNumber />
      <div class="settings-phone__description">
        После нажатия кнопки "отправить" на указанный Вами номер придет код подтверждения
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SettingsPhoneCountries from '@/features/profile/ui/SettingsPhoneCountries/SettingsPhoneCountries.vue';
import SettingsPhoneNumber from '@/features/profile/ui/SettingsPhoneNumber/SettingsPhoneNumber.vue';
</script>

<style scoped lang="scss">
  @import 'styles.scss';
</style>
