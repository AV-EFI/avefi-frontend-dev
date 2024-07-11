<template>
  <div>
    <NuxtLayout name="partial-layout-1-center">
      <template #actions>
        <div class="hidden">
          <div v-if="dataJsonModel.has_record.id">
            <AddToComparisonComp
              :film-id="dataJsonModel.has_record.id"
              :film-title="dataJsonModel.has_record.has_primary_title.has_name"
            />
          </div>
          <div class="ml-2">
            <GlobalSwitchGenericComp v-model="editMode" />
          </div>
        </div>
      </template>
      <template #cardBody>
        <div
          v-if="editMode === 'edit'"
          class="max-w-xl"
        >
          <Suspense>
            <FormsWorkFormComp v-model="dataJsonModel" />
          </Suspense>
        </div>
        <div v-else>
          <ViewsWorkViewComp v-model="dataJsonModel" />
        </div>
      </template>
    </NuxtLayout>
    <div class="collapse">
      <input type="checkbox"> 
      <div class="collapse-title font-medium">
        Raw data
      </div>
      <div class="collapse-content"> 
        <pre>{{ dataJsonModel }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import dataJson from '../../../models/sampleData/github/monographic_work_pid.json';
const editMode = ref('readonly');
const dataJsonModel = reactive(dataJson);

definePageMeta({
    //middleware: ["auth"]
    // or middleware: 'auth'
});

</script>
<style scoped>
  h2,h3 {
    color: var(--primary-500);
  }
  legend, label {
    color: var(--primary-600)!important;
  }
  a.external-link {
    color: var(--primary-400)!important;
  }
  a.external-link:before {
        font-family: "Font Awesome 5 Free";
        content: url('https://api.iconify.design/fa-regular:share-square.svg');
        display: inline-block;
        padding-right: 3px;
        vertical-align: middle;
        font-weight: 400;
        color: var(--primary-400)!important;
  }


</style>
