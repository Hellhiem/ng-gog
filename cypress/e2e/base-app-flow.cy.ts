describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should display empty cart', () => {
    cy.get('app-cart-indicator').click();
    cy.contains('Your cart is empty').should('be.visible');
  });

  it('should add an item to the cart', () => {
    addItemToCart(1);
  });

  it('should remove an item from the cart by mouse over remove', () => {
    addItemToCart(1);
    cy.get('.item-remove').invoke('show').click();
    cy.get('[data-cy="cart-item-1"]').should('not.exist');
    cy.contains('Your cart is empty').should('be.visible');
  });

  it('should remove all items from the cart', () => {
    addItemToCart(1);
    addItemToCart(3);
    cy.contains('CLEAR CART').click();
    cy.contains('Your cart is empty').should('be.visible');
  });

  it('should display correct cart item count', () => {
    addItemToCart(1);
    addItemToCart(3);
    cy.contains('2 ITEMS IN CART').should('be.visible');
  });
});

const addItemToCart = (itemId: number) => {
  cy.get(`[data-cy="game-item-price-${itemId}"]`).click();
  cy.get(`[data-cy="game-item-price-${itemId}"]`).find('p.price').should('contain', 'IN CART');
  cy.get('app-cart-indicator').click();
  cy.get(`[data-cy="cart-item-${itemId}"]`).should('be.visible');
};
