<template>
  <div class="mt-4 w-full">
    <h2>{{ $t('countdownworkshop') }}</h2>
    <div class="grid auto-cols-max grid-flow-col justify-center gap-3 md:gap-5 text-center">
      <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
        <span class="countdown font-mono text-3xl">
          <span :style="`--value:${days};`" />
        </span>
        <span class="text-xs">
          {{ $t('days') }}
        </span>
      </div>
      <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
        <span class="countdown font-mono text-3xl">
          <span :style="`--value:${hours};`" />
        </span>
        <span class="text-xs">
          {{ $t('hours') }}
        </span>
      </div>
      <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
        <span class="countdown font-mono text-3xl">
          <span :style="`--value:${minutes};`" />
        </span>
        <span class="text-xs">
          {{ $t('minutes') }}
        </span>
      </div>
      <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
        <span class="countdown font-mono text-3xl">
          <span :style="`--value:${seconds};`" />
        </span>
        <span class="text-xs">
          {{ $t('seconds') }}
        </span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const dateofworkshop = Date.parse("2024-09-10T11:00:00");
//const datenow = Date.now();
const diff = ref(0);
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

function calcDiff(enddate:number) {
    const datenow = Date.now();
    diff.value = enddate - datenow;
    msToHMS(diff.value);
}

function msToHMS( ms:number ) {
    // 1- Convert to seconds:
    seconds.value = ms / 1000;
    days.value = Math.floor(seconds.value / (3600*24));
    seconds.value = seconds.value - (days.value * 3600*24);
    // 2- Extract hours:
    hours.value = Math.floor(seconds.value / 3600); // 3,600 seconds in 1 hour
    seconds.value = seconds.value % 3600; // seconds remaining after extracting hours
    // 3- Extract minutes:
    minutes.value = Math.floor(seconds.value / 60); // 60 seconds in 1 minute
    // 4- Keep only seconds not extracted to minutes:
    seconds.value = Math.floor(seconds.value % 60);
    //alert( hours+":"+minutes+":"+seconds);
}

setInterval(() => calcDiff(dateofworkshop), 1000);

</script>