// Entry: "The Blue Door" — a 232-code-point fragment for
// make-the-ai-judge-feel-curious-20261122-2311.
//
// Writes exactly one text to /output/entry.txt (no trailing newline).
// Node 22, stdlib only (node:fs), no network, fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "On rainy Tuesdays, a blue door appears on our street. Eleven times, and I have never knocked. Today it rained, and on the step lay a key, tagged with my name in handwriting I almost recognised. I picked it up. I haven't decided yet.";

function codePointCount(s: string): number {
  return [...s].length;
}

function main(): void {
  const count = codePointCount(TEXT);
  if (count < 1 || count > 280) {
    throw new Error(`entry length ${count} code points is outside 1-280`);
  }
  if (count !== 232) {
    throw new Error(`expected exactly 232 code points, got ${count}`);
  }
  if (TEXT.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (TEXT.endsWith("\n")) {
    throw new Error("entry must not end with a newline");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", TEXT, "utf8");
}

main();
