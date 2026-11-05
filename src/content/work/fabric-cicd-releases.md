---
title: CI/CD and release management for Microsoft Fabric
org: HammerJack, client MorcoFresh (Project Harvest)
period: Jun 2026 to present
area: DevOps and delivery
summary: Running repeatable, approval-controlled releases of Fabric items across DEV, QA and PROD with Git, GitHub Actions and fabric-cicd.
order: 2
tools: [Git, GitHub, GitHub Actions, fabric-cicd, Microsoft Fabric, Paginated reports (RDL), Contract tests, Runbooks]
flow: [Git, GitHub Actions and fabric-cicd, DEV, QA, Approval, PROD]
outcomes:
  - { value: '28', label: 'releases in 10 weeks' }
  - { value: '3', label: 'environments: DEV, QA and PROD' }
  - { value: 'PROD', label: 'deployment approver for the programme' }
---

## The goal

A multi-environment Fabric programme needs repeatable, approval-controlled promotion from DEV to QA to PROD.

## The approach

- **Git-based releases.** Fabric items are released through Git, GitHub Actions and fabric-cicd across DEV, QA and PROD.
- **Paginated reports included.** I extended the deployment process to cover paginated (RDL) reports, and upgraded fabric-cicd.
- **Approval control.** I became a PROD deployment approver for the programme.
- **Quality gates.** I wrote semantic-model contract tests, refresh runbooks and CI/CD documentation for review and handover. I also created AI-agent testing and quality-gate standards using Claude Code and Fabric and Power BI MCP servers.

## The result

- 28 releases in 10 weeks across DEV, QA and PROD.
- Repeatable, approval-controlled promotion.
- Tests, runbooks and documentation ready for review and handover.
