<template>
  <div>
    <ClientOnly>
      <SearchInstantSearchTemplate
        :search-client="searchClient"
        :index-name="'21.11155'"
        :routing="true"
      />
    </ClientOnly>
  </div>
</template>

<script>
const index = process.env.ELASTIC_INDEX;
console.log(index);
import Client from '@searchkit/instantsearch-client';
import Searchkit from "searchkit";
import {config} from '@/searchConfig_avefi.ts';

const searchkitClient = new Searchkit(config);
const searchClient = Client(searchkitClient);
searchClient.config;
searchClient.routing = true;


export default {
    data() {
        return {
            searchClient,
            routing: true
        };
    }
};
</script>




<style>
@import url("https://cdn.jsdelivr.net/npm/instantsearch.css@8.2.1/themes/satellite-min.css");
body,
h1 {
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}

em {
  background: var(--accent);
  color: var(--primary-50);
  padding: .125rem;
  font-style: normal;
}

.ais-Highlight-highlighted, .ais-Snippet-highlighted {
  background: var(--accent);
  color: var(--primary-50);
  padding: .125rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.search-panel {
  display: flex;
}

.search-panel__filters {
  flex: 1;
}

.search-panel__results {
  flex: 3;
}

.searchbox {
  margin-bottom: 2rem;
}

.pagination {
  margin: 2rem auto;
  text-align: center;
}
</style>