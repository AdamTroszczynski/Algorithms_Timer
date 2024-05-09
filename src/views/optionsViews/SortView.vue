<template>
  <div
    class="relative z-10 flex w-full flex-col items-center justify-center gap-10"
  >
    <OptionsBar />
    <TimerController />
  </div>
</template>

<script setup lang="ts">
import OptionsBar from '@/widgets/OptionsBar.vue';
import TimerController from '@/widgets/TimerController.vue';
import { useMainStore } from '@/stores/mainStore';
import { computed, ref, type Ref } from 'vue';

const store = useMainStore();
</script>
