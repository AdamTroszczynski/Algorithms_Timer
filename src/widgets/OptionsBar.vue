<template>
  <div
    class="w-max-[500px] relative flex h-16 w-full items-center justify-between rounded-2xl bg-white py-3 pl-2 shadow-lg md:h-[70px] md:max-w-[700px]"
  >
    <InsertButton
      @input-event="(e) => (store.dataVolume = e)"
      :name="'Data amount'"
      :value="store.dataVolume"
    />
    <SelectButton
      @select-event="(e) => (store.selectedAlgorithm = e)"
      :name="'Selected Algorithm'"
      :value="store.selectedAlgorithm"
      :modal-name="'Select Algorithm!'"
      :options="[
        algorithmNames.selectedSort,
        algorithmNames.bubbleSort,
        algorithmNames.insertionSort,
      ]"
    />
    <InsertButton
      @input-event="(e) => (store.maxTime = e)"
      :name="'Maximum time'"
      :value="store.maxTime"
      :with-info="true"
      :info-message="'Insert value in seconds!'"
    />
    <IconButton
      @click-action="start"
      :icon="'start'"
      class="flex w-[50px] justify-center sm:w-[70px] md:w-[100px]"
    />
  </div>
</template>

<script setup lang="ts">
import { algorithmNames } from '@/enums/algorithmNames';
import { useMainStore } from '@/stores/mainStore';
import SelectButton from '@/components/buttons/SelectButton.vue';
import InsertButton from '@/components/buttons/InsertButton.vue';
import IconButton from '@/components/buttons/IconButton.vue';

const store = useMainStore();

const start = (): void => {
  console.log(store.dataVolume);
  console.log(store.selectedAlgorithm);
  console.log(store.maxTime);
};
</script>
