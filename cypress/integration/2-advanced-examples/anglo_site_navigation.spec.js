describe('Andlo webiste visit', function()
{
    it('Verify platinum search', function()
    {
        cy.visit('https://www.angloamerican.com/')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('.icon-search-icon').eq(0)
        .click()
        cy.get('#searchTextbox').type('Platinum')
        cy.get('#searchButton2').click()
        cy.get('.resultURL').eq(0).click()
        cy.get('.banner-only-title').contains('The potential of the platinum jewellery market')
    })
  })
