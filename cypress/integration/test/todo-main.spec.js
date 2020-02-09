describe("todo main test", () => {

  beforeEach(() => {
    cy.visit('/todo')
  })

  it("Count todo count", () => {
    cy.get("[data-cy=todo__table]").find('tr').its('length').should('eq', 3)
  });

  it('Click Me and add something', ()=>{
    cy.get("[data-cy=todo__dialog__btn--register]").click()
    cy.get("[data-cy=todo__dialog__input--content").type("some words")
    cy.get("[data-cy=todo__dialog__input--title").type("some title")
    cy.get("[data-cy=todo__dialog__input--title").find('input').focus().blur()
    cy.get("[data-cy=todo__dialog__btn--accept]").click()
    cy.wait(2000)
    cy.get("[data-cy=todo__table]").last().contains('td', 'some words')
  })

  it('Row Click and show data', ()=>{
    const title = "Flask Todo project"
    const contents = "Finish Some feature"
    cy.get("[data-cy=todo__table]").contains('td', title).click()
    cy.get("[data-cy=todo__dialog__input--title]").find('input').invoke('text').then((text)=>{
      cy.log(">>>>>>", text)
    })
    cy.get("[data-cy=todo__dialog__input--title]").find('input').invoke('val').should("contain", title);
    // cy.get("[data-cy=todo__dialog__input--content]").should('contain', contents)

  })
  // it('responds with the stub', () => {
  //   cy.server();
  //   cy.route('https://jsonplaceholder.typicode.com/todos/1', { id: 1, name: 'Phoebe'});
  //   cy.visit('/todo');         // the url to visit in your app
  // });
});