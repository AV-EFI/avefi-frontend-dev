<template>
  <div class="drawer w-0 md:w-[20em] drawer-start md:drawer-open">
    <input
      id="facet_drawer"
      type="checkbox"
      class="drawer-toggle"
      :checked="objectListStore.facetDrawerOpen"
    >
    <div class="drawer-side z-20 h-full">
      <label
        aria-label="close sidebar"
        class="drawer-overlay z-99"
        @click="toggleDrawer"
      />
      <div class="menu p-4 w-[100vw] md:w-80 min-h-full bg-neutral text-base-content">
        <div class="flex flex-row justify-end">
          <button 
            class="btn btn-outline btn-ghost w-16 md:hidden"
            title="Close drawer"
            @click="$toggleFacetDrawerState"
          >
            <Icon name="formkit:caretleft" />
          </button>
        </div>
        <div class="w-100 flex flex-row p-2">
          <div class="search-panel__filters md:mr-1">
            <ais-panel>
              <template #header>
                <p class="text-base text-primary-400">
                  {{ $t('facettype') }}
                </p>
              </template>
              <ais-refinement-list
                attribute="type"
                :class-names="{
                  'ais-RefinementList-label': 'p-0',
                  'ais-RefinementList-labelText': 'dark:text-primary-50'
                }"
              />
            </ais-panel>

            <ais-panel>
              <template #header>
                <p class="text-base text-primary-400">
                  {{ $t('facetyear') }}
                </p>
              </template>
              <ais-range-input
                attribute="released"
                :min="1900"
                :max="2025"
                :precision="0"
                :class-names="{
                  'ais-RefinementList-label': 'p-0',
                  'ais-RefinementList-labelText': 'dark:text-primary-50',
                  'ais-SearchBox-input': 'appearance-none [color-scheme:light] dark:[color-scheme:dark] selection:text-zinc-700 group-data-[has-overlay]:selection:!text-transparent !text-sm text-zinc-700 min-w-0 min-h-[1.5em] grow outline-none bg-transparent selection:bg-bali-hai-100 placeholder:text-zinc-400 group-data-[disabled]:!cursor-not-allowed dark:placeholder-zinc-400/50 dark:text-zinc-300 border-none p-0 focus:ring-0 formkit-input !text-lg p-2',
                  'ais-RangeInput-input':'max-w-20 dark:bg-transparent',
                  'ais-RangeInput-form': 'flex justify-between',
                  'ais-RangeInput-submit': 'btn btn-sm btn-primary'
                }"
              >
                <template #submitLabel>
                  {{ $t('filter') }}
                </template>
              </ais-range-input>
            </ais-panel>


            <ais-panel>
              <template #header>
                <p class="text-base text-primary-400">
                  {{ $t('directors') }}
                </p>
              </template>
              <ais-refinement-list
                searchable
                :searchable-placeholder="$t('searchheredirectors')"
                attribute="directors"
                :class-names="{
                  'ais-RefinementList-label': 'p-0',
                  'ais-RefinementList-labelText': 'dark:text-primary-50',
                  'ais-SearchBox-input': 'appearance-none [color-scheme:light] dark:[color-scheme:dark] selection:text-zinc-700 group-data-[has-overlay]:selection:!text-transparent !text-sm text-zinc-700 min-w-0 min-h-[1.5em] grow outline-none bg-transparent selection:bg-bali-hai-100 placeholder:text-zinc-400 group-data-[disabled]:!cursor-not-allowed dark:placeholder-zinc-400/50 dark:text-zinc-300 border-none p-0 focus:ring-0 formkit-input !text-lg p-2'
                }"
              />
            </ais-panel>

            <ais-panel>
              <template #header>
                <p class="text-base text-primary-400">
                  {{ $t('actors') }}
                </p>
              </template>
              <ais-refinement-list
                searchable
                :searchable-placeholder="$t('searchhereactors')"
                attribute="actors"
                :class-names="{
                  'ais-RefinementList-label': 'p-0',
                  'ais-RefinementList-labelText': 'dark:text-primary-50',
                  'ais-SearchBox-input': 'appearance-none [color-scheme:light] dark:[color-scheme:dark] selection:text-zinc-700 group-data-[has-overlay]:selection:!text-transparent !text-sm text-zinc-700 min-w-0 min-h-[1.5em] grow outline-none bg-transparent selection:bg-bali-hai-100 placeholder:text-zinc-400 group-data-[disabled]:!cursor-not-allowed dark:placeholder-zinc-400/50 dark:text-zinc-300 border-none p-0 focus:ring-0 formkit-input !text-lg p-2'
                }"
              />
            </ais-panel>
            <div class="pb-4">
              <p class="text-base text-primary-400">
                TBD:
              </p>
              <p class="text-base text-primary-400">
                Produktionsland
              </p>
              <p class="text-base text-primary-400">
                Produktionsjahr
              </p>
              <p class="text-base text-primary-400">
                Materialart (z.B. Dupnegativ)
              </p>
              <p class="text-base text-primary-400">
                Manifestationstyp
              </p>
              <p class="text-base text-primary-400">
                Materialformat (z.B. 35mm)
              </p>
              <p class="text-base text-primary-400">
                Länge in Metern/Dauer in Minuten
              </p>
              <p class="text-base text-primary-400">
                Sprachangaben
              </p>
              <p class="text-base text-primary-400">
                Farbigkeit
              </p>
              <p class="text-base text-primary-400">
                Ton
              </p>
            </div>
            <!-- TBD -->
            <!--
            <ais-panel>
              <template #header>
                <p class="text-base text-primary-400">
                  Produktionsland
                </p>
              </template>
              <p>TBD</p>
            </ais-panel>

            <ais-panel>
              <template #header>
                <p class="text-base text-primary-400">
                  Produktionsjahr
                </p>
              </template>
              <p>TBD</p>
              <ais-range-input
                attribute="string"
                :min="1900"
                :max="2024"
                :precision="0"
              />
            </ais-panel>

            <ais-panel>
              <template #header>
                <p class="text-base text-primary-400">
                  Regie
                </p>
              </template>
              <p>TBD</p>
            </ais-panel>
            <ais-panel>
              <template #header>
                <p class="text-base text-primary-400">
                  Manifestationstyp
                </p>
              </template>
              <p>TBD</p>
            </ais-panel>
            <ais-panel>
              <template #header>
                <p class="text-base text-primary-400">
                  Materialart (z.B. Dupnegativ)
                </p>
              </template>
              <p>TBD</p>
            </ais-panel>
            <ais-panel>
              <template #header>
                <p class="text-base text-primary-400">
                  Materialformat (z.B. 35mm)
                </p>
              </template>
              <p>TBD</p>
            </ais-panel>
            <ais-panel>
              <template #header>
                <p class="text-base text-primary-400">
                  Länge in Metern/Dauer in Minuten
                </p>
              </template>
              <p>TBD</p>
            </ais-panel>
            <ais-panel>
              <template #header>
                <p class="text-base text-primary-400">
                  Sprachangaben
                </p>
              </template>
              <p>TBD</p>
            </ais-panel>
            <ais-panel>
              <template #header>
                <p class="text-base text-primary-400">
                  Farbigkeit
                </p>
              </template>
              <p>TBD</p>
            </ais-panel>
            <ais-panel>
              <template #header>
                <p class="text-base text-primary-400">
                  Ton
                </p>
              </template>
              <p>TBD</p>
            </ais-panel>
          -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {useObjectListStore} from '../../stores/compareList';
const {$toggleFacetDrawerState}:any = useNuxtApp();
const objectListStore = useObjectListStore();
const toggleDrawer = (() => {
    objectListStore.facetDrawerOpen = !objectListStore.facetDrawerOpen;
});

</script>
<style scoped>
.ais-RangeInput-submit {
  background-color: none;
}
</style>