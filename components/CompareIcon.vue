<script setup lang="ts">

const props = defineProps({
    'alt': {
        type: String,
        default: 'Comparison'
    }
});
</script>
<template>
  <Icon
    :alt="alt"
    name="formkit:add"
  />
</template>