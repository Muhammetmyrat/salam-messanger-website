<template>
  <AuthorizationBox title="Регистрация">
    <form @submit.prevent="registration" class="authorization-registration-main">
      <div class="authorization-registration-main__avatar">
        <label class="avatar-loader">
          <div v-if="prevAvatar" class="avatar-loader__image">
            <img :src="prevAvatar" alt="avatar" />
          </div>
          <div v-else class="avatar-loader__prev-icon">
            <IconAuthorizationAvatar />
          </div>
          <div class="avatar-loader__icon">
            <IconCamera />
          </div>
          <input @change="changeImage" type="file" accept="image/*" />
        </label>
        <div class="authorization-registration-main__avatar-label">Загрузите изображени профиля</div>
      </div>
      <div class="authorization-registration-main__name">
        <TextField v-model="registrationForm.nickname" placeholder="Имя пользователя" />
      </div>
      <div class="authorization-registration-main__description">
        Имя пользователя может включать: латинских букв (a-z), цифр (0-9) дефи (-) подчёркивание (_) и точку. Длинна
        должна быть от 5 - 30 знаков
      </div>
      <div class="authorization-registration-main__submit">
        <SButton type="submit">Далее</SButton>
      </div>
    </form>
  </AuthorizationBox>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { AuthorizationBox, AuthModel } from '@/entities/auth'
  import { TextField } from '@/shared/ui/TextField'
  import { SButton } from '@/shared/ui/buttons'
  import { IconAuthorizationAvatar, IconCamera } from '@/shared/ui/Icons'

  import { IRegistrationForm } from '@/entities/auth/model'

  const authStore = AuthModel.useAuthStore()

  const prevAvatar = ref('')

  const registrationForm = ref<IRegistrationForm>({
    avatar: '',
    nickname: '',
    firebase_token: 'firebase token'
  })

  async function registration() {
    await authStore.registration(registrationForm.value)
  }

  function changeImage(event: Event) {
    const target = event.target as HTMLInputElement
    if (target && target.files?.length) {
      registrationForm.value.avatar = target.files[0]

      prevAvatar.value = URL.createObjectURL(target.files[0])
    }
  }
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
