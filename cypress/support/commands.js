Cypress.Commands.add('getExact', testId => {
    return cy.get(`[data-testid='${testId}']`)
})