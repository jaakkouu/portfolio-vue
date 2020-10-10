context('Front page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should display correct information', () => {
        cy.title().should('include', 'portfolio-vue')
        const header = cy.get('#header');
        header.get('.name').should('contain.text', 'Jaakko Uusitalo')
        header.get('.jobTitle').should('be.visible')
        header.get('.profileImage').should('be.visible')
    })
})
