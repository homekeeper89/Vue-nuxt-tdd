describe("Apple Login Test", () => {
  let polyfill

  // grab fetch polyfill from remote URL, could be also from a local package
  before(() => {
    const polyfillUrl = 'https://unpkg.com/unfetch/dist/unfetch.umd.js'

    cy.request(polyfillUrl)
      .then((response) => {
        polyfill = response.body
      })
  })

  const getIframeBody = () => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return cy
      .get('iframe[data-cy="the-frame"]')
      .its('0.contentDocument.body').should('not.be.empty')
      // wraps "body" DOM element to allow
      // chaining more Cypress commands, like ".find(...)"
      // https://on.cypress.io/wrap
      .then(cy.wrap)
  }

  const getIframeWindow = () => {
    return cy
      .get('iframe[data-cy="the-frame"]')
      .its('0.contentWindow').should('exist')
  }

  const replaceIFrameFetchWithXhr = () => {
    // see recipe "Stubbing window.fetch" in
    // https://github.com/cypress-io/cypress-example-recipes
    getIframeWindow().then((iframeWindow) => {
      delete iframeWindow.fetch
      // since the application code does not ship with a polyfill
      // load a polyfilled "fetch" from the test
      iframeWindow.eval(polyfill)
      iframeWindow.fetch = iframeWindow.unfetch
  
      // BUT to be able to spy on XHR or stub XHR requests
      // from the iframe we need to copy OUR window.XMLHttpRequest into the iframe
      cy.window().then((appWindow) => {
        iframeWindow.XMLHttpRequest = appWindow.XMLHttpRequest
      })
    })
  }

  it('gets the post using single its', () => {
    cy.visit('/test')
    getIframeBody().find('#run-button').should('have.text', 'Try it').click()
    getIframeBody().find('#result').should('include.text', '"delectus aut autem"')
  })

  it('spies on window.fetch method call', () => {
    cy.visit('/test')

    getIframeWindow().then((win) => {
      cy.spy(win, 'fetch').as('fetch')
    })

    cy.getIframeBody().find('#run-button').should('have.text', 'Try it').click()
    cy.getIframeBody().find('#result').should('include.text', '"delectus aut autem"')

    // because the UI has already updated, we know the fetch has happened
    // so we can use "cy.get" to retrieve it without waiting
    // otherwise we would have used "cy.wait('@fetch')"
    cy.get('@fetch').should('have.been.calledOnce')
      // let's confirm the url argument
      .and('have.been.calledWith', 'https://jsonplaceholder.cypress.io/todos/1')
  })

  it('spies on XHR request', () => {
    cy.visit('/test')
  
    replaceIFrameFetchWithXhr()
    // prepare to spy on XHR before clicking the button
    cy.server()
    cy.route('/todos/1').as('getTodo')
  
    cy.getIframeBody().find('#run-button')
      .should('have.text', 'Try it').click()
  
    // let's wait for XHR request to happen
    // for more examples, see recipe "XHR Assertions"
    // in repository https://github.com/cypress-io/cypress-example-recipes
    cy.wait('@getTodo').its('response.body').should('deep.equal', {
      completed: false,
      id: 1,
      title: 'delectus aut autem',
      userId: 1,
    })
  
    // and we can confirm the UI has updated correctly
    getIframeBody().find('#result')
      .should('include.text', '"delectus aut autem"')
  })

  it('stubs XHR response', () => {
    cy.visit('/test')
  
    replaceIFrameFetchWithXhr()
    // prepare to stub before clicking the button
    cy.server()
    cy.route('/todos/1', {
      completed: true,
      id: 1,
      title: 'write tests',
      userId: 101,
    }).as('getTodo')
  
    cy.getIframeBody().find('#run-button')
      .should('have.text', 'Try it').click()
    // and we can confirm the UI shows our stubbed response
    cy.getIframeBody().find('#result')
      .should('include.text', '"write tests"')
  })
})