# Malaspina — living-world estimates

**Current estimate: 11/10/0068 AC43.** This maintenance update advances no story time. The palace scene remains at expedition day 355, evening. Estimates describe the world at that date; they are not newly received census reports or audited treasury accounts.

## Revenue, receipts and money held

**Own-source public revenue** is tax, customs, fees and net public-enterprise income raised within a geographic return. **Total public receipts** add transfers received from other governments. A colonial subsidy therefore increases the colony's receipts, but not its own-source revenue. The parent records the matching expenditure. These transfers cancel when consolidating the planet; they create no additional planetary output.

Borrowing is financing, not revenue or receipts. Liquid reserves and outstanding debt are stocks at a date. Output is annual economic value added, not government income. Defence is already included in total expenditure; its subcategories must not be added a second time. Interest is expenditure; principal repayment is financing.

## Sources and dates

| Record | Basis | Current presentation |
|---|---|---|
| National and settlement population | Census 27/08/0067; 410 elapsed local days | All 43 disjoint geographic returns and all 970 settlements at 11/10/0068 |
| Output and ordinary production | Capacity baseline 27/08/0067; 410 days | Current constant-price annual run-rate using the recorded national output trend |
| Opening treasury stocks | 21/10/0067; 355 days | Estimated debt and reserves with an explicit opening-to-current financing bridge |
| Current public budget | Existing policy and shares | Annual run-rate at 11/10/0068; separate from elapsed cash movement |
| Military inventory and technology | Preserved capacity return plus dated Year 68 review | Explicit deliveries, repair returns and withdrawals; individual industrial changes beneath stable broad ratings |
| Prices and wages | Year 67 reference bands | Reviewed at 11/10/0068; unchanged time indices, regional adjustments still apply |
| Court ages and tenure | 21/10/0067 biographical return | Ranges after 355 days, because exact birthdays and anniversaries are unknown |

`demography.json`, `world-map.json` and `national-register.json` preserve the original dated baselines. `calendar.json` supplies story time. The build derives `world-current.json` and `national-current.json` through `living_world.py`. The map, settlement descriptions, national comparisons, rankings and regional population tables all use these current estimates. The downloadable NATIONAL-REGISTER.md and SETTLEMENT-REGISTER.md use the same calculation.

The longer malaspina-world.txt remains an explicitly dated predeparture reference. Old transcript entries and previous projections remain historical records; their original numbers are not rewritten.

`world-continuity-updates.json` records dated replacements for story-sensitive atlas descriptions. Serravonne and Auvrienne now reflect the completed expedition, current Collegium quarters and accepted technical commission. The Year 68 review additionally supplies dated local notes for named affected settlements and a development record for every polity. The current atlas applies these layers without rewriting the historical survey.

## Population method and reconciliation

The corrected census contains **1,223,820,000** people. For each complete local year, the established demographic calculation separately rounds births and deaths, then adds recorded net migration. The remaining 45 days use the resulting population and a proportional net annual trend. The 410-day estimate is **1,228,556,988**, an increase of **4,736,988**.

Each geographic group's current total is apportioned between its recorded settlements and remaining rural/uncharted residents in their baseline proportions. Integer largest-remainder allocation keeps every group exact. No unrecorded urbanisation, local migration boom or exceptional casualty event is invented. Settlements inherit their census group's trend; they are subsets, not additional population. Annual headcount changes are recomputed from current population rather than left at the old base.

Cressault remains a disputed subset within Veyrasse, not a forty-fourth independent return. Colonial residents remain in their separate geographic returns, not counted again in the parent homeland. The estimates do not adjudicate territorial claims. Rounded map headings and exact tables represent the same values at different display precision.

## Economy and production

For elapsed local years t, the current real-output estimate is baseline output × (1 + recorded annual output trend / 100)^t. This allows contraction where the recorded trend is negative. Values remain in constant Year 67 purchasing-power lorrat-equivalents; this is not an exchange rate or an inflation assumption.

In the absence of sector-specific returns, steel and food/fuel production retain their baseline economic shares and follow this output factor. Fuel demand follows the same factor; food demand follows population at the baseline per-person consumption level. Coverage ratios and output per person are then recalculated. These are neutral planning estimates, not proof of individual new factories, acreage or technological discoveries. Replace them when a specific accepted return supplies better evidence.

Own-source public revenue and non-interest domestic spending use the same real-output factor at unchanged policy. Matched intergovernmental transfers remain at their existing amounts until an agreement changes them. Interest uses estimated outstanding debt at the recorded effective rate. Current annual receipts, spending, balance, defence allocation and financing plan reconcile after rounding. Military personnel, equipment inventories, ratings and readiness do not grow automatically with spending or population.

## Treasury bridge

The separate 355-day interval starts at the actual opening-stock date, 21/10/0067. The preserved annual financing plan is apportioned by 355/365 to estimate borrowing, principal repayment, reserve accumulation and reserve drawdown during that interval. Opening debt plus estimated borrowing minus estimated principal payments gives current debt. Opening liquid reserves plus estimated accumulation minus drawdown gives current reserves. Each profile exposes these opening figures and flows.

This intentionally simple unchanged-plan bridge does not pretend to know intra-year timing, revised appropriations or audited receipts. The forward annual budget is a separate current run-rate. Its financing plan retains the previous deficit/surplus financing mix where applicable, caps reserve drawdown and debt retirement at the available stocks, and reconciles to its budget balance. It has not already been booked into current stocks.

Routine national education, administration and defence envelopes already include ordinary institutional operations. The settled expedition accounts are not charged again to the national estimate. No royal production grant, new salary, completed rifle factory or carrier construction is inferred from the accepted technical commission.

## Other living records and future updates

Revision 68 resolves the elapsed year in world-year68.json and WORLD-YEAR68.md: 43 individual polity reviews, eight theatre developments, local project and NPC progress, and a separately reconciled merchant receivable. The data layer applies equipment movements once from opening counts. The current conflict return preserves its prior snapshots. Traditional schools report increasing first manifestations; the private reference reconciles broad stock and flow scenarios without treating them as a public census. Ordinary national programme costs, routine attrition and local raid mortality are already within the projected budget, output and mortality envelopes. No supplementary national charge, exceptional demographic deduction or generic price multiplier is added. Galahad’s cash remains 1,197, estate 314 and expedition zero; Dorlac separately holds 60 due but unpaid.

At each substantial story-time advance, regenerate every current surface from the preserved baseline and shared date. Never compound today's derived estimate onto itself. Preserve snapshots. An accepted exceptional event needs an occurrence date, affected groups and markets, and one shared event ID before adding casualties, migration, spending, infrastructure changes or price shocks. Captured and displaced people are not automatically dead. Do not charge ordinary mortality or existing warfare a second time. Newly established actual returns supersede projections through a documented reconciliation, not silent replacement.

Run the demographic, national, fiscal, calendar and living-world checks together. The current estimates must agree across all 970 settlement records, 43 national profiles, regional totals, comparisons and downloads; financial allocations and transfers must conserve their totals. Rebuilding twice at the same story date must produce identical figures.

## Background development is part of the update

A long time skip requires outcomes for ongoing institutions and NPC work, not merely new dates on old returns. The player has authorised retrospective Year 68 developments within existing story boundaries. These are explicitly introduced campaign decisions, not events recovered from earlier prose. world_year.py applies the ledger to the preserved national and geographic inputs; build.py derives the current conflict publication from the historical source. Existing expenditures and growth estimates encompass these ordinary programmes rather than adding them again. Material exceptional consequences need their own reconciliation. Character knowledge still depends on observation or delivery.
