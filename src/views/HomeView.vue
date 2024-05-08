<template>
  <div class="w-full h-full flex justify-between items-center p-4 flex-col">
    <NavigationBar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import NavigationBar from '@/components/common/NavigationBar.vue';
</script>
