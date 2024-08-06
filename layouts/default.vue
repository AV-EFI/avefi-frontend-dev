<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <GlobalNavBar />
    </header>
    <main class="main grow bg-neutral dark:bg-primary-900">
      <ClientOnly>
        <GlobalIndicatorComp />
      </ClientOnly>
      <slot />

      <GlobalComparisonDrawer />
    </main>
    <LazyGlobalFooter />
  </div>
</template>