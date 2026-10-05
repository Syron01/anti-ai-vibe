# Palette reference — building color with a soul

The palette is authored once, in Phase 1, and consumed forever. Nobody "picks colors" per page; pages consume semantic tokens.

## 1. Source harvest (never start from a hex)

Take the palette **from a real source**, in this priority order:

1. **Corporate brand** — if a brand book, existing tokens, or product UI exists, the palette already exists. Derive semantic roles from it; never invent a competing accent.
2. **The anchor's material** — for new systems, the anchor names a material world ("mudbrick + copper", "glazed tile, marble, brass"). Sample from photographs of that material world, not from color-picking sites.
3. **Documentary sources** — nature photography, film color grading (muted, desaturated — saturated color is unrealistic outside drama), regional architecture and craft.

Write the source down in the token file. A palette whose source can't be named in one sentence is the mean wearing a costume.

## 2. Construction

- **2 neutrals + 1 accent.** Distributed 60-30-10: ground (60%, lightest/most neutral), surface (30%, one step in), accent (10%, primary action only). Text counts as ink, not as a fourth color.
- **Build ramps in OKLCH** (or HCT): 8–12 steps of equal perceived lightness per hue family. Equal-L ramps are what make dark themes and status colors possible without eyeballing.
- **Desaturate by default.** Muted reads as real. Reserve full chroma for the accent — and the accent is one color.
- **Disambiguation test for warm palettes** (the "post-purple reflex" is a ready-made cream+amber template): a warm palette is authored only if (a) its source is named concretely, and (b) it carries at least one template-breaking tone (a cold base, a dark green or navy).

## 3. Assignment (semantic, named by function)

```
--p-...        primitives: raw sampled values, never consumed directly
--sys-color-bg        ground, 60%
--sys-color-surface   one step in from bg
--sys-color-text      ink — derived from the darkest sampled value, not pure black
--sys-color-accent    the ONE accent: primary action, active state, nothing else
--sys-color-ok / --warn / --danger   status colors, hue-consistent with the ramp
```

Name by function (`--sys-color-accent`), never by value (`gradient-start/gradient-end`). If two tokens have the same value but different functions, that's fine — values converge, functions don't.

## 4. Contrast (verified, not eyeballed)

Run `scripts/contrast-check.mjs` — it computes WCAG ratios with zero dependencies:

```bash
node scripts/contrast-check.mjs "#1B1B1F on #F3EFE7" "#7E5A1E on #F3EFE7" "#F3EFE7 on #24463B"
```

- Body text: ≥ 4.5:1 (AA) · Large text (≥24px or ≥19px bold): ≥ 3:1 · AAA target for long-form reading: 7:1.
- Check at minimum: text-on-bg, text-on-surface, text-on-accent (button labels), status-on-bg.
- Below the bar: darken the tone. Never fix contrast with transparency or text-shadow.
- Gradients under text fail structurally — don't put body text over them.

## 5. Dark theme derivation (a second semantic layer)

- Don't invert. Reduce chroma (~10–20%) and raise surfaces in steps: dark ground, slightly lighter surface, text near-white but not pure #FFF (halation).
- Never ship neon-on-black as a "brand": glow shadows, saturated gradients on dark. Dark mode is the same author with the lights dimmed.
- Re-run the contrast script — dark pairs fail differently than light pairs.

## 6. Corporate derivation cheat sheet

- Brand exists → semantic roles from brand constants; the accent IS the brand accent, already scarce.
- Multiple brands/tenants → one system layer, brand constants swap under it (`--brand-accent`); components consume `--sys-*` only.
- Legacy system mid-migration → new tokens alias old values first, then values migrate under the names. Names are the API; values are the deployment.
