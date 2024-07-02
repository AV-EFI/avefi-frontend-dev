<script setup lang="ts">

definePageMeta(
    { 
        auth: false 
    }
);

const skeletonSwitch = ref(false);

setTimeout(() => {
    skeletonSwitch.value = true;
},
2000);


//const { data: sessionData } = useAuthState();
const sessionData = null;

</script>

<template>
  <div class="container flex justify-items flex-col lg:flex-row w-full mx-auto">
    <div class="flex flex-col lg:flex-row container mx-auto p-4">
      <div class="w-full lg:w-3/4">
        <div class="hero bg-base-100">
          <div class="hero-content min-h-48 w-full xl:w-3/4 flex-col lg:flex-row-reverse">          
            <div class="card shrink-0 w-full dark:bg-primary-900">
              <div class="card-body p-2 md:p-4 w-full xl:max-w-96">
                <GlobalSearchCompReduced />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="divider lg:divider-horizontal divider-neutral" />      
      <div class="text-center lg:text-left w-full lg:w-1/4 ml-4">
        <article class="">
          <h2 class="text-xl">
            Welcome to the AVefi homepage
          </h2>
          <a
            class="link link-primary"
            href="/films/works_altern/6926658770567168"
          >
            Detailansicht Werk
          </a>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </article>
      </div>
    </div>
  </div>
</template>