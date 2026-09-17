## Revision 41 — settlement descriptions and consistent atlas detail

The controlling atlas contains 897 settlements and 34 political territories, with 33 disjoint capacity returns. All were reviewed. Individual prose replaces 890 settlement accounts; seven established scene/location records were retained after review. The random civic_profile fields are removed. Never rerun gazetteer39.py, settlements40.py or other historical generators to rebuild current descriptions. The individual revision41 text and review are in private/settlement-text41.tsv and private/editorial-audit41.json. A unique string is not evidence that a description is meaningful. Describe a place through its actual setting, function, connections and local society; do not assign interchangeable crises to create apparent detail.

World-map.json is the authoritative settlement and political prose. National-register.json mirrors political descriptions and retains its military/economic figures; food remains within each political profile. The downloadable planetary reference now includes the same settlement gazetteer. No new reader panel or second food catalogue has been added. Stable names, identifiers, coordinates, borders, routes, populations, annual growth, capacity figures and campaign state are unchanged. Obsolete state seat-name fields were aligned to the established current city names.

The map uses a global hierarchy: sea routes at world scale; capitals, seats, ports and railways from 1.5x; every ordinary settlement, road and proposed line from 4x. Markers are not hidden because another marker is nearby. Text alone is collision-managed. Region of origin, population and survey_detail are not visibility criteria. Route bounds are cached and used for viewport culling; no route is hidden merely for being short. Tributaries and woodland detail use the regional threshold. Tests cover actual rendered features across all 34 territories at seven scales and phone/desktop widths, alongside interaction tests. Physical iPhone Safari has not been directly tested.

Terrain metadata describes the surrounding survey district, not a claim that houses are built on moving glaciers. Existing ice-district settlements occupy stable exposed ground and depend on imported provisions. Their population and placement have not been silently moved during this editorial revision.

No story time has elapsed. The technical commission remains unresolved at the previous checkpoint.

## Revision 40 — consolidated atlas and political records

The ten former direction-only geographic placeholders now have distinctive names and histories, without changing borders, population or military totals. They remain divided authorities, not ten newly unified states. Read world-map.json for political and settlement identities, national-register.json for capacity and older arts, and food-cultures.json for the table. Each national profile contains its current political description and food record; keep these synchronised. private/political-names40.json and private/settlement-names40.json preserve aliases and rolls. The latter replaces 328 remaining names from the repetitive original naming grid. Stable IDs, established story names and historical transcripts are unchanged. The 51 remaining exact duplicate settlement accounts have also been individually rewritten; all 897 settlement names and descriptions are distinct. See private/settlement-description-audit40.json.

The reader has one visible political selector and an integrated national entry, including cuisine. Comparison and census detail open on demand. Do not restore a standalone Food Cultures panel, duplicate nation accordions or an embedded copy of the complete planetary reference. The full reference remains downloadable. Important Auvrienne/Serravonne details now reside in their settlement entries. No story time, character state, inventory, money or population has changed.

Short district roads no longer disappear solely because they occupy fewer than 48 screen pixels. Lucaune–Lucegno uses the same district visibility threshold as other local roads. Route extents reject offscreen work. Zoom caches viewport dimensions, batches gestures and avoids the world-wide blur. The portrait is separately cached for the installed app instead of repeating its base64 data in every edition. Current atlas: 897 settlements, 1928 segments.

# Current continuity — revision 39

This is an out-of-character handover checkpoint, separate from the immersive slate. Read later transcript entries for subsequent developments. The present update corrects actual atlas sampling and through routes, expands civic and food records, and establishes the last major Hunter Culling: no story time passes.

## Current scene

Galahad has returned to his private room in the Collegium residential annex, Auvrienne, in the March of Veyrasse on Vesalius. It is evening, ten months and eleven days after enrolment. He is approximately two local years old and eight and a half feet tall, still growing. The narrative has paused while he begins examining his technical commission.

Deputy Inspector Cyrrel Vaust accepted a private 100-lorrat bribe. Approval subsequently granted a 60-lorrat commission: 30 credited as an advance, 30 due upon delivery. Galahad now has **560 lorrats**, principally held through the bursar. The outstanding 30 is not yet earned. One lorrat equals 100 brins; a skilled worker earns roughly 25 lorrats a month as a reference, not a universal wage.

The examination covers the southern pumping works, uphill delivery main and upper service reservoir. A costed report is requested within three weeks, with notification if records or access cause delay. He has scoped records access and accompanied inspections, not authority to alter equipment or command employees. Different daily measurement cutoffs have been noticed. No final diagnosis, proven fraud, completed repair or permanent appointment has occurred. There is no Margrave audience yet.

He has completed all Collegium curricula, read its library twice, become a resident scholar and occasional teacher, made useful connections, and demonstrated successful municipal engineering. Knowledge is multidisciplinary. He continues private fabrication, hunting and psychic practice. Do not mistake the civil commission for a limit on his interests or intelligence.

## People and family

- **Corva Orsival** is his mother figure and principal caregiver; he has called her Mum. **Veskan Orsival** is his trusted father figure. They remain married but live separately following the death of their shared son in a Hunter railway attack. Orsival is Veskan's surname retained by Corva. Their child's name and Corva's birth surname are unestablished. Different expressions of grief do not imply fault, unequal love or psychic shielding.
- **Odran Savel** facilitated Collegium admission and lodging; he knows selected work and the bone sword, with a purchased-bone cover story.
- **Ottrel Cevrane** is the works-engineering contact. **Iseva Dorlac** sells Galahad's charms. **Valesse Orchant** instructs him in the older arts. **Leont Vardesca** is the railway superintendent, not a general ruler of Serravonne.
- Galahad has introduced Corva's family name to officials, but legal registration of **Galahad Orsival** remains unresolved. The current commission records Galahad.
- A future noble House Orsival is an intention: Galahad as founder/head, Corva as Lady and Mother of the House, Veskan as Sir and Father of the House. Neither parent is regent. No title, grant, company, household move or reconciliation has been enacted.

Retain canonical spellings in new prose; preserve user variants such as Vaskan or Saval in the exact transcript.

## Holdings and demonstrated abilities

No weapon is currently equipped. The heavy, guardless **Vouressan-bone greatsword** is stored wrapped in his room. He made it after the established unarmed kill; Corva and Veskan know the account. It has inscriptions but no proven protective enchantment. Clothing: refitted charcoal coat, pale shirt, dark trousers and leather boots.

Other holdings include commission records, research, architectural designs, acquired books, clockwork bird, miniature engines, intricate mechanical snake, charms and materials. Earlier supplies left with Corva have not silently moved into the room. The snake uses a small heat engine: water is working fluid, with a separate heat source; it is not powered by water alone. Magnification was a convenience, not a biological necessity.

He has demonstrated exceptional learning, fabrication, telekinesis, fragmentary psychic reception, emotional influence and emerald lightning against wildlife. Emotion shaping is powerful but does not automatically override every duty or compel unlimited compliance. Reception is not omniscience or a truth detector. Some charms retain faint impressions for hours; reliable luck protection and durable psychic materials remain unproven. No direct Hunter battle or recovered alien equipment has been awarded.

Dorlac currently accepts the invented exclusive Ceralte supplier explanation. That supplier is fictional; no genuine invoice, licence or guaranteed immunity from scrutiny exists. Psychic pressure and cover stories can have practical consequences without arbitrary automatic discovery.

The proposed semiautomatic service rifle and enlarged personal derivative remain design intentions, not built inventory. Civil improvements, financial independence and a route toward influence at court remain prospective player directions.

## Controlling world details

Malaspina was a habitable Golden Age colony. A local late-DAoT collapse and regression preceded Hunter appropriation; the Age of Strife completed isolation. It was never Imperial. Its soil, climate and predominantly ordinary flora remain Earth-like. The danger is an engineered hunting preserve, not an Imperial Death World classification.

Roughly four fifths or more of wild animal lineages descend from Hunter engineering, including supporting prey and scavengers. Human experiments produce many dead or damaged subjects and some feral hulking quarry. Locals know monsters and rumours; Galahad does not automatically know the hidden provenance. Hunters use human resistance as a testing demographic and preserve a large overall population, without protecting individual settlements.

Hunters are original regional xenos closely inspired by Predator/Yautja aesthetics and behaviour: masks, armour, active camouflage, sensors, pulse weapons, trophies and advanced craft. Their species name remains unrevealed. Individual hunts differ from multi-ship suppression raids, which can kill or capture 50–75 percent of a **targeted settlement**. This is not an annual planetary casualty rate. Surveillance and collaborators help identify concentrations of technology; no existing NPC is automatically a collaborator.

Local reproducible technology uses **end-of-1938** as the agreed real-world reference, with older equipment widespread. This does not limit Galahad's independent inventions. Captured Hunter devices are exceptional, with some operation and limited repair possible; their advanced cores are not routinely manufactured locally. No functional Imperial weapons, STC industry or native space programme is established.

Magic is a real but rare set of locally interpreted practices. Schools can contain many nonpsychic scholars and very few capable practitioners. The Collegium's scepticism is local, not planetary disbelief. Do not invent universal published psyker percentages or a fixed roster from demographic expectations.

## Atlas and population

The active continuous atlas is `world-map.json`; the separate old regional map is no longer the phone interface. Original Eastern Marches sites, distances and journey times are retained through a coordinate transform. Added district settlements do not move established cities or create a transcontinental railway. The direct Karsenne–Calvernis railway remains proposed. Cressault remains disputed.

Three inhabited continents: Otranto, Morholt and Vesalius. Boreal and Austral polar landmasses have no recorded permanent population. World circumference is approximately 36,000 km. Coordinates use an equirectangular projection; polar distortion is expected. Rivers, relief and climate must remain physically coherent when editing.

Present population is **1,209,200,000**, across 33 non-overlapping census groups. Current combined annual trend: **+4,147,120**. Cities are subsets, not extra population. Cressault's 180,000 are already included in Veyrasse. The former southern Serevask federation’s figure is split among four independent administrations; it never governed Vesalius. New settlements draw from uncharted/rural returns. Demographic time begins at the current scene and has not advanced during the map work.

All character ages, local history and population rates use **local elapsed years**. The system is in Imperium Nihilus; there is no uniform clock ratio across Nihilus. The private handover preserves agreed offworld timing and concealed experiments. Do not divide Galahad's existing age or history by a time-conversion ratio.

## Superseded statements

Earlier references to a Death World, the species name Vordrake, mandatory chronic pain or a replacement birth defect, a true Primarch power level, strict genetic obedience, completed nobility, a functioning direct Karsenne–Calvernis railway, or absent world geography must not re-enter current prose. Preserve the original archive and read these corrections alongside it. Galahad is a perfected proto-Primarch; the detailed accepted physiology and concealed programme are in the private handover.


## Accepted founder clarification — revision 37

Galahad remains a perfected proto-Primarch with a stable, independently developed soul and no chronic integration pain. At comparable maturity, his overall physical, cognitive, resilience and psychic potential modestly exceed the campaign’s Alpha Primus benchmark. Psychic engineering remains his specialisation. This does not confer mastery of every discipline or advance his current abilities. No full-Primarch promotion or new defect has been enacted.

The accepted origin treats Bile’s work as integrated development of a distinct founder, building on the achievement represented by Primus alongside Bile’s cloning and New Men research. Reliability, rather than deliberate weakening for controllability, explains the design choice. Genetic dispositions matter without dictating identity or player decisions. Detailed source distinctions remain in the private handover; do not revive the earlier proposed reduction to only Primus’s demonstrated feats.

The Auvrienne 762 image is future firearm concept art, not a manufactured weapon. Ammunition discussions remain design discussion, not tested armour penetration, a completed breakthrough or awarded equipment.

## National staff returns — revision 38

The national-register.json file records 33 disjoint national or geographic returns aligned with the census. Economic output, public revenue and defence expenditure are annual flows in constant-price lorrat equivalents, not treasury holdings or a universal currency. Standing forces, additional reserves, sustainable field forces and serviceable equipment are distinct measures. Field strength is a subset of standing personnel, not an additional army. Technology is assessed across eight industrial domains; logistics, readiness and cohesion are separate ratings. No aggregate score determines victory.

Divided jurisdictions remain divided and are excluded from default rankings. Cressault is already included within Veyrasse accounting without deciding sovereignty. Serevask does not command its former federal partners. Rare practitioners and captured devices have no manufactured national quotas. No mobilisation or equipment award has occurred.

Map detail now appears by settlement significance, population and screen spacing throughout the atlas; the current atlas has 897 sites and 1928 routes. Population and original measured routes are unchanged. Read private/national-capacity38.md for future update rules when the private handover is available.

## World revision 39 — controlling update

The actual map now has 897 settlements and 1928 transport segments. The 59 excessive revision36 Marches markers and redundant incident roads were removed from the chart; their population returns to uncharted/rural accounting, with no deaths, movement or elapsed time. All 887 pre-revision36 sites remain, alongside ten retained Marches centres. Original seven story sites and measured segments are unchanged. Northern road access runs from Valdrec toward Vardol, southern access from Miravelle toward Kelbrun, and western access from Drossane toward Averholt. The proposed Karsenne–Calvernis railway is not open. Removal of the measured-route accordion is presentation only; regional-map.json remains the historical measured source.

The current Serevask Republic has thirteen million inhabitants. Its former federation was confined to the southern basin partners Serevask, Varnelle, Kelbrun and Gavrel; it never governed Vesalius. Post-Culling reconstruction disputes broke the effective union. Four separate returns total58.4million. Forty-three repetitive, unvisited principal-city names have been corrected with fixed Python rolls in private/name-corrections39.json. Stable IDs remain; old names in historical transcripts are aliases, not additional cities or events.

Vouressan bone generally is prized. Galahad used jaw/skull bone for his particular sword; cranial bone is not a uniquely valuable material or separate species trait.

Read food-cultures.json and CULTURE-AND-HISTORY.md for the thirty-three regional food returns. Shared geography, trade and former unions explain overlap; class, season and access change the table. Use food and drink naturally when it supports a scene, setting or relationship, not as mandatory decoration. Do not choose Galahad’s tastes or actions for him. He may eat for pleasure without ordinary-human hunger penalties. Most food comes from conventional cultivated crops, managed livestock and fisheries, not trophy predators.

The Long Culling ended67local years before the present return after3years of overlapping campaigns. Approximately56%of1.54billion were removed:37%killed and19%captured, leaving677.6million on-world. These are uncertain retrospective estimates. The67-year recovery reaches today’s1.2092billion through initially faster growth that slowed toward current conditions; present annual rates must not be projected backward unchanged. See purge-history.json and private/purge39-demographic-model.json. Historical major-purge intervals average about100years, commonly50–150, with a24-year shortest correlated interval. This is a responsive hunting policy, not a timer or guaranteed imminent event. Individual hunts, selective settlement suppression and rare preserve-wide cullings are separate scales. Captured people are not automatically dead. Do not retroactively assign the Orsivals’ son to the major Culling or invent an NPC’s personal experience of it.

No story time, character power, inventory, money, commission progress or demography has advanced.

Revision39 also replaces509repeated-root, unvisited district names. See private/district-name-corrections39.json for exact old-name aliases and fixed Python choices. Historical transcript names are preserved; IDs, populations and positions remain unchanged.

Geographic label correction: the old Southern Otrantian aggregate is the Vaulcerre Basin Leagues, and the old Western Otrantian aggregate is Cavressa Principalities. Stable census IDs, boundaries and totals are unchanged; labels now follow their actual positions.
