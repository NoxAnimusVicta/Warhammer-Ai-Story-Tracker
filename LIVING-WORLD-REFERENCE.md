# Malaspina — living-world estimates

**Annual statistical snapshot: 01/01/0069 AC43. Live narrative: 25/02/0069 AC43.** The current scene is Galahad supervising the headquarters site after his estate visit and woodland research. This maintenance advances no further time. Estimates are modelled returns, not newly received enumerations or audited national cash accounts.

## Revenue, receipts and money held

**Own-source public revenue** is tax, customs, fees and net public-enterprise income raised within a geographic return. **Total public receipts** add transfers received from other governments. A colonial subsidy therefore increases the colony's receipts, but not its own-source revenue. The parent records the matching expenditure. These transfers cancel when consolidating the planet; they create no additional planetary output.

Borrowing is financing, not revenue or receipts. Liquid reserves and outstanding debt are stocks at a date. Output is annual economic value added, not government income. Defence is already included in total expenditure; its subcategories must not be added a second time. Interest is expenditure; principal repayment is financing.

## Sources and dates

| Record | Basis | Current presentation |
|---|---|---|
| National and settlement population | Census 27/08/0067; 490 elapsed local days | All 43 disjoint geographic returns and all 970 settlements at 01/01/0069 |
| Output and ordinary production | Capacity baseline 27/08/0067; 490 days | Current constant-price annual run-rate using the recorded national output trend |
| Opening treasury stocks | 21/10/0067; 435 days | Estimated debt and reserves with an explicit opening-to-current financing bridge |
| Current public budget | Existing policy and shares | Annual run-rate at 01/01/0069; separate from elapsed cash movement |
| Military inventory and technology | Preserved capacity return plus dated Year 68 review | Explicit deliveries, repair returns and withdrawals; named capabilities and deployment states, without a universal technology rating |
| Prices and wages | Year 67 reference bands | Reviewed at 01/01/0069; unchanged time indices, regional adjustments still apply |
| Court ages and tenure | 21/10/0067 biographical return | Ranges after 435 days, because exact birthdays and anniversaries are unknown |

`demography.json`, `world-map.json` and `national-register.json` preserve the original dated baselines. `calendar.json` supplies story time. The build derives `world-current.json` and `national-current.json` through `living_world.py`. The map, settlement descriptions, national comparisons, rankings and regional population tables all use these current estimates. The downloadable NATIONAL-REGISTER.md and SETTLEMENT-REGISTER.md use the same calculation.

The longer malaspina-world.txt remains an explicitly dated predeparture reference. Old transcript entries and previous projections remain historical records; their original numbers are not rewritten.

`world-continuity-updates.json` records dated replacements for story-sensitive atlas descriptions. Serravonne and Auvrienne now reflect the completed expedition, the delivered estate possessions, former Collegium employment and accepted technical commission. The Year 68 review additionally supplies dated local notes for named affected settlements and a development record for every polity. The current atlas applies these layers without rewriting the historical survey.

## Population method and reconciliation

The corrected census contains **1,223,820,000** people. Current projection over **490 days** is **1,229,486,253**, an increase of **5,666,253**. Complete local years separately round births and deaths; partial periods apply the dated net trend. The historical 05/11/0068 and 12/11/0068 snapshots remain 1,228,835,572 and 1,228,916,908. The 01/01/0069 vital-rate review retains the latest gross birth/death/migration assumptions for all 43 returns, applying boundaries prospectively rather than backdating a new rate.

Each geographic group's current total is apportioned between its recorded settlements and remaining rural/uncharted residents in their baseline proportions. Integer largest-remainder allocation keeps every group exact. No unrecorded urbanisation, local migration boom or exceptional casualty event is invented. Settlements inherit their census group's trend; they are subsets, not additional population. Annual headcount changes are recomputed from current population rather than left at the old base.

The [05/11 vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md) supersedes the old birth/death assumptions for current and future returns. It retains the existing net growth scenarios while fitting gross births/deaths to the national mortality model using an explicit stable-age approximation. This is a model calibration, not independent evidence for fertility or stable age structure. Infant deaths are included once within total deaths. demographic-reviews.json stores dated complete returns; future projections apply them only after their effective dates. The historical 434-day population checkpoint is preserved. Annual reviews must reconsider fertility, mortality, age structure and migration together rather than force the same growth.

Cressault remains a disputed subset within Veyrasse, not a forty-fourth independent return. Colonial residents remain in their separate geographic returns, not counted again in the parent homeland. The estimates do not adjudicate territorial claims. Rounded map headings and exact tables represent the same values at different display precision.

## Economy and production

For elapsed local years t, the current real-output estimate is baseline output × (1 + recorded annual output trend / 100)^t. This allows contraction where the recorded trend is negative. Values remain in constant Year 67 purchasing-power lorrat-equivalents; this is not an exchange rate or an inflation assumption.

In the absence of sector-specific returns, steel and food/fuel production retain their baseline economic shares and follow this output factor. Fuel demand follows the same factor; food demand follows population at the baseline per-person consumption level. Coverage ratios and output per person are then recalculated. These are neutral planning estimates, not proof of individual new factories, acreage or technological discoveries. Replace them when a specific accepted return supplies better evidence.

Own-source public revenue and non-interest domestic spending use the same real-output factor at unchanged policy. Matched intergovernmental transfers remain at their existing amounts until an agreement changes them. Interest uses estimated outstanding debt at the recorded effective rate. Current annual receipts, spending, balance, defence allocation and financing plan reconcile after rounding. Military personnel, equipment inventories, ratings and readiness do not grow automatically with spending or population.

## Treasury bridge

The separate 435-day interval starts at the actual opening-stock date, 21/10/0067. The preserved annual financing plan is apportioned by 435/365 to estimate borrowing, principal repayment, reserve accumulation and reserve drawdown during that interval. Opening debt plus estimated borrowing minus estimated principal payments gives current debt. Opening liquid reserves plus estimated accumulation minus drawdown gives current reserves. Each profile exposes these opening figures and flows.

This intentionally simple unchanged-plan bridge does not pretend to know intra-year timing, revised appropriations or audited receipts. The forward annual budget is a separate current run-rate. Its financing plan retains the previous deficit/surplus financing mix where applicable, caps reserve drawdown and debt retirement at the available stocks, and reconciles to its budget balance. It has not already been booked into current stocks.

Routine national education, administration and defence envelopes already include ordinary institutional operations. The settled expedition accounts are not charged again to the national estimate. The enacted pilot programme is recorded separately: an allocated existing works, an 18,000 ceiling and 195 completed rifles. Its ordinary expenses sit within Veyrasse’s defence envelope, not a second national charge or output bonus. The carrier is still unbuilt. The 187-rifle consignment is now with Desmaret’s company (160 issued, 27 reserve), not an increase to national personnel totals; the five approved household rifles are separate from state inventory.

## Military personnel correction

[Personnel reconciliation](PERSONNEL-REVIEW.md) now closes at 01/01/0069. The preserved personnel-review.json remains the 02/11 return; military-annual69.json bridges its remaining 59 days and the 80 days since the equipment review. Each national ledger records trained entrants, active/reserve transfers, departures, eligibility losses and serviceable equipment movements. Established national programmes supply the neutral rates; categories without expansion evidence use balanced maintenance turnover. These are uncertain campaign estimates, not exact casualty rolls or population-driven recruitment. Existing expenditure and mortality include ordinary flows once. Field capacity retains the constrained share of serving strength. No automatic new rifle batch or mobilisation is granted.

## Other living records and future updates

Revision 68 resolves the elapsed year in world-year68.json and WORLD-YEAR68.md: 43 individual polity reviews, eight theatre developments, local project and NPC progress, and a separately reconciled merchant receivable. The data layer applies equipment movements once from opening counts. The current conflict return preserves its prior snapshots. Traditional schools report increasing first manifestations; the private reference reconciles broad stock and flow scenarios without treating them as a public census. Ordinary national programme costs, routine attrition and local raid mortality are already within the projected budget, output and mortality envelopes. No supplementary national charge, exceptional demographic deduction or generic price multiplier is added. Current cash is 549 personal, 1,678 household and zero expedition. Dorlac’s former receivable is extinguished for goodwill. These actual accounts are separate from modelled national returns.

At each substantial story-time advance, resolve background events and update live local records privately. Public world statistics stay at the last 01/01 annual snapshot until the next tick; at that tick reconcile completed outcomes and regenerate every statistical surface from preserved baselines and accepted movements. Never compound today's derived estimate onto itself. Preserve snapshots. An accepted exceptional event needs an occurrence date, affected groups and markets, and one shared event ID before adding casualties, migration, spending, infrastructure changes or price shocks. Captured and displaced people are not automatically dead. Do not charge ordinary mortality or existing warfare a second time. Newly established actual returns supersede projections through a documented reconciliation, not silent replacement.

Run the demographic, national, fiscal, calendar and living-world checks together. The current estimates must agree across all 970 settlement records, 43 national profiles, regional totals, comparisons and downloads; financial allocations and transfers must conserve their totals. Rebuilding twice at the same story date must produce identical figures.

## Background development is part of the update

A long time skip requires outcomes for ongoing institutions and NPC work, not merely new dates on old returns. The player has authorised retrospective Year 68 developments within existing story boundaries. These are explicitly introduced campaign decisions, not events recovered from earlier prose. world_year.py applies the ledger to the preserved national and geographic inputs; build.py derives the current conflict publication from the historical source. Existing expenditures and growth estimates encompass these ordinary programmes rather than adding them again. Material exceptional consequences need their own reconciliation. Character knowledge still depends on observation or delivery.


## Current interval review — 25/02/0069

The 11/10 expedition-year developments remain historical. All 43 polities have a separate 01/01/0069 review of household conditions, mortality, technology and demographic assumptions. These cover the short interval since their last assessment; they do not award another full year of progress. All 140 recorded ordinary human officeholders were reviewed with the preserved once-only outcomes; all continue. No new invention, life extension, general war, territorial transfer or price shock is enacted. Eight conflict classifications remain in force, without implying the absence of routine local incidents.

Veyrasse's new Agency headquarters is an exceptional capital programme: **14 million authorised, 2.8 million released and 2.1 million spent** by this date. The live treasury reconciliation would recognise the **2.1 million** cumulative expense once. The published opening-year snapshot instead uses **0.889 million** estimated through 01/01, apportioned from mobilisation to the first 19/01 cumulative return, with a broad 0–1.36 million uncertainty because year-end vouchers are not itemised. This estimate creates no new transaction and is replaced, not added, when a later cumulative return is used. Releasing money to the restricted project account is an internal transfer, not another expense; **700,000 remains public cash**. This dated capital movement is additional to the ordinary unchanged-plan treasury bridge. The ordinary annual budget run-rate is not silently raised by fourteen million; future draws and construction spending need subsequent dated returns. No new borrowing is established.

The rifle workshop remains autonomous under Ordel pending Crown/military report and production instructions; no new task or personal funding from Galahad is required. Its completed pilot output, House delivery and payroll are recorded in commission-accounts.json within ordinary defence expenditure. The aviation city remains deferred. The six Order members have trained and departed homeward; the headquarters is still unfinished. These specific outcomes do not automatically change national technology, force totals or output trends.


## Latest enacted work and outstanding returns

Read VAA-REFERENCE.md and vaa-accounts.json. Six trained members departed homeward on 19/01; individual return confirmations have not yet been narrated and must be resolved against travel time before another substantial skip, not left indefinitely in transit. Study and discreet infiltration remain their remit. Opening expenditure is 1,460 against the original 6,000; its three-month period has elapsed and the remaining 4,540 is not a newly renewed operating allocation. Capital is separate: 14 million authorised, 2.8 million released, 2.1 million spent, 700,000 restricted cash. Telephone operational 04/02; headquarters still under construction, due 19/11/0069. Forecast savings are 180,000 avoided future cost, with 120,000 reassigned to training provision and 60,000 extra forecast headroom; these are not cash receipts. Roughly two weeks of working float, not a changed deadline. Carrier research and aviation-city construction remain deferred.

Estate sword retained on the study wall; private woodland research is documented in PHYSIOLOGY-REFERENCE.md. Personal 549; household 1,678. The rifle pilot costs remain a dated 19/01 return, with subsequent Crown payroll separately estimated at 1,260. Corva and Veskan’s investment review remains explicitly unresolved; maintenance has not invented a backdated purchase. The annual 01/01 review remains preserved; no second annual mortality roll or full-year increment is applied.


## Annual publication rule

world-statistics.json defines the frozen 01/01/0069 cutoff. annual_clock.py supplies that date to statistical generators without changing calendar.json or the live scene. The build refuses to advance into a new year until a matching annual return is prepared. Year 68 files remain unchanged. At 01/01/0070 publish completed Year 69 developments and a reconciled opening Year 70 snapshot; expected developments are not public outcomes.
