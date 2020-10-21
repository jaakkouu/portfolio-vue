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
      const referencesList = cy.getExact(ui.referencesListContainer())
      const initialShownReferenceCount = referencesList.getExact(ui.referencesListItem()).children().length
      expect(initialShownReferenceCount === 5)

      const showMoreButton = referencesList.getNested([ui.referencesListContainer(), ui.showMoreReferencesButton()])
      showMoreButton.click()
      const currentlyShownReferenceCountAfterClick = referencesList.getExact(ui.referencesListItem()).children().length

      expect(currentlyShownReferenceCountAfterClick > initialShownReferenceCount)
    })

    it('when clicked open references, should display references grid', () => {
      cy.getExact(ui.openReferencesButton()).click()
      cy.getExact(ui.referencesGridContainer(), { timeout: 1000 }).should('be.visible')
    })
    
    it('when clicked reference, should display reference', () => {
      cy.getExact(ui.openReferencesButton()).click()
      cy.getExact(ui.referencesGridContainer(), { timeout: 1000 }).getExact(ui.referenceGridItem()).eq(0).click()
      cy.getNested([ui.contentContainer(), ui.title()]).should('be.visible')
      cy.getNested([ui.contentContainer(), ui.referenceViewDescription()]).should('be.visible')
      cy.getNested([ui.contentContainer(), ui.referenceViewLink()]).should('be.visible')
      cy.getNested([ui.contentContainer(), ui.badgeList()]).should('be.visible')
    })
    
  })
})