<template>
  <div>
    <pre class="hidden">{{ locale }}</pre>
    <label class="swap swap-flip">
      <!-- this hidden checkbox controls the state -->
      <input
        v-model="locale"
        type="checkbox"
        true-value="de"
        false-value="en"
        :value="locale"
        class="checkbox theme-controller hidden"
      >

      <div
        class="swap-off"
        alt="Deutsche Sprache"
        title="Deutsche Sprache"
      >
        <Icon
          class="h-8 w-8"
          alt="Deutsche Sprache"
          title="Deutsche Sprache"
          name="emojione:flag-for-germany"
        />
      </div>
      <div
        class="swap-on"
        alt="English language"
        title="English language"
      >
        <Icon
          name="emojione:flag-for-united-kingdom" 
          class="h-8 w-8"
          alt="English language"
          title="English language"
        />
      </div>
    </label>
  </div>
</template>
<script setup lang="ts">
const { locale } = useI18n();
</script>
