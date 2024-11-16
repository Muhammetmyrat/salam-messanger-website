<script setup lang="ts"></script>

<template>
  <div class="main">
    <div class="main__wrapper">
      <div class="main__sidebar">
        <slot name="sidebar" />
      </div>
      <div class="main__body">
        <router-view />
      </div>
    </div>
    
  </div>
</template>

<style lang="scss">
  @import './styles.scss';
</style>
