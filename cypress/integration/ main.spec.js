/// <reference types="cypress" />

context('Front page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    describe('header information', () => {
        it('should display correct information', () => {
            cy.title().should('include', 'portfolio-vue')
            const header = cy.get('#header')
            header.get('.name').should('contain.text', 'Jaakko Uusitalo')
            header.get('.jobTitle').should('be.visible')
            header.get('.profileImage').should('be.visible')
        })
    })

    describe('references', () => {
        
        it('when clicked show more, should display all references', () => {
            const referencesList = cy.get('.references')
            const initialShownReferenceCount = referencesList.get('.reference').length
            expect(initialShownReferenceCount === 5)

            const showMoreButton = referencesList.get('.btn')
            showMoreButton.click()
            const currentlyShownReferenceCountAfterClick = referencesList.get('.reference').length

            expect(currentlyShownReferenceCountAfterClick > initialShownReferenceCount)
        })

        it('when clicked open references, should display references grid', () => {
            cy.get('#openReferences').click()
            cy.get('#referenceGrid', { timeout: 1000 }).should('be.visible')
        })

        it.only("when clicked reference, should display reference", () => {
            cy.get('#openReferences').click()
            cy.get('#referenceGrid', { timeout: 1000 }).find('.referenceGridItem').eq(0).click()
            cy.get('#content h2').should("be.visible")
            cy.get('#content p').should("be.visible")
            cy.get('#content .skills').should('be.visible')
        })

    })
    
})