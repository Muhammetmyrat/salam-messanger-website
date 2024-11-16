<template>
  <div class="devices">
    <div class="devices__wrapper">
      <div class="devices__content">
        <div class="devices__title">
          Текущий сеанс
        </div>
        <div class="devices__items">
          <div class="devices__item current">
            <div class="devices__item-name">
              <span>iPhone</span>
              <span>IOS</span>
            </div>
          </div>
        </div>
      </div>
      <div class="devices__content">
        <div class="devices__title">
          Другие сеансы
        </div>
        <div class="devices__items">
          <div class="devices__item">
            <div class="devices__item-name">
              <span>samsung</span>
              <span>Android</span>
            </div>
            <div class="devices__item-icon">
              <IconSettingsPhoneLaptop />
            </div>
          </div>
          <div class="devices__item">
            <div class="devices__item-name">
              <span>iPhone</span>
              <span>IOS</span>
            </div>
            <div class="devices__item-icon">
              <IconSettingsPhoneLaptop />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {
    IconSettingsPhoneLaptop
  } from '@/shared/ui/Icons'
</script>

<style scoped lang="scss">
  @import 'styles.scss';
</style>
