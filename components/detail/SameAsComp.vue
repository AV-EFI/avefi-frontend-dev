<template>
  <div v-if="sameAsData">
    <span
      v-for="(same_as_item, same_as_index) in sameAsData"
      :key="same_as_index"
    >
        &nbsp;
      <a
        v-if="same_as_item.category === 'avefi:GNDResource'"
        class="link link-primary link-hover"
        :href="`https://explore.gnd.network/gnd/${same_as_item.id}`"
        alt="Referenz bei GND"
        title="Referenz bei GND"
        target="_blank"
      >
        <Icon
          name="carbon:notebook-reference"
          size="1em"
          class="!align-baseline"
          alt="Referenz bei GND"
        /> 
        &nbsp;{{ $t(same_as_item.category) }}
      </a>
      <a
        v-else-if="same_as_item.category === 'avefi:VIAFResource'"
        class="link link-primary link-hover"
        :href="`https://viaf.org/viaf/${same_as_item.id}`"
        alt="Referenz bei VIAF"
        title="Referenz bei VIAF"
        target="_blank"
      >
        <Icon
          name="carbon:notebook-reference"
          size="1em"
          class="!align-baseline"
          alt="Referenz bei VIAF"
        /> 
        &nbsp;{{ $t(same_as_item.category) }}
      </a>
      <a
        v-else-if="same_as_item.category === 'avefi:WikidataResource'"
        class="link link-primary link-hover"
        :href="`https://www.wikidata.org/wiki/${same_as_item.id}`"
        alt="Referenz bei Wikidata"
        title="Referenz bei Wikidata"
        target="_blank"
      >
        <Icon
          name="carbon:notebook-reference"
          size="1em"
          class="!align-baseline"
          alt="Referenz bei Wikidata"
        /> 
        &nbsp;{{ $t(same_as_item.category) }}
      </a>
      <a
        v-else-if="same_as_item.category === 'avefi:FilmportalResource'"
        :href="`https://www.filmportal.de/film/${same_as_item.id}`"
        class="link link-primary link-hover"
        alt="Referenz bei Filmportal"
        title="Referenz bei Filmportal"
        target="_blank"
      >
        {{ $t(same_as_item.category) }}&nbsp;
        <Icon
          name="fa-regular:hand-peace"
          size="1em"
          class="!align-baseline"
          alt="Referenz bei Filmportal"
        />
        &nbsp;{{ $t(same_as_item.category) }}
      </a>
      <a
        v-else-if="same_as_item.category === 'avefi:DOIResource'"
        :href="`https://doi.org/${same_as_item.id}`"
        class="link link-primary link-hover"
        alt="Referenz bei DOI"
        title="Referenz bei DOI"
        target="_blank"
      >
        <Icon
          name="carbon:notebook-reference"
          size="1em"
          class="!align-baseline"
          alt="Referenz bei DOI"
        />
        &nbsp;{{ $t(same_as_item.category) }}
      </a>
      <a
        v-else-if="same_as_item.category === 'avefi:EIDRResource'"
        :href="`https://ui.eidr.org/view/content?id=${same_as_item.id}`"
        class="link link-primary link-hover"
        alt="Referenz bei EIDR"
        title="Referenz bei EIDR"
        target="_blank"
      >
        <Icon
          name="carbon:notebook-reference"
          size="1em"
          class="!align-baseline"
          alt="Referenz bei EIDR"
        />
        &nbsp;{{ $t(same_as_item.category) }}
      </a>
      <span v-else>
        Unbekannte Referenz: {{ $t(same_as_item.category) }}
      </span>
    </span>
  </div>
</template>
<script setup lang="ts">

import type {} from '../../models/interfaces/av_efi_schema.ts';

const props = defineProps ( {
    'sameAsData': {
        type: Object
    }
}); 

</script>
