<template>
  <div class="sui-layout">
    <SearchHeader
      v-model="searchInputValue"
      @submit="handleFormSubmit"
    />
    <button
      class="btn btn-danger"
      @click="clearAll()"
    >
      Clear all
    </button>
    <div
      v-if="searchState.wasSearched"
      class="sui-layout-body"
    >
      <div class="sui-layout-body__inner">
        <div class="sui-layout-sidebar">
          <SearchSort
            v-model="sortBy"
            :disabled-state="(searchResultsStore.viewMode == 'list')?false:true"
          />
          <!---->
          <SearchFacet
            :label="'Genres'"
            :checked="Genres"
            :facet="searchState.facets['Genres.keyword'][0]"
            @change="handleFacetChange($event, 'Genres')"
          />

          <SearchFacet
            :label="'Series'"
            :checked="Series"
            :facet="searchState.facets['ProductionCompany.keyword'][0]"
            @change="handleFacetChange($event, 'ProductionCompany.keyword')"
          />
        </div>
        <div class="sui-layout-main">
          <div class="sui-layout-main-header">
            <div class="sui-layout-main-header__inner">
              <SearchPagingInfo :search-state="searchState" />
              <SearchResultsPerPage
                v-show="thereAreResults"
                v-model.number="resultsPerPage"
              />
            </div>
          </div>
          <div class="sui-layout-main-body">
            <SearchResults
              v-show="thereAreResults"
              :results="searchState.results"
            />
          </div>
          <!-- Disabled since the library doesn't support Vue3 https://github.com/lokyoung/vuejs-paginate/issues/128 -->
          <!-- <div class="sui-layout-main-footer">
            <SearchPagination
              v-show="thereAreResults"
              :total-pages="Math.min(searchState.totalPages, 100)"
              :click-handler="setCurrentPage"
            />
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SearchDriver } from "@elastic/search-ui";
import config from "@/searchConfig.ts";
import SearchResults from "./SearchResults.vue";
import SearchFacet from "./SearchFacet.vue";
import SearchHeader from "./SearchHeader.vue";
import SearchPagingInfo from "./SearchPagingInfo.vue";
// import SearchPagination from "./SearchPagination.vue";
import SearchSort from "./SearchSort.vue";
import SearchResultsPerPage from "./SearchResultsPerPage.vue";
//import "@elastic/react-search-ui-views/lib/styles/styles.css";
import {mapStores} from 'pinia';
//const searchResultsStore = useSearchResultsStore();

const driver = new SearchDriver(config);

export default {
    components: {
        SearchResults,
        SearchFacet,
        SearchHeader,
        SearchPagingInfo,
        // SearchPagination,
        SearchSort,
        SearchResultsPerPage
    },
    setup() {
    },
    data() {
        return {
            searchInputValue: "",
            searchState: driver.getState(),
            Title: [],
            Genres: [],
            Source: [],
            ProductionCompany: [],
            resultsPerPage: 20,
            sortBy: "_score",
            facet: driver.getState.filters
        };
    },
    computed: {
        thereAreResults() {
            return this.searchState.totalResults && this.searchState.totalResults > 0;
        },
        // note we are not passing an array, just one store after the other
        // each store will be accessible as its id + 'Store'
        ...mapStores(useSearchResultsStore)
    },
    watch: {
        resultsPerPage(newResultsPerPage) {
            driver.setResultsPerPage(newResultsPerPage);
        },
        sortBy(newSortBy) {
            driver.setSort(newSortBy, "asc");
        }
    },
    mounted() {
        const { searchTerm, sortField, resultsPerPage, filters, facets } = driver.getState();
        // restoring UI from url query
        this.searchInputValue = searchTerm;
        this.sortBy = sortField;
        this.sortDirection = "asc";

        this.resultsPerPage = resultsPerPage;

        filters.forEach((filter) => {
            if (facets[`${filter.field}`][0].type === "range") {              
                this[filter.field.replace('.keyword','')] = filter.values.map((value) => value.name);
            } else {
                this[filter.field.replace('.keyword','')] = filter.values;
            }
        });

        console.log(this);

        driver.subscribeToStateChanges((state) => {
            this.searchState = state;
        });
        
    },
    methods: {
        clearAll() {
            const filters = driver.getState().filters;
            console.log(filters);
            driver.getActions().setSearchTerm();
            driver.getActions().clearFilters();
            //clear sidebar facets
            filters.forEach((filter) => {
                this[filter.field.replace('.keyword','')] = [];
            });
            console.log(this);
        },
        handleFormSubmit() {
            driver.getActions().setSearchTerm(this.searchInputValue);
        },
        handleFacetChange(event, facet) {
            const { value, checked } = event.target;
            const facetFromDriver = driver.getState().facets[`${facet}.keyword`][0];
            const valueforApi = facetFromDriver.type === "range"
                ? facetFromDriver.data.find((item) => item.value.name === value).value
                : value;

            if (checked) {
                this[facet].push(value);
                driver.addFilter(`${facet}.keyword`, valueforApi, "any");
            } else {
                const index = this[facet].indexOf(value);
                if (index > -1) {
                    this[facet].splice(index, 1);
                }
                driver.removeFilter(`${facet}.keyword`, valueforApi, "any");
            }
            console.log(this[facet]);
        },
        setCurrentPage(page) {
            driver.setCurrent(page);
        }
    }
};
</script>