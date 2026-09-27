# Settlement comparison and journey estimates

Atlas checkpoint: **11/10/0068 AC43**. This is a read-only planning model. It does not advance the story, book travel, open borders or establish new infrastructure. Population and geography come from the same current atlas used by the settlement register; later atlas revisions flow into the comparison on rebuilding the app.

Select a settlement on the map or in the settlement register, then expand **Compare settlements & plan travel** beneath its record. Search for a second settlement across all powers. Compare residents, annual population trends, terrain, elevation and direct transport connections. Individual settlement treasuries, military inventories and output have not been established and are not inferred from national totals.

## Routes

The planner uses all 970 settlements and all 2,209 existing mapped segments: 1,293 road, 782 rail and 134 sea connections. The one proposed railway is excluded. Connections are treated as bidirectional; a mapped connection is not evidence of a scheduled passenger service. Freight railway links may require passenger arrangements, changes, gauge transfers or border permission.

Choose combined road/rail/sea travel, land travel, railway, sea passage, motor road transport, horses/coaches, laden wagons or walking. Road estimates in combined itineraries assume a hired car or motor coach. Sea-only journeys need connected harbours; combined journeys can reach those harbours by land. The comparison table displays the shortest mapped itinerary in each surface category.

Alternatives follow actual connected chart segments and are ordered by **distance**, not promised earliest arrival. Three appear at a time; **Show more route alternatives** continues enumerating further loop-free paths without a fixed result cap. A large connected network can have many thousands of combinations, so the interface does not try to display them simultaneously. The optional intermediate settlement forces a particular harbour or other stop; each half is loop-free, although satisfying that stop may require retracing ground. Every expanded itinerary lists its legs, modes, distances and recorded conditions. **Highlight this route** marks the same legs on the wrapping world map.

These are charted corridor alternatives. Unmapped cross-country shortcuts and hypothetical direct sea services are not invented. A mapped route may still be disrupted by a current conflict, ice, weather, closed passes, border policy or Hunter activity. The atlas does not contain a live timetable or a dated open/closed flag for every segment. Absence of a continuous route means no connection in the selected charted network, not that all travel is physically impossible.

## Distances and time

All times use local hours and 24-hour local days. The native clock definitions remain in [the calendar reference](CALENDAR-REFERENCE.md).

Measured Eastern Marches corridors take precedence over the global projection. Serravonne–Auvrienne remains **350 km / 11–17 hours**, Serravonne–Cressault **575 km / 20–30 hours**, Serravonne–Valdrec **805 km / 30–45 hours**, Serravonne–Drossane **580 km / 28–45 hours**, Serravonne–Miravelle **475 km / 17–26 hours**, and Serravonne–Dalmor **270 km / 12–21 hours**, when following those recorded segments in either direction. The constituent Auvrienne–Cressault and Cressault–Valdrec distances are 225 km and 230 km. A different itinerary between those towns is estimated separately.

Other sea distances use the sea-passage survey. Remaining alignments are measured segment by segment on the atlas's 36,000 km circumference, accounting for latitude and wrapped longitude. Flight comparisons use shortest great-circle distances. The map is schematic; neither drawn bends nor displayed kilometre totals imply a new precision survey.

| Transport | Planning speed | Operating/rest convention |
| --- | --- | --- |
| Train | 18–34 km per local hour | Through running, ordinary line stops reflected in speed; 1–3 hours initial boarding per continuous rail portion |
| Ship or ferry | 18–25 km per local hour | Continuous running; 2–5 hours boarding per sea portion, plus 2–8 hours per intermediate harbour call |
| Hired car or motor coach | 25–40 km per local hour | Up to 10 driving hours per day |
| Horse or horse-drawn coach | 8–12 km per local hour | Up to 8 travelling hours per day |
| Laden cart or wagon | 4–6 km per local hour | Up to 8 travelling hours per day |
| Walking | 3–5 km per local hour | Up to 8 travelling hours per day |

Road journeys add the remainder of a 24-hour day as rest after each complete travel day, except after final arrival. These are ordinary traveller estimates, not Galahad's personal endurance or running speed. A transport change and a jurisdiction crossing each add 1–4 hours. Recorded complete Eastern Marches journey ranges already incorporate their ordinary delays and are not charged again. Consecutive rail links do not assume a train change at every settlement.

These conventions are explicitly **planning assumptions**, not additional canon timetables. The displayed elapsed range covers ordinary movement, road rest and the stated routine handling. Waiting for an actual departure, prolonged closures, exceptional delays and overnight accommodation availability cannot be calculated from the existing records. Rough tracks, steep terrain and adverse conditions can make even the upper estimate optimistic; read the conditions on the individual legs. Road speeds describe a broadly serviceable route, not a guarantee that every track accepts every vehicle.

## Galahad's personal running pace

The ordinary walking option does not model Galahad. His [controlling physiology reference](PHYSIOLOGY-REFERENCE.md) establishes approximately **100 km/h as a sustainable pace for three hours with little impairment**, and approximately **120–130 km/h as his unaided maximum** on suitable ground. Near-maximum running is demanding sustained exertion rather than a brief human sprint. Psychic enhancement is separate.

The approximately **301 km road between Auvrienne and Serravonne** would therefore take about **3 hours 1 minute at a 100 km/h average**, or approximately **2 hours 19–31 minutes at a 120–130 km/h average** if conditions permit. Corners, traffic, poor footing and loads can reduce actual average speed. These calculations neither change the established **350 km / 11–17 hour railway journey** nor enact Galahad's departure or arrival.

## Flight comparisons

The atlas currently records no airfields, scheduled air corridors, aircraft ranges or refuelling network. Consequently, it cannot truthfully list an available scheduled flight between arbitrary settlements.

The **Flight · conditional charter estimate** option compares airborne time at illustrative speeds of **180–260 km per local hour for a powered aircraft** and **60–90 km per local hour for an airship**. These are baseline planning bands for the setting, not a specification of an existing vehicle. A selected intermediate stop changes the distance. Suitable aircraft, landing sites, range, fuel stops, weather and permissions must be established before a total journey is possible. No airport, service or guaranteed transoceanic endurance is implied.

## Maintenance

The app embeds settlement and route data generated from `current_world` so comparisons share the dated atlas figures and work offline. Source modules are `render_settlement_compare.py`, `settlement-travel.js`, `settlement-comparison.js` and `settlement-comparison.css` in the private editable project. Public readers use the compiled app and this reference. Do not publish the private source bundle.

Related records: [transport](TRANSPORT-REFERENCE.md), [sea passages](SEA-PASSAGES.md), [settlement populations](SETTLEMENT-REGISTER.md), [completed expedition itinerary](expedition-route.html).
