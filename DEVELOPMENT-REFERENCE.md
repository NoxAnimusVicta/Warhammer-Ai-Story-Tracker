# Household conditions, technology and ordinary lifespans

Reference date: **05/11/0068 AC43**. These are documented planning estimates for the story. The established accounts, biographies, wages and prices are preserved; no purchases, inventions, deaths or elapsed time occur through this maintenance. Inputs and review dates are available in development-baseline.json and development-reviews.json; current results are embedded in national-current.json.

## Household living standards

Living standards concern household command of food, shelter, warmth, clothing, care and ordinary participation in society. National output, treasury wealth, weapon quality and political titles are not substitutes for those things. The previous output/spending/technology score is superseded, with its source preserved in the historical archive.

The reference household is two adults and two children. The initial mixed-settlement needs basket is **24 L-eq/month**: food 11.5, shelter 5.5, fuel/light 1.8, clothing/household replacements 2.2, routine care 1, transport/school costs 2. These fall within the established 18–28 ordinary household range. Rural baskets allow cheaper food and shelter but dearer manufactured necessities and access; industrial baskets include greater housing costs. This is basic adequate consumption with maintenance allowances, not a starvation ration. L-eq is comparable purchasing power, not an assumed local cash currency.

Three representative groups capture distribution: labouring/smallholder households, skilled/salaried households, professional/asset-owning households. Their initial 70/25/5 weights and 90% paid-work utilisation are **provisional common modelling assumptions**, not census measurements or unemployment statistics. Household resources = wage × earners × paid-work utilisation + other income + own produce − direct taxes. Food grown and consumed is valued once as in-kind income and included in the needs basket; produce sold is not also self-consumed. Housing is in the basket, not deducted twice. Amounts exclude business gross turnover and state spending.

Initial wage inputs use the existing 16/27/65 monthly occupational benchmarks, adjusted by the square root of national output per resident relative to 205, bounded to 0.65–1.35. This is an explicit starting inference where no wage survey exists, not an identity between GDP and pay. These inputs are then frozen until a dated review: a later GDP rise does **not** automatically raise household wages. Annual employment, rent, taxes, own production, household composition and distribution must be reviewed separately. Public care and clean-water access begin as broad estimates informed by health/works spending and relevant capabilities; these are access assumptions, not proof that a budget has delivered universal services.

Each group's resource-to-needs ratio is displayed. A ratio of 1 meets the defined basic basket, 1.5 leaves half a basket for better goods/saving, and 2 doubles its resources. The convenience index is `clamp(40 + 30 × log2(ratio), 0, 100)`, population-weighted across the representative groups. Thus 40 denotes the basic basket and 70 twice the basket. It is a comparative index, not Victoria 3's exact game scale, a percentage of contented residents or a claim to measured poverty. The physical budgets matter more than a one-point rank.

Initial income uncertainty is ±20% and basket-price uncertainty ±15%, carried jointly into the score range. These deliberately wide scenario bands expose missing evidence. The model weights do not establish actual percentages below a poverty line: three representative households cannot identify an entire distribution. Local pay, rents and household evidence should replace these assumptions when established. Inequality, disposable resources, employment losses and essential prices can now change independently of national production.

## Technology: capacity, improvement and spread

Every national record has named capabilities grouped into 15 fields, with separate operation, understanding, production/repair, and deployment and use records. [Technology framework](TECHNOLOGY-FRAMEWORK.md) provides the cross-era catalogue and enabling foundations. A local industrial score is no longer presented as a technology level. Initial assessments are frozen, explicitly labelled inferences from established national industries; narrower demonstrated examples carry their own evidence. A high legacy score does not award every invention in a field. Unverified means unresolved, not necessarily absent.

Legacy industrial-depth inputs remain in archived/compatibility data to preserve existing economic and ordinary-development calculations. They do not govern future unlocks. Annual reviews must update the capability ledger, including imports, production dependence, coverage and losses, alongside these efficiency forecasts.

Two ordinary annual rates are distinguished:

- **Incremental improvement:** indicative reduction in labour/material input required for the same established output and quality through ordinary engineering. It is not a percentage boost to every weapon statistic or a fractional jump on the 1–5 capability scale.
- **Annual spread:** percentage points of eligible production/users that could adopt an already demonstrated improved method in a year. It is conditional capacity to spread a practice, not an asserted current coverage percentage. A specific programme needs a starting coverage and target population before applying the rate.

Rates are transparent scenario calibrations, not historical universal laws. Research capacity = education spending per resident / 8, bounded 0–1; investment capacity = public works per resident / 15, bounded 0–1; exchange = (communications rating − 1) / 4. Retained effort is 0.85 under ordinary Hunter pressure, 0.55 in Ossavren's civil conflict, 0.70 in Haldrevik's local fighting. These initial factors are reviewed yearly, not permanent national attributes. Midpoint improvement = `(0.3 + 1.4 research + 0.6 exchange) × retained effort`, with a 60–140% range. Annual-spread midpoint = `(1 + 3 investment + exchange) × retained effort × (1 + 0.12 × (5 − field capability))`, with a 65–135% range. Public budgets are proxies for wider training/investment; replace them with explicit research and capital inputs when those are recorded.

Ordinary societies develop without Galahad. At each annual review, account for those expected improvements, diffusion, imports, repairs and training, then recorded losses. Record a reason for outcomes outside the forecast, including stagnation. Do not compound the same progress twice through productivity and the existing output trend. Technical progress already included in output must be reconciled, not added again. New capability records need demonstrated evidence, trained people and production capacity. Major inventions need their own project/event; a forecast never unlocks plasma, nuclear power, life extension or an STC industry. Cullings can destroy plant, trained communities and retained knowledge; loss requires an event, not an automatic erasure of every advance.

## National lifespan and individual mortality

Ordinary humans have ordinary mortal lifespans. There is **no native life-extension industry**. Exceptional longevity requires an explicitly recorded Hunter intervention, psychic feat, newly invented treatment or acquired xenos treatment with scope and limits. Galahad's established engineered physiology is separate; being a ruler, physician or wealthy patron does not itself confer transhuman longevity.

Historical calibration: the [British Central Statistical Office's Annual Abstract of Statistics, table 29](https://www.lifetable.de/File/GetDocument/data/GBR/GBRGBR019481950AU1.pdf) supplies Great Britain's **1930–32** life table, a nearby interwar European reference rather than an exact 1938 universal table. Annual male/female mortality at age 60 is 2.427/1.796%, at 70 6.063/4.497%, and at 80 14.562/11.934%. Life expectancy at birth was 58.4/62.5 years. Those averages are not compulsory death ages. Historical age rates are interpolated between five-year points; ages 1–4 and above 100 use explicitly modelled approximations. See mortality.py in the maintained source.

National estimates vary with accessible care, clean water and household deprivation. The shared ordinary-hazard factor is `0.7 + 0.45 × (1 − care access) + 0.35 × (1 − clean-water access) + 0.5 × weighted basic-needs shortfall`, with access as fractions. It scales mortality hazards, not age or the calendar. The app shows one typical adult lifespan band: the 25th–75th percentile of modelled death ages for people reaching adulthood (20), rounded to whole local years of total age. This describes the central half, not guaranteed minimum/maximum ages or a confidence interval. Infant/child deaths stay in demographic accounting. The former at-birth and remaining-at-20 expectations are retained only as diagnostic data, not app headlines. See [population reconciliation](DEMOGRAPHIC-REVIEW.md) for the shared survival assumptions, explicitly estimated age structure and revised birth/death rates. Health, sanitation and household estimates are reviewed yearly. Exceptional war, epidemic and famine mortality must be added from recorded age/exposure-specific events; crude national deaths cannot be converted directly into lifespan. Until such a schedule exists these are **ordinary-conditions estimates**, not an all-cause wartime forecast.

Biographies show the age-related reference risk, incorporating age uncertainty and both historical sex curves rather than guessing sex from names. The annual person review then considers actual country, living conditions, medical access, illness and exposure. Age meaningfully increases risk; health labels cannot make it zero. Being 70 is not itself a specific disease, nor does looking healthy remove age-related mortality. Private probabilistic resolutions are made once, proportionate to the elapsed period; builds never reroll or secretly kill people. Every death or incapacity requires a dated event and an appropriately profiled successor.

## Mandatory annual update

Before every 01/01 rollover, review **all 43 returns**, even if the result is an explicitly justified unchanged value:

1. Reconcile population, prices, wages, jobs, taxes, household composition and distribution. Record changes to input budgets, never manually edit the living-standard headline.
2. Review care, sanitation and material hardship; recalculate national lifespan. Submit a complete dated demographic-reviews.json return for all 43 polities, reconciling fertility, age structure, births, deaths (including infancy once), migration and net growth; do not hold growth fixed automatically when conditions change. Resolve any exceptional hazards separately with their evidence and affected population.
3. Reconcile each technical field's ordinary improvement, deployment, use and losses against spending, trade, training and the national output trend. Record starting/closing metrics for any actual deployment programme. Update capability only on evidence.
4. Review political rights, domestic tensions, public confidence and security against their source events. Neither prosperity nor a good ruler guarantees approval.
5. Resolve each tracked person's elapsed-period mortality, health, mandate and succession review; do not grant a birthday at every new year or apply a full year's risk to a partial year.

development-reviews.json records uniquely identified, dated old/new input events and annual coverage. Each annual return needs wages/prices/employment, distribution/services, technology progress, losses/retention and source-account reconciliation. Missing years or countries stop the build. government-events.json separately requires complete leadership reviews. Future events stay unapplied, old-value mismatches fail, and a repeated build produces the same estimates. These are local-story-year updates, never real-world scheduled changes.


## Veldrassen
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 1.097 seeded from relative output per resident. Industrial basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Veldrassen is a composite monarchy whose mountain court at Cavrelisse presides over provinces ranging from tropical cultivation to cold industrial uplands. Mondessore's locomotive works and a large railway economy give the crown considerable military weight; provincial estates nevertheless control much of the revenue and recruitment on which it depends. The lowlands sell food and forest products uphill, while machinery and government contracts travel back down. Coal exports and heavy engineering sustain foreign influence. Court ceremony presents this diversity as unity, but extraordinary levies still require bargaining. Cervaud is a neighbouring buffer and customer, not a province awaiting effortless annexation. Valdorelle provides a charted coastal gateway, with defended access to Latosane. A provincial coastal dependency with fishing villages and navigation stations supplied from Valdorelle.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 23.1 | 25.0 | 0.924× |
| Skilled and salaried households | 25% | 34.14 | 25.0 | 1.366× |
| Professional and asset-owning households | 5% | 83.58 | 25.0 | 3.343× |

Accessible ordinary care: 61%; reliable clean water: 68%. Both are scenario estimates, not a survey.
Typical adult lifespan: 60–79 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 2.72 and public works 8.15 L-eq per resident; communication capability 4/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.62–1.46% | 1.87–3.88 percentage points |
| Machine tools & precision | 0.62–1.46% | 2.09–4.34 percentage points |
| Energy & electrification | 0.62–1.46% | 1.87–3.88 percentage points |
| Chemicals & industrial processes | 0.62–1.46% | 2.09–4.34 percentage points |
| Aviation & aeronautics | 0.62–1.46% | 2.09–4.34 percentage points |
| Maritime engineering | 0.62–1.46% | 2.09–4.34 percentage points |
| Communications & electrical instruments | 0.62–1.46% | 2.09–4.34 percentage points |
| Medicine & public health | 0.62–1.46% | 2.09–4.34 percentage points |
| Agriculture & food preservation | 0.62–1.46% | 1.98–4.11 percentage points |
| Water, sanitation & civil works | 0.62–1.46% | 2.02–4.19 percentage points |
| Rail, roads & motor transport | 0.62–1.46% | 1.94–4.03 percentage points |
| Construction & structural engineering | 0.62–1.46% | 1.98–4.11 percentage points |
| Textiles & household manufacture | 0.62–1.46% | 2.02–4.19 percentage points |
| Conventional military manufacture | 0.62–1.46% | 2.02–4.19 percentage points |
| Technical learning & knowledge retention | 0.62–1.46% | 2.09–4.34 percentage points |

Specialties: Heavy engineering, railway equipment and general manufactures; coal and processed fuel exports. Constraints: Provincial consent slows concentration; major arsenals and railway junctions remain irreplaceable targets.
## Ostrevain
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.910 seeded from relative output per resident. Mixed basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Ostrevain is an agricultural monarchy attempting to turn crop surpluses and a large population into industrial military strength. Orsevigne holds the royal administration; Tessarone concentrates arsenal work, supported by plantation and farming railways. Landed families retain influence over recruitment and produce, while royal commissioners favour factories and central procurement. Its armed forces can draw many soldiers, but transport and imported precision equipment constrain their deployment. Cervaud offers a market and a political buffer. In daily life the contrast is between estate authority, regimented industrial wards and expanding commercial towns, rather than between a uniformly modern capital and an empty countryside. Salterivo provides a charted coastal gateway, with defended access to Yssois. Royal coastal dependency with a governor, local fishing communities and an agricultural resupply station. Charted island harbours: Villessia.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 19.2 | 24.0 | 0.8× |
| Skilled and salaried households | 25% | 28.25 | 24.0 | 1.177× |
| Professional and asset-owning households | 5% | 71.56 | 24.0 | 2.982× |

Accessible ordinary care: 52%; reliable clean water: 48%. Both are scenario estimates, not a survey.
Typical adult lifespan: 58–77 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 1.42 and public works 3.40 L-eq per resident; communication capability 3/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.43–1.01% | 1.35–2.8 percentage points |
| Machine tools & precision | 0.43–1.01% | 1.49–3.1 percentage points |
| Energy & electrification | 0.43–1.01% | 1.49–3.1 percentage points |
| Chemicals & industrial processes | 0.43–1.01% | 1.35–2.8 percentage points |
| Aviation & aeronautics | 0.43–1.01% | 1.49–3.1 percentage points |
| Maritime engineering | 0.43–1.01% | 1.64–3.4 percentage points |
| Communications & electrical instruments | 0.43–1.01% | 1.49–3.1 percentage points |
| Medicine & public health | 0.43–1.01% | 1.49–3.1 percentage points |
| Agriculture & food preservation | 0.43–1.01% | 1.42–2.95 percentage points |
| Water, sanitation & civil works | 0.43–1.01% | 1.45–3.0 percentage points |
| Rail, roads & motor transport | 0.43–1.01% | 1.45–3.0 percentage points |
| Construction & structural engineering | 0.43–1.01% | 1.42–2.95 percentage points |
| Textiles & household manufacture | 0.43–1.01% | 1.45–3.0 percentage points |
| Conventional military manufacture | 0.43–1.01% | 1.4–2.9 percentage points |
| Technical learning & knowledge retention | 0.43–1.01% | 1.49–3.1 percentage points |

Specialties: Grain distribution, military stores and arsenal production. Constraints: Mass manpower outstrips motor transport; imported precision machinery constrains arsenal expansion.
## Rovessara
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 1.244 seeded from relative output per resident. Industrial basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Rovessara is a merchant republic governed through commercial councils. Bellacenne houses finance and administration, Avellori supplies precision instruments and electrical apparatus, and Pellavore connects both to overseas buyers. Temperate farming districts, seasonal lowlands and a dry interior give its domestic economy several distinct faces. Banks and shipping houses can finance projects far beyond the republic, but they cannot manufacture uninterrupted sea lanes or unlimited raw materials. Its strength lies in skilled production, credit and trade rather than the largest army. Inland towns consequently matter as food suppliers and customers, not merely as lesser copies of its fashionable port cities. Republican overseas districts administered through elected harbour councils and Rovessaran customs officers. Charted island harbours: Marcavisse.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 26.18 | 25.0 | 1.047× |
| Skilled and salaried households | 25% | 38.8 | 25.0 | 1.552× |
| Professional and asset-owning households | 5% | 93.06 | 25.0 | 3.722× |

Accessible ordinary care: 64%; reliable clean water: 64%. Both are scenario estimates, not a survey.
Typical adult lifespan: 60–79 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 5.70 and public works 5.94 L-eq per resident; communication capability 5/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.97–2.26% | 1.97–4.1 percentage points |
| Machine tools & precision | 0.97–2.26% | 1.76–3.66 percentage points |
| Energy & electrification | 0.97–2.26% | 1.76–3.66 percentage points |
| Chemicals & industrial processes | 0.97–2.26% | 1.76–3.66 percentage points |
| Aviation & aeronautics | 0.97–2.26% | 1.76–3.66 percentage points |
| Maritime engineering | 0.97–2.26% | 1.76–3.66 percentage points |
| Communications & electrical instruments | 0.97–2.26% | 1.76–3.66 percentage points |
| Medicine & public health | 0.97–2.26% | 1.97–4.1 percentage points |
| Agriculture & food preservation | 0.97–2.26% | 1.76–3.66 percentage points |
| Water, sanitation & civil works | 0.97–2.26% | 1.76–3.66 percentage points |
| Rail, roads & motor transport | 0.97–2.26% | 1.83–3.8 percentage points |
| Construction & structural engineering | 0.97–2.26% | 1.87–3.88 percentage points |
| Textiles & household manufacture | 0.97–2.26% | 1.76–3.66 percentage points |
| Conventional military manufacture | 0.97–2.26% | 1.83–3.8 percentage points |
| Technical learning & knowledge retention | 0.97–2.26% | 1.76–3.66 percentage points |

Specialties: Precision instruments, electrical apparatus and overseas commerce. Constraints: Trade interruption threatens fuel and food imports; its skilled workforce is difficult to replace.
## Brannervaux
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.964 seeded from relative output per resident. Mixed basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Brannervaux is a federation of basin cities, landed districts and water authorities. Rivessole hosts common government; Molessac's pumping and engineering works turn the management of scarce or badly timed water into a major export industry. Productive cultivation coexists with dry rain-shadow districts dependent on imported food and controlled supplies. Members cooperate over transport, maintenance and defence while retaining powers that can delay a common decision. Trade with Veldrassen's factories and neighbouring agricultural states is extensive. The federation is confined to its own territories: neither its river institutions nor its name imply rule over Otranto as a whole.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 20.32 | 24.0 | 0.847× |
| Skilled and salaried households | 25% | 29.94 | 24.0 | 1.248× |
| Professional and asset-owning households | 5% | 75.01 | 24.0 | 3.126× |

Accessible ordinary care: 60%; reliable clean water: 56%. Both are scenario estimates, not a survey.
Typical adult lifespan: 59–78 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 1.82 and public works 4.38 L-eq per resident; communication capability 4/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.55–1.27% | 1.8–3.74 percentage points |
| Machine tools & precision | 0.55–1.27% | 1.62–3.37 percentage points |
| Energy & electrification | 0.55–1.27% | 1.62–3.37 percentage points |
| Chemicals & industrial processes | 0.55–1.27% | 1.45–3.01 percentage points |
| Aviation & aeronautics | 0.55–1.27% | 1.8–3.74 percentage points |
| Maritime engineering | 0.55–1.27% | 1.8–3.74 percentage points |
| Communications & electrical instruments | 0.55–1.27% | 1.62–3.37 percentage points |
| Medicine & public health | 0.55–1.27% | 1.62–3.37 percentage points |
| Agriculture & food preservation | 0.55–1.27% | 1.54–3.19 percentage points |
| Water, sanitation & civil works | 0.55–1.27% | 1.57–3.25 percentage points |
| Rail, roads & motor transport | 0.55–1.27% | 1.68–3.5 percentage points |
| Construction & structural engineering | 0.55–1.27% | 1.71–3.56 percentage points |
| Textiles & household manufacture | 0.55–1.27% | 1.57–3.25 percentage points |
| Conventional military manufacture | 0.55–1.27% | 1.62–3.37 percentage points |
| Technical learning & knowledge retention | 0.55–1.27% | 1.62–3.37 percentage points |

Specialties: Water engineering, agricultural processing and industrial chemistry. Constraints: Water allocation and estate vetoes complicate mobilisation; river freight is sensitive to damaged locks.
## Cervaud
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.858 seeded from relative output per resident. Mixed basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Cervaud is a hereditary duchy whose court and officer institutions occupy Charvessant. Vezarolle's workshops support an army unusually important to public life, but cultivated lowlands, forest produce and upland farming sustain the civilian population. The duke bargains with larger Veldrassen and Ostrevain rather than enjoying complete strategic independence. Their credit and arms help preserve the frontier while giving foreign purchasers influence. Border markets also connect Cervaud with smaller neighbouring authorities. Rank and military service carry prestige, yet merchants, farmers and workshop households have livelihoods extending across the same boundaries that officers are expected to defend.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 18.12 | 24.0 | 0.755× |
| Skilled and salaried households | 25% | 26.61 | 24.0 | 1.109× |
| Professional and asset-owning households | 5% | 68.23 | 24.0 | 2.843× |

Accessible ordinary care: 54%; reliable clean water: 48%. Both are scenario estimates, not a survey.
Typical adult lifespan: 58–77 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 1.58 and public works 3.47 L-eq per resident; communication capability 3/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.45–1.04% | 1.5–3.12 percentage points |
| Machine tools & precision | 0.45–1.04% | 1.5–3.12 percentage points |
| Energy & electrification | 0.45–1.04% | 1.5–3.12 percentage points |
| Chemicals & industrial processes | 0.45–1.04% | 1.5–3.12 percentage points |
| Aviation & aeronautics | 0.45–1.04% | 1.65–3.42 percentage points |
| Maritime engineering | 0.45–1.04% | 1.79–3.72 percentage points |
| Communications & electrical instruments | 0.45–1.04% | 1.5–3.12 percentage points |
| Medicine & public health | 0.45–1.04% | 1.5–3.12 percentage points |
| Agriculture & food preservation | 0.45–1.04% | 1.5–3.12 percentage points |
| Water, sanitation & civil works | 0.45–1.04% | 1.5–3.12 percentage points |
| Rail, roads & motor transport | 0.45–1.04% | 1.5–3.12 percentage points |
| Construction & structural engineering | 0.45–1.04% | 1.5–3.12 percentage points |
| Textiles & household manufacture | 0.45–1.04% | 1.5–3.12 percentage points |
| Conventional military manufacture | 0.45–1.04% | 1.5–3.12 percentage points |
| Technical learning & knowledge retention | 0.45–1.04% | 1.5–3.12 percentage points |

Specialties: Frontier logistics, armaments repair and estate agriculture. Constraints: Arms and credit depend on competing patrons; prolonged mobilisation drains agricultural labour.
## Veylac
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 1.143 seeded from relative output per resident. Industrial basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Veylac is an industrial republic centred on Alescogne's councils, Bellorante's machine-tool works and Rionvesse's ocean trade. Municipal and commercial representation gives organised towns influence, while labour's place in government remains contested. Temperate farming districts provision cold upland factories; dry interior towns specialise in transport and practical manufacturing. Skilled metallurgy gives the republic valuable exports and military equipment, but imported food and fuel remain strategic dependencies. Ossavren's divided neighbours create both markets and frontier risks. The republic's cities are linked by production and commerce, without sharing one uniform climate, social hierarchy or relationship with factory employers. Veylac customs and lighthouse districts protecting its southern approaches. Charted island harbours: Cavresset.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 24.07 | 25.0 | 0.963× |
| Skilled and salaried households | 25% | 35.61 | 25.0 | 1.424× |
| Professional and asset-owning households | 5% | 86.55 | 25.0 | 3.462× |

Accessible ordinary care: 62%; reliable clean water: 64%. Both are scenario estimates, not a survey.
Typical adult lifespan: 60–79 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 3.01 and public works 9.03 L-eq per resident; communication capability 4/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.65–1.52% | 1.96–4.08 percentage points |
| Machine tools & precision | 0.65–1.52% | 1.96–4.08 percentage points |
| Energy & electrification | 0.65–1.52% | 2.2–4.57 percentage points |
| Chemicals & industrial processes | 0.65–1.52% | 2.2–4.57 percentage points |
| Aviation & aeronautics | 0.65–1.52% | 2.2–4.57 percentage points |
| Maritime engineering | 0.65–1.52% | 2.67–5.55 percentage points |
| Communications & electrical instruments | 0.65–1.52% | 2.2–4.57 percentage points |
| Medicine & public health | 0.65–1.52% | 2.2–4.57 percentage points |
| Agriculture & food preservation | 0.65–1.52% | 2.2–4.57 percentage points |
| Water, sanitation & civil works | 0.65–1.52% | 2.12–4.41 percentage points |
| Rail, roads & motor transport | 0.65–1.52% | 2.04–4.24 percentage points |
| Construction & structural engineering | 0.65–1.52% | 1.96–4.08 percentage points |
| Textiles & household manufacture | 0.65–1.52% | 2.12–4.41 percentage points |
| Conventional military manufacture | 0.65–1.52% | 2.04–4.24 percentage points |
| Technical learning & knowledge retention | 0.65–1.52% | 2.08–4.33 percentage points |

Specialties: Metallurgy, machine tools and factory production. Constraints: Exposed frontier factories and food imports limit a long war despite excellent machine-tool output.
## Ossavren successor territories
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.811 seeded from relative output per resident. Mixed basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Ossavren denotes the territories of a broken crown, not a functioning nation with one army. Ossendrienne remains a vast former capital, while provincial commands, rival courts and autonomous commercial cities control their own taxation and troops. Tressavio trades through Veylac; other districts face Ostrevain or the Seravelle markets. Coal and petroleum resources give competing rulers valuable assets, but tolls, incompatible arrangements and local fighting divide their use. Shared food, family ties and railway habits survive the political fracture. Aggregate military and economic figures measure the whole region's resources; no claimant can simply issue orders to that combined total. Neravisse provides a charted coastal gateway, with defended access to Tatogia. A dependency of Neravisse’s municipal charter, not territory governed by a restored Ossavren crown. Charted island harbours: Cavralto.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 17.14 | 24.0 | 0.714× |
| Skilled and salaried households | 25% | 25.12 | 24.0 | 1.047× |
| Professional and asset-owning households | 5% | 65.19 | 24.0 | 2.716× |

Accessible ordinary care: 54%; reliable clean water: 49%. Both are scenario estimates, not a survey.
Typical adult lifespan: 58–77 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 1.68 and public works 3.70 L-eq per resident; communication capability 3/5; retained effort factor 0.55. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.3–0.69% | 0.9–1.86 percentage points |
| Machine tools & precision | 0.3–0.69% | 0.99–2.06 percentage points |
| Energy & electrification | 0.3–0.69% | 0.99–2.06 percentage points |
| Chemicals & industrial processes | 0.3–0.69% | 0.99–2.06 percentage points |
| Aviation & aeronautics | 0.3–0.69% | 0.99–2.06 percentage points |
| Maritime engineering | 0.3–0.69% | 0.99–2.06 percentage points |
| Communications & electrical instruments | 0.3–0.69% | 0.99–2.06 percentage points |
| Medicine & public health | 0.3–0.69% | 0.99–2.06 percentage points |
| Agriculture & food preservation | 0.3–0.69% | 0.99–2.06 percentage points |
| Water, sanitation & civil works | 0.3–0.69% | 0.99–2.06 percentage points |
| Rail, roads & motor transport | 0.3–0.69% | 0.96–2.0 percentage points |
| Construction & structural engineering | 0.3–0.69% | 0.95–1.96 percentage points |
| Textiles & household manufacture | 0.3–0.69% | 0.99–2.06 percentage points |
| Conventional military manufacture | 0.3–0.69% | 0.96–2.0 percentage points |
| Technical learning & knowledge retention | 0.3–0.69% | 0.99–2.06 percentage points |

Specialties: Competing provincial administrations, workshops and military supply; divided coalfields and petroleum districts. Constraints: Combined rival returns; no common treasury, staff or army. Rail gauges, tolls and civil fighting fragment capacity.
## Rovengard
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.856 seeded from relative output per resident. Mixed basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Rovengard is Morholt's largest single monarchy, governed from Arvendal and linked to overseas trade through Halsavik. Eslovanne supplies general engineering, while productive southern districts support farming, food processing and timber industries. Cold northern towns depend on transport from those warmer basins. The crown's practical task is to keep provisions and obligations moving between communities separated by difficult country. Varnesk sells specialist machinery; Halskert and Galdresk are connected through local trade and provisioning routes. Large territorial claims and a substantial population therefore do not translate into an army free to abandon domestic roads, stores and defended settlements. Royal island districts with resident councils, coastal patrols and Halsavik supply contracts. Charted island harbours: Veltrund.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 18.07 | 24.0 | 0.753× |
| Skilled and salaried households | 25% | 26.54 | 24.0 | 1.106× |
| Professional and asset-owning households | 5% | 68.07 | 24.0 | 2.836× |

Accessible ordinary care: 53%; reliable clean water: 54%. Both are scenario estimates, not a survey.
Typical adult lifespan: 58–78 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 1.92 and public works 5.77 L-eq per resident; communication capability 3/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.48–1.11% | 1.82–3.77 percentage points |
| Machine tools & precision | 0.48–1.11% | 1.82–3.77 percentage points |
| Energy & electrification | 0.48–1.11% | 1.82–3.77 percentage points |
| Chemicals & industrial processes | 0.48–1.11% | 1.82–3.77 percentage points |
| Aviation & aeronautics | 0.48–1.11% | 1.99–4.14 percentage points |
| Maritime engineering | 0.48–1.11% | 1.99–4.14 percentage points |
| Communications & electrical instruments | 0.48–1.11% | 1.82–3.77 percentage points |
| Medicine & public health | 0.48–1.11% | 1.82–3.77 percentage points |
| Agriculture & food preservation | 0.48–1.11% | 1.82–3.77 percentage points |
| Water, sanitation & civil works | 0.48–1.11% | 1.82–3.77 percentage points |
| Rail, roads & motor transport | 0.48–1.11% | 1.82–3.77 percentage points |
| Construction & structural engineering | 0.48–1.11% | 1.82–3.77 percentage points |
| Textiles & household manufacture | 0.48–1.11% | 1.82–3.77 percentage points |
| Conventional military manufacture | 0.48–1.11% | 1.82–3.77 percentage points |
| Technical learning & knowledge retention | 0.48–1.11% | 1.82–3.77 percentage points |

Specialties: Valley agriculture, timber and stronghold supply. Constraints: Winter supply and dispersed valley garrisons consume most available transport.
## Varnesk
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 1.075 seeded from relative output per resident. Mixed basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Varnesk is a league of mining councils and industrial proprietors meeting at Corsavik. Norsavia's specialist steel and machinery are valued across Morholt, and southern cultivated towns supply part of the league's food. Cold extraction districts still depend on imported grain and negotiated transport. Commercial relationships with Rovengard and the Haldrevik concessions give its firms influence beyond league borders. Industrial owners and municipal councils can agree on a profitable contract more readily than a prolonged foreign campaign. Technical skill is concentrated in workshops and training networks, not evenly distributed through every settlement or available without fuel, materials and labour. Rovensk provides a charted coastal gateway, with defended access to Garenorrin.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 22.63 | 24.0 | 0.943× |
| Skilled and salaried households | 25% | 33.44 | 24.0 | 1.393× |
| Professional and asset-owning households | 5% | 82.15 | 24.0 | 3.423× |

Accessible ordinary care: 60%; reliable clean water: 62%. Both are scenario estimates, not a survey.
Typical adult lifespan: 60–79 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 2.51 and public works 7.53 L-eq per resident; communication capability 3/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.53–1.24% | 1.66–3.45 percentage points |
| Machine tools & precision | 0.53–1.24% | 1.66–3.45 percentage points |
| Energy & electrification | 0.53–1.24% | 1.86–3.86 percentage points |
| Chemicals & industrial processes | 0.53–1.24% | 1.86–3.86 percentage points |
| Aviation & aeronautics | 0.53–1.24% | 2.06–4.28 percentage points |
| Maritime engineering | 0.53–1.24% | 2.26–4.69 percentage points |
| Communications & electrical instruments | 0.53–1.24% | 2.06–4.28 percentage points |
| Medicine & public health | 0.53–1.24% | 1.86–3.86 percentage points |
| Agriculture & food preservation | 0.53–1.24% | 1.86–3.86 percentage points |
| Water, sanitation & civil works | 0.53–1.24% | 1.79–3.73 percentage points |
| Rail, roads & motor transport | 0.53–1.24% | 1.73–3.59 percentage points |
| Construction & structural engineering | 0.53–1.24% | 1.66–3.45 percentage points |
| Textiles & household manufacture | 0.53–1.24% | 1.79–3.73 percentage points |
| Conventional military manufacture | 0.53–1.24% | 1.73–3.59 percentage points |
| Technical learning & knowledge retention | 0.53–1.24% | 1.86–3.86 percentage points |

Specialties: Ore processing, specialist steels, bearings and durable machinery. Constraints: Specialist foundries are strong; grain imports and seasonal routes make an extended blockade dangerous.
## Galdresk
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.885 seeded from relative output per resident. Mixed basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Galdresk is a wardenship of chartered orders, estates and civilian towns. Grevallier's medical and teaching institutions and Verniselle's instrument makers give it influence disproportionate to its small industrial base. Farming districts below the colder uplands help provision isolated communities; railways and negotiated access remain essential. Some houses preserve the older arts alongside practical medicine, but genuine practitioners are scarce and do not constitute a mass magical army. Neighbouring rulers value trained personnel and advice. Within Galdresk, obligations of shelter, patrol and care give institutions social authority without making every resident an initiate or every town a monastery. Orlavik provides a charted coastal gateway, with defended access to Millvik. Wardenship navigation and shelter claims. Seasonal landings and small service crews do not imply a dense iceward population.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 18.68 | 24.0 | 0.778× |
| Skilled and salaried households | 25% | 27.45 | 24.0 | 1.144× |
| Professional and asset-owning households | 5% | 69.94 | 24.0 | 2.914× |

Accessible ordinary care: 65%; reliable clean water: 50%. Both are scenario estimates, not a survey.
Typical adult lifespan: 59–78 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 3.98 and public works 4.15 L-eq per resident; communication capability 4/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.74–1.72% | 1.94–4.03 percentage points |
| Machine tools & precision | 0.74–1.72% | 1.77–3.67 percentage points |
| Energy & electrification | 0.74–1.72% | 1.77–3.67 percentage points |
| Chemicals & industrial processes | 0.74–1.72% | 1.77–3.67 percentage points |
| Aviation & aeronautics | 0.74–1.72% | 1.94–4.03 percentage points |
| Maritime engineering | 0.74–1.72% | 2.11–4.38 percentage points |
| Communications & electrical instruments | 0.74–1.72% | 1.6–3.32 percentage points |
| Medicine & public health | 0.74–1.72% | 1.43–2.96 percentage points |
| Agriculture & food preservation | 0.74–1.72% | 1.77–3.67 percentage points |
| Water, sanitation & civil works | 0.74–1.72% | 1.77–3.67 percentage points |
| Rail, roads & motor transport | 0.74–1.72% | 1.83–3.79 percentage points |
| Construction & structural engineering | 0.74–1.72% | 1.85–3.85 percentage points |
| Textiles & household manufacture | 0.74–1.72% | 1.77–3.67 percentage points |
| Conventional military manufacture | 0.74–1.72% | 1.83–3.79 percentage points |
| Technical learning & knowledge retention | 0.74–1.72% | 1.68–3.49 percentage points |

Specialties: Field medicine, communications and scholarly traditions. Constraints: Small arsenals and scattered teaching houses constrain scale; trained wardens excel locally rather than in mass campaigns.
## Halskert
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.896 seeded from relative output per resident. Mixed basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Halskert is a republic of river towns, agricultural districts and commercial authorities. Orsendal coordinates government and grain trade; Tresselund manufactures equipment for farms and water works. Productive temperate districts make the republic an important supplier to colder neighbours, while warmer pockets add different crops to its exports. Mill owners, merchants and water authorities bargain over maintenance, freight and taxation. Its transport experience supports defence, but fuel imports and seasonal conditions constrain distant operations. Galdresk buys provisions and trades specialist goods, while Rovengard is both a customer and competitor. Civilian food production is a source of power here, not background scenery. Seldavre provides a charted coastal gateway, with defended access to Orsendal. Republican grain-shipping dependencies with elected port boards and permanent fishing settlements. Charted island harbours: Seldren.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 18.91 | 24.0 | 0.788× |
| Skilled and salaried households | 25% | 27.81 | 24.0 | 1.159× |
| Professional and asset-owning households | 5% | 70.69 | 24.0 | 2.945× |

Accessible ordinary care: 52%; reliable clean water: 49%. Both are scenario estimates, not a survey.
Typical adult lifespan: 58–77 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 1.50 and public works 3.60 L-eq per resident; communication capability 3/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.44–1.03% | 1.52–3.16 percentage points |
| Machine tools & precision | 0.44–1.03% | 1.52–3.16 percentage points |
| Energy & electrification | 0.44–1.03% | 1.52–3.16 percentage points |
| Chemicals & industrial processes | 0.44–1.03% | 1.37–2.85 percentage points |
| Aviation & aeronautics | 0.44–1.03% | 1.67–3.46 percentage points |
| Maritime engineering | 0.44–1.03% | 1.52–3.16 percentage points |
| Communications & electrical instruments | 0.44–1.03% | 1.52–3.16 percentage points |
| Medicine & public health | 0.44–1.03% | 1.52–3.16 percentage points |
| Agriculture & food preservation | 0.44–1.03% | 1.45–3.01 percentage points |
| Water, sanitation & civil works | 0.44–1.03% | 1.47–3.06 percentage points |
| Rail, roads & motor transport | 0.44–1.03% | 1.52–3.16 percentage points |
| Construction & structural engineering | 0.44–1.03% | 1.52–3.16 percentage points |
| Textiles & household manufacture | 0.44–1.03% | 1.47–3.06 percentage points |
| Conventional military manufacture | 0.44–1.03% | 1.47–3.06 percentage points |
| Technical learning & knowledge retention | 0.44–1.03% | 1.52–3.16 percentage points |

Specialties: River freight, milling and agricultural exchange. Constraints: Seasonal navigation and dependence on imported fuels limit sustained operations away from rivers.
## Tervayne
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 1.150 seeded from relative output per resident. Industrial basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Tervayne is a western Vesalian maritime state whose government and commercial houses occupy Tervessac. Tervassin handles ocean shipping; Brescalle builds marine and civil machinery. Cultivated districts supply provisions while upland towns provide timber and manufactured goods. Its trading networks face Otranto and Morholt across the western ocean, with only indirect connections to the eastern Marches through intervening governments and difficult country. Maritime wealth supports naval supply and overseas influence, not unrestricted inland conquest. Port families, industrial firms and agricultural districts consequently have different priorities, even when foreign merchants describe them collectively as a seafaring people. Overseas supply and navigation districts maintained by Tervayne’s maritime administration and resident port councils. Charted island harbours: Ostrelac.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 24.23 | 25.0 | 0.969× |
| Skilled and salaried households | 25% | 35.84 | 25.0 | 1.434× |
| Professional and asset-owning households | 5% | 87.03 | 25.0 | 3.481× |

Accessible ordinary care: 64%; reliable clean water: 65%. Both are scenario estimates, not a survey.
Typical adult lifespan: 60–79 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 3.41 and public works 10.24 L-eq per resident; communication capability 4/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.69–1.6% | 2.35–4.88 percentage points |
| Machine tools & precision | 0.69–1.6% | 2.35–4.88 percentage points |
| Energy & electrification | 0.69–1.6% | 2.35–4.88 percentage points |
| Chemicals & industrial processes | 0.69–1.6% | 2.35–4.88 percentage points |
| Aviation & aeronautics | 0.69–1.6% | 2.35–4.88 percentage points |
| Maritime engineering | 0.69–1.6% | 2.1–4.36 percentage points |
| Communications & electrical instruments | 0.69–1.6% | 2.35–4.88 percentage points |
| Medicine & public health | 0.69–1.6% | 2.35–4.88 percentage points |
| Agriculture & food preservation | 0.69–1.6% | 2.35–4.88 percentage points |
| Water, sanitation & civil works | 0.69–1.6% | 2.35–4.88 percentage points |
| Rail, roads & motor transport | 0.69–1.6% | 2.35–4.88 percentage points |
| Construction & structural engineering | 0.69–1.6% | 2.35–4.88 percentage points |
| Textiles & household manufacture | 0.69–1.6% | 2.35–4.88 percentage points |
| Conventional military manufacture | 0.69–1.6% | 2.35–4.88 percentage points |
| Technical learning & knowledge retention | 0.69–1.6% | 2.35–4.88 percentage points |

Specialties: Maritime freight, ship maintenance and naval supply. Constraints: Sea lanes carry its power; inland movement is slow and there is no through railway to eastern Vesalius.
## Vardol
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.952 seeded from relative output per resident. Mixed basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Vardol is a northern realm centred on Estrevigne's royal and military administration. Caldovre and surrounding cold-country cities concentrate arsenals, engineering and fuel processing; productive southern districts around Belmerac help feed them. The state can support a large military establishment but must also defend long supply routes and its rivalry with Averholt. Caldrienne is reached by the Valdrec road, not held as a subordinate province. Army procurement gives industrial suppliers political influence, while landed and commercial interests negotiate the cost. Its apparent strength therefore rests on maintaining a demanding system of food, fuel and transport rather than manpower alone. Calvessac provides a charted coastal gateway, with defended access to Quillaux. Northern crown claims maintained by lighthouse crews and seasonal naval stores. Remote interiors are not continuously occupied.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 20.08 | 24.0 | 0.836× |
| Skilled and salaried households | 25% | 29.56 | 24.0 | 1.232× |
| Professional and asset-owning households | 5% | 74.23 | 24.0 | 3.093× |

Accessible ordinary care: 52%; reliable clean water: 59%. Both are scenario estimates, not a survey.
Typical adult lifespan: 59–78 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 1.87 and public works 5.61 L-eq per resident; communication capability 3/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.47–1.1% | 1.62–3.37 percentage points |
| Machine tools & precision | 0.47–1.1% | 1.8–3.73 percentage points |
| Energy & electrification | 0.47–1.1% | 1.62–3.37 percentage points |
| Chemicals & industrial processes | 0.47–1.1% | 1.62–3.37 percentage points |
| Aviation & aeronautics | 0.47–1.1% | 1.8–3.73 percentage points |
| Maritime engineering | 0.47–1.1% | 1.8–3.73 percentage points |
| Communications & electrical instruments | 0.47–1.1% | 1.8–3.73 percentage points |
| Medicine & public health | 0.47–1.1% | 1.8–3.73 percentage points |
| Agriculture & food preservation | 0.47–1.1% | 1.62–3.37 percentage points |
| Water, sanitation & civil works | 0.47–1.1% | 1.68–3.49 percentage points |
| Rail, roads & motor transport | 0.47–1.1% | 1.68–3.49 percentage points |
| Construction & structural engineering | 0.47–1.1% | 1.71–3.55 percentage points |
| Textiles & household manufacture | 0.47–1.1% | 1.68–3.49 percentage points |
| Conventional military manufacture | 0.47–1.1% | 1.68–3.49 percentage points |
| Technical learning & knowledge retention | 0.47–1.1% | 1.8–3.73 percentage points |

Specialties: Northern arsenals, estate production and military provisioning; coalfields and fuel refining. Constraints: The Averholt frontier and northern garrisons tie down formations; large armies cannot simply redeploy to the Marches.
## Averholt
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.941 seeded from relative output per resident. Mixed basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Averholt is a predominantly inland realm held together by provincial bargains. Avercenne conducts common government, Rocavane concentrates mountain engineering, and lower cultivated districts supply the cold upland towns. Rivalry with Vardol competes with domestic defence for resources. Western rail links support trade with Tervayne, while Chalicchio's road reaches Karsenne and the eastern Marches. Provincial institutions protect their own stores and troops, limiting what the central government can concentrate elsewhere. Agricultural merchants, upland industrial firms and landed councils thus contribute different kinds of strength. The realm is a substantial neighbour with internal commitments, not a continent-wide power waiting to absorb every smaller state. Bravessac provides a charted coastal gateway, with defended access to Vetenavaux. Claims administered by the northern coastal province; fishing landings and seasonal shelters receive supplies from Bravessac.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 19.85 | 24.0 | 0.827× |
| Skilled and salaried households | 25% | 29.23 | 24.0 | 1.218× |
| Professional and asset-owning households | 5% | 73.57 | 24.0 | 3.065× |

Accessible ordinary care: 55%; reliable clean water: 51%. Both are scenario estimates, not a survey.
Typical adult lifespan: 58–78 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 1.88 and public works 4.52 L-eq per resident; communication capability 3/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.47–1.11% | 1.65–3.42 percentage points |
| Machine tools & precision | 0.47–1.11% | 1.65–3.42 percentage points |
| Energy & electrification | 0.47–1.11% | 1.65–3.42 percentage points |
| Chemicals & industrial processes | 0.47–1.11% | 1.65–3.42 percentage points |
| Aviation & aeronautics | 0.47–1.11% | 1.65–3.42 percentage points |
| Maritime engineering | 0.47–1.11% | 1.96–4.08 percentage points |
| Communications & electrical instruments | 0.47–1.11% | 1.65–3.42 percentage points |
| Medicine & public health | 0.47–1.11% | 1.65–3.42 percentage points |
| Agriculture & food preservation | 0.47–1.11% | 1.65–3.42 percentage points |
| Water, sanitation & civil works | 0.47–1.11% | 1.65–3.42 percentage points |
| Rail, roads & motor transport | 0.47–1.11% | 1.65–3.42 percentage points |
| Construction & structural engineering | 0.47–1.11% | 1.65–3.42 percentage points |
| Textiles & household manufacture | 0.47–1.11% | 1.65–3.42 percentage points |
| Conventional military manufacture | 0.47–1.11% | 1.65–3.42 percentage points |
| Technical learning & knowledge retention | 0.47–1.11% | 1.65–3.42 percentage points |

Specialties: Basin agriculture, internal trade and provincial engineering. Constraints: Provincial bargains and the Vardol frontier absorb resources; interior transport has limited spare capacity.
## Serevask Republic
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.888 seeded from relative output per resident. Mixed basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: The Serevask Republic governs its own mountain, upland and forest districts from Serevienne. Vallorise remains an important engineering city, connected commercially to the states that once shared a southern basin federation. Varnelle, Kelbrun and Gavrel now levy their own taxes and command their own forces; old charters create claims over debts and water, not effective Serevask sovereignty. The republic retains archives, technical institutions and useful workshops, but has neither the population nor authority of the former union. Its citizens include mountain households dependent on lower provisions and lowland manufacturers dependent on cross-border customers. It has never governed Vesalius as a whole.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 18.73 | 24.0 | 0.78× |
| Skilled and salaried households | 25% | 27.54 | 24.0 | 1.148× |
| Professional and asset-owning households | 5% | 70.13 | 24.0 | 2.922× |

Accessible ordinary care: 58%; reliable clean water: 47%. Both are scenario estimates, not a survey.
Typical adult lifespan: 58–78 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 1.43 and public works 3.15 L-eq per resident; communication capability 3/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.43–1.01% | 1.46–3.03 percentage points |
| Machine tools & precision | 0.43–1.01% | 1.46–3.03 percentage points |
| Energy & electrification | 0.43–1.01% | 1.46–3.03 percentage points |
| Chemicals & industrial processes | 0.43–1.01% | 1.32–2.74 percentage points |
| Aviation & aeronautics | 0.43–1.01% | 1.6–3.32 percentage points |
| Maritime engineering | 0.43–1.01% | 1.6–3.32 percentage points |
| Communications & electrical instruments | 0.43–1.01% | 1.46–3.03 percentage points |
| Medicine & public health | 0.43–1.01% | 1.32–2.74 percentage points |
| Agriculture & food preservation | 0.43–1.01% | 1.39–2.88 percentage points |
| Water, sanitation & civil works | 0.43–1.01% | 1.41–2.93 percentage points |
| Rail, roads & motor transport | 0.43–1.01% | 1.46–3.03 percentage points |
| Construction & structural engineering | 0.43–1.01% | 1.46–3.03 percentage points |
| Textiles & household manufacture | 0.43–1.01% | 1.41–2.93 percentage points |
| Conventional military manufacture | 0.43–1.01% | 1.41–2.93 percentage points |
| Technical learning & knowledge retention | 0.43–1.01% | 1.46–3.03 percentage points |

Specialties: Civil administration, filtration and chemical workshops, repair shops and commercial services. Constraints: The republic controls only its own districts. Varnelle, Kelbrun and Gavrel have separate forces and revenues; old charter claims confer no authority over them.
## Varnelle
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.968 seeded from relative output per resident. Mixed basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Varnelle is a delta state administered through port, water and commercial authorities centred on Varnessa. Serravole's shipping and Ceralvigne's engineering connect cultivated forest districts with overseas markets. Independence from Serevask followed disputes over reconstruction debts and customs after the former federation ceased functioning. Railway and business relationships survived that break. Merchants and water boards have considerable influence, while military establishments defend strategic approaches rather than replace civilian government everywhere. Rivessac, Kelbrun and Gavrel supply neighbouring markets. Control of freight and water makes Varnelle consequential to inland customers, but those customers remain separate political communities. Delta-authority island districts with customs houses, repair yards and provisioning farms. Charted island harbours: Cervallune.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 20.41 | 24.0 | 0.851× |
| Skilled and salaried households | 25% | 30.08 | 24.0 | 1.253× |
| Professional and asset-owning households | 5% | 75.29 | 24.0 | 3.137× |

Accessible ordinary care: 60%; reliable clean water: 56%. Both are scenario estimates, not a survey.
Typical adult lifespan: 59–78 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 2.32 and public works 6.97 L-eq per resident; communication capability 3/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.51–1.2% | 1.98–4.12 percentage points |
| Machine tools & precision | 0.51–1.2% | 1.98–4.12 percentage points |
| Energy & electrification | 0.51–1.2% | 1.98–4.12 percentage points |
| Chemicals & industrial processes | 0.51–1.2% | 1.6–3.32 percentage points |
| Aviation & aeronautics | 0.51–1.2% | 2.18–4.52 percentage points |
| Maritime engineering | 0.51–1.2% | 1.79–3.72 percentage points |
| Communications & electrical instruments | 0.51–1.2% | 1.98–4.12 percentage points |
| Medicine & public health | 0.51–1.2% | 1.79–3.72 percentage points |
| Agriculture & food preservation | 0.51–1.2% | 1.79–3.72 percentage points |
| Water, sanitation & civil works | 0.51–1.2% | 1.86–3.85 percentage points |
| Rail, roads & motor transport | 0.51–1.2% | 1.98–4.12 percentage points |
| Construction & structural engineering | 0.51–1.2% | 1.98–4.12 percentage points |
| Textiles & household manufacture | 0.51–1.2% | 1.86–3.85 percentage points |
| Conventional military manufacture | 0.51–1.2% | 1.86–3.85 percentage points |
| Technical learning & knowledge retention | 0.51–1.2% | 1.98–4.12 percentage points |

Specialties: Delta freight, customs, filtration and processing trades. Constraints: Delta channels, customs dependence and disputed upstream water access constrain resilience.
## Kelbrun
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.768 seeded from relative output per resident. Rural basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Kelbrun is an independent state of councils and powerful plantation interests governed from Kelbrienne. Oreviano's rubber chemistry and filtration industries turn cultivated resources into valuable manufactured exports. Seasonal uplands supply grain and livestock alongside the wetter districts' plantation products. Estate labour obligations and commercial access shape politics as much as formal council debates. Serevask is a former federal partner and continuing industrial customer; Varnelle and Calvernis provide other trading connections. Army posts secure routes and production districts, but the country's influence chiefly rests on useful materials, technical knowledge and agricultural trade. Its population does not share one estate, employer or social standing. Cervellane provides a charted coastal gateway, with defended access to Cambrelet. Council-administered island dependency with plantation suppliers, fisheries and bonded stores. Charted island harbours: Marcellune.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 18.24 | 21.0 | 0.868× |
| Skilled and salaried households | 25% | 24.75 | 21.0 | 1.179× |
| Professional and asset-owning households | 5% | 62.41 | 21.0 | 2.972× |

Accessible ordinary care: 51%; reliable clean water: 42%. Both are scenario estimates, not a survey.
Typical adult lifespan: 58–77 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 1.29 and public works 3.11 L-eq per resident; communication capability 2/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.35–0.81% | 1.41–2.92 percentage points |
| Machine tools & precision | 0.35–0.81% | 1.41–2.92 percentage points |
| Energy & electrification | 0.35–0.81% | 1.41–2.92 percentage points |
| Chemicals & industrial processes | 0.35–0.81% | 1.16–2.4 percentage points |
| Aviation & aeronautics | 0.35–0.81% | 1.53–3.18 percentage points |
| Maritime engineering | 0.35–0.81% | 1.41–2.92 percentage points |
| Communications & electrical instruments | 0.35–0.81% | 1.41–2.92 percentage points |
| Medicine & public health | 0.35–0.81% | 1.28–2.66 percentage points |
| Agriculture & food preservation | 0.35–0.81% | 1.28–2.66 percentage points |
| Water, sanitation & civil works | 0.35–0.81% | 1.32–2.75 percentage points |
| Rail, roads & motor transport | 0.35–0.81% | 1.41–2.92 percentage points |
| Construction & structural engineering | 0.35–0.81% | 1.41–2.92 percentage points |
| Textiles & household manufacture | 0.35–0.81% | 1.32–2.75 percentage points |
| Conventional military manufacture | 0.35–0.81% | 1.32–2.75 percentage points |
| Technical learning & knowledge retention | 0.35–0.81% | 1.41–2.92 percentage points |

Specialties: Upriver freight, plantation produce and agricultural machinery. Constraints: Plantation levies are numerous but unevenly equipped; imported engines and fuel remain essential.
## Gavrel
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.768 seeded from relative output per resident. Rural basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Gavrel is a group of chartered march houses with limited common institutions at Gavrielle. Each house retains its own courts and levies; Mesrienne's workshops and local markets connect their economies without erasing that autonomy. Former federal links to Serevask survive as railways, debts and commercial relationships. Varnelle and the southern cantons offer additional buyers for agricultural and forest products. Local guarantors and patronage matter to travel and trade because no single ministry controls every transaction. The combined return describes their shared resources, while actual military cooperation depends on agreements among houses rather than an automatic unified command. Montalive provides a charted coastal gateway, with defended access to Lesigne. Dependencies of individual march houses under a common coastal supply compact; no unified Gavrel navy or crown is implied. Charted island harbours: Loravise.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 18.23 | 21.0 | 0.868× |
| Skilled and salaried households | 25% | 24.75 | 21.0 | 1.179× |
| Professional and asset-owning households | 5% | 62.4 | 21.0 | 2.971× |

Accessible ordinary care: 48%; reliable clean water: 42%. Both are scenario estimates, not a survey.
Typical adult lifespan: 58–77 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 1.44 and public works 3.18 L-eq per resident; communication capability 2/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.36–0.84% | 1.42–2.94 percentage points |
| Machine tools & precision | 0.36–0.84% | 1.42–2.94 percentage points |
| Energy & electrification | 0.36–0.84% | 1.42–2.94 percentage points |
| Chemicals & industrial processes | 0.36–0.84% | 1.42–2.94 percentage points |
| Aviation & aeronautics | 0.36–0.84% | 1.54–3.2 percentage points |
| Maritime engineering | 0.36–0.84% | 1.54–3.2 percentage points |
| Communications & electrical instruments | 0.36–0.84% | 1.42–2.94 percentage points |
| Medicine & public health | 0.36–0.84% | 1.42–2.94 percentage points |
| Agriculture & food preservation | 0.36–0.84% | 1.42–2.94 percentage points |
| Water, sanitation & civil works | 0.36–0.84% | 1.42–2.94 percentage points |
| Rail, roads & motor transport | 0.36–0.84% | 1.42–2.94 percentage points |
| Construction & structural engineering | 0.36–0.84% | 1.42–2.94 percentage points |
| Textiles & household manufacture | 0.36–0.84% | 1.42–2.94 percentage points |
| Conventional military manufacture | 0.36–0.84% | 1.42–2.94 percentage points |
| Technical learning & knowledge retention | 0.36–0.84% | 1.42–2.94 percentage points |

Specialties: March provisioning, rural estates and frontier workshops. Constraints: Household loyalties divide command; repair workshops cannot replace large losses of imported equipment.
## Bellacosta Cantons
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.801 seeded from relative output per resident. Rural basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: The cantons grew out of harbour and plantation charters left without a royal guarantor after the last major culling. Jougrenne convenes the coastal toll assembly; Nantac administers a separate inland land court. Neither can tax the other’s households. Harbour dues fund escorts while plantation owners pay for roads and demand control of the checkpoints. Veldrassen buys tropical produce and timber here, but its purchasing agents face competing canton tariffs rather than a single ministry. Tenant disputes centre on debt and access to cleared farmland; the assembly meets over commercial quarrels, not to command a national army. Lorrevento provides a charted coastal gateway, with defended access to Chignoro. Separate canton harbour dependencies; local fishing rights and harbour dues remain with the charter communities. Charted island harbours: Vessantine.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 18.92 | 21.0 | 0.901× |
| Skilled and salaried households | 25% | 25.8 | 21.0 | 1.228× |
| Professional and asset-owning households | 5% | 64.54 | 21.0 | 3.073× |

Accessible ordinary care: 44%; reliable clean water: 41%. Both are scenario estimates, not a survey.
Typical adult lifespan: 58–77 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 1.11 and public works 2.68 L-eq per resident; communication capability 2/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.33–0.77% | 1.34–2.78 percentage points |
| Machine tools & precision | 0.33–0.77% | 1.34–2.78 percentage points |
| Energy & electrification | 0.33–0.77% | 1.34–2.78 percentage points |
| Chemicals & industrial processes | 0.33–0.77% | 1.34–2.78 percentage points |
| Aviation & aeronautics | 0.33–0.77% | 1.46–3.03 percentage points |
| Maritime engineering | 0.33–0.77% | 1.34–2.78 percentage points |
| Communications & electrical instruments | 0.33–0.77% | 1.34–2.78 percentage points |
| Medicine & public health | 0.33–0.77% | 1.34–2.78 percentage points |
| Agriculture & food preservation | 0.33–0.77% | 1.34–2.78 percentage points |
| Water, sanitation & civil works | 0.33–0.77% | 1.34–2.78 percentage points |
| Rail, roads & motor transport | 0.33–0.77% | 1.34–2.78 percentage points |
| Construction & structural engineering | 0.33–0.77% | 1.34–2.78 percentage points |
| Textiles & household manufacture | 0.33–0.77% | 1.34–2.78 percentage points |
| Conventional military manufacture | 0.33–0.77% | 1.34–2.78 percentage points |
| Technical learning & knowledge retention | 0.33–0.77% | 1.34–2.78 percentage points |

Specialties: Tropical produce, timber concessions, harbour handling and coastal escorts. Constraints: Canton tolls and planter credit divide the export trade. Escort flotillas answer to their sponsors; the combined manpower is not one army.
## Cavressa Principalities
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.830 seeded from relative output per resident. Rural basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: A chain of small courts and charter towns occupies the southwestern approaches. Collengo’s market charter protects merchants from estate levies, while the lords around Peregia claim payment for escorting their wagons. Winter fodder and access through the uplands matter more than distant dynastic titles. Albaret brokers wool and preserved food between the courts. Marriage contracts frequently change toll rights without moving a border; merchants employ local advocates to interpret them. Southern sea trade offers an alternative to the roads, but only to houses able to finance a shipment. Vellorito provides a charted coastal gateway, with defended access to Totarosco. Dependencies of individual coastal principalities, linked by a limited pilotage compact rather than a new island kingdom. Charted island harbours: Monteliva.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 19.53 | 21.0 | 0.93× |
| Skilled and salaried households | 25% | 26.71 | 21.0 | 1.272× |
| Professional and asset-owning households | 5% | 66.4 | 21.0 | 3.162× |

Accessible ordinary care: 46%; reliable clean water: 41%. Both are scenario estimates, not a survey.
Typical adult lifespan: 58–77 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 1.22 and public works 2.68 L-eq per resident; communication capability 2/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.34–0.79% | 1.34–2.79 percentage points |
| Machine tools & precision | 0.34–0.79% | 1.34–2.79 percentage points |
| Energy & electrification | 0.34–0.79% | 1.34–2.79 percentage points |
| Chemicals & industrial processes | 0.34–0.79% | 1.34–2.79 percentage points |
| Aviation & aeronautics | 0.34–0.79% | 1.46–3.03 percentage points |
| Maritime engineering | 0.34–0.79% | 1.34–2.79 percentage points |
| Communications & electrical instruments | 0.34–0.79% | 1.34–2.79 percentage points |
| Medicine & public health | 0.34–0.79% | 1.34–2.79 percentage points |
| Agriculture & food preservation | 0.34–0.79% | 1.34–2.79 percentage points |
| Water, sanitation & civil works | 0.34–0.79% | 1.34–2.79 percentage points |
| Rail, roads & motor transport | 0.34–0.79% | 1.34–2.79 percentage points |
| Construction & structural engineering | 0.34–0.79% | 1.34–2.79 percentage points |
| Textiles & household manufacture | 0.34–0.79% | 1.34–2.79 percentage points |
| Conventional military manufacture | 0.34–0.79% | 1.34–2.79 percentage points |
| Technical learning & knowledge retention | 0.34–0.79% | 1.34–2.79 percentage points |

Specialties: Wool, preserved provisions, upland cartage and small estate workshops. Constraints: Rights of passage change between courts. Winter fodder and incompatible toll privileges limit concentration more than nominal levy strength.
## Vaulcerre Basin Leagues
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.813 seeded from relative output per resident. Rural basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Anselleuil’s reservoir command, Jarnan’s commercial council and the estate assemblies around Votane share a drainage basin but not a government. Their water compact survived the destruction of the authority that first imposed it. Gates must open in an agreed order; delaying an upstream release can destroy a downstream planting season. Brannervaux engineers are employed as arbitrators and suspected of favouring their own merchants. Grain barges, mill repair and fertiliser works sustain the towns. Disputes usually begin as inspections, impoundments and unpaid maintenance bills before soldiers become involved. Cortelune provides a charted coastal gateway, with defended access to Leignay. Offshore charter communities of the basin leagues, sharing pilots and navigation dues without a unified sovereign. Charted island harbours: Cernavie.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 19.16 | 21.0 | 0.913× |
| Skilled and salaried households | 25% | 26.17 | 21.0 | 1.246× |
| Professional and asset-owning households | 5% | 65.29 | 21.0 | 3.109× |

Accessible ordinary care: 45%; reliable clean water: 41%. Both are scenario estimates, not a survey.
Typical adult lifespan: 58–77 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 1.16 and public works 2.78 L-eq per resident; communication capability 2/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.33–0.78% | 1.36–2.82 percentage points |
| Machine tools & precision | 0.33–0.78% | 1.36–2.82 percentage points |
| Energy & electrification | 0.33–0.78% | 1.36–2.82 percentage points |
| Chemicals & industrial processes | 0.33–0.78% | 1.36–2.82 percentage points |
| Aviation & aeronautics | 0.33–0.78% | 1.48–3.07 percentage points |
| Maritime engineering | 0.33–0.78% | 1.36–2.82 percentage points |
| Communications & electrical instruments | 0.33–0.78% | 1.36–2.82 percentage points |
| Medicine & public health | 0.33–0.78% | 1.36–2.82 percentage points |
| Agriculture & food preservation | 0.33–0.78% | 1.36–2.82 percentage points |
| Water, sanitation & civil works | 0.33–0.78% | 1.36–2.82 percentage points |
| Rail, roads & motor transport | 0.33–0.78% | 1.36–2.82 percentage points |
| Construction & structural engineering | 0.33–0.78% | 1.36–2.82 percentage points |
| Textiles & household manufacture | 0.33–0.78% | 1.36–2.82 percentage points |
| Conventional military manufacture | 0.33–0.78% | 1.36–2.82 percentage points |
| Technical learning & knowledge retention | 0.33–0.78% | 1.36–2.82 percentage points |

Specialties: Irrigated grain, mill machinery, fertiliser works and inland water freight. Constraints: Water commands hold separate troops. A damaged gate or withheld release can disable production without an invading army taking the towns.
## Seravelle Littoral
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.813 seeded from relative output per resident. Rural basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Astrellac’s harbour republic and the inland estate courts share the eastern littoral with smaller free ports. Their commercial convention standardises bills of lading but leaves taxes and criminal law local. Shipping families advance money against harvests; rural houses resent foreclosures by creditors who never leave the coast. Rovessaran insurers and instrument makers are influential customers. Port patrols cooperate against raiders, yet seize one another’s cargo when a debt dispute turns political. Hinterland towns depend on export warehouses for salt, tools and credit, which gives the harbours power beyond their formal borders. Astrellac’s chartered island dependencies within the Seravelle return. Resident councils administer land and fisheries; Astrellac supplies customs officers, escorts and bonded fuel depots. The other Seravelle courts remain independent. Charted island harbours: Cortessia, Vasselac, Rovellisse.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 19.18 | 21.0 | 0.913× |
| Skilled and salaried households | 25% | 26.19 | 21.0 | 1.247× |
| Professional and asset-owning households | 5% | 65.34 | 21.0 | 3.111× |

Accessible ordinary care: 43%; reliable clean water: 44%. Both are scenario estimates, not a survey.
Typical adult lifespan: 58–77 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 1.26 and public works 3.79 L-eq per resident; communication capability 2/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.34–0.8% | 1.51–3.13 percentage points |
| Machine tools & precision | 0.34–0.8% | 1.51–3.13 percentage points |
| Energy & electrification | 0.34–0.8% | 1.51–3.13 percentage points |
| Chemicals & industrial processes | 0.34–0.8% | 1.51–3.13 percentage points |
| Aviation & aeronautics | 0.34–0.8% | 1.64–3.41 percentage points |
| Maritime engineering | 0.34–0.8% | 1.51–3.13 percentage points |
| Communications & electrical instruments | 0.34–0.8% | 1.51–3.13 percentage points |
| Medicine & public health | 0.34–0.8% | 1.51–3.13 percentage points |
| Agriculture & food preservation | 0.34–0.8% | 1.51–3.13 percentage points |
| Water, sanitation & civil works | 0.34–0.8% | 1.51–3.13 percentage points |
| Rail, roads & motor transport | 0.34–0.8% | 1.51–3.13 percentage points |
| Construction & structural engineering | 0.34–0.8% | 1.51–3.13 percentage points |
| Textiles & household manufacture | 0.34–0.8% | 1.51–3.13 percentage points |
| Conventional military manufacture | 0.34–0.8% | 1.51–3.13 percentage points |
| Technical learning & knowledge retention | 0.34–0.8% | 1.51–3.13 percentage points |

Specialties: Export warehousing, coastal shipping, food processing and commercial credit. Constraints: Port conventions facilitate cargo, not military command. Inland debt disputes and foreign shipping insurance expose the region to commercial pressure.
## Haldrevik Concessions
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.799 seeded from relative output per resident. Rural basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Concession houses hold time-limited rights to timber, minerals and fuel rather than sovereignty over every inhabitant. Asanetz keeps the surviving charter archive; Alauvenne houses one of the armed inspection posts. A house can own a railway and still owe rent to the community beneath it. Varnesk firms provide machinery and credit, exchanging technical dependence for preferred ore contracts. Charter renewals provoke strikes, armed intimidation and lawsuits over restoration bonds. Settlements outside a concession bargain for patrols in return for provisions; a company’s withdrawal can be more frightening than its arrival. Trelovre provides a charted coastal gateway, with defended access to Arinrin. Island shore communities under Haldrevik charter protection. Concession leases cover named working sites, not ownership of all inhabitants. Charted island harbours: Rovensac.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 18.89 | 21.0 | 0.9× |
| Skilled and salaried households | 25% | 25.75 | 21.0 | 1.226× |
| Professional and asset-owning households | 5% | 64.43 | 21.0 | 3.068× |

Accessible ordinary care: 44%; reliable clean water: 46%. Both are scenario estimates, not a survey.
Typical adult lifespan: 58–77 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 1.39 and public works 4.18 L-eq per resident; communication capability 2/5; retained effort factor 0.7. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.29–0.68% | 1.29–2.68 percentage points |
| Machine tools & precision | 0.29–0.68% | 1.29–2.68 percentage points |
| Energy & electrification | 0.29–0.68% | 1.29–2.68 percentage points |
| Chemicals & industrial processes | 0.29–0.68% | 1.29–2.68 percentage points |
| Aviation & aeronautics | 0.29–0.68% | 1.41–2.92 percentage points |
| Maritime engineering | 0.29–0.68% | 1.29–2.68 percentage points |
| Communications & electrical instruments | 0.29–0.68% | 1.29–2.68 percentage points |
| Medicine & public health | 0.29–0.68% | 1.29–2.68 percentage points |
| Agriculture & food preservation | 0.29–0.68% | 1.29–2.68 percentage points |
| Water, sanitation & civil works | 0.29–0.68% | 1.29–2.68 percentage points |
| Rail, roads & motor transport | 0.29–0.68% | 1.29–2.68 percentage points |
| Construction & structural engineering | 0.29–0.68% | 1.29–2.68 percentage points |
| Textiles & household manufacture | 0.29–0.68% | 1.29–2.68 percentage points |
| Conventional military manufacture | 0.29–0.68% | 1.29–2.68 percentage points |
| Technical learning & knowledge retention | 0.29–0.68% | 1.29–2.68 percentage points |

Specialties: Coal export concessions, timber, extraction machinery and contract transport. Constraints: Company forces protect particular assets. Charter disputes, imported food and dependence on Varnesk equipment undermine any combined mobilisation.
## Dreissen Wardholds
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.830 seeded from relative output per resident. Rural basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Dananske, Dreinvar and Ferorvik anchor separate wardholds along the northern approaches. Each warden owes shelter to the villages that provision a fortress, but the obligation is disputed when stores run short. Their annual muster negotiates convoy schedules and exchanges hostages against broken promises; it does not elect a king. Galdresk medical houses maintain small hospices by invitation. Imported grain is strategically more important than ceremonial claims to the iceward interior. Officers measure influence in serviceable engines and winter stores, while civilian assemblies try to keep temporary requisitions from becoming permanent rent. Veltroven provides a charted coastal gateway, with defended access to Kerenvenne. Claims of adjacent wardholds, maintained by fishing visits and seasonal convoy shelters rather than continuous occupation.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 19.54 | 21.0 | 0.931× |
| Skilled and salaried households | 25% | 26.73 | 21.0 | 1.273× |
| Professional and asset-owning households | 5% | 66.44 | 21.0 | 3.164× |

Accessible ordinary care: 45%; reliable clean water: 47%. Both are scenario estimates, not a survey.
Typical adult lifespan: 58–78 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 1.58 and public works 4.75 L-eq per resident; communication capability 2/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.37–0.87% | 1.65–3.43 percentage points |
| Machine tools & precision | 0.37–0.87% | 1.65–3.43 percentage points |
| Energy & electrification | 0.37–0.87% | 1.65–3.43 percentage points |
| Chemicals & industrial processes | 0.37–0.87% | 1.65–3.43 percentage points |
| Aviation & aeronautics | 0.37–0.87% | 1.8–3.74 percentage points |
| Maritime engineering | 0.37–0.87% | 1.65–3.43 percentage points |
| Communications & electrical instruments | 0.37–0.87% | 1.65–3.43 percentage points |
| Medicine & public health | 0.37–0.87% | 1.65–3.43 percentage points |
| Agriculture & food preservation | 0.37–0.87% | 1.65–3.43 percentage points |
| Water, sanitation & civil works | 0.37–0.87% | 1.65–3.43 percentage points |
| Rail, roads & motor transport | 0.37–0.87% | 1.65–3.43 percentage points |
| Construction & structural engineering | 0.37–0.87% | 1.65–3.43 percentage points |
| Textiles & household manufacture | 0.37–0.87% | 1.65–3.43 percentage points |
| Conventional military manufacture | 0.37–0.87% | 1.65–3.43 percentage points |
| Technical learning & knowledge retention | 0.37–0.87% | 1.65–3.43 percentage points |

Specialties: Convoy staging, cold-weather stores, fortress repair and imported-grain distribution. Constraints: Most personnel guard their own supply districts. Winter fuel and food reserves impose strict limits on campaigning beyond the wardholds.
## Varneselle Estates
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.796 seeded from relative output per resident. Rural basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: The eastern estates descend from competing settlement grants, with Varkessant’s port charter carved out of the landed claims. Estate bailiffs administer courts and patrol obligations; the port elects its own commercial officers. Fishing communities resist attempts to classify their customary shore access as a landlord’s concession. Halskert buys fish and timber and sells grain, giving its merchants leverage in disputes over freight. Family alliances cross estate borders, but succession cases repeatedly fragment holdings. Seasonal workers move between shore crews and inland workshops, carrying news faster than the formal post. Varkessant’s port-charter dependencies; the mainland estate courts retain their separate jurisdictions. Charted island harbours: Cersund.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 18.83 | 21.0 | 0.896× |
| Skilled and salaried households | 25% | 25.66 | 21.0 | 1.222× |
| Professional and asset-owning households | 5% | 64.24 | 21.0 | 3.059× |

Accessible ordinary care: 45%; reliable clean water: 41%. Both are scenario estimates, not a survey.
Typical adult lifespan: 58–77 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 1.16 and public works 2.79 L-eq per resident; communication capability 2/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.33–0.78% | 1.36–2.82 percentage points |
| Machine tools & precision | 0.33–0.78% | 1.36–2.82 percentage points |
| Energy & electrification | 0.33–0.78% | 1.36–2.82 percentage points |
| Chemicals & industrial processes | 0.33–0.78% | 1.36–2.82 percentage points |
| Aviation & aeronautics | 0.33–0.78% | 1.48–3.07 percentage points |
| Maritime engineering | 0.33–0.78% | 1.36–2.82 percentage points |
| Communications & electrical instruments | 0.33–0.78% | 1.36–2.82 percentage points |
| Medicine & public health | 0.33–0.78% | 1.36–2.82 percentage points |
| Agriculture & food preservation | 0.33–0.78% | 1.36–2.82 percentage points |
| Water, sanitation & civil works | 0.33–0.78% | 1.36–2.82 percentage points |
| Rail, roads & motor transport | 0.33–0.78% | 1.36–2.82 percentage points |
| Construction & structural engineering | 0.33–0.78% | 1.36–2.82 percentage points |
| Textiles & household manufacture | 0.33–0.78% | 1.36–2.82 percentage points |
| Conventional military manufacture | 0.33–0.78% | 1.36–2.82 percentage points |
| Technical learning & knowledge retention | 0.33–0.78% | 1.36–2.82 percentage points |

Specialties: Fishing, timber, estate workshops and seasonal coastal freight. Constraints: Port and estate forces obey different officers. Agricultural limits and dependence on Halskert grain make freight disruption especially costly.
## Bressavelle Marches
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.883 seeded from relative output per resident. Mixed basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: The western marches form a belt of fortified lordships, town liberties and cultivated valleys between larger powers. Temevaux’s command guards a road junction; Malinne’s council controls a different customs district. Neither speaks for the entire belt. Tervayne merchants finance road repairs in exchange for bonded warehouses, while inland patrons subsidise rival toll houses. Small rulers survive by alternating clients and keeping neighbouring courts divided. Textile finishing, estate agriculture and wagon repair support a population far larger than its thinly charted principal towns suggest. A traveller’s permit may be valid for one bridge and useless at the next. Orsavie provides a charted coastal gateway, with defended access to Balbrenne. Chartered island lordships tied to the western marches by supply contracts; Tervayne has commercial privileges, not sovereignty. Charted island harbours: Lorvesset.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 18.64 | 24.0 | 0.777× |
| Skilled and salaried households | 25% | 27.4 | 24.0 | 1.142× |
| Professional and asset-owning households | 5% | 69.85 | 24.0 | 2.91× |

Accessible ordinary care: 52%; reliable clean water: 47%. Both are scenario estimates, not a survey.
Typical adult lifespan: 58–77 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 1.42 and public works 3.13 L-eq per resident; communication capability 3/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.43–1.01% | 1.6–3.31 percentage points |
| Machine tools & precision | 0.43–1.01% | 1.46–3.02 percentage points |
| Energy & electrification | 0.43–1.01% | 1.46–3.02 percentage points |
| Chemicals & industrial processes | 0.43–1.01% | 1.46–3.02 percentage points |
| Aviation & aeronautics | 0.43–1.01% | 1.6–3.31 percentage points |
| Maritime engineering | 0.43–1.01% | 1.46–3.02 percentage points |
| Communications & electrical instruments | 0.43–1.01% | 1.46–3.02 percentage points |
| Medicine & public health | 0.43–1.01% | 1.46–3.02 percentage points |
| Agriculture & food preservation | 0.43–1.01% | 1.46–3.02 percentage points |
| Water, sanitation & civil works | 0.43–1.01% | 1.46–3.02 percentage points |
| Rail, roads & motor transport | 0.43–1.01% | 1.5–3.12 percentage points |
| Construction & structural engineering | 0.43–1.01% | 1.53–3.17 percentage points |
| Textiles & household manufacture | 0.43–1.01% | 1.46–3.02 percentage points |
| Conventional military manufacture | 0.43–1.01% | 1.5–3.12 percentage points |
| Technical learning & knowledge retention | 0.43–1.01% | 1.46–3.02 percentage points |

Specialties: Textile finishing, estate produce, bonded warehousing and wagon repair. Constraints: Foreign clients subsidise rival toll houses. Local garrisons cannot be added together as an expeditionary force without renegotiating their obligations.
## Vallessia Cantons
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.886 seeded from relative output per resident. Mixed basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Southern market cantons rebuilt around local granaries after the last major culling. Margeuil’s elected grain board, Darnenne’s military governor and the landed councils around Galigny compete over transport dues. Common measures for grain survived; a common treasury did not. Merchants connect warm lowland crops with cooler interior districts, using brokers who can guarantee passage through several authorities. Kelbrun buyers seek plantation produce and seasonal labour. Municipal councils resist the governors’ claim that every warehouse is a military asset, particularly after poor harvests make requisitions politically dangerous. Pravessant provides a charted coastal gateway, with defended access to Peillier. Dependencies of individual southern cantons, governed through resident councils and grain-shipping charters. Charted island harbours: Cervelune.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 18.7 | 24.0 | 0.779× |
| Skilled and salaried households | 25% | 27.51 | 24.0 | 1.146× |
| Professional and asset-owning households | 5% | 70.04 | 24.0 | 2.918× |

Accessible ordinary care: 52%; reliable clean water: 48%. Both are scenario estimates, not a survey.
Typical adult lifespan: 58–77 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 1.42 and public works 3.40 L-eq per resident; communication capability 3/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.43–1.01% | 1.64–3.4 percentage points |
| Machine tools & precision | 0.43–1.01% | 1.49–3.1 percentage points |
| Energy & electrification | 0.43–1.01% | 1.49–3.1 percentage points |
| Chemicals & industrial processes | 0.43–1.01% | 1.49–3.1 percentage points |
| Aviation & aeronautics | 0.43–1.01% | 1.64–3.4 percentage points |
| Maritime engineering | 0.43–1.01% | 1.49–3.1 percentage points |
| Communications & electrical instruments | 0.43–1.01% | 1.49–3.1 percentage points |
| Medicine & public health | 0.43–1.01% | 1.49–3.1 percentage points |
| Agriculture & food preservation | 0.43–1.01% | 1.49–3.1 percentage points |
| Water, sanitation & civil works | 0.43–1.01% | 1.49–3.1 percentage points |
| Rail, roads & motor transport | 0.43–1.01% | 1.54–3.2 percentage points |
| Construction & structural engineering | 0.43–1.01% | 1.57–3.25 percentage points |
| Textiles & household manufacture | 0.43–1.01% | 1.49–3.1 percentage points |
| Conventional military manufacture | 0.43–1.01% | 1.54–3.2 percentage points |
| Technical learning & knowledge retention | 0.43–1.01% | 1.49–3.1 percentage points |

Specialties: Grain storage, warm-climate produce, food processing and inter-canton brokerage. Constraints: Military governors and elected market boards compete for transport and stores. Requisition disputes can immobilise a nominally available reserve.
## Rivessac Coast
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.887 seeded from relative output per resident. Mixed basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Saultac is the best-charted inland market in a southeastern coastal region of small port communes and hereditary agricultural districts. Mainland and island harbours now complement the inland market on the chart. Pilots’ guilds set practical terms for coastal travel; inland houses control cultivated land and the roads supplying the harbours. Ceralte brokers buy provisions here without governing the coast. Rival communes share storm warnings but guard their harbour soundings. The region’s political disputes concern port fees, seasonal labour and who funds guarded access to inland markets, rather than a single national succession. Vessaline provides a charted coastal gateway, with defended access to Saultac. A dependency of the coastal port commune, governed by its harbour charter and resident island councillors. Charted island harbours: Vallarive.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 18.72 | 24.0 | 0.78× |
| Skilled and salaried households | 25% | 27.52 | 24.0 | 1.147× |
| Professional and asset-owning households | 5% | 70.08 | 24.0 | 2.92× |

Accessible ordinary care: 51%; reliable clean water: 52%. Both are scenario estimates, not a survey.
Typical adult lifespan: 58–78 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 1.62 and public works 4.86 L-eq per resident; communication capability 3/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.45–1.05% | 1.86–3.86 percentage points |
| Machine tools & precision | 0.45–1.05% | 1.69–3.52 percentage points |
| Energy & electrification | 0.45–1.05% | 1.69–3.52 percentage points |
| Chemicals & industrial processes | 0.45–1.05% | 1.69–3.52 percentage points |
| Aviation & aeronautics | 0.45–1.05% | 1.86–3.86 percentage points |
| Maritime engineering | 0.45–1.05% | 1.69–3.52 percentage points |
| Communications & electrical instruments | 0.45–1.05% | 1.69–3.52 percentage points |
| Medicine & public health | 0.45–1.05% | 1.69–3.52 percentage points |
| Agriculture & food preservation | 0.45–1.05% | 1.69–3.52 percentage points |
| Water, sanitation & civil works | 0.45–1.05% | 1.69–3.52 percentage points |
| Rail, roads & motor transport | 0.45–1.05% | 1.75–3.63 percentage points |
| Construction & structural engineering | 0.45–1.05% | 1.78–3.69 percentage points |
| Textiles & household manufacture | 0.45–1.05% | 1.69–3.52 percentage points |
| Conventional military manufacture | 0.45–1.05% | 1.75–3.63 percentage points |
| Technical learning & knowledge retention | 0.45–1.05% | 1.69–3.52 percentage points |

Specialties: Pilotage, coastal provisions, fishing and inland agricultural markets. Constraints: Small communes lack a shared naval command. Poorly charted harbours, seasonal labour and interrupted inland roads limit the usable export surplus.
## Karsenne Compact
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 1.062 seeded from relative output per resident. Mixed basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Drossane hosts common business for autonomous mining councils and fortress districts. The Compact is a federation rather than a unified hereditary realm. Ores, engineering skills and defended approaches sustain its bargaining power, but coastal freight charges consume export income. Valley workshops and cultivated pockets support the upland economy. Veyrasse remains an uneasy defensive partner and vital outlet. A direct railway toward Calvernis is sought, not operating; existing roads do not provide an equivalent bulk-freight service.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 22.38 | 24.0 | 0.933× |
| Skilled and salaried households | 25% | 33.06 | 24.0 | 1.377× |
| Professional and asset-owning households | 5% | 81.36 | 24.0 | 3.39× |

Accessible ordinary care: 55%; reliable clean water: 62%. Both are scenario estimates, not a survey.
Typical adult lifespan: 59–79 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 2.45 and public works 7.34 L-eq per resident; communication capability 3/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.52–1.22% | 1.64–3.41 percentage points |
| Machine tools & precision | 0.52–1.22% | 1.84–3.82 percentage points |
| Energy & electrification | 0.52–1.22% | 1.84–3.82 percentage points |
| Chemicals & industrial processes | 0.52–1.22% | 2.03–4.23 percentage points |
| Aviation & aeronautics | 0.52–1.22% | 2.23–4.63 percentage points |
| Maritime engineering | 0.52–1.22% | 2.43–5.04 percentage points |
| Communications & electrical instruments | 0.52–1.22% | 2.03–4.23 percentage points |
| Medicine & public health | 0.52–1.22% | 2.03–4.23 percentage points |
| Agriculture & food preservation | 0.52–1.22% | 1.94–4.02 percentage points |
| Water, sanitation & civil works | 0.52–1.22% | 1.9–3.95 percentage points |
| Rail, roads & motor transport | 0.52–1.22% | 1.77–3.68 percentage points |
| Construction & structural engineering | 0.52–1.22% | 1.74–3.61 percentage points |
| Textiles & household manufacture | 0.52–1.22% | 1.9–3.95 percentage points |
| Conventional military manufacture | 0.52–1.22% | 1.84–3.82 percentage points |
| Technical learning & knowledge retention | 0.52–1.22% | 1.94–4.02 percentage points |

Specialties: Mining, military engineering and defended-pass supply. Constraints: Strong pass defence and mining; food and coastal export access depend on neighbours. Councils control separate contingents.
## Duchy of Caldrienne
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.991 seeded from relative output per resident. Mixed basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Valdrec houses the ducal administration and principal army depots. Productive valleys support estate agriculture and armament towns; the state fields strong infantry, artillery and a comparatively large armoured force. Ducal supervision is more centralised than in Veyrasse, though estate and arsenal interests still compete for resources. The unresolved Cressault claim strains an armed truce. Northern obligations and imports of Karsenne ore prevent its government from directing every resource against the March. Cressavelle provides a charted coastal gateway, with defended access to Valdrec.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 20.9 | 24.0 | 0.871× |
| Skilled and salaried households | 25% | 30.82 | 24.0 | 1.284× |
| Professional and asset-owning households | 5% | 76.81 | 24.0 | 3.2× |

Accessible ordinary care: 57%; reliable clean water: 63%. Both are scenario estimates, not a survey.
Typical adult lifespan: 59–78 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 2.81 and public works 8.43 L-eq per resident; communication capability 3/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.56–1.3% | 1.97–4.09 percentage points |
| Machine tools & precision | 0.56–1.3% | 2.18–4.53 percentage points |
| Energy & electrification | 0.56–1.3% | 1.97–4.09 percentage points |
| Chemicals & industrial processes | 0.56–1.3% | 1.97–4.09 percentage points |
| Aviation & aeronautics | 0.56–1.3% | 2.18–4.53 percentage points |
| Maritime engineering | 0.56–1.3% | 2.18–4.53 percentage points |
| Communications & electrical instruments | 0.56–1.3% | 2.18–4.53 percentage points |
| Medicine & public health | 0.56–1.3% | 2.18–4.53 percentage points |
| Agriculture & food preservation | 0.56–1.3% | 1.97–4.09 percentage points |
| Water, sanitation & civil works | 0.56–1.3% | 2.04–4.24 percentage points |
| Rail, roads & motor transport | 0.56–1.3% | 2.04–4.24 percentage points |
| Construction & structural engineering | 0.56–1.3% | 2.08–4.31 percentage points |
| Textiles & household manufacture | 0.56–1.3% | 2.04–4.24 percentage points |
| Conventional military manufacture | 0.56–1.3% | 2.04–4.24 percentage points |
| Technical learning & knowledge retention | 0.56–1.3% | 2.18–4.53 percentage points |

Specialties: Agriculture, artillery production and armoured-vehicle workshops. Constraints: Largest eastern tank arm, but fuel imports and the armed truce impose costs; offensive forces cannot strip all garrisons.
## March of Veyrasse
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 1.000 seeded from relative output per resident. Mixed basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: The charter balances the Margrave, landed houses, municipal councils and industrial proprietors. Auvrienne holds the court and government; Serravonne is a secondary port and rail junction. Coastal agriculture and workshops depend on inland ores and imported machinery. Railway unions can disrupt mobilisation, and poorer households bear disproportionate service obligations. Caldrienne remains the principal territorial rival; Karsenne is an essential supplier, while Calvernis and Ceralte provide competing maritime connections. The Margrave commands the standing army and foreign relations, while chartered institutions provide much of the money, manpower and transport. Education and engineering offer advancement through patronage. Railway superintendent Leont Vardesca governs railway affairs and dependants, not Serravonne’s government or army.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 21.08 | 24.0 | 0.878× |
| Skilled and salaried households | 25% | 31.09 | 24.0 | 1.295× |
| Professional and asset-owning households | 5% | 77.36 | 24.0 | 3.223× |

Accessible ordinary care: 55%; reliable clean water: 61%. Both are scenario estimates, not a survey.
Typical adult lifespan: 59–78 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 2.31 and public works 6.93 L-eq per resident; communication capability 3/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.51–1.2% | 1.79–3.71 percentage points |
| Machine tools & precision | 0.51–1.2% | 1.98–4.11 percentage points |
| Energy & electrification | 0.51–1.2% | 1.79–3.71 percentage points |
| Chemicals & industrial processes | 0.51–1.2% | 1.98–4.11 percentage points |
| Aviation & aeronautics | 0.51–1.2% | 1.98–4.11 percentage points |
| Maritime engineering | 0.51–1.2% | 1.98–4.11 percentage points |
| Communications & electrical instruments | 0.51–1.2% | 1.98–4.11 percentage points |
| Medicine & public health | 0.51–1.2% | 1.98–4.11 percentage points |
| Agriculture & food preservation | 0.51–1.2% | 1.88–3.91 percentage points |
| Water, sanitation & civil works | 0.51–1.2% | 1.91–3.97 percentage points |
| Rail, roads & motor transport | 0.51–1.2% | 1.85–3.84 percentage points |
| Construction & structural engineering | 0.51–1.2% | 1.88–3.91 percentage points |
| Textiles & household manufacture | 0.51–1.2% | 1.91–3.97 percentage points |
| Conventional military manufacture | 0.51–1.2% | 1.91–3.97 percentage points |
| Technical learning & knowledge retention | 0.51–1.2% | 1.98–4.11 percentage points |

Specialties: Railway engineering, port trade and municipal industry. Constraints: Chartered houses, municipal funding and freight bottlenecks constrain command; machinery and fuel imports matter.
## Calvernis Republic
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 1.180 seeded from relative output per resident. Industrial basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Miravelle is the seat of a republic whose restricted franchise favours shipping, banking and industrial families. Harbour revenues, ship maintenance and manufacturing support convoy escorts, coastal guns, marines and maritime aircraft. Smaller towns supply its commercial ports without erasing rival patronage networks. Veyrasse is a customer and competitor; an alternative outlet for Karsenne could redirect freight and toll income. No agreement has completed that proposed railway. Cavrelune provides a charted coastal gateway, with defended access to Miravelle.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 24.85 | 25.0 | 0.994× |
| Skilled and salaried households | 25% | 36.79 | 25.0 | 1.472× |
| Professional and asset-owning households | 5% | 88.95 | 25.0 | 3.558× |

Accessible ordinary care: 63%; reliable clean water: 65%. Both are scenario estimates, not a survey.
Typical adult lifespan: 60–79 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 3.19 and public works 9.56 L-eq per resident; communication capability 4/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.67–1.56% | 2.27–4.71 percentage points |
| Machine tools & precision | 0.67–1.56% | 2.27–4.71 percentage points |
| Energy & electrification | 0.67–1.56% | 2.27–4.71 percentage points |
| Chemicals & industrial processes | 0.67–1.56% | 2.27–4.71 percentage points |
| Aviation & aeronautics | 0.67–1.56% | 2.27–4.71 percentage points |
| Maritime engineering | 0.67–1.56% | 2.02–4.2 percentage points |
| Communications & electrical instruments | 0.67–1.56% | 2.27–4.71 percentage points |
| Medicine & public health | 0.67–1.56% | 2.27–4.71 percentage points |
| Agriculture & food preservation | 0.67–1.56% | 2.27–4.71 percentage points |
| Water, sanitation & civil works | 0.67–1.56% | 2.27–4.71 percentage points |
| Rail, roads & motor transport | 0.67–1.56% | 2.27–4.71 percentage points |
| Construction & structural engineering | 0.67–1.56% | 2.27–4.71 percentage points |
| Textiles & household manufacture | 0.67–1.56% | 2.27–4.71 percentage points |
| Conventional military manufacture | 0.67–1.56% | 2.27–4.71 percentage points |
| Technical learning & knowledge retention | 0.67–1.56% | 2.27–4.71 percentage points |

Specialties: Shipping, banking, shipyards and maritime manufactures. Constraints: Strong finance and convoy support; imported food and fuel expose it to interdiction and merchant-family disputes.
## Ceralte Admiralty
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 1.071 seeded from relative output per resident. Mixed basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Dalmor is the fortified harbour and seat of a hereditary protector, senior naval council and island governors. Fishing, pilotage, convoy services and repair yards sustain the chain, while imported grain remains essential. Torpedo craft, mine warfare and knowledge of difficult waters offset limited land resources. Island communities depend on shipping rather than a mainland-style road network. Treaty cooperation coexists with accusations of privateering; no allegation proves official sponsorship.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 22.57 | 24.0 | 0.94× |
| Skilled and salaried households | 25% | 33.35 | 24.0 | 1.39× |
| Professional and asset-owning households | 5% | 81.94 | 24.0 | 3.414× |

Accessible ordinary care: 57%; reliable clean water: 59%. Both are scenario estimates, not a survey.
Typical adult lifespan: 59–79 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 3.00 and public works 9.02 L-eq per resident; communication capability 4/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.65–1.52% | 2.43–5.06 percentage points |
| Machine tools & precision | 0.65–1.52% | 2.2–4.57 percentage points |
| Energy & electrification | 0.65–1.52% | 2.43–5.06 percentage points |
| Chemicals & industrial processes | 0.65–1.52% | 2.43–5.06 percentage points |
| Aviation & aeronautics | 0.65–1.52% | 2.43–5.06 percentage points |
| Maritime engineering | 0.65–1.52% | 2.2–4.57 percentage points |
| Communications & electrical instruments | 0.65–1.52% | 2.2–4.57 percentage points |
| Medicine & public health | 0.65–1.52% | 2.43–5.06 percentage points |
| Agriculture & food preservation | 0.65–1.52% | 2.43–5.06 percentage points |
| Water, sanitation & civil works | 0.65–1.52% | 2.36–4.89 percentage points |
| Rail, roads & motor transport | 0.65–1.52% | 2.36–4.89 percentage points |
| Construction & structural engineering | 0.65–1.52% | 2.32–4.81 percentage points |
| Textiles & household manufacture | 0.65–1.52% | 2.36–4.89 percentage points |
| Conventional military manufacture | 0.65–1.52% | 2.36–4.89 percentage points |
| Technical learning & knowledge retention | 0.65–1.52% | 2.2–4.57 percentage points |

Specialties: Coastal trade, fishing, naval maintenance and convoy services. Constraints: Experienced coastal crews and minelayers; small population, grain imports and fuel dependence rule out a large land war.
## Varessan Sea League
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.869 seeded from relative output per resident. Rural basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: The Varessan Sea League unites five island assemblies under a charter covering convoys, foreign treaties and shared courts. Ardessa hosts the delegates, but each island retains land law and elects its harbour officers. Centuries of terrace cultivation and ocean navigation preceded mainland concessions. Shipwright families build wooden coasters and repair imported motor vessels. Treaty warehouses purchase wool, dried fish and fruit. The League permits leased depots but bars foreign ownership of freshwater catchments. Carrier houses seek closer mainland ties; cultivator assemblies resist customs exemptions that leave them paying the common defence levy.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 20.35 | 21.0 | 0.969× |
| Skilled and salaried households | 25% | 27.96 | 21.0 | 1.331× |
| Professional and asset-owning households | 5% | 68.94 | 21.0 | 3.283× |

Accessible ordinary care: 47%; reliable clean water: 43%. Both are scenario estimates, not a survey.
Typical adult lifespan: 58–78 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 1.42 and public works 3.42 L-eq per resident; communication capability 3/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.43–1.01% | 1.64–3.41 percentage points |
| Machine tools & precision | 0.43–1.01% | 1.64–3.41 percentage points |
| Energy & electrification | 0.43–1.01% | 1.64–3.41 percentage points |
| Chemicals & industrial processes | 0.43–1.01% | 1.64–3.41 percentage points |
| Aviation & aeronautics | 0.43–1.01% | 1.79–3.71 percentage points |
| Maritime engineering | 0.43–1.01% | 1.5–3.11 percentage points |
| Communications & electrical instruments | 0.43–1.01% | 1.5–3.11 percentage points |
| Medicine & public health | 0.43–1.01% | 1.64–3.41 percentage points |
| Agriculture & food preservation | 0.43–1.01% | 1.64–3.41 percentage points |
| Water, sanitation & civil works | 0.43–1.01% | 1.64–3.41 percentage points |
| Rail, roads & motor transport | 0.43–1.01% | 1.64–3.41 percentage points |
| Construction & structural engineering | 0.43–1.01% | 1.64–3.41 percentage points |
| Textiles & household manufacture | 0.43–1.01% | 1.64–3.41 percentage points |
| Conventional military manufacture | 0.43–1.01% | 1.64–3.41 percentage points |
| Technical learning & knowledge retention | 0.43–1.01% | 1.57–3.26 percentage points |

Specialties: Pilotage, coaster construction, wool and preserved fruit. Constraints: Imported engines, medicine and bunker fuel; island votes limit emergency taxation.
## Talascan Charter Islands
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.924 seeded from relative output per resident. Rural basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Rovessara governs the Talascan chain through a colonial commissioner, customs posts and commercial leases. Island communities remain the majority and retain village land councils, but the colonial court decides disputes involving export estates and harbour property. Settler merchants and mainland firms control much of the credit and shipping. Councils contest compulsory road levies and the conversion of common pasture into export holdings. The commissioner depends on local pilots and negotiated water rights. These islands have long-established inhabitants and histories, not vacant land discovered by their present rulers.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 21.5 | 21.0 | 1.024× |
| Skilled and salaried households | 25% | 29.7 | 21.0 | 1.414× |
| Professional and asset-owning households | 5% | 72.49 | 21.0 | 3.452× |

Accessible ordinary care: 48%; reliable clean water: 50%. Both are scenario estimates, not a survey.
Typical adult lifespan: 59–78 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 2.09 and public works 6.28 L-eq per resident; communication capability 3/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.49–1.15% | 2.07–4.3 percentage points |
| Machine tools & precision | 0.49–1.15% | 2.07–4.3 percentage points |
| Energy & electrification | 0.49–1.15% | 2.07–4.3 percentage points |
| Chemicals & industrial processes | 0.49–1.15% | 2.07–4.3 percentage points |
| Aviation & aeronautics | 0.49–1.15% | 2.25–4.68 percentage points |
| Maritime engineering | 0.49–1.15% | 2.07–4.3 percentage points |
| Communications & electrical instruments | 0.49–1.15% | 1.89–3.92 percentage points |
| Medicine & public health | 0.49–1.15% | 2.07–4.3 percentage points |
| Agriculture & food preservation | 0.49–1.15% | 2.07–4.3 percentage points |
| Water, sanitation & civil works | 0.49–1.15% | 2.07–4.3 percentage points |
| Rail, roads & motor transport | 0.49–1.15% | 2.07–4.3 percentage points |
| Construction & structural engineering | 0.49–1.15% | 2.07–4.3 percentage points |
| Textiles & household manufacture | 0.49–1.15% | 2.07–4.3 percentage points |
| Conventional military manufacture | 0.49–1.15% | 2.07–4.3 percentage points |
| Technical learning & knowledge retention | 0.49–1.15% | 1.98–4.11 percentage points |

Specialties: Fish curing, fruit and fibre exports, west-coast resupply. Constraints: External firms dominate commercial credit and shipping; contested leases and imported machinery.
## Nemerai Crown
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.840 seeded from relative output per resident. Rural basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: The Nemerai Crown is an old island monarchy whose ruler is confirmed by hereditary houses, town delegates and custodians of communal farmland. Nemer maintains written land records and a permanent customs service. Outer islands owe ships and levies under separate compacts; the crown cannot simply requisition their harvests. Fisheries, terrace grain and shipping support local machine shops, while heavy plant and refined marine fuel are imported. Foreign powers have treaty warehouses but no general jurisdiction. Court reformers favour technical colleges and a common budget; outer houses fear the loss of their island privileges.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 19.74 | 21.0 | 0.94× |
| Skilled and salaried households | 25% | 27.05 | 21.0 | 1.288× |
| Professional and asset-owning households | 5% | 67.07 | 21.0 | 3.194× |

Accessible ordinary care: 44%; reliable clean water: 46%. Both are scenario estimates, not a survey.
Typical adult lifespan: 58–78 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 1.15 and public works 2.76 L-eq per resident; communication capability 3/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.41–0.95% | 1.54–3.2 percentage points |
| Machine tools & precision | 0.41–0.95% | 1.54–3.2 percentage points |
| Energy & electrification | 0.41–0.95% | 1.41–2.92 percentage points |
| Chemicals & industrial processes | 0.41–0.95% | 1.54–3.2 percentage points |
| Aviation & aeronautics | 0.41–0.95% | 1.68–3.48 percentage points |
| Maritime engineering | 0.41–0.95% | 1.41–2.92 percentage points |
| Communications & electrical instruments | 0.41–0.95% | 1.41–2.92 percentage points |
| Medicine & public health | 0.41–0.95% | 1.54–3.2 percentage points |
| Agriculture & food preservation | 0.41–0.95% | 1.47–3.06 percentage points |
| Water, sanitation & civil works | 0.41–0.95% | 1.5–3.11 percentage points |
| Rail, roads & motor transport | 0.41–0.95% | 1.5–3.11 percentage points |
| Construction & structural engineering | 0.41–0.95% | 1.54–3.2 percentage points |
| Textiles & household manufacture | 0.41–0.95% | 1.5–3.11 percentage points |
| Conventional military manufacture | 0.41–0.95% | 1.54–3.2 percentage points |
| Technical learning & knowledge retention | 0.41–0.95% | 1.47–3.06 percentage points |

Specialties: Ocean navigation, grain terraces, textiles and marine repairs. Constraints: No integrated heavy steel industry; outer-island levies require compact consent.
## Ordelune Overseas Districts
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.812 seeded from relative output per resident. Rural basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Ostrevain’s southern overseas districts join two island clusters under a governor at Ordelune, linked by supply sailings rather than continuous land administration. Crown estates, settler farms and older island communities coexist under unequal tax and land arrangements. Wool, grain and preserved food finance the administration; district councils seek a greater share of customs revenue. Outlying harbours depend on local pilots and winter stores. Ostrevain claims the chain but has no effective authority over Austral Land, and the governor cannot promise passage through polar waters.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 19.15 | 21.0 | 0.912× |
| Skilled and salaried households | 25% | 26.13 | 21.0 | 1.245× |
| Professional and asset-owning households | 5% | 65.23 | 21.0 | 3.106× |

Accessible ordinary care: 47%; reliable clean water: 43%. Both are scenario estimates, not a survey.
Typical adult lifespan: 58–77 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 1.41 and public works 3.37 L-eq per resident; communication capability 2/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.36–0.83% | 1.45–3.0 percentage points |
| Machine tools & precision | 0.36–0.83% | 1.57–3.27 percentage points |
| Energy & electrification | 0.36–0.83% | 1.45–3.0 percentage points |
| Chemicals & industrial processes | 0.36–0.83% | 1.45–3.0 percentage points |
| Aviation & aeronautics | 0.36–0.83% | 1.57–3.27 percentage points |
| Maritime engineering | 0.36–0.83% | 1.45–3.0 percentage points |
| Communications & electrical instruments | 0.36–0.83% | 1.45–3.0 percentage points |
| Medicine & public health | 0.36–0.83% | 1.45–3.0 percentage points |
| Agriculture & food preservation | 0.36–0.83% | 1.45–3.0 percentage points |
| Water, sanitation & civil works | 0.36–0.83% | 1.49–3.09 percentage points |
| Rail, roads & motor transport | 0.36–0.83% | 1.49–3.09 percentage points |
| Construction & structural engineering | 0.36–0.83% | 1.51–3.14 percentage points |
| Textiles & household manufacture | 0.36–0.83% | 1.49–3.09 percentage points |
| Conventional military manufacture | 0.36–0.83% | 1.49–3.09 percentage points |
| Technical learning & knowledge retention | 0.36–0.83% | 1.51–3.14 percentage points |

Specialties: Wool, grain, preserved fish and southern provisioning. Constraints: Storm-season isolation, limited machine shops and disputed crown leases.
## Skeldran Hearth Confederacy
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.682 seeded from relative output per resident. Rural basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: The Skeldran Hearth Confederacy is a sovereign compact of island kin groups, fishing towns and grazing communities. Delegates meet at Skeldra; land and shelter rights remain with hearth assemblies. Customary law is transmitted through named custodians and written harbour judgments, with interpreters for several languages. Imported rifles, radios and motor boats coexist with wooden shipbuilding and household workshops. The confederacy grants seasonal anchorage permits but rejects permanent foreign garrisons. Sparse farmland and severe winters favour dispersed stores, reciprocal rescue duties and small defensive forces.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 16.44 | 21.0 | 0.783× |
| Skilled and salaried households | 25% | 22.03 | 21.0 | 1.049× |
| Professional and asset-owning households | 5% | 56.87 | 21.0 | 2.708× |

Accessible ordinary care: 42%; reliable clean water: 29%. Both are scenario estimates, not a survey.
Typical adult lifespan: 57–76 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 0.55 and public works 1.26 L-eq per resident; communication capability 2/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.28–0.65% | 1.23–2.55 percentage points |
| Machine tools & precision | 0.28–0.65% | 1.23–2.55 percentage points |
| Energy & electrification | 0.28–0.65% | 1.23–2.55 percentage points |
| Chemicals & industrial processes | 0.28–0.65% | 1.23–2.55 percentage points |
| Aviation & aeronautics | 0.28–0.65% | 1.23–2.55 percentage points |
| Maritime engineering | 0.28–0.65% | 1.13–2.34 percentage points |
| Communications & electrical instruments | 0.28–0.65% | 1.13–2.34 percentage points |
| Medicine & public health | 0.28–0.65% | 1.13–2.34 percentage points |
| Agriculture & food preservation | 0.28–0.65% | 1.23–2.55 percentage points |
| Water, sanitation & civil works | 0.28–0.65% | 1.23–2.55 percentage points |
| Rail, roads & motor transport | 0.28–0.65% | 1.23–2.55 percentage points |
| Construction & structural engineering | 0.28–0.65% | 1.23–2.55 percentage points |
| Textiles & household manufacture | 0.28–0.65% | 1.23–2.55 percentage points |
| Conventional military manufacture | 0.28–0.65% | 1.23–2.55 percentage points |
| Technical learning & knowledge retention | 0.28–0.65% | 1.18–2.45 percentage points |

Specialties: Cold-water fisheries, wool, rescue pilotage and wooden boats. Constraints: Short growing season, scarce imported fuel and little heavy repair capacity.
## Merovian Island Republic
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.962 seeded from relative output per resident. Mixed basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: The Merovian Island Republic joins port municipalities and agricultural districts through an elected assembly. Its residence and tax franchise leaves seasonal crews and some outer communities underrepresented. Shipping insurance, repair docks, fruit and wool exports support a modest industrial base. Cooperative farms compete with carriers over freight rates. The republic controls a north-south chain at the meeting of eastern and austral routes; depot access is negotiated commercially rather than reserved to one mainland patron. Rival parties disagree over naval spending and foreign loans.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 20.3 | 24.0 | 0.846× |
| Skilled and salaried households | 25% | 29.9 | 24.0 | 1.246× |
| Professional and asset-owning households | 5% | 74.92 | 24.0 | 3.122× |

Accessible ordinary care: 56%; reliable clean water: 57%. Both are scenario estimates, not a survey.
Typical adult lifespan: 59–78 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 2.60 and public works 7.81 L-eq per resident; communication capability 3/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.54–1.26% | 2.1–4.36 percentage points |
| Machine tools & precision | 0.54–1.26% | 2.1–4.36 percentage points |
| Energy & electrification | 0.54–1.26% | 2.1–4.36 percentage points |
| Chemicals & industrial processes | 0.54–1.26% | 2.1–4.36 percentage points |
| Aviation & aeronautics | 0.54–1.26% | 2.3–4.78 percentage points |
| Maritime engineering | 0.54–1.26% | 2.1–4.36 percentage points |
| Communications & electrical instruments | 0.54–1.26% | 2.1–4.36 percentage points |
| Medicine & public health | 0.54–1.26% | 2.1–4.36 percentage points |
| Agriculture & food preservation | 0.54–1.26% | 2.1–4.36 percentage points |
| Water, sanitation & civil works | 0.54–1.26% | 2.1–4.36 percentage points |
| Rail, roads & motor transport | 0.54–1.26% | 2.1–4.36 percentage points |
| Construction & structural engineering | 0.54–1.26% | 2.1–4.36 percentage points |
| Textiles & household manufacture | 0.54–1.26% | 2.1–4.36 percentage points |
| Conventional military manufacture | 0.54–1.26% | 2.1–4.36 percentage points |
| Technical learning & knowledge retention | 0.54–1.26% | 2.1–4.36 percentage points |

Specialties: Marine repairs, insurance, food processing and pump manufacture. Constraints: Imported plate and refined fuel; merchant finance and outer-island representation remain contentious.
## Ashalai Reef Covenant
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.732 seeded from relative output per resident. Rural basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: The Ashalai Reef Covenant confederates hereditary kin councils, elected harbour assemblies and inland farming communities. Its gathering at Ashala settles foreign treaties, fishing boundaries and mutual defence without extinguishing local law or language. Islanders have long cultivated wet valleys and traded between reefs. Imported engines, rifles and radios are maintained in port workshops; heavy industry is limited. Foreign firms lease warehouses through negotiated covenants, with no right to seize communal land. Harbour merchants favour broader credit access, while inland councils resist debts secured against future harvests.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 17.48 | 21.0 | 0.832× |
| Skilled and salaried households | 25% | 23.61 | 21.0 | 1.124× |
| Professional and asset-owning households | 5% | 60.07 | 21.0 | 2.861× |

Accessible ordinary care: 40%; reliable clean water: 37%. Both are scenario estimates, not a survey.
Typical adult lifespan: 57–77 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 0.77 and public works 1.84 L-eq per resident; communication capability 2/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.3–0.7% | 1.22–2.53 percentage points |
| Machine tools & precision | 0.3–0.7% | 1.32–2.75 percentage points |
| Energy & electrification | 0.3–0.7% | 1.22–2.53 percentage points |
| Chemicals & industrial processes | 0.3–0.7% | 1.32–2.75 percentage points |
| Aviation & aeronautics | 0.3–0.7% | 1.32–2.75 percentage points |
| Maritime engineering | 0.3–0.7% | 1.22–2.53 percentage points |
| Communications & electrical instruments | 0.3–0.7% | 1.22–2.53 percentage points |
| Medicine & public health | 0.3–0.7% | 1.22–2.53 percentage points |
| Agriculture & food preservation | 0.3–0.7% | 1.27–2.64 percentage points |
| Water, sanitation & civil works | 0.3–0.7% | 1.29–2.68 percentage points |
| Rail, roads & motor transport | 0.3–0.7% | 1.25–2.6 percentage points |
| Construction & structural engineering | 0.3–0.7% | 1.27–2.64 percentage points |
| Textiles & household manufacture | 0.3–0.7% | 1.29–2.68 percentage points |
| Conventional military manufacture | 0.3–0.7% | 1.29–2.68 percentage points |
| Technical learning & knowledge retention | 0.3–0.7% | 1.27–2.64 percentage points |

Specialties: Irrigated crops, fibres, plant oils, reef navigation and small-craft repair. Constraints: Limited heavy industry and medical imports; dispersed councils cannot mobilise as a centralised mass army.
## Kingdom of Istrana
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.897 seeded from relative output per resident. Rural basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Istrana is an island kingdom with a hereditary crown, permanent civil service and revenue assembly representing towns and landholding districts. The court claims descent from an older maritime union, but authority rests on negotiated taxes and a small professional fleet. Sugar, fruit, textiles and repaired vessels pass through its ports. State schools train clerks and mechanics; heavy machinery and much marine fuel are imported. The crown cultivates several mainland partners to avoid a protectorate. Outer representatives demand limits on royal borrowing and exclusive contracts awarded to court merchants.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 20.93 | 21.0 | 0.997× |
| Skilled and salaried households | 25% | 28.83 | 21.0 | 1.373× |
| Professional and asset-owning households | 5% | 70.7 | 21.0 | 3.367× |

Accessible ordinary care: 51%; reliable clean water: 51%. Both are scenario estimates, not a survey.
Typical adult lifespan: 59–78 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 4.19 and public works 4.37 L-eq per resident; communication capability 3/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.68–1.59% | 1.78–3.7 percentage points |
| Machine tools & precision | 0.68–1.59% | 1.78–3.7 percentage points |
| Energy & electrification | 0.68–1.59% | 1.63–3.38 percentage points |
| Chemicals & industrial processes | 0.68–1.59% | 1.78–3.7 percentage points |
| Aviation & aeronautics | 0.68–1.59% | 1.94–4.03 percentage points |
| Maritime engineering | 0.68–1.59% | 1.63–3.38 percentage points |
| Communications & electrical instruments | 0.68–1.59% | 1.63–3.38 percentage points |
| Medicine & public health | 0.68–1.59% | 1.78–3.7 percentage points |
| Agriculture & food preservation | 0.68–1.59% | 1.7–3.54 percentage points |
| Water, sanitation & civil works | 0.68–1.59% | 1.73–3.59 percentage points |
| Rail, roads & motor transport | 0.68–1.59% | 1.73–3.59 percentage points |
| Construction & structural engineering | 0.68–1.59% | 1.78–3.7 percentage points |
| Textiles & household manufacture | 0.68–1.59% | 1.73–3.59 percentage points |
| Conventional military manufacture | 0.68–1.59% | 1.78–3.7 percentage points |
| Technical learning & knowledge retention | 0.68–1.59% | 1.7–3.54 percentage points |

Specialties: Textiles, processed crops, coastal shipbuilding and customs administration. Constraints: Imported machinery and fuel; royal borrowing requires assembly consent.
## Edrask Governorate
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.856 seeded from relative output per resident. Rural basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: Rovengard’s Edrask Governorate holds the inhabited eastern chain through a governor, harbour garrisons and treaties with older island councils. Fishing communities, timber districts and settler towns have different land rights; some councils accept crown arbitration while resisting new concessions. Timber and preserved fish fund northern weather stations. Defence rests partly on visiting Rovengard ships, which are not permanent additions to the island fleet. Southern ports trade with Istrana; northern calls close seasonally. The governor’s map claim does not imply continuous occupation of mountain interiors.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 20.08 | 21.0 | 0.956× |
| Skilled and salaried households | 25% | 27.54 | 21.0 | 1.311× |
| Professional and asset-owning households | 5% | 68.08 | 21.0 | 3.242× |

Accessible ordinary care: 47%; reliable clean water: 48%. Both are scenario estimates, not a survey.
Typical adult lifespan: 58–78 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 1.82 and public works 5.45 L-eq per resident; communication capability 3/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.47–1.09% | 1.95–4.05 percentage points |
| Machine tools & precision | 0.47–1.09% | 1.95–4.05 percentage points |
| Energy & electrification | 0.47–1.09% | 1.95–4.05 percentage points |
| Chemicals & industrial processes | 0.47–1.09% | 1.95–4.05 percentage points |
| Aviation & aeronautics | 0.47–1.09% | 2.12–4.4 percentage points |
| Maritime engineering | 0.47–1.09% | 1.95–4.05 percentage points |
| Communications & electrical instruments | 0.47–1.09% | 1.78–3.69 percentage points |
| Medicine & public health | 0.47–1.09% | 1.95–4.05 percentage points |
| Agriculture & food preservation | 0.47–1.09% | 1.95–4.05 percentage points |
| Water, sanitation & civil works | 0.47–1.09% | 1.95–4.05 percentage points |
| Rail, roads & motor transport | 0.47–1.09% | 1.95–4.05 percentage points |
| Construction & structural engineering | 0.47–1.09% | 1.95–4.05 percentage points |
| Textiles & household manufacture | 0.47–1.09% | 1.95–4.05 percentage points |
| Conventional military manufacture | 0.47–1.09% | 1.95–4.05 percentage points |
| Technical learning & knowledge retention | 0.47–1.09% | 1.86–3.87 percentage points |

Specialties: Timber, preserved fish, weather stations and regional resupply. Constraints: Seasonal northern access, disputed concessions and dependence on imported grain and machinery.
## Norrakai Moots
Reviewed 01/01/0069 AC43. Initial household-budget estimates: reference wages and the 24 L-eq needs basket, wage factor 0.650 seeded from relative output per resident. Rural basket. Employment and 70/25/5 household weights are common provisional assumptions; they are not census results. Source context: The Norrakai Moots unite northern island communities through seasonal assemblies and mutual refuge law. They remain outside Vardol’s crown despite trading with its ports. Fishing, herding and limited sheltered cultivation sustain a sparse population, supplemented by imported grain. Councils negotiate pilotage and weather-station leases without ceding sovereignty. Radios and motor launches connect communities still reliant on locally built boats. Families use seasonal camps and permanent villages; an empty winter landing does not establish uninhabited territory.
| Household group | Model weight | Income / month | Needs / month | Coverage |
|---|---:|---:|---:|---:|
| Labouring and smallholder households | 70% | 15.77 | 21.0 | 0.751× |
| Skilled and salaried households | 25% | 21.03 | 21.0 | 1.002× |
| Professional and asset-owning households | 5% | 54.83 | 21.0 | 2.611× |

Accessible ordinary care: 35%; reliable clean water: 28%. Both are scenario estimates, not a survey.
Typical adult lifespan: 56–76 local years of age. Central half of adult death ages; not hard limits. [Vital-rate reconciliation](DEMOGRAPHIC-REVIEW.md).
Technology: Education spending 0.45 and public works 1.04 L-eq per resident; communication capability 2/5; retained effort factor 0.85. Ordinary diffusion and incremental improvement ranges, conditional on resources and continuity.
[Named capabilities, prerequisites and production status](TECHNOLOGY-FRAMEWORK.md).
| Field | Ordinary improvement / year | Annual spread |
|---|---:|---:|
| Metals & structural materials | 0.27–0.63% | 1.19–2.47 percentage points |
| Machine tools & precision | 0.27–0.63% | 1.19–2.47 percentage points |
| Energy & electrification | 0.27–0.63% | 1.19–2.47 percentage points |
| Chemicals & industrial processes | 0.27–0.63% | 1.19–2.47 percentage points |
| Aviation & aeronautics | 0.27–0.63% | 1.19–2.47 percentage points |
| Maritime engineering | 0.27–0.63% | 1.09–2.27 percentage points |
| Communications & electrical instruments | 0.27–0.63% | 1.09–2.27 percentage points |
| Medicine & public health | 0.27–0.63% | 1.19–2.47 percentage points |
| Agriculture & food preservation | 0.27–0.63% | 1.19–2.47 percentage points |
| Water, sanitation & civil works | 0.27–0.63% | 1.19–2.47 percentage points |
| Rail, roads & motor transport | 0.27–0.63% | 1.19–2.47 percentage points |
| Construction & structural engineering | 0.27–0.63% | 1.19–2.47 percentage points |
| Textiles & household manufacture | 0.27–0.63% | 1.19–2.47 percentage points |
| Conventional military manufacture | 0.27–0.63% | 1.19–2.47 percentage points |
| Technical learning & knowledge retention | 0.27–0.63% | 1.14–2.37 percentage points |

Specialties: Northern pilotage, fisheries, hides and refuge services. Constraints: Short shipping season, imported grain and almost no industrial depth.
