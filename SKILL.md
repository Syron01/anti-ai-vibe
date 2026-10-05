---
name: anti-ai-vibe
description: Escape the AI-generated "vibe" aesthetic — use when choosing a UI or color palette, building websites/components, writing code, or creating 3D scenes and models. Triggers include "design", "color palette", "landing page", "build a site", "UI", "3D model", "Three.js", "Blender", starting a new project, and writing code. Apply whenever the user says "no AI vibe", "make it natural", "give it soul", "not generic". Goal output with a visible author — constrained and systematic — instead of the average-Tailwind-purple-gradient aesthetic.
---

# anti-ai-vibe: design with a visible author, code as a system

Single principle: **slop is design with no author.** AI regresses to the statistical mean of its training data (indigo gradients, Inter, rounded-2xl cards, glow orbs). Two things break you out of the mean: **a concrete anchor** and **constraints written before the work**. Taste is the product of constraint — unlimited options are never applied; options are deleted until only the idea remains.

## 0. Process — in every task, BEFORE design/code

1. **Pick an anchor** (one concrete sentence): "Anatolian mudbrick + copper", "1970s Scandinavian library", "old press ink". "Modern", "minimal", "professional" are FORBIDDEN — those are the mean, not an anchor.
2. **Write the token file** (project root, as design tokens / CSS variables) and obey it:
   ```
   --color-ground:  #F5F1E8   /* paper cream (60%) */
   --color-surface: #E7E0D2   /* sand (30%) */
   --color-accent:  #B4552D   /* roof tile (10% — primary action only) */
   --color-text:    #2B2620
   --font-heading:  <1 font, reason stated>
   --font-body:     <1 font>
   --space:         4 8 12 16 24 40 64   (one scale)
   --radius:        6px                  (one value)
   ```
3. **Use real content**, never placeholders ("Lorem", "Platform X", invented stats).
4. In 3D work the same token file governs: the palette is shared between the web page and the scene.

## 1. Color — natural, with a soul

- **2 neutrals + 1 accent**, distributed 60-30-10. More than that is chaos; real brand systems earn a fourth color.
- Take the palette **from a real source**: a nature photograph, a film color grade, the region's own materials (stone, soil, sea, olive, mudbrick). Desaturate (muted) — saturated color is unrealistic outside dramatic film.
- The accent lives in **one place**: the primary action (CTA/link). "Everything stands out" = nothing stands out.
- Keep contrast at or above WCAG AA; never put body text over a gradient.

**Banned defaults** (the reflex, not one color): indigo-purple gradients (#6366F1/#8B5CF6/#A855F7), neon + glow on near-black, `bg-clip-text` gradient headlines, the emerald #10B981 fallback, the teal-and-orange blockbuster grade, and the ready-made cream+amber "tasteful" template. Name colors by function (`--color-accent`), not `gradient-start/gradient-end`.

**Warm-palette disambiguation test**: cream/coffee tones aren't banned — selecting them *as a ready template* is. A warm palette counts as authored only if you can name its concrete source (which material/place/film) and it carries **at least one tone that breaks the template** (a cold base, a dark green or navy).

**Font tells**: Inter/Roboto/Poppins everywhere · Space Grotesk / Instrument Serif as the reflex "escape font" · one italic serif word inside a sans headline · flat hierarchy from one weight. Fonts are **derived from the anchor** (never justified after seeing the output); at most 2 families, with one named reason.

**Contrast procedure**: before delivery, measure two pairs — body text on ground, and text on accent. Below 4.5:1, darken the tone; never fix it with transparency.

## 2. UI — visual tells

Don't: the hero formula (badge chip + oversized headline + two CTAs + orb behind) · three equal feature cards · bento everywhere · 16–24px radius on everything · reflex glassmorphism (backdrop-blur) · Lucide Sparkles/Zap/Shield icons · emoji as icons · the same fade-up on everything · invented counters and logo soup · a single spacing rhythm · centering everything.

Do: **flat honest surfaces** (solid fill, small radius, functional shadow), heroes that **carry information** (a date, a manifesto, a concrete claim — not an empty vibe sentence), 1–2 fonts with typographic accent that has **a reason** (handwriting if the brand is "ink"; mono if the identity is technical), one deliberately asymmetric section, real photos / real names / real numbers, and empty–loading–error states treated as part of the design.

Reference: Mürekkep = #323232 + one red #c6073a, named team portraits. Scratch = system font + white/blue/orange, zero gradients. The shared vein: few colors + justified typography + real content + decoration that is either absent or meaningful.

**Motion policy** (written into the token file): one easing + one duration, only where it has a job (hover/focus/state transitions). The same fade-up on everything gets deleted. Constant idle animation is legitimate only when the object **is the content** (a 3D showcase piece) — never as page decoration.

## 3. Code — the most with the least

In an existing project: **read the current conventions first, join them** — don't impose your own style, don't rewrite working code (a rewrite needs justification, not taste).

New code:
- **YAGNI**: no abstraction, config, or "extensibility hook" today's task doesn't need. Single-use interface/factory/adapter = bloat. If the problem is 5 lines, don't install a package; every dependency is verified to exist and must earn its place.
- **No defensive noise**: try/catch that swallows, re-checking null the caller already guarantees, silent "on error, continue" fallbacks.
- **Comments = why only** (constraints, trade-offs, reasons). A comment restating what the code does gets deleted.
- **One system**: error handling, HTTP layer, date helper — **one way** per job. If a second pattern appears for the same job, delete one. A file's location has an obvious answer before you look.
- **Small surface**: narrow interface, deep implementation; nothing public that isn't used from outside. Dead code and unused imports get deleted.
- **Ownership test**: never ship a change you couldn't re-derive by hand. Don't write code you haven't read.

## 4. 3D

Don't: plastic blob / clay illustration · gradient-orb logos · uniform gloss on every surface · floating spheres · undirected detail piles · pure black-gray shadows.

Do:
1. **Silhouette first**: if it doesn't read as a black silhouette on a dark plane, no detail will save it. Big masses first, detail last.
2. **Take the palette from the token file** — 2 neutrals + 1 accent, same as the web page. Every color has a place.
3. **2–3 lights, direction declared in advance**: key + fill/rim. Lighting is composition, not an afterthought.
4. **Real materials**: a roughness/metalness map instead of uniform gloss; per-surface behavior; soft terminators on curved surfaces; ambient bounce tinting shadows; SSS where skin/wax demands it.
5. **Detail is an accent, not a default**: spend polygon/texture budget only where the eye goes.
6. **Micro imperfections**: perfect symmetry and smoothness are artificiality markers; natural asymmetry, light texture noise (camera grain, not painted overlay).
7. Logo/icon test: must read at 24px in flat color — gradient orbs collapse exactly there.
8. **Real-time budget** (Three.js/web): write the polygon and texture budget up front, limit shadow maps, pause rendering when offscreen, no per-frame object allocation/GC. Offline-render quality goals, real-time budget.

**Tailwind projects**: the token file goes into the theme config, and the default palette/radius classes (indigo/violet, rounded-2xl, shadow-lg) go unused — the convention lives in one place.

## 5. The gate before delivery

Scan rule: **"one match is noise, ten matches is a signature"** — if dozens of the banned tells appear in the output, the work goes back.

Three questions:
1. Does this work **have an author**? (anchor named, constraints single-sourced)
2. Does it **have a voice**? (does place and moment show — or is it anonymous, from nowhere and everywhere)
3. **Would you notice if it disappeared?**

If not three yeses: don't remove the purple — remove the average. Concretize, constrain, fill with the real thing.
