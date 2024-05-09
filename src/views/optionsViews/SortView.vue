<template>
  <div
    class="relative z-10 flex w-full flex-col items-center justify-center gap-10"
  >
    <OptionsBar />
    <TimerCard
      :time="3600"
      :iteration="200"
      :is-failed="false"
      :is-running="true"
    />
  </div>
</template>
<script setup lang="ts">
import OptionsBar from '@/widgets/OptionsBar.vue';
import TimerCard from '@/components/cards/TimerCard.vue';
</script>
