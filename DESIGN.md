---
name: Raíces
description: Warm, serious study of Mexico — a solar of paper, bosque, and barro under a clay sun.
colors:
  bosque: "#193e32"
  bosque-hover: "#28533f"
  barro: "#b65332"
  sol: "#d8a04c"
  sol-eyebrow: "#e5b45e"
  ink: "#142f2b"
  body: "#17312d"
  muted: "#68706d"
  line: "#e0ddd4"
  paper: "#f7f5ef"
  paper-side: "#f3f1e9"
  paper-panel: "#faf8f2"
  paper-quiz: "#fffcf6"
  cream: "#f8f4e9"
  focus: "#c47d35"
  good: "#e8efdf"
  bad: "#f6e9dd"
typography:
  display:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "clamp(42px, 4.6vw, 68px)"
    fontWeight: 400
    lineHeight: 1.07
    letterSpacing: "-1.8px"
  headline:
    fontFamily: "Libre Caslon Display, Georgia, serif"
    fontSize: "31px"
    fontWeight: 400
    lineHeight: 1.12
  title:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    letterSpacing: "0.1px"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "14px"
  full: "999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.bosque}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "13px 21px"
    height: "47px"
  button-primary-hover:
    backgroundColor: "{colors.bosque-hover}"
  button-cream:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.bosque}"
    typography: "{typography.headline}"
    rounded: "{rounded.md}"
    padding: "13px 21px"
    height: "47px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.bosque}"
    rounded: "{rounded.md}"
    padding: "13px 21px"
    height: "47px"
  answer:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "15px 18px"
    height: "59px"
  panel:
    backgroundColor: "{colors.paper-panel}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  topic-chip:
    backgroundColor: "{colors.paper-panel}"
    textColor: "{colors.ink}"
    rounded: "9px"
    padding: "16px 14px"
    height: "76px"
---

# Design System: Raíces

## Overview

**Creative North Star: "El solar bajo el sol"**

Raíces looks like a small plot of Mexican land brought indoors: warm paper, bosque shade, barro, and a clay pyramid under a round sun. It is a place you tend, not a government portal and not a gamified SaaS quiz. The atmosphere is **cálida y seria** — you are studying for a real trámite, on paper that could live on a kitchen table.

Display type is a book serif (Libre Caslon Display) for belonging and titles. Work type is DM Sans. Color is committed bosque on the hero and primary actions, with barro as the scarce human accent (current level, error, XP, topic). Depth is mostly tonal: stacked papers and hairline rules. Light ambient lift is allowed on study surfaces (quiz, cards, cream CTA) so they sit slightly off the page, never as Material elevation.

The clay illustration (`public/pyramid.png`) is the signature object. It belongs in the forest hero, not as a repeating sticker.

**Key Characteristics:**
- Warm paper field, never cool gray or true white as the page.
- Serif for titles and belonging; sans for tasks.
- Bosque + barro as the only two chromatic voices; sol for rare highlights.
- Hairlines and stacked paper; optional soft lift on study surfaces.
- Independent of official Mexico: no tricolor, no eagle, no gob.mx chrome.

## Colors

A committed bosque field with barro as the human accent and sol as a rare highlight. Neutrals are tinted toward green-earth, never pure gray.

### Primary
- **Bosque** (`bosque`): Hero, primary buttons, progress fills, active nav. The shade of the solar. Hover goes one step lighter (`bosque-hover`).

### Secondary
- **Barro** (`barro`): Current level disc, incorrect answers, XP, uppercase topic labels, destructive text. Used sparingly so it still reads as clay, not as alarm red.

### Tertiary
- **Sol** (`sol`, `sol-eyebrow`): Eyebrows, gold leaf, earned medals, focus-adjacent warmth. Never a fill for large surfaces.

### Neutral
- **Ink** (`ink`): Primary readable text on paper.
- **Body** (`body`): Default page text.
- **Muted** (`muted`): Meta, captions, timer.
- **Line** (`line`): Hairline rules and panel borders.
- **Paper** (`paper`): Page ground.
- **Paper side** (`paper-side`): Sidebar, a half-step duskier.
- **Paper panel** (`paper-panel`): Cards and topic chips.
- **Paper quiz** (`paper-quiz`): The quiz sheet, slightly brighter than the page.
- **Cream** (`cream`): Hero CTA fill.
- **Good / Bad** (`good`, `bad`): Feedback washes, not saturated banners.
- **Focus** (`focus`): 3px focus ring.

**The Bosque y Barro Rule.** Two chromatic voices. Bosque holds the land; barro marks the person (here, wrong, now). Do not add a third accent family (sky, purple, electric lime). Sol is light, not a third brand color.

**The No Official Dress Rule.** No Mexican flag tricolor as UI, no coat of arms, no gob.mx header, no “portal” chrome. Belonging is the solar, not the state.

## Typography

**Display Font:** Libre Caslon Display (Georgia)
**Body Font:** DM Sans (system sans)

**Character:** A book you can study in. The serif is large, slightly tight, and unbolded except the wordmark. The sans does the labor: labels, answers, nav.

### Hierarchy
- **Display** (400, clamp 42–68px, 1.07, −1.8px): Page titles. “México, paso a paso.”
- **Headline** (400, 31px / hero 38px / subtitle 27px): Section titles, cream CTA, level names.
- **Title** (600, 18px, 1.4): Sans subheads (h3).
- **Body** (400, 15px, ~1.5–1.7, measure often ≤620–730px): Explanations, settings, intro.
- **Label** (600, 12–14px): Eyebrows, topics (uppercase + 1px letter-spacing), meta.

Wordmark `raíces` is display serif at 65px, weight bold, tracking −2px. The small brand line under it is 6px tracked caps — a known extreme; do not copy that size onto readable UI.

**The Two Hands Rule.** Serif speaks (titles, quotes, cream CTA). Sans works (answers, nav, forms). Do not set long explanations in Caslon.

## Layout

Fixed 240px sidebar on desktop (200px below 1190px); main is the remaining column, max 1600px, padded 25–32px. Dashboard is 1fr + 285px rail, collapsing to one column at 980px and a stacked phone layout at 680px (sidebar becomes a horizontal scroller).

Rhythm is uneven on purpose: 8 / 16 / 24 / 32 as the reusable steps, with 12–13px used inside controls. Quiz is a centered sheet (max 830px). Topic chips auto-fill from 168px; two columns on small phones.

**The Kitchen-Table Rule.** One primary column of study. Do not turn Mi camino into a metric dashboard. The rail is a companion, not a KPI strip.

## Elevation & Depth

Default is stacked paper: darker sidebar, lighter page, still-lighter quiz sheet, hairline `line` borders. Shadows are rare but allowed as **soft lift** on study surfaces so they feel like a sheet laid on the table.

### Shadow Vocabulary
- **Cream lift** (`box-shadow: 0 3px 8px #0001`): Hero CTA only, at rest.
- **Current-level halo** (`box-shadow: 0 0 0 6px {paper}`): The barro disc of the active level, to punch it out of the timeline.
- **Study lift** (new, permitted): a comparably soft ambient shadow on quiz, flashcard, or panel — never a dark Material umbra, never stacked on nested cards.

**The Table-Sheet Rule.** Surfaces are paper on paper. A sheet may lift a few pixels. Nothing floats in a dark room, and nested cards do not each grow a shadow.

## Shapes

Gently curved work surfaces: 8px on buttons and answers, 9–12px on panels, chips, hero, flashcards, 14px on the quiz sheet. Discs (level numbers, avatar, icon wells) are fully round. Badges are pills (20px). Answer letter keys are 5px squares.

Borders are 1px `line` at rest; selected answers go 2px bosque. Dashed 1px is reserved for unearned medals.

**The Clay-Edge Rule.** Corners are softened clay, not glass pills and not sharp bureaucratic boxes. Stay in the 6–14px band; do not jump to 24px+ “app blobs.”

## Components

### Buttons
Solid study controls. 8px radius, 13×21 padding, min-height 47px, weight 600, 0.15s background + 1px rise on primary hover.

- **Primary:** Bosque fill, white text. Hover `bosque-hover`.
- **Cream:** Serif ~21px, cream fill, bosque text, cream lift shadow. Hero only.
- **Secondary:** Transparent, 1px `#b6c0b5`, bosque text. Hover wash `#e7eadf`.
- **Text:** No chrome, bosque, underline on hover. `.terra` tints the label barro.
- **Focus:** 3px `focus` outline, 5px offset, on buttons, links, and summaries.

### Chips
Topic chips are small paper cards (9px, 16×14, min-height 76px) with serif name + sans count. Hover: bosque border and a green-paper wash. Not pills.

### Cards / Containers
- **Panel:** 1px line, 9–12px, `paper-panel`, ~24px padding.
- **Focus panel:** Warmer `#f7f0e5` with `#ecdcc6` border — the “open topics” aside.
- **Quiz:** 14px, `paper-quiz`, 32×40 padding, optional study lift.
- **Flashcard:** 12px, `#faf7ed`, 24px padding.
- **Result:** Sage wash `good`, 14px, large Caslon score.
- **Notice / pause:** `#f4e8d0` with a 3px gold left bar (incumbent; do not spread this bar to every card).

### Inputs / Fields
Study select: 8px, 12×16 padding, border `#687767`, fill `#fffdf8`, ink `#203d30`. Focus uses the global 3px gold ring.

### Navigation
Sidebar list, 17×15 padding, 6px rounding. Active: sage wash `#e1e5db`, bosque text, 4px bosque left edge (incumbent indicator — keep on this nav; do not reuse as a card accent). Mobile: horizontal scroll, no left edge. Due-count badge is a small sage pill.

### Answer
Full-width option row, 8px, 1px `#d6dacf`, 59px min-height, letter key in a 29px 5px-radius box. Hover: `#eff0e7` and bosque border. Selected: 2px bosque. Correct/incorrect washes `good` / `bad`.

### Level timeline
Vertical hairline, 48px serif discs. Current disc is barro with paper halo. Locked rows dim to 0.78. Names in Caslon 26px.

### Hero
Bosque rectangle, 12px, min-height 226px, white type, sol-eyebrow intro, clay pyramid on the right (~49% width). Cream CTA sits in the copy column.

## Do's and Don'ts

### Do:
- **Do** set page titles in Libre Caslon on warm paper, with bosque as the committed field.
- **Do** use barro only for “the person is here / this went wrong / this is earned.”
- **Do** keep study on a single sheet: quiz, flashcard, or topic chip — not a grid of identical icon cards.
- **Do** allow a soft table-sheet shadow on quiz, cream CTA, or flashcard.
- **Do** honor `prefers-reduced-motion` by dropping transitions.

### Don't:
- **Don't** dress the UI as gob.mx, SRE, or the Mexican flag.
- **Don't** import SaaS habits: dark dashboards, hero metrics, glassmorphism, gradient type, or an AI-purple accent.
- **Don't** put Caslon on long body copy or answers.
- **Don't** nest cards or give every panel its own drop shadow.
- **Don't** copy the 6px brand subtitle size onto any readable control.
- **Don't** invent a third chromatic brand color.
