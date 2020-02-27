// the next comment line loads the custom commands from the plugin
// so that our editor understands "cy.frameLoaded" and "cy.iframe"
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Recipe: blogs__iframes', () => {
  it('fetches post using iframes plugin', () => {
    cy.visit('/test')
    cy.frameLoaded('[data-cy="the-frame"]')
    // after the frame has loaded, we can use "cy.iframe()"
    // to retrieve it
    cy.iframe().find('#run-button').should('have.text', 'Try it').click()
    cy.iframe().find('#result').should('include.text', '"delectus aut autem"')
  })
})