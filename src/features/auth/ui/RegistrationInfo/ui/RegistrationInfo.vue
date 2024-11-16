<template>
  <AuthorizationBox title="Информация">
    <form @submit.prevent="submitForm" class="authorization-info">
      <div class="authorization-info__name">
        <TextField v-model="infoForm.username" placeholder="Имя" />
      </div>
      <div class="authorization-info__description">
        <Textarea v-model="infoForm.about_me" placeholder="О себе" />
      </div>
      <div class="authorization-info__gender">
        <Dropdown
          @select-item="selectGender"
          :selected-item="selectedGender"
          :items="genders"
          placeholder="Пол: не выбран"
        />
      </div>
      <div class="authorization-info__skip">
        <router-link to="/">Пропустить</router-link>
      </div>
      <div class="authorization-info__submit">
        <SButton type="submit">Готово</SButton>
      </div>
    </form>
  </AuthorizationBox>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { AuthorizationBox } from '@/entities/auth'
  import { TextField } from '@/shared/ui/TextField'
  import { Textarea } from '@/shared/ui/Textarea'
  import { SButton } from '@/shared/ui/buttons'
  import { Dropdown } from '@/shared/ui/Dropdown'
  import { AuthModel } from '@/entities/auth'
  import type { IUpdateProfileForm } from '@/entities/auth/model'

  const router = useRouter()
  const authStore = AuthModel.useAuthStore()

  const infoForm = ref<IUpdateProfileForm>({
    avatar: '',
    username: '',
    gender_type: '',
    about_me: '',
    birthday: ''
  })

  async function submitForm(): Promise<void> {
    const status = await authStore.updateProfile(infoForm.value)

    if (status === 'UPDATED') {
      router.push('/')
    }
  }

  const genders = [
    { id: '0', name: 'Female' },
    { id: '1', name: 'Male' }
  ]
  const selectedGender = ref<any>(null)

  function selectGender(gender: any) {
    selectedGender.value = gender
    infoForm.value.gender_type = gender.id
  }
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
