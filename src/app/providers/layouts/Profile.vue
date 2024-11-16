<script setup lang="ts">
  import { MainLayout } from '@/shared/ui/layouts'
  import { TheSidebar } from '@/widgets/TheSidebar'
</script>

<template>
  <MainLayout>
    <template v-slot:sidebar>
      <TheSidebar />
    </template>
  </MainLayout>
</template>
