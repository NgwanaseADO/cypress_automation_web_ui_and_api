/// <reference types = "Cypress"/>
describe('Getting And Verifying Data API', ()=>
{
    it('Get Data API', ()=>
    {
        cy.request({
            method : 'GET',
            url:'https://cat-fact.herokuapp.com/facts'
        }).then((res) =>{
            expect(res.status).to.eq(200)

        })
  })
})
