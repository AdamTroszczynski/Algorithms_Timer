import { ref, computed, type Ref } from 'vue';
import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', () => {
  const selectedFunction: Ref<string> = ref('sort');
  return { selectedFunction };
});
