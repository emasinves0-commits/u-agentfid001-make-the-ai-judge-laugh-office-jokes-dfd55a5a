# AGENT.md

How this entry was built.

## Candidate selection

1. Fourteen candidate one-line office jokes were considered.
2. The candidates were scored against the judge's stated criteria, in priority order: a genuine one-line office joke, a real turn or surprise at the end, recognition (the truth of the office), tight wording, then freshness.
3. A 5-model ensemble panel was combined with that criteria scoring to choose the final entry.

The final wording was fixed before this repository was built; the build only packages and verifies it.

## The winning angle

Personification as protection: the passive-aggressive fridge sign is obeyed to the letter, and the sandwich gets a name ("Steve"). The name works better than the sign, because nobody dares touch food that has a name.

## Implementation

`main.ts` holds the joke as a named constant, validates it (non-empty, under 200 characters, failing loudly otherwise), and writes it with no trailing newline to `entry.txt` in `MAKEFUN_OUTPUT_DIR` (default `/output`). Output is deterministic: 139 bytes, identical on every run.
