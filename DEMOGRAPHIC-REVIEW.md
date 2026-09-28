# Population and lifespan reconciliation

Reviewed 05/11/0068 AC43. Current vital rates are planning scenarios, not observed birth/death registers.

The earlier birth and death assumptions were independent of the lifespan model. The dated replacement reconciles them using the same ordinary survival schedule and a stable-age approximation. Established net growth is retained as an explicit scenario constraint, not independently validated by this calculation. Different fertility or age structures can produce different growth under the same mortality. No new war losses or epidemic are invented.

Following the stable-population identity described in [UN Manual X, chapter VII](https://www.un.org/development/desa/pd/sites/www.un.org.development.desa.pd/files/files/documents/2020/Jan/un_1983_manual_x_-_indirect_techniques_for_demographic_estimation.pdf), the discrete model weights age x by survival(x)/(1+g)^x. Deaths are the weighted age-specific risks; births equal deaths plus the chosen natural increase. All current net migration assumptions are zero. The 43 scenario age distributions are saved in demographic-reviews.json. They are not reconstructed censuses; cullings, migration and transient fertility can invalidate the stable approximation.

Infant deaths are a subset of total deaths, never an additional deduction. The app shows a single typical adult lifespan band: the central half of modelled death ages among those reaching adulthood, expressed as total age. It is neither a guaranteed minimum nor a maximum. Ordinary hazards use the same health/household calibration; exceptional age-specific casualty patterns require their own dated records.

Correction effective 05/11/0068 AC43. Population accumulated before this date remains the historical checkpoint. Later projections apply each dated vital-rate return only to its own interval. All 43 polities require a new complete return at each local 01/01; reviews must assess fertility, survival, age structure and migration independently rather than forcing net growth to stay fixed. Improved health does not automatically increase births. Rates displayed below are rounded; full precision remains in the data.

| Nation / return | Previous births / deaths per 1,000 | Reviewed births / deaths per 1,000 | Net natural growth |
|---|---:|---:|---:|
| Veldrassen | 34.6 / 29.1 | 20.0 / 14.5 | +0.55% |
| Ostrevain | 32.0 / 24.8 | 22.0 / 14.8 | +0.72% |
| Rovessara | 31.3 / 27.5 | 18.8 / 15.0 | +0.38% |
| Brannervaux | 35.4 / 29.0 | 21.0 / 14.6 | +0.64% |
| Cervaud | 28.9 / 27.5 | 18.2 / 16.8 | +0.14% |
| Veylac | 29.8 / 27.6 | 17.9 / 15.7 | +0.22% |
| Ossavren successor territories | 34.5 / 35.7 | 16.6 / 17.8 | -0.12% |
| Rovengard | 36.3 / 32.2 | 19.9 / 15.8 | +0.41% |
| Varnesk | 31.8 / 30.0 | 17.7 / 15.9 | +0.18% |
| Galdresk | 35.2 / 31.9 | 19.1 / 15.8 | +0.33% |
| Halskert | 30.0 / 24.7 | 20.7 / 15.4 | +0.53% |
| Tervayne | 35.2 / 30.4 | 19.5 / 14.7 | +0.48% |
| Vardol | 35.8 / 32.7 | 19.0 / 15.9 | +0.31% |
| Averholt | 30.2 / 25.8 | 19.9 / 15.5 | +0.44% |
| Serevask Republic | 35.0 / 33.3 | 18.3 / 16.6 | +0.17% |
| Varnelle | 34.6 / 31.0 | 19.2 / 15.6 | +0.36% |
| Kelbrun | 34.0 / 28.2 | 21.1 / 15.3 | +0.58% |
| Gavrel | 30.9 / 29.7 | 18.1 / 16.9 | +0.12% |
| Bellacosta Cantons | 32.7 / 30.4 | 18.9 / 16.6 | +0.23% |
| Cavressa Principalities | 30.5 / 29.4 | 18.0 / 16.9 | +0.11% |
| Vaulcerre Basin Leagues | 29.0 / 26.3 | 19.1 / 16.4 | +0.27% |
| Seravelle Littoral | 31.6 / 30.4 | 18.1 / 16.9 | +0.12% |
| Haldrevik Concessions | 36.0 / 33.2 | 19.1 / 16.3 | +0.28% |
| Dreissen Wardholds | 35.1 / 30.5 | 20.2 / 15.6 | +0.46% |
| Varneselle Estates | 33.7 / 29.6 | 20.0 / 15.9 | +0.41% |
| Bressavelle Marches | 31.7 / 27.5 | 20.0 / 15.8 | +0.42% |
| Vallessia Cantons | 35.1 / 33.9 | 18.1 / 16.9 | +0.12% |
| Rivessac Coast | 30.3 / 26.2 | 19.9 / 15.8 | +0.41% |
| Karsenne Compact | 29.4 / 27.4 | 18.0 / 16.0 | +0.20% |
| Duchy of Caldrienne | 32.7 / 29.1 | 19.1 / 15.5 | +0.36% |
| March of Veyrasse | 35.5 / 30.8 | 19.9 / 15.2 | +0.47% |
| Calvernis Republic | 30.4 / 25.2 | 19.7 / 14.5 | +0.52% |
| Ceralte Admiralty | 31.9 / 29.0 | 18.6 / 15.7 | +0.29% |
| Varessan Sea League | 31.2 / 27.0 | 19.9 / 15.7 | +0.42% |
| Talascan Charter Islands | 32.6 / 29.5 | 18.9 / 15.8 | +0.31% |
| Nemerai Crown | 33.8 / 28.3 | 20.8 / 15.3 | +0.55% |
| Ordelune Overseas Districts | 32.1 / 28.4 | 19.6 / 15.9 | +0.37% |
| Skeldran Hearth Confederacy | 30.7 / 28.9 | 19.0 / 17.2 | +0.18% |
| Merovian Island Republic | 31.8 / 27.2 | 19.9 / 15.3 | +0.46% |
| Ashalai Reef Covenant | 35.1 / 28.9 | 21.7 / 15.5 | +0.62% |
| Kingdom of Istrana | 32.4 / 27.5 | 20.0 / 15.1 | +0.49% |
| Edrask Governorate | 31.9 / 29.0 | 19.0 / 16.1 | +0.29% |
| Norrakai Moots | 29.6 / 28.4 | 18.8 / 17.6 | +0.12% |
