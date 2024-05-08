<template>
  <button @click="emitClickEvent">
    <component :is="setIcon" />
  </button>
</template>

<script setup lang="ts">
import StartIcon from '@/components/icons/StartIcon.vue';
import BinIcon from '@/components/icons/BinIcon.vue';
import { computed, type Component } from 'vue';
const props = defineProps({
  icon: {
    type: String,
    required: true,
    validator(val: string): boolean {
      return ['start', 'bin'].includes(val);
    },
  },
});

const setIcon = computed<Component>(() => {
  switch (props.icon) {
    case 'start':
      return StartIcon;
    case 'bin':
      return BinIcon;
    default:
      return StartIcon;
  }
});

const emit = defineEmits<{
  /** Emit event after click button */
  (e: 'clickAction'): void;
}>();

/** Emit click action event */
const emitClickEvent = () => emit('clickAction');
</script>
