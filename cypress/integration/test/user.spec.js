describe('유저에 관한 모든 테스트', () => {
  before(() => {
    cy.visit('/user')
  })
  it('등록확인', () => {
    cy.get("[data-cy=user__register__id]").type("wkdgndldi")
    cy.get("[data-cy=user__register__pwd]").type("password")
    cy.get("[data-cy=user__login__btn]").click()

    cy.get("[data-cy=user__register__dialog--form]").click()
    cy.get("[data-cy=dialog__form--title]").text()
  })
})