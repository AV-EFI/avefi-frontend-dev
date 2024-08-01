import LanguageSwitch from './LanguageSwitch.vue';

describe('<LanguageSwitch />', () => {
    
    
    it('renders', () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(LanguageSwitch);
        cy.get('input.checkbox.theme-controller').should('exist');
        cy.get('label.swap.swap-flip').should('exist');
        cy.get('pre.hidden').should('exist');
        cy.get('pre.hidden').should('have.text','de');
        cy.get('div.swap-off').should('exist');
        cy.get('div.swap-on').should('exist');        
    });

    it('changes locale', () => {
        cy.mount(LanguageSwitch);
        cy.get('pre.hidden').should('have.text','de');
        cy.get('input.checkbox.theme-controller').uncheck({force: true});
        cy.get('pre.hidden').should('have.text','en');
        cy.get('input.checkbox.theme-controller').check({force: true});
        cy.get('pre.hidden').should('have.text','de');
    });
});