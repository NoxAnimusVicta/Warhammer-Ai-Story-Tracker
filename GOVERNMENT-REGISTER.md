# Government, leadership and succession

Baseline: **05/11/0068 AC43**. The register covers all 43 national, colonial and divided geographic returns. Existing institutions and named Veyrasse figures are preserved. Previously unnamed officeholders, appearances and personalities are new campaign worldbuilding established by the player's request, not newly discovered census facts. No meeting, death, coronation or passage of time is enacted by this addition.

## Reading authority

A ruler's title is not a power rating. Hereditary executives generally hold personal appointment and diplomatic powers; councils, estates, constitutions, creditors, officers and available resources determine whether orders can be carried out. Republics range from restricted commercial franchises to broader communal assemblies. A president with reliable executive powers can be stronger in practice than a monarch dependent on provincial consent.

Every record identifies the governing institutions, executive limits, senior civil representative, military leadership and succession procedure. Divided territories have **local** officeholders, not a fictitious ruler or commander of their combined army. In colonies, mainland appointment and local jurisdictions remain distinct. A named military coordinator commands only assigned or consenting forces. These are principal interaction figures, not an exhaustive cabinet or every claimant in a fractured territory.

The officeholder's personality informs proposals, negotiations, enforcement style and tolerance for risk. It does not automatically change GDP, army strength, rights or loyalty. A successor inherits an office and its constraints, not the predecessor's personality. A new government type requires an enacted constitutional or political change; it does not follow automatically from a death.

## Ages and continuity

New ages are completed local years at the baseline; existing Veyrasse age ranges and unknown birthdays are preserved. The builder calculates current age intervals from elapsed local days without advancing story time. A new calendar year does not give everyone an immediate birthday. A full elapsed local year increases both ends by one. Death freezes age at the death date. Preserve identity IDs and the dated baseline; do not repeatedly add years to an already projected age.

Appearance, health and personality are separate. Age directly raises ordinary mortality risk; the interwar European reference and national lifespan estimates are recorded in DEVELOPMENT-REFERENCE.md. A scar or disability does not establish imminent death or incompetence. No ordinary human has assumed life extension. Traits are tendencies, not compulsory dialogue or a guarantee of loyalty. Personal relationships and changes of belief require recorded experience. Character knowledge remains separate from narrator knowledge; this register grants Galahad no private access to foreign rulers.

## Annual leadership review — required at every local new year

The ordinary build never rolls deaths. Before advancing past 01/01, complete a dated review of every tracked figure who lived during the review period. The build refuses a missing or incomplete annual review. The first review covers the partial period from 05/11/0068 to 01/01/0069; it must not apply a full year of risk to those weeks. Later reviews cover only time not already reviewed. A multi-year skip requires each intervening review, so a dead ruler cannot govern until the final year of the skip.

For each person:

1. Check current age, established health, actual residence and exposure, local medical capability, and recorded conflict, epidemic, accident or attack events. National crude mortality is not an individual death probability; it includes children and different living conditions. A country at war does not place every minister in a trench.
2. Resolve established narrative outcomes first. For genuine uncertainty, start from the computed age-related historical reference band, then record an explicit scenario-based probability and modifiers **before** a Python random roll; retain the roll privately. Use the elapsed-period adjustment `1 − (1 − annual probability)^(days / 365)` for ordinary background hazards. Rates are campaign modelling assumptions, not medical predictions. Do not assign a fresh assassination plot, epidemic or Hunter attack merely to fill a table; exceptional hazards need a recorded cause and exposure.
3. Record continued service, death, incapacity, retirement, term expiry or removal, with evidence. Survival is a valid result; there is no quota of deaths. Do not reroll a completed review or roll again for a fatal event already resolved in a scene. Avoid double-counting ordinary deaths already included in demographic projections; link exceptional losses to the shared event ledger.
4. Review mandates, appointments and any established election dates as well as health. Annual review is not an invented annual election. For heredity use the recognised heir and lawful eligibility; for councils, appointment or election; for colonies, mainland authority; for military roles, civil appointment. Respect Veyrasse's established order, the consort's lack of co-sovereignty and Darscelet's temporary coordination role.
5. On any vacancy, immediately record a **named acting or permanent successor** with age baseline, appearance, personality, health, remit and selection basis. A candidate or deputy is not automatically the permanent successor. Keep the previous person and death/departure record; never overwrite them out of history. If a designated heir dies, record the newly recognised heir with the same fields.
6. Record policy consequences separately: proposed reforms, resistance, command relations and any actual changes to budgets, rights, unrest, diplomacy or military readiness. Update the social evidence and affected source ledgers only where something changes; no automatic national bonus or penalty for a personality trait.

Material events are recorded immediately rather than waiting until new year. Important consequences reach Galahad through appropriate letters, reports or NPCs, respecting travel and secrecy. This system is maintained during story progression; it is not a wall-clock background simulation.

## Files and event format

- government-register.json preserves the initial institutions and biographies.
- government-events.json contains chronological events and annual reviews.
- government-current.json and this reference are generated at the current published date.
- governments.py validates replay, succession completeness, age intervals and annual coverage.

An event has `id`, `date`, `polity`, `reason`, `source`, and `changes` with exact `old` and `new` values. Allowed changes cover institutions and the people list. Preserve old IDs; departed people require departure_date, departure_reason and successor_id. Death additionally requires cause_of_death. The successor must exist, be active and occupy the vacated office; whether acting or confirmed belongs in their remit. A constitutional reorganisation may first revise the institutional fields and must explicitly reconcile the replaced offices.

An annual review has unique id, date (01/01/YYYY AC43), reason and people entries: person_id, outcome, basis, and event_id for every outcome other than continues. All relevant people must be covered, including those who died during the period. Future entries remain unapplied. Old-value mismatches stop the build. Private rolls are never uploaded. No future deaths or winners are preselected here.

## Veyrasse continuity

Odrienne Orcemont remains a competent but unequal and possessive patron. Maurelle remains entitled and thin-skinned despite education. Vaucerin remains a decent professional officer; Darscelet remains the exacting staff planner. Their future deaths, support for Galahad, succession disputes or a coup are not predetermined. The existing [Veyrasse leadership reference](VEYRASSE-LEADERSHIP.md) supplies the detailed charter, family and legal context. No Royal Advisor appointment has been awarded by this maintenance.


## Mortality fields required for annual reviews

Each person entry includes mortality_review with period_days, age_range, baseline_percent (the calculated historical band), annual_probability, period_probability, health_and_exposure_basis and resolution_basis. The age range must describe the review period, and local lifespan/health conditions must inform the choice. Very large reductions require a recorded longevity_exception: type, event_id and effect. Only Hunter intervention, a psychic feat, invented longevity treatment or acquired xenos treatment qualify. No event is implied by a placeholder. Ordinary clinical care and privilege can improve outcomes without conferring agelessness. National life expectancy is recalculated from annually reviewed household/health conditions; it is never used as a compulsory death age.


## Current register — 25/02/0069 AC43

## Veldrassen

**Composite hereditary monarchy**

Veldrassen is a composite monarchy whose mountain court at Cavrelisse presides over provinces ranging from tropical cultivation to cold industrial uplands. Mondessore's locomotive works and a large railway economy give the crown considerable military weight; provincial estates nevertheless control much of the revenue and recruitment on which it depends. The lowlands sell food and forest products uphill, while machinery and government contracts travel back down. Coal exports and heavy engineering sustain foreign influence. Court ceremony presents this diversity as unity, but extraordinary levies still require bargaining. Cervaud is a neighbouring buffer and customer, not a province awaiting effortless annexation. Valdorelle provides a charted coastal gateway, with defended access to Latosane. A provincial coastal dependency with fishing villages and navigation stations supplied from Valdorelle.

**Executive authority.** The sovereign directs diplomacy, appoints senior officials and issues executive orders. New revenues, provincial obligations and lawful succession remain subject to the recorded charter or compact; personal will does not create available resources.

**Selection and succession.** The recognised heir succeeds subject to lawful eligibility and confirmation under the existing charter or compact. Regency requires institutional approval. Military command never passes by blood.

**Mandate review.** Hereditary tenure; annually review eligibility, incapacity and regency.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Sovereign — Lucelle Nemeret

Age 63–64 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Tall and narrow-shouldered, with close-cropped dark hair, a long nose and carefully mended formal cuffs.

**Personality.** Patient provincial negotiator, proud of dynastic continuity; buys consent with contracts and resents public contradiction.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 2.34–3.48%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Crown Marshal — Tristan Rovantin

Age 66–67 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Broad-faced, with greying curls, warm brown skin and an immaculate high-collared coat.

**Personality.** Methodical railway planner; mistrusts provincial officers who promise men they cannot supply.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 3.06–4.59%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### First Minister — Odette Sarvigne

Age 57–58 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Compact and erect, with pale freckled skin, swept-back auburn hair and quick grey eyes.

**Personality.** Careful procedural negotiator; remembers promises and resists shortcuts, but can let consultation become delay.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.41–2.06%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Recognised heir — Sylvain Nemeret

Age 23–24 local years; alive. Completed local years at baseline; birthday unrecorded.

**Appearance.** Lean and weathered, with a narrow mouth, dark hair tied at the nape and ink-stained fingertips.

**Personality.** Affable coalition broker; good at restoring working relations, less willing to confront profitable abuses.

**Authority.** Prepared for succession and council work; no independent sovereignty or military command. Adult child of the sovereign, recognised under the succession settlement.

**Health.** No disabling condition established.

Ordinary annual age-based mortality reference: 0.29–0.33%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Ostrevain

**Landed hereditary monarchy**

Ostrevain is an agricultural monarchy attempting to turn crop surpluses and a large population into industrial military strength. Orsevigne holds the royal administration; Tessarone concentrates arsenal work, supported by plantation and farming railways. Landed families retain influence over recruitment and produce, while royal commissioners favour factories and central procurement. Its armed forces can draw many soldiers, but transport and imported precision equipment constrain their deployment. Cervaud offers a market and a political buffer. In daily life the contrast is between estate authority, regimented industrial wards and expanding commercial towns, rather than between a uniformly modern capital and an empty countryside. Salterivo provides a charted coastal gateway, with defended access to Yssois. Royal coastal dependency with a governor, local fishing communities and an agricultural resupply station. Charted island harbours: Villessia.

**Executive authority.** The sovereign directs diplomacy, appoints senior officials and issues executive orders. New revenues, provincial obligations and lawful succession remain subject to the recorded charter or compact; personal will does not create available resources.

**Selection and succession.** The recognised heir succeeds subject to lawful eligibility and confirmation under the existing charter or compact. Regency requires institutional approval. Military command never passes by blood.

**Mandate review.** Hereditary tenure; annually review eligibility, incapacity and regency.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Sovereign — Nerine Sorelli

Age 66–67 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Long-limbed, with deep brown skin, a shaved head and a slight squint when reading fine print.

**Personality.** Ambitious industrial patron; admires factory output and understates the hardship imposed by estate recruitment.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 3.06–4.59%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Marshal of the Royal Army — Yselle Serravin

Age 52–53 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Stocky, with olive skin, thick silver-streaked hair and a slow, deliberate walk.

**Personality.** Disciplined organiser of large formations; distrusts fashionable machines without spare parts.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.96–1.4%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Chief Royal Commissioner — Heloise Orselle

Age 47–48 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Lean and weathered, with a narrow mouth, dark hair tied at the nape and ink-stained fingertips.

**Personality.** Bright and impatient reformer; wants transparent accounts, yet underestimates the allies needed to pass them.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.68–0.99%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Recognised heir — Olivier Sorelli

Age 22–23 local years; alive. Completed local years at baseline; birthday unrecorded.

**Appearance.** Round-faced, with cropped chestnut hair, dark eyes and a habit of adjusting a plain signet ring.

**Personality.** Reserved institutional loyalist; protects continuity and competent staff, sometimes confuses established practice with necessity.

**Authority.** Prepared for succession and council work; no independent sovereignty or military command. Adult child of the sovereign, recognised under the succession settlement.

**Health.** No disabling condition established.

Ordinary annual age-based mortality reference: 0.28–0.33%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Rovessara

**Oligarchic merchant republic**

Rovessara is a merchant republic governed through commercial councils. Bellacenne houses finance and administration, Avellori supplies precision instruments and electrical apparatus, and Pellavore connects both to overseas buyers. Temperate farming districts, seasonal lowlands and a dry interior give its domestic economy several distinct faces. Banks and shipping houses can finance projects far beyond the republic, but they cannot manufacture uninterrupted sea lanes or unlimited raw materials. Its strength lies in skilled production, credit and trade rather than the largest army. Inland towns consequently matter as food suppliers and customers, not merely as lesser copies of its fashionable port cities. Republican overseas districts administered through elected harbour councils and Rovessaran customs officers. Charted island harbours: Marcavisse.

**Executive authority.** The executive is selected by the constituent councils or assemblies, which approve common supply and major commitments. Delegated administration allows routine decisions; it does not override local jurisdictions or create universal suffrage.

**Selection and succession.** The constituent council or assembly selects the executive. The named deputy keeps routine business moving during a vacancy but requires confirmation for a permanent mandate. Civil institutions appoint the professional military leadership.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### First Consul — Gaspard Barvaux

Age 62–63 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Round-faced, with cropped chestnut hair, dark eyes and a habit of adjusting a plain signet ring.

**Personality.** Elegant negotiator who listens for price before principle; honours profitable contracts but neglects unbankable needs.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 2.14–3.18%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Admiral of the Republic — Rosaline Castrel

Age 50–51 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Tall, with dark skin, silver at the temples and a low voice that carries without effort.

**Personality.** Cool convoy specialist; will abandon an exposed cargo to preserve crews, earning both loyalty and accusations of timidity.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.83–1.21%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Deputy Consul — Dorian Lorrain

Age 57–58 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Small-framed, with tawny skin, tightly curled hair and wire-framed reading spectacles.

**Personality.** Affable coalition broker; good at restoring working relations, less willing to confront profitable abuses.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.41–2.06%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Brannervaux

**Federation of cities, estates and water authorities**

Brannervaux is a federation of basin cities, landed districts and water authorities. Rivessole hosts common government; Molessac's pumping and engineering works turn the management of scarce or badly timed water into a major export industry. Productive cultivation coexists with dry rain-shadow districts dependent on imported food and controlled supplies. Members cooperate over transport, maintenance and defence while retaining powers that can delay a common decision. Trade with Veldrassen's factories and neighbouring agricultural states is extensive. The federation is confined to its own territories: neither its river institutions nor its name imply rule over Otranto as a whole.

**Executive authority.** The executive is selected by the constituent councils or assemblies, which approve common supply and major commitments. Delegated administration allows routine decisions; it does not override local jurisdictions or create universal suffrage.

**Selection and succession.** The constituent council or assembly selects the executive. The named deputy keeps routine business moving during a vacancy but requires confirmation for a permanent mandate. Civil institutions appoint the professional military leadership.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Federal Convenor — Fleur Delmorne

Age 57–58 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Square-shouldered, with a lined forehead, fair skin and a neat side part above an old eyebrow scar.

**Personality.** Careful arbitrator who insists on measured flows; compromises on ceremony, never on an unrecorded maintenance liability.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.41–2.06%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Defence Commissioner — Deliane Serravin

Age 52–53 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Slender, with brown skin, black hair worn long and still hands folded over a document case.

**Personality.** Patient engineer-officer; secures locks and stores before promising a field operation, sometimes too slowly for frontier delegates.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.96–1.4%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Deputy Convenor — Arielle Arvelle

Age 37–38 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Heavy-set, with ruddy cheeks, thinning sandy hair and carefully polished practical boots.

**Personality.** Reserved institutional loyalist; protects continuity and competent staff, sometimes confuses established practice with necessity.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.4–0.51%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Cervaud

**Hereditary buffer duchy**

Cervaud is a hereditary duchy whose court and officer institutions occupy Charvessant. Vezarolle's workshops support an army unusually important to public life, but cultivated lowlands, forest produce and upland farming sustain the civilian population. The duke bargains with larger Veldrassen and Ostrevain rather than enjoying complete strategic independence. Their credit and arms help preserve the frontier while giving foreign purchasers influence. Border markets also connect Cervaud with smaller neighbouring authorities. Rank and military service carry prestige, yet merchants, farmers and workshop households have livelihoods extending across the same boundaries that officers are expected to defend.

**Executive authority.** The sovereign directs diplomacy, appoints senior officials and issues executive orders. New revenues, provincial obligations and lawful succession remain subject to the recorded charter or compact; personal will does not create available resources.

**Selection and succession.** The recognised heir succeeds subject to lawful eligibility and confirmation under the existing charter or compact. Regency requires institutional approval. Military command never passes by blood.

**Mandate review.** Hereditary tenure; annually review eligibility, incapacity and regency.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Duke — Fabien Vasselin

Age 61–62 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Tall and narrow-shouldered, with close-cropped dark hair, a long nose and carefully mended formal cuffs.

**Personality.** Courteous, status-conscious survivor who plays patrons against each other; privately fears becoming a client in all but name.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.96–2.91%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Marshal — Pascal Cavellier

Age 42–43 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Broad-faced, with greying curls, warm brown skin and an immaculate high-collared coat.

**Personality.** Forthright veteran who favours shorter reserve rotations; considers wasting harvest labour a military failure.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.51–0.7%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Chancellor — Valerie Seravin

Age 40–41 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Compact and erect, with pale freckled skin, swept-back auburn hair and quick grey eyes.

**Personality.** Sharp critic of waste; listens to practitioners but can humiliate officials whose figures do not add up.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.45–0.61%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Recognised heir — Aurelie Vasselin

Age 32–33 local years; alive. Completed local years at baseline; birthday unrecorded.

**Appearance.** Square-shouldered, with a lined forehead, fair skin and a neat side part above an old eyebrow scar.

**Personality.** Careful procedural negotiator; remembers promises and resists shortcuts, but can let consultation become delay.

**Authority.** Prepared for succession and council work; no independent sovereignty or military command. Adult child of the sovereign, recognised under the succession settlement.

**Health.** No disabling condition established.

Ordinary annual age-based mortality reference: 0.34–0.39%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Veylac

**Industrial municipal republic**

Veylac is an industrial republic centred on Alescogne's councils, Bellorante's machine-tool works and Rionvesse's ocean trade. Municipal and commercial representation gives organised towns influence, while labour's place in government remains contested. Temperate farming districts provision cold upland factories; dry interior towns specialise in transport and practical manufacturing. Skilled metallurgy gives the republic valuable exports and military equipment, but imported food and fuel remain strategic dependencies. Ossavren's divided neighbours create both markets and frontier risks. The republic's cities are linked by production and commerce, without sharing one uniform climate, social hierarchy or relationship with factory employers. Veylac customs and lighthouse districts protecting its southern approaches. Charted island harbours: Cavresset.

**Executive authority.** The executive is selected by the constituent councils or assemblies, which approve common supply and major commitments. Delegated administration allows routine decisions; it does not override local jurisdictions or create universal suffrage.

**Selection and succession.** The constituent council or assembly selects the executive. The named deputy keeps routine business moving during a vacancy but requires confirmation for a permanent mandate. Civil institutions appoint the professional military leadership.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Council President — Alban Orcelin

Age 43–44 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Long-limbed, with deep brown skin, a shaved head and a slight squint when reading fine print.

**Personality.** Energetic speaker and committee broker; welcomes technical criticism but deflects demands to widen labour representation.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.53–0.76%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Chief of Defence — Celestin Trevaux

Age 42–43 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Stocky, with olive skin, thick silver-streaked hair and a slow, deliberate walk.

**Personality.** Practical dispersal advocate after the relay strike; prefers resilient workshops over spectacular concentrations of armour.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.51–0.7%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Deputy President — Renato Duvaret

Age 30–31 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Lean and weathered, with a narrow mouth, dark hair tied at the nape and ink-stained fingertips.

**Personality.** Patient organiser with a talent for reassuring rivals; risks promising incompatible groups more than can be delivered.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.33–0.36%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Ossavren successor territories

**Fragmented successor courts and autonomous cities**

Ossavren denotes the territories of a broken crown, not a functioning nation with one army. Ossendrienne remains a vast former capital, while provincial commands, rival courts and autonomous commercial cities control their own taxation and troops. Tressavio trades through Veylac; other districts face Ostrevain or the Seravelle markets. Coal and petroleum resources give competing rulers valuable assets, but tolls, incompatible arrangements and local fighting divide their use. Shared food, family ties and railway habits survive the political fracture. Aggregate military and economic figures measure the whole region's resources; no claimant can simply issue orders to that combined total. Neravisse provides a charted coastal gateway, with defended access to Tatogia. A dependency of Neravisse’s municipal charter, not territory governed by a restored Ossavren crown. Charted island harbours: Cavralto.

**Executive authority.** There is no common sovereign, treasury or supreme military command. Each named figure governs or represents only the institution in the office title. Joint commitments require separate mandates; combined statistics confer no command authority.

**Selection and succession.** Each local institution replaces its own officer through its charter or customary procedure. The third named figure represents a separate authority and is not automatic successor to the first.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Ossendrienne Civic Convenor — Tristan Trevaux

Age 49–50 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Round-faced, with cropped chestnut hair, dark eyes and a habit of adjusting a plain signet ring.

**Personality.** Dry, exhausted mediator who wants the capital fed before a crown restored; accepts ugly toll bargains to keep grain moving.

**Authority.** Speaks for the named local institution only; not sovereign over the combined geographic return.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.78–1.13%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Ossendrienne Garrison Commander — Vivienne Vellori

Age 57–58 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Tall, with dark skin, silver at the temples and a low voice that carries without effort.

**Personality.** Suspicious city defender; protects repair shops and railway mouths, refuses adventures to prove a claimant's legitimacy.

**Authority.** Commands only forces assigned by the named local authority or consenting members; not the whole combined geographic army.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.41–2.06%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Tressavio Council Speaker — Florent Barvaux

Age 52–53 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Small-framed, with tawny skin, tightly curled hair and wire-framed reading spectacles.

**Personality.** Careful procedural negotiator; remembers promises and resists shortcuts, but can let consultation become delay.

**Authority.** Represents the separate local authority named in the office; not a national deputy.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.96–1.4%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Rovengard

**Territorial hereditary monarchy**

Rovengard is Morholt's largest single monarchy, governed from Arvendal and linked to overseas trade through Halsavik. Eslovanne supplies general engineering, while productive southern districts support farming, food processing and timber industries. Cold northern towns depend on transport from those warmer basins. The crown's practical task is to keep provisions and obligations moving between communities separated by difficult country. Varnesk sells specialist machinery; Halskert and Galdresk are connected through local trade and provisioning routes. Large territorial claims and a substantial population therefore do not translate into an army free to abandon domestic roads, stores and defended settlements. Royal island districts with resident councils, coastal patrols and Halsavik supply contracts. Charted island harbours: Veltrund.

**Executive authority.** The sovereign directs diplomacy, appoints senior officials and issues executive orders. New revenues, provincial obligations and lawful succession remain subject to the recorded charter or compact; personal will does not create available resources.

**Selection and succession.** The recognised heir succeeds subject to lawful eligibility and confirmation under the existing charter or compact. Regency requires institutional approval. Military command never passes by blood.

**Mandate review.** Hereditary tenure; annually review eligibility, incapacity and regency.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Sovereign — Arielle Trevaux

Age 49–50 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Square-shouldered, with a lined forehead, fair skin and a neat side part above an old eyebrow scar.

**Personality.** Paternal in public and exacting over winter accounts; values dependable provision more than fashionable conquest.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.78–1.13%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Marshal of the Crown — Alessia Carvesset

Age 52–53 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Slender, with brown skin, black hair worn long and still hands folded over a document case.

**Personality.** Reserved quartermaster by temperament; sacrifices parade readiness to keep dispersed garrisons clothed and fed.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.96–1.4%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Chancellor — Alban Darcourt

Age 58–59 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Heavy-set, with ruddy cheeks, thinning sandy hair and carefully polished practical boots.

**Personality.** Bright and impatient reformer; wants transparent accounts, yet underestimates the allies needed to pass them.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.52–2.24%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Recognised heir — Olivier Trevaux

Age 35–36 local years; alive. Completed local years at baseline; birthday unrecorded.

**Appearance.** Tall and narrow-shouldered, with close-cropped dark hair, a long nose and carefully mended formal cuffs.

**Personality.** Reserved institutional loyalist; protects continuity and competent staff, sometimes confuses established practice with necessity.

**Authority.** Prepared for succession and council work; no independent sovereignty or military command. Younger collateral relative of the sovereign, not their child.

**Health.** No disabling condition established.

Ordinary annual age-based mortality reference: 0.37–0.46%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Varnesk

**League of mining councils and proprietors**

Varnesk is a league of mining councils and industrial proprietors meeting at Corsavik. Norsavia's specialist steel and machinery are valued across Morholt, and southern cultivated towns supply part of the league's food. Cold extraction districts still depend on imported grain and negotiated transport. Commercial relationships with Rovengard and the Haldrevik concessions give its firms influence beyond league borders. Industrial owners and municipal councils can agree on a profitable contract more readily than a prolonged foreign campaign. Technical skill is concentrated in workshops and training networks, not evenly distributed through every settlement or available without fuel, materials and labour. Rovensk provides a charted coastal gateway, with defended access to Garenorrin.

**Executive authority.** The executive is selected by the constituent councils or assemblies, which approve common supply and major commitments. Delegated administration allows routine decisions; it does not override local jurisdictions or create universal suffrage.

**Selection and succession.** The constituent council or assembly selects the executive. The named deputy keeps routine business moving during a vacancy but requires confirmation for a permanent mandate. Civil institutions appoint the professional military leadership.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### League Chair — Pascal Brissot

Age 62–63 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Tall and narrow-shouldered, with close-cropped dark hair, a long nose and carefully mended formal cuffs.

**Personality.** Blunt metallurgist turned negotiator; despises inflated specifications but tolerates harsh labour bargains when deliveries are at stake.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 2.14–3.18%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Defence Director — Heloise Vellori

Age 55–56 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Broad-faced, with greying curls, warm brown skin and an immaculate high-collared coat.

**Personality.** Cautious industrial defender; guards skilled crews and stores, dislikes creditors dictating tactical priorities.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.19–1.76%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Deputy League Chair — Gaspard Rovelle

Age 41–42 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Compact and erect, with pale freckled skin, swept-back auburn hair and quick grey eyes.

**Personality.** Affable coalition broker; good at restoring working relations, less willing to confront profitable abuses.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.48–0.66%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Galdresk

**Chartered wardenship**

Galdresk is a wardenship of chartered orders, estates and civilian towns. Grevallier's medical and teaching institutions and Verniselle's instrument makers give it influence disproportionate to its small industrial base. Farming districts below the colder uplands help provision isolated communities; railways and negotiated access remain essential. Some houses preserve the older arts alongside practical medicine, but genuine practitioners are scarce and do not constitute a mass magical army. Neighbouring rulers value trained personnel and advice. Within Galdresk, obligations of shelter, patrol and care give institutions social authority without making every resident an initiate or every town a monastery. Orlavik provides a charted coastal gateway, with defended access to Millvik. Wardenship navigation and shelter claims. Seasonal landings and small service crews do not imply a dense iceward population.

**Executive authority.** The executive is selected by the constituent councils or assemblies, which approve common supply and major commitments. Delegated administration allows routine decisions; it does not override local jurisdictions or create universal suffrage.

**Selection and succession.** The constituent council or assembly selects the executive. The named deputy keeps routine business moving during a vacancy but requires confirmation for a permanent mandate. Civil institutions appoint the professional military leadership.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### First Warden — Florent Resselin

Age 68–69 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Long-limbed, with deep brown skin, a shaved head and a slight squint when reading fine print.

**Personality.** Quiet physician-administrator; protects training and referral access, but can become possessive of institutional privilege.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 3.71–5.53%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Captain-General of the Wardens — Estelle Sarvigne

Age 67–68 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Stocky, with olive skin, thick silver-streaked hair and a slow, deliberate walk.

**Personality.** Firm local organiser who prioritises escorts, shelter and evacuation; reluctant to lend trained wardens to prestige campaigns.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 3.37–5.04%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Deputy First Warden — Fabien Caldoret

Age 56–57 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Lean and weathered, with a narrow mouth, dark hair tied at the nape and ink-stained fingertips.

**Personality.** Reserved institutional loyalist; protects continuity and competent staff, sometimes confuses established practice with necessity.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.29–1.9%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Halskert

**River and agrarian republic**

Halskert is a republic of river towns, agricultural districts and commercial authorities. Orsendal coordinates government and grain trade; Tresselund manufactures equipment for farms and water works. Productive temperate districts make the republic an important supplier to colder neighbours, while warmer pockets add different crops to its exports. Mill owners, merchants and water authorities bargain over maintenance, freight and taxation. Its transport experience supports defence, but fuel imports and seasonal conditions constrain distant operations. Galdresk buys provisions and trades specialist goods, while Rovengard is both a customer and competitor. Civilian food production is a source of power here, not background scenery. Seldavre provides a charted coastal gateway, with defended access to Orsendal. Republican grain-shipping dependencies with elected port boards and permanent fishing settlements. Charted island harbours: Seldren.

**Executive authority.** The executive is selected by the constituent councils or assemblies, which approve common supply and major commitments. Delegated administration allows routine decisions; it does not override local jurisdictions or create universal suffrage.

**Selection and succession.** The constituent council or assembly selects the executive. The named deputy keeps routine business moving during a vacancy but requires confirmation for a permanent mandate. Civil institutions appoint the professional military leadership.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Council President — Leonie Serravin

Age 63–64 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Round-faced, with cropped chestnut hair, dark eyes and a habit of adjusting a plain signet ring.

**Personality.** Sociable grain broker who remembers small suppliers; avoids ideological fights but dismisses some urban grievances as seasonal noise.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 2.34–3.48%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Defence Commissioner — Clarisse Arvelle

Age 52–53 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Tall, with dark skin, silver at the temples and a low voice that carries without effort.

**Personality.** Unshowy transport officer; thinks in river levels and reserve stores, dislikes deployment beyond reliable provisioning.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.96–1.4%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Deputy President — Camille Cavellier

Age 42–43 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Small-framed, with tawny skin, tightly curled hair and wire-framed reading spectacles.

**Personality.** Sharp critic of waste; listens to practitioners but can humiliate officials whose figures do not add up.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.51–0.7%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Tervayne

**Maritime council state**

Tervayne is a western Vesalian maritime state whose government and commercial houses occupy Tervessac. Tervassin handles ocean shipping; Brescalle builds marine and civil machinery. Cultivated districts supply provisions while upland towns provide timber and manufactured goods. Its trading networks face Otranto and Morholt across the western ocean, with only indirect connections to the eastern Marches through intervening governments and difficult country. Maritime wealth supports naval supply and overseas influence, not unrestricted inland conquest. Port families, industrial firms and agricultural districts consequently have different priorities, even when foreign merchants describe them collectively as a seafaring people. Overseas supply and navigation districts maintained by Tervayne’s maritime administration and resident port councils. Charted island harbours: Ostrelac.

**Executive authority.** The executive is selected by the constituent councils or assemblies, which approve common supply and major commitments. Delegated administration allows routine decisions; it does not override local jurisdictions or create universal suffrage.

**Selection and succession.** The constituent council or assembly selects the executive. The named deputy keeps routine business moving during a vacancy but requires confirmation for a permanent mandate. Civil institutions appoint the professional military leadership.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### First Sea Councillor — Romain Seravin

Age 64–65 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Square-shouldered, with a lined forehead, fair skin and a neat side part above an old eyebrow scar.

**Personality.** Confident maritime dealmaker; generous to useful outsiders, impatient with inland communities whose transport costs spoil a contract.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 2.55–3.81%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Fleet Admiral — Matteo Nerval

Age 63–64 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Slender, with brown skin, black hair worn long and still hands folded over a document case.

**Personality.** Experienced escort commander; prizes seamanship over pedigree, underestimates how slowly inland allies can mobilise.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 2.34–3.48%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Deputy Sea Councillor — Lucan Caldoret

Age 37–38 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Heavy-set, with ruddy cheeks, thinning sandy hair and carefully polished practical boots.

**Personality.** Patient organiser with a talent for reassuring rivals; risks promising incompatible groups more than can be delivered.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.4–0.51%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Vardol

**Hereditary military monarchy**

Vardol is a northern realm centred on Estrevigne's royal and military administration. Caldovre and surrounding cold-country cities concentrate arsenals, engineering and fuel processing; productive southern districts around Belmerac help feed them. The state can support a large military establishment but must also defend long supply routes and its rivalry with Averholt. Caldrienne is reached by the Valdrec road, not held as a subordinate province. Army procurement gives industrial suppliers political influence, while landed and commercial interests negotiate the cost. Its apparent strength therefore rests on maintaining a demanding system of food, fuel and transport rather than manpower alone. Calvessac provides a charted coastal gateway, with defended access to Quillaux. Northern crown claims maintained by lighthouse crews and seasonal naval stores. Remote interiors are not continuously occupied.

**Executive authority.** The sovereign directs diplomacy, appoints senior officials and issues executive orders. New revenues, provincial obligations and lawful succession remain subject to the recorded charter or compact; personal will does not create available resources.

**Selection and succession.** The recognised heir succeeds subject to lawful eligibility and confirmation under the existing charter or compact. Regency requires institutional approval. Military command never passes by blood.

**Mandate review.** Hereditary tenure; annually review eligibility, incapacity and regency.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Sovereign — Matteo Rovelle

Age 64–65 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Tall and narrow-shouldered, with close-cropped dark hair, a long nose and carefully mended formal cuffs.

**Personality.** Severe ruler who regards deterrence as a public service; can mistake compromise for personal humiliation.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 2.55–3.81%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### High Marshal — Vivienne Montreval

Age 44–45 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Broad-faced, with greying curls, warm brown skin and an immaculate high-collared coat.

**Personality.** Disciplined staff officer who supports exercise notices; prefers credible logistics to threatening formations on paper.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.56–0.81%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Chancellor — Alban Elmont

Age 30–31 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Compact and erect, with pale freckled skin, swept-back auburn hair and quick grey eyes.

**Personality.** Careful procedural negotiator; remembers promises and resists shortcuts, but can let consultation become delay.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.33–0.36%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Recognised heir — Marcellin Rovelle

Age 29–30 local years; alive. Completed local years at baseline; birthday unrecorded.

**Appearance.** Lean and weathered, with a narrow mouth, dark hair tied at the nape and ink-stained fingertips.

**Personality.** Affable coalition broker; good at restoring working relations, less willing to confront profitable abuses.

**Authority.** Prepared for succession and council work; no independent sovereignty or military command. Adult child of the sovereign, recognised under the succession settlement.

**Health.** No disabling condition established.

Ordinary annual age-based mortality reference: 0.32–0.35%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Averholt

**Provincial compact monarchy**

Averholt is a predominantly inland realm held together by provincial bargains. Avercenne conducts common government, Rocavane concentrates mountain engineering, and lower cultivated districts supply the cold upland towns. Rivalry with Vardol competes with domestic defence for resources. Western rail links support trade with Tervayne, while Chalicchio's road reaches Karsenne and the eastern Marches. Provincial institutions protect their own stores and troops, limiting what the central government can concentrate elsewhere. Agricultural merchants, upland industrial firms and landed councils thus contribute different kinds of strength. The realm is a substantial neighbour with internal commitments, not a continent-wide power waiting to absorb every smaller state. Bravessac provides a charted coastal gateway, with defended access to Vetenavaux. Claims administered by the northern coastal province; fishing landings and seasonal shelters receive supplies from Bravessac.

**Executive authority.** The sovereign directs diplomacy, appoints senior officials and issues executive orders. New revenues, provincial obligations and lawful succession remain subject to the recorded charter or compact; personal will does not create available resources.

**Selection and succession.** The recognised heir succeeds subject to lawful eligibility and confirmation under the existing charter or compact. Regency requires institutional approval. Military command never passes by blood.

**Mandate review.** Hereditary tenure; annually review eligibility, incapacity and regency.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Sovereign — Renier Aubret

Age 39–40 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Long-limbed, with deep brown skin, a shaved head and a slight squint when reading fine print.

**Personality.** Patient conciliator with a long memory for broken promises; prizes autonomy but postpones difficult common decisions.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.44–0.57%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Marshal of the Compact — Lucan Favrelli

Age 51–52 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Stocky, with olive skin, thick silver-streaked hair and a slow, deliberate walk.

**Personality.** Thoughtful defensive planner; values liaison and openly challenges impossible troop-concentration orders.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.89–1.3%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### First Provincial Councillor — Vittore Barvaux

Age 56–57 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Lean and weathered, with a narrow mouth, dark hair tied at the nape and ink-stained fingertips.

**Personality.** Bright and impatient reformer; wants transparent accounts, yet underestimates the allies needed to pass them.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.29–1.9%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Recognised heir — Gaspard Aubret

Age 35–36 local years; alive. Completed local years at baseline; birthday unrecorded.

**Appearance.** Round-faced, with cropped chestnut hair, dark eyes and a habit of adjusting a plain signet ring.

**Personality.** Reserved institutional loyalist; protects continuity and competent staff, sometimes confuses established practice with necessity.

**Authority.** Prepared for succession and council work; no independent sovereignty or military command. Younger collateral relative of the sovereign, not their child.

**Health.** No disabling condition established.

Ordinary annual age-based mortality reference: 0.37–0.46%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Serevask Republic

**Post-federal territorial republic**

The Serevask Republic governs its own mountain, upland and forest districts from Serevienne. Vallorise remains an important engineering city, connected commercially to the states that once shared a southern basin federation. Varnelle, Kelbrun and Gavrel now levy their own taxes and command their own forces; old charters create claims over debts and water, not effective Serevask sovereignty. The republic retains archives, technical institutions and useful workshops, but has neither the population nor authority of the former union. Its citizens include mountain households dependent on lower provisions and lowland manufacturers dependent on cross-border customers. It has never governed Vesalius as a whole.

**Executive authority.** The executive is selected by the constituent councils or assemblies, which approve common supply and major commitments. Delegated administration allows routine decisions; it does not override local jurisdictions or create universal suffrage.

**Selection and succession.** The constituent council or assembly selects the executive. The named deputy keeps routine business moving during a vacancy but requires confirmation for a permanent mandate. Civil institutions appoint the professional military leadership.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Republic President — Marielle Bellorin

Age 61–62 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Round-faced, with cropped chestnut hair, dark eyes and a habit of adjusting a plain signet ring.

**Personality.** Cultivated archivist-politician; values lawful records but quotes history selectively to defend present interests.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.96–2.91%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Chief of Defence — Leonie Arvelle

Age 54–55 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Tall, with dark skin, silver at the temples and a low voice that carries without effort.

**Personality.** Sober mountain officer who separates claims from available forces; rejects plans based on instant restoration of the federation.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.11–1.62%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Deputy President — Marcellin Sorellet

Age 59–60 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Small-framed, with tawny skin, tightly curled hair and wire-framed reading spectacles.

**Personality.** Affable coalition broker; good at restoring working relations, less willing to confront profitable abuses.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.65–2.43%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Varnelle

**Delta commercial council state**

Varnelle is a delta state administered through port, water and commercial authorities centred on Varnessa. Serravole's shipping and Ceralvigne's engineering connect cultivated forest districts with overseas markets. Independence from Serevask followed disputes over reconstruction debts and customs after the former federation ceased functioning. Railway and business relationships survived that break. Merchants and water boards have considerable influence, while military establishments defend strategic approaches rather than replace civilian government everywhere. Rivessac, Kelbrun and Gavrel supply neighbouring markets. Control of freight and water makes Varnelle consequential to inland customers, but those customers remain separate political communities. Delta-authority island districts with customs houses, repair yards and provisioning farms. Charted island harbours: Cervallune.

**Executive authority.** The executive is selected by the constituent councils or assemblies, which approve common supply and major commitments. Delegated administration allows routine decisions; it does not override local jurisdictions or create universal suffrage.

**Selection and succession.** The constituent council or assembly selects the executive. The named deputy keeps routine business moving during a vacancy but requires confirmation for a permanent mandate. Civil institutions appoint the professional military leadership.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### First Commissioner — Coralie Lorrain

Age 71–72 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Square-shouldered, with a lined forehead, fair skin and a neat side part above an old eyebrow scar.

**Personality.** Quick, numerate organiser who rewards delivery; sees political arguments as incentive problems and sometimes misses questions of dignity.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 4.98–7.27%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Defence Commissioner — Fabien Valentin

Age 46–47 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Slender, with brown skin, black hair worn long and still hands folded over a document case.

**Personality.** Practical estuary commander; integrates patrols and flood works and refuses to strip civilian pumps for prestige operations.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.64–0.92%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Deputy Commissioner — Pascal Arvelle

Age 36–37 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Heavy-set, with ruddy cheeks, thinning sandy hair and carefully polished practical boots.

**Personality.** Reserved institutional loyalist; protects continuity and competent staff, sometimes confuses established practice with necessity.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.39–0.48%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Kelbrun

**Plantation council state**

Kelbrun is an independent state of councils and powerful plantation interests governed from Kelbrienne. Oreviano's rubber chemistry and filtration industries turn cultivated resources into valuable manufactured exports. Seasonal uplands supply grain and livestock alongside the wetter districts' plantation products. Estate labour obligations and commercial access shape politics as much as formal council debates. Serevask is a former federal partner and continuing industrial customer; Varnelle and Calvernis provide other trading connections. Army posts secure routes and production districts, but the country's influence chiefly rests on useful materials, technical knowledge and agricultural trade. Its population does not share one estate, employer or social standing. Cervellane provides a charted coastal gateway, with defended access to Cambrelet. Council-administered island dependency with plantation suppliers, fisheries and bonded stores. Charted island harbours: Marcellune.

**Executive authority.** The executive is selected by the constituent councils or assemblies, which approve common supply and major commitments. Delegated administration allows routine decisions; it does not override local jurisdictions or create universal suffrage.

**Selection and succession.** The constituent council or assembly selects the executive. The named deputy keeps routine business moving during a vacancy but requires confirmation for a permanent mandate. Civil institutions appoint the professional military leadership.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Council President — Solenne Aubret

Age 59–60 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Tall and narrow-shouldered, with close-cropped dark hair, a long nose and carefully mended formal cuffs.

**Personality.** Polished exporter who treats coercive estate obligations as normal costs of order; dislikes scrutiny of how profit is made.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.65–2.43%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Commandant-General — Valerie Varenne

Age 58–59 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Broad-faced, with greying curls, warm brown skin and an immaculate high-collared coat.

**Personality.** Orderly route-security officer; too willing to call an employer's dispute a security emergency.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.52–2.24%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Deputy President — Elodie Resselin

Age 45–46 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Compact and erect, with pale freckled skin, swept-back auburn hair and quick grey eyes.

**Personality.** Sharp critic of waste; listens to practitioners but can humiliate officials whose figures do not add up.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.6–0.86%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Gavrel

**Confederation of autonomous march houses**

Gavrel is a group of chartered march houses with limited common institutions at Gavrielle. Each house retains its own courts and levies; Mesrienne's workshops and local markets connect their economies without erasing that autonomy. Former federal links to Serevask survive as railways, debts and commercial relationships. Varnelle and the southern cantons offer additional buyers for agricultural and forest products. Local guarantors and patronage matter to travel and trade because no single ministry controls every transaction. The combined return describes their shared resources, while actual military cooperation depends on agreements among houses rather than an automatic unified command. Montalive provides a charted coastal gateway, with defended access to Lesigne. Dependencies of individual march houses under a common coastal supply compact; no unified Gavrel navy or crown is implied. Charted island harbours: Loravise.

**Executive authority.** The executive is selected by the constituent councils or assemblies, which approve common supply and major commitments. Delegated administration allows routine decisions; it does not override local jurisdictions or create universal suffrage.

**Selection and succession.** The constituent council or assembly selects the executive. The named deputy keeps routine business moving during a vacancy but requires confirmation for a permanent mandate. Civil institutions appoint the professional military leadership.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Convenor of the Gavrielle Houses — Benoit Orcelin

Age 60–61 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Long-limbed, with deep brown skin, a shaved head and a slight squint when reading fine print.

**Personality.** Gracious host and tireless patronage broker; offers access freely but expects every favour returned.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.8–2.66%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### March Defence Liaison — Alessia Nemeret

Age 56–57 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Stocky, with olive skin, thick silver-streaked hair and a slow, deliberate walk.

**Personality.** Patient mediator between proud captains; keeps exact contingent obligations and resents blame for forces never pledged.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.29–1.9%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Deputy Convenor — Yselle Talvessin

Age 50–51 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Lean and weathered, with a narrow mouth, dark hair tied at the nape and ink-stained fingertips.

**Personality.** Patient organiser with a talent for reassuring rivals; risks promising incompatible groups more than can be delivered.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.83–1.21%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Bellacosta Cantons

**Independent harbour and plantation cantons**

The cantons grew out of harbour and plantation charters left without a royal guarantor after the last major culling. Jougrenne convenes the coastal toll assembly; Nantac administers a separate inland land court. Neither can tax the other’s households. Harbour dues fund escorts while plantation owners pay for roads and demand control of the checkpoints. Veldrassen buys tropical produce and timber here, but its purchasing agents face competing canton tariffs rather than a single ministry. Tenant disputes centre on debt and access to cleared farmland; the assembly meets over commercial quarrels, not to command a national army. Lorrevento provides a charted coastal gateway, with defended access to Chignoro. Separate canton harbour dependencies; local fishing rights and harbour dues remain with the charter communities. Charted island harbours: Vessantine.

**Executive authority.** There is no common sovereign, treasury or supreme military command. Each named figure governs or represents only the institution in the office title. Joint commitments require separate mandates; combined statistics confer no command authority.

**Selection and succession.** Each local institution replaces its own officer through its charter or customary procedure. The third named figure represents a separate authority and is not automatic successor to the first.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Jougrenne Assembly Speaker — Yselle Varenne

Age 42–43 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Round-faced, with cropped chestnut hair, dark eyes and a habit of adjusting a plain signet ring.

**Personality.** Genial toll negotiator who dislikes unpredictability more than inequality; notices tenant petitions when they threaten the harvest.

**Authority.** Speaks for the named local institution only; not sovereign over the combined geographic return.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.51–0.7%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Jougrenne Escort Commandant — Rosaline Merault

Age 59–60 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Tall, with dark skin, silver at the temples and a low voice that carries without effort.

**Personality.** Watchful coastal officer who distrusts private checkpoints and demands written authority for disputed seizures.

**Authority.** Commands only forces assigned by the named local authority or consenting members; not the whole combined geographic army.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.65–2.43%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Nantac Land-Court Provost — Marielle Caldoret

Age 39–40 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Small-framed, with tawny skin, tightly curled hair and wire-framed reading spectacles.

**Personality.** Careful procedural negotiator; remembers promises and resists shortcuts, but can let consultation become delay.

**Authority.** Represents the separate local authority named in the office; not a national deputy.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.44–0.57%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Cavressa Principalities

**Independent principalities and charter towns**

A chain of small courts and charter towns occupies the southwestern approaches. Collengo’s market charter protects merchants from estate levies, while the lords around Peregia claim payment for escorting their wagons. Winter fodder and access through the uplands matter more than distant dynastic titles. Albaret brokers wool and preserved food between the courts. Marriage contracts frequently change toll rights without moving a border; merchants employ local advocates to interpret them. Southern sea trade offers an alternative to the roads, but only to houses able to finance a shipment. Vellorito provides a charted coastal gateway, with defended access to Totarosco. Dependencies of individual coastal principalities, linked by a limited pilotage compact rather than a new island kingdom. Charted island harbours: Monteliva.

**Executive authority.** There is no common sovereign, treasury or supreme military command. Each named figure governs or represents only the institution in the office title. Joint commitments require separate mandates; combined statistics confer no command authority.

**Selection and succession.** Each local institution replaces its own officer through its charter or customary procedure. The third named figure represents a separate authority and is not automatic successor to the first.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Collengo First Burgess — Vittore Caldoret

Age 53–54 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Square-shouldered, with a lined forehead, fair skin and a neat side part above an old eyebrow scar.

**Personality.** Precise advocate of witnessed weights and town privileges; less attentive to households outside the charter.

**Authority.** Speaks for the named local institution only; not sovereign over the combined geographic return.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.03–1.51%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Collengo Guard Captain — Celestin Brissot

Age 64–65 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Slender, with brown skin, black hair worn long and still hands folded over a document case.

**Personality.** Steady guard officer who avoids escort-fee feuds and prefers negotiated passage to proving a point by force.

**Authority.** Commands only forces assigned by the named local authority or consenting members; not the whole combined geographic army.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 2.55–3.81%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Peregia Court Chancellor — Pascal Rovelle

Age 50–51 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Heavy-set, with ruddy cheeks, thinning sandy hair and carefully polished practical boots.

**Personality.** Bright and impatient reformer; wants transparent accounts, yet underestimates the allies needed to pass them.

**Authority.** Represents the separate local authority named in the office; not a national deputy.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.83–1.21%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Vaulcerre Basin Leagues

**Independent basin leagues**

Anselleuil’s reservoir command, Jarnan’s commercial council and the estate assemblies around Votane share a drainage basin but not a government. Their water compact survived the destruction of the authority that first imposed it. Gates must open in an agreed order; delaying an upstream release can destroy a downstream planting season. Brannervaux engineers are employed as arbitrators and suspected of favouring their own merchants. Grain barges, mill repair and fertiliser works sustain the towns. Disputes usually begin as inspections, impoundments and unpaid maintenance bills before soldiers become involved. Cortelune provides a charted coastal gateway, with defended access to Leignay. Offshore charter communities of the basin leagues, sharing pilots and navigation dues without a unified sovereign. Charted island harbours: Cernavie.

**Executive authority.** There is no common sovereign, treasury or supreme military command. Each named figure governs or represents only the institution in the office title. Joint commitments require separate mandates; combined statistics confer no command authority.

**Selection and succession.** Each local institution replaces its own officer through its charter or customary procedure. The third named figure represents a separate authority and is not automatic successor to the first.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Jarnan Council Speaker — Fleur Resselin

Age 73–74 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Tall and narrow-shouldered, with close-cropped dark hair, a long nose and carefully mended formal cuffs.

**Personality.** Patient mediator who believes measurement can settle almost anything; slow to recognise deliberate bad faith.

**Authority.** Speaks for the named local institution only; not sovereign over the combined geographic return.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 6.1–8.73%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Anselleuil Reservoir Commandant — Pascal Serravin

Age 48–49 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Broad-faced, with greying curls, warm brown skin and an immaculate high-collared coat.

**Personality.** Exacting keeper of gates and stores; defends release obligations and treats reckless mobilisation as a threat to planting.

**Authority.** Commands only forces assigned by the named local authority or consenting members; not the whole combined geographic army.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.73–1.06%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Votane Estates Delegate — Sabine Nerval

Age 56–57 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Compact and erect, with pale freckled skin, swept-back auburn hair and quick grey eyes.

**Personality.** Affable coalition broker; good at restoring working relations, less willing to confront profitable abuses.

**Authority.** Represents the separate local authority named in the office; not a national deputy.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.29–1.9%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Seravelle Littoral

**Independent littoral republics and estate courts**

Astrellac’s harbour republic and the inland estate courts share the eastern littoral with smaller free ports. Their commercial convention standardises bills of lading but leaves taxes and criminal law local. Shipping families advance money against harvests; rural houses resent foreclosures by creditors who never leave the coast. Rovessaran insurers and instrument makers are influential customers. Port patrols cooperate against raiders, yet seize one another’s cargo when a debt dispute turns political. Hinterland towns depend on export warehouses for salt, tools and credit, which gives the harbours power beyond their formal borders. Astrellac’s chartered island dependencies within the Seravelle return. Resident councils administer land and fisheries; Astrellac supplies customs officers, escorts and bonded fuel depots. The other Seravelle courts remain independent. Charted island harbours: Cortessia, Vasselac, Rovellisse.

**Executive authority.** There is no common sovereign, treasury or supreme military command. Each named figure governs or represents only the institution in the office title. Joint commitments require separate mandates; combined statistics confer no command authority.

**Selection and succession.** Each local institution replaces its own officer through its charter or customary procedure. The third named figure represents a separate authority and is not automatic successor to the first.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Astrellac First Consul — Valerie Dalmaret

Age 71–72 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Long-limbed, with deep brown skin, a shaved head and a slight squint when reading fine print.

**Personality.** Charming creditor-politician who favours predictable shipping law, but confuses legal foreclosures with fair ones.

**Authority.** Speaks for the named local institution only; not sovereign over the combined geographic return.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 4.98–7.27%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Astrellac Patrol Admiral — Sylvain Orcelin

Age 66–67 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Stocky, with olive skin, thick silver-streaked hair and a slow, deliberate walk.

**Personality.** Terse escort veteran; dislikes debt seizures disguised as patrol work and favours sailings honouring common notices.

**Authority.** Commands only forces assigned by the named local authority or consenting members; not the whole combined geographic army.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 3.06–4.59%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Inland Estates Envoy — Lucan Kelvaret

Age 39–40 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Lean and weathered, with a narrow mouth, dark hair tied at the nape and ink-stained fingertips.

**Personality.** Reserved institutional loyalist; protects continuity and competent staff, sometimes confuses established practice with necessity.

**Authority.** Represents the separate local authority named in the office; not a national deputy.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.44–0.57%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Haldrevik Concessions

**Concession charters and independent communities**

Concession houses hold time-limited rights to timber, minerals and fuel rather than sovereignty over every inhabitant. Asanetz keeps the surviving charter archive; Alauvenne houses one of the armed inspection posts. A house can own a railway and still owe rent to the community beneath it. Varnesk firms provide machinery and credit, exchanging technical dependence for preferred ore contracts. Charter renewals provoke strikes, armed intimidation and lawsuits over restoration bonds. Settlements outside a concession bargain for patrols in return for provisions; a company’s withdrawal can be more frightening than its arrival. Trelovre provides a charted coastal gateway, with defended access to Arinrin. Island shore communities under Haldrevik charter protection. Concession leases cover named working sites, not ownership of all inhabitants. Charted island harbours: Rovensac.

**Executive authority.** There is no common sovereign, treasury or supreme military command. Each named figure governs or represents only the institution in the office title. Joint commitments require separate mandates; combined statistics confer no command authority.

**Selection and succession.** Each local institution replaces its own officer through its charter or customary procedure. The third named figure represents a separate authority and is not automatic successor to the first.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Asanetz Charter Registrar — Olivier Grevant

Age 72–73 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Round-faced, with cropped chestnut hair, dark eyes and a habit of adjusting a plain signet ring.

**Personality.** Meticulous jurist with stubborn faith in documented obligations; underestimates intimidation outside the archive.

**Authority.** Speaks for the named local institution only; not sovereign over the combined geographic return.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 5.51–7.97%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Alauvenne Security Commandant — Renier Bellorin

Age 48–49 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Tall, with dark skin, silver at the temples and a low voice that carries without effort.

**Personality.** Hard, suspicious officer who accepts escrow because it reopened work; resents inspectors questioning his men.

**Authority.** Commands only forces assigned by the named local authority or consenting members; not the whole combined geographic army.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.73–1.06%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Communities' Liaison — Elodie Morcenne

Age 51–52 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Small-framed, with tawny skin, tightly curled hair and wire-framed reading spectacles.

**Personality.** Sharp critic of waste; listens to practitioners but can humiliate officials whose figures do not add up.

**Authority.** Represents the separate local authority named in the office; not a national deputy.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.89–1.3%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Dreissen Wardholds

**Independent wardholds**

Dananske, Dreinvar and Ferorvik anchor separate wardholds along the northern approaches. Each warden owes shelter to the villages that provision a fortress, but the obligation is disputed when stores run short. Their annual muster negotiates convoy schedules and exchanges hostages against broken promises; it does not elect a king. Galdresk medical houses maintain small hospices by invitation. Imported grain is strategically more important than ceremonial claims to the iceward interior. Officers measure influence in serviceable engines and winter stores, while civilian assemblies try to keep temporary requisitions from becoming permanent rent. Veltroven provides a charted coastal gateway, with defended access to Kerenvenne. Claims of adjacent wardholds, maintained by fishing visits and seasonal convoy shelters rather than continuous occupation.

**Executive authority.** There is no common sovereign, treasury or supreme military command. Each named figure governs or represents only the institution in the office title. Joint commitments require separate mandates; combined statistics confer no command authority.

**Selection and succession.** Each local institution replaces its own officer through its charter or customary procedure. The third named figure represents a separate authority and is not automatic successor to the first.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Dananske First Warden — Vivienne Cernault

Age 44–45 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Square-shouldered, with a lined forehead, fair skin and a neat side part above an old eyebrow scar.

**Personality.** Gruff provider who views shelter as a debt; becomes defensive when village accounts contradict fortress stores.

**Authority.** Speaks for the named local institution only; not sovereign over the combined geographic return.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.56–0.81%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Dreinvar Fortress Captain — Celestin Valentin

Age 50–51 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Slender, with brown skin, black hair worn long and still hands folded over a document case.

**Personality.** Disciplined winter commander; protects evacuation routes and opposes permanent claims disguised as emergency requisitions.

**Authority.** Commands only forces assigned by the named local authority or consenting members; not the whole combined geographic army.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.83–1.21%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Ferorvik Assembly Delegate — Marielle Norravel

Age 59–60 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Heavy-set, with ruddy cheeks, thinning sandy hair and carefully polished practical boots.

**Personality.** Patient organiser with a talent for reassuring rivals; risks promising incompatible groups more than can be delivered.

**Authority.** Represents the separate local authority named in the office; not a national deputy.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.65–2.43%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Varneselle Estates

**Landed jurisdictions and charter port**

The eastern estates descend from competing settlement grants, with Varkessant’s port charter carved out of the landed claims. Estate bailiffs administer courts and patrol obligations; the port elects its own commercial officers. Fishing communities resist attempts to classify their customary shore access as a landlord’s concession. Halskert buys fish and timber and sells grain, giving its merchants leverage in disputes over freight. Family alliances cross estate borders, but succession cases repeatedly fragment holdings. Seasonal workers move between shore crews and inland workshops, carrying news faster than the formal post. Varkessant’s port-charter dependencies; the mainland estate courts retain their separate jurisdictions. Charted island harbours: Cersund.

**Executive authority.** There is no common sovereign, treasury or supreme military command. Each named figure governs or represents only the institution in the office title. Joint commitments require separate mandates; combined statistics confer no command authority.

**Selection and succession.** Each local institution replaces its own officer through its charter or customary procedure. The third named figure represents a separate authority and is not automatic successor to the first.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Varkessant First Burgess — Sylvain Astrevin

Age 62–63 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Tall and narrow-shouldered, with close-cropped dark hair, a long nose and carefully mended formal cuffs.

**Personality.** Soft-spoken organiser who remembers fishing families; protects port privileges before wider reform.

**Authority.** Speaks for the named local institution only; not sovereign over the combined geographic return.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 2.14–3.18%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Varkessant Patrol Captain — Lucan Seravin

Age 42–43 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Broad-faced, with greying curls, warm brown skin and an immaculate high-collared coat.

**Personality.** Direct coastal officer; recognises customary landings and dislikes bailiffs seeking naval help in private disputes.

**Authority.** Commands only forces assigned by the named local authority or consenting members; not the whole combined geographic army.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.51–0.7%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Estates' Arbitration Speaker — Deliane Vaudrin

Age 35–36 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Compact and erect, with pale freckled skin, swept-back auburn hair and quick grey eyes.

**Personality.** Careful procedural negotiator; remembers promises and resists shortcuts, but can let consultation become delay.

**Authority.** Represents the separate local authority named in the office; not a national deputy.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.37–0.46%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Bressavelle Marches

**Fortified lordships and town liberties**

The western marches form a belt of fortified lordships, town liberties and cultivated valleys between larger powers. Temevaux’s command guards a road junction; Malinne’s council controls a different customs district. Neither speaks for the entire belt. Tervayne merchants finance road repairs in exchange for bonded warehouses, while inland patrons subsidise rival toll houses. Small rulers survive by alternating clients and keeping neighbouring courts divided. Textile finishing, estate agriculture and wagon repair support a population far larger than its thinly charted principal towns suggest. A traveller’s permit may be valid for one bridge and useless at the next. Orsavie provides a charted coastal gateway, with defended access to Balbrenne. Chartered island lordships tied to the western marches by supply contracts; Tervayne has commercial privileges, not sovereignty. Charted island harbours: Lorvesset.

**Executive authority.** There is no common sovereign, treasury or supreme military command. Each named figure governs or represents only the institution in the office title. Joint commitments require separate mandates; combined statistics confer no command authority.

**Selection and succession.** Each local institution replaces its own officer through its charter or customary procedure. The third named figure represents a separate authority and is not automatic successor to the first.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Malinne Council Speaker — Sabine Morcenne

Age 48–49 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Long-limbed, with deep brown skin, a shaved head and a slight squint when reading fine print.

**Personality.** Witty customs negotiator who wins narrow agreements; uses foreign warehouse money without admitting dependence.

**Authority.** Speaks for the named local institution only; not sovereign over the combined geographic return.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.73–1.06%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Temevaux Road Commandant — Marcellin Rovantin

Age 61–62 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Stocky, with olive skin, thick silver-streaked hair and a slow, deliberate walk.

**Personality.** Proud road officer who values written orders; can mistake holding a bridge for authority over regional politics.

**Authority.** Commands only forces assigned by the named local authority or consenting members; not the whole combined geographic army.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.96–2.91%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Orsavie Charter Envoy — Matteo Montreval

Age 57–58 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Lean and weathered, with a narrow mouth, dark hair tied at the nape and ink-stained fingertips.

**Personality.** Bright and impatient reformer; wants transparent accounts, yet underestimates the allies needed to pass them.

**Authority.** Represents the separate local authority named in the office; not a national deputy.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.41–2.06%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Vallessia Cantons

**Market cantons and military governorships**

Southern market cantons rebuilt around local granaries after the last major culling. Margeuil’s elected grain board, Darnenne’s military governor and the landed councils around Galigny compete over transport dues. Common measures for grain survived; a common treasury did not. Merchants connect warm lowland crops with cooler interior districts, using brokers who can guarantee passage through several authorities. Kelbrun buyers seek plantation produce and seasonal labour. Municipal councils resist the governors’ claim that every warehouse is a military asset, particularly after poor harvests make requisitions politically dangerous. Pravessant provides a charted coastal gateway, with defended access to Peillier. Dependencies of individual southern cantons, governed through resident councils and grain-shipping charters. Charted island harbours: Cervelune.

**Executive authority.** There is no common sovereign, treasury or supreme military command. Each named figure governs or represents only the institution in the office title. Joint commitments require separate mandates; combined statistics confer no command authority.

**Selection and succession.** Each local institution replaces its own officer through its charter or customary procedure. The third named figure represents a separate authority and is not automatic successor to the first.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Margeuil Grain-Board Speaker — Yselle Favrelli

Age 68–69 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Round-faced, with cropped chestnut hair, dark eyes and a habit of adjusting a plain signet ring.

**Personality.** Plain-spoken defender of granary accounts; distrusts speeches and accepts slow compromise if receipts are honoured.

**Authority.** Speaks for the named local institution only; not sovereign over the combined geographic return.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 3.71–5.53%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Darnenne Military Governor — Yselle Vernac

Age 62–63 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Tall, with dark skin, silver at the temples and a low voice that carries without effort.

**Personality.** Impatient but pragmatic administrator; accepts requisition limits because confiscation was destroying cooperation.

**Authority.** Commands only forces assigned by the named local authority or consenting members; not the whole combined geographic army.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 2.14–3.18%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Galigny Appeals Delegate — Sabine Varnier

Age 49–50 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Small-framed, with tawny skin, tightly curled hair and wire-framed reading spectacles.

**Personality.** Affable coalition broker; good at restoring working relations, less willing to confront profitable abuses.

**Authority.** Represents the separate local authority named in the office; not a national deputy.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.78–1.13%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Rivessac Coast

**Port communes and hereditary farming districts**

Saultac is the best-charted inland market in a southeastern coastal region of small port communes and hereditary agricultural districts. Mainland and island harbours now complement the inland market on the chart. Pilots’ guilds set practical terms for coastal travel; inland houses control cultivated land and the roads supplying the harbours. Ceralte brokers buy provisions here without governing the coast. Rival communes share storm warnings but guard their harbour soundings. The region’s political disputes concern port fees, seasonal labour and who funds guarded access to inland markets, rather than a single national succession. Vessaline provides a charted coastal gateway, with defended access to Saultac. A dependency of the coastal port commune, governed by its harbour charter and resident island councillors. Charted island harbours: Vallarive.

**Executive authority.** There is no common sovereign, treasury or supreme military command. Each named figure governs or represents only the institution in the office title. Joint commitments require separate mandates; combined statistics confer no command authority.

**Selection and succession.** Each local institution replaces its own officer through its charter or customary procedure. The third named figure represents a separate authority and is not automatic successor to the first.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Vessaline Harbour Speaker — Alessia Vernac

Age 60–61 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Square-shouldered, with a lined forehead, fair skin and a neat side part above an old eyebrow scar.

**Personality.** Friendly, guarded negotiator; shares storm warnings willingly but protects commercial advantages.

**Authority.** Speaks for the named local institution only; not sovereign over the combined geographic return.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.8–2.66%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Coastal Patrol Coordinator — Yselle Valentin

Age 61–62 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Slender, with brown skin, black hair worn long and still hands folded over a document case.

**Personality.** Adaptable navigator who works through pilots and consent; rejects visiting officers who dismiss local waters.

**Authority.** Commands only forces assigned by the named local authority or consenting members; not the whole combined geographic army.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.96–2.91%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Saultac Market Delegate — Aurelie Barvaux

Age 47–48 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Heavy-set, with ruddy cheeks, thinning sandy hair and carefully polished practical boots.

**Personality.** Reserved institutional loyalist; protects continuity and competent staff, sometimes confuses established practice with necessity.

**Authority.** Represents the separate local authority named in the office; not a national deputy.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.68–0.99%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Karsenne Compact

**Mining and fortress federation**

Drossane hosts common business for autonomous mining councils and fortress districts. The Compact is a federation rather than a unified hereditary realm. Ores, engineering skills and defended approaches sustain its bargaining power, but coastal freight charges consume export income. Valley workshops and cultivated pockets support the upland economy. Veyrasse remains an uneasy defensive partner and vital outlet. A direct railway toward Calvernis is sought, not operating; existing roads do not provide an equivalent bulk-freight service.

**Executive authority.** The executive is selected by the constituent councils or assemblies, which approve common supply and major commitments. Delegated administration allows routine decisions; it does not override local jurisdictions or create universal suffrage.

**Selection and succession.** The constituent council or assembly selects the executive. The named deputy keeps routine business moving during a vacancy but requires confirmation for a permanent mandate. Civil institutions appoint the professional military leadership.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Compact Convenor — Clarisse Trevaux

Age 42–43 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Tall and narrow-shouldered, with close-cropped dark hair, a long nose and carefully mended formal cuffs.

**Personality.** Dry, testing negotiator who values demonstrated expertise; wants another outlet without exchanging one dependency for another.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.51–0.7%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Defence Convenor — Celine Montreval

Age 54–55 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Broad-faced, with greying curls, warm brown skin and an immaculate high-collared coat.

**Personality.** Prudent pass-defence specialist; refuses to promise council troops and distrusts allies who treat roads like railways.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.11–1.62%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Deputy Compact Convenor — Solenne Vaudrin

Age 50–51 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Compact and erect, with pale freckled skin, swept-back auburn hair and quick grey eyes.

**Personality.** Sharp critic of waste; listens to practitioners but can humiliate officials whose figures do not add up.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.83–1.21%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Duchy of Caldrienne

**Centralised hereditary duchy**

Valdrec houses the ducal administration and principal army depots. Productive valleys support estate agriculture and armament towns; the state fields strong infantry, artillery and a comparatively large armoured force. Ducal supervision is more centralised than in Veyrasse, though estate and arsenal interests still compete for resources. The unresolved Cressault claim strains an armed truce. Northern obligations and imports of Karsenne ore prevent its government from directing every resource against the March. Cressavelle provides a charted coastal gateway, with defended access to Valdrec.

**Executive authority.** The sovereign directs diplomacy, appoints senior officials and issues executive orders. New revenues, provincial obligations and lawful succession remain subject to the recorded charter or compact; personal will does not create available resources.

**Selection and succession.** The recognised heir succeeds subject to lawful eligibility and confirmation under the existing charter or compact. Regency requires institutional approval. Military command never passes by blood.

**Mandate review.** Hereditary tenure; annually review eligibility, incapacity and regency.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Duke — Adrien Nerval

Age 73–74 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Long-limbed, with deep brown skin, a shaved head and a slight squint when reading fine print.

**Personality.** Composed dynastic nationalist; studies opponents, rewards useful initiative and sees public concessions as dangerous precedents.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 6.1–8.73%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Grand Marshal — Tristan Corvelli

Age 44–45 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Stocky, with olive skin, thick silver-streaked hair and a slow, deliberate walk.

**Personality.** Ambitious artillery professional; favours calculated local pressure but will not abandon other garrisons for Cressault.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.56–0.81%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Chancellor — Renier Montreval

Age 37–38 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Lean and weathered, with a narrow mouth, dark hair tied at the nape and ink-stained fingertips.

**Personality.** Patient organiser with a talent for reassuring rivals; risks promising incompatible groups more than can be delivered.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.4–0.51%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Recognised heir — Adrien Nerval the Younger

Age 33–34 local years; alive. Completed local years at baseline; birthday unrecorded.

**Appearance.** Slender, with brown skin, black hair worn long and still hands folded over a document case.

**Personality.** Bright and impatient reformer; wants transparent accounts, yet underestimates the allies needed to pass them.

**Authority.** Prepared for succession and council work; no independent sovereignty or military command. Adult child of the sovereign, recognised under the succession settlement.

**Health.** No disabling condition established.

Ordinary annual age-based mortality reference: 0.35–0.41%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## March of Veyrasse

**Chartered hereditary march**

The charter balances the Margrave, landed houses, municipal councils and industrial proprietors. Auvrienne holds the court and government; Serravonne is a secondary port and rail junction. Coastal agriculture and workshops depend on inland ores and imported machinery. Railway unions can disrupt mobilisation, and poorer households bear disproportionate service obligations. Caldrienne remains the principal territorial rival; Karsenne is an essential supplier, while Calvernis and Ceralte provide competing maritime connections. The Margrave commands the standing army and foreign relations, while chartered institutions provide much of the money, manpower and transport. Education and engineering offer advancement through patronage. Railway superintendent Leont Vardesca governs railway affairs and dependants, not Serravonne’s government or army.

**Executive authority.** The sovereign directs diplomacy, appoints senior officials and issues executive orders. New revenues, provincial obligations and lawful succession remain subject to the recorded charter or compact; personal will does not create available resources. From 12/11/0068, Royal Advisor Lord Galahad Orsival holds standing delegated authority over industry, infrastructure and defensive preparedness: initiate inquiries, require returns and direct assigned resources, with urgent access and disputes escalated to the Margrave. Field-army command, taxation and binding foreign commitments remain separately authorised. The amended advisory instrument has been delivered and departmental notices issued. Residence and assigned administrative accommodation are provided. Detailed restricted programme resources are recorded separately. Galahad is an approximately three-metre transhuman with white hair, a short white beard and green eyes. His analytical confidence, ambition and appetite for control accompany exceptional engineering and psychic abilities; ordinary human mortality estimates do not apply to him.

**Selection and succession.** Birth-order without male preference among eligible recognised descendants. Maurelle is heir; her unnamed younger brother, follows her and her lawful descendants. Council verifies succession rather than freely electing a ruler. Consort is not co-sovereign. Darscelet coordinates command temporarily after Vaucerin; the Margrave appoints the permanent Marshal.

**Mandate review.** Hereditary tenure; annually review eligibility, incapacity and regency.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Margrave — Odrienne Orcemont

Age 51–53 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Upright and composed, with dark hair silvering at the temples, a narrow face and carefully fitted dark court dress.

**Personality.** Competent, controlled and possessive patron; measures welfare by usefulness and rank, tolerates harsh labour enforcement and expects gratitude to become obedience.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.89–1.4%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Marshal — Calvren Vaucerin

Age 63–65 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Grey-haired, broad through the shoulders, with lined eyes and a sober uniform kept serviceable rather than ornamental.

**Personality.** Decent professional who protects trained troops; prizes prepared positions, artillery and rail supply rather than glory.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 2.34–3.81%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Chief of General Staff — Cevrel Darscelet

Age 49–51 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Lean, with dark hair pinned clear of her face, an attentive gaze and a plain staff uniform; moves with economical precision.

**Personality.** Exacting mobilisation and supply planner; listens closely, corrects inflated assumptions and values demonstrated competence.

**Authority.** Chief of general staff; acting military coordinator after Vaucerin pending the Margrave’s permanent appointment. Not deputy sovereign.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.78–1.21%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Recognised heir — Maurelle Orcemont

Age 26–28 local years; alive. Completed local years at baseline; birthday unrecorded.

**Appearance.** Carefully dressed, with glossy dark hair, a smooth oval face and an exquisitely rehearsed public smile.

**Personality.** Well educated but entitled and thin-skinned; polished when rehearsed, expects officials to erase mistakes and mistakes inherited authority for superiority.

**Authority.** Prepared for succession and council work; no independent sovereignty or military command.

**Health.** No disabling condition established.

Ordinary annual age-based mortality reference: 0.31–0.34%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Calvernis Republic

**Restricted-franchise maritime republic**

Miravelle is the seat of a republic whose restricted franchise favours shipping, banking and industrial families. Harbour revenues, ship maintenance and manufacturing support convoy escorts, coastal guns, marines and maritime aircraft. Smaller towns supply its commercial ports without erasing rival patronage networks. Veyrasse is a customer and competitor; an alternative outlet for Karsenne could redirect freight and toll income. No agreement has completed that proposed railway. Cavrelune provides a charted coastal gateway, with defended access to Miravelle.

**Executive authority.** The executive is selected by the constituent councils or assemblies, which approve common supply and major commitments. Delegated administration allows routine decisions; it does not override local jurisdictions or create universal suffrage.

**Selection and succession.** The constituent council or assembly selects the executive. The named deputy keeps routine business moving during a vacancy but requires confirmation for a permanent mandate. Civil institutions appoint the professional military leadership.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Republic President — Lucelle Cavrenne

Age 44–45 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Square-shouldered, with a lined forehead, fair skin and a neat side part above an old eyebrow scar.

**Personality.** Suave coalition-builder receptive to profitable engineering; mistakes commercial confidence for general consent and conceals family bargains.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.56–0.81%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Admiral-General — Deliane Varenne

Age 58–59 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Slender, with brown skin, black hair worn long and still hands folded over a document case.

**Personality.** Sceptical naval professional; protects repair capacity and requires funded provision before distant commitments.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.52–2.24%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Deputy President — Romain Sorelli

Age 51–52 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Heavy-set, with ruddy cheeks, thinning sandy hair and carefully polished practical boots.

**Personality.** Bright and impatient reformer; wants transparent accounts, yet underestimates the allies needed to pass them.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.89–1.3%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Ceralte Admiralty

**Hereditary naval protectorate**

Dalmor is the fortified harbour and seat of a hereditary protector, senior naval council and island governors. Fishing, pilotage, convoy services and repair yards sustain the chain, while imported grain remains essential. Torpedo craft, mine warfare and knowledge of difficult waters offset limited land resources. Island communities depend on shipping rather than a mainland-style road network. Treaty cooperation coexists with accusations of privateering; no allegation proves official sponsorship.

**Executive authority.** The sovereign directs diplomacy, appoints senior officials and issues executive orders. New revenues, provincial obligations and lawful succession remain subject to the recorded charter or compact; personal will does not create available resources.

**Selection and succession.** The recognised heir succeeds subject to lawful eligibility and confirmation under the existing charter or compact. Regency requires institutional approval. Military command never passes by blood.

**Mandate review.** Hereditary tenure; annually review eligibility, incapacity and regency.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Hereditary Protector — Florent Orselle

Age 46–47 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Tall and narrow-shouldered, with close-cropped dark hair, a long nose and carefully mended formal cuffs.

**Personality.** Reserved guardian of island independence; tolerates ambiguous maritime dealings but requires deniability and dependable provisioning.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.64–0.92%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### First Admiral — Vivienne Darcourt

Age 61–62 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Broad-faced, with greying curls, warm brown skin and an immaculate high-collared coat.

**Personality.** Sharp-eyed littoral specialist; favours pilots and small craft, regards a grand land campaign as dangerous vanity.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.96–2.91%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Naval Council Chancellor — Emilien Vaudrin

Age 51–52 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Compact and erect, with pale freckled skin, swept-back auburn hair and quick grey eyes.

**Personality.** Affable coalition broker; good at restoring working relations, less willing to confront profitable abuses.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.89–1.3%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Recognised heir — Heloise Orselle of Dalmor

Age 23–24 local years; alive. Completed local years at baseline; birthday unrecorded.

**Appearance.** Broad-faced, with dark curls, warm brown skin and an immaculate high-collared coat.

**Personality.** Sharp critic of waste; listens to practitioners but can humiliate officials whose figures do not add up.

**Authority.** Prepared for succession and council work; no independent sovereignty or military command. Adult child of the sovereign, recognised under the succession settlement.

**Health.** No disabling condition established.

Ordinary annual age-based mortality reference: 0.29–0.33%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Varessan Sea League

**Federation of five island assemblies**

The Varessan Sea League unites five island assemblies under a charter covering convoys, foreign treaties and shared courts. Ardessa hosts the delegates, but each island retains land law and elects its harbour officers. Centuries of terrace cultivation and ocean navigation preceded mainland concessions. Shipwright families build wooden coasters and repair imported motor vessels. Treaty warehouses purchase wool, dried fish and fruit. The League permits leased depots but bars foreign ownership of freshwater catchments. Carrier houses seek closer mainland ties; cultivator assemblies resist customs exemptions that leave them paying the common defence levy.

**Executive authority.** The executive is selected by the constituent councils or assemblies, which approve common supply and major commitments. Delegated administration allows routine decisions; it does not override local jurisdictions or create universal suffrage.

**Selection and succession.** The constituent council or assembly selects the executive. The named deputy keeps routine business moving during a vacancy but requires confirmation for a permanent mandate. Civil institutions appoint the professional military leadership.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### League Speaker — Benoit Vasselin

Age 51–52 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Long-limbed, with deep brown skin, a shaved head and a slight squint when reading fine print.

**Personality.** Warm, tenacious speaker who welcomes trade but treats freshwater ownership as beyond purchase.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.89–1.3%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Convoy Captain-General — Emilien Varenne

Age 67–68 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Stocky, with olive skin, thick silver-streaked hair and a slow, deliberate walk.

**Personality.** Collaborative convoy captain who trusts local officers; slow to centralise even when weather demands speed.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 3.37–5.04%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Deputy League Speaker — Valerie Carvesset

Age 33–34 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Lean and weathered, with a narrow mouth, dark hair tied at the nape and ink-stained fingertips.

**Personality.** Reserved institutional loyalist; protects continuity and competent staff, sometimes confuses established practice with necessity.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.35–0.41%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Talascan Charter Islands

**Rovessaran colonial charter administration**

Rovessara governs the Talascan chain through a colonial commissioner, customs posts and commercial leases. Island communities remain the majority and retain village land councils, but the colonial court decides disputes involving export estates and harbour property. Settler merchants and mainland firms control much of the credit and shipping. Councils contest compulsory road levies and the conversion of common pasture into export holdings. The commissioner depends on local pilots and negotiated water rights. These islands have long-established inhabitants and histories, not vacant land discovered by their present rulers.

**Executive authority.** The mainland government appoints the executive and controls external policy. Local councils and treaties retain the limited powers described below; neither governor nor garrison may speak for the mainland military as a whole.

**Selection and succession.** The mainland appointing government chooses a replacement. The chief secretary maintains routine civil business pending instructions; military command remains separate.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Colonial Commissioner — Benoit Kelvaret

Age 43–44 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Round-faced, with cropped chestnut hair, dark eyes and a habit of adjusting a plain signet ring.

**Personality.** Articulate administrator concerned with legal defensibility; grants relief to preserve exports, not equal political standing.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.53–0.76%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Colonial Garrison Commandant — Solenne Sorelli

Age 46–47 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Tall, with dark skin, silver at the temples and a low voice that carries without effort.

**Personality.** Controlled career officer who prefers restraint to an expensive revolt, but ultimately protects colonial administration.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.64–0.92%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Chief Colonial Secretary — Matteo Darcourt

Age 42–43 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Small-framed, with tawny skin, tightly curled hair and wire-framed reading spectacles.

**Personality.** Sharp critic of waste; listens to practitioners but can humiliate officials whose figures do not add up.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.51–0.7%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Nemerai Crown

**Compact hereditary island crown**

The Nemerai Crown is an old island monarchy whose ruler is confirmed by hereditary houses, town delegates and custodians of communal farmland. Nemer maintains written land records and a permanent customs service. Outer islands owe ships and levies under separate compacts; the crown cannot simply requisition their harvests. Fisheries, terrace grain and shipping support local machine shops, while heavy plant and refined marine fuel are imported. Foreign powers have treaty warehouses but no general jurisdiction. Court reformers favour technical colleges and a common budget; outer houses fear the loss of their island privileges.

**Executive authority.** The sovereign directs diplomacy, appoints senior officials and issues executive orders. New revenues, provincial obligations and lawful succession remain subject to the recorded charter or compact; personal will does not create available resources.

**Selection and succession.** The recognised heir succeeds subject to lawful eligibility and confirmation under the existing charter or compact. Regency requires institutional approval. Military command never passes by blood.

**Mandate review.** Hereditary tenure; annually review eligibility, incapacity and regency.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Sovereign — Emilien Brissot

Age 61–62 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Square-shouldered, with a lined forehead, fair skin and a neat side part above an old eyebrow scar.

**Personality.** Measured reformer who wants technical colleges without breaking compacts; impatient with ceremony, careful over land rights.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.96–2.91%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Admiral of the Crown — Lorent Auvret

Age 45–46 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Slender, with brown skin, black hair worn long and still hands folded over a document case.

**Personality.** Conscientious navigator who values fitters and consent; rejects fleet expansion without maintenance capacity.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.6–0.86%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### First Minister — Valerie Auvret

Age 49–50 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Heavy-set, with ruddy cheeks, thinning sandy hair and carefully polished practical boots.

**Personality.** Patient organiser with a talent for reassuring rivals; risks promising incompatible groups more than can be delivered.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.78–1.13%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Recognised heir — Elodie Brissot

Age 30–31 local years; alive. Completed local years at baseline; birthday unrecorded.

**Appearance.** Stocky, with olive skin, thick dark hair and a slow, deliberate walk.

**Personality.** Bright and impatient reformer; wants transparent accounts, yet underestimates the allies needed to pass them.

**Authority.** Prepared for succession and council work; no independent sovereignty or military command. Adult child of the sovereign, recognised under the succession settlement.

**Health.** No disabling condition established.

Ordinary annual age-based mortality reference: 0.33–0.36%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Ordelune Overseas Districts

**Ostrevain colonial governorship**

Ostrevain’s southern overseas districts join two island clusters under a governor at Ordelune, linked by supply sailings rather than continuous land administration. Crown estates, settler farms and older island communities coexist under unequal tax and land arrangements. Wool, grain and preserved food finance the administration; district councils seek a greater share of customs revenue. Outlying harbours depend on local pilots and winter stores. Ostrevain claims the chain but has no effective authority over Austral Land, and the governor cannot promise passage through polar waters.

**Executive authority.** The mainland government appoints the executive and controls external policy. Local councils and treaties retain the limited powers described below; neither governor nor garrison may speak for the mainland military as a whole.

**Selection and succession.** The mainland appointing government chooses a replacement. The chief secretary maintains routine civil business pending instructions; military command remains separate.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Governor — Vittore Varenne

Age 60–61 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Tall and narrow-shouldered, with close-cropped dark hair, a long nose and carefully mended formal cuffs.

**Personality.** Practical provisioning administrator who listens until land ownership is questioned; fears isolation more than criticism.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.8–2.66%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Garrison Commandant — Lucelle Dalmaret

Age 67–68 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Broad-faced, with greying curls, warm brown skin and an immaculate high-collared coat.

**Personality.** Unpretentious stores officer; protects roofs and grain before parades, distrusts distant promises.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 3.37–5.04%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Chief Secretary — Nerine Orselle

Age 50–51 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Compact and erect, with pale freckled skin, swept-back auburn hair and quick grey eyes.

**Personality.** Careful procedural negotiator; remembers promises and resists shortcuts, but can let consultation become delay.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.83–1.21%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Skeldran Hearth Confederacy

**Hearth confederacy**

The Skeldran Hearth Confederacy is a sovereign compact of island kin groups, fishing towns and grazing communities. Delegates meet at Skeldra; land and shelter rights remain with hearth assemblies. Customary law is transmitted through named custodians and written harbour judgments, with interpreters for several languages. Imported rifles, radios and motor boats coexist with wooden shipbuilding and household workshops. The confederacy grants seasonal anchorage permits but rejects permanent foreign garrisons. Sparse farmland and severe winters favour dispersed stores, reciprocal rescue duties and small defensive forces.

**Executive authority.** The executive is selected by the constituent councils or assemblies, which approve common supply and major commitments. Delegated administration allows routine decisions; it does not override local jurisdictions or create universal suffrage.

**Selection and succession.** The constituent council or assembly selects the executive. The named deputy keeps routine business moving during a vacancy but requires confirmation for a permanent mandate. Civil institutions appoint the professional military leadership.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Moot Speaker — Valerie Orselle

Age 72–73 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Long-limbed, with deep brown skin, a shaved head and a slight squint when reading fine print.

**Personality.** Patient listener with fierce reciprocal duty; distrusts officials who cannot be recalled to a hearth meeting.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 5.51–7.97%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Mutual Defence Coordinator — Matteo Vellori

Age 47–48 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Stocky, with olive skin, thick silver-streaked hair and a slow, deliberate walk.

**Personality.** Resourceful rescue captain, courageous in weather and cautious about foreign wars; relies too heavily on personal promises.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.68–0.99%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Deputy Moot Speaker — Coralie Duvaret

Age 51–52 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Lean and weathered, with a narrow mouth, dark hair tied at the nape and ink-stained fingertips.

**Personality.** Bright and impatient reformer; wants transparent accounts, yet underestimates the allies needed to pass them.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.89–1.3%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Merovian Island Republic

**Restricted representative island republic**

The Merovian Island Republic joins port municipalities and agricultural districts through an elected assembly. Its residence and tax franchise leaves seasonal crews and some outer communities underrepresented. Shipping insurance, repair docks, fruit and wool exports support a modest industrial base. Cooperative farms compete with carriers over freight rates. The republic controls a north-south chain at the meeting of eastern and austral routes; depot access is negotiated commercially rather than reserved to one mainland patron. Rival parties disagree over naval spending and foreign loans.

**Executive authority.** The executive is selected by the constituent councils or assemblies, which approve common supply and major commitments. Delegated administration allows routine decisions; it does not override local jurisdictions or create universal suffrage.

**Selection and succession.** The constituent council or assembly selects the executive. The named deputy keeps routine business moving during a vacancy but requires confirmation for a permanent mandate. Civil institutions appoint the professional military leadership.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Assembly President — Deliane Valentin

Age 71–72 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Round-faced, with cropped chestnut hair, dark eyes and a habit of adjusting a plain signet ring.

**Personality.** Persuasive centrist balancing cooperatives and insurers; wants efficient services but avoids a divisive franchise fight.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 4.98–7.27%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Fleet Commandant — Adrien Valentin

Age 44–45 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Tall, with dark skin, silver at the temples and a low voice that carries without effort.

**Personality.** Competent yard officer who argues for maintenance before new hulls; expects escort beneficiaries to contribute.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.56–0.81%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Deputy President — Armand Vaudrin

Age 46–47 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Small-framed, with tawny skin, tightly curled hair and wire-framed reading spectacles.

**Personality.** Affable coalition broker; good at restoring working relations, less willing to confront profitable abuses.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.64–0.92%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Ashalai Reef Covenant

**Covenant confederacy**

The Ashalai Reef Covenant confederates hereditary kin councils, elected harbour assemblies and inland farming communities. Its gathering at Ashala settles foreign treaties, fishing boundaries and mutual defence without extinguishing local law or language. Islanders have long cultivated wet valleys and traded between reefs. Imported engines, rifles and radios are maintained in port workshops; heavy industry is limited. Foreign firms lease warehouses through negotiated covenants, with no right to seize communal land. Harbour merchants favour broader credit access, while inland councils resist debts secured against future harvests.

**Executive authority.** The executive is selected by the constituent councils or assemblies, which approve common supply and major commitments. Delegated administration allows routine decisions; it does not override local jurisdictions or create universal suffrage.

**Selection and succession.** The constituent council or assembly selects the executive. The named deputy keeps routine business moving during a vacancy but requires confirmation for a permanent mandate. Civil institutions appoint the professional military leadership.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Covenant Speaker — Matteo Orselle

Age 49–50 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Square-shouldered, with a lined forehead, fair skin and a neat side part above an old eyebrow scar.

**Personality.** Amicable but immovable on common land; welcomes useful machinery, dislikes creditors equating restraint with backwardness.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.78–1.13%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Mutual Defence Captain — Heloise Astrevin

Age 67–68 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Slender, with brown skin, black hair worn long and still hands folded over a document case.

**Personality.** Observant pilot who favours dispersed stores and rescue cooperation; fears concentrating engines in one port.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 3.37–5.04%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Deputy Speaker — Armand Resselin

Age 42–43 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Heavy-set, with ruddy cheeks, thinning sandy hair and carefully polished practical boots.

**Personality.** Reserved institutional loyalist; protects continuity and competent staff, sometimes confuses established practice with necessity.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.51–0.7%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Kingdom of Istrana

**Assembly-constrained hereditary kingdom**

Istrana is an island kingdom with a hereditary crown, permanent civil service and revenue assembly representing towns and landholding districts. The court claims descent from an older maritime union, but authority rests on negotiated taxes and a small professional fleet. Sugar, fruit, textiles and repaired vessels pass through its ports. State schools train clerks and mechanics; heavy machinery and much marine fuel are imported. The crown cultivates several mainland partners to avoid a protectorate. Outer representatives demand limits on royal borrowing and exclusive contracts awarded to court merchants.

**Executive authority.** The sovereign directs diplomacy, appoints senior officials and issues executive orders. New revenues, provincial obligations and lawful succession remain subject to the recorded charter or compact; personal will does not create available resources.

**Selection and succession.** The recognised heir succeeds subject to lawful eligibility and confirmation under the existing charter or compact. Regency requires institutional approval. Military command never passes by blood.

**Mandate review.** Hereditary tenure; annually review eligibility, incapacity and regency.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Sovereign — Emilien Vasselin

Age 41–42 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Tall and narrow-shouldered, with close-cropped dark hair, a long nose and carefully mended formal cuffs.

**Personality.** Cultured patron cultivating several foreign partners; accepts scrutiny grudgingly and enjoys being credited for compromise.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.48–0.66%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Admiral of the Kingdom — Sylvain Vellori

Age 66–67 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Broad-faced, with greying curls, warm brown skin and an immaculate high-collared coat.

**Personality.** Economical commander who values inspected repairs; resists ornamental court acquisitions.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 3.06–4.59%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### First Minister — Fabien Varnier

Age 54–55 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Compact and erect, with pale freckled skin, swept-back auburn hair and quick grey eyes.

**Personality.** Sharp critic of waste; listens to practitioners but can humiliate officials whose figures do not add up.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.11–1.62%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Recognised heir — Romain Vasselin

Age 22–23 local years; alive. Completed local years at baseline; birthday unrecorded.

**Appearance.** Square-shouldered, with a lined forehead, fair skin and a neat side part above an old eyebrow scar.

**Personality.** Careful procedural negotiator; remembers promises and resists shortcuts, but can let consultation become delay.

**Authority.** Prepared for succession and council work; no independent sovereignty or military command. Adult child of the sovereign, recognised under the succession settlement.

**Health.** No disabling condition established.

Ordinary annual age-based mortality reference: 0.28–0.33%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Edrask Governorate

**Rovengard treaty governorship**

Rovengard’s Edrask Governorate holds the inhabited eastern chain through a governor, harbour garrisons and treaties with older island councils. Fishing communities, timber districts and settler towns have different land rights; some councils accept crown arbitration while resisting new concessions. Timber and preserved fish fund northern weather stations. Defence rests partly on visiting Rovengard ships, which are not permanent additions to the island fleet. Southern ports trade with Istrana; northern calls close seasonally. The governor’s map claim does not imply continuous occupation of mountain interiors.

**Executive authority.** The mainland government appoints the executive and controls external policy. Local councils and treaties retain the limited powers described below; neither governor nor garrison may speak for the mainland military as a whole.

**Selection and succession.** The mainland appointing government chooses a replacement. The chief secretary maintains routine civil business pending instructions; military command remains separate.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Governor — Yselle Nerval

Age 47–48 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Long-limbed, with deep brown skin, a shaved head and a slight squint when reading fine print.

**Personality.** Unsentimental timber administrator who keeps winter-delivery promises; concessions are negotiable, sovereignty less so.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.68–0.99%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Local Forces Commandant — Gaspard Resselin

Age 67–68 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Stocky, with olive skin, thick silver-streaked hair and a slow, deliberate walk.

**Personality.** Patient cold-water officer who works with visiting crews without claiming their ships; respects pilots over ceremony.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 3.37–5.04%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Chief Secretary — Solenne Serravin

Age 37–38 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Lean and weathered, with a narrow mouth, dark hair tied at the nape and ink-stained fingertips.

**Personality.** Patient organiser with a talent for reassuring rivals; risks promising incompatible groups more than can be delivered.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.4–0.51%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

## Norrakai Moots

**Seasonal moot confederacy**

The Norrakai Moots unite northern island communities through seasonal assemblies and mutual refuge law. They remain outside Vardol’s crown despite trading with its ports. Fishing, herding and limited sheltered cultivation sustain a sparse population, supplemented by imported grain. Councils negotiate pilotage and weather-station leases without ceding sovereignty. Radios and motor launches connect communities still reliant on locally built boats. Families use seasonal camps and permanent villages; an empty winter landing does not establish uninhabited territory.

**Executive authority.** The executive is selected by the constituent councils or assemblies, which approve common supply and major commitments. Delegated administration allows routine decisions; it does not override local jurisdictions or create universal suffrage.

**Selection and succession.** The constituent council or assembly selects the executive. The named deputy keeps routine business moving during a vacancy but requires confirmation for a permanent mandate. Civil institutions appoint the professional military leadership.

**Mandate review.** Annual mandate and appointment review; continuation is possible and review is not an automatic election or removal. Existing term expiry, when established, also triggers review.

**Military succession.** Civil appointing authority selects a qualified officer; record a named acting commander immediately and a permanent successor after decision. The successor must have a complete profile.

### Moot Speaker — Celiane Sorellet

Age 61–62 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Round-faced, with cropped chestnut hair, dark eyes and a habit of adjusting a plain signet ring.

**Personality.** Quiet, shrewd negotiator who lets outsiders talk too long; judges policy by whether isolated families can reach refuge.

**Authority.** Leads civil administration and foreign representation within the institutional limits below.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.96–2.91%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Refuge and Defence Coordinator — Fleur Cavrenne

Age 52–53 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Tall, with dark skin, silver at the temples and a low voice that carries without effort.

**Personality.** Calm rescue organiser who knows every engine; postpones prestige voyages to preserve fuel.

**Authority.** Professional direction of assigned forces, subject to civil appointment and authorised supply.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 0.96–1.4%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.

### Deputy Speaker — Benoit Favrelli

Age 54–55 local years; alive. Completed local years at register baseline; exact birthday unrecorded.

**Appearance.** Small-framed, with tawny skin, tightly curled hair and wire-framed reading spectacles.

**Personality.** Careful procedural negotiator; remembers promises and resists shortcuts, but can let consultation become delay.

**Authority.** Coordinates routine civil administration during an executive vacancy; permanent mandate must be lawfully conferred.

**Health.** No disabling condition established; ordinary age-related mortality still applies.

Ordinary annual age-based mortality reference: 1.11–1.62%. Local conditions, known health and exposure must be reviewed separately; no life extension is presumed.
