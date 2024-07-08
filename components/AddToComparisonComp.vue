<template>
  <button
    class="btn btn-secondary"
    :class="[btnSize]"
    :alt="`Add ${filmTitle} to comp`"
    :data-id="filmId"
    :data-title="filmTitle"
    :title="`Add '${filmTitle}' to comparison`"
    @click="$addToComparison(props.filmId, props.filmTitle)"
  >
    <CompareIcon
      :alt="`Add ${filmTitle} to comp`"
    />
  </button>
</template>
<script setup lang="ts">

const props = defineProps({
    'filmId': {
        type: String,
        required:true
    },
    'filmTitle': {
        type: String,
        required:false,
        default: "No title"
    },
    'btnSize': {
        type: String,
        required: false,
        default: 'btn-sm'
    }
});

</script>