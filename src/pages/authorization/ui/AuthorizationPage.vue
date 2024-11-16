<template>
  <div class="authorization">
    <div class="authorization__wrapper">
      <CheckPhoneNumber v-if="authStore.authStep === 0" />
      <VerificationOtp v-if="authStore.authStep === 1" />
      <RegistrationName v-if="authStore.authStep === 2" />
      <RegistrationInfo v-if="authStore.authStep === 3" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { CheckPhoneNumber, VerificationOtp, RegistrationName, RegistrationInfo } from '@/features/auth'
  import { AuthModel } from '@/entities/auth'

  const authStore = AuthModel.useAuthStore()
</script>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
