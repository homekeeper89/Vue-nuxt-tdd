describe("todo main test", () => {

  beforeEach(() => {
    cy.visit('/todo')
  })

  it("Count todo count", () => {
    cy.get("[data-cy=todo-table]").find('tr').its('length').should('eq', 3)
  });

  it('Click row and add something', ()=>{
    cy.get("[data-cy=dialog-clickMe]").click()
    cy.get("[data-cy=todo--input--content").type("some words")
    cy.get("[data-cy=todo--input--title").type("some title")
    cy.get("[data-cy=todo--btn__agree]").click()
  })

  it('responds with the stub', () => {
    cy.server();
    cy.route('https://jsonplaceholder.typicode.com/todos/1', { id: 1, name: 'Phoebe'});
    cy.visit('/todo');         // the url to visit in your app
    
  });
});