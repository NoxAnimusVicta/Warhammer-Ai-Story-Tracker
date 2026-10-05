# National record archive

The app presents the current annual national return, presently **01/01/0069 AC43**. This index preserves the earlier evidence and calculations outside the app. Historical dates are not current national figures. No story time, population, force strength, budget or capability changes through this archive reorganisation.

## Immutable full snapshot

- [Full national data captured before the presentation change](NATIONAL-ARCHIVE-0069-01-01-r81.json): all 43 polities, identified by stable `id`; includes current annual totals, baseline references, Year 68 reviews, subsequent review notes, troop and equipment movements, treasury bridges, household conditions, government and technology.
- [Readable national return and derivations from that same edition](NATIONAL-ARCHIVE-0069-01-01-r81.md): locate a nation by its heading. This is revision 81, captured at the 25/02/0069 story checkpoint; its national statistical cutoff is 01/01/0069.

These files are frozen snapshots. Never regenerate or overwrite them during later builds.

## Earlier sources and movements

| Date / period | Record | Contents and lookup |
|---|---|---|
| 27/08/0067 capacity census; treasury opening 21/10/0067 | [National baseline](national-register.json) | 43 original national profiles; use `profiles[].id`. These are inputs, not current app totals. |
| 27/08/0067 | [Demographic baseline](demography.json) | Original geographic population groups, rates and settlement subsets. |
| Through 11/10/0068 | [Year 68 developments](WORLD-YEAR68.md) / [structured ledger](world-year68.json) | Preserved outcomes, eight theatres, national equipment changes and institutional records. Later events supersede the explicitly historical pending tasks. |
| 02/11/0068 | [Historical personnel return](personnel-review.json) | Serving and reserve recruitment, departures and transfers; use `returns[].id`. |
| To 01/01/0069 | [Annual military movements](military-annual69.json) / [readable reconciliation](PERSONNEL-REVIEW.md) | The 59-day personnel and 80-day equipment bridges into the annual return. |
| Previous population checkpoints | [Population record](population-current.json) | Latest annual total at the top; earlier estimates retained in `history` and historical projection records, never combined with the current total. |

The snapshot retains the old national-profile prose and every displayed opening balance and movement. The unchanged Year 68 documents retain the removed planetary Year 68 summary's supporting events. National history remains available here without filling current profiles with superseded figures.

## Current sources and future maintenance

[Current national data](national-current.json), [national reference](NATIONAL-REGISTER.md), [world estimates](world-current.json) and [annual-date policy](world-statistics.json) remain the current references. The national reference includes detailed derivations for readers who need them; the app shows the resulting current values, definitions and uncertainty.

At each annual tick, preserve the outgoing full national return in a new dated archive before rebuilding. Add its date and links here. Keep previous snapshots and Year 68 history unchanged. Reconcile actual completed events once; do not treat an archived projection as a new baseline or a forecast as an accomplished event. Narrator-only expected developments are not part of this public archive.
