# Atividade Cypress + GitHub Actions

Projeto de teste E2E com Cypress executado automaticamente pelo GitHub Actions todos os dias às 21h (horário de Brasília).

## Integrantes

- Matheus Jorge Morita

## Cenário testado

Site: <https://example.cypress.io/commands/actions>

O teste [`cypress/e2e/formulario-actions.cy.js`](cypress/e2e/formulario-actions.cy.js):

1. Acessa a página **Actions** do Cypress Example.
2. Localiza o campo de e-mail pela classe `.action-email`.
3. Digita um e-mail fictício e verifica com `should('have.value', ...)` se o campo contém exatamente o valor digitado.
4. Localiza a caixa `checkbox1` da seção `.action-checkboxes`.
5. Marca a caixa e verifica com `should('be.checked')` se ela ficou selecionada.

## Como executar localmente

Pré-requisito: Node.js 20 ou superior.

```bash
npm ci
npm test          # executa todos os testes em modo headless (cypress run)
npm run cy:open   # abre a interface do Cypress
```

## Pipeline (GitHub Actions)

Arquivo: [`.github/workflows/cypress-agendado.yml`](.github/workflows/cypress-agendado.yml)

- **Execução manual:** `workflow_dispatch` (aba *Actions* → *Testes E2E agendados (Cypress)* → *Run workflow*).
- **Execução agendada:** todos os dias às 21h no fuso `America/Sao_Paulo`:

  ```yaml
  schedule:
    - cron: '0 21 * * *'
      timezone: 'America/Sao_Paulo'
  ```

- **Job:** `ubuntu-latest` → `npm ci` → `npm test`.
- **Evidências:** se o teste falhar, os screenshots (`cypress/screenshots`) e vídeos (`cypress/videos`) são publicados como *artifacts* da execução.

## Estrutura

```
.
├── .github/workflows/cypress-agendado.yml
├── cypress/e2e/formulario-actions.cy.js
├── cypress.config.js
├── package.json
└── README.md
```
