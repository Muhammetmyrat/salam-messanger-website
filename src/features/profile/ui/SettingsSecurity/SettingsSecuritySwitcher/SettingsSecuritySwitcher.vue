<template>
  <div class="security">
    <Switcher v-model="state.settings.security.isSecurity" />
  </div>
</template>

<script setup lang="ts">
  import { Switcher } from '@/shared/ui/Switcher'
  import { ProfileModel } from '@/entities/profile'

  const { state } = ProfileModel.useProfileStore()
</script>

<style scoped lang="scss">
  @import 'styles.scss';
</style>
