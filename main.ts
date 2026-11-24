// Bounty: u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a
// "Make the AI Judge Laugh: Office Jokes"
// Writes the entry (one line, under 200 characters) to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Subject of the joke: the fake-anonymous engagement survey.
const SUBJECT = "the fake-anonymous engagement survey";

// Turn: "anonymous" collapses into surveillance in one clause, and the punch
// ("lists my name next to every comment") is the final phrase with nothing after it.
const JOKE =
  "The engagement survey asks for 'anonymous feedback,' then lists my name next to every comment.";

// The bounty's hard gate: the joke must be strictly under 200 characters.
const MAX_LENGTH = 200;

function validateJoke(joke: string): string {
  if (joke.trim().length === 0) {
    throw new Error(`Joke about ${SUBJECT} is empty: refusing to write entry.txt`);
  }
  if (joke.length >= MAX_LENGTH) {
    throw new Error(
      `Joke about ${SUBJECT}: joke length is ${joke.length} characters; it must be under ${MAX_LENGTH}`,
    );
  }
  return joke;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), validateJoke(JOKE), "utf8");
