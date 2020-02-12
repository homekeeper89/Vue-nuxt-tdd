describe("todo main test", () => {
  const title = "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
  const contents = "quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto"

  beforeEach(() => {
    cy.visit('/todo')
  })

  // it("Count todo count", () => {
  //   cy.get("[data-cy=todo__table]").find('tr').its('length').should('eq', 6)
  // });

  it('Click Me and add something', () => {
    cy.get("[data-cy=todo__dialog__btn--register]").click()
    cy.get("[data-cy=todo__dialog__input--content]").type("some words")
    cy.get("[data-cy=todo__dialog__input--title]").type("some title")
    cy.get("[data-cy=todo__dialog__input--title]").find('input').focus().blur()
    cy.get("[data-cy=todo__dialog__btn--accept]").click()
    cy.wait(2000)
    cy.get("[data-cy=todo__table]").last().contains('td', 'some words')
  })

  it('Row Click and show data', () => {
    cy.get("[data-cy=todo__table]").contains('td', title).click()
    cy.get("[data-cy=todo__dialog__input--title]").find('input').invoke('val').should("contain", title);
    cy.get("[data-cy=todo__dialog__input--content]").find('input').invoke('val').should("contain", contents);
  })

  it('Click, update and click i accept', () => {
    cy.get("[data-cy=todo__table]").contains('td', title).click()
    cy.get("[data-cy=todo__dialog__input--title]").find('input').as('title')
    cy.get("[data-cy=todo__dialog__input--content]").find('input').as('content')
    cy.get("@title").clear()
    cy.get("@content").clear()
    cy.get("@title").type("some text")
    cy.get("@content").type("some content")
    cy.get("[data-cy=todo__dialog__btn--accept]").click()
    cy.wait(2000)
    cy.get("[data-cy=todo__table]").last().contains('td', 'some words')
  })

});