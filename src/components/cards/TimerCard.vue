<template>
  <div class="h-40 w-64 rounded-[30px] bg-white px-11 py-5 shadow-xl">
    <h3 class="text-center text-lg font-semibold" :class="setClasses">
      {{ setTitle }}
    </h3>
    <h2></h2>
    <h3 class="text-center text-base font-semibold text-grey">
      {{ isFailed ? 'Maximum time exceeded' : `${iteration} Iterations` }}
    </h3>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  time: {
    type: Number,
    required: true,
  },
  iteration: {
    type: Number,
    required: true,
  },
  isRunning: {
    type: Boolean,
    default: false,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  isFailed: {
    type: Boolean,
    default: false,
  },
});

const setTitle = computed<String>(() => {
  return props.isRunning
    ? 'Sorting data...'
    : props.isCompleted
      ? 'Sorting Completed'
      : props.isFailed
        ? 'Sorting Failed!'
        : 'Waiting for start...';
});

const setClasses = computed<String>(() => {
  return props.isCompleted
    ? 'text-green'
    : props.isFailed
      ? 'text-red'
      : 'text-grey';
});
</script>
