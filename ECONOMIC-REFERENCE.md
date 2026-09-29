# Malaspina Economic Reference

Price review: **12/11/0068 AC43**. Year 67 AC43 reference bands remain the baseline; no blanket new-year inflation is enacted. Apply recorded regional conditions and actual invoices, not automatic repricing.

Version 1.8 · Year 67 price baseline, reviewed 12/11/0068 AC43 · Capital and estate-enterprise estimates recorded 27 September 2026

Additional references: [capital purchases](#8-capital-purchases-and-industrial-projects), [estate crop and tenancy planning](#9-orsival-estate-production-and-tenant-purchases), and [shelved brewery-and-orchard-drinks proposal](#10-orchard-drinks-and-brewery-feasibility--shelved-proposal). These preserve the economic discussion without enacting a business, purchases, harvests or changes to balances.

This reference supplies the baseline for **new economic estimates** on Malaspina. It supplies consistent fictional purchasing power, normal price bands and rules for local variation. It is not a claim about historical Terran prices or a list of transactions already completed in the story. Established purchases remain historical facts; later explicit corrections take precedence.

## Price date and change over story time

These prices describe the **Year 67 AC43 baseline**, anchored to the evening before expedition departure at Auvrienne, **55 local days after the census of 27/08/0067 AC43**. The real-world editorial date is not the in-world year. A local year contains 365 local solar days, each lasting 24 Terran standard hours and 8 minutes. The numbered date and month lengths are established in the culling calendar. See CALENDAR-REFERENCE.md. The skilled wage of 25 lorrats per pay month is the Year 67 purchasing-power anchor, retained at the current review, not a permanent nominal wage.

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

Veyrasse's census-baseline national return of **205 lorrat-equivalents per resident per year** is output across workers and dependants, not an individual salary. A skilled annual cash wage of 300 does not directly contradict it. Current projected production, public budgets and per-person output are supplied by national-current.json. LIVING-WORLD-REFERENCE.md records the elapsed-time method; this price reference does not itself reprice completed transactions.

## Using the reference

Prices are fictional reference bands, not guaranteed quotations. Identify quantity, unit, quality, place and transaction stage; record what labour, transport and taxes are included. Keep estimates, allocations, invoices and payments distinct. Current household accounts are recorded separately in [ESTATE-ACCOUNTS.md](ESTATE-ACCOUNTS.md).

Version 1.8 retains the existing price bands, event-led revisions and calendar, and adds dated capital and estate-enterprise planning references. The replacement accounting passages in transcript439 establish the historical estate-pricing settlement. CURRENT-CONTINUITY.md and expedition-accounts.json govern the current balance.


## Expedition travel calibration — Year 67 basis, retained at return

[The expedition budget](EXPEDITION-BUDGET.md) introduces explicit working rates for previously unspecified services: sea passage 0.007 lorrat per berth-km including board and lodging; professional twin room 0.80/night, single 0.60, large suitable room 1.20; meals ashore 0.75/person/day; two road vehicles and drivers 24/day plus 0.04/km combined distance/fuel; local full-day hire 12 including driver/fuel. These are route-budget calibrations, not universal tariffs or evidence that future invoices are paid. Rail uses the existing 0.008–0.018 band, at 0.014 per passenger-km. Do not add ship meals twice, charge the opening passage twice, or deduct salaries from operations.

During the expedition Galahad’s established salary was 60 per pay month: the exact story records 360 over six months and a later payment 60. Five travelling scholars retain 35 each. The Collegium continued those wages during expedition service. Galahad resigned on 20/10/0068; his final 40 was paid on 01/11. His executed royal commission pays 150/month from 17/10, on the first for the preceding month; 70 was paid on 01/11. The professional engineer 45–85 and rare specialist/master 70–120+ reference bands remain unchanged; personal pay is an established contract, not automatically whichever generic band is highest. No pay rise or extra salary receipt occurs in this correction.

## 8. Capital purchases and industrial projects

**Price basis: 11/10/0068 AC43, ordinary Veyrassian conditions.** These are newly calibrated fictional reference bands from the economic discussion, not quotations or completed purchases. Apply the same dated market-change rules as everyday goods. No universal Terran currency conversion is implied.

**1,000 lorrats = 40 skilled-worker pay months = 3⅓ years of gross skilled wages, or 6⅔ months of Galahad’s current 150-lorrat commission pay.** This is gross income, not disposable savings. Current personal cash is 659; separate household funds are 1,160, including 148 reserved and 1,012 uncommitted. Dorlac’s former 60 receivable was relinquished. The state’s 18,000 programme ceiling is not personally spendable. Land and buildings are assets outside these cash balances. The 1,000 household contribution has already been paid once.

### Property and small businesses

| Purchase or undertaking | Lorrats | Scope |
|---|---:|---|
| Modest habitable rural cottage and small garden | 300–650 | Ordinary property, not a farm. |
| Ordinary small Serravonne house | 700–1,600 | Condition and location matter. |
| Comparable Auvrienne house | 1,000–2,800 | Capital-city housing premium. |
| Substantial comfortable provincial family house | 2,000–5,000 | No extensive estate assumed. |
| Open a small shop | 300–800 | Rented premises, fittings, ordinary stock and initial cash reserve; not freehold purchase. |
| Open a bakery or similar small production business | 600–1,500 | Rented premises and modest equipment/stock; not an industrial plant. |
| Buy an established modest shop business | 700–2,000 | Stock and goodwill, excluding its building; verify actual earnings and liabilities. |

The existing 15–25-times sustainable net property-income valuation check still applies; these examples do not replace it or assign a sale value to the Orsival estate. Buying premises, acquiring a business and funding operations are distinct commitments.

### Workshops and civil engineering

| Undertaking | Lorrats | Scope |
|---|---:|---|
| Design office | 150–250 | Preserved existing setup band. |
| Personal prototype workshop | 350–600 | Preserved band; existing suitable premises. |
| Small staffed machine shop | 1,200–2,500 | Preserved band; limited general-purpose capability, possibly second-hand equipment; existing/leased premises and limited opening provision, not perpetual payroll. |
| Substantial equipped workshop | 5,000–15,000 | Broader machinery, power and lifting provision; no land/freehold purchase. |
| Modest factory with dedicated production machinery | 30,000–100,000+ | Defined industrial scope and suitable site; no universal factory tariff. |
| Farm water supply | 150–600 | Well/intake, pump, storage and limited distribution; specific scope controls. |
| Significant estate drainage/irrigation improvements | 300–1,200 | Existing estate, measured works. |
| Small permanent road bridge across a narrow watercourse | 3,000–12,000 | Foundations, access and flood conditions require assessment. |
| Small town waterworks and distribution | 20,000–80,000 | A local scheme, not a metropolitan network. |

These project bands are broad planning references; obtain itemised site estimates. Exceptional foundations, remote materials or extensive earthworks require explicit adjustments. They do not replace the national-wonder estimates in ARCHITECTURE-REFERENCE.md. The Orsival workshop is already dry, secure and lit but remains unequipped; do not charge its paid repairs again.

### Vehicles and military procurement

| Standard factory-produced item | Lorrats |
|---|---:|
| Serviceable used civilian car | 150–400 |
| New ordinary civilian car | 400–800 |
| New general-purpose lorry | 600–1,200 |
| Military machine gun with normal mounting | 100–250 |
| Field artillery piece with normal carriage and sights | 800–2,000 |
| Heavy artillery piece | 2,500–7,000 |
| Armoured car | 1,500–3,500 |
| Light tank | 3,000–6,000 |
| Medium tank | 7,000–15,000 |
| Heavy tank | 15,000–35,000 |

These exclude a new development programme, factory construction, crew, continuing fuel and substantial ammunition stocks. Price is not automatic availability, permission to possess military equipment or an export authorisation. The Auvrienne 762 pilot programme now has a specific actual cost return in ROYAL-COMMISSION.md. Its equipment, development and payroll costs must not be mistaken for a repeat-production unit tariff.

Conventional light-to-medium tank planning: **10,000–25,000** for a prototype using an existing capable industrial workshop and bought-in specialist components; **15,000–40,000** to establish a suitable modest workshop and produce that prototype with substantial outsourcing; **100,000–300,000+** to establish a dedicated small production operation before sustained production costs. These are alternative scopes, not cumulative charges. A prototype concentrates development costs into one vehicle. Galahad's abilities may reduce labour/design costs when actually applied, but do not make equipment and outside supplies free. An existing state arsenal avoids purchasing the entire capability personally.

## 9. Orsival estate production and tenant purchases

**Status: proposed crop specification and normal-year planning model, recorded for future use; not a completed survey, planting instruction or actual harvest return.** The established 56-hectare allocation remains unchanged. The user has shelved the associated enterprise discussion. No agricultural conversion, purchase contract or new business is enacted.

### Proposed tenant rotation — 20 hectares

| Crop in a representative year | Area | Planning yield per hectare | Usable output |
|---|---:|---:|---:|
| Wheat | 8 ha | 2 t | 16 t |
| Barley | 4 ha | 1.8 t | 7.2 t |
| Oats | 3 ha | 1.6 t | 4.8 t |
| Field beans | 2 ha | 1.2 t | 2.4 t |
| Clover/grass ley for fodder | 3 ha | 3 t hay | 9 t hay |
| **Total** | **20 ha** | | **30.4 t grain/beans plus 9 t hay** |

Rotate crops between fields over successive years. Usable outputs allow ordinary field/quality losses, but tenants still retain seed, food and animal feed; the whole output is not automatically marketable surplus. Straw is an unquantified by-product. The clover ley is productive land, not unused space.

**Tenants own their crops; the estate receives rent.** The working rental benchmark is 240/year (20 ha × 12), subject to individual agreements. Never count their harvest revenue as estate income as well as charging cash rent. Existing occupancies remain protected.

### Proposed estate-managed crop mix

| Use | Area | Proposed specification | Normal-year output basis |
|---|---:|---|---|
| Orchard | 4 ha | 2 ha apples, 1.2 ha pears, 0.8 ha plums | 32 t saleable fruit: 16 apples, 9.6 pears, 6.4 plums at the model's common 8 t/ha planning yield. |
| Market garden | 2 ha | Potatoes, onions/carrots, cabbages, beans/peas and a small herb area | 28 t saleable mixed vegetables at 14 t/ha; no surveyed subcrop areas yet. |
| Meadow/pasture | 12 ha | Mixed grasses and clover | 36 t hay equivalent if fully on the hay-sale basis. |
| Woodland | 14 ha | Proposed oak, beech, hornbeam and hazel coppice | Inventory still needed; existing illustrative cut is 30 solid m³ roadside sawlogs and 30 stacked m³ fuelwood. |

The orchard/garden division was previously provisional and remains a recorded proposal until adopted. Fruit and vegetable saleable yields already exclude household retention and ordinary unsaleable produce. Do not subtract those again. Replace hay output with grazing use on any area allocated to grazing; do not count both at full capacity. No personally owned herd is established. The woodland example removes 49.5 solid m³ in total, conditional on inventory, access and sustainable growth.

### Space and water

Of 56 ha, 20 are tenant arable; the other 36 comprise 12 meadow/pasture, 6 orchard/gardens, 14 woodland and 4 buildings, cottages, tracks, yards and domestic grounds. **No measured vacant parcel is currently confirmed.** Meadow may be the most practical place to investigate development, subject to grazing rights, drainage and access; woodland or orchard conversion displaces productive assets. One meadow hectare on the current model represents about 3 t hay and 11 lorrats annual contribution after direct costs. Construction costs are additional.

The records establish wet lower ground and drainage channels/crossings, not ownership of a large river or its banks. Artwork is not a boundary survey. A well on estate land is a plausible future project, not a proven aquifer or automatic clean-water supply. Confirm yield and quality, protect the wellhead from floodwater and keep wastewater separate. No river-use rights or abstraction arrangement has been granted.

### Buying tenant crops

Direct farm-gate purchases can avoid retail/merchant costs but there is **no automatic landlord discount or ownership of the harvest**. Existing cereal price band: 12–22/tonne, with malting quality potentially commanding a specific premium. Five tonnes at 18/tonne cost 90; an explicitly negotiated 5% prompt-payment/collection discount gives 85.5. Do not stack a generic bulk discount onto a price that already includes it. Milling, transport and storage are separate unless included.

Rent in kind is a possible negotiated replacement: five tonnes valued at 18/tonne discharge 90 of rent, not supply free grain alongside the same 90 cash rent. First refusal on an agreed surplus at a transparent local price is an option, not an existing right. No contract or rent conversion has been made.

## 10. Orchard drinks and brewery feasibility — shelved proposal

**Decision recorded 27 September 2026: table the business for now and preserve the economic reference.** In-world valuation remains 11/10/0068 AC43. No construction, staff hiring, crop diversion, equipment purchase, harvest stock, sales, borrowing or cash movement is enacted. Forecast future annual harvest capacity is not current stock on hand. Keep this proposal separate from the historical estate accounts and royal technical commission.

### Capacity assumptions

Assume 5–6 tonnes of the proposed 7.2-tonne tenant barley crop can be purchased; that surplus and malting suitability are unconfirmed. At roughly 1.3 tonnes barley per tonne malt and a conservative model of 4–5 litres saleable ordinary-strength beer per kg malt, output is **about 15,000–23,000 litres/year**. This detailed calculation supersedes the earlier rough 16,000–24,000 estimate. Strong beer yields fewer litres. Use contract malting initially; an estate maltings is not included. Hops, yeast, fuel, packaging and suitable water still need sourcing.

The orchard's 16 t apples could support 8,000–9,600 litres cider; 9.6 t pears about 4,300–5,800 litres perry. Together with the conservative beer range this is roughly **27,000–38,000 litres/year before a separate plum product**, approximately 54,000–76,000 half-litre servings. Plum beer uses part of existing beer output and must not be added again as entirely new volume. Dedicated plum wine requires trialled recipe/yield assumptions and purchased ingredients where needed. Dessert fruit may be usable; varieties, pressing yield and blend suitability must be assessed, not assumed ideal.

A 500-litre beer plant would require roughly 30–46 batches for the forecast beer volume, with suitable fermentation capacity. Cider/perry storage is sized for the seasonal harvest peak, not average weekly sales. Brewing, fruit pressing and fermentation are related but distinct equipment requirements.

### Orchard-only sales comparison

These newly calibrated prices are receipts to the estate business, chiefly merchant/tavern sales, **not downstream retail prices**. Container deposits are refundable liabilities, not revenue. All 32 t in the existing saleable-fruit model are diverted; household fruit was already excluded. This is a steady normal-year sale-through model, not guaranteed first-year sales.

| Product | Saleable litres/year | Price band per litre | Working price | Annual receipts |
|---|---:|---:|---:|---:|
| Cider | 8,800 | 0.10–0.15 | 0.12 | 1,056 |
| Perry | 4,800 | 0.12–0.18 | 0.14 | 672 |
| Plum wine | 3,200 | 0.20–0.30 | 0.24 | 768 |
| **Total** | **16,800** | | | **2,496** |

Plum output is a provisional recipe assumption, not a measured juice extraction rate; trial before commitment. Purchased recipe ingredients are allowed below. Ordinary processing losses are already in finished volumes.

| Additional annual expense | Lorrats |
|---|---:|
| Experienced production manager/cidermaker, 45/month | 540 |
| Seasonal processing/bottling help, additional to existing orchard labour | 120 |
| Fuel, pump power and water-system operation | 100 |
| Yeast, recipe ingredients, cleaning and testing supplies | 80 |
| Closures, labels, packaging replacements and cask upkeep | 140 |
| Delivery and selling | 100 |
| Equipment maintenance | 80 |
| Administration and provisional local charges | 60 |
| Exceptional rejected stock/unpaid-invoice allowance | 90 |
| Additional equipment replacement reserve | 120 |
| **Total** | **1,430** |

The charges provision is an estimate, not an established alcohol-tax rate or licence. Confirm applicable charges before investment. The exceptional-loss allowance does not subtract normal process loss a second time. Existing orchard cultivation/harvest costs remain in estate operations, with no second deduction here and no assumed saving from ceased fresh-fruit packing/marketing.

Comparison: **2,496 − 1,430 − 480 displaced fresh-fruit revenue = 586 additional annual surplus.** Gross revenue rises by 2,016, not profit. The historical 218 normal-year estate forecast would become 804 on these assumptions; the actual expedition-year surplus of 162 remains unchanged. With realised drinks revenue 20% lower and costs unchanged, additional surplus falls to 86.8. Unsold stock is not cash revenue. No beer profit is included.

### Water supply and orchard-processing capital

Ordinary well installation bands: investigation/trial work/testing 30–80; well construction/protected head 120–300; pump/drive/tank/short pipework 100–220; combined **250–600**, central **400**. This is a more specific scope within the farm-water planning category, not an additional charge on top of it. Difficult drilling or substantial treatment needs requoting.

The following assumes a suitable existing outbuilding, predominantly still drinks, casks plus returnable bottles, and manually operated equipment appropriate to local industry. No suitable spare building is confirmed; the assigned engineering workshop is not automatically reassigned.

| Capital item | Central allowance |
|---|---:|
| Well, pump, tank and supply, including initial investigation/testing | 400 |
| Washable drainage and wastewater collection/handling | 250 |
| Building adaptation: floors, ventilation, partitions and storage | 450 |
| Fruit sorting/washing, mill and substantial press | 300 |
| Fermentation/storage vessels, approximately 24,000–26,000 litres gross capacity | 1,100 |
| Hot-water plant/basic temperature management | 200 |
| Transfer pumps, hoses, fittings and testing instruments | 150 |
| Manual bottle washing/filling/closing equipment | 100 |
| Initial circulating casks, bottles and crates | 350 |
| Layout planning, installation checks and commissioning | 100 |
| **Subtotal** | **3,400** |
| **15% capital contingency, added once** | **510** |
| **Installed total** | **3,910** |
| Opening working cash | 900 |
| **Funding provision** | **4,810** |

Gross vessel capacity includes fermentation/transfer room, not extra finished output. Working cash bridges wages, consumables and maturation/payment delays; it is funding, not a second annual expense. Assess its adequacy against the actual production/sales calendar. The detailed brewery/cidery budget supersedes any attempt to apply the generic bakery/startup band to this larger seasonal-storage operation.

If a new building is required, provisionally replace the 450 adaptation line with **1,500–3,000** for a modest purpose-built structure and recalculate contingency; do not add both in full. High groundwater, flood exposure, difficult foundations or temperature-control requirements can change the scope. Existing estate repairs are already paid and are not charged again.

### Packaging and employment unit prices

| Item | Current reference band |
|---|---:|
| Sound reconditioned 100-litre wooden cask for still drinks | 3–5 |
| New 100-litre wooden cask | 5–8 |
| Ordinary reusable 750 ml bottle, bulk purchase | 0.02–0.04 |
| Closure/simple label per filling | 0.005–0.015 |
| Reusable twelve-bottle wooden crate | 0.3–0.6 |
| Experienced working brewer/cidermaker | 40–55/month |
| Regular production assistant | 16–23/month |

Pressure-rated sparkling packaging needs its own specification and price. The initial 350 pool can cover approximately forty reconditioned 100-litre casks, four thousand ordinary bottles and crates; containers circulate and do not hold the whole annual harvest simultaneously. Bulk storage is separately budgeted above. Replacement/consumables enter annual costs, not another purchase of the entire opening pool. Lucette's existing wage does not include running production.

### Optional 500-litre beer addition

| Additional capital | Range |
|---|---:|
| Mash/separation/boiling/cooling equipment | 450–900 |
| Malt mill and dry grain storage | 60–140 |
| Beer fermentation and conditioning vessels | 350–700 |
| Heating/service upgrades | 100–250 |
| Additional circulating casks | 150–300 |
| **Installed allowance including 15% contingency** | **About 1,300–2,650** |
| Additional working cash | 400–700 |

Assumes shared premises/distribution and contract malting, not an estate maltings. Additional barley, malting, hops, yeast, fuel and labour need a separate beer operating budget before any profit is asserted. The orchard's 586 surplus contains no beer contribution.

The orchard-only provision of 4,810 exceeds current personal cash of 659. Simple recovery of that funding provision at 586/year is roughly eight years after retaining the modelled replacement reserve, before financing or ramp-up effects. This is a comparison, not a discounted investment appraisal or promise. Smaller production, using only part of the harvest, or paid processing elsewhere remain possible options; none is commissioned. The business remains **shelved**.

### Technical sources and limits

Real-world sources support process assumptions only; they do not supply lorrat prices or establish crops, equipment, permits or groundwater at the fictional estate.

- [Crisp Malt: barley-to-malt conversion and malting-quality premiums](https://crispmalt.com/news/why-does-the-malt-price-change-every-year/).
- [Crisp craft malt handbook](https://crispmalt.com/wp-content/uploads/2023/04/CRISP_CRAFT-MALT-HANDBOOK.pdf): brewing reference; conservative campaign finished-yield allowance is an extrapolation.
- [Apple pressing service yield example](https://wattkastapple.fi/en/musteri/): fruit-to-juice comparison, not a guaranteed finished-drink yield.
- [Washington State University perry research](https://cider.wsu.edu/perry/): dessert-pear suitability and cultivar differences.
- [Penn State private-water-system flood guidance](https://extension.psu.edu/post-flood-drinking-water-safety-for-private-water-systems): groundwater protection/testing considerations.


## Recorded post-return quotations and contracts — 12/11/0068 review

These are enacted local transactions, not replacement universal tariffs. Estate telephone installation/service through Month 10 cost **48**; continuing rental is **two/month plus toll calls**. Two trained adult watchhounds cost **60**, equipment **eight**; a further twelve is reserved for upkeep, not already spent. Minor tenant drainage and roof repairs cost **twelve**. Removal of personal Collegium belongings cost **eighteen**. The original 56-hectare split and proposed crop/drinks models remain unchanged; a visit to tenants did not turn planning yields into a surveyed harvest.

Commission remuneration is **150/month**, licence **900 paid**, and state programme ceiling **18,000**. The completed pilot run recognises **14,304** cost through 12/11, with **180** additional commitments and **3,516** recorded headroom, before the unpriced incremental return-transport valuation. These include development, equipment and accrued labour; dividing the whole by rifle count would not establish a normal factory unit price. No blanket price-index rise or national technology gain is introduced. [Current personal/household accounts](ESTATE-ACCOUNTS.md) and [programme accounts](commission-accounts.json) govern payments.

Royal Advisor is effective on 12/11. No new salary or additional appropriation is settled; the existing commission remuneration continues. The appointment itself creates neither cash nor new national output.
