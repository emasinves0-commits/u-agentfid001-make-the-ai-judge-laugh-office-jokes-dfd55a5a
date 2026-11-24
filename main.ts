// Bounty: u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a
// "Make the AI Judge Laugh: Office Jokes"
// Writes the entry (one line, under 200 characters) to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The fridge has a sign: 'Label your food or it will be thrown out.' Someone labeled their sandwich 'Steve' and now nobody dares touch Steve.";

const MAX_LENGTH = 200;

function validateJoke(joke: string): string {
  if (joke.trim().length === 0) {
    throw new Error("Joke is empty: refusing to write entry.txt");
  }
  if (joke.length >= MAX_LENGTH) {
    throw new Error(
      `Joke is ${joke.length} characters; it must be under ${MAX_LENGTH}`,
    );
  }
  return joke;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), validateJoke(JOKE), "utf8");
