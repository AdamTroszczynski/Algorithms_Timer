<template>
  <TheTimer
    :time="timerValue"
    :iteration="store.iteration"
    :is-failed="isFailed"
    :is-completed="store.isCompleted"
    :title="setTittle"
  />
</template>

<script setup lang="ts">
import TheTimer from '@/components/common/TheTimer.vue';
import { useMainStore } from '@/stores/mainStore';
import { computed, ref, watch, type Ref } from 'vue';

const store = useMainStore();

const timerValue: Ref<number> = ref(0);
const isFailed: Ref<boolean> = ref(false);
let intervalID: number;

const setTittle = computed<string>(() => {
  return isFailed.value
    ? 'Sorting Failed!'
    : store.isCompleted
      ? 'Sorting Completed'
      : store.isTimerRunning
        ? 'Sorting data...'
        : 'Waiting for start...';
});

const start = () => {
  store.iteration = 0;
  store.isCompleted = false;
  isFailed.value = false;
  timerValue.value = 0;
  store.isTimerRunning = true;
  setTimer();
};

const setTimer = () => {
  intervalID = setInterval(() => {
    timerValue.value++;
    if (timerValue.value >= store.maxTime) {
      isFailed.value = true;
      store.isTimerRunning = false;
      stopTimer();
      return;
    }
  }, 1000);
};

const stopTimer = () => {
  clearInterval(intervalID);
};

watch(
  () => store.isTimerRunning,
  () => {
    if (store.isTimerRunning === true) start();
    else stopTimer();
  },
);
</script>
