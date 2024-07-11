<template>
  <div class="flex flex-col min-h-screen">
    <header>
      <GlobalNavBar />
    </header>
    <main class="main grow bg-neutral">
      <GlobalIndicatorComp />
      <slot />

      <GlobalComparisonDrawer />
    </main>
    <LazyGlobalFooter />
  </div>
</template>