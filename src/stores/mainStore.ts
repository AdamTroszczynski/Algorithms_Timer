import { ref, computed, type Ref } from 'vue';
import { defineStore } from 'pinia';
import { algorithmNames } from '@/enums/algorithmNames';

export const useMainStore = defineStore('main', () => {
  const dataVolume: Ref<number> = ref(10000);
  const maxTime: Ref<number> = ref(120);
  const selectedAlgorithm: Ref<string> = ref(algorithmNames.selectedSort);

  const isTimerRunning: Ref<boolean> = ref(false);
  const isCompleted: Ref<boolean> = ref(false);
  const iteration: Ref<number> = ref(0);

  return {
    dataVolume,
    maxTime,
    selectedAlgorithm,
    isTimerRunning,
    isCompleted,
    iteration,
  };
});
