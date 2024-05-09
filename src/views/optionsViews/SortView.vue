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
import generateData from '@/algorithms/generateData';
import Worker from 'web-worker';
import { computed, ref, watch, type Ref } from 'vue';

const store = useMainStore();

const url = new URL('@/algorithms/sortingAlgorithms.ts', import.meta.url);
let worker: Worker;

const startAlgorithm = () => {
  if (worker !== undefined) worker.terminate();
  const data = generateData(store.dataVolume);
  worker = new Worker(url);
  worker.postMessage({ array: data, method: store.selectedAlgorithm });
  worker.addEventListener('message', handleResult);
};

const handleResult = (e: MessageEvent) => {
  if (typeof e.data === 'number') {
    store.iteration = e.data;
  } else {
    console.log(e.data);
    store.isTimerRunning = false;
    store.isCompleted = true;
  }
};

watch(
  () => store.isTimerRunning,
  () => {
    if (store.isTimerRunning === true) {
      startAlgorithm();
    } else {
      worker.removeEventListener('message', handleResult);
      worker.terminate();
    }
  },
);
</script>
