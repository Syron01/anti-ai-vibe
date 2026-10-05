# Audit reference — full tell checklists

The scan rule: **one match is noise, ten matches is a signature.** Single tells get noted with severity 1; a category accumulating ≥3 tells (or any severity-3 item) is a signature and the category gets reworked, not spot-fixed.

Root cause to keep in mind while auditing: an unconstrained model returns the median of its training data. ~78% of indexed AI-built marketing sites ship the same indigo→violet gradient. The auditor's question is never "is this ugly?" — it is **"could anyone have made this, or does it have an author?"**

## Verdict schema

```json
{"target":"<file or section>","verdict":"pass|fail","tells":[{"rule":"C2","evidence":"hero button uses #6366F1→#8B5CF6 gradient","severity":3}]}
```

Severity: **1** = drift (tolerable once, watch for accumulation) · **2** = tell (fix before ship) · **3** = banned default (blocks ship).

---

## §Visual

### Color (C)
| ID | Rule | Sev |
|---|---|---|
| C1 | No indigo-purple gradients (#6366F1 / #8B5CF6 / #A855F7) as hero/button/background | 3 |
| C2 | No neon-on-near-black with glow (colored box-shadows, "Linear-core") | 3 |
| C3 | No `bg-clip-text` gradient headlines; no body text over gradients | 3 |
| C4 | No emerald #10B981 as the reflex accent when purple is banned | 2 |
| C5 | No teal-and-orange blockbuster grading as a default scheme | 2 |
| C6 | Palette = 2 neutrals + 1 accent, 60-30-10; no timid even-weight pastels, no six unrelated hues | 2 |
| C7 | Accent used only on the primary action — not on headings, borders, and badges simultaneously | 2 |
| C8 | Warm palettes pass the disambiguation test: named concrete source + one template-breaking tone | 2 |
| C9 | Colors named semantically (`--sys-color-accent`), never `gradient-start/gradient-end` | 1 |
| C10 | All contrast pairs ≥ AA (4.5:1 body, 3:1 large) — verified by script, not by eye | 3 |

### Typography (T)
| ID | Rule | Sev |
|---|---|---|
| T1 | No Inter/Roboto/Poppins as the whole identity | 2 |
| T2 | No Space Grotesk / Instrument Serif as the reflex "escape font" | 2 |
| T3 | No single italic serif word inside a sans headline | 2 |
| T4 | ≤2 families, derived from the anchor, reason stated in the token file | 2 |
| T5 | Hierarchy exists (weights/sizes differ meaningfully); not one weight, flat | 1 |
| T6 | No crushed tracking on body text; all-caps only for true labels, not headlines | 1 |
| T7 | No monospace as decoration on non-terminal products | 2 |

### Layout & structure (L)
| ID | Rule | Sev |
|---|---|---|
| L1 | No hero formula: badge chip ("New" ✨) + oversized headline + two CTAs + glow orb | 3 |
| L2 | No three equal-width feature cards with stacked icons | 3 |
| L3 | No bento grid as the default escape; if used, it carries real content asymmetry | 2 |
| L4 | No cookie-cutter page order: hero → logo wall → features → testimonials → stats → pricing → FAQ | 2 |
| L5 | No fabricated "Trusted by" logo soup or invented animated counters | 3 |
| L6 | Spacing has rhythm (the token scale), not one repeated value | 2 |
| L7 | Not everything dead-centered; one section deliberately asymmetric | 1 |
| L8 | No fake terminal hero (macOS traffic lights) on non-dev products | 2 |
| L9 | Heroes carry information (date, claim, manifesto) — not a vibe sentence | 2 |

### Surfaces, effects, motion (S)
| ID | Rule | Sev |
|---|---|---|
| S1 | No reflex glassmorphism (backdrop-blur) where no layering problem exists | 2 |
| S2 | No 16–24px radius on everything; one radius value (small), from tokens | 2 |
| S3 | No gradient orbs/blobs floating behind heroes; no painted-on uniform grain | 2 |
| S4 | No ghost-card default (hairline border + diffuse shadow) on every surface | 1 |
| S5 | No cards inside cards; no colored left-border accent strips as decoration | 1 |
| S6 | Motion: one easing + one duration, only where it has a job; no uniform fade-up-everything, no bounce/elastic | 2 |
| S7 | Empty/loading/error states designed; not spinner-only, not never-designed | 2 |

### Icons & imagery (I)
| ID | Rule | Sev |
|---|---|---|
| I1 | No Lucide five (Sparkles, Zap, Shield, Check, BarChart3) as feature icons | 2 |
| I2 | No emoji as icons or feature bullets | 2 |
| I3 | No plastic 3D blob / clay illustration packs; no corporate-memphis pastiche | 2 |
| I4 | No stock "diverse team laughing at laptop"; real photos of real people/work | 2 |
| I5 | Imagery is documentary or brand-true — continuous with the actual product/brand | 1 |
| I6 | No gradient-orb logo marks; the mark survives 24px in flat color | 3 |

### Copy (W)
| ID | Rule | Sev |
|---|---|---|
| W1 | No weightless headlines ("Build faster. Ship smarter.", "Scale without limits") | 3 |
| W2 | No three-word triads ("Fast. Simple. Powerful.") | 2 |
| W3 | No buzzword density (streamline, supercharge, unlock, seamless, elevate) | 2 |
| W4 | No "It's not just X. It's Y." pivots; no em-dash sprinkling as a style tic | 1 |
| W5 | No fabricated stats; every number is real and sourced | 3 |
| W6 | No placeholders anywhere in a ship candidate ("Lorem", "Platform X", "20XX") | 3 |

## §Code

Severity rubric per finding; verdict per file touched.

| ID | Rule | Sev |
|---|---|---|
| K1 | No speculative abstraction: single-use interface/factory/adapter, "extensibility hooks" nothing uses | 2 |
| K2 | Verbosity compensation: the change could be compressed without information loss | 2 |
| K3 | No defensive theater: try/catch that swallows, re-checks of guaranteed values, silent fallbacks on error paths | 3 |
| K4 | Comments carry why only (constraints, trade-offs); no restating-the-code comments, no hallucinated docstrings | 2 |
| K5 | One way per job: single error pattern, single HTTP layer, single date utility; delete the second pattern | 2 |
| K6 | No style drift: the diff joins existing conventions; working code not rewritten for taste | 2 |
| K7 | Small surface: nothing public that isn't used from outside; dead code and unused imports deleted | 1 |
| K8 | Every dependency verified to exist (anti-slopsquatting) and earning its place — a 5-line problem gets 5 lines, not a package | 3 |
| K9 | No hardcoded color/space literals in components — tokens only (corporate mode) | 2 |
| K10 | Ownership test: the author (human or AI) can re-derive every shipped change by hand; no unread code | 3 |

## §3D

| ID | Rule | Sev |
|---|---|---|
| D1 | No plastic blob / clay objects, floating spheres, gradient orbs as set dressing | 2 |
| D2 | No uniform gloss — per-surface roughness/metalness; soft terminators on curves; ambient bounce in shadows (no pure black-gray) | 2 |
| D3 | Silhouette first: the hero object reads as a black silhouette before any detail | 2 |
| D4 | 2–3 lights, direction declared; no pile of generic lights | 2 |
| D5 | Scene palette = page palette (shared tokens); every color has a place | 2 |
| D6 | Detail spent only where the eye goes; no undirected detail piles | 1 |
| D7 | Micro imperfection present (asymmetry, camera grain) — not perfect symmetry + over-smoothing | 1 |
| D8 | Real-time budget written and respected (poly/texture/shadow limits, offscreen pause, no per-frame allocation) | 2 |

## Remediation order (highest impact first)

1. Kill the gradient hero → flat ground + one accent.
2. Break the type monoculture (derive the pairing from the anchor).
3. Replace illustrations and placeholder copy with real product screenshots/data/names — the single highest-impact step.
4. Rewrite headlines as claims, not categories.
5. Make one section deliberately asymmetric; fix the spacing scale.
6. Design the skipped states (empty, loading, error).
