# anti-ai-vibe

**Slop is design with no author.**

A rules file (a "skill") for AI coding agents that stops them from regressing to the statistical average of their training data — in UI, color, code, and 3D — and forces every output to have a visible author: a concrete anchor, a committed token system, and real content.

The rules are reverse-distilled from ~70 sources of web research and live HTML/CSS teardowns of six sites that feel human: [Scratch](https://scratch.mit.edu/ideas), [NASA Space Apps](https://www.spaceappschallenge.org/), [Türkiye Uzay Ajansı](https://tua.gov.tr/tr), [Mürekkep](https://www.murekkep.com.tr/), [Elele Eğitim](https://eleleegitim.org/), [Scratch Foundation](https://www.scratchfoundation.org/donate). What those six share is the whole thesis: few committed colors, typography with a stated reason, heroes that carry information instead of vibes, and decoration that is either absent or meaningful.

**Install** — copy [`SKILL.md`](SKILL.md) into your agent's skill directory:

```text
~/.agents/skills/anti-ai-vibe/SKILL.md
```

ZCode discovers it automatically; Claude Code reads the same file from `.claude/skills/`; any agent that takes markdown rules can paste it into the system prompt. The original Turkish version ships as [`SKILL.tr.md`](SKILL.tr.md) — models don't care which language they obey.

---

## Why the output looks like that

An unconstrained model returns the median of "modern web UI" scraped between 2019 and 2024 — and that median is indigo. Around 78% of indexed AI-built marketing sites ship the same indigo→violet gradient (`#6366F1` → `#8B5CF6`). The model isn't being lazy; it's being average by construction. So the tell list is precise and measurable:

| Domain | The reflex it produces |
|---|---|
| Color | indigo-purple gradients, neon-on-dark glow, `bg-clip-text` headlines, the emerald fallback |
| Type | Inter everywhere, Space Grotesk as the reflex escape, one italic serif word in a sans headline |
| Layout | badge chip + oversized headline + two CTAs + glow orb; three equal feature cards; bento everywhere |
| Surfaces | 16–24px radius on everything, reflex glassmorphism, Lucide Sparkles, emoji as icons |
| Copy | "Build faster. Ship smarter." — three-word triads, invented counters, logo soup |
| Code | 500 lines where 50 would do, try/catch theater, three date formats coexisting in one repo |
| 3D | plastic blobs, gradient-orb logos, uniform gloss, undirected detail piles, black-gray shadows |

The code column isn't aesthetics — it's measured: copy-pasted lines rose from 8.3% to 12.3% of all changed lines between 2021 and 2024 while refactoring frequency halved ([GitClear, 211M lines](https://www.gitclear.com)); "verbosity compensation" — output that compresses without information loss — is documented in [arXiv:2411.07858](https://arxiv.org/html/2411.07858v1). Each generation samples style fresh, with no memory of project convention, so the codebase drifts into three patterns for every job.

## The principle

**Taste is the product of constraint.** AI output defaults to unlimited options applied everywhere — more gradients, more try/catch, more lights, more detail. The authored artifact deletes options until only the idea remains. This is not a new idea; it's the oldest one in the literature: Rams (*less, but better*), McIlroy (*do one thing well*), Gabriel (*worse is better*), Ousterhout (*complexity is the enemy; deep modules, narrow interfaces*).

The skill therefore doesn't add taste. It adds a system, in three moves, before any design or code:

1. **An anchor** — one concrete sentence naming a place, era, or material: "Anatolian mudbrick + copper", "1960s Istanbul patisserie". "Modern" and "minimal" are banned words; they aren't anchors, they're the average wearing a blazer.
2. **A token file** — 2 neutrals + 1 accent with real hex values, one spacing scale, one radius, one motion policy. Written to the project root, then obeyed. In 3D work, the same file governs the scene: web page and coffee cup share a palette.
3. **Real content** — named people, real dates, real numbers. Placeholders ("Lorem", "Platform X", a fabricated "10,000+ customers") are treated as a design smell, not a starting point.

## What it enforces

- **Color** — 2 neutrals + 1 accent at 60-30-10, desaturated, taken from a real source (a photograph, a film grade, the region's own materials: stone, soil, sea, olive). The accent appears exactly once: the primary action. Warm palettes must pass a disambiguation test: name the source, and carry at least one tone that breaks the template.
- **UI** — flat honest surfaces, small radius, functional shadow; heroes that state a date, a manifesto, or a claim; one deliberately asymmetric section; empty/loading/error designed like everything else.
- **Code** — read the existing conventions and join them (never rewrite working code for taste); YAGNI; comments carry *why* only; one pattern per job (delete the second one); small public surface; no dependency without a verified reason; never ship a change you couldn't re-derive by hand.
- **3D** — silhouette first; the scene palette is the page palette; 2–3 lights with declared direction; real materials (roughness/metalness maps, soft terminators, ambient bounce) instead of uniform gloss; detail spent only where the eye goes; a real-time budget written up front; logos must survive 24px in flat color.

And one scan rule that closes the loop: **one tell is noise, ten tells is a signature.** If the output accumulates dozens of the banned defaults, it goes back — don't remove the purple, remove the average.

## A worked example (it actually ran)

Simulated request: *"Coffee shop landing page + a rotating 3D cup in Three.js."*

The unconstrained default writes itself: a cream+amber "tasteful" template, a gradient hero, three cards labeled Quality/Speed/Passion, a glossy plastic cup under a pile of lights.

With the skill, the anchor came first — *1960s Istanbul patisserie: glazed green tile, marble counter, brass trim* — and everything followed from it. The palette: `#F3EFE7` marble, `#24463B` tile green, `#7E5A1E` brass (darkened specifically to pass 4.5:1 contrast). The brass accent appears exactly twice: the CTA button and one brass spoon in the scene. The cup is glazed ceramic with a roughness map, two declared lights, ambient bounce tinting its shadow, a slightly asymmetric handle. The nav icon is the same cup as a flat green silhouette, tested at 24px. Same tokens, one author, page and scene.

That is the whole product: not a style, a constraint system that produces one.

## The gate

Before delivery, three questions:

1. Does this work **have an author**?
2. Does it **have a voice** — does its place and moment show?
3. **Would you notice if it disappeared?**

## Sources

Field guides and analyses: [signs-of-ai-design](https://github.com/febbhav/signs-of-ai-design) · [Why Your AI Keeps Building the Same Purple Gradient Website](https://prg.sh/ramblings/Why-Your-AI-Keeps-Building-the-Same-Purple-Gradient-Website) · [Spot the Slop (mania.design)](https://www.mania.design/blog/spot-the-slop-a-ui-designers-guide-to-fixing-ai-defaults/) · [AI slop design (designpixil)](https://designpixil.com/blog/ai-slop-design) · [The AI Purple Problem](https://dev.to/jaainil/ai-purple-problem-make-your-ui-unmistakable-3ono) · [Why AI images look fake (vofy.art)](https://www.vofy.art/blog/why-ai-images-look-fake-photorealistic-solutions) · [Why AI 3D models look bad (tripo3d)](https://www.tripo3d.ai) · [The handmade rebellion (designmagazine)](https://designmagazine.com.au/anti-ai-crafting-the-50-million-handmade-rebellion-reshaping-design-in-2026)

Code quality: [GitClear AI code quality reports](https://www.gitclear.com) · [arXiv:2411.07858 — verbosity](https://arxiv.org/html/2411.07858v1) · [Over-defensive AI code (rizz.dev)](https://rizz.dev) · Ousterhout, *A Philosophy of Software Design* · Gabriel, [*Worse Is Better*](https://en.wikiquote.org/wiki/Richard_P._Gabriel) · [Pike, *Simplicity is Complicated*](https://youtu.be/rFejpH_tAHM)

Color craft: [NN/g on color](https://www.nngroup.com/articles/color-enhance-design) · [the 60-30-10 rule](https://uxplanet.org/the-60-30-10-rule-a-foolproof-way-to-choose-colors-for-your-ui-design-d15625e56d25)

## License

[MIT](LICENSE)
