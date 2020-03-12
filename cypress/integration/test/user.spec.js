describe('유저에 관한 모든 테스트', ()=>{
  before(()=>{
    cy.visit('/user')
  })
  it('등록확인', () => {
    cy.get("[data-cy=user__register__form--btn]").click()
    cy.get("[data-cy=user__register__id]").type("wkdgndldi")
    cy.get("[data-cy=user__register__pwd]").type("password")
    cy.get("[data-cy=user__register__pwd--re]").type("password")
  })
})