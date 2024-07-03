<template>
  <div class="w-full xl:w-1/2 min-w-48 lg:min-w-64 min-h-24">
    <FormKit
      id="searchComp"
      v-model="searchDataStore.formData"
      type="form"
      :actions="false"
      name="searchComp"
    >
      <FormKit
        v-model="searchTerm"
        name="searchTerm"
        placeholder="Suchbegriff"
        type="text"
        prefix-icon="search"
        outer-class="w-full !ml-0 md:ml-2 !max-w-none xl:w-128"
        inner-class="!rounded-3xl"
        input-class="!text-lg p-2"
        autofocus
      />
      <FormKit
        type="button"
        label="Suchen"
        title="Search"
        class="btn-primary"
        @click="redirectToSearchScreen"
      />
    </Formkit>
  </div>
</template>
<script setup lang="ts">
const searchTerm = ref('');
const searchDataStore = useSearchParamsStore();


function redirectToSearchScreen () {
    navigateTo('/search_altern/index?q=' + searchTerm.value);
}

</script>