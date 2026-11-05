---
title: Power BI metadata catalogue and unified report scheduler
org: HammerJack, client MorcoFresh (Project Harvest)
period: Jun 2026 to present
area: Automation
summary: Built a Power BI metadata catalogue and a unified Fabric report scheduler, using notebooks, pipelines and MSAL-authenticated APIs.
order: 4
tools: [Microsoft Fabric, Fabric notebooks, Data Factory pipelines, MSAL-authenticated APIs, Power BI]
flow: [MSAL-authenticated APIs, Fabric notebooks, Metadata catalogue, Pipeline scheduler, Report delivery]
outcomes:
  - { value: '2.5 h', label: 'per week saved in schedule administration (business-case estimate)' }
  - { value: '1', label: 'unified Fabric report scheduler' }
  - { value: 'Auto', label: 'report inventory and delivery' }
---

## The goal

Automate report inventory and report delivery, and reduce the time spent administering schedules.

## The approach

- **Metadata catalogue.** Fabric notebooks call MSAL-authenticated APIs to build a Power BI metadata catalogue.
- **Unified scheduler.** Fabric pipelines run report delivery from one scheduler.

## The result

- Report inventory and delivery are automated.
- The business case estimates 2.5 hours per week saved in schedule administration. This is an estimate, not a measured figure.
