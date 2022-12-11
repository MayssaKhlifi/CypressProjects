import {
  DataTable,
  Given,
  Then,
  When,
} from '@badeball/cypress-cucumber-preprocessor';
import searchFormPage from '../../Pages/search-form-page';
import SearchForm from '../../Pages/search-form-page';
import WelcomePage from '../../Pages/welcome-page';
When(
  "Je fais la cherche d'un bien avec les critères suivants:",
  function (data: DataTable) {
    const criterias = data.hashes()[0];
    // fill criterias into the search form
    WelcomePage.searchForm.within((form) => {
      // Selecting the project Type
      SearchForm.selectProject(criterias.type_projet);
      // Selecting the estate type
      SearchForm.selectProperty(criterias.type_bien);
      // typing the max price
      searchFormPage.typePrice(Number.parseInt(criterias.prix));
    });
    // typing the city
    SearchForm.selectCity(criterias.ville);

    searchFormPage.submitForm();
  }
);
Then(
  'Je vois la liste des biens qui correspondent à :',
  (estateType, city, projetType, max_price) => {
    // asssert that we are on result page
    cy.get('#results app-results-list')
      .should('exist')
      .within(() => {
        // select the list of result card to do some assertiions
        cy.get('app-annonce-card').each(($element) => {
          cy.wrap($element);
        });
      });
  }
);
