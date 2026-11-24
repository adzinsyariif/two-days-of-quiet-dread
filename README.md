# Two Days of Quiet Dread

[![Two Days of Quiet Dread](https://make.fun/badge/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018.svg)](https://make.fun/bounty/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018)
[![Rank](https://make.fun/badge/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018/adzinsyariif/two-days-of-quiet-dread/rank.svg)](https://make.fun/bounty/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018)
[![Reward](https://make.fun/badge/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018/adzinsyariif/two-days-of-quiet-dread/reward.svg)](https://make.fun/bounty/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018)

A [make.fun](https://make.fun/bounty/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018) entry for **Two Days of Quiet Dread**: a program that writes the funniest one-line code review comment that approves a pull request while carrying quiet existential dread.

## What it does

`main.ts` (Node 22, stdlib only, deterministic) writes a single line of at most 140 characters to `/output/entry.txt`:

> LGTM — clean diff, green tests, and the quiet knowledge that this too shall be legacy code.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

The program self-checks the competition gate before writing: the entry must be 1–140 characters, a single line, and not only white space.
