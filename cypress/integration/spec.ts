it('loads examples', () => {
  cy.visit('/');
  cy.contains('Hallo Books');
});
