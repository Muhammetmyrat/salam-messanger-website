<template>
  <AuthorizationBox title="Верификация">
    <form @submit.prevent="verifySms" class="authorization-verification">
      <div class="authorization-verification__description">
        На номер: <span>+{{ authStore.device.country_code }}{{ authStore.device.phone_number }}</span> отправлено смс с
        кодом подтврждения
      </div>
      <div class="authorization-verification__otp-inputs">
        <div v-for="index in code.length" :key="index" class="authorization-verification__otp-input">
          <input
            v-model="code[index - 1]"
            @input="(event) => inputCode(event, index - 1)"
            type="number"
            maxlength="1"
          />
        </div>
      </div>
      <div class="authorization-verification__second">{{ otpTime }}</div>
      <a @click="backToNumber" href="#" class="authorization-verification__edit-number">изменить номер</a>
      <div class="authorization-verification__submit">
        <SButton>Отправить</SButton>
      </div>
    </form>
  </AuthorizationBox>
</template>

<script setup lang="ts">
  import { ref, onMounted, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { AuthorizationBox, AuthModel } from '@/entities/auth'
  import { SButton } from '@/shared/ui/buttons'

  const router = useRouter()
  const authStore = AuthModel.useAuthStore()

  const code = ref(['1', '2', '3', '4', '5'])

  const timeInSeconds = ref(0)
  const otpInterval = ref(false) as any
  const isSecondEnd = ref(false)

  const otpTime = computed(() => {
    const minutes = Math.floor(timeInSeconds.value / 60)
    const seconds = timeInSeconds.value % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  })

  onMounted(() => {
    startOtpTime()
    listenInputs()
  })

  async function verifySms() {
    const codeJoin = Number(code.value.join(''))
    const status = await authStore.verifySms(codeJoin)
    if (status === 'AUTHORIZED') {
      router.push('/')
    }
  }

  function backToNumber() {
    AuthModel.updateStep(0)
  }

  function inputCode(event: Event, index: number) {
    const newValue = (event.target as HTMLInputElement).value.slice(0, 1)
    code.value[index] = newValue
  }

  function startOtpTime() {
    timeInSeconds.value = 60
    isSecondEnd.value = false
    otpInterval.value = setInterval(() => {
      timeInSeconds.value--
      if (timeInSeconds.value <= 0) {
        isSecondEnd.value = true
        clearInterval(otpInterval.value)
      }
    }, 1000)
  }

  function listenInputs() {
    const inputs = document.querySelectorAll(
      '.authorization-verification__otp-input>input'
    ) as NodeListOf<HTMLInputElement>

    inputs.forEach((input: HTMLInputElement, index: number) => {
      input?.addEventListener('input', () => {
        if (input.value.length === input.maxLength && index + 1 < inputs.length) {
          inputs[index + 1]?.focus()
        }
      })
      input?.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace' && index > 0 && input.value.length === 0) {
          inputs[index - 1].focus()
        }
      })
    })
  }
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
