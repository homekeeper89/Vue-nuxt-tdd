describe("todo main test", () => {

  beforeEach(() => {
    cy.visit('/todo')
  })

  it("Count todo count", () => {
    cy.get("[data-cy=todo-table]").find('tr').its('length').should('eq', 3)
  });

  it('Click add row', ()=>{
    cy.get("[data-cy=dialog-clickMe]").click()
    cy.get("[data-cy=todo--input--content").type("some words")
    cy.get("[data-cy=todo--input--footer").type("some footer")
    cy.get("[data-cy=todo--btn__agree]").click()
  })
});