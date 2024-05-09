<template>
  <div
    class="w-max-[500px] relative flex h-16 w-full items-center justify-between rounded-2xl bg-white py-3 pl-2 shadow-lg md:h-[70px] md:max-w-[700px]"
  >
    <InsertButton @input-event="insert" :name="'Data amount'" :value="10000" />
    <SelectButton
      @select-event="select"
      :name="'Selected Algorithm'"
      :value="'Bubble Sort'"
      :modal-name="'Select Algorithm!'"
      :options="['Selection Sort', 'Bubble Sort', 'Insertion Sort']"
    />
    <InsertButton
      :name="'Maximum time'"
      :value="21000"
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
import SelectButton from '@/components/buttons/SelectButton.vue';
import InsertButton from '@/components/buttons/InsertButton.vue';
import IconButton from '@/components/buttons/IconButton.vue';

const start = (): void => {
  console.log('start');
};

const insert = (value: number): void => {
  console.log(value);
};

const select = (value: string): void => {
  console.log(value);
};
</script>
