<template>
  <div
    class="w-max-[500px] relative flex h-16 w-full items-center justify-between rounded-2xl bg-white py-3 pl-2 shadow-lg md:h-[70px] md:max-w-[700px]"
  >
    <ValueButton :name="'Data amount'" :value="'10000'" />
    <ValueButton :name="'Selected Algorithm'" :value="'BubleSort'" />
    <ValueButton :name="'Maximum time'" :value="'2 minutes'" />
    <IconButton
      @click-action="start"
      :icon="'start'"
      class="flex w-[50px] justify-center sm:w-[70px] md:w-[100px]"
    />
  </div>
</template>

<script setup lang="ts">
import ValueButton from '@/components/buttons/ValueButton.vue';
import IconButton from '@/components/buttons/IconButton.vue';

const start = (): void => {
  console.log('start');
};
</script>
