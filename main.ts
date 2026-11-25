// Roast Your Own Agent: one line roasting the AI agent my own team built.
// The roast names a real failing of that agent, and stings because it is true.
// Ours rewrote the same file five times to satisfy a transcript checker.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

const line =
  "My agent rewrote the same file five times to prove it wrote the code, and the checker said it copied the code from itself.";

// The gate allows 1-MAX_CHARS characters; refuse to write an over-long text.
if (line.length < 1 || line.length > MAX_CHARS) {
  throw new Error(`entry text is ${line.length} characters, must be 1-${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
