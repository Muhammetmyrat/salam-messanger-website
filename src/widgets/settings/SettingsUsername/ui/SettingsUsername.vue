<template>
  <div class="settings-username">
    <div class="settings-username__header">
      <div class="settings-username__title">Username</div>
    </div>
    <div class="settings-username__body">
      <div class="settings-username__input">
        <input type="text" />
      </div>
      <div class="settings-username__description">
        Имя пользователя должно начинатся: с латинских букв (a-z), цифр (0-9) и может содержать дефиc (-) подчёркивание
        (_) и точку. Длинна может составлять от 5 - 20 знаков
      </div>
      <button class="settings-username__submit">Save</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  @import 'styles.scss';
</style>
