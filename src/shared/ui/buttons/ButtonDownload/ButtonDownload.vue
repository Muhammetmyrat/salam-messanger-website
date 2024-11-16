<template>
  <SButton>
    <div class="button-download">
      <div class="button-download__icon">
        <IconDownload />
      </div>
      <div class="button-download__text">Downloads</div>
    </div>
  </SButton>
</template>

<script setup lang="ts">
  import { SButton } from '@/shared/ui/buttons'
  import { IconDownload } from '@/shared/ui/Icons'
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
