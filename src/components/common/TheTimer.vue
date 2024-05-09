<template>
  <div
    class="flex h-40 w-64 flex-col items-center justify-between rounded-[30px] bg-white px-11 py-5 shadow-xl md:h-60 md:w-[430px] md:py-8"
  >
    <h3
      class="text-center text-lg font-semibold md:text-xl"
      :class="setClasses"
    >
      {{ title }}
    </h3>
    <h2
      class="text-4xl font-semibold text-black md:text-5xl"
      :class="isFailed ? 'line-through' : ''"
    >
      {{ setTimer }}
    </h2>
    <h3 class="text-center text-base font-semibold text-grey md:text-xl">
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
  title: {
    type: String,
    required: true,
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

const setClasses = computed<String>(() => {
  return props.isCompleted
    ? 'text-green'
    : props.isFailed
      ? 'text-red'
      : 'text-grey';
});

const setTimer = computed<String>(() => {
  const hour = Math.floor(props.time / 3600);
  const minute = Math.floor((props.time % 3600) / 60);
  const second = props.time % 60;

  const displayHour = hour.toString().length === 1 ? `0${hour}` : `${hour}`;
  const displayMinute =
    minute.toString().length === 1 ? `0${minute}` : `${minute}`;
  const displaySecond =
    second.toString().length === 1 ? `0${second}` : `${second}`;

  return `${displayHour}:${displayMinute}:${displaySecond}`;
});
</script>
