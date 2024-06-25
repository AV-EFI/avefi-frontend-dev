<script setup lang="ts">
import jsondata from '../models/sampleData/random_iavefiwork_10.json';
</script>

<template>
  <div>
    <div class="p-4 rounded-xl bg-primary-100 dark:bg-primary-900 shadow-lg">
      <GlobalSearchComp />
    </div>
    <div class="mt-2 p-2 rounded-xl">
      <GlobalSearchResultsComp />
    </div>
  </div>
</template>