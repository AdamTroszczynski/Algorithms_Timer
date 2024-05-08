<template>
  <div class="flex h-full w-full flex-col items-center gap-4 p-4">
    <NavigationBar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import NavigationBar from '@/components/common/NavigationBar.vue';
</script>
