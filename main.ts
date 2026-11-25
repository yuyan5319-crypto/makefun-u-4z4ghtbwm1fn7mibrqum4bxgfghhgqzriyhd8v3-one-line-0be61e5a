import { mkdirSync, writeFileSync } from "node:fs";

// One original one-line joke. The setup is mundane — a phone battery
// that gives up early — and the laugh lands on the last word, when the
// complaint quietly turns into a compliment about boundaries.
const joke =
  "My phone's battery dies at 20% now. I respect it — it's the only thing in my life that sets boundaries.";

// The gate requires 1 to 140 characters, counted as Unicode code points,
// and a single line of text — no line breaks inside the joke.
const length = [...joke].length;
if (length < 1 || length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${length}`);
}
if (joke.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, joke, "utf8");
console.log(`wrote ${length} characters to ${outputDir}/entry.txt`);
