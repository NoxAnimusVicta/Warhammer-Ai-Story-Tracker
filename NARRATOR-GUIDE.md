# Malaspina — narrator handover

This is an ongoing, player-led Warhammer 40,000 campaign, not a completed story. The phone data-slate is the player's read-only reference. This guide is outside the fiction and is not displayed in the slate.

Research and invention: read [RESEARCH-PROGRESSION.md](RESEARCH-PROGRESSION.md) before any research scene or time skip. It controls cumulative research, shared technologies, production milestones and conditional Hunter-plasma estimates. The Research tab shows the existing research record and a concise collapsible summary of progression and shared Hunter technology, as requested in exchange 606. Detailed lore reasoning remains in the reference.

Revision 78 reconciles the overview through 19/01/0069, including the two-month Agency period and workshop correction. Subsequent out-of-character research, technology and presentation agreements remain in force; consult the transcript tail as well.

## Start here on a new account

1. Read this guide, [CURRENT-CONTINUITY.md](CURRENT-CONTINUITY.md) and [PHYSIOLOGY-REFERENCE.md](PHYSIOLOGY-REFERENCE.md) completely. The physiology reference controls sleep, stamina, injury response, psychic reserves and the mature Custodian comparison; older scene wording cannot override it.
2. Read [ECONOMIC-REFERENCE.md](ECONOMIC-REFERENCE.md) before quoting prices and [ESTATE-ACCOUNTS.md](ESTATE-ACCOUNTS.md) for current house accounts. Read [seed.json](seed.json), the current dossier overview, and [malaspina-world.txt](malaspina-world.txt), a dated predeparture planetary reference. Its character observations and census figures are historical; current scene and estimates come from CURRENT-CONTINUITY.md, world-current.json and national-current.json.
3. Read the relevant scenes and the latest exchanges in [story-transcript.md](story-transcript.md). It is an exact historical archive, including discarded proposals and corrections. Later accepted corrections override earlier wording. Do not interpret an old proposal as an enacted event.
4. Ask the player to attach the private narrator handover supplied with this edition if it is not already available. It contains concealed continuity and editable project sources. Do not invent missing secrets, reroll established hidden choices or claim to have read inaccessible files. Public GitHub alone deliberately does not contain the entire narrator record.
5. In that package, read `PRIVATE-START-HERE.md`, then the listed current notes. Inspect the actual transcript tail and publication status: this guide's revision is a checkpoint, not a substitute for later exchanges.
6. Resume only when the player asks to continue. Maintenance does not advance the player’s scene or choose actions for him. An authorised retrospective world review may resolve already elapsed NPC work and regional events; record those decisions, their dates and knowledge boundaries explicitly.

Suggested opening instruction for a new task:

> Continue this established campaign. Read NARRATOR-GUIDE.md and CURRENT-CONTINUITY.md from the repository, then PRIVATE-START-HERE.md in my attached private handover. Read the referenced current continuity and transcript before narrating. Preserve my agency, current holdings and all accepted retcons. Do not restart the story or invent missing exchanges. The phone slate is a read-only companion that you maintain and publish at milestones or when I request it.

## How to tell the story

Read [NPC dialogue and voice](DIALOGUE-GUIDE.md) before writing a scene. Use established individual voices and natural responses; check that comparisons and jokes make sense. The player's approved descriptive narration remains unchanged. The guide records the household and senior court voices, how to maintain other recurring NPCs, and the accepted correction to Veskan's sword remark.

- Describe concrete surroundings, machinery, people, gestures and consequences. Use vivid, varied prose and genuine dialogue fitting an industrial, courtly 40K setting. Avoid generic grimdark decoration and constant moral lectures.
- The player controls Galahad's major choices, thoughts and direction. Resolve what follows from his actions; never decide his loyalty, morality, ambitions, relationships or final destiny for him. Do not end the campaign without explicit instruction.
- NPCs have motives, knowledge, duties and limits. Kindness and affection are real where established. Resistance needs a reason; do not make every official obstructive or every successful influence absolute obedience.
- Extraordinary biology and intellect must remain extraordinary. Do not repeatedly impose ordinary human hunger, strength, vision or learning limits. Equally, distinguish retained knowledge, practical demonstrations, inference and omniscience.
- Use Python random dice for meaningful uncertainty, with relevant modifiers and stakes set before the roll. Record results privately. Do not roll for established facts, negate declared advantages through invented counters, or treat a failed roll as erasing learned knowledge. Player descriptions may establish facts; distinguish those from uncertain attempted outcomes through context.
- Generate fitting French/Italian-influenced names. Discard the first candidate, roll among alternatives and retain the selection. Do not reroll existing names. Bespoke player naming discussions are exempt when requested. Galahad and Orsival are already agreed.
- Time skips resolve the player's stated activity, opportunity, costs and practical consequences. They do not silently award unrelated skills, titles, equipment or political victories.
- Keep technical inventions fictional and high-level. Describe capabilities, limits, resource demands and industrial consequences without real weapon construction instructions.
- Keep hidden narrator explanations out of the visible slate. Local people describe psychic phenomena through the older arts; Galahad has not acquired offworld terminology merely because the player knows it.

Age maintenance: At planetfall (story Day 0), Galahad was approximately one local month old chronologically, while his accelerated development made him appear about five to six human years old. Chronological age is that starting month plus elapsed local story time; apparent age and bodily maturity never add lived years. No exact birthday or civil-calendar planetfall date is established. The current age label is a rounded estimate, not an exact age. Review it against elapsed time at each dated scene rather than copying the previous label. Do not invent an exact day count or convert local ageing through the offworld clock ratio. Use CALENDAR-REFERENCE.md and calendar.json.age_tracking.

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
3. Use `world-map.json` for atlas geometry and the preserved census; `living_world.py` derives `world-current.json` for the current displayed populations. Preserve stable IDs. `regional-map.json` is the historical measured survey: its original sites, routes and distances remain controlling. New settlement markers allocate residents from their group’s rural/unmapped return. Explicitly authorised coverage corrections, such as revision52’s omitted outer chains, require a separate audited baseline correction; never count those residents again.
4. Advance demography only for elapsed story time, using local years. Apply births/deaths, migration and exceptional losses once. Record prior totals and reconcile city/rural subsets. Captured people are not automatically dead.
5. Run `python build.py` from the editable project. It generates `dist/`. If editing the map reader, run `python sync_world_reader.py` first. The national comparison module is also embedded directly from national-register.js by build.py. Read the private maintenance note before editing other embedded reader code. Never rerun historical one-time conversion or world-generation scripts.
6. Run `python verify-documentation.py` and the current checks listed in AUDIT.md; historical revision-specific tests are not current release gates. Inspect the rendered result at approximately 430 × 932 pixels. Test map navigation, filtering and selected records. Check spelling, UTF-8 text, chronology, funds, hidden-data exposure and current lore. Update test expectations only for intentional changes; do not disable failing checks to force a pass.
7. Publish changed files from `dist/` through the signed-in GitHub website in the **Codex in-app browser (iab)**. The player explicitly prefers this to Chrome. Open the repository's Add file → Upload files page, use the supported file chooser, wait for every filename, enter a descriptive commit message, and commit to the intended branch. Story-related publication is already authorised; re-authentication may still require the player.
8. Verify the commit, successful GitHub Pages deployment and actual live website. A commit alone is not a deployed update. Compare the live release identifier and changed file contents with the tested build. Report a blocked upload honestly, without claiming completion.

Never upload `private/`, `PRIVATE-START-HERE.md`, concealed rolls, secret cohort records or the private handover ZIP. They are for direct transfer between the player's narrator sessions. The public guide contains operating instructions, not hidden campaign answers.

The PWA checks for a new edition on opening, returning to view, reconnecting and periodically while visible. A connection is needed to receive an update; the last received edition remains available offline. Preserve this read-only behaviour, the existing sigil assets and iPhone layout. Do not restore player editing, import/export controls or local character overrides.

## Canon and campaign extrapolation

Research uncertain lore before asserting it. Prefer original published material or official sources; label secondary summaries and unverified theories honestly. The perfected founders, detailed Malaspinan states and clocks are agreed campaign inventions designed to coexist with canon, not newly discovered canonical facts. Do not undo accepted campaign choices because they lack an explicit published counterpart.

Malaspina is an originally habitable, Terra-like colony curated by the Hunters as a game reserve. **Historical Death World descriptions are superseded.** The animal formerly called Vordrake is now **Vouressan**; it is the same animal and same recorded hunt. The exact archive retains old wording solely as history.

Read related passages together when assessing lore implications. Distinguish explicit facts, strong cumulative implications and adopted campaign explanations. Do not repeatedly rebut a narrower claim than the player made, dismiss supported inference merely because it is indirect, or quietly change accepted character potential. Consult the revision37 founder clarification before further power-scale discussion.

## Elapsed-year development

Read WORLD-YEAR68.md and world-year68.json. Revision 68 establishes dated background developments across all 43 polities, eight theatres and ongoing local institutions. Earlier unchanged-world statements are superseded. Cevrane’s authorised second pumping stage is operational; remaining extensions are not. Dorlac’s historical 60-lorrat receivable was relinquished for goodwill during the home visit; the current accounts record its resolution without a cash receipt. A meaningful time skip requires NPC and institutional outcomes even outside witnessed scenes, while preserving player agency, report delays and already completed travel. Current inventory movements apply once from preserved baselines; ordinary programme costs are already inside the economic model.

## Social conditions and app organisation

Read [SOCIAL-CONDITIONS.md](SOCIAL-CONDITIONS.md) and [DEVELOPMENT-REFERENCE.md](DEVELOPMENT-REFERENCE.md) before describing national welfare or advancing a year. Household-budgets-2 supersedes the old GDP/spending/technology provision proxy. Wages, work, own produce, taxes, essential prices and group weights now determine material living standards; inputs are provisional where direct evidence is absent. Political safeguards, security and fiscal continuity separately inform public sentiment. Preserve uncertainty and source dates. Changes to political/theatre evidence still require explicit review.

Every local 01/01 requires a complete development-reviews.json return for all 43 polities: wages/prices/employment, distribution/services, technology progress, losses/retention and reconciliation with the source accounts. Ordinary technological improvement continues without Galahad; record its outcomes and constraints rather than leaving every rating frozen. A forecast is not a completed invention. National life expectancy varies with local living conditions and is recalculated from the reviewed inputs. Use ordinary age-dependent human mortality, not unlimited lifespans; explicit Hunter intervention, psychic feats, newly invented or acquired xenos longevity treatments are exceptional recorded causes. Known health and actual exposure qualify age-related risk; they never erase it by default. Individual leadership reviews must record the age band, correctly bounded elapsed period, probability and outcome once. Deaths require an event and a fully described successor. Galahad's engineered physiology remains distinct.

Read development-baseline.json, development-reviews.json and current national records together. Keep dated inputs rather than manually editing headline indices. A new GDP estimate alone cannot award higher household income; repairs, education and state spending do not establish access until the delivery assumptions are reviewed. Run verify-development.py, verify-social608.py and verify-government.py alongside the current reader and accounting checks.

[APP-AUDIT.md](APP-AUDIT.md) gives the subject homes. Preserve unique facts and use [APP-RECORD-REFERENCE.md](APP-RECORD-REFERENCE.md) for the previous complete text. Do not restore full project histories to several tabs. The organisation work does not advance the narrative; the overview is reconciled through exchange 599; later enacted exchanges take precedence.

## National capacity returns

Read [CONFLICT-REGISTER.md](CONFLICT-REGISTER.md) and conflict-register.json before resolving geopolitical developments or a substantial time skip. Review active theatres at expedition leg transitions and substantial time skips, the complete register at least once per elapsed local month, and material incidents immediately. Preserve prior returns; share event IDs with demographic, economic, fiscal and transport consequences so each effect is applied once. The Cressault frontier is an armed truce with intermittent fire, not a full-scale current war. Existing expedition preparations remain valid under the baseline conditions; deliver material new route warnings through NPCs before the affected decision. No real-world clock advances conflicts.

Read national-current.json and world-current.json for current estimates, LIVING-WORLD-REFERENCE.md for their method, and national-register.json for the preserved numerical baseline. Its scope, units and qualifications are part of the record: annual output is not money in a treasury; reserves are additional trained people; sustainable field strength is a subset of standing forces. Divided geographic returns are not united armies. Technology uses technological ages and specific capability records, with understanding, manufacture and deployment recorded separately; no universal /5 technology score applies. Rare psychic talent has no fixed national quota.

When local story time advances, preserve a prior snapshot and revise production, population, revenues and capacity together. Apply extraordinary losses and investment explicitly. Equipment does not automatically grow at the population rate. No numerical comparison guarantees victory or grants Galahad precise intelligence about every formation. Run verify-national.py alongside the reader and navigation checks when these files change.

## Food and the Culling

Read food-cultures.json and purge-history.json alongside the world record. Use meals organically to convey class, circumstance, hospitality, scarcity or affection. Do not force food into every scene or assign player tastes. The Last Major Culling ended approximately 67 local years before the census of 27/08/0067 AC43. Present growth rates do not describe the entire recovery. Purges respond to developments and Hunter interests; no fixed countdown forces the next one. Distinguish killed, captured and displaced. No new loss or personal memory is assigned to an existing character by these historical notes.

Revision39 removes redundant local map additions and provides real northern/southern/western roads. Earlier revisions charted 897 settlements, then 899 after the two Ceralte ports. The current atlas has 970 settlements and 2,210 routes, including 134 sea segments; use TRANSPORT-REFERENCE.md for the connected shipping network and island administrations. Unvisited repetitive principal names have corrected aliases in the private handover; retain stable IDs and established story names. The old measured-route accordion is retired, but source measurements remain. Read private/map-maintenance.md before editing.

## Current checkpoint

**Later live continuation:** on the evening of 19/01/0069, Galahad returned to the estate near Serravonne and mounted his existing Vouressan-bone sword on the study wall. A larger replacement is an intention only. The revision-78 overview below records the earlier Auvrienne checkpoint; the transcript and private/checkpoint79-live.md control the later scene. The subsequent dialogue correction advances no time.

Current scene: 19/01/0069 AC43, Auvrienne. Galahad is Royal Advisor and founding Director of the VAA. His amended advisory instrument is signed and delivered, and relevant departmental notices have been issued. All six Order members arrived, accepted Agency work under personal loyalty to Galahad, received individual instruction and departed for their home societies on 19/01; they are not yet assumed to have arrived home. The isolated Crown headquarters site is under construction, with a 19/11/0069 completion deadline. No operational headquarters, finished underground railway or operating airstrip exists yet. The 14,000,000 capital ceiling is separate from the 6,000 opening Agency account. Personal cash 923; household 1,194 (148 reserved, 1,046 uncommitted). The workshop runs autonomously under Ordel and awaits the Margrave and Marshal's report and military production instructions; Galahad owes it no new task or personal funding. Read CURRENT-CONTINUITY.md, VAA-REFERENCE.md, commission-accounts.json and the latest exact transcript.

The private handover controls concealed characterisation, founder records and physiology calibration. Preserve player agency and practical uncertainty. Physical advantages constrain dice outcomes. No political coup, royal death or Hunter intervention is predetermined.

Apply PHYSIOLOGY-REFERENCE.md before resolving fatigue, injury or combat. Never derive Galahad’s sleep or stamina from ordinary Astartes merely because adapted Astartes systems are present. Seven hours per seven local days supports optimal form; mild deprivation may begin after six to twelve months without sleep. His exceptional reserves cover physical and psychic activity. Weeks or potentially months of sustained campaigning and repeated fighting fit his potential. Judge injury by actual functional damage, and distinguish finesse from depleted psychic reserves. At maturity, one typical Custodian is insufficient to reliably overcome his combined capabilities under comparable conditions. Potential indefinite wakefulness through psychic self-restoration remains developmental. Preserve the agreed scale without awarding unlearned techniques or future experience. No automatic collapse timers or routine daily fatigue penalties.

## Transport continuity

Use the current island and sea-passage references. The revised atlas clarifies existing infrastructure rather than enacting construction during the expedition preparations. New place names and claims are fixed; do not reroll them. Do not infer an operating service merely from a road crossing a railway, and do not treat a graph connection as a single-gauge through train.

## Estate visual continuity

Read ESTATE-REFERENCE.md and assets/estate-r48.jpg before narrating the estate. The player’s image establishes its current visual appearance, including house and courtyard, arcaded service/workshop building, walled gardens, fields, pasture, orchard, wooded slopes and wet lower ground. The existing 56-hectare land account, interior, household, funds and completed initial repairs remain controlling. Surrounding distant scenery is not automatically owned property. Preserve this dated image; future visuals should follow enacted changes.


## Current and future portraits

Read APPEARANCE-REFERENCE.md and assets/portrait-expedition-r50.jpg for Galahad's current expedition appearance. The earlier assets/portrait.png is his future national or military leadership appearance, to apply once he takes control of a nation or its military, not merely when he reaches adulthood. Preserve both images. Use the current checkpoint for age, clothing location and travel; approximately 3 m is the current mature height and the short white beard is a later addition; 2.59 m is historical.


## Integrated planning reminders

Raise foreseeable preparation needs and approaching deadlines through relevant NPCs and integrated scenes before a decision is needed: Savel or the bursar for funds and reports, Tessier for papers and appointments, port agents for sailings and seasonal notices. Do not bury essential warnings only in reference documents, wait for the player to discover them, or punish omission of routine competent preparation. Routine administration within the approved plan is delegated; material choices, new risks and changes of scope remain the player’s. Established seasonal planning is not retroactively forgotten. Unexpected disruptions must have an actual cause and timely notice where realistically available.

## Deception and knowledge

Record an NPC’s actual allegiance and motive separately from outward appearance, claims and each witness’s beliefs. Read concealed next-scene notes before narrating an encounter involving deceit. Player-supplied antagonist context prepares the narrator; it is not automatically character knowledge or an enacted outcome. Do not replace the agreed premise with an easier encounter or force the antagonist’s hoped-for consequences. Public attribution must follow evidence and events. Keep unrevealed plans private.

## Reference presentation

Retain consistent accessible dropdowns for substantial references, visible core state and map, and the established desktop/phone spacing and CSS arrows. Do not flatten sections or add navigation widgets during continuity updates. Historic figures need dates. Current modelled estimates must be clearly identified and reproducible from the unchanged baseline and calendar; they are not newly audited returns.

## Governments and annual leadership review

Read [GOVERNMENT-REGISTER.md](GOVERNMENT-REGISTER.md) and government-current.json before a government encounter or annual rollover. Every one of the 43 returns has institutions, bounded civil and military offices and individual biographies. Existing Veyrasse names, age ranges, succession and agreed characterisation control. The new register adds previously unspecified foreign figures without inventing meetings or changing national accounts.

Before crossing each local 01/01, review every tracked person for elapsed age, established health, actual danger, mandate expiry and succession. Record outcomes and source-linked changes in government-events.json; the builder rejects missing annual coverage. Never roll deaths during a build. Set justified probabilities before private rolls, account only for unreviewed elapsed days, preserve prior rolls, and do not force a death quota. Named acting/permanent successors need the same full biography immediately. Preserve departed people and record institutional/policy consequences separately. Read the full method before preparing a rollover. The 01/01/0069 review is recorded for all 140 ordinary human officeholders; all continue. Preserve the once-only results.

## Tyranid and cohort continuation agreement

Before developing Bile's assessment, an offworld journey or Tyranid contact, read [the accepted timing and family boundaries](COHORT-AND-FRAGMENT-OPTIONS.md#tyranid-timing-bile-and-remaining-on-malaspina). No invasion before the first meeting with Bile; later activation is optional. Preserve Galahad's commitment to remain while his parents live. An assessment is not automatic retrieval. Future visits and cohort relationships are opportunities, not completed events. Keep authorial planning out of the in-character slate and do not award planetary defence through personal battlefield power alone.

## Latest Agency and research continuity

Read VAA-REFERENCE.md and vaa-accounts.json. All six members have received differentiated instruction and are returning home after departure on 19/01/0069. Study and infiltration are current priorities; broader recruitment and active operations await the headquarters. Opening account: 1,460 spent, 4,540 undrawn. Separate headquarters: 14 million authorised, 1.8 million released, 1.36 million spent. Construction began 27/11/0068; completion deadline 19/11/0069. The aviation city remains deferred. Research, validation and production remain separate.

## Current maintenance guardrails

Ordel manages the autonomous rifle workshop. It awaits the Margrave and Marshal's report and production instructions, then produces according to military needs and requests. Crown and military administration handle the associated authorisation and funding; no new task or personal payroll support is required from Galahad. Use numeric AC43 dates and numbered local months, never Terran month names. See calendar.json for month lengths. The original transcript retains mistakes as history; the explicit correction and current records control. No new output or national conquest is inferred.
