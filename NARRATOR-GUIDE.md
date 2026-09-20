# Malaspina — narrator handover

This is an ongoing, player-led Warhammer 40,000 campaign, not a completed story. The phone data-slate is the player's read-only reference. This guide is outside the fiction and is not displayed in the slate.

## Start here on a new account

1. Read this guide and [CURRENT-CONTINUITY.md](CURRENT-CONTINUITY.md) completely.
2. Read [ECONOMIC-REFERENCE.md](ECONOMIC-REFERENCE.md) before quoting prices and [ESTATE-ACCOUNTS.md](ESTATE-ACCOUNTS.md) for current house accounts. Read [seed.json](seed.json), the current dossier overview, and [malaspina-world.txt](malaspina-world.txt), the active planetary record.
3. Read the relevant scenes and the latest exchanges in [story-transcript.md](story-transcript.md). It is an exact historical archive, including discarded proposals and corrections. Later accepted corrections override earlier wording. Do not interpret an old proposal as an enacted event.
4. Ask the player to attach the private narrator handover supplied with this edition if it is not already available. It contains concealed continuity and editable project sources. Do not invent missing secrets, reroll established hidden choices or claim to have read inaccessible files. Public GitHub alone deliberately does not contain the entire narrator record.
5. In that package, read `PRIVATE-START-HERE.md`, then the listed current notes. Inspect the actual transcript tail and publication status: this guide's revision is a checkpoint, not a substitute for later exchanges.
6. Resume only when the player asks to continue. A maintenance request never advances the scene, spends money or completes an objective.

Suggested opening instruction for a new task:

> Continue this established campaign. Read NARRATOR-GUIDE.md and CURRENT-CONTINUITY.md from the repository, then PRIVATE-START-HERE.md in my attached private handover. Read the referenced current continuity and transcript before narrating. Preserve my agency, current holdings and all accepted retcons. Do not restart the story or invent missing exchanges. The phone slate is a read-only companion that you maintain and publish at milestones or when I request it.

## How to tell the story

- Describe concrete surroundings, machinery, people, gestures and consequences. Use vivid, varied prose and genuine dialogue fitting an industrial, courtly 40K setting. Avoid generic grimdark decoration and constant moral lectures.
- The player controls Galahad's major choices, thoughts and direction. Resolve what follows from his actions; never decide his loyalty, morality, ambitions, relationships or final destiny for him. Do not end the campaign without explicit instruction.
- NPCs have motives, knowledge, duties and limits. Kindness and affection are real where established. Resistance needs a reason; do not make every official obstructive or every successful influence absolute obedience.
- Extraordinary biology and intellect must remain extraordinary. Do not repeatedly impose ordinary human hunger, strength, vision or learning limits. Equally, distinguish retained knowledge, practical demonstrations, inference and omniscience.
- Use Python random dice for meaningful uncertainty, with relevant modifiers and stakes set before the roll. Record results privately. Do not roll for established facts, negate declared advantages through invented counters, or treat a failed roll as erasing learned knowledge. Player descriptions may establish facts; distinguish those from uncertain attempted outcomes through context.
- Generate fitting French/Italian-influenced names. Discard the first candidate, roll among alternatives and retain the selection. Do not reroll existing names. Bespoke player naming discussions are exempt when requested. Galahad and Orsival are already agreed.
- Time skips resolve the player's stated activity, opportunity, costs and practical consequences. They do not silently award unrelated skills, titles, equipment or political victories.
- Keep technical inventions fictional and high-level. Describe capabilities, limits, resource demands and industrial consequences without real weapon construction instructions.
- Keep hidden narrator explanations out of the visible slate. Local people describe psychic phenomena through the older arts; Galahad has not acquired offworld terminology merely because the player knows it.

Every story response ends with these fields, kept current:

```
Name:
Age:
Date:
Reputation:
Weapons (Equipped):
Armor/Clothing (Equipped):
Gear/Inventory:
Currency:
```

## Record every exchange, every turn

Append each player message and the complete assistant reply to `story-transcript.md` during the turn, including parenthetical instructions and the character block. Label out-of-character discussions and progress notes distinctly. Write the exact final narrative before sending that same text to the player. Summaries never replace transcript text.

At the start of a turn, inspect the archive tail and backfill any visible missing exchanges. Never fabricate an unavailable assistant reply. Record a retrieval gap explicitly and obtain the source when needed. Historical spelling, discarded lore and earlier mistakes remain verbatim; put corrections in current continuity instead of rewriting the archive. Concealed naming plans and unrevealed narrator material belong in the private record.

`seed.json` is a milestone overview and can lag behind the live transcript. Reconcile both before continuing. Update the private checkpoint at meaningful changes even when publication is not requested.

## Maintaining and publishing the slate

The private handover contains the editable project; GitHub's root holds the generated publication. Do not attempt to maintain the large generated HTML as the only source.

1. Read every file you will edit in full. Check current instructions and the latest checkpoint. Preserve unrelated files and original reference material.
2. Update the character overview, chronology, world data and active notes as relevant. Increment `seed.json.revision`. No passage of real time advances story dates or population.
3. Use `world-map.json` for the current atlas. Preserve stable IDs. `regional-map.json` is the historical measured survey: its original sites, routes and distances remain controlling. New settlements allocate residents from existing rural/unmapped returns, never add them again to planetary totals.
4. Advance demography only for elapsed story time, using local years. Apply births/deaths, migration and exceptional losses once. Record prior totals and reconcile city/rural subsets. Captured people are not automatically dead.
5. Run `python build.py` from the editable project. It generates `dist/`. If editing the map reader, run `python sync_world_reader.py` first. Read the private maintenance note before editing other embedded reader code. Never rerun historical one-time conversion or world-generation scripts.
6. Run the current verification checks and inspect the rendered result at approximately 430 × 932 pixels. Test map navigation, filtering and selected records. Check spelling, UTF-8 text, chronology, funds, hidden-data exposure and current lore. Update test expectations only for intentional changes; do not disable failing checks to force a pass.
7. Publish changed files from `dist/` through the signed-in GitHub website in the **Codex in-app browser (iab)**. The player explicitly prefers this to Chrome. Open the repository's Add file → Upload files page, use the supported file chooser, wait for every filename, enter a descriptive commit message, and commit to the intended branch. Story-related publication is already authorised; re-authentication may still require the player.
8. Verify the commit, successful GitHub Pages deployment and actual live website. A commit alone is not a deployed update. Compare the live release identifier and changed file contents with the tested build. Report a blocked upload honestly, without claiming completion.

Never upload `private/`, `PRIVATE-START-HERE.md`, concealed rolls, secret cohort records or the private handover ZIP. They are for direct transfer between the player's narrator sessions. The public guide contains operating instructions, not hidden campaign answers.

The PWA checks for a new edition on opening, returning to view, reconnecting and periodically while visible. A connection is needed to receive an update; the last received edition remains available offline. Preserve this read-only behaviour, the existing sigil assets and iPhone layout. Do not restore player editing, import/export controls or local character overrides.

## Canon and campaign extrapolation

Research uncertain lore before asserting it. Prefer original published material or official sources; label secondary summaries and unverified theories honestly. The perfected founders, detailed Malaspinan states and clocks are agreed campaign inventions designed to coexist with canon, not newly discovered canonical facts. Do not undo accepted campaign choices because they lack an explicit published counterpart.

Malaspina is an originally habitable, Earth-like colony curated by the Hunters as a game reserve. **Historical Death World descriptions are superseded.** The animal formerly called Vordrake is now **Vouressan**; it is the same animal and same recorded hunt. The exact archive retains old wording solely as history.

Read related passages together when assessing lore implications. Distinguish explicit facts, strong cumulative implications and adopted campaign explanations. Do not repeatedly rebut a narrower claim than the player made, dismiss supported inference merely because it is indirect, or quietly change accepted character potential. Consult the revision37 founder clarification before further power-scale discussion.

## National capacity returns

Read national-register.json for the current numerical baseline. Its scope, units and qualifications are part of the record: annual output is not money in a treasury; reserves are additional trained people; sustainable field strength is a subset of standing forces. Divided geographic returns are not united armies. Technology ratings measure industrial capability in separate domains, not an overall combat score. Rare psychic talent has no fixed national quota.

When local story time advances, preserve a prior snapshot and revise production, population, revenues and capacity together. Apply extraordinary losses and investment explicitly. Equipment does not automatically grow at the population rate. No numerical comparison guarantees victory or grants Galahad precise intelligence about every formation. Run verify-national.py alongside the reader and navigation checks when these files change.

## Food and the Culling

Read food-cultures.json and purge-history.json alongside the world record. Use meals organically to convey class, circumstance, hospitality, scarcity or affection. Do not force food into every scene or assign player tastes. The Long Culling ended approximately 67 local years before the original census epoch. Present growth rates do not describe the entire recovery. Purges respond to developments and Hunter interests; no fixed countdown forces the next one. Distinguish killed, captured and displaced. No new loss or personal memory is assigned to an existing character by these historical notes.

Revision39 removes redundant local map additions and provides real northern/southern/western roads. Revision 39 contained 897 settlements and 1,928 routes; revision 45 adds two Ceralte ports and their sea passages, for 899 settlements and 1,930 routes. Unvisited repetitive principal names have corrected aliases in the private handover; retain stable IDs and established story names. The old measured-route accordion is retired, but source measurements remain. Read private/map-maintenance.md before editing.

## Revision 45 checkpoint

The current scene is the evening before expedition departure at the Auvrienne Collegium, twenty local days after approval (transcript443). Personal cash is 378, with 264 earmarked and 114 uncommitted; expedition cash is 5,490 after 510 paid, including 2,100 reserved for scholarly salaries and 3,390 for other expedition costs. Opening passage via Serravonne to Dalmor and Ceralte permissions are arranged; later foreign requests remain pending. Veskan continues recovering at the estate; Corva retains household authority. Read CURRENT-CONTINUITY.md and the latest exact exchanges.

Galahad is approximately two local years and three months old. Full bodily maturity is expected around age three, at 3 metres (about 9 ft 10 in); his last measured height remains 2.59 m. Preserve that distinction and do not force linear growth. Ceralte’s new ports Bellavara and Montelisse occupy existing islands and each has a sea passage to Dalmor. Their 46,000 residents are a subset of the established national census. This documentation adds no travel or story time.

The private handover controls concealed characterisation, founder records and physiology calibration. Preserve player agency and practical uncertainty. Physical advantages constrain dice outcomes. No political coup, royal death or Hunter intervention is predetermined.

Physiology distinguishes unaided performance from psychic augmentation. Food/water/sleep ranges are conditional campaign estimates, not canonical universal figures or automatic death timers. Never conflate suspended survival with active endurance, armour recycling with unaided metabolism, or skin injury with incapacitation.
