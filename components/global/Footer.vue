<template>
  <client-only>
    <footer class="footer bg-primary-800 text-white dark:bg-gray-800 dark:text-white dark:border-gray-700">
      <div class="container mx-auto flex p-4">        
        <div class="flex flex-row flex-wrap w-full justify-between">
          <nav class="flex-1 w-full min-w-80 md:min-w-48 mb-2">
            <h6 class="footer-title">
              {{ $t("language") }}
            </h6>
            <GlobalLanguageSwitch />
          </nav>
          <nav class="flex-1 w-full min-w-80 md:min-w-48 mb-2">
            <h6 class="footer-title">
              Info
            </h6>
            <div
              role="alert"
              class="alert md:w-48"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="stroke-info h-6 w-6 shrink-0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>TODO: Links und Rechtliches im Footer hinzufügen</span>
            </div>
          </nav>
          <nav class="flex-1 w-full min-w-80 md:min-w-48">
            <h6 class="footer-title">
              {{ $t("theme") }}
            </h6>
            <GlobalThemeSwitch />
          </nav>
        </div>
      </div>
    </footer>
  </client-only>
</template>