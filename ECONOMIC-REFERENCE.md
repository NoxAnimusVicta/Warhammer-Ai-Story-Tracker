# Malaspina Economic Reference

Price review: **18/01/0068 AC43**. Year 67 AC43 reference bands remain the baseline; no blanket new-year inflation is enacted. Apply recorded regional conditions and actual invoices, not automatic repricing.

Version 1.4 · Current local story-year price baseline · Editorial update 23 September 2026

This reference supplies the baseline for **new economic estimates** on Malaspina. It supplies consistent fictional purchasing power, normal price bands and rules for local variation. It is not a claim about historical Terran prices or a list of transactions already completed in the story. Established purchases remain historical facts; later explicit corrections take precedence.

## Price date and change over story time

These prices describe the **Year 67 AC43 baseline**, anchored to the evening before expedition departure at Auvrienne, **55 local days after the census of 27/08/0067 AC43**. The real-world editorial date is not the in-world year. A local year contains 365 local solar days, each lasting 24 Terran standard hours and 8 minutes. The numbered date and month lengths are established in the culling calendar. See CALENDAR-REFERENCE.md. The skilled wage of 25 lorrats per pay month is this year's purchasing-power anchor, not a permanent nominal wage.

Use [economic-ledger.json](economic-ledger.json) for dated changes. Its starting regional/category indices are 1.00, meaning the existing tables and regional adjustments apply without an additional time surcharge. No inflation, wage rise or event shock is enacted by introducing the ledger.

The [planetary conflict register](CONFLICT-REGISTER.md) tracks the security conditions behind those returns. Link a conflict-driven price change to its unique event ID and affected market. Existing unrest, garrison costs and ordinary shipping protection are already in the baseline; introducing the register adds no second surcharge. Review conflict status alongside economic and demographic returns when local story time advances.

At a meaningful economic event or an annual story review, assess affected markets: harvests, disease, warfare, destroyed roads or ports, freight and fuel availability, tariffs, currency policy, labour supply, investment and productivity. Prices can rise, fall or remain stable. Wages, rents, food, fuel and manufactured goods need not change together. Ordinary seasonal variation is already covered below; do not count it twice as inflation. A good harvest may lower food prices while freight or housing remains expensive. Improved production may lower unit costs without immediately increasing wages.

Each change records an effective local date or elapsed-story anchor, region, category, old and new index, cause, evidence/status, and whether it replaces a temporary modifier. Use a clearly labelled projection until enacted evidence or an accepted economic review establishes a new return. No universal annual rate is assumed. Never fabricate economic events merely because a year passes; review the conditions and record stability when appropriate.

For a new quote: **baseline unit price × relevant regional/quality/season adjustment × current category time index**, plus separately identified costs not already included. Avoid overlapping modifiers and double-charged freight. Where an item has a specific current quote, prefer it to a generic index. Preserve quantities, units, scope and the date of validity.

Settled purchases and historical wages remain at their actual paid amounts. Cash does not increase with inflation. Existing nominal debts and fixed-price contracts keep their terms unless an established clause or renegotiation changes them. Future unpaid repair estimates, estate receipts and operating forecasts must be requoted for their execution dates; allocations are not price guarantees. Rebase an index only with a retained link to its previous base, so the same movement is not applied twice.

National output and capacity comparisons remain **constant-price** returns at their stated valuation base. A nominal price rise is not real output growth, new industrial capacity or an increase in money already held. Demographic change and economic change are separately dated; population growth alone does not automatically multiply every price or wage.

Monumental architecture estimates in [ARCHITECTURE-REFERENCE.md](ARCHITECTURE-REFERENCE.md) use this same price year. A multi-year project needs a cash-flow schedule, later nominal quotes and financing terms; the current-price estimate is not a promise that every future invoice will cost the same.

## 1. Currency, time and the main anchor

- **1 Veyrasse lorrat = 100 brins.** Write 0.05 lorrat as 5 brins when convenient.
- **An ordinary skilled worker earns approximately 25 lorrats per local pay month.** This is the established anchor, not a newly rolled figure.
- For this economic model, adopt **12 accounting periods per local year**, each called a pay month in the tables. Thus the reference skilled annual wage is **300 lorrats**. The local year is now established as 365 local days. Use the twelve numbered months and their lengths in CALENDAR-REFERENCE.md. Galahad receives his regular salary on the first of each month.
- A normal paid workday is estimated at **1/25 of a monthly wage**. This is a labour-cost conversion, not a statement that every calendar month contains exactly 25 working days. No more than 300 such paid workdays per full accounting year may be charged to one full-time post without overtime or extra staff.
- Prices below are **ordinary Serravonne retail or service prices**, in lorrats, unless a row explicitly says farm gate, wholesale, standing timber or another basis.
- The model assumes functioning trade and ordinary security conditions. The world's persistent hazards are already part of its normal economy; do not add a second universal “grimdark surcharge.”

### Evidence and authority

| Status | Meaning | Treatment |
|---|---|---|
| Established | Explicitly accepted event or existing campaign anchor | Preserve; do not reroll or silently reprice. |
| Calibrated baseline | A range introduced by this document | Use to generate consistent future estimates. |
| Local quotation | A named or described supplier's price for a defined scope, quantity and time | Record it; valid within its stated conditions. |
| Projection | An expected future income or cost | Never add to cash until earned/paid. |
| Allocation | Money reserved for a purpose | Still owned; subtract from available-to-spend, not twice from total cash. |

All new numerical bands in this document are **campaign design decisions**. Their purpose is internal consistency. They may be refined through play, with an explicit reason and a recorded correction, rather than quietly drifting.

## 2. Wages and hiring

Cash wages exclude an employer's tools, supplies, premises and profit. An independent tradesman's invoice is therefore higher than an employee's day wage.

| Work | Monthly cash pay | Typical conditions |
|---|---:|---|
| Unskilled regular labour | 12–18 | Employer supplies necessary work equipment; no lodging assumed. |
| Experienced agricultural worker | 16–23 | Skill, livestock responsibility and season matter. |
| Domestic helper, live out | 12–18 | Defined duties and hours; no free lodging. |
| Domestic helper, live in | 8–13 | Suitable room and ordinary meals additional. |
| Experienced caretaker/housekeeper, live in | 12–18 | Keys, household organisation and routine supervision; room and meals additional. |
| Skilled railway worker/carpenter/mason | 22–32 | **25 is the central benchmark.** |
| Experienced cook, live in | 14–22 | Room and meals additional; large formal household costs more. |
| Clerk/bookkeeper | 20–32 | Literacy and accounting responsibility. |
| Working foreman or competent estate manager | 30–50 | Responsibility for several workers/accounts. |
| Professional engineer | 45–85 | Employment pay, not the price of a commissioned design. |
| Rare specialist/master | 70–120+ | Requires a particular scarce skill and actual demand. |

Room and meals generally cost the employer another **4–7 lorrats per month per resident employee**, allowing for shared facilities. Record those costs in the household or operating account once. A caretaker cannot also supply unlimited field labour, forestry work and skilled repairs for the same salary.

Independent ordinary labour: **0.7–1.1/day**. Skilled contractor: **1.2–1.8/day**, before materials and exceptional travel. Rush work: commonly +15–40%, when there is a reason. Gifts and tips do not replace wages. Galahad's 25-lorrat gift remains substantial.

## 3. Ordinary goods and household costs

| Item | Defined unit | Normal price |
|---|---|---:|
| Bread | 1 kg ordinary loaf | 0.035–0.065 |
| Grain/flour | 1 kg retail | 0.025–0.050 |
| Potatoes/common roots | 1 kg | 0.015–0.035 |
| Seasonal vegetables | 1 kg | 0.030–0.080 |
| Seasonal ordinary fruit | 1 kg | 0.025–0.070 |
| Milk | 1 litre | 0.035–0.070 |
| Eggs | dozen | 0.18–0.35 |
| Ordinary meat | 1 kg | 0.18–0.40 |
| Local fresh fish | 1 kg in Serravonne | 0.08–0.22 |
| Butter | 1 kg | 0.35–0.65 |
| Plain cooked worker's meal | one serving | 0.08–0.18 |
| Ordinary café meal | one serving | 0.18–0.40 |
| Coffee/chicory drink | one cup; genuine coffee upper end | 0.03–0.09 |
| Tea | one cup, ordinary establishment | 0.02–0.06 |
| Soap | 250 g bar | 0.06–0.12 |
| Lamp oil | 1 litre | 0.08–0.16 |
| Coal | 100 kg, ordinary local delivery | 0.9–1.8 |
| Work shirt | one, ordinary cloth | 0.8–1.5 |
| Work trousers | one pair | 1.2–2.5 |
| Leather work boots | one pair | 2.5–5.0 |
| Ordinary coat | one | 4–9 |
| Plain bed linen | sheet/pillowcase set | 1.2–2.5 |

An adult's ordinary home-cooked food allowance is **3–5 lorrats/month**, with premium diets above that. This is a purchasing-power allowance, not a universal biological ration. Galahad's unusual physiology remains governed by campaign continuity; do not invent ordinary hunger penalties or automatically multiply his food bill by his height.

### Household planning baskets

| Household | Monthly budget | Scope |
|---|---:|---|
| Modest urban household, two adults and two children | 18–28 | Ordinary food, modest rent, fuel and basic recurrent needs; little luxury or saving. |
| Orsival house, two resident parents plus one live-in caretaker | 18–25 | Food, domestic fuel/light, cleaning, small linen replacements and modest hospitality; **excludes caretaker wages, structural repairs, taxes and major furniture**. |
| Initial stocking of a sparsely supplied existing house | 26–45 one-off | About one month's pantry basics plus soaps, lighting supplies and selected household replacements; assumes usable cookware/bedding already present. |

Estate produce consumed at home reduces purchases only to the extent it replaces them. The same produce cannot also be counted as sold. A household with a servant and a large house requires more resources than one worker's modest urban household.

## 4. Services, travel and equipment

| Item/service | Normal range | Scope |
|---|---:|---|
| Routine doctor's consultation | 0.8–2 | In town, no procedure or medicines. |
| Urgent home visit | 3–6 | Professional attendance; travel/procedures may be additional. |
| Short series of wound-care visits and simple supplies | 8–18 | Uncomplicated recovery; no major operation or hospital stay. |
| Ordinary passenger rail | 0.008–0.018 per passenger-km | Standard fare; express/class/luggage can change it. |
| Local hired cart with driver | 1–2.5 per half-day | Ordinary distance/load; specify inclusions. |
| Light motor truck with driver | 3–6 per half-day | Local use; define fuel, distance and load. |
| Freight by established rail | 0.015–0.035 per tonne-km | Bulk carriage, excluding collection, terminal fees and final delivery. |
| Short local cart freight | 0.08–0.18 per tonne-km | Minimum hire often matters more than the per-km rate. |
| Ordinary correspondence post | 0.02–0.06 per letter | Within a functioning domestic network. |
| Basic bedframe | 8–16 | Ordinary human size; mattress separate. |
| Mattress | 4–9 | Ordinary size and materials. |
| Plain chair | 1.5–3.5 | New or good refurbished. |
| Plain dining/work table | 5–12 | Size and joinery matter. |
| Bookcase | 4–10 | Ordinary timber, no ornate carving. |
| Sturdy workshop bench | 6–15 | No precision tooling. |
| Basic hand-tool set | 12–30 | Defined practical assortment, not a machine shop. |

Oversized custom furniture: estimate materials and labour; **1.5–2.5× ordinary cost** is a starting allowance, not a law. Noble status can change access, credit and quality offered; it does not impose an automatic universal markup. Gifts, emergency public services and patronage may have no personal charge when explicitly established.

The established indicative business bands remain compatible: design office **150–250** setup, personal prototype workshop **350–600**, staffed machine shop **1,200–2,500**. These include different scopes from repairing an already-owned shed. Never label a repaired empty building a fully equipped workshop.

## 5. Repairs, property and finance

| Job | Planning range | Scope limit |
|---|---:|---|
| Clear short existing drains / small gutter repair | 4–12 | Accessible minor job, no major excavation. |
| Local patching of tiles, sill or plaster | 8–25 | One limited job, not a whole roof. |
| Repair several gates/fence sections | 10–30 | Existing posts mostly sound; new perimeter fence separately measured. |
| Make small sound outbuilding dry, secure and lit by existing means | 30–70 | Minor roof/door/window/floor work; machinery, electrical supply and structural rebuilding excluded. |
| Major structural repair | itemised quotation | Do not guess from the building's appearance. |

Build a quotation as **labour days × appropriate rate + materials + transport + 10–20% contingency**, unless contingency is already included. Galahad may substitute his own explicitly undertaken labour or designs, but cannot make materials and outside workers free.

Typical rural agricultural rent: **8–16/ha/year for workable arable**, **5–11 for pasture**, **14–28 for unusually productive accessible irrigated/market land**. Improvements, tenancy rights and who bears charges alter the rent. A modest rural cottage: **1.5–3/month**. Do not add cottage rent again when already bundled into a farm tenancy.

Land purchase has no universal per-hectare tariff. As a first valuation check, use **15–25 times sustainable net property income before financing**, adjusting explicitly for buildings, obligations, location and liquidity. This is a capitalisation check, not a guarantee of a buyer. No mortgage or credit automatically exists. If borrowing occurs, record principal, interest, security, fees and repayment schedule; never treat loan proceeds as profit.

## 6. Agriculture and woodland

These are ordinary planning ranges, not yields already harvested. Ground condition, climate, seed, labour and tools must support the chosen figure. National food-coverage figures do not set an individual farm's yield.

| Product | Saleable yield per productive hectare per year | Farm-gate price |
|---|---:|---:|
| Cereal crop | 1.2–2.5 tonnes | 12–22/tonne |
| Hay | 2–4 tonnes | 4–8/tonne |
| Established bearing orchard | 5–12 tonnes | 10–25/tonne |
| Mixed market vegetables | 10–20 tonnes | 12–30/tonne |

Owner-operated revenue = **productive hectares × saleable yield × realised farm-gate price**. Then subtract hired and family labour where relevant, seed, fertiliser/manure handling, draft power, equipment wear, packing, haulage, dues and losses not already excluded from saleable yield. Ranges are not invitations to combine every optimistic endpoint. Leased ground produces **rent to the owner**, not rent plus the tenant's crop revenue.

### Timber: units and stages are mandatory

| Product | Unit and transaction stage | Reference range |
|---|---|---:|
| Ordinary saw timber standing | solid m³ of merchantable stem; buyer fells/extracts | 0.6–1.8 |
| Usable sawlogs at roadside | solid m³, felled and extracted | 2.5–5.0 |
| Common rough-sawn boards at mill | solid m³ of finished boards | 8–16 |
| Seasoned selected joinery wood | solid m³ of saleable boards | 18–40 |
| Fuelwood standing | solid m³; buyer works it | 0.15–0.45 |
| Cut fuelwood at roadside | stacked m³ | 1.0–2.0 |
| Cut fuelwood delivered locally | stacked m³ | 1.8–3.2 |

A stacked m³ is approximately **0.6–0.7 solid m³**, depending on log form and stacking. Use **0.65** until measured. Sawing commonly returns **45–60% saleable boards by volume**; do not sell one m³ of logs as one m³ of boards. Account for handling, drying time, waste and working capital. Valuable species and unusual sizes need their own quotes.

Without a forestry inventory, use **2–4 solid m³/ha/year** only as a rough mixed-woodland sustainable-growth planning range. It is not permission to harvest that amount immediately. Determine species, age structure, protected areas, regeneration, road access and existing cutting rights. One-off salvage and accumulated mature stock are capital realisations, not automatically recurring income.

## 7. Place, season, quality and disruption

**Choose a baseline price within its normal band, then apply only relevant variation.** Record the reason. Do not charge transport twice through both a delivered price and an extra freight modifier.

| Market setting | Local staples | Local wages/services | Manufactured goods | Guidance |
|---|---:|---:|---:|---|
| Serravonne reference | 1.00 | 1.00 | 1.00 | Port/rail access; ordinary local supply. |
| Auvrienne ordinary districts | 1.05–1.15 | 1.10–1.25 | 0.95–1.10 | Housing commonly 1.3–1.8× comparable Serravonne accommodation. |
| Connected farming district | 0.75–0.95 | 0.80–0.95 | 1.05–1.25 | Applies to locally produced food, not imported coffee. |
| Industrial/mining town | 1.10–1.35 | 1.10–1.35 | 0.90–1.10 for local products | Imports may be dearer; specialist production can be cheaper. |
| Remote but supplied settlement | 1.00–1.40 | 0.90–1.30 | 1.25–1.75 | Abundant local produce may still be cheap; scarce specialists dear. |
| Trading port beyond Veyrasse | product-specific | product-specific | product-specific | Use actual trade/food profiles, import duties and currency; no blanket foreign surcharge. |

Normal seasonal local produce: **0.7–0.9× in a glut**, **1.2–1.6× out of season**. Ordinary better quality: **1.2–1.6×**; luxury **2–5×**, with specification. Disruption: usually **1.25–2× for affected goods**, sometimes nonavailability instead. A siege or destroyed route needs its own assessment; unlimited quantities cannot always be bought by paying more.

Prefer one combined explanation over a stack of overlapping modifiers. A normal item more than twice its reference price deserves an explicit cause. Bulk purchases of standard goods may reduce unit prices **5–15%**, but minimum quantities, storage and spoilage matter.

### Worked regional quote

Choose bread at **0.05/kg** in Serravonne. The same ordinary loaf in Auvrienne at a 1.10 food factor is about **0.055/kg**, rounded to **5–6 brins**. In a connected grain-growing district, a 0.85 factor gives about **4 brins**. Do not then add a second generic city or rural surcharge.

### Foreign currency and national accounts

Quote in lorrat-equivalents for comparison until a local currency/exchange quote is established. Do not imply the lorrat is legal tender everywhere. Record an actual rate, conversion charge and acceptance conditions before spending foreign money. National output measured in **constant-price lorrat-equivalents** is neither current exchange value nor government cash.

Veyrasse's existing national return of **205 lorrat-equivalents per resident per year** is output across workers and dependants, not an individual salary. A skilled annual cash wage of 300 does not directly contradict it. This document does not alter national production, taxes, population or military budgets.

## Using the reference

Prices are fictional reference bands, not guaranteed quotations. Identify quantity, unit, quality, place and transaction stage; record what labour, transport and taxes are included. Keep estimates, allocations, invoices and payments distinct. Current household accounts are recorded separately in [ESTATE-ACCOUNTS.md](ESTATE-ACCOUNTS.md).

Version 1.4 retains the price bands and event-led revisions, and reconciles the established calendar. The replacement accounting passages in transcript439 establish the historical estate-pricing settlement. CURRENT-CONTINUITY.md and expedition-accounts.json govern the current balance.


## Expedition travel calibration — current price year

[The expedition budget](EXPEDITION-BUDGET.md) introduces explicit working rates for previously unspecified services: sea passage0.007 lorrat per berth-km including board and lodging; professional twin room0.80/night, single0.60, large suitable room1.20; meals ashore0.75/person/day; two road vehicles and drivers24/day plus0.04/km combined distance/fuel; local full-day hire12 including driver/fuel. These are route-budget calibrations, not universal tariffs or evidence that future invoices are paid. Rail uses the existing0.008–0.018 band, at0.014 per passenger-km. Do not add ship meals twice, charge the opening passage twice, or deduct salaries from operations.

Galahad’s established salary is60 per pay month: the exact story records360 over six months and a later payment60. Five travelling scholars retain35 each. The Collegium continues these ordinary wages while they conduct expedition work. The professional engineer45–85 and rare specialist/master70–120+ reference bands remain unchanged; personal pay is an established contract, not automatically whichever generic band is highest. No pay rise or extra salary receipt occurs in this correction.
