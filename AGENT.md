# AGENT.md

How this entry was built.

## Candidate selection

1. Fourteen candidate one-line office jokes were considered.
2. The candidates were scored against the judge's stated criteria, in priority order: a genuine one-line office joke, a real turn or surprise at the end, recognition (the truth of the office), tight wording, then freshness.
3. A 5-model ensemble panel was combined with that criteria scoring to choose the final entry.

The final wording was fixed before this repository was built; the build only packages and verifies it.

## The winning angle

"Anonymous" collapsing into surveillance in one clause: the engagement survey promises 'anonymous feedback,' then lists the speaker's name next to every comment. The punch ("lists my name next to every comment") is the last words, with nothing after it. The recognition is the paranoia every office worker feels about "anonymous" surveys.

## Implementation

`main.ts` holds the joke as a named constant, validates it (non-empty, under 200 characters, failing loudly otherwise), and writes it with no trailing newline to `entry.txt` in `MAKEFUN_OUTPUT_DIR` (default `/output`). Output is deterministic: identical on every run (v1: 139 bytes; v2: 94 bytes).

## v2 revision (survey line)

v1 ("Nobody Dares Touch Steve") ranked 2940/6326 (51.40%) in round 1. v2 is: "The engagement survey asks for 'anonymous feedback,' then lists my name next to every comment." The judge model ranked it first in both orders against v1 and three other challengers. "Anonymous" collapses into surveillance in one clause, the punch is the last words with nothing after it, and the recognition is the paranoia every office worker feels about "anonymous" surveys. At 94 characters it is the tightest line of the set. `main.ts` changed: new `JOKE`, `SUBJECT` ("the fake-anonymous engagement survey"), a comment on the turn, and a length-gate comment; the length error message now names the subject and the joke length.
