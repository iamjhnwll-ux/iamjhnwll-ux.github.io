---
title: Seven-source Microsoft Fabric platform for an Australian retailer
org: HammerJack, client MorcoFresh (Project Harvest)
period: Jun 2026 to present
area: Data architecture
summary: Leading data architecture for a seven-source Fabric platform, with source-specific Bronze and Silver layers feeding one unified Gold Warehouse.
order: 1
tools: [Microsoft Fabric, OneLake, Lakehouse, Fabric Warehouse, PySpark, Spark SQL, T-SQL, Direct Lake, Power BI, Paginated reports (RDL), DAX]
flow: [Seven source systems, Bronze per source, Silver per source, Unified Gold Warehouse, Direct Lake semantic models, Power BI and paginated reports]
outcomes:
  - { value: '7', label: 'source systems across DEV, QA and PROD' }
  - { value: '95', label: 'governed reports so far (as of Nov 2026): 76 paginated and 19 Power BI, plus 6 semantic models' }
  - { value: 'AU$2M', label: 'projected programme ROI, plus AU$150K projected annual savings' }
---

## The goal

Project Harvest is a seven-source Microsoft Fabric programme for an Australian retail business, running across DEV, QA and PROD. It needs source transformations kept apart from the shared business definitions that every report uses.

## My role

I lead the data architecture for the programme and set its ingestion and modelling patterns. I work in Agile sprints, gather requirements directly with business stakeholders and mentor teammates through code review.

## The approach

- **Source-specific Bronze and Silver.** Each source is processed in its own Bronze and Silver layers, separate from the business modelling.
- **One unified Gold Warehouse.** Shared business definitions are modelled in Gold as facts and conformed dimensions, written in PySpark, Spark SQL and T-SQL.
- **Shared definitions across the business.** The Gold layer covers inventory valuation, stock-take variance, bulk picking, product costing, operations benchmarks, customer sales and support-ticket queues, giving finance and operations shared business definitions. I also extended Silver tables for new business rules.
- **Analytics on top.** Semantic models with DAX and row-level security feed Power BI and paginated reports for sales, finance, inventory, operations and transport, including customer-specific sales and quality-of-service reports.

## The result

- As of November 2026: 76 paginated (RDL) reports, 19 Power BI reports and 6 semantic models built and released through Git. These counts keep growing as new work ships.
- Shared business definitions held in one unified Gold Warehouse.
- The programme's projected benefits are AU$2M ROI and AU$150K annual savings. These are programme projections, not measured results.
