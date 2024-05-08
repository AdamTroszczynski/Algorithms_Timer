<template>
  <div class="h-10 max-w-[500px] w-full bg-white shadow-lg rounded-full flex">
    <NavibarButton @click-action="setPath('sort')" :name="'sort'"
      >Sorting</NavibarButton
    >
    <NavibarButton @click-action="setPath('search')" :name="'search'"
      >Searching</NavibarButton
    >
    <NavibarButton @click-action="setPath('trees')" :name="'trees'"
      >Trees</NavibarButton
    >
    <NavibarButton @click-action="setPath('graphs')" :name="'graphs'"
      >Graphs</NavibarButton
    >
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/stores/mainStore';
import { useRouter } from 'vue-router';
import NavibarButton from '@/components/buttons/NavibarButton.vue';

const store = useMainStore();
const router = useRouter();

const setPath = (name: string): void => {
  store.selectedFunction = name;
  router.push(`/${name}`);
};
</script>
