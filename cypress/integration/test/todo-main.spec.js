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

  it.only('로우 클릭, 데이터 수정, 데이터 제대로 입력 확인', () => {
    // cy.get('.as-table').find('tbody>tr')
    //   .first().find('td').first()
    //   .find('button').as('firstBtn')
    cy.get("[data-cy=todo__table]").contains('td', title).click({force: true})
    cy.get("[data-cy=todo__table]").contains('td', title).click({force:true}).then(($btn)=>{
      cy.get('[data-cy=todo__table]').contains('td', title).then($elem => {
        // 결국 title 그대로 가져오는 꼴. 의미 없음.
        cy.log(">>>>", $elem.text())
        cy.debug()
      });
    })
    cy.get("[data-cy=todo__dialog__input--title]").find('input').as('title')
    cy.get("[data-cy=todo__dialog__input--content]").find('input').as('content')
    cy.get("@title").clear()
    cy.get("@content").clear()
    cy.get("@title").type("some text")
    cy.get("@content").type("some content")
    cy.get("[data-cy=todo__dialog__btn--accept]").click()
    cy.wait(2000)
    // cy.get('tr[data-recordid="TheId"]>td> div'
    cy.get("[data-cy=todo__table]").contains('td', 'some text').click({force:true})
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