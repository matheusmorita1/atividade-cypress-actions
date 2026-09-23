describe('Cypress Example - página Actions', () => {
  const emailFicticio = 'matheusmorita@email.com.br'

  beforeEach(() => {
    cy.visit('/commands/actions')
  })

  it('preenche o campo de e-mail e marca uma caixa de seleção', () => {
    // Campo de e-mail localizado pela classe .action-email
    cy.get('.action-email')
      .should('be.visible')
      .and('have.value', '')
      .type(emailFicticio)

    // Validação 1: o campo contém exatamente o valor digitado
    cy.get('.action-email').should('have.value', emailFicticio)

    // Caixa de seleção habilitada da seção de checkboxes
    cy.get('.action-checkboxes [type="checkbox"][value="checkbox1"]')
      .should('not.be.checked')
      .check()

    // Validação 2: a caixa ficou marcada
    cy.get('.action-checkboxes [type="checkbox"][value="checkbox1"]')
      .should('be.checked')
  })
})
