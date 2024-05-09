import { ref, computed, type Ref } from 'vue';
import { defineStore } from 'pinia';
import { algorithmNames } from '@/enums/algorithmNames';

export const useMainStore = defineStore('main', () => {
  const dataVolume: Ref<number> = ref(10000);
  const maxTime: Ref<number> = ref(3600);
  const selectedAlgorithm: Ref<string> = ref(algorithmNames.selectedSort);

  return { dataVolume, maxTime, selectedAlgorithm };
});
