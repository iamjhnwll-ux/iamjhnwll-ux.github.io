---
title: Capacity-aware pipeline design on Microsoft Fabric
org: HammerJack, client MorcoFresh (Project Harvest)
period: Sep to Nov 2026
area: Performance and cost
summary: Keeping capacity use proportional to business need with incremental extraction, production-gated schedules and model refreshes that follow the data build.
order: 9
tools: [Microsoft Fabric, Data Factory pipelines, Fabric notebooks, PySpark, GitHub Actions, Contract tests]
flow: [Source system, Incremental extract, Bronze to Gold build, Model refresh, PROD-gated schedules]
outcomes:
  - { value: 'Incremental', label: 'telematics extraction that skips unchanged routes' }
  - { value: 'PROD-gated', label: 'schedules are committed disabled and switched on for production at deploy' }
  - { value: 'Tested', label: 'a contract test checks the schedule settings' }
---

## The goal

On a seven-source Microsoft Fabric platform, every scheduled run uses shared capacity. The goal was to keep that use proportional to what the business needs: pull only what changed, run no scheduled work outside production, and refresh models only after the data they read is ready.

## What I did

- **Incremental extraction.** I built an incremental transport telematics extract that skips unchanged routes: a route whose summary is unchanged since a recent capture is not pulled again. It re-fetches anything older, and can still be forced into a full pull when needed.
- **Schedules gated to production.** I committed a scheduled metadata refresh as disabled so it runs only in PROD, and added a contract test that checks committed schedules ship disabled and are gated to production, so a schedule cannot reach the wrong environment by accident.
- **Model refreshes that follow the data.** I added semantic model refreshes as steps in an existing pipeline run, so each model refreshes after the Gold build it reads from has finished.

## How the wider platform fits

The platform also tiers its Gold refreshes by how fresh each dataset needs to be, and sets schedule frequency per source. That design was built by others on the team. The work above follows the same idea: do the expensive work only when it is needed.

## The result

- Less unnecessary work: unchanged routes are skipped, schedules are gated to production and refreshes follow the data build.
- I have not published a capacity or cost saving figure for this work. When I do, it will be labelled as measured, estimated or projected, like the figures elsewhere on this site.
