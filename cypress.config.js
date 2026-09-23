const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.cypress.io',
    supportFile: false,
    specPattern: 'cypress/e2e/**/*.cy.js',
    viewportWidth: 1280,
    viewportHeight: 800,
    // Evidências para o pipeline: screenshot automático em falha e vídeo da execução
    screenshotOnRunFailure: true,
    video: true,
  },
})
