import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Sorry — I sent the wrong file with total confidence, which is the most on-brand thing I have ever done. The right one is attached. Probably.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR
  ? process.env.MAKEFUN_OUTPUT_DIR
  : "/output";

const lines = LINE.split("\n").filter((line) => line.trim().length > 0);
if (lines.length !== 1) {
  throw new Error(`entry must be exactly one non-blank line, got ${lines.length}`);
}
if (LINE.length < 1 || LINE.length > 159) {
  throw new Error(`entry must be 1-159 characters, got ${LINE.length}`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE + "\n", "utf8");
