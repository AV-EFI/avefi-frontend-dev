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
                />
              </div>
              <div
                class="w-full flex justify-between md:justify-end"
                mb-2
              >
                <button
                  class="btn btn-primary md:hidden"
                  title="Show facet items"
                  @click="$toggleDrawerState"
                >
                  <Icon name="formkit:caretright" />&nbsp;Show Facet Items
                </button>

                <div class="w-1/3">
                  <p class="label text-xs font-bold">
                    Sortierung (nicht aktiv)
                  </p>
                  <ais-sort-by
                    class="input-md text-md w-full p-0"
                    aria-disabled="true"
                    disabled="disabled"
                    :select="{'disabeld': 'disabled'}"
                    :items="[
                      { value: 'imdb_movies', label: 'Standard' },
                    ]"
                  />
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
                            style="width: 200px;
 overflow: hidden;
 text-overflow: ellipsis;
 white-space: nowrap;
}"
                            :title="item.title"
                          >
                            {{ item.title }}
                          </td>
                          <td
                            class="border border-slate-200"
                            style="max-width: 0;
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