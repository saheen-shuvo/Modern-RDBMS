# Modern-RDBMS

A beginner-friendly learning repository for **practicing relational database management system (RDBMS) fundamentals**, with a strong focus on **normalization**.

This repo contains short topic-wise notes in `.ts` files (written as commented explanations) to help you build a strong conceptual foundation before writing SQL schemas in real projects.

## Purpose

This repository is for:
- Practicing core database concepts step by step
- Understanding how good relational design is created
- Learning why normalization matters for data integrity
- Reviewing key topics quickly before interviews, exams, or projects

## What You Will Learn

- What a database is and why it is used
- Data vs information
- Database model types (relational, NoSQL, hierarchical, network, object-oriented)
- SDLC context for database work
- Table/relation anatomy
- Entity-Relationship Diagram (ERD) basics
- Relationships and cardinality
- Keys in databases
- Database design process
- Anomalies in poor schema design
- Resolving many-to-many relationships
- Normalization overview and detailed normal forms (1NF, 2NF, 3NF)

## Repository Content Map

- `what-is-database.ts` — database basics and data vs information
- `type-of-db-model.ts` — common database model categories
- `sdlc.ts` — SDLC phases and where database design fits
- `anatomy-of-table-or-relation.ts` — structure of a table/relation
- `entity-relationship-diagram.ts` — ERD components and value
- `relationship-cardinality.ts` — 1:1, 1:N, M:N relationships
- `keys-in-database.ts` — primary, foreign, unique, composite, candidate, alternate, super keys
- `database-design.ts` — step-by-step database design workflow
- `anomalies-in-db.ts` — insertion, update, and deletion anomalies
- `resolve-many-to-many.ts` — junction table approach
- `normalization.ts` — normalization summary and goals
- `1NF.ts` — First Normal Form
- `2NF.ts` — Second Normal Form
- `3NF.ts` — Third Normal Form

## Most Important Topic: Normalization

Normalization is the heart of this repository and the most important concept for building reliable relational schemas.

### Why Normalization Matters

Normalization helps you:
- Reduce redundant data
- Prevent inconsistent updates
- Avoid insertion and deletion anomalies
- Improve data integrity
- Keep schemas easier to maintain and extend

### Normalization Journey in This Repo

1. Learn the problem first:
   - `anomalies-in-db.ts`
2. Understand the core concept:
   - `normalization.ts`
3. Study each normal form in sequence:
   - `1NF.ts` → `2NF.ts` → `3NF.ts`
4. Connect to relationship modeling:
   - `relationship-cardinality.ts`
   - `resolve-many-to-many.ts`
5. Tie everything back to overall design:
   - `database-design.ts`
   - `entity-relationship-diagram.ts`

## Detailed Normal Forms Guide

### 1NF (First Normal Form)

**Rule:** Every field must contain atomic (single) values, and rows should be uniquely identifiable.

**What to check:**
- No comma-separated or array-like values in one column
- No repeating groups in a single row
- Every row can be uniquely identified (typically with a key)

**Typical fix:**
- Split multi-valued attributes into separate rows or related tables

---

### 2NF (Second Normal Form)

**Rule:** Must already be in 1NF, and every non-key attribute must depend on the **whole** primary key (important for composite keys).

**What to check:**
- Composite primary keys in bridge/detail tables
- Non-key columns that depend on only part of that composite key (partial dependency)

**Typical fix:**
- Move partially dependent attributes to their own table
- Keep only fully dependent attributes in the original table

---

### 3NF (Third Normal Form)

**Rule:** Must already be in 2NF, and there should be no transitive dependency (non-key depending on non-key).

**What to check:**
- Attributes that logically belong to another entity
- Repeated descriptive data caused by indirect dependencies

**Typical fix:**
- Move transitively dependent columns into a separate table
- Reference the new table using foreign keys

---

### Practical Normalization Checklist

When designing a schema, ask:
1. Are all attributes atomic? (1NF)
2. If I use a composite key, do all non-key columns depend on all key parts? (2NF)
3. Is any non-key column determining another non-key column? (3NF)
4. Can this design cause insertion/update/deletion anomalies?
5. Should a separate entity/table be created instead?

## Suggested Learning Path

Use this order for best understanding:

1. `what-is-database.ts`
2. `type-of-db-model.ts`
3. `anatomy-of-table-or-relation.ts`
4. `keys-in-database.ts`
5. `relationship-cardinality.ts`
6. `resolve-many-to-many.ts`
7. `anomalies-in-db.ts`
8. `normalization.ts`
9. `1NF.ts`
10. `2NF.ts`
11. `3NF.ts`
12. `entity-relationship-diagram.ts`
13. `database-design.ts`
14. `sdlc.ts`

## How to Use This Repository

- Read each file topic-by-topic
- Rewrite concepts in your own words
- Create your own example tables for each normal form
- Practice converting unnormalized structures into 1NF → 2NF → 3NF
- Draw ERDs for your practice scenarios
- Translate the final normalized design into SQL in your local practice environment

## Notes

- This repository is concept-focused and text-based.
- Files are educational notes, not executable TypeScript modules.
- The best outcome comes from practicing each concept with your own schema examples.

---

If you are learning RDBMS seriously, spend most of your time on:
1. Keys
2. Relationships/cardinality
3. **Normalization (1NF, 2NF, 3NF)**  
These three together form the core of strong relational database design.
