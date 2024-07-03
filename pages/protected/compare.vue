<script setup lang="ts">
definePageMeta({
    //middleware: 'auth'
});
const route = useRoute();
let arr = [];
if(route.query.compare) {
    arr = route.query.compare;
}
const objectListStore = useObjectListStore();

const navigateToComparisonAltern = () => {
    const objectIds: number[] = objectListStore.getObjectIds;
    if(objectIds.length == 2) {
        navigateTo(`/protected/compare_altern?compare=[${objectIds[0]},${objectIds[1]}]`);
    }
};


</script>
<template>
  <div>
    <div class="container">
      <div class="breadcrumbs text-sm">
        <ul>
          <li><a href="/">Home</a></li>
          <li>
            <span class="text-accent">
              {{ $t('filmidentification') }}
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <button
        title="Navigate to Alternate View"
        class="btn btn-primary btn-ghost hidden"
        @click="navigateToComparisonAltern"
      >
        Alternativ
      </button>
      <div v-if="arr">
        <GlobalCompareView :items="objectListStore.getObjectIds" />
      </div>
      <div v-else>
        no data to compare
      </div>
    </div>
  </div>
</template>