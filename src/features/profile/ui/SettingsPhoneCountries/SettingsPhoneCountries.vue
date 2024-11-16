<template>
  <div class="phone-countries">
    <Dropdown @select-item="selectCountryCode" :selected-item="selectedCountryCode" :items="countryCodes" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { Dropdown } from '@/shared/ui/Dropdown'
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
    // checkPhoneForm.value.country_code = countryCode.code
  }
</script>

<style scoped lang="scss">
  @import 'styles.scss';
</style>
