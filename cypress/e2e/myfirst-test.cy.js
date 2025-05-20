///<reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    expect(false).to.be.false;
  });

  it('log spec info', () => {
  console.log(Cypress.spec)
  // {
  //   name: 'filter.cy.js',
  //   relative: 'cypress/e2e/filter.cy.js',
  //   absolute: '/Users/janelane/Dev/web-app/cypress/e2e/filter.cy.js',
  // }
})
})
