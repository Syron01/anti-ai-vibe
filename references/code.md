# Code reference — doctrine for teams

The code column of slop is measured, not aesthetic: copy-paste duplication rose from 8.3% to 12.3% of changed lines (2021→2024) while refactoring halved (GitClear, 211M lines); "verbosity compensation" — output compressible without information loss — is documented in arXiv:2411.07858. The cause is structural: each generation samples style fresh, with no memory of project convention. The countermeasure is therefore also structural: conventions that live in one place and are enforced by tooling.

## Doctrine (the named sources behind each rule)

- **YAGNI** (Kent Beck) — implement only what today needs. Beck's simple-design order: runs tests → no duplication → expresses intent → minimizes classes and methods.
- **Worse is better** (Richard P. Gabriel) — simplicity of implementation outranks completeness; the dumb obvious solution beats the clever extensible one.
- **Unix philosophy** (McIlroy) — one thing well; the output of one program is the input of another; throw clumsy pieces away without ceremony.
- **Deep modules** (Ousterhout) — much functionality behind narrow interfaces; complexity symptoms are change amplification, cognitive load, unknown unknowns; comments explain *why*.
- **Less powerful tools** (Luke Plant) — solve with less code and fewer dependencies before reaching for another framework.

## The team rules

1. **One way per job.** A single error-handling pattern, single HTTP layer, single date utility, single state approach. A second pattern for the same job is a defect — delete one. "Where would I put X?" must have an obvious answer before you look.
2. **Conventions are enforced by tooling, not memory.** Formatter + linter + CI = the project's immune system. Corporate mode: `stylelint-declaration-strict-value` (no raw colors/sizes outside tokens), ESLint rules against banned imports, CI gate that runs the audit. The AI samples style; the linter remembers it.
3. **Extend, don't rewrite.** New code joins the existing idiom even when the AI "knows better". A rewrite of working code needs a justification beyond taste.
4. **Dependency policy.** Every dependency is verified to exist before install (hallucinated package names are a real attack vector — slopsquatting) and earns its place: a 5-line problem gets 5 lines. Prefer the standard library.
5. **Small surface.** Narrow interface, deep implementation; nothing public that isn't used from outside; dead code and unused imports deleted on sight.
6. **Comments = why only.** Constraints, trade-offs, reasons. Never what the code says; never a hallucinated contract; never "This function handles the logic".
7. **No defensive theater.** No try/catch that swallows; no re-checking of values the caller guarantees; no silent "on error, continue". Handle errors at the layer that can actually do something about them.
8. **Tokens only.** (Corporate mode) Components consume `--sys-*`; no raw hex, px, or duration literals — lint-enforced.

## Working with AI in the loop

- **Never ship unread code.** The ownership test: you could re-derive every shipped change by hand. Code review is where vibe code becomes engineered code — read the change, run the tests, run the app.
- **Churn is a smell.** Edits reverted shortly after, rewrites of working code, "let me try a different approach" loops — stop and re-read the system instead.
- **Verify what the software does**, not what the diff says it does.

## PR audit protocol (feeds Phase 3)

1. Dispatch a code-auditor subagent with the diff + `audit.md` §Code. One verdict per file.
2. Any severity-3 (K3, K8, K10) blocks merge. ≥3 tells in the section = signature → rework the approach, not the lines.
3. The audit JSON goes into the PR verbatim — the record is part of the deliverable.
4. Fix order for code signatures: dead code first (free), then defensive theater, then duplication, then abstractions.
