import {baseUrl} from '../../cypress.json';

describe('Login page tests', () => {
    before(() => {
        cy.visit(baseUrl);
    })

    describe('Elements are rendering correctly', () => {
        it('should display elements', () => {
            cy.get('header').should('exist').and('be.visible');
        })
    })
})