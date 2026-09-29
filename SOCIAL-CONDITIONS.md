# Living standards and public sentiment

Model household-budgets-2, reviewed 05/11/0068 AC43. The earlier national-output proxy is superseded. Living standards now compare disposable household resources, including own produce, with itemised basic-needs baskets. The inputs are explicit estimates where survey evidence is absent. See [household budgets, technology, lifespan and annual update rules](DEVELOPMENT-REFERENCE.md).

Living standard M is the weighted household-budget index: 40 represents the basic basket; 70 twice its resources. Its broad range carries income and price uncertainty. It is not measured poverty or a population percentage. Confidence, civil protection and unrest remain interpretive indices rather than polls. Do not narrate narrow differences or overlapping ranges as established superiority.

## Political and conflict evidence

social-conditions.json records each society's source description, Year 68 review, interpretation and ranges on a common 0–4 rubric. V = political voice × 25; R = civil safeguards × 25. The point estimate uses the midpoint, while the displayed range carries both ends through the formulas. A completely unspecified safeguard is **0–4**, not an asserted average protection score. A wide range therefore means insufficient evidence, not arbitrary precision. Do not narrate its midpoint as an established fact or rank overlapping ranges as proven superiority.

| Level | Political voice | Civil safeguards |
|---|---|---|
| 0 | No meaningful ordinary resident influence demonstrated | Protection absent or overridden by armed/arbitrary power |
| 1 | Indirect, patronal or narrowly privileged access | Particular privileges or weak/contested remedies |
| 2 | Institutional voice for some resident groups; exclusions remain | Working but unequal or locally limited remedies |
| 3 | Broad local participation or effective representative constraints | Enforceable communal, land, shelter or requisition safeguards |
| 4 | Strong, broadly shared local control | Strong recorded protection across the relevant community |

A monarchy is not automatically scored as abusive, and a republic is not automatically democratic. Estates restraining a crown do not prove tenants can restrain their landlords. Ambiguous scope receives a band rather than an invented franchise percentage. Quotes and interpretation appear in each return below. A changed political description stops the build until its coding is reviewed.

Conflict inputs use the **current** conflict register, not its archived editions. Domestic tension U uses 0–4 (×25): 0 no material recorded agitation; 1 disputes/latent tensions; 2 active organised contention; 3 local armed confrontation; 4 sustained civil fighting. Ordinary societies have a 0–1 uncertainty band: absence from a non-exhaustive register does not certify peace. Talasca is 2–3 following levy refusal and limited relief; its mainland ruler Rovessara does not inherit colonial unrest as domestic fighting. Haldrevik is 2–3 after partial settlements; Ossavren is 3–4. Seravelle's seizures add 1–2; Ceralte is not labelled an insurgency or a proven raider sponsor.

Security pressure uses the same 0–4 span: 0 no documented material threat, 1 intermittent exposure, 2 persistent constrained security, 3 active local armed danger, 4 sustained internal conflict. The common 1–2 background reflects intermittent Hunter violence and uncertain local coverage. Cressault's affected national returns use 2–3, Ossavren 3–4 and Haldrevik 2–3. Q = 100 − security pressure × 25. National scores do not make every settlement a battlefield. Border fighting affects confidence through security; it does not automatically mean domestic rebellion. The current theatre list/status is checked during every build; changed situations or statuses require an evidence review.

## Public sentiment calculations

- Confidence = 30% household living standard + 25% political voice + 15% fiscal resilience + 20% security + 10% output-trend indicator.
- Civil protection = 80% documented safeguards + 20% accessible ordinary care. Care access is a provisional household-service estimate, not a medical technology rating.
- Unrest pressure = 35% inverse household living-standard index + 25% exclusion from voice + 25% documented domestic tension + 15% fiscal vulnerability. It measures pressure, not the probability or size of a rebellion.

Fiscal resilience remains 40% liquidity (reserve months relative to three months), 30% interest room (interest below 25% of receipts), and 30% deficit funding cover. Capacity(x,a) = 100x/(x+a). Deficit cover uses reserves relative to one annual deficit, or 100 for a balanced/surplus budget. These are shared interpretive weights; they do not reduce household income automatically. Output trend indicator is 50 + ten times annual percentage growth, bounded 0–100, used only in confidence. Army size, defence spending and domestic import coverage are not household-welfare scores.

Political, security and household scenario ranges are propagated together. They do not include every uncertainty or establish statistical confidence. Public accounts, distribution, social rights, daily life and recorded grievances remain available beside the indices. A prosperous authoritarian society may have comfortable households and weak civil safeguards; a materially poor community may retain trust in local institutions.

## Annual maintenance

The development ledger requires yearly reviews of wages, prices, employment, distribution, services, technology and accounting for every return. Recalculate these indices from those inputs, never from last year's headline. Political reviews in social-reviews.json require dated evidence and exact old/new values. Changed national descriptions and conflict evidence still stop the build until their interpretation is reviewed. No automatic inflation, tax rise, shortage or revolt is enacted by a rebuild. Imports that arrive are supply, not hunger; discontent and support require narrative evidence to become events.


## Comparable returns

All scores use 0–100. Brackets show the range produced by the documented qualitative evidence bands, not statistical confidence intervals. Living standards use explicitly estimated household budgets; ranges carry income/price assumptions and political evidence, not survey confidence.

| Society | Living standard | Confidence | Civil protection | Unrest pressure |
|---|---:|---:|---:|---:|
| Ashalai Reef Covenant | 38 [22–53] | 56 [46–66] | 78 [68–88] | 38 [26–50] |
| Averholt | 39 [23–54] | 50 [40–60] | 61 [51–71] | 45 [33–56] |
| Bellacosta Cantons | 41 [26–56] | 51 [41–61] | 39 [29–49] | 44 [32–55] |
| Brannervaux | 40 [24–55] | 51 [40–61] | 62 [52–72] | 44 [32–56] |
| Bressavelle Marches | 36 [20–51] | 46 [36–56] | 40 [30–50] | 48 [36–60] |
| Calvernis Republic | 47 [31–61] | 53 [43–63] | 53 [13–93] | 41 [29–52] |
| Cavressa Principalities | 43 [27–58] | 50 [39–60] | 39 [29–49] | 45 [33–56] |
| Ceralte Admiralty | 44 [29–59] | 45 [35–55] | 51 [11–91] | 49 [37–60] |
| Cervaud | 35 [19–50] | 38 [28–49] | 51 [11–91] | 56 [45–68] |
| Dreissen Wardholds | 43 [27–58] | 51 [41–61] | 49 [29–69] | 44 [32–55] |
| Duchy of Caldrienne | 41 [25–56] | 37 [27–47] | 51 [11–91] | 52 [41–64] |
| Edrask Governorate | 44 [28–59] | 52 [42–62] | 39 [29–49] | 42 [30–54] |
| Galdresk | 36 [20–51] | 50 [39–60] | 63 [53–73] | 45 [33–56] |
| Gavrel | 40 [24–55] | 42 [31–52] | 40 [30–50] | 53 [41–64] |
| Haldrevik Concessions | 41 [26–56] | 45 [35–55] | 39 [29–49] | 57 [46–69] |
| Halskert | 37 [21–52] | 50 [40–60] | 50 [10–90] | 44 [33–56] |
| Karsenne Compact | 44 [28–59] | 53 [39–66] | 51 [11–91] | 41 [27–56] |
| Kelbrun | 40 [24–55] | 50 [40–60] | 30 [10–50] | 45 [33–57] |
| Kingdom of Istrana | 46 [30–61] | 57 [47–67] | 60 [50–70] | 36 [25–48] |
| March of Veyrasse | 41 [26–56] | 45 [35–55] | 41 [31–51] | 44 [32–55] |
| Merovian Island Republic | 40 [24–54] | 57 [47–67] | 51 [11–91] | 37 [26–49] |
| Nemerai Crown | 43 [28–58] | 58 [48–68] | 79 [69–89] | 36 [25–48] |
| Norrakai Moots | 33 [18–48] | 62 [52–72] | 77 [67–87] | 32 [21–44] |
| Ordelune Overseas Districts | 42 [26–57] | 52 [41–62] | 39 [29–49] | 42 [31–54] |
| Ossavren successor territories | 32 [17–47] | 29 [16–42] | 31 [11–51] | 73 [59–88] |
| Ostrevain | 37 [22–52] | 40 [30–50] | 50 [10–90] | 54 [43–66] |
| Rivessac Coast | 36 [21–51] | 51 [40–61] | 40 [30–50] | 44 [33–56] |
| Rovengard | 35 [19–50] | 49 [39–59] | 51 [11–91] | 45 [34–57] |
| Rovessara | 49 [33–63] | 54 [44–64] | 53 [13–93] | 40 [28–51] |
| Seravelle Littoral | 42 [26–57] | 52 [41–62] | 39 [29–49] | 49 [37–60] |
| Serevask Republic | 36 [21–51] | 48 [29–68] | 52 [12–92] | 46 [26–67] |
| Skeldran Hearth Confederacy | 35 [20–50] | 63 [52–73] | 78 [68–88] | 31 [20–43] |
| Talascan Charter Islands | 47 [31–62] | 53 [42–63] | 30 [10–50] | 54 [42–65] |
| Tervayne | 46 [30–60] | 51 [41–61] | 53 [13–93] | 43 [32–55] |
| Vallessia Cantons | 36 [21–51] | 54 [44–64] | 60 [50–70] | 40 [29–52] |
| Vardol | 39 [24–54] | 41 [30–51] | 50 [10–90] | 53 [42–65] |
| Varessan Sea League | 45 [29–59] | 65 [55–75] | 79 [69–89] | 29 [17–40] |
| Varnelle | 40 [24–55] | 52 [41–62] | 52 [12–92] | 43 [32–55] |
| Varneselle Estates | 41 [26–56] | 50 [40–60] | 39 [29–49] | 44 [32–55] |
| Varnesk | 44 [29–59] | 53 [42–63] | 52 [12–92] | 41 [30–53] |
| Vaulcerre Basin Leagues | 42 [26–57] | 51 [40–61] | 59 [49–69] | 43 [32–55] |
| Veldrassen | 44 [28–58] | 51 [40–61] | 52 [12–92] | 44 [32–55] |
| Veylac | 45 [30–60] | 57 [47–67] | 52 [12–92] | 37 [26–49] |

## Ashalai Reef Covenant
Communal feasts affirm obligations between councils; everyday cooking varies by island.
Kin and elected harbour councils negotiate covenants; foreign creditors cannot seize communal land.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 17.48 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 23.61 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 60.07 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 21.0 | L-eq / month |
| Skilled and salaried households · needs basket | 21.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 21.0 | L-eq / month |
| Accessible ordinary care | 40 | % · provisional access estimate |
| Reliable clean water | 37 | % · provisional access estimate |
| Treasury reserves | 2.6 | months of public spending |
| Political voice | [2, 3] | / 4 evidence band |
| Civil safeguards | [3, 4] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 40; resilience 75.81; voice 62.5; rights 87.5; tension 12.5; security 62.5; growth 54.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → ashalai. Political evidence reviewed 05/11/0068 AC43. Source description: The Ashalai Reef Covenant confederates hereditary kin councils, elected harbour assemblies and inland farming communities. Its gathering at Ashala settles foreign treaties, fishing boundaries and mutual defence without extinguishing local law or language. Islanders have long cultivated wet valleys and traded between reefs. Imported engines, rifles and radios are maintained in port workshops; heavy industry is limited. Foreign firms lease warehouses through negotiated covenants, with no right to seize communal land. Harbour merchants favour broader credit access, while inland councils resist debts secured against future harvests.
Year review: Ashala and Nalavai covenants negotiated engine-spare deliveries and medical credit while preserving common-land exclusions from collateral. Local pilots coordinated supply calls. The agreement improves access but leaves imported machinery dependence and kin-based jurisdiction intact.

## Averholt
Public ovens are meeting places as well as fuel economies. A dispute over milling rights can be discussed for an entire supper without anyone naming its political purpose.
Provincial institutions protect local stores and troops against central demands; this is collective, not universal household protection.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 19.85 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 29.23 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 73.57 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 24.0 | L-eq / month |
| Skilled and salaried households · needs basket | 24.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 24.0 | L-eq / month |
| Accessible ordinary care | 55 | % · provisional access estimate |
| Reliable clean water | 51 | % · provisional access estimate |
| Treasury reserves | 2.88 | months of public spending |
| Political voice | [1, 2] | / 4 evidence band |
| Civil safeguards | [2, 3] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 55; resilience 70.13; voice 37.5; rights 62.5; tension 12.5; security 62.5; growth 62.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → averholt. Political evidence reviewed 05/11/0068 AC43. Source description: Averholt is a predominantly inland realm held together by provincial bargains. Avercenne conducts common government, Rocavane concentrates mountain engineering, and lower cultivated districts supply the cold upland towns. Rivalry with Vardol competes with domestic defence for resources. Western rail links support trade with Tervayne, while Chalicchio's road reaches Karsenne and the eastern Marches. Provincial institutions protect their own stores and troops, limiting what the central government can concentrate elsewhere. Agricultural merchants, upland industrial firms and landed councils thus contribute different kinds of strength. The realm is a substantial neighbour with internal commitments, not a continent-wide power waiting to absorb every smaller state. Bravessac provides a charted coastal gateway, with defended access to Vetenavaux. Claims administered by the northern coastal province; fishing landings and seasonal shelters receive supplies from Bravessac.
Year review: Avercenne answered Vardol’s Month 8 exercise with precautionary garrison rotations, then accepted reciprocal exercise notices. Rocavane prioritised lorry, carriage and field-gun repair over fleet or armour expansion. The Chalicchio road remained open to cleared trade; no general mobilisation or battle followed.
Theatre vardol-averholt (12/11/0068 AC43): Armed rivalry; reciprocal exercise notices. Vardol’s Month 8 frontier exercise prompted precautionary Averholt rotations. Month 9 liaison observers and advance exercise notices reduced the immediate alarm. Territorial claims and permanent garrisons remain.

## Bellacosta Cantons

Commercial assemblies and separate land courts exist, while tenant debt and plantation checkpoints limit household leverage.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 18.92 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 25.8 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 64.54 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 21.0 | L-eq / month |
| Skilled and salaried households · needs basket | 21.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 21.0 | L-eq / month |
| Accessible ordinary care | 44 | % · provisional access estimate |
| Reliable clean water | 41 | % · provisional access estimate |
| Treasury reserves | 2.33 | months of public spending |
| Political voice | [1, 2] | / 4 evidence band |
| Civil safeguards | [1, 2] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 44; resilience 70.03; voice 37.5; rights 37.5; tension 12.5; security 62.5; growth 62.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → other-otranto-400. Political evidence reviewed 05/11/0068 AC43. Source description: The cantons grew out of harbour and plantation charters left without a royal guarantor after the last major culling. Jougrenne convenes the coastal toll assembly; Nantac administers a separate inland land court. Neither can tax the other’s households. Harbour dues fund escorts while plantation owners pay for roads and demand control of the checkpoints. Veldrassen buys tropical produce and timber here, but its purchasing agents face competing canton tariffs rather than a single ministry. Tenant disputes centre on debt and access to cleared farmland; the assembly meets over commercial quarrels, not to command a national army. Lorrevento provides a charted coastal gateway, with defended access to Chignoro. Separate canton harbour dependencies; local fishing rights and harbour dues remain with the charter communities. Charted island harbours: Vessantine.
Year review: Jougrenne brokers and Nantac land courts agreed a harvest-season toll schedule on participating roads. Lorrevento merchants can quote those journeys with fewer ad hoc charges. Rival toll holders and plantation jurisdictions remain; no common army or permanent customs union was created.

## Brannervaux
Floodplain gardens supply onions and beans. Fish smoking and grain warehouses make the river ports vital even to communities beyond the floodplain.
Member cities and estates retain vetoes; the water compact creates negotiated obligations, not universal representation.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 20.32 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 29.94 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 75.01 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 24.0 | L-eq / month |
| Skilled and salaried households · needs basket | 24.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 24.0 | L-eq / month |
| Accessible ordinary care | 60 | % · provisional access estimate |
| Reliable clean water | 56 | % · provisional access estimate |
| Treasury reserves | 2.81 | months of public spending |
| Political voice | [1, 2] | / 4 evidence band |
| Civil safeguards | [2, 3] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 60; resilience 72.89; voice 37.5; rights 62.5; tension 12.5; security 62.5; growth 58.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → brannervaux. Political evidence reviewed 05/11/0068 AC43. Source description: Brannervaux is a federation of basin cities, landed districts and water authorities. Rivessole hosts common government; Molessac's pumping and engineering works turn the management of scarce or badly timed water into a major export industry. Productive cultivation coexists with dry rain-shadow districts dependent on imported food and controlled supplies. Members cooperate over transport, maintenance and defence while retaining powers that can delay a common decision. Trade with Veldrassen's factories and neighbouring agricultural states is extensive. The federation is confined to its own territories: neither its river institutions nor its name imply rule over Otranto as a whole.
Year review: Molessac crews restored worn lock gates and pump drives on the principal working waterways. A participating water-estate compact now coordinates maintenance windows and release notices; other estates retain their vetoes. Delivery became more predictable without adding a new navigable canal or enlarging the federal army.

## Bressavelle Marches

Town liberties and councils exist within fragmented lordships and incompatible toll jurisdictions.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 18.64 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 27.4 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 69.85 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 24.0 | L-eq / month |
| Skilled and salaried households · needs basket | 24.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 24.0 | L-eq / month |
| Accessible ordinary care | 52 | % · provisional access estimate |
| Reliable clean water | 47 | % · provisional access estimate |
| Treasury reserves | 1.56 | months of public spending |
| Political voice | [1, 2] | / 4 evidence band |
| Civil safeguards | [1, 2] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 52; resilience 54.69; voice 37.5; rights 37.5; tension 12.5; security 62.5; growth 54.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → other-vesalius-2790. Political evidence reviewed 05/11/0068 AC43. Source description: The western marches form a belt of fortified lordships, town liberties and cultivated valleys between larger powers. Temevaux’s command guards a road junction; Malinne’s council controls a different customs district. Neither speaks for the entire belt. Tervayne merchants finance road repairs in exchange for bonded warehouses, while inland patrons subsidise rival toll houses. Small rulers survive by alternating clients and keeping neighbouring courts divided. Textile finishing, estate agriculture and wagon repair support a population far larger than its thinly charted principal towns suggest. A traveller’s permit may be valid for one bridge and useless at the next. Orsavie provides a charted coastal gateway, with defended access to Balbrenne. Chartered island lordships tied to the western marches by supply contracts; Tervayne has commercial privileges, not sovereignty. Charted island harbours: Lorvesset.
Year review: Temevaux road authorities and Malinne customs offices adopted a shared transit manifest for participating carriers. Tervayne-backed warehouse agents extended repair and storage scheduling at Orsavie. The agreement reduces duplicate inspections without removing separate toll jurisdictions or creating through-rail service.

## Calvernis Republic
Dockside stalls sell fried small fish in paper. A merchant’s citrus preserves may have travelled farther than the guests eating them.
A restricted franchise favours shipping, banking and industrial families; civil remedies for excluded households are unspecified.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 24.85 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 36.79 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 88.95 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 25.0 | L-eq / month |
| Skilled and salaried households · needs basket | 25.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 25.0 | L-eq / month |
| Accessible ordinary care | 63 | % · provisional access estimate |
| Reliable clean water | 65 | % · provisional access estimate |
| Treasury reserves | 5.26 | months of public spending |
| Political voice | [1, 2] | / 4 evidence band |
| Civil safeguards | [0, 4] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 63; resilience 78.89; voice 37.5; rights 50.0; tension 12.5; security 62.5; growth 57.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → calvernis. Political evidence reviewed 05/11/0068 AC43. Source description: Miravelle is the seat of a republic whose restricted franchise favours shipping, banking and industrial families. Harbour revenues, ship maintenance and manufacturing support convoy escorts, coastal guns, marines and maritime aircraft. Smaller towns supply its commercial ports without erasing rival patronage networks. Veyrasse is a customer and competitor; an alternative outlet for Karsenne could redirect freight and toll income. No agreement has completed that proposed railway. Cavrelune provides a charted coastal gateway, with defended access to Miravelle.
Year review: Miravelle yards completed replacement coastal escort tonnage and Cavrelune repairers expanded scheduled engine overhaul. Insurers began recognising participating convoy notices. The Karsenne railway remained a surveyed proposal subject to finance and agreement, not an operating shortcut for the completed expedition.

## Cavressa Principalities

Market charters protect merchants from estate levies; this recorded privilege is not universal protection.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 19.53 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 26.71 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 66.4 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 21.0 | L-eq / month |
| Skilled and salaried households · needs basket | 21.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 21.0 | L-eq / month |
| Accessible ordinary care | 46 | % · provisional access estimate |
| Reliable clean water | 41 | % · provisional access estimate |
| Treasury reserves | 1.83 | months of public spending |
| Political voice | [1, 2] | / 4 evidence band |
| Civil safeguards | [1, 2] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 46; resilience 61.42; voice 37.5; rights 37.5; tension 12.5; security 62.5; growth 58.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → other-otranto-700. Political evidence reviewed 05/11/0068 AC43. Source description: A chain of small courts and charter towns occupies the southwestern approaches. Collengo’s market charter protects merchants from estate levies, while the lords around Peregia claim payment for escorting their wagons. Winter fodder and access through the uplands matter more than distant dynastic titles. Albaret brokers wool and preserved food between the courts. Marriage contracts frequently change toll rights without moving a border; merchants employ local advocates to interpret them. Southern sea trade offers an alternative to the roads, but only to houses able to finance a shipment. Vellorito provides a charted coastal gateway, with defended access to Totarosco. Dependencies of individual coastal principalities, linked by a limited pilotage compact rather than a new island kingdom. Charted island harbours: Monteliva.
Year review: Collengo and Peregia brokers coordinated fodder contracts and wool grading before winter. Albaret factors now use witnessed weights on participating sales. Mountain supply remains seasonal and individual lords retain their forces; equipment turnover leaves the rounded regional military return broadly level.

## Ceralte Admiralty
Islanders know several preparations of the same catch. Grain shortages change the size of a loaf before they change a naval ration.
Hereditary protector, naval council and governors govern; general household representation and remedies are unspecified.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 22.57 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 33.35 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 81.94 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 24.0 | L-eq / month |
| Skilled and salaried households · needs basket | 24.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 24.0 | L-eq / month |
| Accessible ordinary care | 57 | % · provisional access estimate |
| Reliable clean water | 59 | % · provisional access estimate |
| Treasury reserves | 3.46 | months of public spending |
| Political voice | [0, 1] | / 4 evidence band |
| Civil safeguards | [0, 4] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 57; resilience 72.04; voice 12.5; rights 50.0; tension 12.5; security 62.5; growth 54.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → ceralte. Political evidence reviewed 05/11/0068 AC43. Source description: Dalmor is the fortified harbour and seat of a hereditary protector, senior naval council and island governors. Fishing, pilotage, convoy services and repair yards sustain the chain, while imported grain remains essential. Torpedo craft, mine warfare and knowledge of difficult waters offset limited land resources. Island communities depend on shipping rather than a mainland-style road network. Treaty cooperation coexists with accusations of privateering; no allegation proves official sponsorship.
Year review: Dalmor, Bellavara and Montelisse coordinated pilot notices, fuel stocks and repair slots through the established ports. Replacement patrol tonnage entered service and worn machinery was retired. Admiralty escorts protect selected sailings; alleged state support for Seravelle raiders remains unproved.
Theatre maritime (12/11/0068 AC43): Maritime raiding; stronger convoy cooperation. Participating Seravelle ports began coordinated departures, shared seizure notices and escort cooperation in Month 6. Main-axis exposure declined while raiders shifted toward smaller feeders and isolated sailings. Ceralte’s sponsorship of raiders remains unproved.

## Cervaud
Ration bread and pickled vegetables dominate remote posts. Market-day sausages are a small luxury that survives frequent changes of uniform.
Hereditary court and officer institutions dominate; no general franchise or civil remedy is described.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 18.12 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 26.61 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 68.23 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 24.0 | L-eq / month |
| Skilled and salaried households · needs basket | 24.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 24.0 | L-eq / month |
| Accessible ordinary care | 54 | % · provisional access estimate |
| Reliable clean water | 48 | % · provisional access estimate |
| Treasury reserves | 1.1 | months of public spending |
| Political voice | [0, 1] | / 4 evidence band |
| Civil safeguards | [0, 4] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 54; resilience 44.2; voice 12.5; rights 50.0; tension 12.5; security 62.5; growth 57.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → cervaud. Political evidence reviewed 05/11/0068 AC43. Source description: Cervaud is a hereditary duchy whose court and officer institutions occupy Charvessant. Vezarolle's workshops support an army unusually important to public life, but cultivated lowlands, forest produce and upland farming sustain the civilian population. The duke bargains with larger Veldrassen and Ostrevain rather than enjoying complete strategic independence. Their credit and arms help preserve the frontier while giving foreign purchasers influence. Border markets also connect Cervaud with smaller neighbouring authorities. Rank and military service carry prestige, yet merchants, farmers and workshop households have livelihoods extending across the same boundaries that officers are expected to defend.
Year review: Charvessant renewed its neutrality and transit arrangements while Vezarolle workshops concentrated on gun-carriage and wagon repairs. Shorter reserve rotations returned more workers to the harvest. Existing garrisons remain; neither larger neighbour obtained basing rights through this review.

## Dreissen Wardholds

Civilian assemblies contest requisitions; shelter duties and mutual stores exist but performance is disputed under scarcity.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 19.54 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 26.73 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 66.44 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 21.0 | L-eq / month |
| Skilled and salaried households · needs basket | 21.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 21.0 | L-eq / month |
| Accessible ordinary care | 45 | % · provisional access estimate |
| Reliable clean water | 47 | % · provisional access estimate |
| Treasury reserves | 2.57 | months of public spending |
| Political voice | [1, 2] | / 4 evidence band |
| Civil safeguards | [1, 3] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 45; resilience 67.68; voice 37.5; rights 50.0; tension 12.5; security 62.5; growth 63.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → other-morholt-2190. Political evidence reviewed 05/11/0068 AC43. Source description: Dananske, Dreinvar and Ferorvik anchor separate wardholds along the northern approaches. Each warden owes shelter to the villages that provision a fortress, but the obligation is disputed when stores run short. Their annual muster negotiates convoy schedules and exchanges hostages against broken promises; it does not elect a king. Galdresk medical houses maintain small hospices by invitation. Imported grain is strategically more important than ceremonial claims to the iceward interior. Officers measure influence in serviceable engines and winter stores, while civilian assemblies try to keep temporary requisitions from becoming permanent rent. Veltroven provides a charted coastal gateway, with defended access to Kerenvenne. Claims of adjacent wardholds, maintained by fishing visits and seasonal convoy shelters rather than continuous occupation.
Year review: Dananske, Dreinvar and Ferorvik wardholds renewed mutual winter-store access and hospice referrals with Galdresk. Veltroven assembled shared replacement fittings for the next shipping season. The agreement binds participating holds, not a newly restored monarchy; military totals remain dispersed.

## Duchy of Caldrienne
Army purchasing can empty market stalls before a mobilisation. Housewives argue over whether a proper sour-pot should contain tomato, an imported coastal habit.
Ducal control is centralised around estate and arsenal interests; no general resident remedy is established.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 20.9 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 30.82 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 76.81 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 24.0 | L-eq / month |
| Skilled and salaried households · needs basket | 24.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 24.0 | L-eq / month |
| Accessible ordinary care | 57 | % · provisional access estimate |
| Reliable clean water | 63 | % · provisional access estimate |
| Treasury reserves | 1.78 | months of public spending |
| Political voice | [0, 1] | / 4 evidence band |
| Civil safeguards | [0, 4] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [2, 3] | / 4 evidence band |

Calculated components (0–100): health 57; resilience 56.02; voice 12.5; rights 50.0; tension 12.5; security 37.5; growth 60.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → caldrienne. Political evidence reviewed 05/11/0068 AC43. Source description: Valdrec houses the ducal administration and principal army depots. Productive valleys support estate agriculture and armament towns; the state fields strong infantry, artillery and a comparatively large armoured force. Ducal supervision is more centralised than in Veyrasse, though estate and arsenal interests still compete for resources. The unresolved Cressault claim strains an armed truce. Northern obligations and imports of Karsenne ore prevent its government from directing every resource against the March. Cressavelle provides a charted coastal gateway, with defended access to Valdrec.
Year review: Valdrec’s depots accepted replacement armour, aircraft and artillery while withdrawing worn equipment. Cressault commanders completed local crossing and irrigation repairs after exchanges of fire in Months 3–4, retaining reinforced posts under the armistice. The force remains much larger than Veyrasse’s; no public intelligence purge or proven collapse of command followed the covert cell’s report.
Theatre cressault (12/11/0068 AC43): Intermittent fighting. Patrol and irrigation-control clashes were followed by repairs and a limited crossing-notice arrangement between local commanders in Month 6. The armistice still holds at national level; fortified posts and occasional local fire remain. Neither side has settled sovereignty.

## Edrask Governorate
Northern stations ration imported flour through winter; southern markets offer more variety.
Treaty councils can resist concessions but inhabitants have unequal land rights under colonial government.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 20.08 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 27.54 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 68.08 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 21.0 | L-eq / month |
| Skilled and salaried households · needs basket | 21.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 21.0 | L-eq / month |
| Accessible ordinary care | 47 | % · provisional access estimate |
| Reliable clean water | 48 | % · provisional access estimate |
| Treasury reserves | 2.51 | months of public spending |
| Political voice | [1, 2] | / 4 evidence band |
| Civil safeguards | [1, 2] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 47; resilience 76.41; voice 37.5; rights 37.5; tension 12.5; security 62.5; growth 54.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → edrask. Political evidence reviewed 05/11/0068 AC43. Source description: Rovengard’s Edrask Governorate holds the inhabited eastern chain through a governor, harbour garrisons and treaties with older island councils. Fishing communities, timber districts and settler towns have different land rights; some councils accept crown arbitration while resisting new concessions. Timber and preserved fish fund northern weather stations. Defence rests partly on visiting Rovengard ships, which are not permanent additions to the island fleet. Southern ports trade with Istrana; northern calls close seasonally. The governor’s map claim does not imply continuous occupation of mountain interiors.
Year review: Edrask and Havren renewed timber-loading and winter grain schedules with Rovengard. Visiting technicians completed mooring and signal repairs before seasonal withdrawal. Visiting mainland warships are excluded from the colony’s locally assigned fleet total.

## Galdresk
Healing traditions do not make every herb magical. Supplies are dated and inspected; winter hospitality can impose a serious obligation on an isolated house.
Chartered institutions owe shelter, patrol and care, but access is not universal and ordinary electoral voice is unspecified.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 18.68 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 27.45 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 69.94 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 24.0 | L-eq / month |
| Skilled and salaried households · needs basket | 24.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 24.0 | L-eq / month |
| Accessible ordinary care | 65 | % · provisional access estimate |
| Reliable clean water | 50 | % · provisional access estimate |
| Treasury reserves | 2.95 | months of public spending |
| Political voice | [1, 2] | / 4 evidence band |
| Civil safeguards | [2, 3] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 65; resilience 76.16; voice 37.5; rights 62.5; tension 12.5; security 62.5; growth 56.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → galdresk. Political evidence reviewed 05/11/0068 AC43. Source description: Galdresk is a wardenship of chartered orders, estates and civilian towns. Grevallier's medical and teaching institutions and Verniselle's instrument makers give it influence disproportionate to its small industrial base. Farming districts below the colder uplands help provision isolated communities; railways and negotiated access remain essential. Some houses preserve the older arts alongside practical medicine, but genuine practitioners are scarce and do not constitute a mass magical army. Neighbouring rulers value trained personnel and advice. Within Galdresk, obligations of shelter, patrol and care give institutions social authority without making every resident an initiate or every town a monastery. Orlavik provides a charted coastal gateway, with defended access to Millvik. Wardenship navigation and shelter claims. Seasonal landings and small service crews do not imply a dense iceward population.
Year review: Grevallier teaching houses completed another supervised healer and ordinary medical-assistant intake. Verniselle instrument makers standardised a small range of repairable surgical tools. Referral letters and duplicated teaching notes circulate between participating houses; neither a national psychic register nor a universal healing service exists.

## Gavrel
Hospitality includes bread broken by the host, but its quality distinguishes an honoured guest from a hired messenger. Poor tenants substitute lentils for goat.
House courts and patronage determine access; separate charters provide limited rather than general recourse.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 18.23 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 24.75 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 62.4 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 21.0 | L-eq / month |
| Skilled and salaried households · needs basket | 21.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 21.0 | L-eq / month |
| Accessible ordinary care | 48 | % · provisional access estimate |
| Reliable clean water | 42 | % · provisional access estimate |
| Treasury reserves | 1.35 | months of public spending |
| Political voice | [0, 1] | / 4 evidence band |
| Civil safeguards | [1, 2] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 48; resilience 55.39; voice 12.5; rights 37.5; tension 12.5; security 62.5; growth 57.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → gavrel. Political evidence reviewed 05/11/0068 AC43. Source description: Gavrel is a group of chartered march houses with limited common institutions at Gavrielle. Each house retains its own courts and levies; Mesrienne's workshops and local markets connect their economies without erasing that autonomy. Former federal links to Serevask survive as railways, debts and commercial relationships. Varnelle and the southern cantons offer additional buyers for agricultural and forest products. Local guarantors and patronage matter to travel and trade because no single ministry controls every transaction. The combined return describes their shared resources, while actual military cooperation depends on agreements among houses rather than an automatic unified command. Montalive provides a charted coastal gateway, with defended access to Lesigne. Dependencies of individual march houses under a common coastal supply compact; no unified Gavrel navy or crown is implied. Charted island harbours: Loravise.
Year review: Several Gavrielle march houses joined the basin notice scheme and recognised each other’s declared freight seals. Other houses stayed outside. Mesrienne repairers benefited from more predictable orders; this is cooperation between courts, not a unified national government or a larger combined army.

## Haldrevik Concessions

Charter lawsuits and escrow exist alongside unresolved armed intimidation; partial settlement is not general protection.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 18.89 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 25.75 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 64.43 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 21.0 | L-eq / month |
| Skilled and salaried households · needs basket | 21.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 21.0 | L-eq / month |
| Accessible ordinary care | 44 | % · provisional access estimate |
| Reliable clean water | 46 | % · provisional access estimate |
| Treasury reserves | 1.83 | months of public spending |
| Political voice | [1, 2] | / 4 evidence band |
| Civil safeguards | [1, 2] | / 4 evidence band |
| Domestic tension | [2, 3] | / 4 evidence band |
| Security pressure | [2, 3] | / 4 evidence band |

Calculated components (0–100): health 44; resilience 64.26; voice 37.5; rights 37.5; tension 62.5; security 37.5; growth 59.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → other-morholt-1880. Political evidence reviewed 05/11/0068 AC43. Source description: Concession houses hold time-limited rights to timber, minerals and fuel rather than sovereignty over every inhabitant. Asanetz keeps the surviving charter archive; Alauvenne houses one of the armed inspection posts. A house can own a railway and still owe rent to the community beneath it. Varnesk firms provide machinery and credit, exchanging technical dependence for preferred ore contracts. Charter renewals provoke strikes, armed intimidation and lawsuits over restoration bonds. Settlements outside a concession bargain for patrols in return for provisions; a company’s withdrawal can be more frightening than its arrival. Trelovre provides a charted coastal gateway, with defended access to Arinrin. Island shore communities under Haldrevik charter protection. Concession leases cover named working sites, not ownership of all inhabitants. Charted island harbours: Rovensac.
Year review: Armed renewal disputes interrupted some concessions in Month 2. A Month 6 escrow-and-inspection settlement reopened participating sites; a 03/07/0068 Hunter strike then destroyed a remote repair shed and stores. Varnesk replacements restored basic workings by Month 8, but armed vehicles and guns remained below the opening serviceable return. Nonparticipating claims are unresolved.
Theatre haldrevik (12/11/0068 AC43): Localised armed conflict; partial settlements. Month 2 renewal clashes led to a Month 6 escrow and inspection compromise at participating concessions. Those sites resumed work, while excluded claims still produce intimidation and occasional armed confrontations. A separate Month 7 Hunter strike delayed recovery at one remote repair site.

## Halskert
Smokehouses fill before freeze-up. Spring fish suppers mark reopened navigation and the arrival of news as much as the season’s catch.
River, commercial and elected port authorities bargain; general resident remedies remain unspecified.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 18.91 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 27.81 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 70.69 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 24.0 | L-eq / month |
| Skilled and salaried households · needs basket | 24.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 24.0 | L-eq / month |
| Accessible ordinary care | 52 | % · provisional access estimate |
| Reliable clean water | 49 | % · provisional access estimate |
| Treasury reserves | 3.81 | months of public spending |
| Political voice | [1, 2] | / 4 evidence band |
| Civil safeguards | [0, 4] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 52; resilience 79.5; voice 37.5; rights 50.0; tension 12.5; security 62.5; growth 54.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → halskert. Political evidence reviewed 05/11/0068 AC43. Source description: Halskert is a republic of river towns, agricultural districts and commercial authorities. Orsendal coordinates government and grain trade; Tresselund manufactures equipment for farms and water works. Productive temperate districts make the republic an important supplier to colder neighbours, while warmer pockets add different crops to its exports. Mill owners, merchants and water authorities bargain over maintenance, freight and taxation. Its transport experience supports defence, but fuel imports and seasonal conditions constrain distant operations. Galdresk buys provisions and trades specialist goods, while Rovengard is both a customer and competitor. Civilian food production is a source of power here, not background scenery. Seldavre provides a charted coastal gateway, with defended access to Orsendal. Republican grain-shipping dependencies with elected port boards and permanent fishing settlements. Charted island harbours: Seldren.
Year review: Tresselund completed repairs to grain-drying and water-control machinery before the next storage cycle. Seldavre exporters agreed shared inspection certificates with participating northern buyers. Local militia replacement training continued, with no material net expansion of the small military inventory.

## Karsenne Compact
Lower valleys supply potatoes and cabbage, upland pastures cheese. Bought flour and coastal salt become costly when freight negotiations fail.
Autonomous mining councils and fortress districts bargain; household membership and enforceable civil remedies are unspecified.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 22.38 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 33.06 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 81.36 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 24.0 | L-eq / month |
| Skilled and salaried households · needs basket | 24.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 24.0 | L-eq / month |
| Accessible ordinary care | 55 | % · provisional access estimate |
| Reliable clean water | 62 | % · provisional access estimate |
| Treasury reserves | 2.02 | months of public spending |
| Political voice | [1, 3] | / 4 evidence band |
| Civil safeguards | [0, 4] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 55; resilience 59.66; voice 50.0; rights 50.0; tension 12.5; security 62.5; growth 57.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → karsenne. Political evidence reviewed 05/11/0068 AC43. Source description: Drossane hosts common business for autonomous mining councils and fortress districts. The Compact is a federation rather than a unified hereditary realm. Ores, engineering skills and defended approaches sustain its bargaining power, but coastal freight charges consume export income. Valley workshops and cultivated pockets support the upland economy. Veyrasse remains an uneasy defensive partner and vital outlet. A direct railway toward Calvernis is sought, not operating; existing roads do not provide an equivalent bulk-freight service.
Year review: Drossane councils expanded duplicate assay and mine-safety records and completed a field-gun repair cycle. Existing road and port transfers still carry foreign trade. Negotiators continued the proposed Calvernis railway survey; construction and through-service have not begun. The guesthouse attackers’ real allegiance has not become a public finding.

## Kelbrun
Labourers eat at field shelters from wrapped parcels. Plantation owners’ lavish fruit tables conceal the uneven access to meat and purchased grain.
Powerful plantations and contested estate labour obligations limit protection; limited delivery arbitration is not a labour-rights settlement.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 18.24 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 24.75 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 62.41 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 21.0 | L-eq / month |
| Skilled and salaried households · needs basket | 21.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 21.0 | L-eq / month |
| Accessible ordinary care | 51 | % · provisional access estimate |
| Reliable clean water | 42 | % · provisional access estimate |
| Treasury reserves | 2.06 | months of public spending |
| Political voice | [1, 2] | / 4 evidence band |
| Civil safeguards | [0, 2] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 51; resilience 66.42; voice 37.5; rights 25.0; tension 12.5; security 62.5; growth 62.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → kelbrun. Political evidence reviewed 05/11/0068 AC43. Source description: Kelbrun is an independent state of councils and powerful plantation interests governed from Kelbrienne. Oreviano's rubber chemistry and filtration industries turn cultivated resources into valuable manufactured exports. Seasonal uplands supply grain and livestock alongside the wetter districts' plantation products. Estate labour obligations and commercial access shape politics as much as formal council debates. Serevask is a former federal partner and continuing industrial customer; Varnelle and Calvernis provide other trading connections. Army posts secure routes and production districts, but the country's influence chiefly rests on useful materials, technical knowledge and agricultural trade. Its population does not share one estate, employer or social standing. Cervellane provides a charted coastal gateway, with defended access to Cambrelet. Council-administered island dependency with plantation suppliers, fisheries and bonded stores. Charted island harbours: Marcellune.
Year review: Kelbrienne adopted the Month 7 basin freight forms and Oreviano workshops repaired imported pumps using shared fitting specifications. Plantation representatives accepted limited delivery arbitration. Labour conditions and estate power remain contested; machinery imports still limit how widely the improvements can spread.

## Kingdom of Istrana
Mill workers buy meals near the gates; court hospitality prizes fresh produce from several islands.
Town and landed representation constrains taxes and royal borrowing, without establishing universal franchise.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 20.93 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 28.83 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 70.7 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 21.0 | L-eq / month |
| Skilled and salaried households · needs basket | 21.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 21.0 | L-eq / month |
| Accessible ordinary care | 51 | % · provisional access estimate |
| Reliable clean water | 51 | % · provisional access estimate |
| Treasury reserves | 2.29 | months of public spending |
| Political voice | [2, 3] | / 4 evidence band |
| Civil safeguards | [2, 3] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 51; resilience 67.37; voice 62.5; rights 62.5; tension 12.5; security 62.5; growth 54.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → istrana. Political evidence reviewed 05/11/0068 AC43. Source description: Istrana is an island kingdom with a hereditary crown, permanent civil service and revenue assembly representing towns and landholding districts. The court claims descent from an older maritime union, but authority rests on negotiated taxes and a small professional fleet. Sugar, fruit, textiles and repaired vessels pass through its ports. State schools train clerks and mechanics; heavy machinery and much marine fuel are imported. The crown cultivates several mainland partners to avoid a protectorate. Outer representatives demand limits on royal borrowing and exclusive contracts awarded to court merchants.
Year review: Istrana’s assembly approved a limited renewal of fuel and machinery contracts after scrutiny of royal borrowing. Serakai workshops repaired existing patrol equipment and textile drives. Assembly consent remains required; the programme creates no independent aircraft or armoured-vehicle industry.

## March of Veyrasse
Fresh fish is ordinary near Serravonne, expensive uphill after a disrupted train. Station households stretch yesterday’s bread into broth dumplings.
Chartered municipal institutions and railway unions have leverage, but poorer households carry disproportionate service obligations and advancement depends on patronage.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 21.08 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 31.09 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 77.36 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 24.0 | L-eq / month |
| Skilled and salaried households · needs basket | 24.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 24.0 | L-eq / month |
| Accessible ordinary care | 55 | % · provisional access estimate |
| Reliable clean water | 61 | % · provisional access estimate |
| Treasury reserves | 2.91 | months of public spending |
| Political voice | [1, 2] | / 4 evidence band |
| Civil safeguards | [1, 2] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [2, 3] | / 4 evidence band |

Calculated components (0–100): health 55; resilience 70.27; voice 37.5; rights 37.5; tension 12.5; security 37.5; growth 55.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → veyrasse. Political evidence reviewed 05/11/0068 AC43. Source description: The charter balances the Margrave, landed houses, municipal councils and industrial proprietors. Auvrienne holds the court and government; Serravonne is a secondary port and rail junction. Coastal agriculture and workshops depend on inland ores and imported machinery. Railway unions can disrupt mobilisation, and poorer households bear disproportionate service obligations. Caldrienne remains the principal territorial rival; Karsenne is an essential supplier, while Calvernis and Ceralte provide competing maritime connections. The Margrave commands the standing army and foreign relations, while chartered institutions provide much of the money, manpower and transport. Education and engineering offer advancement through patronage. Railway superintendent Leont Vardesca governs railway affairs and dependants, not Serravonne’s government or army.
Year review: Auvrienne’s authorised second pumping stage entered service on 04/04/0068; operating acceptance of the uphill pressure controls followed on 10/06/0068. Cevrane’s crews now maintain the two commissioned replacement stages beside retained older sections. Serravonne railway workshops spread revised maintenance checks. Conventional repair and replacement programmes modestly improved military availability; Galahad’s new rifle and carrier remain unbuilt.
Theatre cressault (12/11/0068 AC43): Intermittent fighting. Patrol and irrigation-control clashes were followed by repairs and a limited crossing-notice arrangement between local commanders in Month 6. The armistice still holds at national level; fortified posts and occasional local fire remain. Neither side has settled sovereignty.

## Merovian Island Republic
Dockside houses advertise fixed-price meals; wealthy tables display fresh produce from distant islands.
An elected assembly exists but residence and tax rules exclude some crews and outer communities; wider remedies are unspecified.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 20.3 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 29.9 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 74.92 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 24.0 | L-eq / month |
| Skilled and salaried households · needs basket | 24.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 24.0 | L-eq / month |
| Accessible ordinary care | 56 | % · provisional access estimate |
| Reliable clean water | 57 | % · provisional access estimate |
| Treasury reserves | 3.72 | months of public spending |
| Political voice | [2, 3] | / 4 evidence band |
| Civil safeguards | [0, 4] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 56; resilience 76.25; voice 62.5; rights 50.0; tension 12.5; security 62.5; growth 54.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → merovia. Political evidence reviewed 05/11/0068 AC43. Source description: The Merovian Island Republic joins port municipalities and agricultural districts through an elected assembly. Its residence and tax franchise leaves seasonal crews and some outer communities underrepresented. Shipping insurance, repair docks, fruit and wool exports support a modest industrial base. Cooperative farms compete with carriers over freight rates. The republic controls a north-south chain at the meeting of eastern and austral routes; depot access is negotiated commercially rather than reserved to one mainland patron. Rival parties disagree over naval spending and foreign loans.
Year review: Merovia and Iveran yards expanded scheduled pump and engine overhaul, returning patrol tonnage to working service. Insurers accepted inspected repair certificates. Merchant representation remains disputed despite the successful service programme; the cities did not acquire heavy shipbuilding capacity.

## Nemerai Crown
Outer households preserve more fish and dairy; the capital displays produce from across the compacts.
Town and communal-land custodians participate, with compacts preventing automatic harvest requisition.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 19.74 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 27.05 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 67.07 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 21.0 | L-eq / month |
| Skilled and salaried households · needs basket | 21.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 21.0 | L-eq / month |
| Accessible ordinary care | 44 | % · provisional access estimate |
| Reliable clean water | 46 | % · provisional access estimate |
| Treasury reserves | 2.94 | months of public spending |
| Political voice | [2, 3] | / 4 evidence band |
| Civil safeguards | [3, 4] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 44; resilience 75.53; voice 62.5; rights 87.5; tension 12.5; security 62.5; growth 54.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → nemerai. Political evidence reviewed 05/11/0068 AC43. Source description: The Nemerai Crown is an old island monarchy whose ruler is confirmed by hereditary houses, town delegates and custodians of communal farmland. Nemer maintains written land records and a permanent customs service. Outer islands owe ships and levies under separate compacts; the crown cannot simply requisition their harvests. Fisheries, terrace grain and shipping support local machine shops, while heavy plant and refined marine fuel are imported. Foreign powers have treaty warehouses but no general jurisdiction. Court reformers favour technical colleges and a common budget; outer houses fear the loss of their island privileges.
Year review: Nemer and Essara technical schools completed another small intake of navigators and engine fitters. The crown and participating island councils funded repairs to existing patrol and signal equipment. Outer-island consent remains necessary; this is a service improvement rather than a new blue-water fleet.

## Norrakai Moots
Stored food is carefully accounted for because rescue hospitality and winter survival draw on the same reserves.
Seasonal assemblies negotiate leases while retaining sovereignty and mutual refuge obligations.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 15.77 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 21.03 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 54.83 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 21.0 | L-eq / month |
| Skilled and salaried households · needs basket | 21.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 21.0 | L-eq / month |
| Accessible ordinary care | 35 | % · provisional access estimate |
| Reliable clean water | 28 | % · provisional access estimate |
| Treasury reserves | 4.68 | months of public spending |
| Political voice | [3, 4] | / 4 evidence band |
| Civil safeguards | [3, 4] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 35; resilience 82.12; voice 87.5; rights 87.5; tension 12.5; security 62.5; growth 54.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → norrakai. Political evidence reviewed 05/11/0068 AC43. Source description: The Norrakai Moots unite northern island communities through seasonal assemblies and mutual refuge law. They remain outside Vardol’s crown despite trading with its ports. Fishing, herding and limited sheltered cultivation sustain a sparse population, supplemented by imported grain. Councils negotiate pilotage and weather-station leases without ceding sovereignty. Radios and motor launches connect communities still reliant on locally built boats. Families use seasonal camps and permanent villages; an empty winter landing does not establish uninhabited territory.
Year review: Norrak and Iskel seasonal moots renewed refuge and pilotage obligations and shared scarce radio batteries through visiting traders. Existing rescue boats were repaired. Vardol obtained no territorial concession, and the tiny local force gained neither aircraft nor armour.

## Ordelune Overseas Districts
Winter smokehouses and communal grain stores remain important even where imported tins are fashionable.
District councils gained provisioning consultation but unequal land and taxation remain.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 19.15 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 26.13 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 65.23 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 21.0 | L-eq / month |
| Skilled and salaried households · needs basket | 21.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 21.0 | L-eq / month |
| Accessible ordinary care | 47 | % · provisional access estimate |
| Reliable clean water | 43 | % · provisional access estimate |
| Treasury reserves | 2.9 | months of public spending |
| Political voice | [1, 2] | / 4 evidence band |
| Civil safeguards | [1, 2] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 47; resilience 78.26; voice 37.5; rights 37.5; tension 12.5; security 62.5; growth 54.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → ordelune. Political evidence reviewed 05/11/0068 AC43. Source description: Ostrevain’s southern overseas districts join two island clusters under a governor at Ordelune, linked by supply sailings rather than continuous land administration. Crown estates, settler farms and older island communities coexist under unequal tax and land arrangements. Wool, grain and preserved food finance the administration; district councils seek a greater share of customs revenue. Outlying harbours depend on local pilots and winter stores. Ostrevain claims the chain but has no effective authority over Austral Land, and the governor cannot promise passage through polar waters.
Year review: Ordelune and Sorevain councils secured scheduled grain and spare-parts deliveries under existing Ostrevain support. Repairs addressed storm damage to store roofs and moorings. Local consultation widened around winter provisioning without changing the colony’s legal status or its small garrison inventory.

## Ossavren successor territories
Smuggling brings salt, oil and family recipes across front lines. An abundant banquet may conceal shortages in a neighbouring claimant’s territory.
Competing armed commands and separate tolls prevent dependable common authority or protection.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 17.14 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 25.12 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 65.19 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 24.0 | L-eq / month |
| Skilled and salaried households · needs basket | 24.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 24.0 | L-eq / month |
| Accessible ordinary care | 54 | % · provisional access estimate |
| Reliable clean water | 49 | % · provisional access estimate |
| Treasury reserves | 0.86 | months of public spending |
| Political voice | [0, 2] | / 4 evidence band |
| Civil safeguards | [0, 2] | / 4 evidence band |
| Domestic tension | [3, 4] | / 4 evidence band |
| Security pressure | [3, 4] | / 4 evidence band |

Calculated components (0–100): health 54; resilience 39.1; voice 25.0; rights 25.0; tension 87.5; security 12.5; growth 48.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → ossavren. Political evidence reviewed 05/11/0068 AC43. Source description: Ossavren denotes the territories of a broken crown, not a functioning nation with one army. Ossendrienne remains a vast former capital, while provincial commands, rival courts and autonomous commercial cities control their own taxation and troops. Tressavio trades through Veylac; other districts face Ostrevain or the Seravelle markets. Coal and petroleum resources give competing rulers valuable assets, but tolls, incompatible arrangements and local fighting divide their use. Shared food, family ties and railway habits survive the political fracture. Aggregate military and economic figures measure the whole region's resources; no claimant can simply issue orders to that combined total. Neravisse provides a charted coastal gateway, with defended access to Tatogia. A dependency of Neravisse’s municipal charter, not territory governed by a restored Ossavren crown. Charted island harbours: Cavralto.
Year review: Fighting in Months 3–4 over coal feeders damaged rolling stock and workshops. A 19/05/0068 local grain-transit arrangement reopened negotiated services through participating authorities, while rival commands retained separate tolls and arsenals. Losses and cannibalisation exceeded repairs; less of the combined geographic army can now be sustained away from its bases. No claimant reunified the country.
Theatre ossavren (12/11/0068 AC43): Active civil conflict. Contests in Months 3–4 over coal feeders and repair sites damaged rolling stock. A Month 5 grain-transit accord between participating commands reopened negotiated services, without recognising one claimant as sovereign. Outlying districts remain contested.

## Ostrevain
Soldiers carry toasted grain and hard cheese; wealthy tables emphasise fresh meat and fruit that has not endured a convoy journey.
Landed families and royal commissioners dominate recruitment; no general household remedy is recorded.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 19.2 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 28.25 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 71.56 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 24.0 | L-eq / month |
| Skilled and salaried households · needs basket | 24.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 24.0 | L-eq / month |
| Accessible ordinary care | 52 | % · provisional access estimate |
| Reliable clean water | 48 | % · provisional access estimate |
| Treasury reserves | 1.34 | months of public spending |
| Political voice | [0, 1] | / 4 evidence band |
| Civil safeguards | [0, 4] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 52; resilience 49.74; voice 12.5; rights 50.0; tension 12.5; security 62.5; growth 56.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → ostrevain. Political evidence reviewed 05/11/0068 AC43. Source description: Ostrevain is an agricultural monarchy attempting to turn crop surpluses and a large population into industrial military strength. Orsevigne holds the royal administration; Tessarone concentrates arsenal work, supported by plantation and farming railways. Landed families retain influence over recruitment and produce, while royal commissioners favour factories and central procurement. Its armed forces can draw many soldiers, but transport and imported precision equipment constrain their deployment. Cervaud offers a market and a political buffer. In daily life the contrast is between estate authority, regimented industrial wards and expanding commercial towns, rather than between a uniformly modern capital and an empty countryside. Salterivo provides a charted coastal gateway, with defended access to Yssois. Royal coastal dependency with a governor, local fishing communities and an agricultural resupply station. Charted island harbours: Villessia.
Year review: Tessarone completed an artillery refurbishment cycle while agricultural authorities expanded grain-store inspection and seed distribution. Imported precision fittings still limit motorisation; the army remains predominantly rail- and horse-supported. The monarchy renewed access arrangements with participating grain districts without taking over their estates.

## Rivessac Coast

Port communes and island councillors coexist with hereditary land control and contested seasonal labour.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 18.72 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 27.52 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 70.08 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 24.0 | L-eq / month |
| Skilled and salaried households · needs basket | 24.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 24.0 | L-eq / month |
| Accessible ordinary care | 51 | % · provisional access estimate |
| Reliable clean water | 52 | % · provisional access estimate |
| Treasury reserves | 3.28 | months of public spending |
| Political voice | [1, 2] | / 4 evidence band |
| Civil safeguards | [1, 2] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 51; resilience 77.98; voice 37.5; rights 37.5; tension 12.5; security 62.5; growth 61.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → other-vesalius-3160. Political evidence reviewed 05/11/0068 AC43. Source description: Saultac is the best-charted inland market in a southeastern coastal region of small port communes and hereditary agricultural districts. Mainland and island harbours now complement the inland market on the chart. Pilots’ guilds set practical terms for coastal travel; inland houses control cultivated land and the roads supplying the harbours. Ceralte brokers buy provisions here without governing the coast. Rival communes share storm warnings but guard their harbour soundings. The region’s political disputes concern port fees, seasonal labour and who funds guarded access to inland markets, rather than a single national succession. Vessaline provides a charted coastal gateway, with defended access to Saultac. A dependency of the coastal port commune, governed by its harbour charter and resident island councillors. Charted island harbours: Vallarive.
Year review: Vessaline and Vallarive pilot guilds issued revised local soundings and coordinated stores for visiting coasters. Saultac merchants accepted the new schedules. Ceralte buyers retain commercial access without Admiralty jurisdiction; no new channel or ocean route was created.

## Rovengard
A winter pantry matters more than a fashionable fresh ingredient. Household drying racks and communal bake days bind city relatives to valley farms.
Resident island councils are documented; the wider crown's household accountability is not specified.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 18.07 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 26.54 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 68.07 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 24.0 | L-eq / month |
| Skilled and salaried households · needs basket | 24.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 24.0 | L-eq / month |
| Accessible ordinary care | 53 | % · provisional access estimate |
| Reliable clean water | 54 | % · provisional access estimate |
| Treasury reserves | 3.15 | months of public spending |
| Political voice | [1, 2] | / 4 evidence band |
| Civil safeguards | [0, 4] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 53; resilience 74.34; voice 37.5; rights 50.0; tension 12.5; security 62.5; growth 55.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → rovengard. Political evidence reviewed 05/11/0068 AC43. Source description: Rovengard is Morholt's largest single monarchy, governed from Arvendal and linked to overseas trade through Halsavik. Eslovanne supplies general engineering, while productive southern districts support farming, food processing and timber industries. Cold northern towns depend on transport from those warmer basins. The crown's practical task is to keep provisions and obligations moving between communities separated by difficult country. Varnesk sells specialist machinery; Halskert and Galdresk are connected through local trade and provisioning routes. Large territorial claims and a substantial population therefore do not translate into an army free to abandon domestic roads, stores and defended settlements. Royal island districts with resident councils, coastal patrols and Halsavik supply contracts. Charted island harbours: Veltrund.
Year review: Halsavik established a larger seasonal spare-parts reserve and Eslovanne workshops completed winter-damaged vehicle repairs. Timber and weather reports from Edrask now share the existing shipping post. Winter valleys remain restrictive; restored equipment does not create a year-round northern sea passage.

## Rovessara
Fresh oil, mountain butter and imported spice coexist rather than defining one uniform national cuisine. Ice houses and refrigerated warehouses support the richest urban tables.
Commercial councils and elected harbour councils give organised interests voice; general resident rights are unspecified.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 26.18 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 38.8 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 93.06 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 25.0 | L-eq / month |
| Skilled and salaried households · needs basket | 25.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 25.0 | L-eq / month |
| Accessible ordinary care | 64 | % · provisional access estimate |
| Reliable clean water | 64 | % · provisional access estimate |
| Treasury reserves | 4.7 | months of public spending |
| Political voice | [1, 2] | / 4 evidence band |
| Civil safeguards | [0, 4] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 64; resilience 79.03; voice 37.5; rights 50.0; tension 12.5; security 62.5; growth 60.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → rovessara. Political evidence reviewed 05/11/0068 AC43. Source description: Rovessara is a merchant republic governed through commercial councils. Bellacenne houses finance and administration, Avellori supplies precision instruments and electrical apparatus, and Pellavore connects both to overseas buyers. Temperate farming districts, seasonal lowlands and a dry interior give its domestic economy several distinct faces. Banks and shipping houses can finance projects far beyond the republic, but they cannot manufacture uninterrupted sea lanes or unlimited raw materials. Its strength lies in skilled production, credit and trade rather than the largest army. Inland towns consequently matter as food suppliers and customers, not merely as lesser copies of its fashionable port cities. Republican overseas districts administered through elected harbour councils and Rovessaran customs officers. Charted island harbours: Marcavisse.
Year review: Pellavore yards delivered replacement patrol tonnage and Bellacenne insurers accepted shared convoy reporting from participating Seravelle ports. Precision workshops adopted interchangeable inspection standards on selected export contracts. Talascan levy litigation forced colonial administrators to negotiate; commercial influence did not become sovereignty over independent ports.

## Seravelle Littoral

Harbour and estate jurisdictions retain local criminal law, while contested seizures and foreclosures limit practical recourse.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 19.18 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 26.19 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 65.34 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 21.0 | L-eq / month |
| Skilled and salaried households · needs basket | 21.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 21.0 | L-eq / month |
| Accessible ordinary care | 43 | % · provisional access estimate |
| Reliable clean water | 44 | % · provisional access estimate |
| Treasury reserves | 4.2 | months of public spending |
| Political voice | [1, 2] | / 4 evidence band |
| Civil safeguards | [1, 2] | / 4 evidence band |
| Domestic tension | [1, 2] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 43; resilience 76.94; voice 37.5; rights 37.5; tension 37.5; security 62.5; growth 55.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → other-otranto-1450. Political evidence reviewed 05/11/0068 AC43. Source description: Astrellac’s harbour republic and the inland estate courts share the eastern littoral with smaller free ports. Their commercial convention standardises bills of lading but leaves taxes and criminal law local. Shipping families advance money against harvests; rural houses resent foreclosures by creditors who never leave the coast. Rovessaran insurers and instrument makers are influential customers. Port patrols cooperate against raiders, yet seize one another’s cargo when a debt dispute turns political. Hinterland towns depend on export warehouses for salt, tools and credit, which gives the harbours power beyond their formal borders. Astrellac’s chartered island dependencies within the Seravelle return. Resident councils administer land and fisheries; Astrellac supplies customs officers, escorts and bonded fuel depots. The other Seravelle courts remain independent. Charted island harbours: Cortessia, Vasselac, Rovellisse.
Year review: Astrellac and participating ports began coordinated convoy departures and shared seizure notices on 18/06/0068. Successful escorts reduced exposure on the main trading axis; raiders shifted toward smaller feeders and isolated sailings. Rovessaran insurance now recognises those escorted departures, while contested debt seizures still require case-by-case judgement.
Theatre maritime (12/11/0068 AC43): Maritime raiding; stronger convoy cooperation. Participating Seravelle ports began coordinated departures, shared seizure notices and escort cooperation in Month 6. Main-axis exposure declined while raiders shifted toward smaller feeders and isolated sailings. Ceralte’s sponsorship of raiders remains unproved.

## Serevask Republic
The remnant government maintains public grain kitchens near its ministries. Former federal recipes outlast the tax union, while each successor claims its own version is the original.
A republic and archives are established, but neither franchise coverage nor household remedies are specified.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 18.73 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 27.54 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 70.13 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 24.0 | L-eq / month |
| Skilled and salaried households · needs basket | 24.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 24.0 | L-eq / month |
| Accessible ordinary care | 58 | % · provisional access estimate |
| Reliable clean water | 47 | % · provisional access estimate |
| Treasury reserves | 1.08 | months of public spending |
| Political voice | [0, 4] | / 4 evidence band |
| Civil safeguards | [0, 4] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 58; resilience 43.89; voice 50.0; rights 50.0; tension 12.5; security 62.5; growth 60.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → serevask. Political evidence reviewed 05/11/0068 AC43. Source description: The Serevask Republic governs its own mountain, upland and forest districts from Serevienne. Vallorise remains an important engineering city, connected commercially to the states that once shared a southern basin federation. Varnelle, Kelbrun and Gavrel now levy their own taxes and command their own forces; old charters create claims over debts and water, not effective Serevask sovereignty. The republic retains archives, technical institutions and useful workshops, but has neither the population nor authority of the former union. Its citizens include mountain households dependent on lower provisions and lowland manufacturers dependent on cross-border customers. It has never governed Vesalius as a whole.
Year review: A seasonal water-release and freight-document protocol was signed with participating Varnelle and Kelbrun authorities on 07/07/0068. Vallorise filtration workshops began exchanging repair specifications under it. Reconstruction debts and sovereignty remain disputed; Gavrel houses participate individually rather than through a restored federation.

## Skeldran Hearth Confederacy
Visitors eat from a host hearth’s stores; prolonged stays create reciprocal obligations.
Hearth assemblies retain land and shelter rights under customary law and written harbour judgments.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 16.44 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 22.03 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 56.87 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 21.0 | L-eq / month |
| Skilled and salaried households · needs basket | 21.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 21.0 | L-eq / month |
| Accessible ordinary care | 42 | % · provisional access estimate |
| Reliable clean water | 29 | % · provisional access estimate |
| Treasury reserves | 4.37 | months of public spending |
| Political voice | [3, 4] | / 4 evidence band |
| Civil safeguards | [3, 4] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 42; resilience 83.18; voice 87.5; rights 87.5; tension 12.5; security 62.5; growth 54.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → skeldra. Political evidence reviewed 05/11/0068 AC43. Source description: The Skeldran Hearth Confederacy is a sovereign compact of island kin groups, fishing towns and grazing communities. Delegates meet at Skeldra; land and shelter rights remain with hearth assemblies. Customary law is transmitted through named custodians and written harbour judgments, with interpreters for several languages. Imported rifles, radios and motor boats coexist with wooden shipbuilding and household workshops. The confederacy grants seasonal anchorage permits but rejects permanent foreign garrisons. Sparse farmland and severe winters favour dispersed stores, reciprocal rescue duties and small defensive forces.
Year review: Skeldra and Heskar hearth assemblies pooled radio spares and rescue-boat stores. A maintenance rotation kept existing sets usable through the shipping season. No foreign garrison, new aircraft industry or permanent central government followed the arrangement.

## Talascan Charter Islands
Company dining rooms and village kitchens use the same crops but distribute the best produce differently.
Village councils retain some voice, but colonial courts and outside credit dominate land disputes; levy suspension covers only petitioning districts.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 21.5 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 29.7 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 72.49 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 21.0 | L-eq / month |
| Skilled and salaried households · needs basket | 21.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 21.0 | L-eq / month |
| Accessible ordinary care | 48 | % · provisional access estimate |
| Reliable clean water | 50 | % · provisional access estimate |
| Treasury reserves | 2.25 | months of public spending |
| Political voice | [1, 2] | / 4 evidence band |
| Civil safeguards | [0, 2] | / 4 evidence band |
| Domestic tension | [2, 3] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 48; resilience 74.69; voice 37.5; rights 25.0; tension 62.5; security 62.5; growth 54.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → talasca. Political evidence reviewed 05/11/0068 AC43. Source description: Rovessara governs the Talascan chain through a colonial commissioner, customs posts and commercial leases. Island communities remain the majority and retain village land councils, but the colonial court decides disputes involving export estates and harbour property. Settler merchants and mainland firms control much of the credit and shipping. Councils contest compulsory road levies and the conversion of common pasture into export holdings. The commissioner depends on local pilots and negotiated water rights. These islands have long-established inhabitants and histories, not vacant land discovered by their present rulers.
Year review: Month 6 refusal of compulsory road levies and common-pasture petitions reached the colonial courts. A temporary Month 9 order suspended disputed levies in the petitioning districts while a mixed inquiry examines leases. Export shipping continued. The concession is limited, not independence or an island-wide armed uprising.
Theatre talasca (12/11/0068 AC43): Colonial unrest; interim judicial concession. Month 6 road-levy refusals and common-pasture petitions led to a Month 9 interim order suspending disputed levies in petitioning districts pending a mixed inquiry. Communities pursue differing aims and are not collectively rebels.

## Tervayne
Sailors’ inexpensive meals favour salted fish; fresh shellfish signals a short journey from water to table. Inland villages are less maritime than the national reputation suggests.
Port families, commercial houses and resident port councils influence government; general legal protection is unspecified.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 24.23 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 35.84 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 87.03 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 25.0 | L-eq / month |
| Skilled and salaried households · needs basket | 25.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 25.0 | L-eq / month |
| Accessible ordinary care | 64 | % · provisional access estimate |
| Reliable clean water | 65 | % · provisional access estimate |
| Treasury reserves | 2.27 | months of public spending |
| Political voice | [1, 2] | / 4 evidence band |
| Civil safeguards | [0, 4] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 64; resilience 63.0; voice 37.5; rights 50.0; tension 12.5; security 62.5; growth 59.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → tervayne. Political evidence reviewed 05/11/0068 AC43. Source description: Tervayne is a western Vesalian maritime state whose government and commercial houses occupy Tervessac. Tervassin handles ocean shipping; Brescalle builds marine and civil machinery. Cultivated districts supply provisions while upland towns provide timber and manufactured goods. Its trading networks face Otranto and Morholt across the western ocean, with only indirect connections to the eastern Marches through intervening governments and difficult country. Maritime wealth supports naval supply and overseas influence, not unrestricted inland conquest. Port families, industrial firms and agricultural districts consequently have different priorities, even when foreign merchants describe them collectively as a seafaring people. Overseas supply and navigation districts maintained by Tervayne’s maritime administration and resident port councils. Charted island harbours: Ostrelac.
Year review: Brescalle supplied replacement marine engines and Tervassin commissioned replacement escort tonnage after older vessels were paid off. Naval trainees rotate through working repair yards. The maritime programme improved availability, but no through-railway to the Eastern Marches was built.

## Vallessia Cantons

Elected grain boards secured limits and receipts for requisitions with appeal rights; only participating authorities are bound.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 18.7 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 27.51 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 70.04 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 24.0 | L-eq / month |
| Skilled and salaried households · needs basket | 24.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 24.0 | L-eq / month |
| Accessible ordinary care | 52 | % · provisional access estimate |
| Reliable clean water | 48 | % · provisional access estimate |
| Treasury reserves | 2.06 | months of public spending |
| Political voice | [2, 3] | / 4 evidence band |
| Civil safeguards | [2, 3] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 52; resilience 64.17; voice 62.5; rights 62.5; tension 12.5; security 62.5; growth 57.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → other-vesalius-2790-1410. Political evidence reviewed 05/11/0068 AC43. Source description: Southern market cantons rebuilt around local granaries after the last major culling. Margeuil’s elected grain board, Darnenne’s military governor and the landed councils around Galigny compete over transport dues. Common measures for grain survived; a common treasury did not. Merchants connect warm lowland crops with cooler interior districts, using brokers who can guarantee passage through several authorities. Kelbrun buyers seek plantation produce and seasonal labour. Municipal councils resist the governors’ claim that every warehouse is a military asset, particularly after poor harvests make requisitions politically dangerous. Pravessant provides a charted coastal gateway, with defended access to Peillier. Dependencies of individual southern cantons, governed through resident councils and grain-shipping charters. Charted island harbours: Cervelune.
Year review: Margeuil grain merchants secured written limits and receipts for requisitions by participating Darnenne commands. Galigny estate courts retain appeal rights. Repair workshops concentrated on wagons and artillery carriages; the settlement eased harvest transport but left the regional forces politically divided.

## Vardol
Shift whistles govern supper in the industrial wards. Kitchen gardens and pickled cabbage cushion disruptions to the grain trains.
Royal military administration and suppliers dominate; no broad resident franchise or remedy is established.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 20.08 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 29.56 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 74.23 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 24.0 | L-eq / month |
| Skilled and salaried households · needs basket | 24.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 24.0 | L-eq / month |
| Accessible ordinary care | 52 | % · provisional access estimate |
| Reliable clean water | 59 | % · provisional access estimate |
| Treasury reserves | 1.66 | months of public spending |
| Political voice | [0, 1] | / 4 evidence band |
| Civil safeguards | [0, 4] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 52; resilience 52.1; voice 12.5; rights 50.0; tension 12.5; security 62.5; growth 56.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → vardol. Political evidence reviewed 05/11/0068 AC43. Source description: Vardol is a northern realm centred on Estrevigne's royal and military administration. Caldovre and surrounding cold-country cities concentrate arsenals, engineering and fuel processing; productive southern districts around Belmerac help feed them. The state can support a large military establishment but must also defend long supply routes and its rivalry with Averholt. Caldrienne is reached by the Valdrec road, not held as a subordinate province. Army procurement gives industrial suppliers political influence, while landed and commercial interests negotiate the cost. Its apparent strength therefore rests on maintaining a demanding system of food, fuel and transport rather than manpower alone. Calvessac provides a charted coastal gateway, with defended access to Quillaux. Northern crown claims maintained by lighthouse crews and seasonal naval stores. Remote interiors are not continuously occupied.
Year review: A Month 8 frontier exercise and supply rotation alarmed Averholt. Month 9 liaison observers and advance exercise notices reduced the immediate risk of miscalculation without resolving territorial claims. Caldovre completed replacement armour and gun returns; frontier commitments still absorb the same broad share of the field force.
Theatre vardol-averholt (12/11/0068 AC43): Armed rivalry; reciprocal exercise notices. Vardol’s Month 8 frontier exercise prompted precautionary Averholt rotations. Month 9 liaison observers and advance exercise notices reduced the immediate alarm. Territorial claims and permanent garrisons remain.

## Varessan Sea League
Fresh water is served before wine at a guest meal; a full jug signals a household willing to share its cistern.
Island assemblies elect harbour officers, retain land law and bar foreign ownership of freshwater catchments under shared courts.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 20.35 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 27.96 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 68.94 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 21.0 | L-eq / month |
| Skilled and salaried households · needs basket | 21.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 21.0 | L-eq / month |
| Accessible ordinary care | 47 | % · provisional access estimate |
| Reliable clean water | 43 | % · provisional access estimate |
| Treasury reserves | 3.43 | months of public spending |
| Political voice | [3, 4] | / 4 evidence band |
| Civil safeguards | [3, 4] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 47; resilience 79.88; voice 87.5; rights 87.5; tension 12.5; security 62.5; growth 54.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → varessan. Political evidence reviewed 05/11/0068 AC43. Source description: The Varessan Sea League unites five island assemblies under a charter covering convoys, foreign treaties and shared courts. Ardessa hosts the delegates, but each island retains land law and elects its harbour officers. Centuries of terrace cultivation and ocean navigation preceded mainland concessions. Shipwright families build wooden coasters and repair imported motor vessels. Treaty warehouses purchase wool, dried fish and fruit. The League permits leased depots but bars foreign ownership of freshwater catchments. Carrier houses seek closer mainland ties; cultivator assemblies resist customs exemptions that leave them paying the common defence levy.
Year review: Ardessa and Velisar assemblies renewed leased-depot terms while reserving local water and pilot rights. Stored engine fittings restored a small patrol vessel. The five island assemblies remain self-governing; mainland merchants obtained service access rather than territorial annexation.

## Varnelle
Fish sauce is an everyday seasoning rather than a luxury. Flood years alter rice prices across all four successor states.
Port, water and commercial authorities have influence; individual household remedies are unspecified.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 20.41 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 30.08 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 75.29 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 24.0 | L-eq / month |
| Skilled and salaried households · needs basket | 24.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 24.0 | L-eq / month |
| Accessible ordinary care | 60 | % · provisional access estimate |
| Reliable clean water | 56 | % · provisional access estimate |
| Treasury reserves | 3.39 | months of public spending |
| Political voice | [1, 2] | / 4 evidence band |
| Civil safeguards | [0, 4] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 60; resilience 77.28; voice 37.5; rights 50.0; tension 12.5; security 62.5; growth 63.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → varnelle. Political evidence reviewed 05/11/0068 AC43. Source description: Varnelle is a delta state administered through port, water and commercial authorities centred on Varnessa. Serravole's shipping and Ceralvigne's engineering connect cultivated forest districts with overseas markets. Independence from Serevask followed disputes over reconstruction debts and customs after the former federation ceased functioning. Railway and business relationships survived that break. Merchants and water boards have considerable influence, while military establishments defend strategic approaches rather than replace civilian government everywhere. Rivessac, Kelbrun and Gavrel supply neighbouring markets. Control of freight and water makes Varnelle consequential to inland customers, but those customers remain separate political communities. Delta-authority island districts with customs houses, repair yards and provisioning farms. Charted island harbours: Cervallune.
Year review: Varnessa and Serravole began using the Month 7 basin protocol for declared cargo and water notices. Ceralvigne filter and pump repairs reduced missed deliveries on participating routes. Customs revenue remains locally controlled; the agreement did not pool armies or cancel inherited debts.

## Varneselle Estates

Elected commercial port officers coexist with estate bailiffs and contested customary fishing access.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 18.83 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 25.66 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 64.24 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 21.0 | L-eq / month |
| Skilled and salaried households · needs basket | 21.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 21.0 | L-eq / month |
| Accessible ordinary care | 45 | % · provisional access estimate |
| Reliable clean water | 41 | % · provisional access estimate |
| Treasury reserves | 2.33 | months of public spending |
| Political voice | [1, 2] | / 4 evidence band |
| Civil safeguards | [1, 2] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 45; resilience 70.51; voice 37.5; rights 37.5; tension 12.5; security 62.5; growth 54.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → other-morholt-2630. Political evidence reviewed 05/11/0068 AC43. Source description: The eastern estates descend from competing settlement grants, with Varkessant’s port charter carved out of the landed claims. Estate bailiffs administer courts and patrol obligations; the port elects its own commercial officers. Fishing communities resist attempts to classify their customary shore access as a landlord’s concession. Halskert buys fish and timber and sells grain, giving its merchants leverage in disputes over freight. Family alliances cross estate borders, but succession cases repeatedly fragment holdings. Seasonal workers move between shore crews and inland workshops, carrying news faster than the formal post. Varkessant’s port-charter dependencies; the mainland estate courts retain their separate jurisdictions. Charted island harbours: Cersund.
Year review: Varkessant buyers renewed Halskert grain contracts and Cersund estates accepted a seasonal fishing-access settlement. Harbour repairs returned a small patrol craft to service. House and harbour rights remain separate, and access after winter ice still depends on local pilots.

## Varnesk
Canteens portion meat by shift entitlement. A late supply train can turn dumplings into thin flour soup without stopping the furnaces.
Mining councils, proprietors and municipal councils govern; workforce voice and civil remedies are not established.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 22.63 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 33.44 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 82.15 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 24.0 | L-eq / month |
| Skilled and salaried households · needs basket | 24.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 24.0 | L-eq / month |
| Accessible ordinary care | 60 | % · provisional access estimate |
| Reliable clean water | 62 | % · provisional access estimate |
| Treasury reserves | 3.94 | months of public spending |
| Political voice | [1, 2] | / 4 evidence band |
| Civil safeguards | [0, 4] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 60; resilience 77.95; voice 37.5; rights 50.0; tension 12.5; security 62.5; growth 58.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → varnesk. Political evidence reviewed 05/11/0068 AC43. Source description: Varnesk is a league of mining councils and industrial proprietors meeting at Corsavik. Norsavia's specialist steel and machinery are valued across Morholt, and southern cultivated towns supply part of the league's food. Cold extraction districts still depend on imported grain and negotiated transport. Commercial relationships with Rovengard and the Haldrevik concessions give its firms influence beyond league borders. Industrial owners and municipal councils can agree on a profitable contract more readily than a prolonged foreign campaign. Technical skill is concentrated in workshops and training networks, not evenly distributed through every settlement or available without fuel, materials and labour. Rovensk provides a charted coastal gateway, with defended access to Garenorrin.
Year review: Norsavia bearing and toolmakers fulfilled deferred maintenance orders, including machinery for Haldrevik. Buyers increasingly specify common gauges and replacement dimensions. Factory throughput improved without a new class of weapon; imported food and disputed foreign concessions still constrain expansion.

## Vaulcerre Basin Leagues

Commercial and estate councils share an enforceable water compact and arbitration; representation remains sectional.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 19.16 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 26.17 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 65.29 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 21.0 | L-eq / month |
| Skilled and salaried households · needs basket | 21.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 21.0 | L-eq / month |
| Accessible ordinary care | 45 | % · provisional access estimate |
| Reliable clean water | 41 | % · provisional access estimate |
| Treasury reserves | 2.57 | months of public spending |
| Political voice | [1, 2] | / 4 evidence band |
| Civil safeguards | [2, 3] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 45; resilience 70.36; voice 37.5; rights 62.5; tension 12.5; security 62.5; growth 55.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → other-otranto-1100. Political evidence reviewed 05/11/0068 AC43. Source description: Anselleuil’s reservoir command, Jarnan’s commercial council and the estate assemblies around Votane share a drainage basin but not a government. Their water compact survived the destruction of the authority that first imposed it. Gates must open in an agreed order; delaying an upstream release can destroy a downstream planting season. Brannervaux engineers are employed as arbitrators and suspected of favouring their own merchants. Grain barges, mill repair and fertiliser works sustain the towns. Disputes usually begin as inspections, impoundments and unpaid maintenance bills before soldiers become involved. Cortelune provides a charted coastal gateway, with defended access to Leignay. Offshore charter communities of the basin leagues, sharing pilots and navigation dues without a unified sovereign. Charted island harbours: Cernavie.
Year review: Anselleuil reservoir keepers and Jarnan councils renewed the water-sharing compact with Votane estates, using Brannervaux arbiters for disputed measurements. Scheduled gate maintenance was completed. The renewal reduced local delivery disputes without settling all estate claims or creating a federal treasury.

## Veldrassen
Altitude matters as much as latitude. Mountain towns import much of their grain, while court menus display produce from every province as a claim to unity.
Provincial estates constrain crown levies; ordinary household participation and remedies are not established.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 23.1 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 34.14 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 83.58 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 25.0 | L-eq / month |
| Skilled and salaried households · needs basket | 25.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 25.0 | L-eq / month |
| Accessible ordinary care | 61 | % · provisional access estimate |
| Reliable clean water | 68 | % · provisional access estimate |
| Treasury reserves | 2.52 | months of public spending |
| Political voice | [1, 2] | / 4 evidence band |
| Civil safeguards | [0, 4] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 61; resilience 65.02; voice 37.5; rights 50.0; tension 12.5; security 62.5; growth 61.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → veldrassen. Political evidence reviewed 05/11/0068 AC43. Source description: Veldrassen is a composite monarchy whose mountain court at Cavrelisse presides over provinces ranging from tropical cultivation to cold industrial uplands. Mondessore's locomotive works and a large railway economy give the crown considerable military weight; provincial estates nevertheless control much of the revenue and recruitment on which it depends. The lowlands sell food and forest products uphill, while machinery and government contracts travel back down. Coal exports and heavy engineering sustain foreign influence. Court ceremony presents this diversity as unity, but extraordinary levies still require bargaining. Cervaud is a neighbouring buffer and customer, not a province awaiting effortless annexation. Valdorelle provides a charted coastal gateway, with defended access to Latosane. A provincial coastal dependency with fishing villages and navigation stations supplied from Valdorelle.
Year review: Mondessore works completed a locomotive overhaul programme and adopted common inspection gauges across participating provincial depots. Through-freight availability improved, but provincial procurement remains divided. Replacement armoured vehicles and aircraft entered service; obsolete and worn machines were withdrawn. No consolidation of provincial armies occurred.

## Veylac
Cooperative dining rooms compete with private factory canteens. Imported coastal fish is popular but more expensive than the local root-and-grain staples.
Municipal representation and contested labour participation are explicit; civil remedies are not specified.
| Input | Value | Unit / meaning |
|---|---:|---|
| Labouring and smallholder households · monthly disposable resources | 24.07 | L-eq / reference household |
| Skilled and salaried households · monthly disposable resources | 35.61 | L-eq / reference household |
| Professional and asset-owning households · monthly disposable resources | 86.55 | L-eq / reference household |
| Labouring and smallholder households · needs basket | 25.0 | L-eq / month |
| Skilled and salaried households · needs basket | 25.0 | L-eq / month |
| Professional and asset-owning households · needs basket | 25.0 | L-eq / month |
| Accessible ordinary care | 62 | % · provisional access estimate |
| Reliable clean water | 64 | % · provisional access estimate |
| Treasury reserves | 2.27 | months of public spending |
| Political voice | [2, 3] | / 4 evidence band |
| Civil safeguards | [0, 4] | / 4 evidence band |
| Domestic tension | [0, 1] | / 4 evidence band |
| Security pressure | [1, 2] | / 4 evidence band |

Calculated components (0–100): health 62; resilience 63.53; voice 62.5; rights 50.0; tension 12.5; security 62.5; growth 61.0.
Household budgets, assumptions and annual review: DEVELOPMENT-REFERENCE.md.
Evidence: national-current.json → veylac. Political evidence reviewed 05/11/0068 AC43. Source description: Veylac is an industrial republic centred on Alescogne's councils, Bellorante's machine-tool works and Rionvesse's ocean trade. Municipal and commercial representation gives organised towns influence, while labour's place in government remains contested. Temperate farming districts provision cold upland factories; dry interior towns specialise in transport and practical manufacturing. Skilled metallurgy gives the republic valuable exports and military equipment, but imported food and fuel remain strategic dependencies. Ossavren's divided neighbours create both markets and frontier risks. The republic's cities are linked by production and commerce, without sharing one uniform climate, social hierarchy or relationship with factory employers. Veylac customs and lighthouse districts protecting its southern approaches. Charted island harbours: Cavresset.
Year review: Bellorante dispersed critical gauges and duplicate drawings after a Hunter strike on an outlying industrial relay and repair depot on 12/04/0068. Replacement communications restored the main service in Month 5; loss and workshop withdrawal exceeded completed armoured-vehicle returns. Rionvesse continued shipping. Machine-tool output recovered unevenly and exposed frontier sites still lack full redundancy.
