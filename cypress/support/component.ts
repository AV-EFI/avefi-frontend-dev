// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from 'cypress/vue';
// Ensure global styles are loaded
//import './assets/main.css';

import { createPinia } from 'pinia'; // or Vuex


import { createI18n } from 'vue-i18n';
const i18nOptions = {
    locale: 'de',
    messages: {
        en: {
            hello: 'hello',
        },
        de: {
            hello: 'hallo',
        },
    },
};

import {useColorMode } from '@vueuse/core';
const colorMode = useColorMode(
    {
        attribute: 'class',
        modes: {
            // custom colors
            avefi_light: 'avefi_light',
            dark: 'dark',
        },
        storageKey: 'avefi-color-mode'
    },
);

//Cypress.Commands.add('mount', mount);

Cypress.Commands.add('mount', (component, options = {}) => {
    // Setup options object
    options.global = options.global || {};
    options.global.plugins = options.global.plugins || [];

    options.global.plugins.push(createPinia());
    options.global.plugins.push(createI18n(i18nOptions));
    //options.global.plugins.push(useI18n);

    options.global.plugins.push({
        install(app) {
            app.use(useColorMode);
        },
    });

    return mount(component, options);
});

// Example use:
// cy.mount(MyComponent)