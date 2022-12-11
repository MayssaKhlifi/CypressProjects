import { Before, Given } from '@badeball/cypress-cucumber-preprocessor';
import welcomePage from '../../Pages/welcome-page';
/**
 * accept cookies via setting 'foncia_consentements' cookie
 * to dismiss the accept cookies banner
 */

Before(() => {
  cy.setCookie(
    // accept all cookies to handle the banner
    'foncia_consentements',
    '!cookies_statistiques=true!cookies_publicitaires=true'
  );
});
Given('je suis sur la welcome page', () => {
  welcomePage.open();
  // wait for foncia logo to display
  welcomePage.logo.should('exist');
  // wait for home search form to be loaded
  welcomePage.homeSearch.should('exist');
});
