# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary user: a person preparing the history-and-culture portion of Mexico's SRE naturalization exam. They need to practice the real job of that paper (ten questions, at least eight correct) without treating Raíces as the exam, a coaching service, or immigration advice.

Other audiences (curious learners, Mexican diaspora) may use the same bank. They are not the job the product is built around.

## Product Purpose

Raíces is an open, Spanish-language practice of Mexican history and culture. Success is that the candidate can study, miss, return, and remember, in the format of the exam they will sit, while always knowing this is independent practice and not a guarantee of passing.

## Positioning

An original question bank that mirrors the SRE history-and-culture *format and job* without reproducing the reserved bank, wearing official dress, or promising a result. Neighboring quiz apps can add levels; they cannot truthfully claim this independence plus this exam-shaped practice.

## Operating Context

Used in a personal browser, often on a phone, in short sittings. Progress lives in that browser (`localStorage` key `raices.v1`) unless the person exports a JSON backup from Biblioteca. The in-app timer is informational; there is no time limit. The app does not evaluate Spanish comprehension (a separate part of the real trámite). People are expected to consult the SRE study guide and the official sources linked from questions.

## Capabilities and Constraints

Current product (shipped):

- 125 original questions in eight levels and two stages; practices of ten items; eight correct unlocks the next level.
- Topics can be practiced from day one without unlocking the level path.
- Spaced review: a miss is due today; a hit postpones 1, 3, 7, 14, or 30 days.
- Pause keeps in-progress answers; abandon discards the session.
- Static React + Vite site. No accounts, no backend, no telemetry in the app. Hosting may log requests; Google Fonts is requested at load.
- Question IDs are stable because backups depend on them.

Must never be broken:

- Independent of the SRE. Do not look official, do not reproduce the reserved bank, do not offer immigration advice, do not guarantee passing.
- Questions and explanations are original and in Spanish, with verifiable sources for new items (SRE, INAH, INEHRM, UNESCO, or equivalent).

Explicitly open (not locked by this record):

- Accounts, sync, a backend, other languages, and adding telemetry are future product decisions, not current features.

## Brand Commitments

- Name: **Raíces** / **raíces**. Title: "Raíces · Tu camino a México".
- Product voice is Spanish: warm second person, belonging without ceremony. Existing lines that future copy should not casually replace: "CONOCER · PERTENECER · AVANZAR", "México, paso a paso.", "Una pregunta más cerca.", footer "MÉXICO NOS UNE", and the independence disclaimer.
- `public/pyramid.png` is an AI illustration made for the project, not an official or photographic image.

## Evidence on Hand

- Question banks: `src/questions.js`, `src/advanced.js`, `src/extra.js`.
- Official bibliography listed in-app (SRE study guide, Constitución, INEHRM, INAH).
- Functional references only (not code, not their banks): Ruspansky and Quiero Ser Mexicano, noted in `THIRD_PARTY_NOTICES.md`.
- Do not fabricate pass rates, testimonials, SRE affiliation, or "this is what appears on the exam."

## Product Principles

1. Honesty first: the product is practice, not the trámite and not a certificate.
2. Train the real job: ten items, eight to pass, history and culture, at the candidate's pace.
3. Original, sourced questions; never a shadow copy of a reserved bank.
4. Belonging is the tone, not a costume of official Mexico.
5. The person's progress is theirs; do not harvest it by default.

## Accessibility & Inclusion

No formal WCAG target is a product requirement yet. The interface is Spanish-first. Current implementation includes keyboard answers 1–4 and `prefers-reduced-motion`; those are present behavior, not a declared standard.
