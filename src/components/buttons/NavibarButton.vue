<template>
  <button
    @click="emitClickEvent"
    class="flex h-10 w-full items-center justify-center rounded-full px-4 text-xs md:text-sm lg:text-sm"
    :class="
      store.selectedFunction === name
        ? 'bg-gradient-to-r from-gradients-blueStart to-gradients-blueEnd font-bold text-white lg:font-bold'
        : 'font-medium text-black'
    "
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { useMainStore } from '@/stores/mainStore';

const store = useMainStore();

defineProps({
  name: {
    type: String,
    required: true,
  },
});

const emit = defineEmits<{
  /** Emit event after click button */
  (e: 'clickAction'): void;
}>();

/** Emit click action event */
const emitClickEvent = () => emit('clickAction');
</script>
