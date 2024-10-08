<template>
  <div>
    <div class="container">
      <ais-instant-search
        :search-client="searchClient"
        :index-name="indexName"
        :stalled-search-delay="1000"
        :show-loading-indicator="true"
        :routing="routing"
        :future="{preserveSharedStateOnUnmount: true}"
      >
        <ais-configure :hits-per-page.camel="20" />
        <ais-menu attribute="categories" />
        <div class="search-panel">
          <GlobalFacetDrawer />
          
          <!-- Center -->
          <div class="drawer-content w-full flex flex-col items-center justify-center">
            <div class="search-panel__results w-full">
              <div class="searchbox">
                <ais-search-box
                  autofocus 
                  :placeholder="$t('searchterm')"
                  show-loading-indicator
                  :class-names="{
                    'ais-SearchBox-input': 'appearance-none [color-scheme:light] dark:[color-scheme:dark] selection:text-zinc-700 group-data-[has-overlay]:selection:!text-transparent text-sm text-zinc-700 min-w-0 min-h-[1.5em] grow outline-none bg-transparent selection:bg-bali-hai-100 placeholder:!text-zinc-300 group-data-[disabled]:!cursor-not-allowed dark:placeholder:!text-zinc-200/50 dark:text-zinc-300 border-none p-0 focus:ring-0 formkit-input !text-lg p-2 !rounded-3xl',
                    'ais-SearchBox-form': 'MySearchBoxForm',
                  }"
                />
              </div>
              <div
                class="w-full flex flex-col md:flex-row justify-between md:justify-between"
                mb-2
              >
                <div class="w-full md:w-1/3 mb-1 flex flex-col justify-center">
                  <ais-stats>
                    <template #default="{ nbHits }">
                      <h3 class="text-lg">
                        {{ nbHits }} {{ $t('results') }}
                      </h3>
                    </template>
                  </ais-stats>
                </div>
                <div class="w-full md:w-1/3 mb-1">
                  <FormKit
                    type="select"
                    :label="$t('sorting')"
                    :disabled="true"
                    name="sort"
                    :options="[
                      'Standard',
                      'Titel aufst.',
                      'Titel abst.',
                    ]"
                  />
                  <!--
                  <p class="label text-xs font-bold">
                    Sortierung (nicht aktiv)
                  </p>
                  <ais-sort-by
                    class="input-md text-md w-full p-0 dark:bg-transparent"
                    :classes="{
                      'ais-SortBy-select': '!dark:bg-transparent'
                    }"
                    aria-disabled="true"
                    disabled="disabled"
                    :select="{'disabeld': 'disabled'}"
                    :items="[
                      { value: 'imdb_movies', label: 'Standard' },
                    ]"
                  />
                -->
                </div>
              </div>
              <div class="mt-2 mb-2">
                <button
                  class="btn btn-primary md:hidden"
                  title="Show facet items"
                  @click="$toggleFacetDrawerState"
                >
                  <Icon name="formkit:caretright" />&nbsp;Show Facet Items
                </button>
              </div>
              <div class="mb-4">
                <h2 class="mb-2">
                  {{ $t('activefiltering') }}
                </h2>
                <ais-current-refinements 
                  :class-names="{
                    'ais-CurrentRefinements-item': '!bg-primary !text-white !rounded-2xl !p-2',
                    'ais-CurrentRefinements-delete': '!text-white'
                  }"
                />
              </div>
              <div class="mb-4">
                <ais-clear-refinements 
                  :class-names="{
                    'ais-ClearRefinements-button': 'btn !btn-error',
                    'ais-CurrentRefinements-delete': '!text-white'
                  }"
                >
                  <template #resetLabel>
                    {{ $t('clearallfilters') }}
                  </template>
                </ais-clear-refinements>
              </div>
              <div class="overflow-x-auto">
                <ais-hits>
                  <template #default="{ items }">
                    <table class="table border-collapse border border-slate-400 table-sm">
                      <thead class="bg-primary text-white">
                        <tr>
                          <th
                            class="border border-slate-300"
                            :alt="$t('title')"
                            :title="$t('title')"
                          >
                            {{ $t('title').toUpperCase() }}
                          </th>
                          <!--
                          <th
                            class="border border-slate-300"
                            :alt="$t('description')"
                            :title="$t('description')"
                          >
                            {{ $t('description').toUpperCase() }}
                          </th>
                          -->
                          <th
                            class="border border-slate-300 max-w-16 text-ellipsis overflow-hidden"
                            :alt="$t('productionyear')"
                            :title="$t('productionyear')"
                          >
                            {{ $t('productionyear').toUpperCase() }}
                          </th>
                          <th
                            class="border border-slate-300"
                            :alt="$t('directors')"
                            :title="$t('directors')"
                          >
                            {{ $t('directors').toUpperCase() }}
                          </th>
                          <th
                            class="border border-slate-300 max-w-16 text-ellipsis overflow-hidden"
                            :alt="$t('productioncompany')"
                            :title="$t('productioncompany')"
                          >
                            {{ $t('productioncompany').toUpperCase() }}
                          </th>
                          <th class="border border-slate-300" />
                          <th class="border border-slate-300" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="item in items"
                          :key="item._id"
                          class=""
                        >
                          <td
                            class="border border-slate-200"
                            style="
                              max-width: 200px;
                              overflow: hidden;
                              text-overflow: ellipsis;
                              white-space: nowrap;
                            }"
                            :title="item.title"
                          >
                            <ais-highlight
                              attribute="title"
                              :hit="item"
                            />
                          </td>
                          <td class="border border-slate-200 max-w-32">
                            {{ new Date(item.released).getFullYear() }}
                          </td>
                          <td class="border border-slate-200">
                            {{ item.directors.join(', ') }}
                          </td>
                          <td class="border border-slate-200" />
                          <td class="border border-slate-200">
                            <AddToComparisonComp
                              :film-id="item.objectID"
                              :film-title="item.title"
                            />
                          </td>
                          <td class="border border-slate-200">
                            <button
                              type="button"
                              @click="contextHandler('click', item)"
                            >
                              <Icon name="formkit:reorder" />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </template>
                </ais-hits>
              </div>

              <div class="pagination flex justify-center">
                <ais-pagination
                  :class-names="{
                    'ais-Pagination-list': 'join',
                    'ais-Pagination-item': 'join-item max-w-8 md:max-w-24',
                    'ais-Pagination-link': 'p-1 md:p-4'
                  }"
                />
              </div>
            </div>
          </div>
        </div>
      </ais-instant-search>
    </div>
  </div>
</template>


<script setup lang="ts">
import {toast } from 'vue3-toastify';
import { history } from 'instantsearch.js/es/lib/routers';
const {$toggleFacetDrawerState}:any = useNuxtApp();

const contextHandler = function (type:String, item) {
    toast.success(item.title + " clicked");
};

const routing = {
    stateMapping: {
        stateToRoute(uiState) {
            const indexUiState = uiState[props.indexName];
            return {
                q: indexUiState.query,
                categories: indexUiState.menu && indexUiState.menu.categories,
                type: indexUiState.refinementList && indexUiState.refinementList.type,
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
                        type: routeState.type,
                    },
                    page: routeState.page,
                },
            };
        },
    },
    router: history({
        cleanUrlOnDispose: false,
    })
};

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
<style>

html[data-theme="avefi_dark"] .ais-Pagination-link {
  background-color: var(--primary-800)!important;
  background-image: none!important;
  color:#fefefe;
}

html[data-theme="avefi_dark"] .ais-Pagination-item--disabled .ais-Pagination-link {
  background-image: none!important;
}

.ais-HierarchicalMenu-showMore:hover, .ais-Menu-showMore:hover, .ais-RefinementList-showMore:hover, .ais-ClearRefinements-button:hover, .ais-InfiniteHits-loadMore:hover, .ais-RangeInput-submit:hover, .ais-InfiniteHits-loadPrevious:hover, .ais-Pagination-item:not(.ais-Pagination-item--selected):not(.ais-Pagination-item--disabled) .ais-Pagination-link:hover, .ais-GeoSearch-redo:hover, .ais-GeoSearch-reset:hover, .ais-VoiceSearch-button:hover {
  background-image: none!important;
  border-color: none;
  border: 0;
  box-shadow:none;
}

.ais-ClearRefinements-button {
  background-color: transparent;;
  background-image: none!important;;
}

</style>