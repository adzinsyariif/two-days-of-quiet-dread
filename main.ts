// Two Days of Quiet Dread — make.fun entry.
// Writes one code-review comment to /output/entry.txt: a single line of
// at most 140 characters that approves a pull request while carrying
// quiet existential dread. Node 22, stdlib only, fully deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const CANDIDATES = [
  "LGTM — the code works, the tests pass, and none of us will ever truly understand why, so ship it.",
  "Approved. It works today, and today is all any of us are promised.",
  "LGTM. The diff is fine; the void it papers over remains, as always, out of scope.",
  "Approved — it compiles, the tests pass, and the heat death of the universe is not in this diff.",
  // Winner: explicit approval, dread drawn from the code itself (all code
  // becomes legacy), flat understatement, and a fresh twist on a proverb
  // instead of a stock line. Short enough to stay tight.
  "LGTM — clean diff, green tests, and the quiet knowledge that this too shall be legacy code.",
  "Approved. Every line is correct, which is the saddest thing I can say about any of us.",
];

const ENTRY = CANDIDATES[4];

// The gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters,
// not only white space, on a single line. Refuse to write anything else.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 140 ||
  ENTRY.includes("\n") ||
  ENTRY.trim().length === 0
) {
  throw new Error(`entry fails the gate: ${ENTRY.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
