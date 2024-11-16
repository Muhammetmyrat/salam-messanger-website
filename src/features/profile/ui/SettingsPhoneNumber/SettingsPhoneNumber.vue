<template>
  <div class="phone-number">
    <div class="phone-number__wrapper">
      <div class="phone-number__code">
        <TextField v-model="state.settings.phone.code" />
      </div>
      <div class="phone-number__number">
        <TextField v-model="state.settings.phone.number"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { TextField } from '@/shared/ui/TextField'
  import { ProfileModel } from '@/entities/profile'

  const { state } = ProfileModel.useProfileStore()
</script>

<style scoped lang="scss">
  @import 'styles.scss';
</style>
