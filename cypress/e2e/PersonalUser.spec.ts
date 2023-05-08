describe('template spec', () => {
  it('passes', () => {
    cy.visit('/#/home/personal');
    cy.get('.nav-bar').find('img').should('have.attr', 'alt', 'SPA logo');
    cy.get('.greeting--headline').contains('John Smith');
    cy.get('.greeting--sub-headline').contains('Manage your documents.');
  })
})

describe('api calls are executed', () => {
  it('fetches data from the user endpoint', () => {
    cy.request('/api/user').then((response) => {
      expect(response.status).to.eq(200)

      expect(response).to.have.property('body')
      expect(response).to.have.property('headers')
      expect(response).to.have.property('duration')
    })
  })

  it('fetches data from the document endpoint', () => {
    cy.request('/api/document').then((response) => {
      expect(response.status).to.eq(200)

      expect(response).to.have.property('body')
      expect(response).to.have.property('headers')
      expect(response).to.have.property('duration')
    })
  })

  it('fetches data from the career goals endpoint', () => {
    cy.request('/api/career').then((response) => {
      expect(response.status).to.eq(200)

      expect(response).to.have.property('body')
      expect(response).to.have.property('headers')
      expect(response).to.have.property('duration')
    })
  })
})