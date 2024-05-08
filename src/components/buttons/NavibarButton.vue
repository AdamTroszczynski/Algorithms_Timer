<template>
  <button
    @click="emitClickEvent"
    class="h-10 w-full font-montserrat text-xs rounded-full px-4 flex justify-center items-center md:text-sm lg:text-sm"
    :class="
      store.selectedFunction === name
        ? 'text-white font-bold bg-gradient-to-r from-gradients-blueStart to-gradients-blueEnd lg:font-bold'
        : 'text-black font-medium'
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
