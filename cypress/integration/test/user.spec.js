describe('유저에 관한 모든 테스트', ()=>{
  before(()=>{
    cy.visit('/user')
  })
  it('등록확인', () => {
    cy.get("[data-cy=user__register--btn]").click()
  })
})