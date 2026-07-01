# n8n Automation Workflow Files

This folder contains n8n workflow configurations and supporting files for automating lead distribution from Formstack to Slack with round-robin assignment.

## Files

### `round-robin-logic.js`

JavaScript function containing the core round-robin lead assignment logic. Defines:

- User mappings (`user1`, `user2`, `user3`)
- Service-specific routing pools (Business Registration, Virtual Office, Coworking)
- Default fallback pool

### `slack-initial-message.json`

Template for the initial Slack message containing lead details. Builds a formatted message with the lead's name, email, phone, and message content.

### `Formstack to Slack via Webhook and HTTP Request v3.json`

Latest workflow version with full round-robin implementation:

- Formstack Webhook → Validated Formstack Data → Get Round Robin Index → Lead Assignment Logic → Update Round Robin Index → Slack Initial Message → Slack Lead Assignment

### `Formstack to Slack via Webhook and HTTP Request v2.json`

Earlier iteration with similar structure but without data store integration.

### `Formstack to Slack via Webhook and HTTP Request.json`

Base version of the workflow with webhook and Slack integration.

### `Formstack to Slack (Updated).json`

Simplified workflow using Formstack Trigger node instead of webhook, posting basic lead notifications to Slack.

### `Form to Slack + Salesforce.json`

Workflow that distributes leads to both Slack and Salesforce simultaneously via webhook input.

### `slack-manifest.json`

Slack app configuration manifest defining:

- Bot user display name: "Loft Demo Automation"
- OAuth redirect URL and required scopes (`chat:write`, `chat:write.public`, etc.)
