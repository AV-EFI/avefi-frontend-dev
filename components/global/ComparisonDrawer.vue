<template>
  <div class="drawer drawer-end">
    <client-only>
      <input
        id="comparison_drawer"
        type="checkbox"
        class="drawer-toggle"
        :checked="objectListStore.comparisonDrawerOpen"
      >
      <div class="drawer-side z-20">
        <label
          aria-label="close sidebar"
          class="drawer-overlay z-99"
          @click="toggleDrawer"
        />
        <div class="menu p-4 w-96 min-h-full bg-base-50 dark:bg-neutral dark:border-left-white dark:border-l-2 border-neutral-400 text-base-content">
          <div class="w-100 flex flex-row justify-between p-2">
            <button 
              class="btn btn-outline btn-primary w-1/3"
              title="Close drawer"
              @click="$toggleComparisonDrawerState"
            >
              <Icon name="formkit:caretright" />
            </button>
            <button
              title="Go to comp"
              class="btn btn-secondary w-1/3"
              :class="objectListStore.objects.length !== 2 && 'btn-disabled'"
              @click="navigateToComparison"
            >
              <Icon name="material-symbols:compare" />
            </button>
          </div>
          <ul class="mt-2 p-2">
            <li
              v-for="(object, index) in objectListStore.objects"
              :key="index"
              class="text-lg mt-2 border-2 rounded-xl border-zinc-300 p-3"
            >
              {{ object.filmTitle }}
              <button
                :title="`Remove '${object.filmTitle}' from comparison`"
                class="btn btn-error btn-outline"
                @click="removeObject(index)"
              >
                Remove
              </button>
            </li>
          </ul>
          <div class="mt-2 p-2">
            <button
              class="btn btn-error btn-block"
              title="Clear comparison"
              @click="removeAllObjects"
            >
              Clear All
            </button>
          </div>
          <div class="hidden">
            {{ objectListStore.getObjectIds }}
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>
<script setup lang="ts">

const objectListStore = useObjectListStore();
const toggleDrawer = (() => {
    objectListStore.comparisonDrawerOpen = !objectListStore.comparisonDrawerOpen;
});

const removeObject = (index) => {
    objectListStore.removeObject(index);
};

const removeAllObjects = () => {
    console.log("removeAll");
    objectListStore.removeAllObjects();
    console.log('Objects after removal:', objectListStore.objects);
};

const navigateToComparison = () => {
    const objectIds: string[] = objectListStore.getObjectIds;
    if(objectIds.length == 2) {
        navigateTo(`/protected/compare?prev=${objectIds[0]}&next=${objectIds[1]}`);
    }
};
</script>
