<template>
  <div class="main-box">
    <div class="main-box__header">
      <slot name="header" />
    </div>
    <div class="main-box__body">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import './styles.scss';
</style>
