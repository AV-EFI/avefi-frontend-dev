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
        <ais-configure :hits-per-page.camel="20" />
        <div class="search-panel">
          <GlobalFacetDrawer />

          
          <!-- Center -->
          <div class="drawer-content w-full flex flex-col items-center justify-center">
            <div class="search-panel__results w-full">
              <div class="searchbox">
                <ais-search-box
                  autofocus 
                  placeholder=""
                  show-loading-indicator
                  :class-names="{
                    'ais-SearchBox-input': 'appearance-none [color-scheme:light] dark:[color-scheme:dark] selection:text-zinc-700 group-data-[has-overlay]:selection:!text-transparent text-sm text-zinc-700 min-w-0 min-h-[1.5em] grow outline-none bg-transparent selection:bg-bali-hai-100 placeholder:text-zinc-400 group-data-[disabled]:!cursor-not-allowed dark:placeholder-zinc-400/50 dark:text-zinc-300 border-none p-0 focus:ring-0 formkit-input !text-lg p-2',
                    'ais-SearchBox-form': 'MySearchBoxForm',
                  }"
                />
              </div>
              <div
                class="w-full flex flex-col md:flex-row justify-between md:justify-end"
                mb-2
              >
                <div class="w-full md:w-1/3 mb-1">
                  <button
                    class="btn btn-primary md:hidden"
                    title="Show facet items"
                    @click="$toggleFacetDrawerState"
                  >
                    <Icon name="formkit:caretright" />&nbsp;Show Facet Items
                  </button>
                </div>
                <div class="w-full md:w-1/3 mb-1">
                  <FormKit
                    type="select"
                    label="Sortierung (nicht aktiv)"
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
              <div class="overflow-x-auto">
                <ais-hits>
                  <template #default="{ items }">
                    <table class="table border-collapse border border-slate-400 table-sm">
                      <thead class="bg-primary text-white">
                        <tr>
                          <th class="border border-slate-300">
                            Filmtitel
                          </th>
                          <th class="border border-slate-300">
                            Description
                          </th>
                          <th class="border border-slate-300">
                            Produktionsjahr
                          </th>
                          <th class="border border-slate-300">
                            Regie
                          </th>
                          <th class="border border-slate-300">
                            Produktionsfirma
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
                              width: 200px;
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
                          <td
                            class="border border-slate-200"
                            style="
                              max-width: 0;
                              overflow: hidden;
                              text-overflow: ellipsis;
                              white-space: nowrap;
                            }"
                            :title="item.plot"
                          >
                            {{ item.plot }}
                          </td>
                          <td class="border border-slate-200" />
                          <td class="border border-slate-200" />
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
                              @click="contextHandler('click', item, 'Item Clicked')"
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
                    'ais-Pagination-item': 'join-item',
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

const contextHandler = function (type:String, item, text:String) {
    toast.success(item.title + " clicked");
};

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

html.dark .ais-Pagination-link {
  background-color: var(--primary-800)!important;
  background-image: none!important;
  color:#fefefe;
}

html.dark .ais-Pagination-item--disabled .ais-Pagination-link {
  background-image: none!important;
}
</style>