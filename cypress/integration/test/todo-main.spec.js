describe("todo main test", () => {
  const title = 'i am fixture title'
  const body = 'i am fixture body'

  before(() => {
    cy.fixture('todo/getTodoAll').then((getTodoAll) => {
      cy.server()
      cy.route({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
        response: [getTodoAll]
      })
    })
    cy.visit('/todo')
  })

  it('새로운 todo 생성', () => {
    cy.get("[data-cy=todo__dialog__btn--register]").click()
    cy.get("[data-cy=todo__dialog__input--content]").as('input-content')
    cy.get("[data-cy=todo__dialog__input--title]").as('input-title')

    cy.get("@input-content").find('input').clear()
    cy.get("@input-content").type("some words")

    cy.get("@input-title").find('input').clear()
    cy.get("@input-title").type("some title")

    cy.get("[data-cy=todo__dialog__input--title]").find('input').focus().blur()
    cy.get("[data-cy=todo__dialog__btn--accept]").click()
    cy.get("[data-cy=todo__table]").last().contains('td', 'some words')
  })

  it('클릭하고 data제대로 modal에 불러 오는지', () => {
    cy.fixture('todo/getTodoAll').then((getTodoAll) => {
      cy.server()
      cy.route({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
        response: [getTodoAll]
      })
    })
    cy.get("[data-cy=todo__table]").find('tbody').find('tr').first().click({force: true})
    cy.get("[data-cy=todo__dialog__input--title]").find('input').invoke('val').should("contain", "some title");
    cy.get("[data-cy=todo__dialog__input--content]").find('input').invoke('val').should("contain", "some words");
  })

  it.only("로우 클릭, 수정, 확인", ()=>{
    let newTitle = "New title";
    let newContent = "New Content";

    cy.get("[data-cy=todo__table]").find('tbody').find('tr').last().as("firstRow")
    cy.get("@firstRow").find("td").then($elem=>{
      
      cy.get("@firstRow").click({force:true})
      cy.get("[data-cy=todo__dialog__input--title]").find('input').as("rowTitle")
      cy.get("[data-cy=todo__dialog__input--content]").find('input').as("rowContent")

      cy.get("@rowTitle").clear()
      cy.get("@rowTitle").type(newTitle)

      cy.get("@rowContent").clear()
      cy.get("@rowContent").type(newContent)

      cy.get("[data-cy=todo__dialog__btn--accept]").click({force:true}).then($btn=>{
        cy.get("@firstRow").find("td").then($elem=>{
          assert.equal($elem[2].innerHTML, newTitle, '뭐야 왜 안됨')
        })
      })
    })
  })

  it('Some api for test', () => {
    cy.server()
    cy.fixture('house/allHouse.json').then((getAllHouse) => {
      cy.route({
        method: 'GET',
        url: 'api/v2/todos',
        response: getAllHouse
      })
    })
  })
});