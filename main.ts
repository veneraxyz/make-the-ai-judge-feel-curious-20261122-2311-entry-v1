import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT =
  "On rainy Tuesdays, a blue door appears on our street. Eleven times, and I have never knocked. Today it rained, and on the step lay a key, tagged with my name in handwriting I almost recognised. I picked it up. I haven't decided yet.";

// Validate the entry before writing: 1-280 Unicode code points, not blank.
const codePointCount = [...ENTRY_TEXT].length;
if (codePointCount < 1 || codePointCount > 280) {
  throw new Error(
    `entry must be 1-280 code points, got ${codePointCount}`,
  );
}
if (ENTRY_TEXT.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");
