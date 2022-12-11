class WelcomePage {
  open() {
    cy.visit('/');
  }
  get searchForm() {
    return cy.get('#search-bar .research-bar-tabs>form:nth-of-type(1)');
  }
  get logo() {
    return cy.get('.header-logo');
  }
  get homeSearch() {
    return cy.get('.home-search');
  }
}
export default new WelcomePage();
