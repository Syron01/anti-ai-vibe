#!/usr/bin/env node
/**
 * anti-ai-vibe — WCAG contrast checker (zero dependencies, Node >= 18)
 *
 * Usage:
 *   node contrast-check.mjs "#1B1B1F on #F5F1E8" "#7E5A1E on #F3EFE7"
 *   node contrast-check.mjs --json "#1B1B1F on #F5F1E8"   (machine output for CI)
 *
 * Each argument is "<fg> on <bg>" with 3- or 6-digit hex colors.
 * Exit code: 0 = all pairs pass AA, 1 = at least one fails.
 */

const args = process.argv.slice(2);
const asJson = args.includes("--json");
const pairs = args.filter((a) => a !== "--json");

if (pairs.length === 0) {
  console.error("usage: node contrast-check.mjs [--json] \"#fg on #bg\" ...");
  process.exit(1);
}

function parseHex(raw) {
  let h = raw.trim().replace(/^#/, "");
  if (h.length === 3) h = [...h].map((c) => c + c).join("");
  if (!/^[0-9a-fA-F]{6}$/.test(h)) throw new Error(`bad hex: ${raw}`);
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function luminance([r, g, b]) {
  const lin = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
}

function ratio(fg, bg) {
  const l1 = luminance(parseHex(fg));
  const l2 = luminance(parseHex(bg));
  const [hi, lo] = l1 >= l2 ? [l1, l2] : [l2, l1];
  return (hi + 0.05) / (lo + 0.05);
}

function verdicts(r) {
  return {
    "AA-normal": r >= 4.5,
    "AA-large": r >= 3,
    "AAA-normal": r >= 7,
  };
}

const results = [];
let allPass = true;

for (const p of pairs) {
  const m = p.match(/^\s*(#\w+)\s+on\s+(#\w+)\s*$/i);
  if (!m) throw new Error(`expected "<fg> on <bg>", got: ${p}`);
  const [, fg, bg] = m;
  const r = Math.round(ratio(fg, bg) * 100) / 100;
  const v = verdicts(r);
  if (!v["AA-normal"] && !v["AA-large"]) allPass = false;
  results.push({ fg, bg, ratio: r, ...v });
}

if (asJson) {
  console.log(JSON.stringify(results, null, 2));
} else {
  for (const r of results) {
    const status = r["AA-normal"] ? "AA" : r["AA-large"] ? "AA(large only)" : "FAIL";
    console.log(`${r.fg} on ${r.bg}  ${String(r.ratio).padEnd(5)}  ${status}${r["AAA-normal"] ? " +AAA" : ""}`);
  }
}

process.exit(allPass ? 0 : 1);
