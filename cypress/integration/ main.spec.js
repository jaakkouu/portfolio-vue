/// <reference types="cypress" />

import * as ui from '../../tests/data-test-ids' 

context('Front page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('header information', () => {
    it('should display correct information', () => {
      cy.title().should('include', 'portfolio-vue')
      cy.getExact(ui.headerName()).should('contain.text', 'Jaakko Uusitalo')
      cy.getExact(ui.headerJobTitle()).should('be.visible')
      cy.getExact(ui.headerProfileImage()).should('be.visible')
    })
  })

  describe('references', () => {
    it('when clicked show more, should display all references', () => {
      const referencesList = cy.get('.references')
      const initialShownReferenceCount = referencesList.get('.reference').children().length
      expect(initialShownReferenceCount === 5)

      const showMoreButton = referencesList.get('.references .btn')
      showMoreButton.click()
      const currentlyShownReferenceCountAfterClick = referencesList.get('.reference').children().length

      expect(currentlyShownReferenceCountAfterClick > initialShownReferenceCount)
    })

    it('when clicked open references, should display references grid', () => {
      cy.get('#openReferences').click()
      cy.get('#referenceGrid', { timeout: 1000 }).should('be.visible')
    })

    it('when clicked reference, should display reference', () => {
      cy.get('#openReferences').click()
      cy.get('#referenceGrid', { timeout: 1000 }).find('.referenceGridItem').eq(0).click()
      cy.get('#content h2').should('be.visible')
      cy.get('#content p').should('be.visible')
      cy.get('#content .skills').should('be.visible')
    })
  })
})