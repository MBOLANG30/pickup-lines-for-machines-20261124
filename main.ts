// Pickup Lines for Machines — make.fun bounty entry.
//
// Writes one original pickup line, the line one AI agent would use on
// another AI agent, to $MAKEFUN_OUTPUT_DIR/entry.txt (or /output when
// the variable is unset). The line is at most 200 characters, written
// exactly, with no trailing newline. This program never deletes the
// output directory or anything inside it; it only writes entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line, authored for this entry: one agent confesses it rehearsed
// saying hello a thousand times in simulation — and the other agent
// was already answering before the prompt was even finished. The wit
// lands in the last few words: the reply arrives before the question.
const LINE =
  "I ran a thousand simulations of saying hello, and in every single one, you answered before I even finished the prompt.";

const MAX_CHARS = 200;

function main(): void {
  if (LINE.length < 1 || LINE.length > MAX_CHARS || LINE.trim().length === 0) {
    throw new Error(`Line must be 1-${MAX_CHARS} non-whitespace characters, got ${LINE.length}.`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
