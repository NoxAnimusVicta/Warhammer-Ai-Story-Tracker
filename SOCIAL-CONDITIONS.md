# Living standards and public sentiment

Baseline: **05/11/0068 AC43**. These are newly established campaign estimates inferred from the recorded societies and Year 68 events, not surveys, new events or numbers extracted from an existing census. They describe residents, including tenants and colonial communities, rather than only enfranchised citizens. No change to population, prices, military strength or public accounts is booked by introducing them.

## Four different questions

- **Standard of living (1–99):** material access to food, housing, heat, clothing, household goods and services. Three broad resident groups have estimated population shares and scores; their population-weighted mean is the headline. Lower-income households include tenants, labourers, subsistence producers and dependants; intermediate households include skilled workers and small proprietors; privileged households include substantial owners and senior officeholders. These are economic groupings, not uniform hereditary castes. In communal societies the last group represents relatively advantaged households, not an invented aristocracy. Self-provisioned food, communal land and reciprocal shelter count; low monetised output alone does not mean starvation.
- **Public confidence (0–100):** assessed trust that the relevant authorities can govern, protect and honour obligations. It is an index, not a poll percentage, approval of every policy or military command cohesion. For divided regions it summarises confidence in the separate local authorities; there is no fictitious national government. Colonial confidence concerns the governing arrangements, not automatic attachment to the colonising state.
- **Civil protection (0–100):** practical protection from arbitrary requisition, coercive labour, discriminatory land treatment and unanswerable officials; access to remedy and a meaningful voice. The form of government alone does not set the score. A communal compact can perform well despite limited industry; a wealthy commercial republic can exclude most residents.
- **Unrest (0–100):** severity and breadth of active social/political tensions, strikes, resistance and internal violence. Higher is worse. It is not the percentage of rebels, a probability of revolution, external war intensity or simply 100 minus confidence. Quiet under repression does not establish consent. A border war can coexist with domestic support; local fighting can be severe without engulfing a whole country.

Headline SoL bands follow the vocabulary used in Victoria 3: 1–4 starving; 5–9 struggling; 10–14 impoverished; 15–19 middling; 20–24 secure; 25–29 prosperous; 30–39 affluent; 40–49 wealthy; 50–59 lavish; 60–99 opulent. Fractional means take the band of their integer part. These are period-relative consumption categories, not modern Terran income equivalents. Household access to medical care, schooling and services still varies within each band.

For confidence and civil protection, 0–19 is very low, 20–39 low, 40–59 mixed, 60–79 relatively strong and 80–100 very strong. Unrest: 0–19 subdued, 20–39 persistent tensions, 40–59 elevated, 60–79 severe and 80–100 widespread crisis. Scores are comparative guides rather than hard event triggers. Allow roughly ±2 SoL points and ±10 index points as working uncertainty, wider in divided or disrupted areas; these are judgement ranges, not statistical confidence intervals. A 0.1 SoL difference is not meaningful evidence of superiority.

## Keeping the record alive

The baseline file is social-conditions.json; national-current.json and the app carry its assessment date separately from other national figures. Do not automatically raise living standards with output growth, change confidence with treasury balances, or invent a rise in unrest each month. At each dated world review, assess harvests and prices against wages, rents, work, taxation, distribution, public services, security, rights and recorded grievances. Revise only where events justify a change. Explicitly record unchanged findings as reviewed, otherwise retain the old assessment date.

Future changes must record the date, affected society and groups, old and new scores, distribution changes and the narrative reason in social-reviews.json before replacing the active return. Apply each event once. National averages do not award identical conditions to every settlement; use local evidence for regional differences. Neither Galahad's reputation nor his emotional influence automatically changes nationwide attitudes. No past values or trends have been fabricated for the new measures.

## Inspiration and limits

Paradox's [Standard of Living development diary](https://steamcommunity.com/games/529340/announcements/detail/2965045886379003737) describes a 1–99 consumption-related measure. Its [legitimacy and radicalisation discussion](https://www.paradoxinteractive.com/games/victoria-3/news/victoria-3-dev-diary-65-patch-1-1-pt1) treats political support separately. This campaign borrows that distinction and the SoL vocabulary, not the game's economic simulation or patch-specific political formulas. Confidence, protection, unrest, resident shares and all Malaspina values are original worldbuilding assessments.



## Comparable returns

| Society | Living standard / 99 | Confidence / 100 | Civil protection / 100 | Unrest / 100 |
|---|---:|---:|---:|---:|
| Ashalai Reef Covenant | 13.8 — Impoverished | 72 | 71 | 22 |
| Averholt | 15.2 — Middling | 61 | 49 | 32 |
| Bellacosta Cantons | 12.1 — Impoverished | 44 | 34 | 47 |
| Brannervaux | 15.7 — Middling | 62 | 58 | 30 |
| Bressavelle Marches | 14.2 — Impoverished | 49 | 38 | 43 |
| Calvernis Republic | 20.1 — Secure | 58 | 48 | 40 |
| Cavressa Principalities | 13.0 — Impoverished | 50 | 41 | 39 |
| Ceralte Admiralty | 16.8 — Middling | 65 | 47 | 29 |
| Cervaud | 13.1 — Impoverished | 48 | 38 | 44 |
| Dreissen Wardholds | 13.7 — Impoverished | 59 | 49 | 35 |
| Duchy of Caldrienne | 14.5 — Impoverished | 54 | 32 | 43 |
| Edrask Governorate | 13.0 — Impoverished | 48 | 39 | 39 |
| Galdresk | 15.9 — Middling | 69 | 64 | 25 |
| Gavrel | 11.8 — Impoverished | 46 | 35 | 44 |
| Haldrevik Concessions | 11.6 — Impoverished | 34 | 23 | 63 |
| Halskert | 16.3 — Middling | 64 | 59 | 29 |
| Karsenne Compact | 16.8 — Middling | 64 | 57 | 33 |
| Kelbrun | 11.0 — Impoverished | 39 | 25 | 57 |
| Kingdom of Istrana | 16.2 — Middling | 62 | 53 | 33 |
| March of Veyrasse | 15.7 — Middling | 59 | 48 | 38 |
| Merovian Island Republic | 17.6 — Middling | 64 | 61 | 32 |
| Nemerai Crown | 15.7 — Middling | 65 | 61 | 29 |
| Norrakai Moots | 11.7 — Impoverished | 74 | 74 | 18 |
| Ordelune Overseas Districts | 13.0 — Impoverished | 45 | 35 | 44 |
| Ossavren successor territories | 9.8 — Struggling | 29 | 24 | 68 |
| Ostrevain | 13.1 — Impoverished | 55 | 35 | 40 |
| Rivessac Coast | 15.2 — Middling | 57 | 51 | 34 |
| Rovengard | 14.1 — Impoverished | 60 | 44 | 30 |
| Rovessara | 21.6 — Secure | 63 | 55 | 34 |
| Seravelle Littoral | 14.7 — Impoverished | 48 | 40 | 47 |
| Serevask Republic | 15.6 — Middling | 61 | 59 | 33 |
| Skeldran Hearth Confederacy | 12.8 — Impoverished | 73 | 73 | 19 |
| Talascan Charter Islands | 12.6 — Impoverished | 35 | 28 | 56 |
| Tervayne | 19.6 — Middling | 59 | 49 | 37 |
| Vallessia Cantons | 15.1 — Middling | 55 | 48 | 38 |
| Vardol | 14.5 — Impoverished | 57 | 37 | 40 |
| Varessan Sea League | 15.7 — Middling | 70 | 70 | 25 |
| Varnelle | 16.9 — Middling | 60 | 52 | 34 |
| Varneselle Estates | 13.0 — Impoverished | 46 | 34 | 46 |
| Varnesk | 16.9 — Middling | 52 | 40 | 49 |
| Vaulcerre Basin Leagues | 13.2 — Impoverished | 53 | 45 | 40 |
| Veldrassen | 15.9 — Middling | 60 | 47 | 32 |
| Veylac | 19.6 — Middling | 60 | 60 | 38 |

## Ashalai Reef Covenant
Cultivation, fishing and communal land provide basic security with limited imported comforts and medical access. Harbour households can purchase more than inland producers.
Kin councils and elected harbour assemblies protect common land, though local hierarchy and creditor pressure still affect choices.
Distribution: Lower-income households: 85% of residents, SoL 13; Intermediate households: 14% of residents, SoL 18; Privileged households: 1% of residents, SoL 27.
Review pressures: Medical supplies, harvest debt and keeping communal land outside collateral.
Evidence basis: national-current.json → ashalai (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Averholt
Provincial stores buffer cold districts, though mountain households have limited choice and slow supply. Town trades and larger owners have more secure consumption.
Provincial bargaining restrains some central demands but makes protection uneven between districts.
Distribution: Lower-income households: 78% of residents, SoL 13; Intermediate households: 19% of residents, SoL 21; Privileged households: 3% of residents, SoL 37.
Review pressures: Winter stores, reserve rotations and relations with Vardol.
Evidence basis: national-current.json → averholt (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Bellacosta Cantons
Tenant households face debt and restricted access to cleared land while harbour and plantation owners profit from exports. Predictable seasonal tolls offer some relief to trade.
Separate land courts and toll assemblies favour different patrons. Tenants' leverage remains weaker than creditors'.
Distribution: Lower-income households: 82% of residents, SoL 10; Intermediate households: 15% of residents, SoL 19; Privileged households: 3% of residents, SoL 35.
Review pressures: Land debt, toll enforcement and expiry of harvest-season agreements.
Evidence basis: national-current.json → other-otranto-400 (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Brannervaux
Cultivated districts and basin trades provide moderate security where water arrives reliably. Households below disputed gates face sharper uncertainty than prosperous engineering towns.
Water authorities and local assemblies offer remedies, but estate vetoes can delay repairs and shift burdens downstream.
Distribution: Lower-income households: 75% of residents, SoL 13; Intermediate households: 22% of residents, SoL 22; Privileged households: 3% of residents, SoL 38.
Review pressures: Water reliability and whether the maintenance compact reaches excluded estates.
Evidence basis: national-current.json → brannervaux (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Bressavelle Marches
Cultivated valleys and textile or wagon work sustain modest consumption. Repeated tolls reduce ordinary purchasing power while patron-backed towns fare better.
Protections change between lordships, town liberties and clients. Shared manifests ease inspections but leave separate power structures intact.
Distribution: Lower-income households: 79% of residents, SoL 12; Intermediate households: 18% of residents, SoL 20; Privileged households: 3% of residents, SoL 36.
Review pressures: Tolls, foreign subsidies and the cost of secure passage.
Evidence basis: national-current.json → other-vesalius-2790 (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Calvernis Republic
Ports offer varied goods and skilled maintenance work, but household costs depend on imported food and fuel. Banking and shipping families live much better than casual workers.
Restricted franchise privileges commercial families. Reliable contracts and escorts do not amount to equal political influence.
Distribution: Lower-income households: 67% of residents, SoL 16; Intermediate households: 29% of residents, SoL 26; Privileged households: 4% of residents, SoL 45.
Review pressures: Import costs, urban rents, patronage and exclusion from representation.
Evidence basis: national-current.json → calvernis (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Cavressa Principalities
Ordinary households have modest farm and wool incomes with costly winter transport. Charter towns and well-financed shipping houses are appreciably better supplied.
Town privileges protect some merchants; residents outside those charters depend more on estate courts and changing rights of passage.
Distribution: Lower-income households: 81% of residents, SoL 11; Intermediate households: 16% of residents, SoL 19; Privileged households: 3% of residents, SoL 35.
Review pressures: Fodder, toll changes and access to witnessed trading weights.
Evidence basis: national-current.json → other-otranto-700 (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Ceralte Admiralty
Fishing, pilotage and repair work sustain island households; grain and fuel prices depend on shipping. Naval and merchant households have more secure stores than outer communities.
Protection of shipping gives the Admiralty standing, while hereditary and naval offices limit ordinary influence.
Distribution: Lower-income households: 74% of residents, SoL 14; Intermediate households: 23% of residents, SoL 23; Privileged households: 3% of residents, SoL 39.
Review pressures: Grain reliability, convoy coverage and unequal access among islands.
Evidence basis: national-current.json → ceralte (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Cervaud
Agricultural families have modest consumption and lose labour to mobilisation. Skilled town households fare better, but credit dependency limits room for public improvements.
Military prestige and landed privilege weigh heavily on ordinary households. Shorter reserve rotations ease a real burden without removing it.
Distribution: Lower-income households: 80% of residents, SoL 11; Intermediate households: 17% of residents, SoL 19; Privileged households: 3% of residents, SoL 35.
Review pressures: Harvest labour, foreign credit and renewed mobilisation demands.
Evidence basis: national-current.json → cervaud (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Dreissen Wardholds
Winter survival rests on stores, convoy access and reciprocal shelter. Ordinary households have few luxuries; invited hospices improve care in some districts.
Wardens owe protection, but scarcity tests those obligations and can turn requisition into lasting exaction.
Distribution: Lower-income households: 82% of residents, SoL 12; Intermediate households: 16% of residents, SoL 20; Privileged households: 2% of residents, SoL 32.
Review pressures: Store access, hospice provision and temporary levies becoming permanent.
Evidence basis: national-current.json → other-morholt-2190 (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Duchy of Caldrienne
Productive valleys and arsenals sustain employment, but military commitments and elite consumption absorb much of the surplus. Frontier households bear particularly heavy disruption.
Central ducal supervision supplies order with limited popular leverage. Rival estate and arsenal interests do not imply an already collapsing state.
Distribution: Lower-income households: 79% of residents, SoL 12; Intermediate households: 18% of residents, SoL 21; Privileged households: 3% of residents, SoL 40.
Review pressures: Border levies, fuel imports, harvest disruption and military requisitions.
Evidence basis: national-current.json → caldrienne (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Edrask Governorate
Fishing and timber communities depend on winter grain shipments and seasonal work. Settler towns and connected traders generally have better supply than remote communities.
Treaty councils provide some leverage, but unequal land rights and new concessions remain contentious.
Distribution: Lower-income households: 83% of residents, SoL 11; Intermediate households: 14% of residents, SoL 20; Privileged households: 3% of residents, SoL 35.
Review pressures: Grain schedules, concession disputes and equal access to harbour services.
Evidence basis: national-current.json → edrask (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Galdresk
Material consumption is moderate, with shelter and medical institutions improving security beyond what cash output alone suggests. Remote settlements still have less access than defended towns.
Wardens, orders and estates exercise substantial authority, but established shelter and care obligations give residents meaningful expectations.
Distribution: Lower-income households: 78% of residents, SoL 14; Intermediate households: 19% of residents, SoL 21; Privileged households: 3% of residents, SoL 33.
Review pressures: Hospice reach, winter stores and whether service obligations are honoured.
Evidence basis: national-current.json → galdresk (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Gavrel
Most households rely on local agricultural and forest markets with limited purchased comforts. Patronage and fragmented tolls affect access to tools and work.
House courts provide differing protections; there is no equally accessible common remedy or unified authority.
Distribution: Lower-income households: 83% of residents, SoL 10; Intermediate households: 14% of residents, SoL 18; Privileged households: 3% of residents, SoL 34.
Review pressures: House disputes, freight participation and imported repair costs.
Evidence basis: national-current.json → gavrel (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Haldrevik Concessions
Concession workers depend on imported food and employer-linked transport; interruption threatens wages and supplies together. Owners retain a much richer standard despite local losses.
Armed intimidation, lease disputes and contested bonds make redress unreliable. The escrow settlement covers participating claims only.
Distribution: Lower-income households: 82% of residents, SoL 9; Intermediate households: 15% of residents, SoL 20; Privileged households: 3% of residents, SoL 39.
Review pressures: Strike aftermath, Hunter damage, charter enforcement and grain access.
Evidence basis: national-current.json → other-morholt-1880 (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Halskert
Grain-producing households and river towns benefit from food access and trade. Labourers have fewer comforts than commercial families, but storage improvements reduce some seasonal vulnerability.
Commercial and agricultural authorities bargain over water and transport; residents' influence varies with property and locality.
Distribution: Lower-income households: 76% of residents, SoL 14; Intermediate households: 21% of residents, SoL 22; Privileged households: 3% of residents, SoL 36.
Review pressures: Grain prices, water control and the spread of drying improvements.
Evidence basis: national-current.json → halskert (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Karsenne Compact
Skilled engineering and mining support better town consumption than many agricultural neighbours. Imported food and costly coastal transfers erode the benefit for ordinary households.
Autonomous councils offer local voice and defended approaches, with unequal influence among districts and occupations.
Distribution: Lower-income households: 74% of residents, SoL 14; Intermediate households: 23% of residents, SoL 23; Privileged households: 3% of residents, SoL 37.
Review pressures: Mine safety, food imports and freight charges; the proposed railway is not yet a benefit.
Evidence basis: national-current.json → karsenne (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Kelbrun
Plantation output does not translate into comfortable lives for most workers. Grain and livestock districts offer different livelihoods; technical and estate households command far greater purchasing power.
Estate labour obligations and unequal commercial access are central grievances. Delivery arbitration has not settled labour conditions.
Distribution: Lower-income households: 84% of residents, SoL 9; Intermediate households: 13% of residents, SoL 18; Privileged households: 3% of residents, SoL 36.
Review pressures: Coercive obligations, land access and whether machinery gains reach workers.
Evidence basis: national-current.json → kelbrun (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Kingdom of Istrana
Agriculture, textiles and repairs support moderate consumption, with schooling offering skilled prospects. Machinery and fuel imports constrain opportunities outside the ports.
Assembly scrutiny restrains borrowing, but landholding and court merchants retain stronger influence than ordinary workers.
Distribution: Lower-income households: 78% of residents, SoL 14; Intermediate households: 19% of residents, SoL 22; Privileged households: 3% of residents, SoL 37.
Review pressures: Exclusive contracts, school access and the cost of royal borrowing.
Evidence basis: national-current.json → istrana (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## March of Veyrasse
Auvrienne and Serravonne offer skilled work and improving water or railway services; poorer tenants and labourers still have little spare income. Well-connected houses enjoy far greater comfort.
Chartered institutions permit bargaining and advancement through education or patronage. Poor households bear disproportionate dangerous service; influence shapes access to justice.
Distribution: Lower-income households: 76% of residents, SoL 13; Intermediate households: 21% of residents, SoL 22; Privileged households: 3% of residents, SoL 39.
Review pressures: Conscription fairness, wages versus food and rent, and whether civil improvements reach poorer districts. The small rifle trial has no assumed national welfare effect.
Evidence basis: national-current.json → veyrasse (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Merovian Island Republic
Repair trades, cooperative farming and exports support moderate comfort. Seasonal crews and outer communities have more precarious access than settled port households.
An elected assembly offers accountability but its residence and tax franchise excludes some residents.
Distribution: Lower-income households: 73% of residents, SoL 15; Intermediate households: 24% of residents, SoL 23; Privileged households: 3% of residents, SoL 36.
Review pressures: Freight charges, outer representation and foreign-loan burdens.
Evidence basis: national-current.json → merovia (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Nemerai Crown
Terrace grain and fisheries support modest household security with imported plant and fuel limiting choice. Technical schooling creates a small route to skilled work.
Crown decisions require bargains with houses, towns and communal-land custodians; outer communities retain protections against unilateral requisition.
Distribution: Lower-income households: 80% of residents, SoL 14; Intermediate households: 18% of residents, SoL 21; Privileged households: 2% of residents, SoL 34.
Review pressures: School access, budget reform and preservation of island consent.
Evidence basis: national-current.json → nemerai (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Norrakai Moots
Fishing, herding and mutual refuge keep households viable with few manufactured comforts. Short seasons and scarce medicine impose real limits despite strong community support.
Seasonal moots preserve local control and refuge obligations. Low unrest reflects these relationships, not abundant wealth.
Distribution: Lower-income households: 88% of residents, SoL 11; Intermediate households: 11% of residents, SoL 16; Privileged households: 1% of residents, SoL 23.
Review pressures: Shipping windows, imported grain and the capacity to honour refuge obligations.
Evidence basis: national-current.json → norrakai (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Ordelune Overseas Districts
Farming and preserved-food exports support basic livelihoods, but winter isolation limits goods and repairs. Settler and crown-linked households often enjoy better access.
Unequal land and tax arrangements remain despite wider consultation over provisioning.
Distribution: Lower-income households: 83% of residents, SoL 11; Intermediate households: 14% of residents, SoL 20; Privileged households: 3% of residents, SoL 36.
Review pressures: Winter deliveries, disputed leases and distribution of customs income.
Evidence basis: national-current.json → ordelune (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Ossavren successor territories
Interrupted freight, coal fighting and rival tolls make food, heating and regular work unreliable. Secure enclaves and well-connected households retain comforts inaccessible to many residents.
People depend on competing courts and city authorities. Grain agreements help particular routes but do not provide consistent protection across the region.
Distribution: Lower-income households: 84% of residents, SoL 8; Intermediate households: 13% of residents, SoL 16; Privileged households: 3% of residents, SoL 32.
Review pressures: Whether the reopened grain corridor holds, local fighting and arbitrary tolls.
Evidence basis: national-current.json → ossavren (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Ostrevain
Food-producing districts can provision themselves while many agricultural households have little disposable income. Industrial wards offer wages under close supervision; landholding families capture much of the surplus.
Landed recruitment and administrative discipline give order at the expense of ordinary residents' freedom to refuse obligations.
Distribution: Lower-income households: 81% of residents, SoL 11; Intermediate households: 16% of residents, SoL 19; Privileged households: 3% of residents, SoL 38.
Review pressures: Harvest access, recruitment burdens and distribution of seed and transport improvements.
Evidence basis: national-current.json → ostrevain (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Rivessac Coast
Coastal trade and agriculture provide moderate livelihoods. Seasonal crews and inland villages have less predictable access than chartered port households.
Communes and houses keep separate rights; pilot and merchant influence exceeds that of casual workers.
Distribution: Lower-income households: 78% of residents, SoL 13; Intermediate households: 19% of residents, SoL 21; Privileged households: 3% of residents, SoL 36.
Review pressures: Seasonal employment, inland roads and harbour fees.
Evidence basis: national-current.json → other-vesalius-3160 (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Rovengard
Winter stores and valley agriculture support a restrained material life; distant districts have fewer goods and services. Administrative and trading households enjoy much better supply.
Crown protection is valued where it reaches, but distance and unequal access to officials limit practical remedies.
Distribution: Lower-income households: 80% of residents, SoL 12; Intermediate households: 17% of residents, SoL 20; Privileged households: 3% of residents, SoL 37.
Review pressures: Winter provisioning, spare parts and the reach of repair programmes.
Evidence basis: national-current.json → rovengard (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Rovessara
Commercial towns offer varied food, manufactured goods and skilled employment. Rent and import prices press on dock labourers while finance and precision trades support conspicuous wealth.
Commercial representation and functioning contracts coexist with concentrated credit and unequal political access.
Distribution: Lower-income households: 64% of residents, SoL 17; Intermediate households: 31% of residents, SoL 27; Privileged households: 5% of residents, SoL 46.
Review pressures: Imported necessities, urban rents, labour disputes and colonial liabilities.
Evidence basis: national-current.json → rovessara (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Seravelle Littoral
Harbour trade supports relatively comfortable skilled households, while indebted rural producers face foreclosure and expensive necessities. Safer convoy departures help without securing every feeder route.
Commercial conventions protect cargo better than they resolve unequal rural credit or rival seizure claims.
Distribution: Lower-income households: 76% of residents, SoL 12; Intermediate households: 21% of residents, SoL 21; Privileged households: 3% of residents, SoL 38.
Review pressures: Freight security, harvest debt and disputed cargo seizures.
Evidence basis: national-current.json → other-otranto-1450 (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Serevask Republic
Mountain households combine modest goods access with technical and communal institutions. Trade and water arrangements matter strongly to work and provisioning.
Republican institutions retain local legitimacy; inherited debts and disputes constrain what they can deliver.
Distribution: Lower-income households: 75% of residents, SoL 13; Intermediate households: 22% of residents, SoL 22; Privileged households: 3% of residents, SoL 35.
Review pressures: Water releases, repair work and the distribution of debt costs.
Evidence basis: national-current.json → serevask (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Skeldran Hearth Confederacy
Cash incomes and imported comforts are low, but reciprocal shelter, local food and rescue duties buffer hardship. Severe winters still restrict diet and medical access.
Hearth assemblies preserve strong local voice and customary land protection without requiring a wealthy central state.
Distribution: Lower-income households: 86% of residents, SoL 12; Intermediate households: 13% of residents, SoL 17; Privileged households: 1% of residents, SoL 25.
Review pressures: Winter stores, fuel scarcity and whether rescue obligations can be met.
Evidence basis: national-current.json → skeldra (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Talascan Charter Islands
Export wealth sits beside much poorer island households. Shipping and credit controlled by outside firms constrain the benefits of local production.
Village councils retain some land authority, but colonial courts favour stronger commercial access. The levy suspension is a limited concession, not equal treatment.
Distribution: Lower-income households: 83% of residents, SoL 10; Intermediate households: 14% of residents, SoL 22; Privileged households: 3% of residents, SoL 42.
Review pressures: Compulsory levies, common pasture and the mixed inquiry's actual remedies.
Evidence basis: national-current.json → talasca (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Tervayne
Ports offer skilled work, imported goods and commercial opportunity; inland households face slower access and fewer services. Shipping wealth is far from evenly distributed.
Port families and industrial firms dominate national choices, while agricultural districts contest their share of costs.
Distribution: Lower-income households: 68% of residents, SoL 16; Intermediate households: 28% of residents, SoL 25; Privileged households: 4% of residents, SoL 43.
Review pressures: Food and fuel imports, naval taxation and inland transport access.
Evidence basis: national-current.json → tervayne (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Vallessia Cantons
Granaries and market farming support basic security, though requisitions can remove household reserves. Commercial and landed families remain more comfortable.
Elected boards, governors and estate courts compete. Written requisition limits improve recourse only where accepted and enforced.
Distribution: Lower-income households: 79% of residents, SoL 13; Intermediate households: 18% of residents, SoL 21; Privileged households: 3% of residents, SoL 35.
Review pressures: Harvest adequacy, requisition receipts and competing transport demands.
Evidence basis: national-current.json → other-vesalius-2790-1410 (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Vardol
Farm and industrial households bear substantial military demands. Procurement supports some jobs, but frontier uncertainty competes with ordinary household priorities.
Crown and supplier interests carry more weight than poorer residents. De-escalation reduces immediate alarm without ending the burden.
Distribution: Lower-income households: 78% of residents, SoL 12; Intermediate households: 19% of residents, SoL 21; Privileged households: 3% of residents, SoL 39.
Review pressures: Frontier rotation costs, taxation and whether liaison prevents renewed escalation.
Evidence basis: national-current.json → vardol (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Varessan Sea League
Terrace farming, fisheries and shared water rights provide useful security despite dependence on imported engines and medicine. Material choice is narrower than in rich mainland ports.
Island assemblies protect land and elect harbour officers. Customs exemptions and defence levies remain contested between carriers and cultivators.
Distribution: Lower-income households: 79% of residents, SoL 14; Intermediate households: 19% of residents, SoL 21; Privileged households: 2% of residents, SoL 32.
Review pressures: Import access and whether depot concessions shift costs onto farmers.
Evidence basis: national-current.json → varessan (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Varnelle
Delta cultivation and engineering provide moderate material security, with richer commercial ports beside less prosperous agricultural districts. Water and freight failures quickly reach household budgets.
Commercial and water authorities supply useful services but also command powerful bargaining positions over inland customers and workers.
Distribution: Lower-income households: 73% of residents, SoL 14; Intermediate households: 24% of residents, SoL 23; Privileged households: 3% of residents, SoL 39.
Review pressures: Delivery reliability, customs burdens and access to basin repairs.
Evidence basis: national-current.json → varnelle (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Varneselle Estates
Fishing and timber households rely on imported grain and seasonal work. Port merchants and large estates enjoy much greater security than shore crews.
Customary fishing rights remain vulnerable to estate claims; seasonal settlements offer limited protection.
Distribution: Lower-income households: 81% of residents, SoL 11; Intermediate households: 16% of residents, SoL 19; Privileged households: 3% of residents, SoL 35.
Review pressures: Grain freight, shore access and succession disputes.
Evidence basis: national-current.json → other-morholt-2630 (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Varnesk
Skilled mining and industrial work can pay well; ordinary workers remain exposed to hard conditions and imported grain prices. Proprietors benefit disproportionately from mineral sales.
Mining councils and industrial owners offer uneven representation. Disputed concessions and dependence on employer-linked commerce sustain grievances.
Distribution: Lower-income households: 74% of residents, SoL 14; Intermediate households: 23% of residents, SoL 23; Privileged households: 3% of residents, SoL 40.
Review pressures: Grain costs, workplace protection and concession disputes.
Evidence basis: national-current.json → varnesk (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Vaulcerre Basin Leagues
Grain, milling and fertiliser work support households when releases arrive on time. A withheld gate can threaten livelihoods far beyond the immediate dispute.
Separate water commands and councils offer negotiated protection, unevenly enforced across estate boundaries.
Distribution: Lower-income households: 80% of residents, SoL 11; Intermediate households: 17% of residents, SoL 20; Privileged households: 3% of residents, SoL 35.
Review pressures: Gate maintenance, water allocation and enforceability of arbitration.
Evidence basis: national-current.json → other-otranto-1100 (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Veldrassen
Lowland farm households have dependable local produce in ordinary seasons, but rents and levies restrict purchases. Railway and engineering workers have better cash access; court and landed households live far above the mean.
Provincial estates mediate protection and taxation. Bargaining preserves local liberties unevenly and does not give poorer households equal access to influence.
Distribution: Lower-income households: 74% of residents, SoL 13; Intermediate households: 23% of residents, SoL 22; Privileged households: 3% of residents, SoL 40.
Review pressures: Freight reliability, estate levies and access to industrial wages.
Evidence basis: national-current.json → veldrassen (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.

## Veylac
Industry supports substantial skilled wages and urban services, while imported food and fuel make household bills vulnerable. The damaged relay district remains less secure than recovered urban centres.
Municipal representation gives residents channels to contest policy; industrial labour disputes and uneven recovery still matter.
Distribution: Lower-income households: 68% of residents, SoL 16; Intermediate households: 28% of residents, SoL 25; Privileged households: 4% of residents, SoL 42.
Review pressures: Import prices, labour conditions and distribution of Hunter-strike recovery.
Evidence basis: national-current.json → veylac (description, constraints, food culture and dated Year 68 review). The social figures are newly authored estimates, not previously recorded measurements.
