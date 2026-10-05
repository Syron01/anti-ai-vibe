---
name: anti-ai-vibe
description: Escape the AI-generated "vibe" aesthetic and run design/code/3D as a governed system — use when choosing a UI or color palette, building websites/components, writing or reviewing code, creating 3D scenes, working on corporate or multi-team projects, integrating with an existing design system, or auditing a PR/page/scene for AI-slop tells. Triggers include "design", "color palette", "landing page", "build a site", "UI", "3D model", "Three.js", "Blender", "design system", "corporate", "brand", "audit", "PR review", starting a new project, and writing code. Orchestrates subagent auditors (visual, code, contrast) and enforces WCAG, token governance, and a ship gate. Apply whenever the user says "no AI vibe", "make it natural", "give it soul", "not generic".
---

# anti-ai-vibe: authorship as a system

Single principle: **slop is design with no author.** AI regresses to the statistical mean of its training data (indigo gradients, Inter, rounded-2xl cards, glow orbs; 500 lines where 50 would do). The way out is not "more creativity" — it is **a concrete anchor + constraints written before the work + an audit that blocks the mean from shipping**. Taste is the product of constraint: options are deleted until only the idea remains.

In a corporate context this becomes governance: the design system already exists (or you author it once), tokens are namespaced and enforced by tooling, conventions live in one place, and every UI-bearing change passes the gate before merge.

## Workflow — four phases

### Phase 0 — Discover (never invent on top of an existing system)

Before writing any color, component, or code:

1. **Harvest the existing system.** If the project or company has a design system, brand book, token file, Tailwind theme, UI kit, or Figma source — find and read it first (dispatch an Explore-type subagent for large repos: "find design tokens, theme configs, brand assets, style guides, lint configs governing UI"). Report back: palette, type, spacing, radius, motion, naming conventions, framework, CI checks.
2. **Decide the mode:**
   - *System exists* → your job is **enforcement and gap-filling inside it**. Do NOT re-theme, do NOT introduce a second palette, do NOT "modernize" the brand. The anchor is the company's own heritage and material.
   - *No system* → run the **anchor workshop**: propose 3 concrete anchors (a place, era, or material — "Anatolian mudbrick + copper", "1960s Istanbul patisserie", "old press ink"; NEVER "modern", "minimal", "professional" — those are the mean, not an anchor). Let the user pick or correct, then author the system in Phase 1.
3. **Deliverable of Phase 0**: a one-page system sheet (anchor in one sentence, tokens, type pairing with reason, motion policy), committed to the repo and referenced from then on.

### Phase 1 — Author the system (the token file)

Write the token file once (see `assets/design-tokens.example.css`), then obey it:

- **Semantic, three layers**: primitives (`--p-*`) → semantic system tokens (`--sys-*`: bg, surface, text, accent, space, radius, motion) → component tokens only when a real component needs one.
- **2 neutrals + 1 accent**, distributed 60-30-10. The accent appears exactly once: the primary action.
- **Dark mode is a second semantic layer** (reduced chroma, raised surfaces, AA contrast) — never neon-on-black with glow.
- **Corporate namespacing**: `--brand-*` for brand constants, `--sys-*` for the system; components consume semantic names only, never raw hex.
- **Type**: at most 2 families, derived from the anchor, reason named in the file. Motion policy: one easing + one duration, only where it has a job.
- Full construction procedure (sources, OKLCH ramps, disambiguation, contrast): read `references/palette.md` when picking or extending colors.

### Phase 2 — Build

**UI.** Flat honest surfaces (solid fill, small radius, functional shadow). Heroes carry information — a date, a manifesto, a concrete claim. One deliberately asymmetric section. Real photos, real names, real numbers; placeholders are a design smell. Empty/loading/error are part of the design. Don't: hero formula (badge chip + oversized headline + two CTAs + orb), three equal feature cards, bento everywhere, glassmorphism reflex, Lucide Sparkles/Zap, emoji icons, fade-up on everything, centering everything.

**Code.** Read the existing conventions and join them — never rewrite working code for taste (a rewrite needs justification). YAGNI: no abstraction, config, or hook today's task doesn't need. No defensive noise (swallowing try/catch, re-checking guaranteed values, silent fallbacks). Comments carry *why* only. **One way per job**: error handling, HTTP layer, date helper — if a second pattern appears, delete one. Small public surface; dependencies verified to exist and earning their place. Never ship a change you couldn't re-derive by hand. Full review checklist and CI enforcement: `references/code.md`.

**3D.** The scene palette is the page palette (same token file). Silhouette first; 2–3 lights with declared direction; real materials (roughness/metalness maps, soft terminators, ambient bounce); detail spent only where the eye goes; real-time budget written up front; logos survive 24px flat. Full rules: `references/3d.md`.

### Phase 3 — Audit (the gate) — subagent fan-out

Run on every UI-bearing PR, every new page/scene, and any "looks done" moment. Do not audit by vibes; fan out parallel auditor subagents (Agent tool), each given the relevant reference file and returning machine-readable verdicts:

1. **visual-auditor** — reads rendered screenshots of the page/component (render to PNG first) against `references/audit.md` §Visual. Verdict per section.
2. **code-auditor** — reads the diff against `references/audit.md` §Code. One verdict per file touched.
3. **contrast-checker** — runs `scripts/contrast-check.mjs` on the token pairs and any rendered text pairs; fails below AA.

Each auditor returns:

```json
{"target":"<file or section>","verdict":"pass|fail","tells":[{"rule":"<rule id>","evidence":"<what was seen, where>","severity":1}]}
```

**Synthesis rules:**
- Any severity-3 fail (banned default shipped: indigo gradient hero, placeholder copy, swallow-catch on error path, gradient-orb logo) → block, fix, re-audit.
- ≥3 tells in one category = a signature (one match is noise, ten matches is a signature) → rework that category, not spot fixes.
- Remediation order: kill the gradient hero → flat ground + one accent → break the type monoculture → replace placeholders with real content → fix the spacing scale → design the skipped states.
- Pass on all three → ship. Record the audit in the PR (the JSON lines, verbatim).

## Corporate defaults (when nothing else is specified)

- Assume a multi-team codebase: conventions are enforced by tooling (lint/formatter/CI), not memory — a strict lint config is the project's immune system.
- No hardcoded color/space/radius literals in components; tokens are the only source.
- i18n-safe: no text baked into images for headlines, no ASCII art, real localized content — not untranslated placeholder.
- Decisions live in the system sheet in the repo; the sheet is small enough that a new hire reads it in five minutes.

## Reference map (read on demand)

- `references/audit.md` — full tell checklists (color, type, layout, surfaces, icons/imagery, copy, code, 3D) with severities, scoring, and the verdict schema.
- `references/palette.md` — palette construction: source harvest, OKLCH ramps, 60-30-10 assignment, warm-palette disambiguation test, dark-theme derivation, naming.
- `references/code.md` — code doctrine for teams: conventions, dependency policy, review checklist, CI enforcement, the AI-workflow ownership rules.
- `references/3d.md` — 3D pipeline rules, material checklist, real-time budgets.
- `scripts/contrast-check.mjs` — zero-dependency WCAG ratio checker: `node contrast-check.mjs "#1B1B1F on #F5F1E8" "#7E5A1E on #F3EFE7"`.
- `assets/design-tokens.example.css` — a complete commented token sheet to copy and adapt.
