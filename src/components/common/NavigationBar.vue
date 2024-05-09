<template>
  <div class="flex h-10 w-full max-w-[500px] rounded-full bg-white shadow-lg">
    <RouterLink
      :to="'/sort'"
      class="flex h-10 w-full items-center justify-center rounded-full px-4 text-xs md:text-sm lg:text-sm"
      :class="
        router.currentRoute.value.fullPath === '/sort'
          ? 'bg-gradient-to-r from-gradients-blueStart to-gradients-blueEnd font-bold text-white lg:font-bold'
          : 'font-medium text-black'
      "
      >Sorting</RouterLink
    >
    <RouterLink
      :to="'/search'"
      class="flex h-10 w-full items-center justify-center rounded-full px-4 text-xs md:text-sm lg:text-sm"
      :class="
        router.currentRoute.value.fullPath === '/search'
          ? 'bg-gradient-to-r from-gradients-blueStart to-gradients-blueEnd font-bold text-white lg:font-bold'
          : 'font-medium text-black'
      "
      >Searching</RouterLink
    >
    <RouterLink
      :to="'/trees'"
      class="flex h-10 w-full items-center justify-center rounded-full px-4 text-xs md:text-sm lg:text-sm"
      :class="
        router.currentRoute.value.fullPath === '/trees'
          ? 'bg-gradient-to-r from-gradients-blueStart to-gradients-blueEnd font-bold text-white lg:font-bold'
          : 'font-medium text-black'
      "
      >Trees</RouterLink
    >
    <RouterLink
      :to="'/graphs'"
      class="flex h-10 w-full items-center justify-center rounded-full px-4 text-xs md:text-sm lg:text-sm"
      :class="
        router.currentRoute.value.fullPath === '/graphs'
          ? 'bg-gradient-to-r from-gradients-blueStart to-gradients-blueEnd font-bold text-white lg:font-bold'
          : 'font-medium text-black'
      "
      >Graphs</RouterLink
    >
  </div>
</template>

<script setup lang="ts">
import { useRouter, RouterLink } from 'vue-router';

const router = useRouter();
</script>
