Cypress.Commands.add('getExact', (testId, options) => {
    return cy.get(`[data-testid='${testId}']`, options)
})

Cypress.Commands.add('getNested', testIdArray => {
    return cy.get(testIdArray.map(testId => `[data-testid='${testId}']`).join(' '))
})