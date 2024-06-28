<template>
  <div>
    <div class="container">
      <ais-instant-search
        :search-client="searchClient"
        :index-name="indexName"
        :stalled-search-delay="1000"
        :show-loading-indicator="true"
        :routing="routing"
      >
        <ais-configure :hits-per-page.camel="8" />

        <div class="search-panel">
          <div class="search-panel__filters mr-3">
            <ais-panel>
              <template #header>
                <span class="text-base text-primary-400">
                  Type
                </span>
              </template>
              <ais-refinement-list attribute="type" />
            </ais-panel>

            <ais-panel>
              <template #header>
                <span class="text-base text-primary-400">
                  actors
                </span>
              </template>
              <ais-refinement-list
                searchable
                attribute="actors"
              />
            </ais-panel>
          </div>

          <div class="search-panel__results">
            <div class="searchbox">
              <ais-search-box
                autofocus 
                placeholder=""
                show-loading-indicator
              />
            </div>

            <ais-hits>
              <template #item="{ item, index }">
                <article>
                  <h1>
                    <ais-highlight
                      attribute="title"
                      :hit="item"
                      :alt="index"
                    />
                  </h1>
                  <p>
                    <ais-snippet
                      :hit="item"
                      attribute="plot"
                    />
                  </p>
                </article>
              </template>
            </ais-hits>

            <div class="pagination">
              <ais-pagination />
            </div>
          </div>
        </div>
      </ais-instant-search>
    </div>
  </div>
</template>


<script setup>

import { history as historyRouter } from 'instantsearch.js/es/lib/routers';
import { simple as simpleStateMapping } from 'instantsearch.js/es/lib/stateMappings';

const routing = {
    stateMapping: {
        stateToRoute(uiState) {
            const indexUiState = uiState[props.indexName];
            return {
                q: indexUiState.query,
                categories: indexUiState.menu && indexUiState.menu.categories,
                brand:
            indexUiState.refinementList && indexUiState.refinementList.brand,
                page: indexUiState.page,
            };
        },
        routeToState(routeState) {
            return {
                [props.indexName]: {
                    query: routeState.q,
                    menu: {
                        categories: routeState.categories,
                    },
                    refinementList: {
                        brand: routeState.brand,
                    },
                    page: routeState.page,
                },
            };
        },
    },
};

console.log(routing);

const props = defineProps({
    searchClient: {
        type: Object,
        required: true,
    },
    indexName: {
        type: String,
        required: true,
    },
});
</script>