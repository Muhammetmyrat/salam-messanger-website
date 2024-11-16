<template>
  <AuthorizationBox title="Номер телефона">
    <form @submit.prevent="sendSms" class="authorization-phone">
      <div class="authorization-phone__location">
        <Dropdown @select-item="selectCountryCode" :selected-item="selectedCountryCode" :items="countryCodes" />
      </div>
      <div class="authorization-phone__number">
        <div class="authorization-phone__country-code">
          <span>+</span>
          <TextField :value="checkPhoneForm.country_code" disabled />
        </div>
        <div class="authorization-phone__phone-number">
          <TextField v-model="checkPhoneForm.phone_number" type="number" />
        </div>
      </div>
      <div class="authorization-phone__privacy-description">
        Нажимая <a href="#">“Отправить”</a> Я соглашаюсь с <a href="#">политикой конфиденциальности</a> и
        <a href="#">правилами пользования</a>
      </div>
      <div class="authorization-phone__send">
        <SButton type="submit">Отправить</SButton>
      </div>
    </form>
  </AuthorizationBox>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  import { AuthorizationBox } from '@/entities/auth'
  import { Dropdown } from '@/shared/ui/Dropdown'
  import { TextField } from '@/shared/ui/TextField'
  import { SButton } from '@/shared/ui/buttons'

  import { AuthModel } from '@/entities/auth'
  import { IDevice } from '@/entities/auth/model'

  const authStore = AuthModel.useAuthStore()

  const checkPhoneForm = ref<IDevice>({
    country_code: 993,
    device: {
      model: 'WEB',
      name: 'Google inc',
      system: 'Mac OS',
      system_version: '1.1',
      uniq_key: 'd89Y3N0RT8932BBF89T398RT8FTB9WT9'
    },
    fcm_token: 'firebase token',
    phone_number: '64097043'
  })

  const selectedCountryCode = ref({})

  const countryCodes = [
    { code: 993, name: 'Turkmenistan' },
    { code: 993, name: 'Turkmenistan' },
    { code: 993, name: 'Turkmenistan' },
    { code: 993, name: 'Turkmenistan' },
    { code: 993, name: 'Turkmenistan' },
    { code: 993, name: 'Turkmenistan' },
    { code: 993, name: 'Turkmenistan' },
    { code: 993, name: 'Turkmenistan' }
  ]

  selectCountryCode(countryCodes[0])

  function selectCountryCode(countryCode: any) {
    selectedCountryCode.value = countryCode
    checkPhoneForm.value.country_code = countryCode.code
  }

  async function sendSms() {
    checkPhoneForm.value.phone_number = Number(checkPhoneForm.value.phone_number)

    const status = await authStore.sendSms(checkPhoneForm.value)
  }
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
