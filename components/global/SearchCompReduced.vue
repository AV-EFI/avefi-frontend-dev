<template>
  <div class="min-w-96 min-h-24">
    <FormKit
      id="searchComp"
      v-model="searchDataStore.formData"
      type="form"
      :actions="false"
      name="searchComp"
    >
      <FormKit 
        id="regularSearch"
        type="group"
        name="regularSearch"
        preserve="true"
      />
      <FormKit
        v-model="searchTerm"
        label="Wert"
        name="searchTerm"
        placeholder="Suchbegriff"
        type="text"
      />
    </Formkit>
    <FormKit
      type="button"
      label="Suchen"
      title="Search"
      suffix-icon="search"
      class="btn-primary"
      @click="redirectToSearchScreen"
    />
  </div>
</template>
<script setup lang="ts">
const searchTerm = ref('');
const searchDataStore = useSearchParamsStore();


function redirectToSearchScreen () {
    navigateTo('/search_altern/index?q=' + searchTerm.value);
}

</script>