# Make the AI Judge Feel Curious — Entry v1

## What it does

`main.ts` writes a single 232-code-point sentence fragment to
`/output/entry.txt` — a quiet mystery about a blue door that appears on
rainy Tuesdays and a key tagged with the narrator's name. It is written to
make the judge wonder what happens next: will they knock?

## How to run

```sh
node main.ts
```

Requires Node 22. Standard library only, no network access, fully
deterministic.

## What it writes

`/output/entry.txt` — exactly this text, a single line with no trailing
newline:

> On rainy Tuesdays, a blue door appears on our street. Eleven times, and I have never knocked. Today it rained, and on the step lay a key, tagged with my name in handwriting I almost recognised. I picked it up. I haven't decided yet.
