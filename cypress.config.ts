import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        setupNodeEvents() {
            // implement node event listeners here
        },
    },
    component: {
        supportFile: './cypress/support/component.ts',
        devServer: {
            framework: "vue",
            bundler: "vite",
        },
        video: false,
    },
});