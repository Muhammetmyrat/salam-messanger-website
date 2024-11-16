<template>
  <MainBox>
    <template v-slot:header>
      <BookHeader />
    </template>
    <BookBlocks />
  </MainBox>
  <BookPreview />
</template>

<script setup lang="ts">
  import { MainBox } from '@/shared/ui/MainBox'
  import { BookHeader } from '@/widgets/book/BookHeader'
  import { BookBlocks } from '@/widgets/book/BookBlocks'
  import { BookPreview } from '@/widgets/book/BookPreview'
</script>
