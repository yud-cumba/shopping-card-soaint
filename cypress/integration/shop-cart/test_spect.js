/* global cy*/

describe('shopping car', function () {
    it('Para ver si la app funciona', function () {
        cy.visit('/')
    })
    it('Navegamos a la descripcion y vemos el detalle', function () {
        cy.visit('/detail/1')
        cy.get('article')
    })
    it('Si podemos navegar con la navbar a la home', function () {
        cy.visit('/pet/1')
        cy.get('nav a').first().click()
        cy.url().should('include', '/')
    })
})