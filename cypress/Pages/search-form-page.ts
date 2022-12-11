class SearchForm {
  // Properties (Getter)
  get projectToggle() {
    return cy.get('#projectToggle');
  }
  get property() {
    return cy.get('#propertyToggle');
  }
  get priceInput() {
    return cy.get('#price');
  }
  get cityDropDown() {
    return cy.get('#city');
  }
  get searchButton() {
    return cy.get(
      '#search-bar .research-bar-tabs>form:nth-of-type(1) [type=submit]'
    );
  }
  // Actions

  typePrice(price: number) {
    this.priceInput.type(price.toString());
  }
  selectProperty(property: string) {
    this.property.click().then(() => {
      cy.contains(property)
        .click()
        .then(($selectedEstate) => {
          // asserting that estate type is well selected
          expect($selectedEstate.attr('class')).to.contains('active');
        });
    });
  }
  selectProject(project: string) {
    this.projectToggle.click().then(() => {
      cy.contains(project)
        .click()
        .then(($selectedProject) => {
          // asserting that project type is well selected
          expect($selectedProject.attr('class')).to.contains('active');
        });
    });
  }
  selectCity(city: string) {
    this.cityDropDown
      .scrollIntoView()
      .type(city)
      .then(() => {
        cy.get('#pr_id_6_list').contains('Paris (75)').click();
      });
  }
  submitForm(withTime = false) {
    if (withTime) {
      // to be added when needed
    } else this.searchButton.click();
  }
}
export default new SearchForm();
