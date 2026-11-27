const DATA = {"order":["RW","UG","MZ","PE"],"countries":{"RW":{"code":"RW","name":"Rwanda","model":"RWAMOD","currency":"RWF","year":"2024","table1":{"Survey":"EICV7 2023/24","Households":"15,054","Persons":"62,110","Tax-benefit model":"RWAMOD","Simulated policy system":"2024","Standard VAT rate (%)":"18","VAT turnover threshold":"RWF 20 m","Input-output table":"SAM 2022","Informal share of spending (%)":"75","Decile 1 / decile 10 (%)":"88 / 64"},"table2":[["Registered suppliers (every scenario)","utility bills, telecoms, pay television, insurance, air travel, filling station fuel"],["Recorded formal","supermarket, specialized shop, bar or restaurant, online"],["Recorded informal","small shop, mobile seller, individual, service provider, other households"],["Informal in every scenario","local brews at bars"],["No outlet recorded","other, don’t know, missing, education: formal"],["Ambiguous (medium, high); informal in headline","market; meat and fish at specialized shops"]],"chain":{"ubar":0.332194186094666,"ubarB":0.196073279819309,"ubarE":0.333748494218717,"ubarBE":0.196776039192925,"phiW":0.232839990839958,"wholesale_margin":0.323660101466752,"reg_input_share":0.240097500177612,"production_groups":41,"production_source":"IFPRI 2022 SAM for Rwanda (41 commodities, bn RWF)","channels":{"invoice":11.18,"border_final":12.0,"producer_invoice":4.44,"inherited":3.94,"wholesale_inputs":0.48,"retail_inputs":1.26,"total":33.3},"ucat":[{"group":"Primary products","share":6.0,"uB":0.06,"u":0.26},{"group":"Processed food","share":28.0,"uB":0.18,"u":0.41},{"group":"Other goods","share":33.0,"uB":0.33,"u":0.45},{"group":"Services","share":34.0,"uB":0.1,"u":0.18}]},"decomp":{"removed":66.4930899013166,"accounting":0.612986673747997,"gradient":1.08473956692658,"sF":0.3358376189218474,"sEF":0.3162685430005348,"gradientB":1.0586858772384113,"border_share":0.130224,"chain_share":0.090406,"lost_share":0.443531},"components":{"KF":19.6,"KI":1.6,"KU":0.1,"KU_KI":-1.5,"sEF":0.32,"etaU":0.42,"ubarE":0.33},"scen":{"unadj":{"vat_bn":515.241954,"kakwani":7.305294,"rate_all":5.628924,"rates":[3.887688,4.307291,4.472434,4.55122,4.930309,5.256275,5.532506,5.947168,6.382254,6.240499]},"formal":{"vat_bn":173.037631,"kakwani":19.64174,"rate_all":1.780252,"rates":[0.756809,0.904271,0.96816,1.041373,1.212092,1.268165,1.407785,1.717298,1.880159,2.635486]},"partial":{"vat_bn":286.715918,"kakwani":11.438856,"rate_all":3.06474,"rates":[1.886647,2.104833,2.17938,2.259779,2.462295,2.604818,2.791378,3.131068,3.398717,3.790796]},"impnat":{"vat_bn":240.134755,"kakwani":13.940946,"rate_all":2.537578,"rates":[1.412623,1.615614,1.674027,1.761987,1.940185,2.051946,2.214872,2.538469,2.76151,3.334277]},"low":{"vat_bn":154.497057,"kakwani":22.094257,"rate_all":1.56697,"rates":[0.577706,0.721814,0.782513,0.850077,0.999955,1.070419,1.180189,1.460612,1.615339,2.443067]},"med":{"vat_bn":209.071636,"kakwani":16.419013,"rate_all":2.188962,"rates":[1.087515,1.266553,1.319135,1.414006,1.590546,1.69376,1.832234,2.162322,2.362544,3.028557]},"high":{"vat_bn":245.105641,"kakwani":14.210395,"rate_all":2.597673,"rates":[1.418222,1.628835,1.67011,1.786638,1.969001,2.119354,2.256682,2.607346,2.844929,3.421628]}},"t5":{"headline":{"removed":66.49309,"lo":65.305911,"hi":67.835987,"shortfall":44.35315,"calc":"EUROMOD"},"balanced_half":{"removed":60.672774,"lo":null,"hi":null,"shortfall":47.086186,"calc":"Item-level calculation"},"balanced_maximum":{"removed":50.744592,"lo":null,"hi":null,"shortfall":50.880772,"calc":"Item-level calculation"},"balanced_measured":{"removed":72.217485,"lo":null,"hi":null,"shortfall":40.833491,"calc":"Item-level calculation"},"import_only":{"removed":46.210993,"lo":45.027806,"hi":47.639048,"shortfall":53.393788,"calc":"EUROMOD"},"pass_through_0.5":{"removed":42.060762,"lo":null,"hi":null,"shortfall":null,"calc":"Mixture of EUROMOD liabilities"},"pass_through_0.25":{"removed":24.244146,"lo":null,"hi":null,"shortfall":null,"calc":"Mixture of EUROMOD liabilities"},"formal_only":{"removed":null,"lo":null,"hi":null,"shortfall":66.416238,"calc":"EUROMOD"}},"t6":{"resolved":{"revenue":22.145292,"rate":14.12371,"d1":-0.683755,"d10":0.405117},"formal_only":{"revenue":1.338302,"rate":17.310194,"d1":0.000202,"d10":-0.028752},"upstream":{"revenue":19.893318,"rate":13.201525,"d1":-0.652947,"d10":0.357941}},"t7":{"high":{"revenue":84.65029,"burden_half":117.886054,"d1_statutory":0.704577,"d1_chain":0.595291,"d1_chain_half":0.879041}},"grid":{"formal":{"unadj":{"vat_bn":515.241954,"shortfall":0.0,"kakwani":7.305294,"removed":100.0},"formal":{"vat_bn":173.037631,"shortfall":66.416238,"kakwani":19.64174,"removed":0.0},"impnat":{"vat_bn":240.138406,"shortfall":53.39308,"kakwani":13.940956,"removed":46.210912},"chain":{"vat_bn":286.711045,"shortfall":44.354096,"kakwani":11.440051,"removed":66.4834},"sort50d25":{"vat_bn":283.446207,"shortfall":44.987747,"kakwani":11.634279,"removed":64.908979},"sort50":{"vat_bn":272.634172,"shortfall":47.086186,"kakwani":12.156876,"removed":60.672774},"sort50d75":{"vat_bn":270.240124,"shortfall":47.550831,"kakwani":12.277573,"removed":59.694394},"sort100d25":{"vat_bn":277.980265,"shortfall":46.048597,"kakwani":12.106508,"removed":61.081057},"sort100":{"vat_bn":253.082871,"shortfall":50.880772,"kakwani":13.381661,"removed":50.744592},"sort100d75":{"vat_bn":248.948072,"shortfall":51.683268,"kakwani":13.609225,"removed":48.899946},"reg25":{"vat_bn":254.636979,"shortfall":50.579145,"kakwani":13.173199,"removed":52.434399},"reg50":{"vat_bn":265.98475,"shortfall":48.376729,"kakwani":12.499012,"removed":57.899401},"reg150":{"vat_bn":305.665775,"shortfall":40.675294,"kakwani":10.627833,"removed":73.067297}},"low":{"formal":{"vat_bn":154.497057,"shortfall":70.014659,"kakwani":22.094257,"removed":0.0},"impnat":{"vat_bn":224.308073,"shortfall":56.465487,"kakwani":14.794177,"removed":49.361679},"chain":{"vat_bn":272.989327,"shortfall":47.017256,"kakwani":11.88327,"removed":69.044645},"sort50d25":{"vat_bn":269.240306,"shortfall":47.744879,"kakwani":12.099841,"removed":67.580238},"sort50":{"vat_bn":258.061353,"shortfall":49.91453,"kakwani":12.701221,"removed":63.513829},"sort50d75":{"vat_bn":255.609687,"shortfall":50.390358,"kakwani":12.841179,"removed":62.567461},"sort100d25":{"vat_bn":263.198766,"shortfall":48.917443,"kakwani":12.623989,"removed":64.036052},"sort100":{"vat_bn":237.508602,"shortfall":53.903482,"kakwani":14.112618,"removed":53.970245},"sort100d75":{"vat_bn":233.276631,"shortfall":54.724838,"kakwani":14.383404,"removed":52.139241},"reg25":{"vat_bn":239.367492,"shortfall":53.542702,"kakwani":13.881176,"removed":55.535209},"reg50":{"vat_bn":251.251107,"shortfall":51.236287,"kakwani":13.098494,"removed":60.827545},"reg150":{"vat_bn":292.892961,"shortfall":43.154287,"kakwani":10.96349,"removed":75.264015}},"med":{"formal":{"vat_bn":209.071636,"shortfall":59.42263,"kakwani":16.419013,"removed":0.0},"impnat":{"vat_bn":266.620646,"shortfall":48.253312,"kakwani":12.713462,"removed":40.659044},"chain":{"vat_bn":307.956733,"shortfall":40.230657,"kakwani":10.780805,"removed":61.865061},"sort50d25":{"vat_bn":304.798397,"shortfall":40.843638,"kakwani":10.944862,"removed":60.064951},"sort50":{"vat_bn":295.393445,"shortfall":42.668985,"kakwani":11.356733,"removed":55.545712},"sort50d75":{"vat_bn":293.340437,"shortfall":43.067439,"kakwani":11.450049,"removed":54.521803},"sort100d25":{"vat_bn":299.706704,"shortfall":41.831852,"kakwani":11.343642,"removed":55.689356},"sort100":{"vat_bn":278.018573,"shortfall":46.041162,"kakwani":12.322777,"removed":44.945818},"sort100d75":{"vat_bn":274.47653,"shortfall":46.728614,"kakwani":12.490177,"removed":43.109027},"reg25":{"vat_bn":279.680226,"shortfall":45.718662,"kakwani":12.14397,"removed":46.907773},"reg50":{"vat_bn":289.691291,"shortfall":43.775679,"kakwani":11.620404,"removed":52.652589},"reg150":{"vat_bn":324.646468,"shortfall":36.991453,"kakwani":10.121307,"removed":69.101384}},"high":{"formal":{"vat_bn":245.105641,"shortfall":52.429021,"kakwani":14.210395,"removed":0.0},"impnat":{"vat_bn":293.102859,"shortfall":43.11355,"kakwani":11.720828,"removed":36.054032},"chain":{"vat_bn":329.202456,"shortfall":36.107211,"kakwani":10.211126,"removed":57.917606},"sort50d25":{"vat_bn":326.150728,"shortfall":36.699501,"kakwani":10.350507,"removed":55.899092},"sort50":{"vat_bn":318.152828,"shortfall":38.251762,"kakwani":10.677307,"removed":51.16635},"sort50d75":{"vat_bn":316.440851,"shortfall":38.584029,"kakwani":10.749966,"removed":50.114097},"sort100d25":{"vat_bn":321.43347,"shortfall":37.615043,"kakwani":10.689509,"removed":50.989645},"sort100":{"vat_bn":302.954496,"shortfall":41.201509,"kakwani":11.448264,"removed":40.00132},"sort100d75":{"vat_bn":300.005183,"shortfall":41.773922,"kakwani":11.572669,"removed":38.199676},"reg25":{"vat_bn":304.723588,"shortfall":40.858157,"kakwani":11.293569,"removed":42.241617},"reg50":{"vat_bn":313.397914,"shortfall":39.174613,"kakwani":10.882077,"removed":48.200867},"reg150":{"vat_bn":343.627164,"shortfall":33.307612,"kakwani":9.673563,"removed":65.702618}}},"robust":{"allreg":{"shortfall":19.9,"kakwani":7.5,"removed":98.3},"lam0.25":{"shortfall":44.4,"kakwani":16.7,"removed":24.2},"lam0.5":{"shortfall":44.4,"kakwani":14.5,"removed":42.1},"lam0.75":{"shortfall":44.4,"kakwani":12.8,"removed":55.7}},"informal":{"formal":{"deciles":[87.5342,86.5729,85.6573,84.6686,83.2768,82.8563,81.8821,78.7946,77.4389,63.9449],"all":74.8069},"purchase_share":[2.6538,3.6447,4.2131,4.889,5.6841,6.6458,8.1639,10.5836,15.501,38.0211],"low":{"deciles":[91.5081,90.6747,90.0733,89.5189,88.4155,87.9389,87.358,84.9961,84.5832,71.2883],"all":81.1178},"med":{"deciles":[76.0704,75.3181,75.1848,74.4163,73.6432,72.8729,71.9239,69.3986,68.3078,55.9414],"all":65.6732},"high":{"deciles":[64.6067,64.0633,64.7124,64.1639,64.0095,62.8895,61.9656,60.0026,59.1767,47.938],"all":56.5394}},"basket":{"1":{"taxable_formal":7.7826,"taxable_informal":32.1287,"untaxed_by_law":60.0886,"informal":87.5342},"2":{"taxable_formal":9.1977,"taxable_informal":34.1612,"untaxed_by_law":56.6411,"informal":86.5729},"3":{"taxable_formal":9.9164,"taxable_informal":35.7522,"untaxed_by_law":54.3315,"informal":85.6573},"4":{"taxable_formal":10.6762,"taxable_informal":35.5596,"untaxed_by_law":53.7642,"informal":84.6686},"5":{"taxable_formal":12.1678,"taxable_informal":36.7261,"untaxed_by_law":51.1061,"informal":83.2768},"6":{"taxable_formal":12.4908,"taxable_informal":38.4885,"untaxed_by_law":49.0208,"informal":82.8563},"7":{"taxable_formal":13.178,"taxable_informal":38.24,"untaxed_by_law":48.582,"informal":81.8821},"8":{"taxable_formal":15.4028,"taxable_informal":36.6946,"untaxed_by_law":47.9025,"informal":78.7946},"9":{"taxable_formal":15.3682,"taxable_informal":36.223,"untaxed_by_law":48.4088,"informal":77.4389},"10":{"taxable_formal":21.9234,"taxable_informal":29.2195,"untaxed_by_law":48.8571,"informal":63.9449},"all":{"taxable_formal":16.427,"taxable_informal":33.7179,"untaxed_by_law":49.8552,"informal":74.8069}},"upstream_deciles":{"partial":[0.36087,0.35279,0.34564,0.34714,0.33624,0.33516,0.33544,0.33423,0.3373,0.32047],"impnat":[0.20947,0.20903,0.20143,0.20531,0.19582,0.19653,0.19567,0.19414,0.19576,0.19384]},"context":{"simulated_pct_reported":65.0558023079827,"reported_year":"2023/24"},"states":{"chain/formal/sort50":{"P":[1.741868,1.957206,2.023105,2.106544,2.298167,2.432266,2.610946,2.94607,3.20316,3.658661],"ush":[0.314627,0.309412,0.301045,0.303481,0.292096,0.291893,0.291695,0.290499,0.293863,0.28382],"ushE":0.292076,"dc":{"removed":60.672774,"ubar":0.291044,"ubarE":0.292076,"sEF":0.316269,"acc":0.566072,"grad":1.071821},"border":{"sfB":53.39308,"ubarB":0.196084},"ch":{"invoice":5.9814,"border_final":14.5419,"producer_invoice":3.1525,"inherited":3.7116,"wholesale_inputs":0.5211,"retail_inputs":1.2111,"total":29.1196}},"chain/formal/sort100":{"P":[1.529878,1.743747,1.800407,1.888555,2.068399,2.191267,2.358914,2.688506,2.932113,3.47924],"ush":[0.246918,0.246686,0.237495,0.241373,0.2303,0.231463,0.230592,0.229607,0.233659,0.23405],"ushE":0.234088,"dc":{"removed":50.744592,"ubar":0.233911,"ubarE":0.234088,"sEF":0.316269,"acc":0.491449,"grad":1.032551},"border":{"sfB":53.39308,"ubarB":0.196084},"ch":{"invoice":0.0,"border_final":17.4499,"producer_invoice":0.8399,"inherited":3.342,"wholesale_inputs":0.5483,"retail_inputs":1.1459,"total":23.326}},"chain/formal/sortm":{"P":[2.079015,2.32188,2.373955,2.461739,2.646399,2.806689,2.997022,3.3345,3.628476,3.986857],"ush":[0.422312,0.416574,0.401166,0.40468,0.385751,0.385778,0.385296,0.382329,0.388334,0.374859],"ushE":0.386551,"dc":{"removed":72.217485,"ubar":0.385188,"ubarE":0.386551,"sEF":0.316269,"acc":0.665818,"grad":1.084643},"border":{"sfB":53.39308,"ubarB":0.196084},"ch":{"invoice":6.9092,"border_final":20.1623,"producer_invoice":4.7242,"inherited":4.3792,"wholesale_inputs":0.6791,"retail_inputs":1.5772,"total":38.4312}},"chain/formal/reg25":{"P":[1.553919,1.759785,1.8245,1.908155,2.095448,2.21668,2.387546,2.71891,2.95974,3.483169],"ush":[0.254596,0.251398,0.24437,0.246957,0.237575,0.237836,0.237534,0.236795,0.239795,0.23514],"ushE":0.239022,"dc":{"removed":52.434399,"ubar":0.238452,"ubarE":0.239022,"sEF":0.316269,"acc":0.498278,"grad":1.052312},"border":{"sfB":53.39308,"ubarB":0.196084},"ch":{"invoice":2.844,"border_final":14.1818,"producer_invoice":1.87,"inherited":3.3944,"wholesale_inputs":0.4885,"retail_inputs":1.0726,"total":23.8513}},"chain/formal/reg50":{"P":[1.672821,1.882481,1.950713,2.033026,2.225604,2.354217,2.530795,2.865105,3.115164,3.591346],"ush":[0.292574,0.287454,0.280387,0.282535,0.27258,0.272322,0.272263,0.271357,0.274318,0.265147],"ushE":0.27255,"dc":{"removed":57.899401,"ubar":0.271613,"ubarE":0.27255,"sEF":0.316269,"acc":0.54226,"grad":1.067743},"border":{"sfB":53.39308,"ubarB":0.196084},"ch":{"invoice":5.634,"border_final":13.4099,"producer_invoice":2.8961,"inherited":3.6313,"wholesale_inputs":0.4893,"retail_inputs":1.1325,"total":27.1931}},"chain/formal/reg150":{"P":[2.078572,2.305639,2.386288,2.465517,2.677265,2.832939,3.028913,3.373837,3.657913,3.974725],"ush":[0.42217,0.411801,0.404685,0.405757,0.394053,0.39236,0.393027,0.391629,0.394873,0.371494],"ushE":0.389638,"dc":{"removed":73.067297,"ubar":0.38757,"ubarE":0.389638,"sEF":0.316269,"acc":0.668704,"grad":1.09267},"border":{"sfB":53.39308,"ubarB":0.196084},"ch":{"invoice":16.8519,"border_final":10.6898,"producer_invoice":5.4149,"inherited":4.056,"wholesale_inputs":0.4663,"retail_inputs":1.3931,"total":38.872}},"chain/formal/allreg":{"P":[3.171787,3.457881,3.554465,3.634926,3.880372,4.11474,4.36185,4.733388,5.123192,5.022996],"ush":[0.771342,0.750395,0.738043,0.738936,0.717624,0.713765,0.716185,0.713046,0.720339,0.662275],"ushE":0.70566,"dc":{"removed":98.307437,"ubar":0.701058,"ubarE":0.70566,"sEF":0.316269,"acc":0.883455,"grad":1.112761},"border":{"sfB":53.39308,"ubarB":0.196084},"ch":{"invoice":63.339,"border_final":2.1923,"producer_invoice":0.0,"inherited":2.1053,"wholesale_inputs":0.0485,"retail_inputs":2.6543,"total":70.3394}},"import/low/headline":{"P":[1.267921,1.46803,1.522308,1.604906,1.763631,1.886618,2.022408,2.318744,2.533227,3.166814],"ush":[0.208525,0.208122,0.200491,0.203945,0.194302,0.19499,0.19351,0.191268,0.192554,0.190589],"ushE":0.194315,"dc":{"removed":49.361679,"ubar":0.193519,"ubarE":0.194315,"sEF":0.278378,"acc":0.464202,"grad":1.063365}},"chain/low/headline":{"P":[1.763338,1.978895,2.049557,2.125028,2.310253,2.462212,2.624922,2.940454,3.200087,3.644725],"ush":[0.358199,0.350604,0.34338,0.344475,0.333379,0.332499,0.331946,0.329839,0.332447,0.31644],"ushE":0.330062,"dc":{"removed":69.044645,"ubar":0.328466,"ubarE":0.330062,"sEF":0.278378,"acc":0.638964,"grad":1.080571},"border":{"sfB":56.465487,"ubarB":0.193519},"ch":{"invoice":11.1271,"border_final":11.7527,"producer_invoice":4.2878,"inherited":4.0071,"wholesale_inputs":0.4831,"retail_inputs":1.2575,"total":32.9153}},"chain/low/sort50":{"P":[1.610983,1.823712,1.885304,1.963584,2.13681,2.280932,2.434053,2.74346,2.992195,3.503658],"ush":[0.31217,0.307323,0.298866,0.300855,0.28925,0.289191,0.288091,0.285932,0.288836,0.279292],"ushE":0.288193,"dc":{"removed":63.513829,"ubar":0.287085,"ubarE":0.288193,"sEF":0.278378,"acc":0.59257,"grad":1.071837},"border":{"sfB":56.465487,"ubarB":0.193519},"ch":{"invoice":5.946,"border_final":14.2273,"producer_invoice":3.0389,"inherited":3.7736,"wholesale_inputs":0.5211,"retail_inputs":1.2112,"total":28.7181}},"chain/low/sort100":{"P":[1.389276,1.600339,1.652543,1.735312,1.895606,2.029268,2.169783,2.472146,2.706935,3.31381],"ush":[0.245189,0.245023,0.235786,0.239179,0.22788,0.229069,0.227372,0.225459,0.228994,0.229298],"ushE":0.230418,"dc":{"removed":53.970245,"ubar":0.230111,"ubarE":0.230418,"sEF":0.278378,"acc":0.518197,"grad":1.0415},"border":{"sfB":56.465487,"ubarB":0.193519},"ch":{"invoice":0.0,"border_final":17.0515,"producer_invoice":0.7967,"inherited":3.402,"wholesale_inputs":0.5485,"retail_inputs":1.1461,"total":22.9448}},"chain/low/sortm":{"P":[1.95732,2.197759,2.24481,2.327335,2.493314,2.662684,2.827491,3.139069,3.424023,3.836182],"ush":[0.416804,0.411645,0.396295,0.399135,0.379955,0.380392,0.378489,0.374108,0.379424,0.366857],"ushE":0.379337,"dc":{"removed":74.454549,"ubar":0.377907,"ubarE":0.379337,"sEF":0.278378,"acc":0.68706,"grad":1.083668},"border":{"sfB":56.465487,"ubarB":0.193519},"ch":{"invoice":6.8269,"border_final":19.6609,"producer_invoice":4.5164,"inherited":4.437,"wholesale_inputs":0.6795,"retail_inputs":1.5781,"total":37.6988},"agg":{"shortfall":43.555657,"removed":74.454549,"kakwani":11.083201}},"chain/low/reg25":{"P":[1.414998,1.618115,1.678657,1.757061,1.925441,2.057404,2.201879,2.506808,2.739244,3.321398],"ush":[0.25296,0.249981,0.242863,0.245055,0.235472,0.235791,0.234746,0.233185,0.235772,0.231296],"ushE":0.235925,"dc":{"removed":55.535209,"ubar":0.235264,"ubarE":0.235925,"sEF":0.278378,"acc":0.525882,"grad":1.056039},"border":{"sfB":56.465487,"ubarB":0.193519},"ch":{"invoice":2.8298,"border_final":13.8828,"producer_invoice":1.798,"inherited":3.457,"wholesale_inputs":0.4884,"retail_inputs":1.0723,"total":23.5283}},"chain/low/reg50":{"P":[1.539389,1.746404,1.810489,1.887657,2.061877,2.200767,2.35174,2.660355,2.9022,3.435041],"ush":[0.29054,0.285761,0.27859,0.28034,0.270185,0.27004,0.269179,0.267408,0.269957,0.261222],"ushE":0.269215,"dc":{"removed":60.827545,"ubar":0.268206,"ubarE":0.269215,"sEF":0.278378,"acc":0.569587,"grad":1.067923},"border":{"sfB":56.465487,"ubarB":0.193519},"ch":{"invoice":5.6075,"border_final":13.1308,"producer_invoice":2.7924,"inherited":3.6947,"wholesale_inputs":0.4892,"retail_inputs":1.1323,"total":26.8469}},"chain/low/reg150":{"P":[1.965042,2.189824,2.266478,2.340948,2.536428,2.700753,2.874048,3.196053,3.472612,3.838472],"ush":[0.419137,0.409432,0.402167,0.402814,0.390925,0.389487,0.389186,0.386809,0.389617,0.36746],"ushE":0.385723,"dc":{"removed":75.264015,"ubar":0.383639,"ubarE":0.385723,"sEF":0.278378,"acc":0.692844,"grad":1.086306},"border":{"sfB":56.465487,"ubarB":0.193519},"ch":{"invoice":16.776,"border_final":10.4808,"producer_invoice":5.2375,"inherited":4.1149,"wholesale_inputs":0.4663,"retail_inputs":1.3929,"total":38.4684}},"chain/low/allreg":{"P":[3.107403,3.391984,3.484142,3.560496,3.793417,4.032209,4.262397,4.616074,4.999061,4.930385],"ush":[0.764263,0.744718,0.732165,0.732319,0.710741,0.707571,0.708176,0.703315,0.709835,0.655],"ushE":0.697803,"dc":{"removed":98.392573,"ubar":0.693276,"ubarE":0.697803,"sEF":0.278378,"acc":0.892413,"grad":1.102545},"border":{"sfB":56.465487,"ubarB":0.193519},"ch":{"invoice":62.4785,"border_final":2.2209,"producer_invoice":0.0,"inherited":2.1368,"wholesale_inputs":0.0485,"retail_inputs":2.6554,"total":69.5401},"agg":{"shortfall":21.475211,"removed":98.392573,"kakwani":7.543016}},"import/med/headline":{"P":[1.65895,1.883548,1.933165,2.03528,2.217721,2.362775,2.524748,2.863513,3.117603,3.623272],"ush":[0.204071,0.20291,0.194726,0.198034,0.18779,0.187793,0.187152,0.185263,0.187839,0.185158],"ushE":0.188624,"dc":{"removed":40.659044,"ubar":0.187964,"ubarE":0.188624,"sEF":0.388878,"acc":0.374142,"grad":1.086727}},"chain/med/headline":{"P":[2.081159,2.318066,2.386018,2.47926,2.685311,2.854939,3.041035,3.39316,3.684635,4.022186],"ush":[0.354851,0.345808,0.338339,0.339554,0.327797,0.325944,0.326679,0.325202,0.328902,0.309355],"ushE":0.324605,"dc":{"removed":61.865061,"ubar":0.322974,"ubarE":0.324605,"sEF":0.388878,"acc":0.552753,"grad":1.119216},"border":{"sfB":48.253312,"ubarB":0.187964},"ch":{"invoice":10.981,"border_final":11.6172,"producer_invoice":4.3613,"inherited":3.9728,"wholesale_inputs":0.3994,"retail_inputs":1.0396,"total":32.3713}},"chain/med/sort50":{"P":[1.95224,2.186909,2.245391,2.341628,2.537016,2.699706,2.877459,3.225717,3.509664,3.906693],"ush":[0.308811,0.302675,0.293742,0.295683,0.283394,0.28237,0.282473,0.280961,0.285374,0.273397],"ushE":0.282971,"dc":{"removed":55.545712,"ubar":0.28194,"ubarE":0.282971,"sEF":0.388878,"acc":0.503679,"grad":1.1028},"border":{"sfB":48.253312,"ubarB":0.187964},"ch":{"invoice":5.8735,"border_final":14.0216,"producer_invoice":3.1479,"inherited":3.7246,"wholesale_inputs":0.4305,"retail_inputs":1.0007,"total":28.1988}},"chain/med/sort100":{"P":[1.763257,1.996857,2.045228,2.145954,2.329809,2.483509,2.649951,2.993741,3.267875,3.751118],"ush":[0.241322,0.240173,0.230265,0.233311,0.221352,0.221683,0.220988,0.219671,0.225223,0.224961],"ushE":0.225253,"dc":{"removed":44.945818,"ubar":0.225191,"ubarE":0.225253,"sEF":0.388878,"acc":0.427802,"grad":1.050621},"border":{"sfB":48.253312,"ubarB":0.187964},"ch":{"invoice":0.0,"border_final":16.771,"producer_invoice":0.9359,"inherited":3.3285,"wholesale_inputs":0.4529,"retail_inputs":0.9465,"total":22.4348}},"chain/med/sortm":{"P":[2.253014,2.510979,2.557147,2.654684,2.842463,3.024952,3.21394,3.562377,3.880285,4.188675],"ush":[0.416224,0.409251,0.392609,0.395471,0.374852,0.373666,0.373407,0.369911,0.377575,0.361189],"ushE":0.374978,"dc":{"removed":68.103084,"ubar":0.373604,"ubarE":0.374978,"sEF":0.388878,"acc":0.606727,"grad":1.122467},"border":{"sfB":48.253312,"ubarB":0.187964},"ch":{"invoice":6.7645,"border_final":19.4046,"producer_invoice":4.8675,"inherited":4.3476,"wholesale_inputs":0.5608,"retail_inputs":1.3024,"total":37.2474},"agg":{"shortfall":37.222089,"removed":68.103084,"kakwani":10.212289}},"chain/med/reg25":{"P":[1.785822,2.012694,2.069182,2.166683,2.35807,2.510907,2.680784,3.026507,3.296591,3.756321],"ush":[0.24938,0.245381,0.237861,0.239919,0.229814,0.229374,0.229321,0.228328,0.232367,0.226581],"ushE":0.231139,"dc":{"removed":46.907773,"ubar":0.230619,"ubarE":0.231139,"sEF":0.388878,"acc":0.436003,"grad":1.07586},"border":{"sfB":48.253312,"ubarB":0.187964},"ch":{"invoice":2.7977,"border_final":13.6614,"producer_invoice":1.9007,"inherited":3.4073,"wholesale_inputs":0.404,"retail_inputs":0.8871,"total":23.0582}},"chain/med/reg50":{"P":[1.891495,2.121481,2.181994,2.277856,2.474342,2.632985,2.808673,3.156639,3.434092,3.84983],"ush":[0.287118,0.281158,0.273637,0.275356,0.264628,0.263641,0.263883,0.26271,0.266573,0.255694],"ushE":0.264251,"dc":{"removed":52.652589,"ubar":0.263316,"ubarE":0.264251,"sEF":0.388878,"acc":0.480135,"grad":1.09662},"border":{"sfB":48.253312,"ubarB":0.187964},"ch":{"invoice":5.5398,"border_final":12.9385,"producer_invoice":2.8877,"inherited":3.6492,"wholesale_inputs":0.4046,"retail_inputs":0.9365,"total":26.3563}},"chain/med/reg150":{"P":[2.251538,2.496008,2.570732,2.661952,2.876869,3.05692,3.252323,3.608295,3.913233,4.181386],"ush":[0.415697,0.404328,0.396917,0.397788,0.385154,0.38264,0.38378,0.382043,0.385771,0.35892],"ushE":0.379693,"dc":{"removed":69.101384,"ubar":0.377485,"ubarE":0.379693,"sEF":0.388878,"acc":0.611504,"grad":1.130023},"border":{"sfB":48.253312,"ubarB":0.187964},"ch":{"invoice":16.544,"border_final":10.4,"producer_invoice":5.2869,"inherited":4.0961,"wholesale_inputs":0.3854,"retail_inputs":1.1512,"total":37.8636}},"chain/med/allreg":{"P":[3.217982,3.5114,3.607221,3.693544,3.939884,4.181651,4.428732,4.803702,5.197039,5.081279],"ush":[0.760834,0.738257,0.725617,0.726612,0.703445,0.698353,0.701705,0.697883,0.705149,0.639091],"ushE":0.68884,"dc":{"removed":98.525021,"ubar":0.68379,"ubarE":0.68884,"sEF":0.388878,"acc":0.850584,"grad":1.158322},"border":{"sfB":48.253312,"ubarB":0.187964},"ch":{"invoice":61.6925,"border_final":2.4524,"producer_invoice":0.0,"inherited":2.2391,"wholesale_inputs":0.0401,"retail_inputs":2.1928,"total":68.6169},"agg":{"shortfall":18.790006,"removed":98.525021,"kakwani":7.43972}},"import/high/headline":{"P":[1.905293,2.15152,2.192283,2.308557,2.495235,2.673562,2.834513,3.188413,3.473626,3.91225],"ush":[0.197238,0.195144,0.186336,0.188788,0.177703,0.176673,0.176392,0.173982,0.177732,0.174049],"ushE":0.178258,"dc":{"removed":36.054032,"ubar":0.177678,"ubarE":0.178258,"sEF":0.461487,"acc":0.319756,"grad":1.12755}},"chain/high/headline":{"P":[2.275846,2.531646,2.592808,2.698878,2.908466,3.105207,3.290573,3.655025,3.970481,4.253683],"ush":[0.347291,0.337064,0.329262,0.329974,0.317247,0.314274,0.315612,0.313693,0.318193,0.295173],"ushE":0.313011,"dc":{"removed":57.917606,"ubar":0.311313,"ubarE":0.313011,"sEF":0.461487,"acc":0.496806,"grad":1.1658},"border":{"sfB":43.11355,"ubarB":0.177678},"ch":{"invoice":10.7321,"border_final":11.1365,"producer_invoice":4.2642,"inherited":4.0088,"wholesale_inputs":0.2929,"retail_inputs":0.7624,"total":31.1969}},"chain/high/sort50":{"P":[2.162614,2.416611,2.467673,2.576711,2.775866,2.967156,3.143969,3.505368,3.816171,4.154725],"ush":[0.301439,0.294116,0.284608,0.285784,0.272469,0.270266,0.270859,0.268883,0.274569,0.260068],"ushE":0.271409,"dc":{"removed":51.16635,"ubar":0.270409,"ubarE":0.271409,"sEF":0.461487,"acc":0.446658,"grad":1.145536},"border":{"sfB":43.11355,"ubarB":0.177678},"ch":{"invoice":5.7364,"border_final":13.3605,"producer_invoice":3.1421,"inherited":3.741,"wholesale_inputs":0.3155,"retail_inputs":0.7333,"total":27.0288}},"chain/high/sort100":{"P":[1.99664,2.249966,2.290048,2.403352,2.591219,2.775764,2.940989,3.29898,3.603641,4.022997],"ush":[0.234228,0.231899,0.221223,0.223077,0.210116,0.209253,0.208896,0.207087,0.214488,0.213337],"ushE":0.214036,"dc":{"removed":40.00132,"ubar":0.214147,"ubarE":0.214036,"sEF":0.461487,"acc":0.371108,"grad":1.077888},"border":{"sfB":43.11355,"ubarB":0.177678},"ch":{"invoice":0.0,"border_final":15.9083,"producer_invoice":1.0579,"inherited":3.3114,"wholesale_inputs":0.3317,"retail_inputs":0.6932,"total":21.3025}},"chain/high/sortm":{"P":[2.427017,2.700078,2.740336,2.847629,3.038527,3.243234,3.430857,3.79026,4.132101,4.390492],"ush":[0.408507,0.399948,0.381906,0.38378,0.361167,0.358275,0.358436,0.354185,0.363883,0.343707],"ushE":0.360286,"dc":{"removed":64.575451,"ubar":0.358931,"ubarE":0.360286,"sEF":0.461487,"acc":0.54963,"grad":1.174889},"border":{"sfB":43.11355,"ubarB":0.177678},"ch":{"invoice":6.5807,"border_final":18.4417,"producer_invoice":5.0496,"inherited":4.3075,"wholesale_inputs":0.4104,"retail_inputs":0.9531,"total":35.743},"agg":{"shortfall":33.610627,"removed":64.575451,"kakwani":9.751395}},"chain/high/reg25":{"P":[2.017726,2.265602,2.313861,2.425212,2.620693,2.805142,2.97402,3.334106,3.633444,4.029473],"ush":[0.242767,0.237736,0.22972,0.230984,0.220069,0.218618,0.218979,0.217604,0.222913,0.215634],"ushE":0.221131,"dc":{"removed":42.241617,"ubar":0.220696,"ubarE":0.221131,"sEF":0.461487,"acc":0.380886,"grad":1.109035},"border":{"sfB":43.11355,"ubarB":0.177678},"ch":{"invoice":2.7388,"border_final":13.0001,"producer_invoice":1.9398,"inherited":3.4236,"wholesale_inputs":0.2966,"retail_inputs":0.6514,"total":22.0503}},"chain/high/reg50":{"P":[2.11017,2.36048,2.413272,2.522686,2.72308,2.911761,3.086549,3.448176,3.753022,4.108313],"ush":[0.280202,0.273159,0.265195,0.266242,0.254644,0.252607,0.253331,0.251759,0.256717,0.243603],"ushE":0.253713,"dc":{"removed":48.200867,"ubar":0.252807,"ubarE":0.253713,"sEF":0.461487,"acc":0.424188,"grad":1.13631},"border":{"sfB":43.11355,"ubarB":0.177678},"ch":{"invoice":5.42,"border_final":12.3394,"producer_invoice":2.877,"inherited":3.6719,"wholesale_inputs":0.2969,"retail_inputs":0.6873,"total":25.2925}},"chain/high/reg150":{"P":[2.424505,2.686376,2.755168,2.858386,3.076472,3.280908,3.475725,3.842757,4.168553,4.388047],"ush":[0.40749,0.394832,0.387199,0.387671,0.37398,0.370285,0.372133,0.369903,0.374188,0.342839],"ushE":0.367066,"dc":{"removed":65.702618,"ubar":0.36471,"ubarE":0.367066,"sEF":0.461487,"acc":0.556873,"grad":1.17985},"border":{"sfB":43.11355,"ubarB":0.177678},"ch":{"invoice":16.1527,"border_final":10.0316,"producer_invoice":5.1242,"inherited":4.1469,"wholesale_inputs":0.2825,"retail_inputs":0.8438,"total":36.5817}},"chain/high/allreg":{"P":[3.264176,3.564919,3.659964,3.752159,3.999396,4.248574,4.495599,4.874021,5.270883,5.139563],"ush":[0.747512,0.722836,0.710073,0.710965,0.685641,0.678761,0.683467,0.678682,0.685816,0.609441],"ushE":0.667483,"dc":{"removed":99.101016,"ubar":0.661916,"ubarE":0.667483,"sEF":0.461487,"acc":0.813077,"grad":1.21884},"border":{"sfB":43.11355,"ubarB":0.177678},"ch":{"invoice":59.6,"border_final":2.7828,"producer_invoice":0.0,"inherited":2.4092,"wholesale_inputs":0.0294,"retail_inputs":1.6062,"total":66.4276},"agg":{"shortfall":17.725414,"removed":99.101016,"kakwani":7.36737}},"import/formal/headline":{"ush":[0.209467,0.209033,0.20143,0.205312,0.195818,0.196529,0.195671,0.194136,0.195765,0.193839],"ushE":0.196776,"dc":{"removed":46.210993,"ubar":0.196073,"ubarE":0.196776,"sEF":0.316269,"acc":0.436494,"grad":1.058686}},"chain/formal/headline":{"ush":[0.360869,0.352793,0.345641,0.347139,0.336237,0.33516,0.335439,0.334235,0.3373,0.320473],"ushE":0.333748,"dc":{"removed":66.49309,"ubar":0.332194,"ubarE":0.333748,"sEF":0.316269,"acc":0.612987,"grad":1.08474},"border":{"sfB":53.39308,"ubarB":0.196084},"ch":{"invoice":11.1768,"border_final":11.9954,"producer_invoice":4.4376,"inherited":3.9444,"wholesale_inputs":0.4832,"retail_inputs":1.2577,"total":33.2951}}},"basket_cls":{"formal":{"1":{"taxable_formal":7.7826,"taxable_informal":32.1287,"untaxed_by_law":60.0886},"2":{"taxable_formal":9.1977,"taxable_informal":34.1612,"untaxed_by_law":56.6411},"3":{"taxable_formal":9.9164,"taxable_informal":35.7522,"untaxed_by_law":54.3315},"4":{"taxable_formal":10.6762,"taxable_informal":35.5596,"untaxed_by_law":53.7642},"5":{"taxable_formal":12.1678,"taxable_informal":36.7261,"untaxed_by_law":51.1061},"6":{"taxable_formal":12.4908,"taxable_informal":38.4885,"untaxed_by_law":49.0208},"7":{"taxable_formal":13.178,"taxable_informal":38.24,"untaxed_by_law":48.582},"8":{"taxable_formal":15.4028,"taxable_informal":36.6946,"untaxed_by_law":47.9025},"9":{"taxable_formal":15.3682,"taxable_informal":36.223,"untaxed_by_law":48.4088},"10":{"taxable_formal":21.9234,"taxable_informal":29.2195,"untaxed_by_law":48.8571},"all":{"taxable_formal":16.427,"taxable_informal":33.7179,"untaxed_by_law":49.8552}},"low":{"1":{"taxable_formal":5.9498,"taxable_informal":33.9616,"untaxed_by_law":60.0886},"2":{"taxable_formal":7.3202,"taxable_informal":36.0387,"untaxed_by_law":56.6411},"3":{"taxable_formal":8.0335,"taxable_informal":37.6351,"untaxed_by_law":54.3315},"4":{"taxable_formal":8.7286,"taxable_informal":37.5072,"untaxed_by_law":53.7642},"5":{"taxable_formal":10.0371,"taxable_informal":38.8567,"untaxed_by_law":51.1061},"6":{"taxable_formal":10.5332,"taxable_informal":40.446,"untaxed_by_law":49.0208},"7":{"taxable_formal":11.0732,"taxable_informal":40.3448,"untaxed_by_law":48.582},"8":{"taxable_formal":13.1454,"taxable_informal":38.9521,"untaxed_by_law":47.9025},"9":{"taxable_formal":13.2836,"taxable_informal":38.3076,"untaxed_by_law":48.4088},"10":{"taxable_formal":20.3571,"taxable_informal":30.7858,"untaxed_by_law":48.8571},"all":{"taxable_formal":14.5548,"taxable_informal":35.5901,"untaxed_by_law":49.8552}},"med":{"1":{"taxable_formal":11.2076,"taxable_informal":28.7037,"untaxed_by_law":60.0886},"2":{"taxable_formal":12.8713,"taxable_informal":30.4876,"untaxed_by_law":56.6411},"3":{"taxable_formal":13.528,"taxable_informal":32.1405,"untaxed_by_law":54.3315},"4":{"taxable_formal":14.4846,"taxable_informal":31.7512,"untaxed_by_law":53.7642},"5":{"taxable_formal":15.9351,"taxable_informal":32.9588,"untaxed_by_law":51.1061},"6":{"taxable_formal":16.6436,"taxable_informal":34.3356,"untaxed_by_law":49.0208},"7":{"taxable_formal":17.1217,"taxable_informal":34.2962,"untaxed_by_law":48.582},"8":{"taxable_formal":19.3065,"taxable_informal":32.791,"untaxed_by_law":47.9025},"9":{"taxable_formal":19.2625,"taxable_informal":32.3287,"untaxed_by_law":48.4088},"10":{"taxable_formal":25.1355,"taxable_informal":26.0074,"untaxed_by_law":48.8571},"all":{"taxable_formal":20.0403,"taxable_informal":30.1046,"untaxed_by_law":49.8552}},"high":{"1":{"taxable_formal":14.6326,"taxable_informal":25.2788,"untaxed_by_law":60.0886},"2":{"taxable_formal":16.545,"taxable_informal":26.814,"untaxed_by_law":56.6411},"3":{"taxable_formal":17.1396,"taxable_informal":28.5289,"untaxed_by_law":54.3315},"4":{"taxable_formal":18.293,"taxable_informal":27.9428,"untaxed_by_law":53.7642},"5":{"taxable_formal":19.7023,"taxable_informal":29.1915,"untaxed_by_law":51.1061},"6":{"taxable_formal":20.7964,"taxable_informal":30.1828,"untaxed_by_law":49.0208},"7":{"taxable_formal":21.0655,"taxable_informal":30.3525,"untaxed_by_law":48.582},"8":{"taxable_formal":23.2101,"taxable_informal":28.8874,"untaxed_by_law":47.9025},"9":{"taxable_formal":23.1568,"taxable_informal":28.4344,"untaxed_by_law":48.4088},"10":{"taxable_formal":28.3475,"taxable_informal":22.7954,"untaxed_by_law":48.8571},"all":{"taxable_formal":23.6536,"taxable_informal":26.4913,"untaxed_by_law":49.8552}}}},"UG":{"code":"UG","name":"Uganda","model":"UGAMOD","currency":"UGX","year":"2024","table1":{"Survey":"UNHS 2023/24","Households":"15,762","Persons":"75,585","Tax-benefit model":"UGAMOD","Simulated policy system":"2024","Standard VAT rate (%)":"18","VAT turnover threshold":"UGX 150 m","Input-output table":"SUT 2016/17","Informal share of spending (%)":"60","Decile 1 / decile 10 (%)":"78 / 51"},"table2":[["Registered suppliers (every scenario)","water, electricity, airtime and data, mobile money, insurance"],["Recorded formal","supermarket, specialized shop, service providers, abroad"],["Recorded informal","open market, kiosk, street vendor, local online, other households"],["Informal in every scenario","local brews"],["No outlet recorded","other, not applicable: formal; no place: informal"],["Ambiguous (medium, high); informal in headline","general shop; meat and fish at specialized shops"]],"chain":{"ubar":0.45554361767462,"ubarB":0.120043590665842,"ubarE":0.463476088076161,"ubarBE":0.122632006943604,"phiW":0.526545972335232,"wholesale_margin":0.480721097072679,"reg_input_share":0.540150923814869,"production_groups":186,"production_source":"UBOS SUT 2016/17 via MoFPED/CoPS SAM workbook (186 products, mn UGX)","channels":{"invoice":27.91,"border_final":4.24,"producer_invoice":9.7,"inherited":2.95,"wholesale_inputs":0.4,"retail_inputs":0.55,"total":45.76},"ucat":[{"group":"Primary products","share":18.0,"uB":0.16,"u":0.57},{"group":"Processed food","share":35.0,"uB":0.12,"u":0.58},{"group":"Other goods","share":22.0,"uB":0.23,"u":0.6},{"group":"Services","share":25.0,"uB":0.03,"u":0.12}]},"decomp":{"removed":87.6889497094373,"accounting":0.716976504797305,"gradient":1.22303798133842,"sF":0.3431406525978587,"sEF":0.3410011283633694,"gradientB":1.293308650582887,"border_share":0.078852,"chain_share":0.220376,"lost_share":0.357631},"components":{"KF":24.5,"KI":4.2,"KU":-0.3,"KU_KI":-4.5,"sEF":0.34,"etaU":0.47,"ubarE":0.46},"scen":{"unadj":{"vat_bn":4467.9644,"kakwani":11.131234,"rate_all":4.725364,"rates":[3.214559,3.414009,3.440167,3.57064,3.585536,4.064191,4.15063,4.607406,4.982513,6.19313]},"formal":{"vat_bn":1533.14022,"kakwani":24.496074,"rate_all":1.611354,"rates":[0.500618,0.58818,0.7122,0.788988,0.871446,1.017675,1.212706,1.398206,1.728671,2.779798]},"partial":{"vat_bn":2870.080644,"kakwani":12.776586,"rate_all":3.054623,"rates":[1.921587,2.061837,2.149141,2.217016,2.245239,2.523017,2.642121,2.899876,3.230297,4.170663]},"impnat":{"vat_bn":1885.447053,"kakwani":19.470944,"rate_all":1.993232,"rates":[0.885715,0.988671,1.099231,1.184299,1.25049,1.423479,1.601898,1.796902,2.121978,3.131389]},"low":{"vat_bn":1443.359445,"kakwani":23.905245,"rate_all":1.522938,"rates":[0.475728,0.564437,0.696901,0.759778,0.837187,0.980643,1.154282,1.337724,1.652151,2.588218]},"med":{"vat_bn":2371.335903,"kakwani":18.711736,"rate_all":2.498525,"rates":[1.056451,1.288103,1.392087,1.524469,1.578615,1.858871,2.02408,2.329525,2.70535,3.820059]},"high":{"vat_bn":3209.535712,"kakwani":15.958762,"rate_all":3.385701,"rates":[1.61229,1.988032,2.07198,2.259955,2.28579,2.700072,2.835458,3.26085,3.682035,4.860323]}},"t5":{"headline":{"removed":87.68895,"lo":84.7733,"hi":91.048726,"shortfall":35.763126,"calc":"EUROMOD"},"balanced_half":{"removed":83.949766,"lo":null,"hi":null,"shortfall":38.012549,"calc":"Item-level calculation"},"balanced_maximum":{"removed":70.261594,"lo":null,"hi":null,"shortfall":43.453624,"calc":"Item-level calculation"},"balanced_measured":{"removed":90.197165,"lo":null,"hi":null,"shortfall":34.129363,"calc":"Item-level calculation"},"import_only":{"removed":37.599624,"lo":35.992472,"hi":39.552241,"shortfall":57.800759,"calc":"EUROMOD"},"pass_through_0.5":{"removed":57.406342,"lo":null,"hi":null,"shortfall":null,"calc":"Mixture of EUROMOD liabilities"},"pass_through_0.25":{"removed":33.954539,"lo":null,"hi":null,"shortfall":null,"calc":"Mixture of EUROMOD liabilities"},"formal_only":{"removed":null,"lo":null,"hi":null,"shortfall":65.685935,"calc":"EUROMOD"}},"t6":{"resolved":{"revenue":48.456837,"rate":12.078841,"d1":-0.565798,"d10":0.551058},"formal_only":{"revenue":3.532674,"rate":16.319852,"d1":0.004374,"d10":0.043305},"upstream":{"revenue":44.874114,"rate":10.539931,"d1":-0.540109,"d10":0.514251}},"t7":{"high":{"revenue":64.109144,"burden_half":100.346338,"d1_statutory":1.147032,"d1_chain":0.666238,"d1_chain_half":1.232545}},"grid":{"formal":{"unadj":{"vat_bn":4467.9644,"shortfall":0.0,"kakwani":11.131234,"removed":100.0},"formal":{"vat_bn":1533.14022,"shortfall":65.685935,"kakwani":24.496074,"removed":0.0},"impnat":{"vat_bn":1887.281526,"shortfall":57.759701,"kakwani":19.443835,"removed":37.80246},"chain":{"vat_bn":2874.989274,"shortfall":35.653264,"kakwani":12.73958,"removed":87.965842},"sort50d25":{"vat_bn":2952.970356,"shortfall":33.907926,"kakwani":12.316758,"removed":91.129525},"sort50":{"vat_bn":2769.577228,"shortfall":38.012549,"kakwani":13.276322,"removed":83.949766},"sort50d75":{"vat_bn":2651.658515,"shortfall":40.651754,"kakwani":13.90487,"removed":79.246769},"sort100d25":{"vat_bn":3054.156221,"shortfall":31.643228,"kakwani":11.844316,"removed":94.664492},"sort100":{"vat_bn":2526.471957,"shortfall":43.453624,"kakwani":15.105724,"removed":70.261594},"sort100d75":{"vat_bn":2264.884154,"shortfall":49.308366,"kakwani":16.883093,"removed":56.962749},"reg25":{"vat_bn":2289.919211,"shortfall":48.748043,"kakwani":16.22537,"removed":61.884042},"reg50":{"vat_bn":2500.691662,"shortfall":44.030627,"kakwani":14.730577,"removed":73.06856},"reg150":{"vat_bn":3257.664193,"shortfall":27.088403,"kakwani":11.228579,"removed":99.271628}},"low":{"formal":{"vat_bn":1443.359445,"shortfall":67.695368,"kakwani":23.905245,"removed":0.0},"impnat":{"vat_bn":1802.82484,"shortfall":59.649973,"kakwani":18.764647,"removed":40.24263},"chain":{"vat_bn":2805.615801,"shortfall":37.20595,"kakwani":12.210074,"removed":91.554414},"sort50d25":{"vat_bn":2884.112714,"shortfall":35.449067,"kakwani":11.799279,"removed":94.770274},"sort50":{"vat_bn":2698.511112,"shortfall":39.60312,"kakwani":12.735849,"removed":87.438434},"sort50d75":{"vat_bn":2579.067195,"shortfall":42.27646,"kakwani":13.345135,"removed":82.668704},"sort100d25":{"vat_bn":2986.385586,"shortfall":33.160041,"kakwani":11.347847,"removed":98.304265},"sort100":{"vat_bn":2453.682427,"shortfall":45.082767,"kakwani":14.566337,"removed":73.108653},"sort100d75":{"vat_bn":2188.417055,"shortfall":51.019819,"kakwani":16.306558,"removed":59.485518},"reg25":{"vat_bn":2212.048593,"shortfall":50.490908,"kakwani":15.611278,"removed":64.928441},"reg50":{"vat_bn":2425.735868,"shortfall":45.708254,"kakwani":14.1406,"removed":76.441493},"reg150":{"vat_bn":3193.693823,"shortfall":28.52016,"kakwani":10.762493,"removed":102.886646}},"med":{"formal":{"vat_bn":2371.335903,"shortfall":46.92581,"kakwani":18.711736,"removed":0.0},"impnat":{"vat_bn":2609.972004,"shortfall":41.584763,"kakwani":16.55745,"removed":28.418768},"chain":{"vat_bn":3299.319538,"shortfall":26.156092,"kakwani":12.689195,"removed":79.447782},"sort50d25":{"vat_bn":3343.93337,"shortfall":25.157565,"kakwani":12.411171,"removed":83.115398},"sort50":{"vat_bn":3212.372715,"shortfall":28.102097,"kakwani":13.090541,"removed":74.153324},"sort50d75":{"vat_bn":3133.176783,"shortfall":29.874625,"kakwani":13.501415,"removed":68.733189},"sort100d25":{"vat_bn":3400.294485,"shortfall":23.896115,"kakwani":12.094519,"removed":87.292586},"sort100":{"vat_bn":3026.583839,"shortfall":32.260341,"kakwani":14.347728,"removed":57.56885},"sort100d75":{"vat_bn":2852.025985,"shortfall":36.167218,"kakwani":15.377387,"removed":43.98586},"reg25":{"vat_bn":2883.562956,"shortfall":35.461371,"kakwani":14.918428,"removed":50.040327},"reg50":{"vat_bn":3033.857379,"shortfall":32.097548,"kakwani":14.009542,"removed":62.030105},"reg150":{"vat_bn":3567.330226,"shortfall":20.157595,"kakwani":11.58776,"removed":93.977619}},"high":{"formal":{"vat_bn":3209.535712,"shortfall":28.165593,"kakwani":15.958762,"removed":0.0},"impnat":{"vat_bn":3332.406454,"shortfall":25.415555,"kakwani":14.923468,"removed":21.445627},"chain":{"vat_bn":3722.812549,"shortfall":16.677659,"kakwani":12.655116,"removed":68.433475},"sort50d25":{"vat_bn":3733.896806,"shortfall":16.429576,"kakwani":12.492122,"removed":71.809824},"sort50":{"vat_bn":3654.176876,"shortfall":18.213832,"kakwani":12.955231,"removed":62.21675},"sort50d75":{"vat_bn":3613.815906,"shortfall":19.117173,"kakwani":13.209722,"removed":56.945079},"sort100d25":{"vat_bn":3745.188957,"shortfall":16.17684,"kakwani":12.306906,"removed":75.646496},"sort100":{"vat_bn":3525.473284,"shortfall":21.094419,"kakwani":13.810831,"removed":44.493388},"sort100d75":{"vat_bn":3438.241402,"shortfall":23.046804,"kakwani":14.389863,"removed":32.499012},"reg25":{"vat_bn":3476.567194,"shortfall":22.189013,"kakwani":14.059655,"removed":39.339116},"reg50":{"vat_bn":3566.327218,"shortfall":20.180044,"kakwani":13.506668,"removed":50.79399},"reg150":{"vat_bn":3875.955502,"shortfall":13.250081,"kakwani":11.896979,"removed":84.137933}}},"robust":{"allreg":{"shortfall":18.2,"kakwani":10.0,"removed":108.5},"lam0.25":{"shortfall":35.8,"kakwani":20.0,"removed":34.0},"lam0.5":{"shortfall":35.8,"kakwani":16.8,"removed":57.4},"lam0.75":{"shortfall":35.8,"kakwani":14.5,"removed":74.6}},"informal":{"formal":{"deciles":[78.0426,73.5432,69.314,68.9034,66.1061,66.2729,62.2842,61.8173,57.4313,51.2304],"all":59.5243},"purchase_share":[1.9399,3.0843,4.1536,5.0454,6.0003,7.7537,9.2451,12.3146,17.0645,33.3986],"low":{"deciles":[78.9986,75.2341,70.9014,70.6044,68.1376,68.2115,64.6412,63.4125,59.7145,53.7126],"all":61.652},"med":{"deciles":[66.3955,58.5229,54.6711,53.2905,51.0471,50.6196,47.7833,47.195,43.7146,39.4717],"all":45.9126},"high":{"deciles":[54.7483,43.5026,40.0282,37.6775,35.9881,34.9662,33.2824,32.5727,29.9979,27.713],"all":32.3009}},"basket":{"1":{"taxable_formal":5.1815,"taxable_informal":29.3366,"untaxed_by_law":65.4819,"informal":78.0426},"2":{"taxable_formal":6.0472,"taxable_informal":29.743,"untaxed_by_law":64.2098,"informal":73.5432},"3":{"taxable_formal":6.8801,"taxable_informal":26.6924,"untaxed_by_law":66.4275,"informal":69.314},"4":{"taxable_formal":7.5061,"taxable_informal":26.8237,"untaxed_by_law":65.6702,"informal":68.9034},"5":{"taxable_formal":8.144,"taxable_informal":25.6757,"untaxed_by_law":66.1803,"informal":66.1061},"6":{"taxable_formal":8.692,"taxable_informal":26.3384,"untaxed_by_law":64.9696,"informal":66.2729},"7":{"taxable_formal":10.2995,"taxable_informal":25.0316,"untaxed_by_law":64.6689,"informal":62.2842},"8":{"taxable_formal":10.8552,"taxable_informal":25.2245,"untaxed_by_law":63.9203,"informal":61.8173},"9":{"taxable_formal":12.5673,"taxable_informal":23.9432,"untaxed_by_law":63.4895,"informal":57.4313},"10":{"taxable_formal":18.3561,"taxable_informal":22.7325,"untaxed_by_law":58.9114,"informal":51.2304},"all":{"taxable_formal":12.6783,"taxable_informal":24.63,"untaxed_by_law":62.6917,"informal":59.5243}},"upstream_deciles":{"partial":[0.52358,0.5215,0.52674,0.51337,0.50617,0.49412,0.48654,0.46793,0.46149,0.40748],"impnat":[0.1419,0.14173,0.14188,0.14211,0.13966,0.1332,0.13247,0.12424,0.12087,0.10301]},"context":{"simulated_pct_reported":61.0294276760613,"reported_year":"2023/24"},"states":{"chain/formal/sort50":{"P":[1.803373,1.943014,2.03647,2.112445,2.15386,2.41066,2.54339,2.781085,3.1137,4.067667],"ush":[0.480023,0.479447,0.485442,0.475781,0.472502,0.457239,0.452933,0.430911,0.425659,0.377306],"ushE":0.428705,"dc":{"removed":83.949766,"ubar":0.421298,"ubarE":0.428705,"sEF":0.341001,"acc":0.687559,"grad":1.220982},"border":{"sfB":57.759701,"ubarB":0.120669},"ch":{"invoice":17.8032,"border_final":7.0923,"producer_invoice":12.6012,"inherited":3.2403,"wholesale_inputs":0.5578,"retail_inputs":0.5625,"total":41.8573}},"chain/formal/sort100":{"P":[1.470914,1.617083,1.726272,1.830086,1.899404,2.129694,2.289883,2.499008,2.845528,3.83943],"ush":[0.357523,0.364107,0.371732,0.374273,0.378749,0.365013,0.366646,0.343015,0.343243,0.310439],"ushE":0.343707,"dc":{"removed":70.261594,"ubar":0.338464,"ubarE":0.343707,"sEF":0.341001,"acc":0.605647,"grad":1.160108},"border":{"sfB":57.759701,"ubarB":0.120669},"ch":{"invoice":3.8045,"border_final":10.8136,"producer_invoice":13.0593,"inherited":4.1159,"wholesale_inputs":0.694,"retail_inputs":0.5501,"total":33.0374}},"chain/formal/sortm":{"P":[1.970984,2.124791,2.218882,2.304549,2.342419,2.615728,2.740598,2.978593,3.311369,4.241245],"ush":[0.541783,0.543774,0.55231,0.544842,0.541977,0.524551,0.520058,0.492455,0.486409,0.428158],"ushE":0.489157,"dc":{"removed":90.197165,"ubar":0.480416,"ubarE":0.489157,"sEF":0.341001,"acc":0.737399,"grad":1.223181},"border":{"sfB":57.759701,"ubarB":0.120669},"ch":{"invoice":27.3832,"border_final":6.9686,"producer_invoice":9.1193,"inherited":3.0409,"wholesale_inputs":0.4883,"retail_inputs":0.5778,"total":47.5781}},"chain/formal/reg25":{"P":[1.290648,1.411324,1.51652,1.596834,1.656198,1.869095,2.028206,2.242693,2.576147,3.570999],"ush":[0.2911,0.291293,0.294842,0.290419,0.28914,0.279473,0.277577,0.263146,0.260454,0.231797],"ushE":0.262271,"dc":{"removed":61.884042,"ubar":0.257862,"ubarE":0.262271,"sEF":0.341001,"acc":0.510416,"grad":1.212424},"border":{"sfB":57.759701,"ubarB":0.120669},"ch":{"invoice":6.797,"border_final":6.7856,"producer_invoice":8.5115,"inherited":2.818,"wholesale_inputs":0.3557,"retail_inputs":0.299,"total":25.5668}},"chain/formal/reg50":{"P":[1.527066,1.653503,1.751279,1.824731,1.872392,2.107128,2.251553,2.481472,2.812209,3.786581],"ush":[0.378213,0.376995,0.380899,0.372348,0.368796,0.357606,0.353599,0.33755,0.333003,0.294956],"ushE":0.335438,"dc":{"removed":73.06856,"ubar":0.32968,"ubarE":0.335438,"sEF":0.341001,"acc":0.596807,"grad":1.224326},"border":{"sfB":57.759701,"ubarB":0.120669},"ch":{"invoice":13.4522,"border_final":5.9019,"producer_invoice":9.7259,"inherited":2.9981,"wholesale_inputs":0.4007,"retail_inputs":0.3818,"total":32.8606}},"chain/formal/reg150":{"P":[2.322471,2.483993,2.562588,2.629314,2.641153,2.959837,3.056472,3.338955,3.666995,4.573715],"ush":[0.671294,0.670888,0.678303,0.661595,0.652044,0.637503,0.627574,0.604746,0.595703,0.525562],"ushE":0.597744,"dc":{"removed":99.271628,"ubar":0.587607,"ubarE":0.597744,"sEF":0.341001,"acc":0.813352,"grad":1.220524},"border":{"sfB":57.759701,"ubarB":0.120669},"ch":{"invoice":46.7434,"border_final":2.4132,"producer_invoice":6.3808,"inherited":2.334,"wholesale_inputs":0.2872,"retail_inputs":0.7017,"total":58.8603}},"chain/formal/allreg":{"P":[2.73553,2.916004,2.98534,3.050511,3.046076,3.405884,3.479683,3.785808,4.113438,4.987284],"ush":[0.823493,0.823767,0.833273,0.813014,0.801237,0.783915,0.771625,0.743987,0.732908,0.646725],"ushE":0.73507,"dc":{"removed":108.522959,"ubar":0.722672,"ubarE":0.73507,"sEF":0.341001,"acc":0.89055,"grad":1.218606},"border":{"sfB":57.759701,"ubarB":0.120669},"ch":{"invoice":69.8492,"border_final":0.5007,"producer_invoice":0.0,"inherited":0.9427,"wholesale_inputs":0.0952,"retail_inputs":0.999,"total":72.3868}},"import/low/headline":{"P":[0.864299,0.968971,1.087572,1.160526,1.220523,1.391011,1.552826,1.742758,2.051148,2.951586],"ush":[0.141875,0.141963,0.142411,0.142571,0.139479,0.133083,0.13301,0.123876,0.119806,0.100798],"ushE":0.121549,"dc":{"removed":40.24263,"ubar":0.118847,"ubarE":0.121549,"sEF":0.32229,"acc":0.300369,"grad":1.339771}},"chain/low/headline":{"P":[1.909434,2.050348,2.144559,2.203677,2.228723,2.500631,2.607573,2.860715,3.173391,4.02448],"ush":[0.523474,0.52145,0.527713,0.513686,0.506317,0.492935,0.485021,0.465792,0.456779,0.398418],"ushE":0.458688,"dc":{"removed":91.554414,"ubar":0.450391,"ubarE":0.458688,"sEF":0.32229,"acc":0.724457,"grad":1.263766},"border":{"sfB":59.649973,"ubarB":0.118847},"ch":{"invoice":27.4728,"border_final":4.2064,"producer_invoice":9.5062,"inherited":2.9237,"wholesale_inputs":0.3966,"retail_inputs":0.5392,"total":45.0449}},"chain/low/sort50":{"P":[1.784791,1.924062,2.025124,2.091782,2.12802,2.381666,2.501724,2.733822,3.051364,3.914709],"ush":[0.477964,0.477133,0.484176,0.473878,0.469676,0.454354,0.449695,0.426983,0.420138,0.367968],"ushE":0.422696,"dc":{"removed":87.438434,"ubar":0.41498,"ubarE":0.422696,"sEF":0.32229,"acc":0.694361,"grad":1.259265},"border":{"sfB":59.649973,"ubarB":0.118847},"ch":{"invoice":17.5223,"border_final":6.9978,"producer_invoice":12.3747,"inherited":3.2055,"wholesale_inputs":0.5463,"retail_inputs":0.5509,"total":41.1975}},"chain/low/sort100":{"P":[1.449942,1.596892,1.714467,1.808079,1.870579,2.099245,2.246974,2.448808,2.781606,3.68456],"ush":[0.355704,0.36232,0.370932,0.372947,0.376005,0.362765,0.364674,0.339814,0.339139,0.304124],"ushE":0.339472,"dc":{"removed":73.108653,"ubar":0.334035,"ubarE":0.339472,"sEF":0.32229,"acc":0.614592,"grad":1.189547},"border":{"sfB":59.649973,"ubarB":0.118847},"ch":{"invoice":3.763,"border_final":10.6431,"producer_invoice":12.8927,"inherited":4.0538,"wholesale_inputs":0.6799,"retail_inputs":0.5389,"total":32.5714}},"chain/low/sortm":{"P":[1.952914,2.105868,2.207919,2.284599,2.317287,2.587051,2.700825,2.930665,3.249775,4.090803],"ush":[0.539349,0.540934,0.55081,0.542474,0.538542,0.520961,0.516142,0.487185,0.479715,0.416816],"ushE":0.481817,"dc":{"removed":93.811685,"ubar":0.472705,"ubarE":0.481817,"sEF":0.32229,"acc":0.742602,"grad":1.263283},"border":{"sfB":59.649973,"ubarB":0.118847},"ch":{"invoice":26.8531,"border_final":6.8787,"producer_invoice":8.9879,"inherited":3.0091,"wholesale_inputs":0.4784,"retail_inputs":0.566,"total":46.7732},"agg":{"shortfall":35.695421,"removed":93.811685,"kakwani":11.92173}},"chain/low/reg25":{"P":[1.269418,1.390519,1.503703,1.57298,1.626885,1.837064,1.980425,2.190681,2.508497,3.404217],"ush":[0.289791,0.289897,0.294103,0.289307,0.287336,0.277739,0.275716,0.260868,0.257133,0.226357],"ushE":0.258732,"dc":{"removed":64.928441,"ubar":0.254145,"ubarE":0.258732,"sEF":0.32229,"acc":0.519922,"grad":1.24881},"border":{"sfB":59.649973,"ubarB":0.118847},"ch":{"invoice":6.6885,"border_final":6.6929,"producer_invoice":8.3732,"inherited":2.7827,"wholesale_inputs":0.3481,"retail_inputs":0.2926,"total":25.178}},"chain/low/reg50":{"P":[1.507393,1.633689,1.739087,1.80231,1.845093,2.076562,2.206136,2.432009,2.746914,3.625349],"ush":[0.376681,0.375232,0.379907,0.370894,0.366731,0.355408,0.351045,0.334676,0.328722,0.287699],"ushE":0.330796,"dc":{"removed":76.441493,"ubar":0.324795,"ubarE":0.330796,"sEF":0.32229,"acc":0.605328,"grad":1.262811},"border":{"sfB":59.649973,"ubarB":0.118847},"ch":{"invoice":13.2414,"border_final":5.8297,"producer_invoice":9.5475,"inherited":2.9661,"wholesale_inputs":0.3922,"retail_inputs":0.3738,"total":32.3507}},"chain/low/reg150":{"P":[2.307986,2.467336,2.552618,2.611986,2.620768,2.934354,3.020163,3.298066,3.610164,4.434252],"ush":[0.668993,0.667784,0.676463,0.658947,0.648965,0.633592,0.622718,0.599551,0.587928,0.512088],"ushE":0.589289,"dc":{"removed":102.886646,"ubar":0.578699,"ubarE":0.589289,"sEF":0.32229,"acc":0.816577,"grad":1.259974},"border":{"sfB":59.649973,"ubarB":0.118847},"ch":{"invoice":45.981,"border_final":2.418,"producer_invoice":6.2441,"inherited":2.3199,"wholesale_inputs":0.2813,"retail_inputs":0.6874,"total":57.9317}},"chain/low/allreg":{"P":[2.723381,2.900767,2.976497,3.035745,3.028848,3.382885,3.448223,3.749027,4.060822,4.859568],"ush":[0.820661,0.819888,0.830979,0.809704,0.797447,0.779051,0.765579,0.737473,0.723246,0.630071],"ushE":0.724603,"dc":{"removed":112.073405,"ubar":0.711651,"ubarE":0.724603,"sEF":0.32229,"acc":0.890875,"grad":1.258014},"border":{"sfB":59.649973,"ubarB":0.118847},"ch":{"invoice":68.6657,"border_final":0.5464,"producer_invoice":0.0,"inherited":0.9545,"wholesale_inputs":0.0932,"retail_inputs":0.9787,"total":71.2385},"agg":{"shortfall":19.519905,"removed":112.073405,"kakwani":9.588975}},"import/med/headline":{"P":[1.357773,1.581819,1.672409,1.805216,1.847417,2.138086,2.292051,2.594444,2.961237,4.048746],"ush":[0.139623,0.13816,0.136871,0.137206,0.133938,0.12661,0.126012,0.1163,0.112371,0.096368],"ushE":0.116424,"dc":{"removed":28.418768,"ubar":0.113819,"ubarE":0.116424,"sEF":0.528748,"acc":0.199489,"grad":1.424578}},"chain/med/headline":{"P":[2.165024,2.375532,2.450211,2.55209,2.569358,2.918655,3.032167,3.361255,3.716799,4.752098],"ush":[0.513678,0.511513,0.516642,0.502216,0.493663,0.480558,0.474048,0.452934,0.444171,0.392756],"ushE":0.450631,"dc":{"removed":79.447782,"ubar":0.442608,"ubarE":0.450631,"sEF":0.528748,"acc":0.60805,"grad":1.306599},"border":{"sfB":41.584763,"ubarB":0.113819},"ch":{"invoice":27.3924,"border_final":3.987,"producer_invoice":9.109,"inherited":2.9518,"wholesale_inputs":0.4067,"retail_inputs":0.5529,"total":44.3998}},"chain/med/sort50":{"P":[2.063268,2.271939,2.350543,2.460503,2.485037,2.818865,2.942425,3.257525,3.617503,4.666533],"ush":[0.466528,0.462784,0.467978,0.457456,0.451648,0.435308,0.431847,0.407396,0.400565,0.3567],"ushE":0.408507,"dc":{"removed":74.153324,"ubar":0.401138,"ubarE":0.408507,"sEF":0.528748,"acc":0.566381,"grad":1.309248},"border":{"sfB":41.584763,"ubarB":0.113819},"ch":{"invoice":17.4071,"border_final":6.6297,"producer_invoice":11.54,"inherited":3.2361,"wholesale_inputs":0.5586,"retail_inputs":0.5633,"total":39.9348}},"chain/med/sort100":{"P":[1.795543,2.015553,2.104474,2.241301,2.282565,2.598722,2.743129,3.041227,3.415444,4.500149],"ush":[0.342472,0.342184,0.347832,0.350328,0.350761,0.335485,0.338129,0.31244,0.311833,0.286586],"ushE":0.3175,"dc":{"removed":57.56885,"ubar":0.312525,"ubarE":0.3175,"sEF":0.528748,"acc":0.468034,"grad":1.230015},"border":{"sfB":41.584763,"ubarB":0.113819},"ch":{"invoice":3.7116,"border_final":10.0845,"producer_invoice":11.373,"inherited":4.1131,"wholesale_inputs":0.692,"retail_inputs":0.5485,"total":30.5227}},"chain/med/sortm":{"P":[2.187063,2.395585,2.473046,2.588473,2.608645,2.951002,3.070207,3.381706,3.740245,4.775352],"ush":[0.52389,0.520946,0.527792,0.519998,0.513239,0.495226,0.491936,0.461912,0.454467,0.402555],"ushE":0.462757,"dc":{"removed":81.131775,"ubar":0.45415,"ubarE":0.462757,"sEF":0.528748,"acc":0.619634,"grad":1.30935},"border":{"sfB":41.584763,"ubarB":0.113819},"ch":{"invoice":26.5204,"border_final":6.5259,"producer_invoice":7.8884,"inherited":3.0594,"wholesale_inputs":0.4869,"retail_inputs":0.5761,"total":45.0571},"agg":{"shortfall":25.614433,"removed":81.131775,"kakwani":12.56154}},"chain/med/reg25":{"P":[1.66622,1.88391,1.971726,2.093649,2.130851,2.442396,2.584036,2.892694,3.259951,4.337919],"ush":[0.282548,0.28026,0.283016,0.278168,0.275166,0.264599,0.263317,0.247234,0.243549,0.218224],"ushE":0.248673,"dc":{"removed":50.040327,"ubar":0.24431,"ubarE":0.248673,"sEF":0.528748,"acc":0.384981,"grad":1.299813},"border":{"sfB":41.584763,"ubarB":0.113819},"ch":{"invoice":6.7229,"border_final":6.3511,"producer_invoice":7.7006,"inherited":2.8309,"wholesale_inputs":0.3598,"retail_inputs":0.3024,"total":24.2677}},"chain/med/reg50":{"P":[1.852019,2.065671,2.148244,2.261001,2.290637,2.615088,2.746104,3.062143,3.424396,4.485962],"ush":[0.368642,0.365758,0.369203,0.359956,0.354783,0.342906,0.339528,0.321622,0.315764,0.280608],"ushE":0.321762,"dc":{"removed":62.030105,"ubar":0.315994,"ubarE":0.321762,"sEF":0.528748,"acc":0.472916,"grad":1.311651},"border":{"sfB":41.584763,"ubarB":0.113819},"ch":{"invoice":13.2744,"border_final":5.526,"producer_invoice":8.9699,"inherited":3.0052,"wholesale_inputs":0.4043,"retail_inputs":0.3853,"total":31.5651}},"chain/med/reg150":{"P":[2.473728,2.682712,2.750722,2.845034,2.850636,3.224973,3.322241,3.662562,4.012428,5.022639],"ush":[0.656722,0.656007,0.66337,0.645383,0.633817,0.619457,0.610454,0.585209,0.573994,0.506761],"ushE":0.580682,"dc":{"removed":93.977619,"ubar":0.570437,"ubarE":0.580682,"sEF":0.528748,"acc":0.723685,"grad":1.298598},"border":{"sfB":41.584763,"ubarB":0.113819},"ch":{"invoice":45.6152,"border_final":2.3035,"producer_invoice":6.0381,"inherited":2.3334,"wholesale_inputs":0.2871,"retail_inputs":0.7016,"total":57.2789}},"chain/med/allreg":{"P":[2.794526,2.999883,3.060695,3.146851,3.141263,3.538464,3.620015,3.969547,4.31372,5.300174],"ush":[0.80537,0.8052,0.814718,0.792887,0.77863,0.76161,0.750481,0.719977,0.706304,0.623713],"ushE":0.714053,"dc":{"removed":106.908486,"ubar":0.70153,"ubarE":0.714053,"sEF":0.528748,"acc":0.825259,"grad":1.295454},"border":{"sfB":41.584763,"ubarB":0.113819},"ch":{"invoice":67.8883,"border_final":0.5392,"producer_invoice":0.0,"inherited":0.9212,"wholesale_inputs":0.0949,"retail_inputs":0.9963,"total":70.4399},"agg":{"shortfall":14.005924,"removed":106.908486,"kakwani":10.607536}},"import/high/headline":{"P":[1.827302,2.172171,2.242853,2.423568,2.441427,2.850387,2.979639,3.38953,3.79866,4.964291],"ush":[0.134192,0.129132,0.12489,0.12483,0.119745,0.110192,0.109629,0.095563,0.089678,0.078007],"ushE":0.100313,"dc":{"removed":21.445627,"ubar":0.097638,"ubarE":0.100313,"sEF":0.716495,"acc":0.13466,"grad":1.592576}},"chain/high/headline":{"P":[2.402288,2.681575,2.74385,2.879767,2.884998,3.307875,3.414773,3.81583,4.198631,5.328713],"ush":[0.49305,0.486363,0.491066,0.472891,0.46102,0.445564,0.440486,0.412148,0.397236,0.351431],"ushE":0.416174,"dc":{"removed":68.433475,"ubar":0.407871,"ubarE":0.416174,"sEF":0.716495,"acc":0.498721,"grad":1.372179},"border":{"sfB":25.415555,"ubarB":0.097638},"ch":{"invoice":26.1846,"border_final":3.3906,"producer_invoice":7.7151,"inherited":2.9579,"wholesale_inputs":0.4109,"retail_inputs":0.5586,"total":41.2177}},"chain/high/sort50":{"P":[2.321562,2.599601,2.663469,2.807469,2.814694,3.225981,3.340146,3.732646,4.120448,5.26461],"ush":[0.442668,0.428877,0.432316,0.417731,0.406929,0.38553,0.383743,0.350373,0.337116,0.303335],"ushE":0.36075,"dc":{"removed":62.21675,"ubar":0.35333,"ubarE":0.36075,"sEF":0.716495,"acc":0.4406,"grad":1.412091},"border":{"sfB":25.415555,"ubarB":0.097638},"ch":{"invoice":16.4781,"border_final":5.5446,"producer_invoice":9.0509,"inherited":3.2262,"wholesale_inputs":0.5603,"retail_inputs":0.565,"total":35.4251}},"chain/high/sort100":{"P":[2.118227,2.412456,2.481262,2.651168,2.663851,3.066399,3.194763,3.58182,3.984293,5.159899],"ush":[0.315763,0.297637,0.299142,0.298479,0.290873,0.268544,0.2732,0.238364,0.232421,0.22477],"ushE":0.255591,"dc":{"removed":44.493388,"ubar":0.251057,"ubarE":0.255591,"sEF":0.716495,"acc":0.323961,"grad":1.373417},"border":{"sfB":25.415555,"ubarB":0.097638},"ch":{"invoice":3.4936,"border_final":8.3742,"producer_invoice":7.4181,"inherited":4.1067,"wholesale_inputs":0.6872,"retail_inputs":0.5447,"total":24.6245}},"chain/high/sortm":{"P":[2.401146,2.66479,2.725771,2.871025,2.872961,3.284907,3.398169,3.783164,4.16804,5.308471],"ush":[0.492337,0.474593,0.477852,0.466222,0.451759,0.428727,0.427861,0.387889,0.373713,0.336243],"ushE":0.400381,"dc":{"removed":68.227998,"ubar":0.391905,"ubarE":0.400381,"sEF":0.716495,"acc":0.482384,"grad":1.414393},"border":{"sfB":25.415555,"ubarB":0.097638},"ch":{"invoice":24.497,"border_final":5.4874,"producer_invoice":5.0014,"inherited":3.1026,"wholesale_inputs":0.4836,"retail_inputs":0.5721,"total":39.1441},"agg":{"shortfall":17.127356,"removed":68.227998,"kakwani":12.665036}},"chain/high/reg25":{"P":[2.040754,2.355685,2.426195,2.58976,2.604525,3.014994,3.139019,3.541844,3.943202,5.104331],"ush":[0.267411,0.257825,0.258893,0.251628,0.245229,0.230861,0.230815,0.208676,0.200824,0.183078],"ushE":0.216544,"dc":{"removed":39.339116,"ubar":0.212194,"ubarE":0.216544,"sEF":0.716495,"acc":0.278375,"grad":1.41317},"border":{"sfB":25.415555,"ubarB":0.097638},"ch":{"invoice":6.549,"border_final":5.3321,"producer_invoice":5.7987,"inherited":2.8613,"wholesale_inputs":0.3693,"retail_inputs":0.3104,"total":21.2208}},"chain/high/reg50":{"P":[2.175838,2.476956,2.544405,2.696505,2.707815,3.122287,3.23973,3.641888,4.035983,5.18479],"ush":[0.351719,0.342869,0.345292,0.33307,0.324699,0.309514,0.307391,0.282972,0.272167,0.243446],"ushE":0.289408,"dc":{"removed":50.79399,"ubar":0.283521,"ubarE":0.289408,"sEF":0.716495,"acc":0.362419,"grad":1.401526},"border":{"sfB":25.415555,"ubarB":0.097638},"ch":{"invoice":12.8572,"border_final":4.6443,"producer_invoice":7.1967,"inherited":3.0218,"wholesale_inputs":0.413,"retail_inputs":0.3935,"total":28.5265}},"chain/high/reg150":{"P":[2.623286,2.880113,2.93765,3.059608,3.058523,3.488975,3.586622,3.984782,4.356965,5.470733],"ush":[0.630978,0.625593,0.632714,0.610103,0.594526,0.578324,0.571153,0.537618,0.518986,0.457989],"ushE":0.540177,"dc":{"removed":84.137933,"ubar":0.529565,"ubarE":0.540177,"sEF":0.716495,"acc":0.621152,"grad":1.354547},"border":{"sfB":25.415555,"ubarB":0.097638},"ch":{"invoice":42.969,"border_final":2.0463,"producer_invoice":5.2343,"inherited":2.3319,"wholesale_inputs":0.287,"retail_inputs":0.7014,"total":53.5699}},"chain/high/allreg":{"P":[2.85143,3.082133,3.134561,3.241774,3.234478,3.669642,3.758633,4.151574,4.512895,5.612038],"ush":[0.773366,0.767264,0.776634,0.749088,0.729903,0.710766,0.701943,0.661484,0.638888,0.564009],"ushE":0.664155,"dc":{"removed":99.085999,"ubar":0.651202,"ubarE":0.664155,"sEF":0.716495,"acc":0.734046,"grad":1.34986},"border":{"sfB":25.415555,"ubarB":0.097638},"ch":{"invoice":63.289,"border_final":0.6295,"producer_invoice":0.0,"inherited":0.8707,"wholesale_inputs":0.0943,"retail_inputs":0.9898,"total":65.8733},"agg":{"shortfall":9.824103,"removed":99.085999,"kakwani":11.175357}},"import/formal/headline":{"ush":[0.141896,0.141725,0.141875,0.142114,0.139658,0.133203,0.132472,0.124235,0.120875,0.103005],"ushE":0.122632,"dc":{"removed":37.599624,"ubar":0.120044,"ubarE":0.122632,"sEF":0.341001,"acc":0.290724,"grad":1.293309}},"chain/formal/headline":{"ush":[0.523582,0.521495,0.526744,0.513374,0.506171,0.494119,0.486539,0.467927,0.461493,0.40748],"ushE":0.463476,"dc":{"removed":87.68895,"ubar":0.455544,"ubarE":0.463476,"sEF":0.341001,"acc":0.716977,"grad":1.223038},"border":{"sfB":57.759701,"ubarB":0.120669},"ch":{"invoice":27.9074,"border_final":4.2412,"producer_invoice":9.7033,"inherited":2.9491,"wholesale_inputs":0.405,"retail_inputs":0.5506,"total":45.7566}}},"basket_cls":{"formal":{"1":{"taxable_formal":5.1815,"taxable_informal":29.3366,"untaxed_by_law":65.4819},"2":{"taxable_formal":6.0472,"taxable_informal":29.743,"untaxed_by_law":64.2098},"3":{"taxable_formal":6.8801,"taxable_informal":26.6924,"untaxed_by_law":66.4275},"4":{"taxable_formal":7.5061,"taxable_informal":26.8237,"untaxed_by_law":65.6702},"5":{"taxable_formal":8.144,"taxable_informal":25.6757,"untaxed_by_law":66.1803},"6":{"taxable_formal":8.692,"taxable_informal":26.3384,"untaxed_by_law":64.9696},"7":{"taxable_formal":10.2995,"taxable_informal":25.0316,"untaxed_by_law":64.6689},"8":{"taxable_formal":10.8552,"taxable_informal":25.2245,"untaxed_by_law":63.9203},"9":{"taxable_formal":12.5673,"taxable_informal":23.9432,"untaxed_by_law":63.4895},"10":{"taxable_formal":18.3561,"taxable_informal":22.7325,"untaxed_by_law":58.9114},"all":{"taxable_formal":12.6783,"taxable_informal":24.63,"untaxed_by_law":62.6917}},"low":{"1":{"taxable_formal":4.9136,"taxable_informal":29.6045,"untaxed_by_law":65.4819},"2":{"taxable_formal":5.8005,"taxable_informal":29.9897,"untaxed_by_law":64.2098},"3":{"taxable_formal":6.7363,"taxable_informal":26.8362,"untaxed_by_law":66.4275},"4":{"taxable_formal":7.2265,"taxable_informal":27.1032,"untaxed_by_law":65.6702},"5":{"taxable_formal":7.8225,"taxable_informal":25.9972,"untaxed_by_law":66.1803},"6":{"taxable_formal":8.3722,"taxable_informal":26.6581,"untaxed_by_law":64.9696},"7":{"taxable_formal":9.8028,"taxable_informal":25.5283,"untaxed_by_law":64.6689},"8":{"taxable_formal":10.3856,"taxable_informal":25.6941,"untaxed_by_law":63.9203},"9":{"taxable_formal":12.0006,"taxable_informal":24.5099,"untaxed_by_law":63.4895},"10":{"taxable_formal":17.0819,"taxable_informal":24.0066,"untaxed_by_law":58.9114},"all":{"taxable_formal":11.9753,"taxable_informal":25.3329,"untaxed_by_law":62.6917}},"med":{"1":{"taxable_formal":11.353,"taxable_informal":23.1652,"untaxed_by_law":65.4819},"2":{"taxable_formal":13.5411,"taxable_informal":22.2491,"untaxed_by_law":64.2098},"3":{"taxable_formal":13.6706,"taxable_informal":19.9019,"untaxed_by_law":66.4275},"4":{"taxable_formal":14.702,"taxable_informal":19.6277,"untaxed_by_law":65.6702},"5":{"taxable_formal":14.9402,"taxable_informal":18.8795,"untaxed_by_law":66.1803},"6":{"taxable_formal":16.0358,"taxable_informal":18.9946,"untaxed_by_law":64.9696},"7":{"taxable_formal":17.2879,"taxable_informal":18.0432,"untaxed_by_law":64.6689},"8":{"taxable_formal":18.2234,"taxable_informal":17.8563,"untaxed_by_law":63.9203},"9":{"taxable_formal":19.7603,"taxable_informal":16.7502,"untaxed_by_law":63.4895},"10":{"taxable_formal":25.301,"taxable_informal":15.7876,"untaxed_by_law":58.9114},"all":{"taxable_formal":19.7519,"taxable_informal":17.5564,"untaxed_by_law":62.6917}},"high":{"1":{"taxable_formal":17.5245,"taxable_informal":16.9936,"untaxed_by_law":65.4819},"2":{"taxable_formal":21.035,"taxable_informal":14.7552,"untaxed_by_law":64.2098},"3":{"taxable_formal":20.4612,"taxable_informal":13.1113,"untaxed_by_law":66.4275},"4":{"taxable_formal":21.898,"taxable_informal":12.4318,"untaxed_by_law":65.6702},"5":{"taxable_formal":21.7364,"taxable_informal":12.0832,"untaxed_by_law":66.1803},"6":{"taxable_formal":23.3796,"taxable_informal":11.6508,"untaxed_by_law":64.9696},"7":{"taxable_formal":24.2763,"taxable_informal":11.0548,"untaxed_by_law":64.6689},"8":{"taxable_formal":25.5916,"taxable_informal":10.488,"untaxed_by_law":63.9203},"9":{"taxable_formal":26.9533,"taxable_informal":9.5572,"untaxed_by_law":63.4895},"10":{"taxable_formal":32.2459,"taxable_informal":8.8427,"untaxed_by_law":58.9114},"all":{"taxable_formal":26.8255,"taxable_informal":10.4828,"untaxed_by_law":62.6917}}}},"MZ":{"code":"MZ","name":"Mozambique","model":"MOZMOD","currency":"MZN","year":"2022","table1":{"Survey":"IOF 2022","Households":"15,385","Persons":"70,470","Tax-benefit model":"MOZMOD","Simulated policy system":"2022","Standard VAT rate (%)":"17","VAT turnover threshold":"MZN 0.75 m / 2.5 m","Input-output table":"SAM 2019","Informal share of spending (%)":"49","Decile 1 / decile 10 (%)":"76 / 36"},"table2":[["Registered suppliers (every scenario)","identified utilities, telecoms, pay television, insurance"],["Recorded formal","shop (loja)"],["Recorded informal","market, street vendor"],["Informal in every scenario","local brews, street food"],["No outlet recorded","other, modules without outlet fields: formal; missing: item-specific assignments"],["Ambiguous (medium, high); informal in headline","market (mercado)"]],"chain":{"ubar":0.573645038115892,"ubarB":0.28889459205546,"ubarE":0.573645038115899,"ubarBE":0.288894592055462,"phiW":0.559387090838312,"wholesale_margin":0.286211426495301,"reg_input_share":0.566664628489726,"production_groups":52,"production_source":"UNU-WIDER 2019 SAM for Mozambique (52 commodities, mn MZN)","channels":{"invoice":30.07,"border_final":11.02,"producer_invoice":8.33,"inherited":4.65,"wholesale_inputs":0.75,"retail_inputs":3.12,"total":57.93},"ucat":[{"group":"Primary products","share":11.0,"uB":0.18,"u":0.62},{"group":"Processed food","share":19.0,"uB":0.24,"u":0.62},{"group":"Other goods","share":51.0,"uB":0.37,"u":0.63},{"group":"Services","share":18.0,"uB":0.21,"u":0.39}]},"decomp":{"removed":70.3520590448905,"accounting":0.695499495234342,"gradient":1.01153285555133,"sF":0.5890648700899205,"sEF":0.5890648618506413,"gradientB":0.9438139769074813,"border_share":0.118717,"chain_share":0.117014,"lost_share":0.175204},"components":{"KF":26.1,"KI":4.8,"KU":4.5,"KU_KI":-0.2,"sEF":0.59,"etaU":0.29,"ubarE":0.57},"scen":{"unadj":{"vat_bn":34.967687,"kakwani":17.320115,"rate_all":4.605037,"rates":[1.991938,2.09113,2.297629,2.471419,2.529423,2.815559,3.123035,3.598052,4.345658,6.440225]},"formal":{"vat_bn":20.598236,"kakwani":26.062273,"rate_all":2.712666,"rates":[0.713848,0.734128,0.767059,0.866422,0.877745,1.109619,1.292605,1.578988,2.260937,4.453793]},"partial":{"vat_bn":28.8412,"kakwani":19.911985,"rate_all":3.798215,"rates":[1.441938,1.518469,1.664244,1.791732,1.816333,2.086795,2.350683,2.756533,3.465641,5.583181]},"impnat":{"vat_bn":24.749492,"kakwani":22.694482,"rate_all":3.259362,"rates":[1.023346,1.096079,1.192959,1.312259,1.334033,1.584562,1.818593,2.166207,2.878251,5.035004]},"low":{"vat_bn":10.6002,"kakwani":30.262596,"rate_all":1.395984,"rates":[0.175432,0.193147,0.254609,0.268486,0.323415,0.41474,0.541677,0.707884,1.148596,2.435981]},"med":{"vat_bn":26.201255,"kakwani":20.669915,"rate_all":3.45055,"rates":[1.26901,1.329441,1.445478,1.556596,1.584591,1.843153,2.062853,2.433415,3.134055,5.142282]},"high":{"vat_bn":31.804275,"kakwani":17.177531,"rate_all":4.188435,"rates":[1.824185,1.924754,2.123896,2.246764,2.291434,2.576686,2.833099,3.287846,4.007172,5.830772]}},"t5":{"headline":{"removed":70.352059,"lo":69.077274,"hi":71.758693,"shortfall":17.520424,"calc":"EUROMOD"},"balanced_half":{"removed":71.299146,"lo":null,"hi":null,"shortfall":15.850985,"calc":"Item-level calculation"},"balanced_maximum":{"removed":71.434003,"lo":null,"hi":null,"shortfall":13.647489,"calc":"Item-level calculation"},"balanced_measured":{"removed":76.92634,"lo":null,"hi":null,"shortfall":12.587058,"calc":"Item-level calculation"},"import_only":{"removed":38.523561,"lo":37.271359,"hi":39.712325,"shortfall":29.22182,"calc":"EUROMOD"},"pass_through_0.5":{"removed":41.040877,"lo":null,"hi":null,"shortfall":null,"calc":"Mixture of EUROMOD liabilities"},"pass_through_0.25":{"removed":22.386688,"lo":null,"hi":null,"shortfall":null,"calc":"Mixture of EUROMOD liabilities"},"formal_only":{"removed":null,"lo":null,"hi":null,"shortfall":41.093514,"calc":"EUROMOD"}},"t6":{"resolved":{"revenue":36.731178,"rate":13.366384,"d1":-0.454935,"d10":0.605821},"formal_only":{"revenue":10.283228,"rate":14.473398,"d1":0.010991,"d10":0.11609},"upstream":{"revenue":36.282211,"rate":11.763389,"d1":-0.499205,"d10":0.641738}},"t7":{"high":{"revenue":52.728641,"burden_half":114.255834,"d1_statutory":1.127901,"d1_chain":0.578306,"d1_chain_half":1.443106}},"grid":{"formal":{"unadj":{"vat_bn":34.967687,"shortfall":0.0,"kakwani":17.320115,"removed":100.0},"formal":{"vat_bn":20.598236,"shortfall":41.093514,"kakwani":26.062273,"removed":0.0},"impnat":{"vat_bn":24.749526,"shortfall":29.221723,"kakwani":22.694521,"removed":38.523121},"chain":{"vat_bn":28.841331,"shortfall":17.520049,"kakwani":19.912015,"removed":70.351712},"sort50d25":{"vat_bn":29.730674,"shortfall":14.976722,"kakwani":19.541495,"removed":74.590031},"sort50":{"vat_bn":29.424964,"shortfall":15.850985,"kakwani":19.829189,"removed":71.299146},"sort50d75":{"vat_bn":28.594406,"shortfall":18.226201,"kakwani":20.280303,"removed":66.138928},"sort100d25":{"vat_bn":31.016238,"shortfall":11.300288,"kakwani":19.057583,"removed":80.125406},"sort100":{"vat_bn":30.195476,"shortfall":13.647489,"kakwani":19.8174,"removed":71.434003},"sort100d75":{"vat_bn":28.046651,"shortfall":19.792663,"kakwani":20.96292,"removed":58.330593},"reg25":{"vat_bn":26.041556,"shortfall":25.526799,"kakwani":21.761516,"removed":49.195596},"reg50":{"vat_bn":27.079661,"shortfall":22.558043,"kakwani":21.042783,"removed":57.417054},"reg150":{"vat_bn":30.681824,"shortfall":12.256638,"kakwani":18.83765,"removed":82.641184}},"low":{"formal":{"vat_bn":10.6002,"shortfall":69.685727,"kakwani":30.262596,"removed":0.0},"impnat":{"vat_bn":17.80409,"shortfall":49.084165,"kakwani":23.347899,"removed":53.426364},"chain":{"vat_bn":24.046948,"shortfall":31.230946,"kakwani":19.429533,"removed":83.701594},"sort50d25":{"vat_bn":25.627009,"shortfall":26.712313,"kakwani":19.064522,"removed":86.52185},"sort50":{"vat_bn":25.210465,"shortfall":27.903539,"kakwani":19.395551,"removed":83.964154},"sort50d75":{"vat_bn":23.837483,"shortfall":31.829968,"kakwani":19.901609,"removed":80.054106},"sort100d25":{"vat_bn":27.92249,"shortfall":20.147734,"kakwani":18.610896,"removed":90.026792},"sort100":{"vat_bn":26.840193,"shortfall":23.242871,"kakwani":19.461712,"removed":83.452963},"sort100d75":{"vat_bn":23.300382,"shortfall":33.36596,"kakwani":20.790043,"removed":73.189626},"reg25":{"vat_bn":19.689944,"shortfall":43.691032,"kakwani":21.811338,"removed":65.298595},"reg50":{"vat_bn":21.253777,"shortfall":39.218808,"kakwani":20.794422,"removed":73.155792},"reg150":{"vat_bn":27.075372,"shortfall":22.570309,"kakwani":18.315977,"removed":92.305477}},"med":{"formal":{"vat_bn":26.201255,"shortfall":25.070093,"kakwani":20.669915,"removed":0.0},"impnat":{"vat_bn":28.629912,"shortfall":18.124663,"kakwani":19.662787,"removed":30.065301},"chain":{"vat_bn":30.949623,"shortfall":11.490792,"kakwani":18.597749,"removed":61.859407},"sort50d25":{"vat_bn":31.414196,"shortfall":10.162214,"kakwani":18.434791,"removed":66.724089},"sort50":{"vat_bn":31.245078,"shortfall":10.645855,"kakwani":18.564065,"removed":62.864939},"sort50d75":{"vat_bn":30.798595,"shortfall":11.922699,"kakwani":18.757257,"removed":57.097683},"sort100d25":{"vat_bn":32.086664,"shortfall":8.2391,"kakwani":18.215034,"removed":73.28441},"sort100":{"vat_bn":31.639376,"shortfall":9.518247,"kakwani":18.567032,"removed":62.776362},"sort100d75":{"vat_bn":30.490425,"shortfall":12.803997,"kakwani":19.053932,"removed":48.241164},"reg25":{"vat_bn":29.358545,"shortfall":16.04093,"kakwani":19.324266,"removed":40.171024},"reg50":{"vat_bn":29.94885,"shortfall":14.352786,"kakwani":19.050693,"removed":48.337853},"reg150":{"vat_bn":31.938094,"shortfall":8.663977,"kakwani":18.115453,"removed":76.257154}},"high":{"formal":{"vat_bn":31.804275,"shortfall":9.046673,"kakwani":17.177531,"removed":0.0},"impnat":{"vat_bn":32.510271,"shortfall":7.027676,"kakwani":17.354783,"removed":124.314282},"chain":{"vat_bn":33.057836,"shortfall":5.46176,"kakwani":17.451105,"removed":191.868638},"sort50d25":{"vat_bn":33.097626,"shortfall":5.347968,"kakwani":17.440657,"removed":184.540577},"sort50":{"vat_bn":33.0651,"shortfall":5.440985,"kakwani":17.438205,"removed":182.821375},"sort50d75":{"vat_bn":33.002701,"shortfall":5.619434,"kakwani":17.437638,"removed":182.423639},"sort100d25":{"vat_bn":33.15698,"shortfall":5.178228,"kakwani":17.426863,"removed":174.866399},"sort100":{"vat_bn":33.083167,"shortfall":5.389317,"kakwani":17.425787,"removed":174.111629},"sort100d75":{"vat_bn":32.934113,"shortfall":5.815581,"kakwani":17.428229,"removed":175.824858},"reg25":{"vat_bn":32.675474,"shortfall":6.555233,"kakwani":17.381832,"removed":143.28443},"reg50":{"vat_bn":32.817973,"shortfall":6.147716,"kakwani":17.406919,"removed":160.879202},"reg150":{"vat_bn":33.194267,"shortfall":5.071596,"kakwani":17.447901,"removed":189.621576}},"missing_formal":{"formal":{"vat_bn":22.843521,"shortfall":34.672486,"kakwani":26.3429,"removed":0.0},"impnat":{"vat_bn":26.458456,"shortfall":24.334554,"kakwani":23.064957,"removed":36.329613},"chain":{"vat_bn":30.163175,"shortfall":13.739862,"kakwani":20.260381,"removed":67.412875},"sort50d25":{"vat_bn":31.048264,"shortfall":11.208699,"kakwani":19.900817,"removed":71.397945},"sort50":{"vat_bn":30.762088,"shortfall":12.027101,"kakwani":20.187986,"removed":68.215231},"sort50d75":{"vat_bn":29.960257,"shortfall":14.320163,"kakwani":20.636662,"removed":63.242537},"sort100d25":{"vat_bn":32.325547,"shortfall":7.555946,"kakwani":19.42855,"removed":76.632104},"sort100":{"vat_bn":31.545425,"shortfall":9.786926,"kakwani":20.182975,"removed":68.270767},"sort100d75":{"vat_bn":29.460283,"shortfall":15.749981,"kakwani":21.316731,"removed":55.70529},"reg25":{"vat_bn":27.632466,"shortfall":20.97714,"kakwani":22.139878,"removed":46.582312},"reg50":{"vat_bn":28.56853,"shortfall":18.300201,"kakwani":21.416217,"removed":54.602686},"reg150":{"vat_bn":31.943901,"shortfall":8.647373,"kakwani":19.193151,"removed":79.241039}},"missing_informal":{"formal":{"vat_bn":20.592003,"shortfall":41.111339,"kakwani":26.071799,"removed":0.0},"impnat":{"vat_bn":24.745681,"shortfall":29.232719,"kakwani":22.698685,"removed":38.542455},"chain":{"vat_bn":28.838961,"shortfall":17.526826,"kakwani":19.914076,"removed":70.360432},"sort50d25":{"vat_bn":29.728902,"shortfall":14.981788,"kakwani":19.542942,"removed":74.601157},"sort50":{"vat_bn":29.423129,"shortfall":15.856233,"kakwani":19.830713,"removed":71.312968},"sort50d75":{"vat_bn":28.592139,"shortfall":18.232685,"kakwani":20.282285,"removed":66.153147},"sort100d25":{"vat_bn":31.015326,"shortfall":11.302895,"kakwani":19.058247,"removed":80.139457},"sort100":{"vat_bn":30.194393,"shortfall":13.650585,"kakwani":19.818219,"removed":71.455739},"sort100d75":{"vat_bn":28.044444,"shortfall":19.798973,"kakwani":20.964872,"removed":58.353649},"reg25":{"vat_bn":26.0381,"shortfall":25.536681,"kakwani":21.765028,"removed":49.210767},"reg50":{"vat_bn":27.076567,"shortfall":22.566891,"kakwani":21.045768,"removed":57.429301},"reg150":{"vat_bn":30.680388,"shortfall":12.260746,"kakwani":18.83875,"removed":82.647509}}},"robust":{"allreg":{"shortfall":8.2,"kakwani":18.2,"removed":90.5},"lam0.25":{"shortfall":17.5,"kakwani":24.1,"removed":22.4},"lam0.5":{"shortfall":17.5,"kakwani":22.5,"removed":41.0},"lam0.75":{"shortfall":17.5,"kakwani":21.1,"removed":56.8}},"informal":{"formal":{"deciles":[76.188,76.637,75.8003,75.0156,73.4309,68.8048,65.3764,62.1111,54.5195,36.4464],"all":49.0407},"purchase_share":[0.8296,1.4925,2.1813,2.9307,3.5856,4.5721,6.182,8.993,15.3483,53.8849],"low":{"deciles":[93.3017,93.7224,93.0252,92.2311,90.7749,89.0226,86.2806,84.0677,79.3472,70.0658],"all":77.0574},"med":{"deciles":[40.6994,40.7518,40.2874,40.1363,39.358,36.8875,35.5019,33.8431,30.153,22.8765],"all":28.2919},"high":{"deciles":[5.2107,4.8665,4.7744,5.257,5.2851,4.9703,5.6274,5.5751,5.7865,9.3065],"all":7.543}},"basket":{"1":{"taxable_formal":15.496,"taxable_informal":27.0007,"untaxed_by_law":57.5033,"informal":76.188},"2":{"taxable_formal":15.2618,"taxable_informal":28.2119,"untaxed_by_law":56.5263,"informal":76.637},"3":{"taxable_formal":14.569,"taxable_informal":28.8598,"untaxed_by_law":56.5712,"informal":75.8003},"4":{"taxable_formal":15.287,"taxable_informal":27.8904,"untaxed_by_law":56.8227,"informal":75.0156},"5":{"taxable_formal":15.4875,"taxable_informal":28.2734,"untaxed_by_law":56.2391,"informal":73.4309},"6":{"taxable_formal":18.322,"taxable_informal":27.5848,"untaxed_by_law":54.0931,"informal":68.8048},"7":{"taxable_formal":19.5304,"taxable_informal":27.0109,"untaxed_by_law":53.4587,"informal":65.3764},"8":{"taxable_formal":20.7043,"taxable_informal":26.1413,"untaxed_by_law":53.1544,"informal":62.1111},"9":{"taxable_formal":24.5891,"taxable_informal":22.27,"untaxed_by_law":53.1409,"informal":54.5195},"10":{"taxable_formal":40.7682,"taxable_informal":17.8995,"untaxed_by_law":41.3324,"informal":36.4464},"all":{"taxable_formal":31.3264,"taxable_informal":21.4508,"untaxed_by_law":47.2228,"informal":49.0407}},"upstream_deciles":{"partial":[0.56967,0.578,0.58618,0.57652,0.56826,0.57281,0.57805,0.58321,0.57787,0.56855],"impnat":[0.24216,0.26673,0.27826,0.27778,0.27626,0.27841,0.28736,0.29084,0.29611,0.29259]},"context":{"simulated_pct_reported":41.4742994729768,"reported_year":"2022"},"states":{"chain/formal/sort50":{"P":[1.43369,1.536646,1.695914,1.830833,1.865337,2.13741,2.415253,2.839359,3.568117,5.674677],"ush":[0.563216,0.59139,0.606869,0.60088,0.597932,0.602478,0.613325,0.624235,0.627029,0.614612],"ushE":0.61427,"dc":{"removed":71.299146,"ubar":0.61427,"ubarE":0.61427,"sEF":0.589065,"acc":0.729979,"grad":0.976728},"border":{"sfB":29.221723,"ubarB":0.288897},"ch":{"invoice":21.7609,"border_final":17.56,"producer_invoice":13.2606,"inherited":4.9461,"wholesale_inputs":1.0419,"retail_inputs":3.454,"total":62.0235}},"chain/formal/sort100":{"P":[1.405251,1.549054,1.727505,1.872347,1.921548,2.195634,2.493971,2.944788,3.704136,5.8031],"ush":[0.540966,0.600534,0.627509,0.626746,0.631965,0.636608,0.65633,0.676452,0.692274,0.679262],"ushE":0.667892,"dc":{"removed":71.434003,"ubar":0.667892,"ubarE":0.667892,"sEF":0.589065,"acc":0.773448,"grad":0.923578},"border":{"sfB":29.221723,"ubarB":0.288897},"ch":{"invoice":10.3417,"border_final":26.7061,"producer_invoice":19.1793,"inherited":5.8767,"wholesale_inputs":1.4229,"retail_inputs":3.8939,"total":67.4206}},"chain/formal/sortm":{"P":[1.503279,1.626914,1.806557,1.948355,1.990929,2.266496,2.559594,3.006144,3.747896,5.832284],"ush":[0.617665,0.657911,0.679158,0.674103,0.673972,0.678146,0.692181,0.70684,0.713265,0.693954],"ushE":0.693697,"dc":{"removed":76.92634,"ubar":0.693697,"ubarE":0.693697,"sEF":0.589065,"acc":0.793586,"grad":0.969351},"border":{"sfB":29.221723,"ubarB":0.288897},"ch":{"invoice":19.3477,"border_final":23.0102,"producer_invoice":17.0403,"inherited":5.415,"wholesale_inputs":1.2826,"retail_inputs":3.9361,"total":70.0319}},"chain/formal/reg25":{"P":[1.154973,1.226762,1.338203,1.459682,1.48258,1.740019,1.98243,2.350798,3.061146,5.212102],"ush":[0.345144,0.363031,0.373158,0.369634,0.366194,0.369532,0.376865,0.382261,0.383845,0.381744],"ushE":0.378812,"dc":{"removed":49.195596,"ubar":0.378812,"ubarE":0.378812,"sEF":0.589065,"acc":0.508655,"grad":0.967169},"border":{"sfB":29.221723,"ubarB":0.288897},"ch":{"invoice":6.9837,"border_final":16.8982,"producer_invoice":3.9297,"inherited":7.4977,"wholesale_inputs":0.7867,"retail_inputs":2.1459,"total":38.2419}},"chain/formal/reg50":{"P":[1.262078,1.334369,1.458246,1.581555,1.605197,1.867523,2.117668,2.500713,3.209637,5.35111],"ush":[0.428945,0.442329,0.451588,0.445567,0.440432,0.444274,0.450748,0.456511,0.455073,0.451723],"ushE":0.451056,"dc":{"removed":57.417054,"ubar":0.451056,"ubarE":0.451056,"sEF":0.589065,"acc":0.582444,"grad":0.985796},"border":{"sfB":29.221723,"ubarB":0.288897},"ch":{"invoice":13.9331,"border_final":14.8135,"producer_invoice":6.3546,"inherited":7.2019,"wholesale_inputs":0.8032,"retail_inputs":2.4393,"total":45.5456}},"chain/formal/reg150":{"P":[1.620626,1.709451,1.879801,2.012417,2.042027,2.318818,2.599078,3.031662,3.743807,5.818421],"ush":[0.709478,0.718734,0.727012,0.714017,0.704909,0.708817,0.713752,0.719479,0.711304,0.686975],"ushE":0.701738,"dc":{"removed":82.641184,"ubar":0.701738,"ubarE":0.701738,"sEF":0.589065,"acc":0.799762,"grad":1.033322},"border":{"sfB":29.221723,"ubarB":0.288897},"ch":{"invoice":52.1039,"border_final":6.2538,"producer_invoice":4.2012,"inherited":3.7962,"wholesale_inputs":0.5977,"retail_inputs":3.9137,"total":70.8665}},"chain/formal/allreg":{"P":[1.745483,1.848226,2.038832,2.176365,2.211715,2.493442,2.788198,3.244243,3.962872,6.00674],"ush":[0.807169,0.820999,0.830915,0.816166,0.807645,0.811179,0.817072,0.824766,0.816385,0.781777],"ushE":0.801549,"dc":{"removed":90.49618,"ubar":0.801549,"ubarE":0.801549,"sEF":0.589065,"acc":0.872719,"grad":1.036945},"border":{"sfB":29.221723,"ubarB":0.288897},"ch":{"invoice":70.5679,"border_final":2.4264,"producer_invoice":0.0,"inherited":2.8749,"wholesale_inputs":0.4566,"retail_inputs":4.6173,"total":80.9431}},"import/low/headline":{"P":[0.648274,0.71571,0.834627,0.895817,0.943077,1.081732,1.281977,1.546366,2.078933,3.653189],"ush":[0.260303,0.275326,0.283902,0.284771,0.280897,0.277819,0.286787,0.290115,0.290998,0.303979],"ushE":0.295635,"dc":{"removed":53.426364,"ubar":0.295635,"ubarE":0.295635,"sEF":0.303143,"acc":0.580635,"grad":0.920136}},"chain/low/headline":{"P":[1.224382,1.287869,1.4463,1.528213,1.567135,1.751308,1.998321,2.335831,2.908662,4.612908],"ush":[0.577455,0.576782,0.583299,0.571841,0.563788,0.556713,0.564294,0.563271,0.550526,0.543655],"ushE":0.551832,"dc":{"removed":83.701594,"ubar":0.551832,"ubarE":0.551832,"sEF":0.303143,"acc":0.802442,"grad":1.043086},"border":{"sfB":49.084165,"ubarB":0.295635},"ch":{"invoice":29.625,"border_final":12.4021,"producer_invoice":6.5258,"inherited":3.7643,"wholesale_inputs":0.6889,"retail_inputs":2.864,"total":55.8701}},"chain/low/sort50":{"P":[1.254278,1.341567,1.512,1.606081,1.650494,1.838663,2.104818,2.466327,3.067813,4.823998],"ush":[0.593913,0.605074,0.615457,0.607189,0.601575,0.593099,0.60555,0.608422,0.600306,0.596371],"ushE":0.59958,"dc":{"removed":83.964154,"ubar":0.59958,"ubarE":0.59958,"sEF":0.303143,"acc":0.831636,"grad":1.009626},"border":{"sfB":49.084165,"ubarB":0.295635},"ch":{"invoice":21.5364,"border_final":20.492,"producer_invoice":10.5256,"inherited":4.0481,"wholesale_inputs":0.9615,"retail_inputs":3.1876,"total":60.7512}},"chain/low/sort100":{"P":[1.282345,1.406557,1.594058,1.705085,1.757894,1.9521,2.24618,2.643061,3.288996,5.128858],"ush":[0.609363,0.639315,0.655622,0.65213,0.65026,0.640348,0.660313,0.669573,0.66949,0.672506],"ushE":0.666462,"dc":{"removed":83.452963,"ubar":0.666462,"ubarE":0.666462,"sEF":0.303143,"acc":0.868273,"grad":0.961137},"border":{"sfB":49.084165,"ubarB":0.295635},"ch":{"invoice":10.3937,"border_final":31.9015,"producer_invoice":15.4691,"inherited":4.865,"wholesale_inputs":1.3242,"retail_inputs":3.6237,"total":67.5772}},"chain/low/sortm":{"P":[1.384696,1.488249,1.675804,1.78407,1.830715,2.026455,2.316904,2.708904,3.339358,5.171041],"ush":[0.665709,0.682357,0.695634,0.687985,0.683271,0.671319,0.687711,0.692354,0.685242,0.68304],"ushE":0.684233,"dc":{"removed":87.511614,"ubar":0.684233,"ubarE":0.684233,"sEF":0.303143,"acc":0.877272,"grad":0.997543},"border":{"sfB":49.084165,"ubarB":0.295635},"ch":{"invoice":19.1872,"border_final":27.319,"producer_invoice":13.5022,"inherited":4.5258,"wholesale_inputs":1.1913,"retail_inputs":3.6558,"total":69.3813},"agg":{"shortfall":22.00448,"removed":87.511614,"kakwani":18.936422}},"chain/low/reg25":{"P":[0.832618,0.896556,1.025342,1.091148,1.136287,1.289029,1.501994,1.789844,2.331103,3.93746],"ush":[0.361786,0.370608,0.377252,0.37344,0.368481,0.364163,0.37202,0.374359,0.369873,0.374972],"ushE":0.373028,"dc":{"removed":65.298595,"ubar":0.373028,"ubarE":0.373028,"sEF":0.303143,"acc":0.662466,"grad":0.98569},"border":{"sfB":49.084165,"ubarB":0.295635},"ch":{"invoice":6.6615,"border_final":19.056,"producer_invoice":3.0854,"inherited":6.4087,"wholesale_inputs":0.6951,"retail_inputs":1.8962,"total":37.8029}},"chain/low/reg50":{"P":[0.97942,1.040804,1.180326,1.250828,1.294071,1.457677,1.682641,1.988587,2.539232,4.176544],"ush":[0.442602,0.446609,0.453112,0.445925,0.440005,0.434409,0.442001,0.443124,0.434973,0.43468],"ushE":0.437205,"dc":{"removed":73.155792,"ubar":0.437205,"ubarE":0.437205,"sEF":0.303143,"acc":0.719309,"grad":1.017029},"border":{"sfB":49.084165,"ubarB":0.295635},"ch":{"invoice":13.4806,"border_final":16.8267,"producer_invoice":4.9598,"inherited":6.1068,"wholesale_inputs":0.7215,"retail_inputs":2.1913,"total":44.2867}},"chain/low/reg150":{"P":[1.478285,1.550936,1.729694,1.826223,1.862581,2.06399,2.336195,2.712905,3.311145,5.088467],"ush":[0.71723,0.715385,0.722012,0.70712,0.697715,0.686953,0.695184,0.693739,0.676418,0.662419],"ushE":0.676113,"dc":{"removed":92.305477,"ubar":0.676113,"ubarE":0.676113,"sEF":0.303143,"acc":0.873196,"grad":1.057099},"border":{"sfB":49.084165,"ubarB":0.295635},"ch":{"invoice":51.5444,"border_final":6.5362,"producer_invoice":3.2882,"inherited":2.9173,"wholesale_inputs":0.5551,"retail_inputs":3.6347,"total":68.4759}},"chain/low/allreg":{"P":[1.665723,1.748536,1.944353,2.05293,2.088872,2.302566,2.596483,3.006063,3.627037,5.465039],"ush":[0.820416,0.819496,0.827081,0.810031,0.800295,0.786326,0.796018,0.795171,0.775225,0.756462],"ushE":0.773327,"dc":{"removed":97.329769,"ubar":0.773327,"ubarE":0.773327,"sEF":0.303143,"acc":0.918396,"grad":1.05978},"border":{"sfB":49.084165,"ubarB":0.295635},"ch":{"invoice":69.6158,"border_final":1.7879,"producer_invoice":0.0,"inherited":2.2349,"wholesale_inputs":0.4242,"retail_inputs":4.2896,"total":78.3524},"agg":{"shortfall":15.795881,"removed":97.329769,"kakwani":17.665709}},"import/med/headline":{"P":[1.433444,1.521737,1.672111,1.79755,1.828461,2.097601,2.353278,2.757318,3.47654,5.509134],"ush":[0.227455,0.252459,0.265954,0.263389,0.25811,0.261668,0.273939,0.278115,0.282671,0.282641],"ushE":0.27704,"dc":{"removed":30.065301,"ubar":0.27704,"ubarE":0.27704,"sEF":0.749299,"acc":0.338369,"grad":0.888537}},"chain/med/headline":{"P":[1.652053,1.742823,1.919394,2.052457,2.08471,2.363684,2.643219,3.078671,3.797124,5.840007],"ush":[0.529849,0.542717,0.55614,0.54203,0.529321,0.535303,0.547421,0.554041,0.547266,0.537562],"ushE":0.541653,"dc":{"removed":61.859407,"ubar":0.541653,"ubarE":0.541653,"sEF":0.749299,"acc":0.611974,"grad":1.010817},"border":{"sfB":18.124663,"ubarB":0.27704},"ch":{"invoice":28.0717,"border_final":11.478,"producer_invoice":7.1012,"inherited":5.0175,"wholesale_inputs":0.6514,"retail_inputs":2.7079,"total":55.0277}},"chain/med/sort50":{"P":[1.648137,1.75272,1.935713,2.073464,2.109909,2.38965,2.676876,3.12127,3.849324,5.88554],"ush":[0.524432,0.55571,0.575291,0.564992,0.555991,0.562005,0.579167,0.590617,0.59035,0.572643],"ushE":0.575356,"dc":{"removed":62.864939,"ubar":0.575356,"ubarE":0.575356,"sEF":0.749299,"acc":0.643906,"grad":0.976307},"border":{"sfB":18.124663,"ubarB":0.27704},"ch":{"invoice":20.6934,"border_final":17.2359,"producer_invoice":11.3059,"inherited":5.3001,"wholesale_inputs":0.905,"retail_inputs":3.0003,"total":58.4406}},"chain/med/sort100":{"P":[1.634106,1.760007,1.952217,2.096343,2.138951,2.419683,2.718148,3.175856,3.919022,5.950533],"ush":[0.505024,0.565277,0.594659,0.590002,0.586729,0.59289,0.618097,0.637487,0.647874,0.622717],"ushE":0.620335,"dc":{"removed":62.776362,"ubar":0.620335,"ubarE":0.620335,"sEF":0.749299,"acc":0.685591,"grad":0.915653},"border":{"sfB":18.124663,"ubarB":0.27704},"ch":{"invoice":10.6261,"border_final":25.2781,"producer_invoice":16.3514,"inherited":6.1195,"wholesale_inputs":1.236,"retail_inputs":3.3825,"total":62.9936}},"chain/med/sortm":{"P":[1.684283,1.799716,1.992556,2.135145,2.175309,2.4562,2.752562,3.207998,3.94198,5.966403],"ush":[0.574432,0.617411,0.641997,0.632417,0.625209,0.630443,0.650557,0.665085,0.666823,0.634944],"ushE":0.642565,"dc":{"removed":69.584095,"ubar":0.642565,"ubarE":0.642565,"sEF":0.749299,"acc":0.705813,"grad":0.985872},"border":{"sfB":18.124663,"ubarB":0.27704},"ch":{"invoice":18.4205,"border_final":22.0342,"producer_invoice":14.5228,"inherited":5.7457,"wholesale_inputs":1.114,"retail_inputs":3.4188,"total":65.256},"agg":{"shortfall":8.960918,"removed":69.584095,"kakwani":18.338987}},"chain/med/reg25":{"P":[1.502139,1.590114,1.748302,1.875856,1.907325,2.179993,2.442604,2.857778,3.576226,5.614625],"ush":[0.322478,0.34223,0.355365,0.348986,0.341578,0.346399,0.358194,0.364373,0.364947,0.363917],"ushE":0.360157,"dc":{"removed":40.171024,"ubar":0.360157,"ubarE":0.360157,"sEF":0.749299,"acc":0.428967,"grad":0.936459},"border":{"sfB":18.124663,"ubarB":0.27704},"ch":{"invoice":6.5375,"border_final":16.5728,"producer_invoice":3.3457,"inherited":7.5792,"wholesale_inputs":0.6819,"retail_inputs":1.8602,"total":36.5773}},"chain/med/reg50":{"P":[1.558114,1.64649,1.811359,1.940725,1.972536,2.247652,2.51643,2.939566,3.657507,5.69889],"ush":[0.399906,0.416244,0.429362,0.419894,0.410596,0.415977,0.427829,0.434599,0.432032,0.428839],"ushE":0.427494,"dc":{"removed":48.337853,"ubar":0.427494,"ubarE":0.427494,"sEF":0.749299,"acc":0.499133,"grad":0.968436},"border":{"sfB":18.124663,"ubarB":0.27704},"ch":{"invoice":13.0521,"border_final":14.7505,"producer_invoice":5.4147,"inherited":7.3936,"wholesale_inputs":0.697,"retail_inputs":2.1168,"total":43.4247}},"chain/med/reg150":{"P":[1.744527,1.841947,2.030767,2.168157,2.203202,2.484365,2.775373,3.224292,3.943496,5.970086],"ush":[0.657765,0.672855,0.686837,0.668502,0.654731,0.659407,0.672073,0.679076,0.668075,0.637781],"ushE":0.65441,"dc":{"removed":76.257154,"ubar":0.65441,"ubarE":0.65441,"sEF":0.749299,"acc":0.716486,"grad":1.064322},"border":{"sfB":18.124663,"ubarB":0.27704},"ch":{"invoice":47.4519,"border_final":7.3153,"producer_invoice":3.5819,"inherited":4.2103,"wholesale_inputs":0.5193,"retail_inputs":3.4003,"total":66.479}},"chain/med/allreg":{"P":[1.809437,1.914332,2.113205,2.254602,2.292539,2.575517,2.87631,3.337259,4.059306,6.073868],"ush":[0.747553,0.767887,0.783578,0.762995,0.749284,0.753146,0.767281,0.776073,0.763659,0.71774],"ushE":0.742398,"dc":{"removed":85.967984,"ubar":0.742398,"ubarE":0.742398,"sEF":0.749299,"acc":0.793653,"grad":1.083194},"border":{"sfB":18.124663,"ubarB":0.27704},"ch":{"invoice":63.6963,"border_final":3.9727,"producer_invoice":0.0,"inherited":3.3376,"wholesale_inputs":0.3966,"retail_inputs":4.0106,"total":75.4138},"agg":{"shortfall":6.458111,"removed":85.967984,"kakwani":17.79016}},"import/high/headline":{"P":[1.843564,1.947393,2.151265,2.282842,2.322889,2.610644,2.887964,3.348391,4.074829,5.983254],"ush":[0.115521,0.13607,0.157534,0.16059,0.132173,0.142158,0.189231,0.195175,0.199879,0.250195],"ushE":0.223176,"dc":{"removed":124.314282,"ubar":0.223176,"ubarE":0.223176,"sEF":0.909533,"acc":0.240045,"grad":5.178785}},"chain/high/headline":{"P":[1.862177,1.967178,2.174542,2.313178,2.353085,2.640577,2.935754,3.400682,4.128606,6.096799],"ush":[0.226476,0.254989,0.291514,0.295626,0.259053,0.26747,0.354062,0.363745,0.358754,0.436502],"ushE":0.396269,"dc":{"removed":191.868638,"ubar":0.396269,"ubarE":0.396269,"sEF":0.909533,"acc":0.419162,"grad":4.577431},"border":{"sfB":7.027676,"ubarB":0.223176},"ch":{"invoice":18.693,"border_final":13.6265,"producer_invoice":1.3462,"inherited":6.7571,"wholesale_inputs":0.1898,"retail_inputs":0.7891,"total":41.4017}},"chain/high/sort50":{"P":[1.862592,1.968789,2.175509,2.316091,2.354477,2.64189,2.938496,3.403133,4.130531,6.096388],"ush":[0.228947,0.264674,0.297084,0.308594,0.264901,0.272963,0.36352,0.371645,0.364442,0.435827],"ushE":0.398565,"dc":{"removed":182.821375,"ubar":0.398565,"ubarE":0.398565,"sEF":0.909533,"acc":0.421499,"grad":4.337412},"border":{"sfB":7.027676,"ubarB":0.223176},"ch":{"invoice":15.6881,"border_final":15.716,"producer_invoice":2.14,"inherited":6.9603,"wholesale_inputs":0.2633,"retail_inputs":0.8729,"total":41.6406}},"chain/high/sort100":{"P":[1.86297,1.970956,2.176929,2.320338,2.35635,2.643733,2.942323,3.406867,4.133906,6.097948],"ush":[0.231202,0.277696,0.305253,0.327495,0.272768,0.280681,0.376718,0.383683,0.374414,0.438387],"ushE":0.404276,"dc":{"removed":174.111629,"ubar":0.404276,"ubarE":0.404276,"sEF":0.909533,"acc":0.427305,"grad":4.074643},"border":{"sfB":7.027676,"ubarB":0.223176},"ch":{"invoice":11.9597,"border_final":18.5827,"producer_invoice":3.0912,"inherited":7.258,"wholesale_inputs":0.3597,"retail_inputs":0.9843,"total":42.2356}},"chain/high/sortm":{"P":[1.865294,1.972514,2.178553,2.321933,2.359685,2.645904,2.945527,3.409794,4.136062,6.100503],"ush":[0.245059,0.287063,0.314602,0.334597,0.286781,0.28977,0.387769,0.39312,0.380784,0.442579],"ushE":0.41027,"dc":{"removed":168.073742,"ubar":0.41027,"ubarE":0.41027,"sEF":0.909533,"acc":0.433392,"grad":3.878098},"border":{"sfB":7.027676,"ubarB":0.223176},"ch":{"invoice":14.073,"border_final":17.4578,"producer_invoice":2.7185,"inherited":7.2964,"wholesale_inputs":0.3235,"retail_inputs":0.9927,"total":42.8619},"agg":{"shortfall":5.335092,"removed":168.073742,"kakwani":17.417178}},"chain/high/reg25":{"P":[1.849314,1.953464,2.1584,2.292026,2.332066,2.619968,2.902775,3.364728,4.091305,6.017138],"ush":[0.149798,0.172563,0.198605,0.201472,0.170731,0.181191,0.240317,0.247839,0.248557,0.305793],"ushE":0.275399,"dc":{"removed":143.28443,"ubar":0.275399,"ubarE":0.275399,"sEF":0.909533,"acc":0.294718,"grad":4.861747},"border":{"sfB":7.027676,"ubarB":0.223176},"ch":{"invoice":4.4453,"border_final":15.0473,"producer_invoice":0.6074,"inherited":7.9612,"wholesale_inputs":0.1909,"retail_inputs":0.5207,"total":28.7728}},"chain/high/reg50":{"P":[1.854158,1.958608,2.16447,2.29989,2.33987,2.62778,2.915191,3.378385,4.105376,6.04666],"ush":[0.178672,0.203478,0.233541,0.236479,0.203525,0.213898,0.283137,0.291867,0.290127,0.354232],"ushE":0.320445,"dc":{"removed":160.879202,"ubar":0.320445,"ubarE":0.320445,"sEF":0.909533,"acc":0.341435,"grad":4.711854},"border":{"sfB":7.027676,"ubarB":0.223176},"ch":{"invoice":8.9211,"border_final":14.4552,"producer_invoice":1.0074,"inherited":8.2924,"wholesale_inputs":0.199,"retail_inputs":0.6044,"total":33.4795}},"chain/high/reg150":{"P":[1.868434,1.974439,2.18173,2.323894,2.364374,2.649911,2.951666,3.416871,4.143185,6.121734],"ush":[0.263775,0.298631,0.332889,0.343325,0.306485,0.306545,0.408942,0.415934,0.401827,0.477415],"ushE":0.439397,"dc":{"removed":189.621576,"ubar":0.439397,"ubarE":0.439397,"sEF":0.909533,"acc":0.462872,"grad":4.096635},"border":{"sfB":7.027676,"ubarB":0.223176},"ch":{"invoice":25.6391,"border_final":12.2923,"producer_invoice":0.6782,"inherited":6.1523,"wholesale_inputs":0.1517,"retail_inputs":0.9931,"total":45.9067}},"chain/high/allreg":{"P":[1.873396,1.980434,2.187575,2.332836,2.37336,2.657594,2.964422,3.430214,4.15574,6.140977],"ush":[0.293356,0.334666,0.36653,0.383129,0.344243,0.338705,0.452937,0.458947,0.438918,0.508989],"ushE":0.473676,"dc":{"removed":185.622316,"ubar":0.473676,"ubarE":0.473676,"sEF":0.909533,"acc":0.497358,"grad":3.732168},"border":{"sfB":7.027676,"ubarB":0.223176},"ch":{"invoice":31.4757,"border_final":11.2232,"producer_invoice":0.0,"inherited":5.5072,"wholesale_inputs":0.1153,"retail_inputs":1.166,"total":49.4874},"agg":{"shortfall":4.761479,"removed":185.622316,"kakwani":17.442199}},"import/formal/headline":{"ush":[0.242156,0.266729,0.278262,0.277781,0.276257,0.278406,0.287358,0.290837,0.296113,0.29259],"ushE":0.288895,"dc":{"removed":38.523561,"ubar":0.288895,"ubarE":0.288895,"sEF":0.589065,"acc":0.408169,"grad":0.943814}},"chain/formal/headline":{"ush":[0.56967,0.577995,0.586177,0.576519,0.568263,0.572808,0.578049,0.583213,0.577873,0.568551],"ushE":0.573645,"dc":{"removed":70.352059,"ubar":0.573645,"ubarE":0.573645,"sEF":0.589065,"acc":0.695499,"grad":1.011533},"border":{"sfB":29.221723,"ubarB":0.288897},"ch":{"invoice":30.0718,"border_final":11.0198,"producer_invoice":8.3286,"inherited":4.6465,"wholesale_inputs":0.7498,"retail_inputs":3.1171,"total":57.9336}}},"basket_cls":{"formal":{"1":{"taxable_formal":15.496,"taxable_informal":27.0007,"untaxed_by_law":57.5033},"2":{"taxable_formal":15.2618,"taxable_informal":28.2119,"untaxed_by_law":56.5263},"3":{"taxable_formal":14.569,"taxable_informal":28.8598,"untaxed_by_law":56.5712},"4":{"taxable_formal":15.287,"taxable_informal":27.8904,"untaxed_by_law":56.8227},"5":{"taxable_formal":15.4875,"taxable_informal":28.2734,"untaxed_by_law":56.2391},"6":{"taxable_formal":18.322,"taxable_informal":27.5848,"untaxed_by_law":54.0931},"7":{"taxable_formal":19.5304,"taxable_informal":27.0109,"untaxed_by_law":53.4587},"8":{"taxable_formal":20.7043,"taxable_informal":26.1413,"untaxed_by_law":53.1544},"9":{"taxable_formal":24.5891,"taxable_informal":22.27,"untaxed_by_law":53.1409},"10":{"taxable_formal":40.7682,"taxable_informal":17.8995,"untaxed_by_law":41.3324},"all":{"taxable_formal":31.3264,"taxable_informal":21.4508,"untaxed_by_law":47.2228}},"low":{"1":{"taxable_formal":3.9521,"taxable_informal":38.5446,"untaxed_by_law":57.5033},"2":{"taxable_formal":4.2537,"taxable_informal":39.22,"untaxed_by_law":56.5263},"3":{"taxable_formal":4.9941,"taxable_informal":38.4347,"untaxed_by_law":56.5712},"4":{"taxable_formal":4.9416,"taxable_informal":38.2357,"untaxed_by_law":56.8227},"5":{"taxable_formal":5.9312,"taxable_informal":37.8297,"untaxed_by_law":56.2391},"6":{"taxable_formal":7.1303,"taxable_informal":38.7766,"untaxed_by_law":54.0931},"7":{"taxable_formal":8.5149,"taxable_informal":38.0265,"untaxed_by_law":53.4587},"8":{"taxable_formal":9.593,"taxable_informal":37.2526,"untaxed_by_law":53.1544},"9":{"taxable_formal":12.7979,"taxable_informal":34.0612,"untaxed_by_law":53.1409},"10":{"taxable_formal":22.4063,"taxable_informal":36.2614,"untaxed_by_law":41.3324},"all":{"taxable_formal":16.3157,"taxable_informal":36.4615,"untaxed_by_law":47.2228}},"med":{"1":{"taxable_formal":27.5465,"taxable_informal":14.9502,"untaxed_by_law":57.5033},"2":{"taxable_formal":27.8994,"taxable_informal":15.5743,"untaxed_by_law":56.5263},"3":{"taxable_formal":27.5526,"taxable_informal":15.8762,"untaxed_by_law":56.5712},"4":{"taxable_formal":27.5282,"taxable_informal":15.6492,"untaxed_by_law":56.8227},"5":{"taxable_formal":27.9096,"taxable_informal":15.8512,"untaxed_by_law":56.2391},"6":{"taxable_formal":30.4685,"taxable_informal":15.4384,"untaxed_by_law":54.0931},"7":{"taxable_formal":31.0721,"taxable_informal":15.4693,"untaxed_by_law":53.4587},"8":{"taxable_formal":31.8936,"taxable_informal":14.952,"untaxed_by_law":53.1544},"9":{"taxable_formal":34.006,"taxable_informal":12.8531,"untaxed_by_law":53.1409},"10":{"taxable_formal":46.9764,"taxable_informal":11.6912,"untaxed_by_law":41.3324},"all":{"taxable_formal":39.7681,"taxable_informal":13.0091,"untaxed_by_law":47.2228}},"high":{"1":{"taxable_formal":39.5969,"taxable_informal":2.8998,"untaxed_by_law":57.5033},"2":{"taxable_formal":40.537,"taxable_informal":2.9367,"untaxed_by_law":56.5263},"3":{"taxable_formal":40.5361,"taxable_informal":2.8927,"untaxed_by_law":56.5712},"4":{"taxable_formal":39.7694,"taxable_informal":3.4079,"untaxed_by_law":56.8227},"5":{"taxable_formal":40.3318,"taxable_informal":3.4291,"untaxed_by_law":56.2391},"6":{"taxable_formal":42.6149,"taxable_informal":3.2919,"untaxed_by_law":54.0931},"7":{"taxable_formal":42.6138,"taxable_informal":3.9276,"untaxed_by_law":53.4587},"8":{"taxable_formal":43.083,"taxable_informal":3.7627,"untaxed_by_law":53.1544},"9":{"taxable_formal":43.423,"taxable_informal":3.4361,"untaxed_by_law":53.1409},"10":{"taxable_formal":53.1847,"taxable_informal":5.4829,"untaxed_by_law":41.3324},"all":{"taxable_formal":48.2098,"taxable_informal":4.5674,"untaxed_by_law":47.2228}}}},"PE":{"code":"PE","name":"Peru","model":"PERUMOD","currency":"PEN","year":"2022","table1":{"Survey":"ENAHO 2022","Households":"34,213","Persons":"114,640","Tax-benefit model":"PERUMOD","Simulated policy system":"2022","Standard VAT rate (%)":"18","VAT turnover threshold":"none","Input-output table":"COU 2022","Informal share of spending (%)":"49","Decile 1 / decile 10 (%)":"65 / 32"},"table2":[["Registered suppliers (every scenario)","utilities, telecoms, insurers, banks"],["Recorded formal","supermarket, specialized store, pharmacy, bakery, wholesale store, restaurant, formal transport"],["Recorded informal","market, retail bodega, fair, street vendor, informal transport"],["Informal in every scenario","–"],["No outlet recorded","other, modules without place: formal"],["Ambiguous (medium, high); informal in headline","market (mercado)"]],"chain":{"ubar":0.676731996176225,"ubarB":0.173437183458436,"ubarE":0.67694171346422,"ubarBE":0.174655360187491,"phiW":0.691594309510012,"wholesale_margin":0.5,"reg_input_share":0.700889449593248,"production_groups":101,"production_source":"INEI COU and production matrix 2022; reconstructed basic-price product table","channels":{"invoice":43.57,"border_final":2.76,"producer_invoice":10.2,"inherited":8.7,"wholesale_inputs":0.77,"retail_inputs":1.67,"total":67.67},"ucat":[{"group":"Primary products","share":4.0,"uB":0.17,"u":0.73},{"group":"Processed food","share":72.0,"uB":0.16,"u":0.72},{"group":"Other goods","share":15.0,"uB":0.3,"u":0.7},{"group":"Services","share":10.0,"uB":0.09,"u":0.3}]},"decomp":{"removed":83.2965699733922,"accounting":0.793683206380235,"gradient":1.049493920292,"sF":0.5514500303327912,"sEF":0.5447005072658051,"gradientB":1.0506456119919132,"border_share":0.077795,"chain_share":0.225753,"lost_share":0.145002},"components":{"KF":8.2,"KI":-11.9,"KU":-12.9,"KU_KI":-1.0,"sEF":0.54,"etaU":0.36,"ubarE":0.68},"scen":{"unadj":{"vat_bn":17.573391,"kakwani":-0.925452,"rate_all":5.996685,"rates":[5.911922,6.194639,6.195939,6.165987,6.146412,6.139093,6.047772,5.892338,5.85962,5.901606]},"formal":{"vat_bn":9.690847,"kakwani":8.246163,"rate_all":3.266397,"rates":[2.472594,2.621024,2.684894,2.700851,2.823411,2.920875,3.019218,3.124775,3.376176,4.104033]},"partial":{"vat_bn":15.025217,"kakwani":0.606522,"rate_all":5.114643,"rates":[4.847008,5.090776,5.103103,5.089905,5.103404,5.123253,5.085837,5.001065,5.044487,5.268364]},"impnat":{"vat_bn":11.057973,"kakwani":5.550003,"rate_all":3.743257,"rates":[3.104431,3.256693,3.30549,3.315872,3.412308,3.487436,3.550842,3.60664,3.800663,4.408991]},"low":{"vat_bn":6.671128,"kakwani":5.030474,"rate_all":2.229418,"rates":[1.969776,2.063006,1.987958,2.004298,2.027928,2.047755,2.027617,2.129262,2.270992,2.628534]},"med":{"vat_bn":11.723186,"kakwani":5.276157,"rate_all":3.929199,"rates":[3.159963,3.434124,3.465582,3.493885,3.626427,3.713398,3.761066,3.843885,4.023466,4.54195]},"high":{"vat_bn":13.75591,"kakwani":3.162632,"rate_all":4.59215,"rates":[3.847939,4.247536,4.246369,4.28711,4.429611,4.506046,4.503186,4.563031,4.670795,4.980005]}},"t5":{"headline":{"removed":83.29657,"lo":82.844309,"hi":83.776543,"shortfall":14.500186,"calc":"EUROMOD"},"balanced_half":{"removed":84.970291,"lo":null,"hi":null,"shortfall":13.884579,"calc":"Item-level calculation"},"balanced_maximum":{"removed":86.114029,"lo":null,"hi":null,"shortfall":13.526122,"calc":"Item-level calculation"},"balanced_measured":{"removed":87.517943,"lo":null,"hi":null,"shortfall":12.857474,"calc":"Item-level calculation"},"import_only":{"removed":29.396782,"lo":29.054694,"hi":29.753357,"shortfall":37.075475,"calc":"EUROMOD"},"pass_through_0.5":{"removed":50.832856,"lo":null,"hi":null,"shortfall":null,"calc":"Mixture of EUROMOD liabilities"},"pass_through_0.25":{"removed":28.566242,"lo":null,"hi":null,"shortfall":null,"calc":"Mixture of EUROMOD liabilities"},"formal_only":{"removed":null,"lo":null,"hi":null,"shortfall":44.855,"calc":"EUROMOD"}},"t6":{"resolved":{"revenue":17.408768,"rate":15.717167,"d1":-0.277777,"d10":0.272853},"formal_only":{"revenue":0.944863,"rate":17.697835,"d1":-0.022431,"d10":-0.014774},"upstream":{"revenue":17.536066,"rate":14.91981,"d1":-0.26348,"d10":0.282985}},"t7":{"high":{"revenue":40.176214,"burden_half":98.199026,"d1_statutory":1.375706,"d1_chain":0.54895,"d1_chain_half":1.477036},"high_bodegas":{"revenue":40.068118,"burden_half":96.689424,"d1_statutory":2.775458,"d1_chain":1.108,"d1_chain_half":2.90726}},"grid":{"formal":{"unadj":{"vat_bn":17.573391,"shortfall":0.0,"kakwani":-0.925452,"removed":100.0},"formal":{"vat_bn":9.690847,"shortfall":44.855,"kakwani":8.246163,"removed":0.0},"impnat":{"vat_bn":11.056326,"shortfall":37.084846,"kakwani":5.548129,"removed":29.417214},"chain":{"vat_bn":15.017988,"shortfall":14.541319,"kakwani":0.598343,"removed":83.385756},"sort50d25":{"vat_bn":15.369423,"shortfall":12.541506,"kakwani":0.249515,"removed":87.189099},"sort50":{"vat_bn":15.1334,"shortfall":13.884579,"kakwani":0.453015,"removed":84.970291},"sort50d75":{"vat_bn":14.361659,"shortfall":18.276108,"kakwani":1.183742,"removed":77.00302},"sort100d25":{"vat_bn":15.85904,"shortfall":9.755379,"kakwani":-0.210371,"removed":92.203322},"sort100":{"vat_bn":15.196393,"shortfall":13.526122,"kakwani":0.348116,"removed":86.114029},"sort100d75":{"vat_bn":12.701719,"shortfall":27.721868,"kakwani":3.04559,"removed":56.702911},"reg25":{"vat_bn":12.469342,"shortfall":29.044191,"kakwani":3.409834,"removed":52.731483},"reg50":{"vat_bn":13.465223,"shortfall":23.37721,"kakwani":2.179619,"removed":66.144774},"reg150":{"vat_bn":16.620164,"shortfall":5.424263,"kakwani":-0.768841,"removed":98.292435}},"low":{"formal":{"vat_bn":6.671128,"shortfall":62.038471,"kakwani":5.030474,"removed":0.0},"impnat":{"vat_bn":8.713855,"shortfall":50.414493,"kakwani":2.947266,"removed":34.97707},"chain":{"vat_bn":13.584955,"shortfall":22.695882,"kakwani":-1.014402,"removed":101.493466},"sort50d25":{"vat_bn":14.040863,"shortfall":20.101572,"kakwani":-1.225104,"removed":105.031165},"sort50":{"vat_bn":13.751979,"shortfall":21.745446,"kakwani":-1.080013,"removed":102.595076},"sort50d75":{"vat_bn":12.820804,"shortfall":27.044224,"kakwani":-0.535256,"removed":93.448606},"sort100d25":{"vat_bn":14.676513,"shortfall":16.484459,"kakwani":-1.49674,"removed":109.59192},"sort100":{"vat_bn":13.888762,"shortfall":20.967092,"kakwani":-1.073394,"removed":102.483954},"sort100d75":{"vat_bn":10.96605,"shortfall":37.598556,"kakwani":1.167716,"removed":64.855712},"reg25":{"vat_bn":10.385207,"shortfall":40.903797,"kakwani":0.993529,"removed":67.780311},"reg50":{"vat_bn":11.608151,"shortfall":33.944729,"kakwani":0.029365,"removed":83.968616},"reg150":{"vat_bn":15.623381,"shortfall":11.096382,"kakwani":-1.85909,"removed":115.675775}},"med":{"formal":{"vat_bn":11.723186,"shortfall":33.290134,"kakwani":5.276157,"removed":0.0},"impnat":{"vat_bn":12.744016,"shortfall":27.481182,"kakwani":3.661121,"removed":26.042213},"chain":{"vat_bn":15.60595,"shortfall":11.195567,"kakwani":0.249195,"removed":81.058998},"sort50d25":{"vat_bn":15.863046,"shortfall":9.732583,"kakwani":-0.021215,"removed":85.419318},"sort50":{"vat_bn":15.694413,"shortfall":10.692176,"kakwani":0.134582,"removed":82.907116},"sort50d75":{"vat_bn":15.141874,"shortfall":13.836355,"kakwani":0.684537,"removed":74.039182},"sort100d25":{"vat_bn":16.223965,"shortfall":7.678805,"kakwani":-0.384216,"removed":91.272659},"sort100":{"vat_bn":15.752793,"shortfall":10.359971,"kakwani":0.048639,"removed":84.292939},"sort100d75":{"vat_bn":13.969442,"shortfall":20.507987,"kakwani":2.008341,"removed":52.693043},"reg25":{"vat_bn":13.76413,"shortfall":21.676301,"kakwani":2.268188,"removed":48.50305},"reg50":{"vat_bn":14.483354,"shortfall":17.583612,"kakwani":1.412752,"removed":62.296816},"reg150":{"vat_bn":16.764885,"shortfall":4.600742,"kakwani":-0.825429,"removed":98.387143}},"high":{"formal":{"vat_bn":13.75591,"shortfall":21.723079,"kakwani":3.162632,"removed":0.0},"impnat":{"vat_bn":14.431937,"shortfall":17.876196,"kakwani":2.20204,"removed":23.497355},"chain":{"vat_bn":16.195077,"shortfall":7.843188,"kakwani":-0.074505,"removed":79.184711},"sort50d25":{"vat_bn":16.357777,"shortfall":6.917358,"kakwani":-0.275239,"removed":84.094928},"sort50":{"vat_bn":16.256391,"shortfall":7.494286,"kakwani":-0.161955,"removed":81.323842},"sort50d75":{"vat_bn":15.922773,"shortfall":9.392711,"kakwani":0.232709,"removed":71.669841},"sort100d25":{"vat_bn":16.589886,"shortfall":5.596559,"kakwani":-0.549818,"removed":90.811482},"sort100":{"vat_bn":16.309847,"shortfall":7.190097,"kakwani":-0.230859,"removed":83.009329},"sort100d75":{"vat_bn":15.237162,"shortfall":13.294126,"kakwani":1.136886,"removed":49.552445},"reg25":{"vat_bn":15.059405,"shortfall":14.305638,"kakwani":1.316268,"removed":45.164526},"reg50":{"vat_bn":15.502212,"shortfall":11.785884,"kakwani":0.743353,"removed":59.178805},"reg150":{"vat_bn":16.911185,"shortfall":3.768232,"kakwani":-0.879259,"removed":98.870052}}},"robust":{"allreg":{"shortfall":5.5,"kakwani":-0.8,"removed":98.3},"lam0.25":{"shortfall":14.5,"kakwani":5.6,"removed":28.6},"lam0.5":{"shortfall":14.5,"kakwani":3.6,"removed":50.8},"lam0.75":{"shortfall":14.5,"kakwani":1.9,"removed":68.7}},"informal":{"formal":{"deciles":[64.8298,63.8862,61.7635,61.7574,58.5404,56.9463,54.4432,51.4167,46.0535,32.0158],"all":49.2646},"purchase_share":[3.0164,4.6639,5.7704,6.6102,7.9479,9.1178,10.3315,11.8747,14.8735,25.7936],"low":{"deciles":[71.0257,70.374,69.8363,69.6201,67.6918,67.2627,66.0383,63.535,59.5457,49.6891],"all":61.61},"med":{"deciles":[48.4448,46.418,45.0591,44.968,41.6887,40.5955,38.8207,35.8833,31.9015,22.5694],"all":35.0517},"high":{"deciles":[32.0542,28.9471,28.3539,28.1767,24.8355,24.2436,23.195,20.3495,17.7491,13.1212],"all":20.8372}},"basket":{"1":{"taxable_formal":30.2617,"taxable_informal":40.7409,"untaxed_by_law":28.9973,"informal":64.8298},"2":{"taxable_formal":30.4475,"taxable_informal":40.7103,"untaxed_by_law":28.8422,"informal":63.8862},"3":{"taxable_formal":30.7597,"taxable_informal":39.0505,"untaxed_by_law":30.1898,"informal":61.7635},"4":{"taxable_formal":31.1365,"taxable_informal":39.5521,"untaxed_by_law":29.3114,"informal":61.7574},"5":{"taxable_formal":32.5559,"taxable_informal":37.6891,"untaxed_by_law":29.755,"informal":58.5404},"6":{"taxable_formal":34.3277,"taxable_informal":36.9401,"untaxed_by_law":28.7321,"informal":56.9463},"7":{"taxable_formal":35.5445,"taxable_informal":35.2261,"untaxed_by_law":29.2294,"informal":54.4432},"8":{"taxable_formal":38.1628,"taxable_informal":33.2697,"untaxed_by_law":28.5675,"informal":51.4167},"9":{"taxable_formal":41.5129,"taxable_informal":29.7894,"untaxed_by_law":28.6976,"informal":46.0535},"10":{"taxable_formal":49.9244,"taxable_informal":21.2118,"untaxed_by_law":28.8638,"informal":32.0158},"all":{"taxable_formal":39.1392,"taxable_informal":31.8512,"untaxed_by_law":29.0096,"informal":49.2646}},"upstream_deciles":{"partial":[0.69037,0.69111,0.68874,0.68945,0.68612,0.68435,0.68238,0.67796,0.67177,0.64772],"impnat":[0.18371,0.17788,0.17676,0.17749,0.17722,0.17605,0.17554,0.17411,0.17093,0.16965]},"context":{"simulated_pct_reported":19.9007884021606,"reported_year":"2022"},"states":{"chain/formal/sort50":{"P":[4.910184,5.149264,5.159995,5.145447,5.154466,5.171857,5.131328,5.039066,5.075132,5.287081],"ush":[0.70874,0.707474,0.704947,0.705483,0.701491,0.69945,0.697399,0.691688,0.684113,0.658136],"ushE":0.691076,"dc":{"removed":84.970291,"ubar":0.690456,"ubarE":0.691076,"sEF":0.544701,"acc":0.804187,"grad":1.056598},"border":{"sfB":37.084846,"ubarB":0.173228},"ch":{"invoice":38.2145,"border_final":4.4556,"producer_invoice":15.2664,"inherited":8.5135,"wholesale_inputs":0.9631,"retail_inputs":1.7275,"total":69.1406}},"chain/formal/sort100":{"P":[4.957735,5.186702,5.195154,5.179866,5.186746,5.201098,5.158629,5.061264,5.091372,5.298701],"ush":[0.722566,0.717951,0.714961,0.715416,0.711205,0.708536,0.706413,0.699709,0.690652,0.664601],"ushE":0.699695,"dc":{"removed":86.114029,"ubar":0.698448,"ubarE":0.699695,"sEF":0.544701,"acc":0.810516,"grad":1.06246},"border":{"sfB":37.084846,"ubarB":0.173228},"ch":{"invoice":31.0905,"border_final":6.6841,"producer_invoice":20.0698,"inherited":9.1287,"wholesale_inputs":1.1873,"retail_inputs":1.7811,"total":69.9415}},"chain/formal/sortm":{"P":[5.00892,5.244027,5.250712,5.236716,5.239,5.25113,5.204628,5.103154,5.127746,5.31905],"ush":[0.737448,0.733992,0.730785,0.731823,0.72693,0.724082,0.721602,0.714845,0.705299,0.675921],"ushE":0.71442,"dc":{"removed":87.517943,"ubar":0.713355,"ubarE":0.71442,"sEF":0.544701,"acc":0.821196,"grad":1.065738},"border":{"sfB":37.084846,"ubarB":0.173228},"ch":{"invoice":43.7022,"border_final":4.9785,"producer_invoice":11.3592,"inherited":8.812,"wholesale_inputs":0.89,"retail_inputs":1.6987,"total":71.4406}},"chain/formal/reg25":{"P":[3.722987,3.910421,3.947152,3.948184,4.014189,4.070375,4.097763,4.102052,4.243094,4.712113],"ush":[0.363557,0.36081,0.359511,0.359966,0.358344,0.357185,0.356125,0.353118,0.349079,0.338278],"ushE":0.353217,"dc":{"removed":52.731483,"ubar":0.352487,"ubarE":0.353217,"sEF":0.544701,"acc":0.500647,"grad":1.053266},"border":{"sfB":37.084846,"ubarB":0.173228},"ch":{"invoice":10.7027,"border_final":6.0167,"producer_invoice":6.8076,"inherited":10.1895,"wholesale_inputs":0.7511,"retail_inputs":0.8286,"total":35.2962}},"chain/formal/reg50":{"P":[4.160982,4.371368,4.398847,4.39396,4.438944,4.481102,4.4834,4.452283,4.55519,4.927308],"ush":[0.490907,0.489796,0.48816,0.488612,0.486167,0.484811,0.483459,0.479667,0.47475,0.457993],"ushE":0.479312,"dc":{"removed":66.144774,"ubar":0.478827,"ubarE":0.479312,"sEF":0.544701,"acc":0.628251,"grad":1.05284},"border":{"sfB":37.084846,"ubarB":0.173228},"ch":{"invoice":20.453,"border_final":4.7785,"producer_invoice":10.1036,"inherited":10.6393,"wholesale_inputs":0.8669,"retail_inputs":1.1062,"total":47.9475}},"chain/formal/reg150":{"P":[5.567511,5.838954,5.83485,5.812449,5.789775,5.786228,5.706878,5.562387,5.540979,5.607943],"ush":[0.899861,0.900469,0.897156,0.897973,0.892676,0.890354,0.88744,0.880779,0.871694,0.836634],"ushE":0.879482,"dc":{"removed":98.292435,"ubar":0.879071,"ubarE":0.879482,"sEF":0.544701,"acc":0.930542,"grad":1.056292},"border":{"sfB":37.084846,"ubarB":0.173228},"ch":{"invoice":78.5947,"border_final":0.4343,"producer_invoice":0.0,"inherited":6.4113,"wholesale_inputs":0.3387,"retail_inputs":2.2561,"total":88.0351}},"chain/formal/allreg":{"P":[5.565649,5.836012,5.831879,5.809553,5.786937,5.783334,5.704062,5.55977,5.538568,5.606546],"ush":[0.89932,0.899646,0.89631,0.897137,0.891822,0.889455,0.88651,0.879834,0.870723,0.835856],"ushE":0.878616,"dc":{"removed":98.25164,"ubar":0.878145,"ubarE":0.878616,"sEF":0.544701,"acc":0.930014,"grad":1.056453},"border":{"sfB":37.084846,"ubarB":0.173228},"ch":{"invoice":81.3658,"border_final":0.4363,"producer_invoice":0.0,"inherited":3.4213,"wholesale_inputs":0.2936,"retail_inputs":2.4253,"total":87.9423}},"import/low/headline":{"P":[2.717645,2.827168,2.770703,2.774844,2.788074,2.810551,2.790347,2.829439,2.936431,3.274287],"ush":[0.189711,0.184954,0.186014,0.185152,0.184569,0.186442,0.189726,0.186065,0.18543,0.197293],"ushE":0.188792,"dc":{"removed":34.97707,"ubar":0.187367,"ubarE":0.188792,"sEF":0.371775,"acc":0.384992,"grad":0.908514}},"chain/low/headline":{"P":[4.6235,4.838067,4.788376,4.765587,4.724302,4.713983,4.628889,4.523918,4.508849,4.565031],"ush":[0.673168,0.671662,0.665502,0.663502,0.654701,0.651676,0.647058,0.636356,0.623597,0.591645],"ushE":0.635503,"dc":{"removed":101.493466,"ubar":0.634164,"ubarE":0.635503,"sEF":0.371775,"acc":0.824243,"grad":1.231353},"border":{"sfB":50.414493,"ubarB":0.187367},"ch":{"invoice":41.3731,"border_final":4.2746,"producer_invoice":8.1415,"inherited":7.3062,"wholesale_inputs":0.7523,"retail_inputs":1.6374,"total":63.4851}},"chain/low/sort50":{"P":[4.69622,4.907567,4.858788,4.833438,4.787724,4.779153,4.695181,4.579929,4.558863,4.618085],"ush":[0.691614,0.688483,0.682234,0.679806,0.6701,0.667605,0.663548,0.65124,0.637534,0.607854],"ushE":0.651301,"dc":{"removed":102.595076,"ubar":0.649485,"ubarE":0.651301,"sEF":0.371775,"acc":0.833998,"grad":1.23016},"border":{"sfB":50.414493,"ubarB":0.187367},"ch":{"invoice":36.261,"border_final":6.7493,"producer_invoice":12.1859,"inherited":7.1872,"wholesale_inputs":0.9436,"retail_inputs":1.6926,"total":65.0196}},"chain/low/sort100":{"P":[4.755902,4.958511,4.911621,4.883455,4.834708,4.829429,4.749208,4.624269,4.599364,4.673364],"ush":[0.706754,0.700814,0.69479,0.691824,0.681508,0.679893,0.676987,0.663023,0.64882,0.624743],"ushE":0.664557,"dc":{"removed":102.483954,"ubar":0.662031,"ubarE":0.664557,"sEF":0.371775,"acc":0.841993,"grad":1.217159},"border":{"sfB":50.414493,"ubarB":0.187367},"ch":{"invoice":29.5883,"border_final":10.0001,"producer_invoice":16.0394,"inherited":7.7354,"wholesale_inputs":1.1649,"retail_inputs":1.7475,"total":66.2756}},"chain/low/sortm":{"P":[4.804038,5.011216,4.960987,4.932061,4.876485,4.867423,4.783871,4.650607,4.617197,4.66915],"ush":[0.718964,0.71357,0.706521,0.703504,0.691652,0.68918,0.685609,0.670023,0.653789,0.623456],"ushE":0.671172,"dc":{"removed":105.968269,"ubar":0.668576,"ubarE":0.671172,"sEF":0.371775,"acc":0.84592,"grad":1.252698},"border":{"sfB":50.414493,"ubarB":0.187367},"ch":{"invoice":40.1717,"border_final":7.5025,"producer_invoice":9.2565,"inherited":7.4659,"wholesale_inputs":0.8732,"retail_inputs":1.6665,"total":66.9363},"agg":{"shortfall":20.561012,"removed":105.968269,"kakwani":-1.280918}},"chain/low/reg25":{"P":[3.384423,3.532785,3.47619,3.470502,3.462467,3.471045,3.42411,3.412092,3.473739,3.698749],"ush":[0.358852,0.355738,0.353669,0.35231,0.348317,0.347879,0.347373,0.340899,0.335155,0.326976],"ushE":0.341934,"dc":{"removed":67.780311,"ubar":0.34067,"ubarE":0.341934,"sEF":0.371775,"acc":0.582921,"grad":1.162769},"border":{"sfB":50.414493,"ubarB":0.187367},"ch":{"invoice":9.8716,"border_final":8.5757,"producer_invoice":5.3584,"inherited":8.8093,"wholesale_inputs":0.7073,"retail_inputs":0.7804,"total":34.1027}},"chain/low/reg50":{"P":[3.863436,4.038213,3.983011,3.97074,3.949212,3.948912,3.885692,3.837891,3.868578,4.02173],"ush":[0.480363,0.478069,0.474112,0.472511,0.466503,0.464678,0.46219,0.454051,0.44518,0.425654],"ushE":0.454063,"dc":{"removed":83.968616,"ubar":0.452844,"ubarE":0.454063,"sEF":0.371775,"acc":0.691085,"grad":1.215026},"border":{"sfB":50.414493,"ubarB":0.187367},"ch":{"invoice":19.152,"border_final":7.0488,"producer_invoice":8.0061,"inherited":9.2347,"wholesale_inputs":0.8309,"retail_inputs":1.0603,"total":45.3328}},"chain/low/reg150":{"P":[5.423403,5.673014,5.628074,5.592433,5.526728,5.507513,5.401298,5.23057,5.163956,5.123296],"ush":[0.876078,0.873749,0.86505,0.862182,0.849536,0.84563,0.839192,0.824142,0.806148,0.762208],"ushE":0.823095,"dc":{"removed":115.675775,"ubar":0.821137,"ubarE":0.823095,"sEF":0.371775,"acc":0.926008,"grad":1.249188},"border":{"sfB":50.414493,"ubarB":0.187367},"ch":{"invoice":73.8454,"border_final":0.85,"producer_invoice":0.0,"inherited":4.959,"wholesale_inputs":0.3335,"retail_inputs":2.2216,"total":82.2095}},"chain/low/allreg":{"P":[5.422141,5.670819,5.626037,5.590466,5.524847,5.505686,5.39992,5.229333,5.163173,5.12407],"ush":[0.875758,0.873217,0.864566,0.86171,0.849079,0.845183,0.838849,0.823813,0.80593,0.762444],"ushE":0.822854,"dc":{"removed":115.527195,"ubar":0.820856,"ubarE":0.822854,"sEF":0.371775,"acc":0.925895,"grad":1.247736},"border":{"sfB":50.414493,"ubarB":0.187367},"ch":{"invoice":75.9503,"border_final":0.8527,"producer_invoice":0.0,"inherited":2.7273,"wholesale_inputs":0.2863,"retail_inputs":2.3646,"total":82.1812},"agg":{"shortfall":11.113846,"removed":115.527195,"kakwani":-1.85024}},"import/med/headline":{"P":[3.670343,3.929236,3.952293,3.970847,4.075638,4.142242,4.165176,4.202858,4.339537,4.773652],"ush":[0.185461,0.179355,0.178259,0.178497,0.178259,0.176792,0.176721,0.175241,0.172138,0.170412],"ushE":0.175803,"dc":{"removed":26.042213,"ubar":0.174495,"ubarE":0.175803,"sEF":0.655229,"acc":0.24559,"grad":1.060396}},"chain/med/headline":{"P":[5.043209,5.323213,5.32648,5.315821,5.332276,5.350302,5.297789,5.207347,5.23003,5.392633],"ush":[0.684329,0.684325,0.681558,0.681836,0.676928,0.674818,0.672025,0.665606,0.657115,0.625661],"ushE":0.66495,"dc":{"removed":81.058998,"ubar":0.663697,"ubarE":0.66495,"sEF":0.655229,"acc":0.751794,"grad":1.078208},"border":{"sfB":27.481182,"ubarB":0.174495},"ch":{"invoice":42.8196,"border_final":2.8984,"producer_invoice":9.9326,"inherited":8.4913,"wholesale_inputs":0.7396,"retail_inputs":1.6098,"total":66.4913}},"chain/med/sort50":{"P":[5.096374,5.371168,5.373053,5.360973,5.374047,5.389402,5.334282,5.238745,5.255703,5.409537],"ush":[0.703648,0.701697,0.698616,0.698734,0.693504,0.690938,0.687984,0.680933,0.671097,0.638093],"ushE":0.680432,"dc":{"removed":82.907116,"ubar":0.678818,"ubarE":0.680432,"sEF":0.655229,"acc":0.764684,"grad":1.084202},"border":{"sfB":27.481182,"ubarB":0.174495},"ch":{"invoice":37.5908,"border_final":4.5977,"producer_invoice":14.8987,"inherited":8.3247,"wholesale_inputs":0.9294,"retail_inputs":1.667,"total":68.0083}},"chain/med/sort100":{"P":[5.139434,5.405136,5.405418,5.391797,5.402989,5.415577,5.35881,5.259542,5.271733,5.421105],"ush":[0.719295,0.714001,0.710469,0.710269,0.704989,0.701729,0.69871,0.691086,0.679827,0.646601],"ushE":0.690979,"dc":{"removed":84.292939,"ubar":0.688798,"ubarE":0.690979,"sEF":0.655229,"acc":0.773376,"grad":1.089935},"border":{"sfB":27.481182,"ubarB":0.174495},"ch":{"invoice":30.6562,"border_final":6.8372,"producer_invoice":19.6635,"inherited":8.9821,"wholesale_inputs":1.148,"retail_inputs":1.7222,"total":69.0092}},"chain/med/sortm":{"P":[5.174805,5.443558,5.442549,5.429993,5.436417,5.447133,5.387638,5.283961,5.291924,5.430562],"ush":[0.732148,0.72792,0.724069,0.724564,0.718254,0.714738,0.711317,0.703006,0.690823,0.653556],"ushE":0.70274,"dc":{"removed":85.884621,"ubar":0.700535,"ubarE":0.70274,"sEF":0.655229,"acc":0.782985,"grad":1.096887},"border":{"sfB":27.481182,"ubarB":0.174495},"ch":{"invoice":42.7681,"border_final":5.1258,"producer_invoice":11.0956,"inherited":8.7008,"wholesale_inputs":0.8606,"retail_inputs":1.6425,"total":70.1934},"agg":{"shortfall":9.969241,"removed":85.884621,"kakwani":-0.050071}},"chain/med/reg25":{"P":[4.157735,4.426566,4.443128,4.450737,4.523689,4.573598,4.569023,4.560574,4.657057,4.992516],"ush":[0.362568,0.359514,0.358028,0.35809,0.356058,0.35462,0.353328,0.349868,0.345064,0.331383],"ushE":0.349992,"dc":{"removed":48.50305,"ubar":0.348867,"ubarE":0.349992,"sEF":0.655229,"acc":0.451081,"grad":1.075263},"border":{"sfB":27.481182,"ubarB":0.174495},"ch":{"invoice":10.4729,"border_final":6.1296,"producer_invoice":6.6231,"inherited":10.2125,"wholesale_inputs":0.7189,"retail_inputs":0.7931,"total":34.9501}},"chain/med/reg50":{"P":[4.502904,4.777053,4.788479,4.788824,4.839612,4.877041,4.853749,4.813219,4.880775,5.147928],"ush":[0.487995,0.486478,0.484514,0.484614,0.481425,0.479715,0.477842,0.473203,0.466905,0.445685],"ushE":0.472919,"dc":{"removed":62.296816,"ubar":0.471807,"ubarE":0.472919,"sEF":0.655229,"acc":0.577945,"grad":1.077903},"border":{"sfB":27.481182,"ubarB":0.174495},"ch":{"invoice":20.0466,"border_final":4.9034,"producer_invoice":9.8169,"inherited":10.6076,"wholesale_inputs":0.8314,"retail_inputs":1.061,"total":47.2669}},"chain/med/reg150":{"P":[5.613579,5.894727,5.888091,5.865637,5.845258,5.841776,5.758473,5.614601,5.58836,5.640537],"ush":[0.891589,0.891357,0.88725,0.887598,0.880493,0.87743,0.873487,0.864416,0.852267,0.807989],"ushE":0.863581,"dc":{"removed":98.387143,"ubar":0.861799,"ubarE":0.863581,"sEF":0.655229,"acc":0.906203,"grad":1.085708},"border":{"sfB":27.481182,"ubarB":0.174495},"ch":{"invoice":77.243,"border_final":0.5654,"producer_invoice":0.0,"inherited":6.0295,"wholesale_inputs":0.3278,"retail_inputs":2.1836,"total":86.3493}},"chain/med/allreg":{"P":[5.61274,5.893092,5.886426,5.86402,5.843731,5.840199,5.756915,5.613251,5.587148,5.639996],"ush":[0.891284,0.890764,0.88664,0.886992,0.879888,0.87678,0.872805,0.863757,0.851607,0.80759],"ushE":0.862997,"dc":{"removed":98.343777,"ubar":0.861158,"ubarE":0.862997,"sEF":0.655229,"acc":0.905781,"grad":1.085734},"border":{"sfB":27.481182,"ubarB":0.174495},"ch":{"invoice":79.7241,"border_final":0.5679,"producer_invoice":0.0,"inherited":3.371,"wholesale_inputs":0.2832,"retail_inputs":2.339,"total":86.2852},"agg":{"shortfall":4.622063,"removed":98.343777,"kakwani":-0.822739}},"import/high/headline":{"P":[4.236891,4.602328,4.599361,4.626227,4.739626,4.797485,4.780028,4.799678,4.879042,5.139189],"ush":[0.188447,0.182215,0.181061,0.180489,0.180577,0.178463,0.179234,0.178023,0.175171,0.172726],"ushE":0.178391,"dc":{"removed":23.497355,"ubar":0.177087,"ubarE":0.178391,"sEF":0.765781,"acc":0.2209,"grad":1.06371}},"chain/high/headline":{"P":[5.240473,5.557397,5.550842,5.543164,5.563813,5.579173,5.511578,5.416503,5.41869,5.520944],"ush":[0.674683,0.672723,0.669108,0.668513,0.660648,0.657131,0.652856,0.642043,0.629105,0.586955],"ushE":0.643514,"dc":{"removed":79.184711,"ubar":0.638947,"ubarE":0.643514,"sEF":0.765781,"acc":0.70214,"grad":1.127763},"border":{"sfB":17.876196,"ubarB":0.177087},"ch":{"invoice":41.2732,"border_final":3.1758,"producer_invoice":9.3761,"inherited":8.0579,"wholesale_inputs":0.6824,"retail_inputs":1.4852,"total":64.0506}},"chain/high/sort50":{"P":[5.282734,5.593421,5.586211,5.576678,5.593995,5.607091,5.537348,5.438657,5.436651,5.532449],"ush":[0.695159,0.691224,0.68725,0.68635,0.678229,0.674227,0.66954,0.658708,0.644212,0.599439],"ushE":0.659918,"dc":{"removed":81.323842,"ubar":0.655008,"ubarE":0.659918,"sEF":0.765781,"acc":0.717032,"grad":1.134173},"border":{"sfB":17.876196,"ubarB":0.177087},"ch":{"invoice":36.3026,"border_final":4.8902,"producer_invoice":14.14,"inherited":7.9355,"wholesale_inputs":0.8596,"retail_inputs":1.5419,"total":65.6698}},"chain/high/sort100":{"P":[5.321255,5.623847,5.615756,5.603869,5.61952,5.630145,5.559032,5.457962,5.452382,5.54379],"ush":[0.713822,0.706851,0.702404,0.700822,0.693097,0.688345,0.683578,0.673231,0.657445,0.611746],"ushE":0.674144,"dc":{"removed":83.009329,"ubar":0.669011,"ubarE":0.674144,"sEF":0.765781,"acc":0.729847,"grad":1.137353},"border":{"sfB":17.876196,"ubarB":0.177087},"ch":{"invoice":29.7593,"border_final":7.1518,"producer_invoice":18.8253,"inherited":8.6798,"wholesale_inputs":1.0668,"retail_inputs":1.6004,"total":67.0834}},"chain/high/sortm":{"P":[5.340832,5.643486,5.63449,5.623471,5.634251,5.643302,5.570757,5.465035,5.456547,5.542576],"ush":[0.723307,0.716937,0.712014,0.711255,0.701677,0.696401,0.69117,0.678552,0.660948,0.610428],"ushE":0.680236,"dc":{"removed":84.762183,"ubar":0.674319,"ubarE":0.680236,"sEF":0.765781,"acc":0.735307,"grad":1.152746},"border":{"sfB":17.876196,"ubarB":0.177087},"ch":{"invoice":40.8388,"border_final":5.4288,"producer_invoice":10.5519,"inherited":8.4716,"wholesale_inputs":0.7997,"retail_inputs":1.5263,"total":67.6171},"agg":{"shortfall":7.074802,"removed":84.762183,"kakwani":-0.302517}},"chain/high/reg25":{"P":[4.592831,4.94299,4.939181,4.953444,5.033407,5.076916,5.040424,5.019184,5.071159,5.273129],"ush":[0.3609,0.357174,0.355367,0.354645,0.351698,0.349573,0.34782,0.343151,0.336773,0.31806],"ushE":0.34377,"dc":{"removed":45.164526,"ubar":0.341454,"ubarE":0.34377,"sEF":0.765781,"acc":0.406204,"grad":1.111868},"border":{"sfB":17.876196,"ubarB":0.177087},"ch":{"invoice":9.9986,"border_final":6.3614,"producer_invoice":6.2423,"inherited":10.2604,"wholesale_inputs":0.6524,"retail_inputs":0.7198,"total":34.2349}},"chain/high/reg50":{"P":[4.84512,5.183056,5.178202,5.183858,5.240568,5.273103,5.224247,5.174315,5.206607,5.368884],"ush":[0.483134,0.480467,0.477968,0.477279,0.472365,0.469709,0.466831,0.459852,0.450707,0.421961],"ushE":0.4606,"dc":{"removed":59.178805,"ubar":0.457449,"ubarE":0.4606,"sEF":0.765781,"acc":0.527206,"grad":1.122499},"border":{"sfB":17.876196,"ubarB":0.177087},"ch":{"invoice":19.2076,"border_final":5.1603,"producer_invoice":9.2254,"inherited":10.5424,"wholesale_inputs":0.7582,"retail_inputs":0.9676,"total":45.8615}},"chain/high/reg150":{"P":[5.659738,5.950965,5.941463,5.919051,5.901288,5.897545,5.810207,5.667239,5.636355,5.673934],"ush":[0.877817,0.874853,0.86947,0.868572,0.85722,0.852087,0.846195,0.830664,0.812197,0.75296],"ushE":0.832995,"dc":{"removed":98.870052,"ubar":0.826533,"ubarE":0.832995,"sEF":0.765781,"acc":0.866905,"grad":1.140495},"border":{"sfB":17.876196,"ubarB":0.177087},"ch":{"invoice":74.4512,"border_final":0.8362,"producer_invoice":0.0,"inherited":5.2418,"wholesale_inputs":0.3053,"retail_inputs":2.0338,"total":82.8683}},"chain/high/allreg":{"P":[5.659918,5.950632,5.941102,5.918711,5.901068,5.897282,5.809904,5.667151,5.636337,5.674238],"ush":[0.877904,0.874682,0.869286,0.868391,0.857092,0.851926,0.845999,0.830599,0.812182,0.75329],"ushE":0.832954,"dc":{"removed":98.829577,"ubar":0.826479,"ubarE":0.832954,"sEF":0.765781,"acc":0.86687,"grad":1.140073},"border":{"sfB":17.876196,"ubarB":0.177087},"ch":{"invoice":76.3337,"border_final":0.8397,"producer_invoice":0.0,"inherited":3.2675,"wholesale_inputs":0.2616,"retail_inputs":2.1605,"total":82.863},"agg":{"shortfall":3.769416,"removed":98.829577,"kakwani":-0.877604}},"import/formal/headline":{"ush":[0.18371,0.177879,0.176756,0.177488,0.177218,0.176048,0.175537,0.174112,0.170927,0.16965],"ushE":0.174655,"dc":{"removed":29.396782,"ubar":0.173437,"ubarE":0.174655,"sEF":0.544701,"acc":0.279797,"grad":1.050646}},"chain/formal/headline":{"ush":[0.690372,0.691108,0.688743,0.689454,0.686124,0.684347,0.682378,0.677958,0.671773,0.647723],"ushE":0.676942,"dc":{"removed":83.29657,"ubar":0.676732,"ubarE":0.676942,"sEF":0.544701,"acc":0.793683,"grad":1.049494},"border":{"sfB":37.084846,"ubarB":0.173228},"ch":{"invoice":43.5684,"border_final":2.7637,"producer_invoice":10.2023,"inherited":8.7014,"wholesale_inputs":0.7673,"retail_inputs":1.6701,"total":67.6732}}},"basket_cls":{"formal":{"1":{"taxable_formal":30.2617,"taxable_informal":40.7409,"untaxed_by_law":28.9973},"2":{"taxable_formal":30.4475,"taxable_informal":40.7103,"untaxed_by_law":28.8422},"3":{"taxable_formal":30.7597,"taxable_informal":39.0505,"untaxed_by_law":30.1898},"4":{"taxable_formal":31.1365,"taxable_informal":39.5521,"untaxed_by_law":29.3114},"5":{"taxable_formal":32.5559,"taxable_informal":37.6891,"untaxed_by_law":29.755},"6":{"taxable_formal":34.3277,"taxable_informal":36.9401,"untaxed_by_law":28.7321},"7":{"taxable_formal":35.5445,"taxable_informal":35.2261,"untaxed_by_law":29.2294},"8":{"taxable_formal":38.1628,"taxable_informal":33.2697,"untaxed_by_law":28.5675},"9":{"taxable_formal":41.5129,"taxable_informal":29.7894,"untaxed_by_law":28.6976},"10":{"taxable_formal":49.9244,"taxable_informal":21.2118,"untaxed_by_law":28.8638},"all":{"taxable_formal":39.1392,"taxable_informal":31.8512,"untaxed_by_law":29.0096}},"low":{"1":{"taxable_formal":24.2734,"taxable_informal":46.7293,"untaxed_by_law":28.9973},"2":{"taxable_formal":24.0977,"taxable_informal":47.0602,"untaxed_by_law":28.8422},"3":{"taxable_formal":22.8189,"taxable_informal":46.9913,"untaxed_by_law":30.1898},"4":{"taxable_formal":23.437,"taxable_informal":47.2516,"untaxed_by_law":29.3114},"5":{"taxable_formal":23.5368,"taxable_informal":46.7082,"untaxed_by_law":29.755},"6":{"taxable_formal":24.185,"taxable_informal":47.0829,"untaxed_by_law":28.7321},"7":{"taxable_formal":24.115,"taxable_informal":46.6556,"untaxed_by_law":29.2294},"8":{"taxable_formal":26.2609,"taxable_informal":45.1716,"untaxed_by_law":28.5675},"9":{"taxable_formal":28.1774,"taxable_informal":43.125,"untaxed_by_law":28.6976},"10":{"taxable_formal":32.4019,"taxable_informal":38.7343,"untaxed_by_law":28.8638},"all":{"taxable_formal":26.9563,"taxable_informal":44.0341,"untaxed_by_law":29.0096}},"med":{"1":{"taxable_formal":39.351,"taxable_informal":31.6517,"untaxed_by_law":28.9973},"2":{"taxable_formal":40.6302,"taxable_informal":30.5277,"untaxed_by_law":28.8422},"3":{"taxable_formal":40.2236,"taxable_informal":29.5866,"untaxed_by_law":30.1898},"4":{"taxable_formal":40.9454,"taxable_informal":29.7432,"untaxed_by_law":29.3114},"5":{"taxable_formal":42.374,"taxable_informal":27.871,"untaxed_by_law":29.755},"6":{"taxable_formal":43.9955,"taxable_informal":27.2723,"untaxed_by_law":28.7321},"7":{"taxable_formal":44.7102,"taxable_informal":26.0604,"untaxed_by_law":29.2294},"8":{"taxable_formal":47.2427,"taxable_informal":24.1898,"untaxed_by_law":28.5675},"9":{"taxable_formal":49.6295,"taxable_informal":21.6729,"untaxed_by_law":28.6976},"10":{"taxable_formal":55.2525,"taxable_informal":15.8837,"untaxed_by_law":28.8638},"all":{"taxable_formal":47.3513,"taxable_informal":23.6391,"untaxed_by_law":29.0096}},"high":{"1":{"taxable_formal":48.4459,"taxable_informal":22.5568,"untaxed_by_law":28.9973},"2":{"taxable_formal":50.8156,"taxable_informal":20.3422,"untaxed_by_law":28.8422},"3":{"taxable_formal":49.6884,"taxable_informal":20.1219,"untaxed_by_law":30.1898},"4":{"taxable_formal":50.7562,"taxable_informal":19.9324,"untaxed_by_law":29.3114},"5":{"taxable_formal":52.1937,"taxable_informal":18.0513,"untaxed_by_law":29.755},"6":{"taxable_formal":53.6645,"taxable_informal":17.6034,"untaxed_by_law":28.7321},"7":{"taxable_formal":53.8791,"taxable_informal":16.8915,"untaxed_by_law":29.2294},"8":{"taxable_formal":56.3228,"taxable_informal":15.1097,"untaxed_by_law":28.5675},"9":{"taxable_formal":57.7465,"taxable_informal":13.5559,"untaxed_by_law":28.6976},"10":{"taxable_formal":60.5824,"taxable_informal":10.5538,"untaxed_by_law":28.8638},"all":{"taxable_formal":55.565,"taxable_informal":15.4254,"untaxed_by_law":29.0096}}}}},"axes":{"rate_max":7,"ushare_default_max":0.75,"ushare_step":0.25,"kakwani":[-5,35],"removed_max":110,"food":[-0.8,0.8],"burden_max":3.0,"reg_revenue_max":100}};
(function () {
  "use strict";
  const D = DATA;
  const RM = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : { matches: false };
  const dur = (ms) => (RM.matches ? 0 : ms);
  const attr0 = d3.transition.prototype.attr;
  d3.transition.prototype.attr = function (name, value) {
    if (arguments.length > 1 && value !== null && typeof value !== "undefined") this.each(function (d, i, n) { if (!this.hasAttribute(name)) this.setAttribute(name, typeof value === "function" ? value.call(this, d, i, n) : value); });
    return attr0.apply(this, arguments);
  };
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const NS = "http://www.w3.org/2000/svg";
  const PHONE = 640; // the phone view ends at this window width (same number in the CSS)
  let STILL = true;
  const textState = new WeakMap(), NUM = /[−-]?\d+(?:\.\d+)?/g;
  const shape = (t) => t.replace(NUM, "#");
  const nums = (t) => (t.match(NUM) || []).map((q) => +q.replace("−", "-"));
  const FADE_OUT = [{ opacity: 1 }, { opacity: 0 }], FADE_IN = [{ opacity: 0 }, { opacity: 1 }];
  function setText(e, to) {
    const old = textState.get(e);
    if (old ? old.to === to : e.textContent === to) return;
    if (old) cancelAnimationFrame(old.raf);
    const st = { to, raf: 0 }, from = e.textContent; textState.set(e, st);
    if (RM.matches || STILL || !from || document.hidden) { e.textContent = to; return; }
    if (to && shape(from) === shape(to)) {
      const a = nums(from), b = nums(to), dec = (to.match(NUM) || []).map((q) => (q.split(".")[1] || "").length), t0 = performance.now();
      const step = (now) => {
        const t = Math.min(1, Math.max(0, (now - t0) / 650)), k = 1 - Math.pow(1 - t, 3); let i = 0;
        e.textContent = t >= 1 ? to : to.replace(NUM, () => { const v = (a[i] + (b[i] - a[i]) * k).toFixed(dec[i]); i++; return +v === 0 ? v.replace("-", "") : v.replace("-", "−"); });
        if (t < 1) st.raf = requestAnimationFrame(step);
      };
      st.raf = requestAnimationFrame(step);
    } else {
      e.animate(FADE_OUT, { duration: 120, easing: "ease-in" }).onfinish = () => { if (textState.get(e) !== st) return; e.textContent = to; e.animate(FADE_IN, { duration: 240, easing: "ease-out" }); };
    }
  }
  function setHTML(e, to) {
    const old = textState.get(e);
    if (old && old.to === to) return;
    const st = { to }; textState.set(e, st);
    if (RM.matches || STILL || !old || document.hidden) { e.innerHTML = to; return; }
    const tmp = document.createElement("div"); tmp.innerHTML = to;
    if (shape(tmp.textContent) === shape(e.textContent)) { e.innerHTML = to; return; }
    e.animate([{ opacity: 1, transform: "none" }, { opacity: 0, transform: "translateY(-3px)" }], { duration: 120, easing: "ease-in" }).onfinish = () => {
      if (textState.get(e) !== st) return;
      e.innerHTML = to; e.animate([{ opacity: 0, transform: "translateY(4px)" }, { opacity: 1, transform: "none" }], { duration: 280, easing: "cubic-bezier(0.2, 0.9, 0.3, 1)" });
    };
  }
  function setRoll(e, to) {
    const old = textState.get(e);
    if (old && old.to === to) return;
    textState.set(e, { to });
    const before = e.textContent; e.innerHTML = to;
    const w = document.createTreeWalker(e, NodeFilter.SHOW_TEXT), nodes = []; while (w.nextNode()) nodes.push(w.currentNode);
    const after = e.textContent;
    if (RM.matches || STILL || !old || document.hidden) return;
    const ta = before.match(NUM) || [], tb = after.match(NUM) || [];
    let ti = -1, order = 0;
    nodes.forEach((n) => {
      const f = document.createDocumentFragment(); let last = 0; const txt = n.data;
      txt.replace(NUM, (tok, at) => {
        ti++; f.append(txt.slice(last, at)); last = at + tok.length;
        const was = ta[ti] || "", up = +tok.replace("−", "-") >= +(was || "0").replace("−", "-");
        [...tok].forEach((c, i) => {
          const o = was[was.length - tok.length + i] || "", box = document.createElement("span"), inner = document.createElement("i");
          box.className = "ch"; inner.textContent = c; box.append(inner);
          if (o !== c && /\d/.test(c)) { box.classList.add(up ? "up-roll" : "down-roll"); box.dataset.c = o; box.style.setProperty("--d", order++ * 45 + "ms"); }
          f.append(box);
        });
      });
      f.append(txt.slice(last)); n.replaceWith(f);
    });
  }
  const fx = (x, d) => (x == null || isNaN(x) ? "–" : (x < 0 ? "−" : "") + Math.abs(x).toFixed(d));
  const f0 = (x) => fx(x, 0), f1 = (x) => fx(x, 1), f2 = (x) => fx(x, 2);
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const GLOSS = {
    formalonly: "<b>‘Formal only’</b><br>A common shortcut: count VAT only on purchases from formal, VAT-registered shops and treat purchases from informal outlets as carrying no VAT at all.",
    alltaxed: "<b>All purchases taxed</b><br>Every taxable purchase taxed at the statutory rate, as if bought from a formal shop. The benchmark for revenue and progressivity.",
    upstream: "<b>Upstream VAT</b><br>VAT paid earlier in the supply chain, at the border or by registered suppliers, that an informal shop can’t reclaim. It stays in the shop’s costs. How much reaches its prices depends on pass-through.",
    ushare: "<b>Upstream share</b><br>VAT carried by an informal purchase as a share of the VAT on the same purchase bought formally. A share of 0 means untaxed. A share of 1 means taxed in full.",
    border: "<b>Border VAT</b><br>VAT charged by customs on imports. Registered firms deduct it later. Unregistered firms can’t.",
    alone: "<b>Border VAT alone</b><br>A separate calculation (‘import only’ in the paper): no domestic supplier is registered, so informal purchases carry only VAT charged on imports. The plum ribbon in the full-chain diagram is a different amount, usually smaller. There, registered firms deduct border VAT and charge VAT on their own sales, which is amber.",
    credit: "<b>Input credit</b><br>A registered firm deducts the VAT on its suppliers’ invoices from the VAT it charges, so only the value it adds is taxed.",
    registration: "<b>Registration proxies</b><br>Estimates, sector by sector, of the share of output sold by VAT-registered firms, built from census, labour-force, or national-accounts data. No source measures this share directly.",
    passthrough: "<b>Pass-through</b><br>The share of upstream VAT an informal seller passes into its price. At 1, households bear all of it. Below 1, the seller absorbs the rest from its income. Revenue doesn’t change.",
    sorting: "<b>Sourcing</b><br>Random: every buyer gets the same mix of registered and unregistered suppliers. Sorting: registered suppliers sell first to buyers who can claim input credits, leaving fewer for informal shops.",
    kakwani: "<b>Kakwani index</b><br>A measure of how progressive a tax is: how concentrated the tax is among richer households, minus how concentrated consumption is (its Gini). Above zero, richer households pay a larger share of the tax than of consumption. Shown × 100.",
    gain: "<b>Progressivity gain</b><br>How much more progressive VAT looks under ‘formal only’ than with all purchases taxed. It arises because poorer households buy more from informal shops.",
    accounting: "<b>Accounting factor</b><br>The share of the progressivity gain removed if every household’s informal purchases carried the same upstream share.",
    gradient: "<b>Gradient factor</b><br>Multiplies the accounting factor. Above 1 when poorer households’ informal purchases carry a larger upstream share than richer households’.",
    cls: "<b>Outlet classification</b><br>Which outlet types recorded in the household survey count as formal (charging VAT). The options differ only for ambiguous outlets, such as markets, general shops, and butchers, and purchases with no recorded outlet.",
    decile: "<b>Consumption deciles</b><br>Ten equal-sized groups of people ranked by household consumption per adult equivalent (equivalized consumption) before indirect taxes, from the poorest (1) to the richest (10).",
    shortfall: "<b>Revenue shortfall</b><br>VAT that would be collected if every taxable purchase were taxed, but isn’t collected in the scenario, as % of that full amount.",
    effrate: "<b>Effective VAT rate</b><br>VAT paid by a decile as a percentage of its consumption before indirect taxes.",
    basket: "<b>Purchases by outlet</b><br>How each decile’s recorded purchases split between taxable goods bought formally, taxable goods bought informally, and goods exempt from VAT.",
  };
  const tipTable = (rows) => `<table class="tt">${rows.map(([c, t, v]) => `<tr><td><i class="key" style="background:${c}"></i></td><td>${t}</td><td class="n">${v}</td></tr>`).join("")}</table>`;
  const term = (k, txt) => `<span class="term" tabindex="0" data-tip="${GLOSS[k].replace(/"/g, "&quot;")}">${txt}</span>`;
  const OPT_TIP = {
    "scope:formal": "<b>Not at all (‘formal only’)</b><br>Informal purchases carry no VAT.",
    "scope:import": "<b>Border VAT alone</b><br>A separate calculation (‘import only’ in the paper): informal purchases carry only VAT charged on imports, as if every domestic supplier were unregistered.",
    "scope:chain": "<b>Full chain (headline)</b><br>Informal purchases carry VAT from customs and from registered domestic producers and wholesalers.",
    "cls:low": "<b>Low formal</b><br>Purchases with no recorded outlet are treated as informal. Ambiguous outlets are informal too.",
    "cls:formal": "<b>Headline</b><br>The paper’s main classification: ambiguous outlets (markets, general shops, butchers) treated as informal.",
    "cls:med": "<b>Medium formal</b><br>Half of the purchases at ambiguous outlets treated as VAT-remitting.",
    "cls:high": "<b>High formal</b><br>All purchases at ambiguous outlets treated as VAT-remitting.",
    "alt:headline": "<b>Headline</b><br>Random sourcing and the headline registration proxies.",
    "alt:sort50": "<b>Partial sorting</b><br>Halfway between random sourcing and full sorting. Buyers with and without credit rights each make up half of demand.",
    "alt:sort100": "<b>Full sorting</b><br>Registered suppliers sell first to buyers who can claim input credits, as far as their demand allows. The two buyer groups have equal demand shares.",
    "alt:sortm": "<b>Full sorting, measured demand</b><br>As full sorting, with each buyer group’s demand share measured from the national accounts and surveys.",
    "alt:reg25": "<b>Registration ×¼</b><br>Every domestic registration share multiplied by 0.25.",
    "alt:reg50": "<b>Registration ×½</b><br>Every domestic registration share halved.",
    "alt:reg150": "<b>Registration ×1.5</b><br>Every domestic registration share multiplied by 1.5, capped at 100%.",
    "alt:allreg": "<b>All registered</b><br>Every domestic producer and wholesaler registered: only the shop’s own margin is untaxed. An upper bound.",
  };
  const S = { cc: "RW", scope: "chain", alt: "headline", cls: "formal", lam: 1, tab: "rate" };
  const C = () => D.countries[S.cc];

  const ALT_TEXT = {
    headline: "the headline chain",
    sort50: "partial sorting (α = 0.5, equal demand shares)",
    sort100: "full sorting (α = 1, equal demand shares)",
    sortm: "full sorting with measured demand shares",
    reg25: "registration proxies multiplied by 0.25",
    reg50: "registration proxies halved",
    reg150: "registration proxies multiplied by 1.5 (capped at one)",
    allreg: "every domestic producer and wholesaler registered",
  };
  const CLS_TEXT = { formal: "headline", low: "‘low formal’", med: "‘medium formal’", high: "‘high formal’" };
  const CLS_KEY = { formal: "formal", low: "low", med: "med", high: "high" };
  function available(key, v, st) {
    st = st || S;
    const c = D.countries[st.cc];
    if (key === "alt") {
      if (st.scope !== "chain" && v !== "headline") return [false, "Alternative chain assumptions apply to the full chain."];
      return [true, ""];
    }
    return [true, ""];
  }
  function lamAvailable(st) {
    st = st || S;
    if (st.scope === "formal") return false;
    const x = D.countries[st.cc].states[`${st.scope}/${st.cls}/${st.alt}`];
    return (st.cls === "formal" && st.alt === "headline") || !!(x && x.dc);
  }
  function resolve() {
    const c = C(), sc = c.scen, t5 = c.t5;
    const fKey = CLS_KEY[S.cls];
    const g = c.grid[fKey];
    const KT = sc.unadj.kakwani;
    const KF = sc[fKey].kakwani;
    const sfF = S.cls === "formal" ? t5.formal_only.shortfall : 100 * (1 - sc[fKey].vat_bn / sc.unadj.vat_bn);
    const key = `${S.scope}/${S.cls}/${S.alt}`;
    const X = c.states[key] || {};
    const R = {
      KT, KF, KP: KF, removed: 0, ci: null, sfF, sfP: sfF, sfB: null, ubar: 0, ubarB: null,
      ratesT: sc.unadj.rates, ratesF: sc[fKey].rates, ratesP: null,
      calc: "euromod", lamOK: false, noGain: KF <= KT, ribbons: "none", phiW: c.chain.phiW, lam: 1,
      ch: c.chain.channels, ush: null, ushB: null, ushE: null, key,
    };
    const ushOf = (k) => (c.states[k] && c.states[k].ush ? c.states[k] : null);
    if (S.scope === "formal") {
      R.ratesP = R.ratesF;
      R.ush = new Array(10).fill(0); R.ushE = 0; R.ushB = null;   // no upstream VAT is counted
      return R;
    }
    let uE = null, grad = null, sEF = c.decomp.sEF;
    if (S.scope === "import") {
      R.ribbons = "border";
      if (S.cls === "formal") {
        R.KP = sc.impnat.kakwani; R.removed = t5.import_only.removed; R.ci = [t5.import_only.lo, t5.import_only.hi];
        R.sfP = t5.import_only.shortfall; R.ratesP = sc.impnat.rates;
        uE = c.chain.ubarBE; grad = c.decomp.gradientB;
      } else {
        const x = g.impnat; R.KP = x.kakwani; R.removed = x.removed; R.sfP = x.shortfall; R.calc = "item";
      }
      R.ubar = 1 - R.sfP / R.sfF; R.ubarB = R.ubar; R.sfB = R.sfP;
    } else {
      R.ribbons = X.ch ? "channels" : "faded";
      if (X.ch) R.ch = X.ch;
      const a = S.alt;
      if (a === "headline") {
        if (S.cls === "formal") {
          R.KP = sc.partial.kakwani; R.removed = c.decomp.removed; R.ci = [t5.headline.lo, t5.headline.hi];
          R.sfP = t5.headline.shortfall; R.sfB = t5.import_only.shortfall; R.ratesP = sc.partial.rates;
          uE = c.chain.ubarE; grad = c.decomp.gradient;
        } else {
          R.KP = g.chain.kakwani; R.removed = g.chain.removed; R.sfP = g.chain.shortfall; R.sfB = g.impnat.shortfall; R.calc = "item";
        }
      } else if (X.agg) {
        R.removed = X.agg.removed; R.sfP = X.agg.shortfall; R.KP = X.agg.kakwani; R.calc = "computed";
        if (a === "allreg") R.phiW = 1;
      } else if (a === "sortm") {
        const x = t5.balanced_measured; R.removed = x.removed; R.sfP = x.shortfall; R.KP = KF - (x.removed / 100) * (KF - KT); R.calc = "item";
      } else if (a === "allreg") {
        const x = c.robust.allreg; R.removed = x.removed; R.sfP = x.shortfall; R.KP = x.kakwani; R.calc = "rounded"; R.phiW = 1;
      } else {
        const x = g[a];
        R.KP = x.kakwani; R.removed = x.removed; R.sfP = x.shortfall; R.calc = "item";
        if (S.cls === "formal" && (a === "sort50" || a === "sort100")) {
          const y = a === "sort50" ? t5.balanced_half : t5.balanced_maximum;
          R.removed = y.removed; R.sfP = y.shortfall;
        }
        if (a.startsWith("reg")) R.phiW = Math.min(1, c.chain.phiW * { reg25: 0.25, reg50: 0.5, reg150: 1.5 }[a]);
      }
      if (R.sfB == null && X.border) { R.sfB = X.border.sfB; }
      R.ubar = 1 - R.sfP / R.sfF;
      if (R.sfB != null) R.ubarB = 1 - R.sfB / R.sfF;
    }
    if (!R.ratesP && X.P) { R.ratesP = X.P; }
    R.ush = X.ush || null; R.ushE = X.ushE ?? null;
    const bS = ushOf(`import/${S.cls}/headline`); R.ushB = S.scope === "chain" && bS ? bS.ush : null;
    if (uE == null && X.dc) { uE = X.dc.ubarE; grad = X.dc.grad; sEF = X.dc.sEF; R.dcComputed = true; }
    R.lamOK = uE != null;
    R.fac = uE != null ? { uE, grad, sEF } : null;
    if (R.lamOK && S.lam < 1) {
      const l = S.lam;
      const acc = (l * uE) / (sEF + (1 - sEF) * l * uE);
      R.removed = 100 * grad * acc;
      R.KP = KF - (R.removed / 100) * (KF - KT);
      if (R.ratesP) R.ratesP = R.ratesF.map((f, i) => f + l * (R.ratesP[i] - f));
      R.ci = null; R.calc = R.dcComputed ? "computed" : "identity"; R.lam = l;
    }
    if (R.noGain) R.removed = null;
    return R;
  }
  function buildCountries() {
    const box = $("#countries");
    D.order.forEach((cc) => {
      const c = D.countries[cc];
      const b = document.createElement("button");
      b.type = "button"; b.setAttribute("role", "tab"); b.dataset.cc = cc; b.id = "tab-" + cc;
      b.innerHTML = `${c.name}<small>${c.model} ${c.year}</small>`;
      b.addEventListener("click", () => { S.cc = cc; update(); });
      box.appendChild(b);
    });
  }
  function buildControls() {
    $$(".seg button").forEach((b) => { const k = b.closest(".seg").dataset.key + ":" + b.dataset.v; if (OPT_TIP[k]) b.setAttribute("data-tip", OPT_TIP[k]); });
    $$("[data-term]").forEach((e) => e.setAttribute("data-tip", GLOSS[e.dataset.term]));
    $$(".seg").forEach((seg) => {
      seg.addEventListener("click", (e) => {
        const b = e.target.closest("button");
        if (!b || b.disabled) return;
        const key = seg.dataset.key, v = b.dataset.v;
        S[key] = v;
        if (key === "scope" && v !== "chain") S.alt = "headline";
        if (!lamAvailable()) S.lam = 1;
        update();
      });
      seg.addEventListener("keydown", (e) => {
        if (!["ArrowLeft", "ArrowRight"].includes(e.key)) return;
        const bs = $$("button:not([hidden]):not(:disabled)", seg);
        const i = bs.indexOf(document.activeElement);
        if (i < 0) return;
        const n = bs[(i + (e.key === "ArrowRight" ? 1 : bs.length - 1)) % bs.length];
        n.focus(); n.click(); e.preventDefault();
      });
    });
    const lam = $("#lam");
    lam.addEventListener("input", () => { S.lam = +lam.value; update(true); });
    const ticks = $("#lam-ticks");
    [0.25, 0.5, 0.75, 1].forEach((t) => {
      const s = document.createElement("span"); s.style.left = t * 100 + "%"; s.textContent = t === 1 ? "1 (headline)" : String(t);
      ticks.appendChild(s);
    });
    $$("#reg-tabs button").forEach((b) => b.addEventListener("click", () => { if (regTab !== b.dataset.v) { regTab = b.dataset.v; STILL = false; drawPolicy(true); } }));
    $$("#inc-tabs button").forEach((b) => b.addEventListener("click", () => { S.tab = b.dataset.tab; drawIncidence(resolve()); syncTabs(); }));
  }
  function syncControls(R) {
    $$("#countries button").forEach((b) => b.setAttribute("aria-selected", String(b.dataset.cc === S.cc)));
    $$(".seg").forEach((seg) => {
      const key = seg.dataset.key;
      $$("button", seg).forEach((b) => {
        const v = b.dataset.v;
        let on = S[key] === v;
        if (seg.dataset.group === "sourcing" && v === "headline") on = !["sort50", "sort100", "sortm"].includes(S.alt);
        if (seg.dataset.group === "registration" && v === "headline") on = !["reg25", "reg50", "reg150", "allreg"].includes(S.alt);
        b.setAttribute("aria-checked", String(on));
        b.tabIndex = on ? 0 : -1;
        const [ok, why] = available(key, v);
        b.disabled = !ok;
        const k0 = key + ":" + v; if (OPT_TIP[k0]) b.setAttribute("data-tip", OPT_TIP[k0] + (ok ? "" : `<br><span class="u">Not available here: ${why}</span>`));
      });
    });
    const lam = $("#lam"), ok = lamAvailable();
    lam.disabled = !ok; lam.value = String(ok ? S.lam : 1);
    const lv = ok ? S.lam : 1;
    $("#lam-val").innerHTML = lv >= 0.999 ? `<b>λ = 1</b><span class="lg">, full pass-through</span>` : `<b>λ = ${lv.toFixed(2)}</b><span class="lg">, sellers absorb ${f0(100 * (1 - lv))}%</span>`;
    lam.setAttribute("data-tip", !ok ? (S.scope === "formal" ? "<b>Pass-through</b><br>No upstream VAT is counted." : "<b>Pass-through</b><br>Available for the headline classification with the full chain or border VAT alone.") : "<b>Pass-through</b><br>Exact formula (online appendix, Proposition OA.4).");
  }
  function syncTabs() { $$("#inc-tabs button").forEach((b) => b.setAttribute("aria-selected", String(b.dataset.tab === S.tab))); }
  function citeRemoved(R) {
    const head = S.scope === "chain" && S.cls === "formal" && S.alt === "headline";
    if (S.scope === "formal") return "Authors’ calculations";
    if (head && R.lam >= 0.999) return "Paper, Table 4";
    if (head && [0.5, 0.25].includes(+R.lam.toFixed(2))) return "Paper, Table 5";
    if (R.lam < 0.999 || R.noGain) return "Authors’ calculations";
    if (S.scope === "import") return S.cls === "formal" ? "Paper, Table 5" : "Authors’ calculations";
    if (S.cls === "formal") return S.alt.startsWith("sort") ? "Paper, Table 5" : "Online appendix, Table OA.5";
    return S.alt === "headline" ? "Online appendix, Table OA.15" : "Authors’ calculations";
  }
  const G = { W: 800, H: 300, prod: { x: 0, w: 0 }, whole: { x: 0, w: 0 }, retail: { x: 0, w: 0 }, house: { x: 0, L: 1 }, px: 0, pw: 0, imp: [2, 46], stageY: 66, y0: 76, y1: 260, gap: 10, k: 0.62, minH: 42, stubY: 276, xh: 0, extra: 0 };
  function layoutChain() {
    const box = $(".chain-scroll"), avail = Math.floor(box.getBoundingClientRect().width), svg = $("#chain");
    G.port = window.innerWidth <= PHONE;
    box.classList.toggle("port", G.port); svg.classList.toggle("port", G.port); svg.classList.toggle("tiny", avail < 330);
    const house = $("#ch-house"), stages = $$("#chain .stage");
    if (house) house.style.display = G.port ? "none" : "";
    if (stages[3]) stages[3].style.display = G.port ? "none" : "";
    if (G.port) {
      const w3 = (avail - 20) / 3, bh = 46;
      Object.assign(G, { W: avail, pad: avail < 330 ? 6 : 8, w3, bh, yImp: 1, hImp: 30, yP: 54, yW: 154, yR: 254 }); G.H = G.yR + bh + 4;
      svg.setAttribute("viewBox", `0 0 ${avail} ${G.H}`); svg.style.width = avail + "px"; svg.style.height = G.H + "px"; svg.classList.remove("tight");
      stages.forEach((t, i) => { t.setAttribute("x", 1); t.setAttribute("y", [G.yP, G.yW, G.yR, 0][i] - 8); });
      return;
    }
    const W = Math.max(640, avail), nw = Math.round(W * (W < 700 ? 0.2 : W < 760 ? 0.188 : 0.18)), L = Math.round(W * (W < 680 ? 0.245 : 0.225)), gp = (W - 3 * nw - L - 2) / 3;
    G.W = W; G.pad = W < 760 ? 8 : 12; G.house = { x: W - L - 1, L };
    ["prod", "whole", "retail"].forEach((k, i) => (G[k] = { x: Math.round(1 + i * (nw + gp)), w: nw }));
    G.px = G.prod.x + 14; G.pw = G.prod.w - 14;
    G.y1 = G.y0 + 174 + (window.innerWidth < 1100 ? 14 : 0) - (G.cut || 0) + Math.round(0.38 * G.xh) + G.extra; G.stubY = G.y1 + 13; G.H = G.y1 + 20;
    svg.setAttribute("viewBox", `0 0 ${W} ${G.H}`); const z = avail / W;
    svg.style.width = W * z + "px"; svg.style.height = G.H * z + "px";
    svg.classList.toggle("tight", W < 700);
    stages.forEach((t, i) => { t.setAttribute("x", [G.px, G.whole.x, G.retail.x, G.house.x][i]); t.setAttribute("y", G.stageY); });
  }
  function layoutPage() {
    const bar = $(".vat-bar"), spot = $("#page-top");
    if (bar && spot) { const to = window.innerWidth < 1240 ? spot : bar; const nav = $("#topnav"); if (nav.parentNode !== to) to.appendChild(nav); }
    measureNav();
    const work = $(".work"), root = $("#vatx") || document.documentElement;
    work.style.minHeight = ""; root.style.setProperty("--fold-top", "28px"); G.xh = 0; G.extra = 0; root.style.setProperty("--xh", "0px");
    G.cut = $(".site-header") && window.innerWidth >= 1100 && window.innerHeight < 720 ? Math.min(20, 720 - window.innerHeight) : 0; root.style.setProperty("--cut", G.cut + "px");
    layoutChain(); sizeIncidence(); reserve();
    if (window.innerWidth < 1100) return;
    const top = work.getBoundingClientRect().top + window.scrollY, target = window.innerHeight - 50;
    G.xh = Math.max(0, Math.min(340, target - (top + work.offsetHeight)));
    root.style.setProperty("--xh", G.xh + "px");
    if (G.xh > 0) work.style.minHeight = Math.min(target - top, work.offsetHeight + G.xh) + "px";
    layoutChain(); sizeIncidence();
    const ctl = $("#controls"); ctl.style.alignContent = "start";
    const last = Math.max(...$$("#controls .ctl").map((e) => e.getBoundingClientRect().bottom));
    const slack = ctl.getBoundingClientRect().bottom - last - parseFloat(getComputedStyle(ctl).paddingBottom);
    ctl.style.alignContent = "";
    if (slack > 2) { G.extra = Math.floor(slack * 0.9); layoutChain(); }
    root.style.setProperty("--fold-top", Math.max(28, Math.min(80, window.innerHeight + 4 - Math.round(work.getBoundingClientRect().bottom + window.scrollY))) + "px");
  }
  function incHeight() { return window.innerWidth < 700 ? 190 : window.innerWidth < 1100 ? 236 : 203 - (G.cut || 0) + Math.round(0.42 * G.xh); }
  function reserve() {
    const cap = $("#chain-cap"), rk = $("#rev-key"), ik = $("#inc-key"), tp = $(".tabpanel"), narrow = window.innerWidth < 1100;
    [cap, rk, ik, tp].forEach((e) => { e.style.height = e.style.minHeight = ""; });
    if (!narrow) return;
    const tall = (e, list) => {
      const c = e.cloneNode(false); c.removeAttribute("id"); c.setAttribute("aria-hidden", "true");
      Object.assign(c.style, { position: "absolute", visibility: "hidden", left: 0, top: 0, width: e.getBoundingClientRect().width + "px", height: "auto", minHeight: 0 });
      e.parentNode.appendChild(c);
      const h = Math.max(...list.map((t) => { c.innerHTML = t; return c.getBoundingClientRect().height; }));
      c.remove(); return Math.ceil(h);
    };
    const keys = (a) => a.map((t) => `<span><i class="key"></i>${t}</span>`).join("");
    const set = (e, h) => { e.style.height = e.style.minHeight = h + "px"; return h; };
    set(cap, tall(cap, ["formal", "import", "faded", "chain"].map((k) => capText(k, G.port))));
    set(rk, tall(rk, [keys(["Formal purchases", "Border VAT alone", "Added by the domestic chain", "Not collected"])]));
    const h = set(ik, tall(ik, [keys(["All taxed", "Not collected", "Border VAT alone", "Formal purchases"]), keys(["Exempt or zero-rated", "Taxable, informal outlet", "Taxable, formal outlet"]), keys(["Full chain, this setting", "Border VAT alone"])]));
    tp.style.height = incHeight() + parseFloat(getComputedStyle(ik).marginTop) + h + 2 + "px";
  }
  function sizeIncidence() { const h = incHeight(); $("#incidence").setAttribute("height", h); }
  const CH = [
    { key: "invoice", color: "var(--up)", label: "Immediate supplier’s invoice VAT" },
    { key: "producer_invoice", color: "var(--up-light)", label: "Producer’s invoice VAT, retained at wholesale" },
    { key: "border_final", color: "var(--alone)", label: "Border VAT retained" },
    { key: "inherited", color: "var(--up-mid)", label: "VAT inherited in producers’ input costs" },
    { key: "wholesale_inputs", color: "var(--up-pale)", label: "Wholesalers’ operating inputs" },
    { key: "retail_inputs", color: "var(--up-pale)", label: "The shop’s own operating inputs" },
  ];
  function split(share) {
    const He = G.y1 - G.y0 - G.gap;
    const h = Math.max(G.minH, Math.min(He - G.minH, share * He));
    return { top: [G.y0, G.y0 + h], bot: [G.y0 + h + G.gap, G.y1] };
  }
  const mid = (a) => (a[0] + a[1]) / 2;
  const cur = (x1, y1, x2, y2) => { const m = (x1 + x2) / 2; return `C${m},${y1} ${m},${y2} ${x2},${y2}`; };
  function stack(ys, ws, centre) {
    const tot = ws.reduce((a, b) => a + b, 0);
    let y = centre - tot / 2; const out = [];
    ws.forEach((w) => { out.push(y + w / 2); y += w; });
    return out;
  }

  let chainBuilt = false;
  function el(tag, attrs, parent) {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  function buildChain() {
    const svg = $("#chain");
    const defs = el("defs", {}, svg);
    const pat = el("pattern", { id: "hatch", width: 6, height: 6, patternUnits: "userSpaceOnUse", patternTransform: "rotate(45)" }, defs);
    el("rect", { width: 6, height: 6, fill: "var(--bg)" }, pat);
    el("line", { x1: 0, y1: 0, x2: 0, y2: 6, style: "stroke:var(--untaxed);stroke-width:2" }, pat);
    const pat2 = el("pattern", { id: "hatch-up", width: 5, height: 5, patternUnits: "userSpaceOnUse", patternTransform: "rotate(-45)" }, defs);
    el("rect", { width: 5, height: 5, fill: "var(--up-pale)" }, pat2);
    el("line", { x1: 0, y1: 0, x2: 0, y2: 5, style: "stroke:var(--up);stroke-width:1.6" }, pat2);

    const gStage = el("g", {}, svg);
    [["Producers", G.px], ["Wholesalers", G.whole.x], ["Retailers", G.retail.x], ["VAT carried (formal = 100)", G.house.x]].forEach(([t, x]) => {
      const tx = el("text", { x, y: G.stageY, class: "stage" }, gStage); tx.textContent = t;
    });
    el("g", { id: "ch-links" }, svg);
    el("g", { id: "ch-ribbons" }, svg);
    el("g", { id: "ch-hits" }, svg);
    el("g", { id: "ch-nodes" }, svg);
    el("g", { id: "ch-house" }, svg);
    chainBuilt = true;
  }

  function nodeG(parent, id, cls) {
    let g = parent.querySelector("#" + id);
    if (!g) {
      g = el("g", { id, class: "node " + cls }, parent);
      el("rect", { rx: 2 }, g);
      el("text", { class: "t1" }, g);
      el("text", { class: "t2" }, g);
      el("text", { class: "pct", "text-anchor": "end" }, g);
    }
    return g;
  }
  function setNode(g, x, w, y, h, t1, t2, pct, cls, T, tip) {
    g.setAttribute("class", "node " + cls);
    if (tip) { g.setAttribute("data-tip", tip); g.setAttribute("tabindex", "0"); }
    const r = g.querySelector("rect"), a = g.querySelector(".t1"), b = g.querySelector(".t2"), p = g.querySelector(".pct");
    setText(a, t1); setText(b, t2); setText(p, pct || "");
    const sel = d3.select(g);
    const tr = (s) => (T ? s.transition().duration(dur(650)).ease(d3.easeCubicInOut) : s);
    tr(sel.select("rect")).attr("x", x).attr("y", y).attr("width", w).attr("height", h);
    tr(sel.select(".t1")).attr("x", x + G.pad).attr("y", y + 19);
    const line = G.port && h < 36; // one-line box: name left, note right
    sel.select(".t2").attr("text-anchor", line ? "end" : "start");
    tr(sel.select(".t2")).attr("x", line ? x + w - G.pad : x + G.pad).attr("y", line ? y + 19 : y + 34);
    tr(sel.select(".pct")).attr("x", x + w - G.pad + 1).attr("y", y + 19);
  }
  const BUNDLE = ["producer_invoice", "border_final", "inherited", "wholesale_inputs"];
  function ribbonWidths(ch) { const w = {}; CH.forEach((o) => (w[o.key] = Math.max(1.3, ch[o.key] * G.k))); return w; }
  const borderWidth = (R) => (S.scope === "import" ? Math.max(1.3, 100 * R.ubarB * G.k) : 0);
  function landGeom(R, infAll) {
    const P = split(0.5), W = split(R.phiW), Rt = split(1 - infAll), widths = ribbonWidths(R.ch), wB = borderWidth(R);
    const bx = (x, w, a) => [x, w, a[0], a[1] - a[0]];
    const boxes = { impin: bx(G.prod.x, G.prod.w, G.imp), impfg: bx(G.whole.x, G.whole.w, G.imp), pr: bx(G.px, G.pw, P.top), pu: bx(G.px, G.pw, P.bot), wr: bx(G.whole.x, G.whole.w, W.top), wu: bx(G.whole.x, G.whole.w, W.bot), rf: bx(G.retail.x, G.retail.w, Rt.top), ri: bx(G.retail.x, G.retail.w, Rt.bot) };
    const yPR = mid(P.top), yPU = mid(P.bot), yWR = mid(W.top), yWU = mid(W.bot), yRF = mid(Rt.top), yRI = mid(Rt.bot), yFB = Math.max(yRF, G.y0 + 34);
    const xP2 = G.prod.x + G.prod.w, xW1 = G.whole.x, xW2 = G.whole.x + G.whole.w, xR1 = G.retail.x, xR2 = G.retail.x + G.retail.w;
    const links = {
      l1: `M${G.prod.x + G.prod.w * 0.66},${G.imp[1]} L${G.prod.x + G.prod.w * 0.66},${P.top[0]}`,
      l2: `M${G.whole.x + G.whole.w * 0.68},${G.imp[1]} L${G.whole.x + G.whole.w * 0.68},${W.top[0]}`,
      l3: `M${xP2},${yPR - 8} ${cur(xP2, yPR - 8, xW1, yWR - 8)}`,
      l4: `M${xW2},${yWR - 8} ${cur(xW2, yWR - 8, xR1, yRF - 8)}`,
      l5: `M${xR2},${yFB} L${G.house.x - 4},${yFB}`,
    };
    const inX = G.prod.x + 5;
    const inD = `M${inX},${G.imp[1]} L${inX},${yPU - 7} Q${inX},${yPU} ${inX + 7},${yPU} L${G.px},${yPU}`;
    const puD = `M${xP2},${yPU} ${cur(xP2, yPU, xW1, yWU)}`;
    const order = ["invoice", ...BUNDLE], yR = stack(null, order.map((q) => widths[q]), yRI), yRk = {}; order.forEach((q, i) => (yRk[q] = yR[i]));
    const yW = stack(null, BUNDLE.map((q) => widths[q]), yWU), yWk = {}; BUNDLE.forEach((q, i) => (yWk[q] = yW[i]));
    const gx = (xP2 + xW1) / 2, iy = (G.imp[0] + G.imp[1]) / 2;
    const intoR = (q) => `${cur(xW2, yWk[q], xR1 + 10, yRk[q])} L${xR1 + 40},${yRk[q]}`;
    const drop = (y, end) => `M${xW1 + 6},${iy} L${gx + 12},${iy} Q${gx},${iy} ${gx},${iy + 12} L${gx},${y - 14} C${gx},${y} ${gx + 8},${y} ${end},${y}`;
    const paths = {
      invoice: `M${xW2 - 6},${yWR} ${cur(xW2 - 6, yWR, xR1 + 10, yRk.invoice)} L${xR1 + 40},${yRk.invoice}`,
      producer_invoice: `M${xP2 - 6},${yPR} ${cur(xP2 - 6, yPR, xW1 + 6, yWk.producer_invoice)} L${xW2},${yWk.producer_invoice} ${intoR("producer_invoice")}`,
      border_final: `${drop(yWk.border_final, xW1 + 6)} L${xW2},${yWk.border_final} ${intoR("border_final")}`,
      inherited: `M${xP2 - 6},${yPU} ${cur(xP2 - 6, yPU, xW1 + 6, yWk.inherited)} L${xW2},${yWk.inherited} ${intoR("inherited")}`,
      wholesale_inputs: `M${G.whole.x + 64},${G.stubY} L${G.whole.x + 64},${yWk.wholesale_inputs} L${xW2},${yWk.wholesale_inputs} ${intoR("wholesale_inputs")}`,
      retail_inputs: `M${G.retail.x + 96},${G.stubY} L${G.retail.x + 96},${Rt.bot[1] - 6}`,
      border_all: `${drop(yWU, xW1 + 6)} L${xW2},${yWU} ${cur(xW2, yWU, xR1 + 10, yRI)} L${xR1 + 40},${yRI}`,
      exit: `M${xR2 - 6},${yRI} L${G.house.x - 2},${yRI}`,
    };
    const avg = (o) => BUNDLE.reduce((a, q) => a + o[q], 0) / BUNDLE.length, yWb = avg(yWk), yRb = avg(yRk);
    const hits = {
      "imp-wu": drop(yWk.border_final, xW1),
      "pr-wu": `M${xP2},${yPR} ${cur(xP2, yPR, xW1, yWk.producer_invoice)}`,
      "pu-wu": `M${xP2},${yPU} ${cur(xP2, yPU, xW1, yWk.inherited)}`,
      "in-wu": `M${G.whole.x + 64},${G.stubY} L${G.whole.x + 64},${W.bot[1]}`,
      "wu-ri": `M${xW2},${yWb} ${cur(xW2, yWb, xR1, yRb)}`,
      "wr-ri": `M${xW2},${yWR} ${cur(xW2, yWR, xR1, yRk.invoice)}`,
      "in-ri": `M${G.retail.x + 96},${G.stubY} L${G.retail.x + 96},${Rt.bot[1]}`,
    };
    const dots = { wholesale_inputs: [G.whole.x + 64, G.stubY], retail_inputs: [G.retail.x + 96, G.stubY] };
    return { boxes, links, inD, puD, widths, wB, paths, hits, dots, yFB, yRI };
  }
  function portGeom(R, infAll) {
    const { W: A, w3, bh, yImp, hImp, yP, yW, yR } = G, widths = ribbonWidths(R.ch), wB = borderWidth(R), gap = 10, minW = Math.min(112, (A - gap) * 0.36);
    const pair = (share, y) => { const w = Math.max(minW, Math.min(A - gap - minW, share * (A - gap))); return [[0.7, w - 0.7, y, bh], [w + gap, A - gap - w - 0.7, y, bh]]; };
    const [wr, wu] = pair(R.phiW, yW), [rf, ri] = pair(1 - infAll, yR);
    const boxes = { impin: [0.7, 2 * w3 + gap - 0.7, yImp, hImp], pr: [0.7, w3 - 0.7, yP, bh], pu: [w3 + gap, w3, yP, bh], impfg: [2 * (w3 + gap), w3 - 0.7, yP, bh], wr, wu, rf, ri };
    const cx = (b) => b[0] + b[1] / 2, right = (b) => b[0] + b[1], yP2 = yP + bh, yW2 = yW + bh;
    const v = (x1, y1, x2, y2) => { const m = (y1 + y2) / 2; return `C${x1},${m} ${x2},${m} ${x2},${y2}`; };
    const lane = (b) => Math.min(right(b) - 14, b[0] + 92); // right of the row’s name
    const links = {
      l1: `M${lane(boxes.pr)},${yImp + hImp} L${lane(boxes.pr)},${yP}`,
      l2: `M${boxes.impfg[0] + 12},${yP2} ${v(boxes.impfg[0] + 12, yP2, right(wr) - 8, yW)}`,
      l3: `M${lane(boxes.pr)},${yP2} ${v(lane(boxes.pr), yP2, lane(wr), yW)}`,
      l4: `M${lane(wr)},${yW2} ${v(lane(wr), yW2, lane(rf), yR)}`,
      l5: `M${cx(rf)},${yR + bh} L${cx(rf)},${yR + bh}`,
    };
    const inD = `M${cx(boxes.pu)},${yImp + hImp} L${cx(boxes.pu)},${yP}`;
    const order = ["producer_invoice", "inherited", "border_final", "wholesale_inputs"];
    const place = (list, c) => { const o = {}; stack(null, list.map((q) => widths[q]), c).forEach((x, i) => (o[list[i]] = x)); return o; };
    const xW = place(order, cx(wu)), xR = place(["invoice", ...order], cx(ri)), xPU = cx(boxes.pu), xPR = boxes.pr[0] + boxes.pr[1] * 0.5, xIG = cx(boxes.impfg), xI = right(wu) - 16, xJ = right(ri) - 16, xWR = cx(wr);
    const puD = `M${xPU},${yP2} ${v(xPU, yP2, cx(wu) - 18, yW)}`;
    const down = (q) => `L${xW[q]},${yW2 - 4} ${v(xW[q], yW2 - 4, xR[q], yR + 6)} L${xR[q]},${yR + 24}`;
    const into = (x, q) => `M${x},${yP2 - 6} ${v(x, yP2 - 6, xW[q], yW + 6)} ${down(q)}`;
    const paths = {
      invoice: `M${xWR},${yW2 - 6} ${v(xWR, yW2 - 6, xR.invoice, yR + 6)} L${xR.invoice},${yR + 24}`,
      producer_invoice: into(xPR, "producer_invoice"), inherited: into(xPU, "inherited"), border_final: into(xIG, "border_final"),
      wholesale_inputs: `M${xI},${yW - 18} L${xI},${yW + 8} L${xW.wholesale_inputs},${yW + 20} ${down("wholesale_inputs")}`,
      retail_inputs: `M${xJ},${yR - 18} L${xJ},${yR + 8}`,
      border_all: `M${xIG},${yP2 - 6} ${v(xIG, yP2 - 6, cx(wu), yW + 6)} L${cx(wu)},${yW2 - 4} ${v(cx(wu), yW2 - 4, cx(ri), yR + 6)} L${cx(ri)},${yR + 24}`,
      exit: `M${cx(ri)},${yR + bh} L${cx(ri)},${yR + bh}`,
    };
    const avg = (o) => order.reduce((a, q) => a + o[q], 0) / order.length;
    const hits = {
      "imp-wu": `M${xIG},${yP2} ${v(xIG, yP2, xW.border_final, yW)}`, "pr-wu": `M${xPR},${yP2} ${v(xPR, yP2, xW.producer_invoice, yW)}`, "pu-wu": `M${xPU},${yP2} ${v(xPU, yP2, xW.inherited, yW)}`,
      "in-wu": `M${xI},${yW - 18} L${xI},${yW}`, "wu-ri": `M${avg(xW)},${yW2} ${v(avg(xW), yW2, avg(xR), yR)}`, "wr-ri": `M${xWR},${yW2} ${v(xWR, yW2, xR.invoice, yR)}`, "in-ri": `M${xJ},${yR - 18} L${xJ},${yR}`,
    };
    const dots = { wholesale_inputs: [xI, yW - 18], retail_inputs: [xJ, yR - 18] };
    return { boxes, links, inD, puD, widths, wB, paths, hits, dots, yFB: 0, yRI: 0 };
  }

  function capText(kind, port) {
    return kind === "formal"
      ? `No ribbons: this setting counts no VAT on informal purchases.`
      : kind === "import"
        ? port ? `<span class="nw"><i class="key" style="background:var(--alone)"></i> <b class="cname-alone">Plum</b></span>: ${term("alone", "border VAT alone")}, with every domestic supplier treated as unregistered.` : `The <i class="key" style="background:var(--alone)"></i> <b class="cname-alone">plum</b> ribbon is ${term("upstream", "upstream VAT")} under ${term("alone", "border VAT alone")}:<br>VAT charged on imports, with every domestic supplier treated as unregistered.`
        : kind === "faded"
          ? port ? `Faded ribbons: the split of ${term("upstream", "upstream VAT")} in the headline case. The bars are for this setting.` : `Faded ribbons show the split of ${term("upstream", "upstream VAT")} in the paper’s headline case.<br>The split wasn’t computed for this setting. The bars ${port ? "below" : "on the right"} are for this setting.`
          : port ? `<span class="nw"><i class="key" style="background:var(--alone)"></i> <b class="cname-alone">Plum</b></span>: border VAT that isn’t deducted. <span class="nw"><i class="key sp" style="background:var(--up)"></i> <b class="cname-amber">Amber</b></span>: other ${term("upstream", "upstream VAT")}.`
          : `All coloured ribbons are ${term("upstream", "upstream VAT")}: paid before the informal sale and not deducted.<br><span class="nw"><i class="key" style="background:var(--alone)"></i> <b class="cname-alone">Plum</b></span>: border VAT that unregistered wholesalers and service sellers can’t deduct. <span class="nw"><i class="key sp" style="background:var(--up)"></i> <b class="cname-amber">Amber</b></span>: other upstream VAT.`;
  }
  function drawChain(R, quick) {
    if (!chainBuilt) { buildChain(); layoutChain(); }
    const c = C(), ch = R.ch, svg = $("#chain");
    const T = !quick;
    const infAll = c.informal[CLS_KEY[S.cls]].all / 100;
    const Q = G.port ? portGeom(R, infAll) : landGeom(R, infAll), B = Q.boxes, port = G.port;
    const allReg = S.scope === "chain" && S.alt === "allreg";
    const nodes = $("#ch-nodes");
    const off = S.scope === "import" ? " off" : "";
    setNode(nodeG(nodes, "n-impin", "imp"), ...B.impin, "Imported inputs", port && G.W < 340 ? "border VAT" : "border VAT charged", "", "imp", T, `<b>Imported inputs</b><br>Border VAT is charged on imports. Registered producers deduct it. Unregistered producers can’t, so it stays in their costs.`);
    setNode(nodeG(nodes, "n-impfg", "imp"), ...B.impfg, port && G.w3 < 104 ? "Imports" : "Imported goods", port ? "border VAT" : "border VAT charged", "", "imp", T, `<b>Imported final goods</b><br>Border VAT charged on entry. An unregistered wholesaler can’t deduct it, so it stays in its costs.`);
    setNode(nodeG(nodes, "n-pr", "reg"), ...B.pr, "Registered", allReg ? "all producers" : off ? (port ? "not counted" : "not counted here") : port ? "deduct VAT" : "deduct input VAT", "", "reg" + off, T, `<b>Registered producers</b><br>They charge VAT on sales and deduct VAT on inputs. Registration shares vary across ${c.chain.production_groups} product groups, so the two boxes are drawn equal.`);
    setNode(nodeG(nodes, "n-pu", "unreg"), ...B.pu, "Unregistered", allReg ? (port ? "none here" : "none in this case") : port ? "VAT in costs" : "VAT stays in costs", "", "unreg" + (allReg ? " off" : ""), T, `<b>Unregistered producers</b><br>They charge no VAT and can’t deduct the VAT on their inputs. That VAT stays in their costs.`);
    setNode(nodeG(nodes, "n-wr", "reg"), ...B.wr, "Registered", port ? (off ? "not counted" : f0(100 * R.phiW) + "% of supply") : off ? "not counted here" : "of wholesale supply", port ? "" : off ? "0%" : f0(100 * R.phiW) + "%", "reg" + off, T, `<b>Registered wholesalers</b><br>${off ? "Set to 0% in this calculation" : f1(100 * R.phiW) + "% of wholesale supply" + (R.phiW !== c.chain.phiW ? ` (headline ${f1(100 * c.chain.phiW)}%)` : " (Table 3)")}. Their invoice VAT can’t be deducted by an informal shop.`);
    setNode(nodeG(nodes, "n-wu", "unreg"), ...B.wu, "Unregistered", port ? (off ? "100" : f0(100 * (1 - R.phiW))) + "% of supply" : "VAT stays in costs", port ? "" : off ? "100%" : f0(100 * (1 - R.phiW)) + "%", "unreg" + (allReg ? " off" : ""), T, `<b>Unregistered wholesalers</b><br>${off ? "100%" : f1(100 * (1 - R.phiW)) + "%"} of wholesale supply. They can’t deduct the VAT their suppliers charge, so it stays in their costs.`);
    setNode(nodeG(nodes, "n-rf", "formal"), ...B.rf, "Formal", port ? f0(100 * (1 - infAll)) + "% of spending" : "of spending", port ? "" : f0(100 * (1 - infAll)) + "%", "formal", T, `<b>Formal outlets</b><br>${f1(100 * (1 - infAll))}% of recorded household purchases (${S.cls === "formal" ? "headline" : CLS_TEXT[S.cls]} classification). They charge VAT on their sales and deduct the VAT on suppliers’ invoices.`);
    setNode(nodeG(nodes, "n-ri", "unreg"), ...B.ri, "Informal", port ? f0(100 * infAll) + "% of spending" : "of spending", port ? "" : f0(100 * infAll) + "%", "unreg", T, `<b>Informal outlets</b><br>${f1(100 * infAll)}% of recorded household purchases (${S.cls === "formal" ? "headline" : CLS_TEXT[S.cls]} classification). They charge no VAT on their sales. ${S.scope === "formal" ? "In this setting, no VAT is counted on these purchases." : `They can’t deduct the VAT included in what they pay suppliers, so it’s part of their costs. ${S.lam > 0.999 ? "With full pass-through, it’s passed on in their prices." : `With this pass-through, ${Math.round(100 * S.lam)}% of it is passed on in their prices and the seller absorbs the rest.`}`}`);
    const links = $("#ch-links");
    const L = Object.entries(Q.links);
    L.forEach(([id, d]) => {
      let p = links.querySelector("#" + id);
      if (!p) p = el("path", { id, class: id === "l5" ? "credit solid" : "credit" }, links);
      if (id === "l5") p.setAttribute("style", "stroke-dasharray:none;stroke-width:2");
      const s = d3.select(p); (T ? s.transition().duration(dur(650)) : s).attr("d", d).style("opacity", port && id === "l5" ? 0 : off && id !== "l5" ? 0.25 : 1);
    });
    const inOn = S.scope !== "formal" && !allReg, inD = Q.inD, puD = Q.puD;
    [["l6", inD, inOn], ["l7", puD, S.scope === "import"]].forEach(([id, d, on]) => {
      let p = links.querySelector("#" + id);
      if (!p) p = el("path", { id, class: "inlink" }, links);
      p.style.stroke = "var(--alone)";
      const s = d3.select(p); (T ? s.transition().duration(dur(650)) : s).attr("d", d).style("opacity", on ? (R.ribbons === "faded" ? 0.45 : 1) : 0);
    });
    const widths = Q.widths, paths = Q.paths, wB = Q.wB, show = R.ribbons === "channels" || R.ribbons === "faded";
    const uShow = S.scope === "formal" ? 0 : R.ubar;
    if (S.scope === "import") paths.border_final = paths.border_all;
    widths.exit = uShow > 0 && !port ? 2 : 0;

    const rib = $("#ch-ribbons");
    const keys = CH.map((o) => o.key).concat(["exit"]);
    keys.forEach((kk) => {
      let p = rib.querySelector("#r-" + kk), f = rib.querySelector("#f-" + kk);
      const color = kk === "exit" ? "var(--ser)" : CH.find((o) => o.key === kk).color;
      if (!p) {
        p = el("path", { id: "r-" + kk, class: "ribbon", "data-ch": kk }, rib);
        p.style.stroke = color;
        f = el("path", { id: "f-" + kk, class: "flow" }, rib);
      }
      const isCh = CH.some((o) => o.key === kk);
      let w = widths[kk];
      if (isCh && !show) w = S.scope === "import" && kk === "border_final" ? wB : 0;
      p.classList.toggle("faded", isCh && R.ribbons === "faded");
      const sp = d3.select(p), sf = d3.select(f);
      (T ? sp.transition().duration(dur(700)).ease(d3.easeCubicInOut) : sp).attr("d", paths[kk]).attr("stroke-width", w);
      (T ? sf.transition().duration(dur(700)).ease(d3.easeCubicInOut) : sf).attr("d", paths[kk]).attr("stroke-width", w > 3 ? Math.min(2, w / 3) : 0);
      f.style.display = kk !== "exit" && w > 3 && !(isCh && R.ribbons === "faded") ? "" : "none";
      if (Q.dots[kk]) {
        let o = rib.querySelector("#o-" + kk);
        if (!o) { o = el("circle", { id: "o-" + kk, class: "ribbon indot", "data-ch": kk, cx: Q.dots[kk][0], cy: Q.dots[kk][1], r: 0 }, rib); o.style.fill = color; }
        o.classList.toggle("faded", R.ribbons === "faded");
        const so = d3.select(o);
        (T ? so.transition().duration(dur(700)).ease(d3.easeCubicInOut) : so).attr("cx", Q.dots[kk][0]).attr("cy", Q.dots[kk][1]).attr("r", w > 0 ? Math.max(4.2, w / 2 + 2.4) : 0);
      }
    });
    const note = R.ribbons === "faded" ? `<span class="u">These values are for the headline case, shown for reference. This setting’s total is ${f1(100 * uShow)}.</span>` : `<span class="u">Points per 100 of VAT on a comparable formal purchase, all goods and services together. They don’t show which firm remits the tax.${R.key === "chain/formal/headline" ? " Online appendix, Table OA.10." : " Authors’ calculations."}</span>`;
    const CHNOTE = {
      invoice: "Goods: the registered wholesaler’s invoice, including on imported goods it resells. Services: VAT on the provider’s own domestic input invoices.",
      border_final: "Goods: border VAT that an unregistered wholesaler can’t deduct. Services: border VAT on the informal provider’s imported inputs. This isn’t the ‘border VAT alone’ calculation.",
      inherited: "Includes border VAT on imported inputs. Part also passes through registered wholesalers.",
      wholesale_inputs: "Includes registered wholesalers’ inputs.",
    };
    const tipRows = (title, list) => {
      const rows = list.map((k) => { const o = CH.find((q) => q.key === k); return `<tr><td><i class="key" style="background:${o.color}"></i></td><td>${o.label}</td><td class="n">${f1(ch[k])}</td></tr>`; }).join("");
      const tot = list.length > 1 ? `<tr class="tot"><td></td><td>Total drawn on this link</td><td class="n">${f1(list.reduce((a, k) => a + ch[k], 0))}</td></tr>` : "";
      const more = list.length > 1 ? "Routes are simplified. Costs inside producers’ prices and wholesalers’ inputs also pass through registered wholesalers. Services have no wholesaler." : CHNOTE[list[0]] || "";
      return `<b>${title}</b><table class="tt">${rows}${tot}</table>${more ? more + "<br>" : ""}${note}`;
    };
    const bundle = ["producer_invoice", "border_final", "inherited", "wholesale_inputs"];
    const sumW = (ks) => ks.reduce((a, k) => a + widths[k], 0);
    const HITS = show ? [
      { id: "imp-wu", d: Q.hits["imp-wu"], w: widths.border_final, keys: ["border_final"], title: "Imports → unregistered wholesalers and service sellers" },
      { id: "pr-wu", d: Q.hits["pr-wu"], w: widths.producer_invoice, keys: ["producer_invoice"], title: "Registered producers → unregistered wholesalers" },
      { id: "pu-wu", d: Q.hits["pu-wu"], w: widths.inherited, keys: ["inherited"], title: "Producers’ costs → unregistered wholesalers" },
      { id: "in-wu", d: Q.hits["in-wu"], w: widths.wholesale_inputs, keys: ["wholesale_inputs"], title: "Operating inputs → unregistered wholesalers" },
      { id: "wu-ri", d: Q.hits["wu-ri"], w: sumW(bundle), keys: bundle, title: "Unregistered wholesalers → informal shops" },
      { id: "wr-ri", d: Q.hits["wr-ri"], w: widths.invoice, keys: ["invoice"], title: "Immediate suppliers → informal shops" },
      { id: "in-ri", d: Q.hits["in-ri"], w: widths.retail_inputs, keys: ["retail_inputs"], title: "Operating inputs → informal shops" },
    ] : [];
    if (S.scope === "import") HITS.push({ id: "border", d: paths.border_all, w: wB, keys: ["border_final"], tip: `<b>Border VAT alone</b><table class="tt"><tr><td><i class="key" style="background:var(--alone)"></i></td><td>Border VAT on imported inputs and goods</td><td class="n">${f1(100 * (R.ubarB || 0))}</td></tr></table><span class="u">Points per 100 of VAT on a comparable formal purchase. Every domestic supplier is treated as unregistered.</span>` });
    if (inOn) HITS.push({ id: "in-pu", d: inD, w: 2, keys: S.scope === "import" ? ["border_final"] : ["inherited"], tip: `<b>Imported inputs to unregistered producers</b><br>Unregistered producers can’t deduct the border VAT on their imported inputs. It stays in their costs.<br>This line isn’t drawn to scale. ${S.scope === "import" ? "Its amount is included in the plum ribbon." : "Its amount isn’t measured separately. It’s part of ‘VAT inherited in producers’ input costs’."}` });
    if (uShow > 0 && !port) HITS.push({ id: "exit", d: paths.exit, w: 2, keys: ["exit"], tip: `<b>VAT carried by the informal purchase</b><br>${f1(100 * uShow)} points per 100 of VAT on the same purchase bought formally.` });
    const hg = $("#ch-hits");
    $$(".rhit", hg).forEach((h) => { if (!HITS.some((q) => "hs-" + q.id === h.id)) h.remove(); });
    HITS.forEach((q) => {
      let h = hg.querySelector("#hs-" + q.id);
      if (!h) h = el("path", { id: "hs-" + q.id, class: "rhit", tabindex: "0" }, hg);
      h.setAttribute("d", q.d); h.setAttribute("stroke-width", Math.max(10, q.w + 6));
      h.setAttribute("data-bundle", q.keys.join(" "));
      h.setAttribute("data-tip", q.tip || tipRows(q.title, q.keys));
    });
    if (!hg.dataset.wired) {
      hg.dataset.wired = "1";
      const lit = (h) => { const ks = h ? h.getAttribute("data-bundle").split(" ") : null; $$("#ch-ribbons .ribbon").forEach((p) => { p.style.opacity = ks && !ks.includes(p.dataset.ch) ? 0.18 : ""; }); };
      hg.addEventListener("pointerover", (e) => { const h = e.target.closest(".rhit"); if (h) lit(h); });
      hg.addEventListener("pointerout", () => lit(null));
      hg.addEventListener("focusin", (e) => { const h = e.target.closest(".rhit"); if (h) lit(h); });
      hg.addEventListener("focusout", () => lit(null));
    }

    setHTML($("#chain-cap"), capText(S.scope === "chain" ? (R.ribbons === "faded" ? "faded" : "chain") : S.scope, port));
    $(".work").classList.toggle("alone", S.scope === "import");
    drawHouse(R, Q.yFB, Q.yRI, T);
    const em = $("#endpoint-m");
    if (em) {
      const u = S.scope === "formal" ? 0 : R.ubar;
      if (!em.dataset.built) {
        em.dataset.built = "1";
        em.innerHTML = `<div class="em-h"><h3>VAT carried (formal = 100)</h3><p id="em-p"></p></div><div id="em-f" tabindex="0"><span>Bought formally</span><span class="bar"><i style="width:100%;background:var(--collected)"></i></span><b class="col">100</b></div><div id="em-i" tabindex="0"><span>Bought informally</span><span class="bar hatch"><i id="em-a" style="background:var(--ser-soft)"></i><i id="em-b" style="background:var(--ser)"></i></span><b class="up" id="em-v"></b></div>`;
      }
      $("#em-f").setAttribute("data-tip", $("#h-fhit").getAttribute("data-tip")); $("#em-i").setAttribute("data-tip", $("#h-ihit").getAttribute("data-tip"));
      $("#em-a").style.width = (100 * u).toFixed(1) + "%"; $("#em-b").style.width = (100 * u * R.lam).toFixed(1) + "%";
      setText($("#em-v"), f0(100 * u));
      setText($("#em-p"), S.scope === "formal" ? "assumed untaxed" : R.lam < 0.999 ? `${f0(100 * u * (1 - R.lam))} absorbed, ${f0(100 * (1 - u))} not collected` : `${f0(100 * (1 - u))} not collected`);
    }
    const desc = $("#chain-desc");
    desc.textContent = `${c.name}: registered share of wholesale supply ${f0(100 * R.phiW)}%, informal outlets ${f0(100 * infAll)}% of spending; an informal purchase carries ${f0(100 * uShow)} per 100 of the VAT on a formal purchase.`;
  }

  function drawHouse(R, yRF, yRI, T) {
    const g = $("#ch-house");
    const X = G.house.x, L = G.house.L, bh = 16;
    if (!g.dataset.built) {
      g.dataset.built = "1";
      el("text", { id: "h-fl", class: "lbl" }, g).textContent = "Bought formally";
      el("text", { id: "h-fv", class: "bigval col", "text-anchor": "end" }, g);
      el("rect", { id: "h-fb", fill: "var(--collected)" }, g);
      el("text", { id: "h-il", class: "lbl" }, g).textContent = "Bought informally";
      el("text", { id: "h-iv", class: "bigval up", "text-anchor": "end" }, g);
      el("rect", { id: "h-it", fill: "url(#hatch)" }, g);
      el("rect", { id: "h-ia", fill: "url(#hatch-up)" }, g);
      el("rect", { id: "h-ib", style: "fill:var(--ser)" }, g);
      el("rect", { id: "h-io", fill: "none", style: "stroke:var(--ink-3);stroke-width:1" }, g);
      el("rect", { id: "h-fhit", class: "hit", tabindex: "0" }, g);
      el("rect", { id: "h-ihit", class: "hit", tabindex: "0" }, g);
      el("text", { id: "h-in", class: "lbl" }, g);
      el("text", { id: "h-in2", class: "lbl" }, g);
      el("text", { id: "h-in3", class: "lbl" }, g);
    }
    const u = S.scope === "formal" ? 0 : R.ubar, lam = R.lam;
    const sel = (id) => { const s = d3.select(g.querySelector("#" + id)); return T ? s.transition().duration(dur(650)).ease(d3.easeCubicInOut) : s; };
    sel("h-fl").attr("x", X).attr("y", yRF - 16);
    sel("h-fv").attr("x", X + L).attr("y", yRF - 13);
    g.querySelector("#h-fv").textContent = "100";
    sel("h-fb").attr("x", X).attr("y", yRF - bh / 2 + 2).attr("width", L).attr("height", bh);
    sel("h-il").attr("x", X).attr("y", yRI - 16);
    sel("h-iv").attr("x", X + L).attr("y", yRI - 13);
    setText(g.querySelector("#h-iv"), S.scope === "formal" ? "0" : f0(100 * u));
    const y = yRI - bh / 2 + 2;
    sel("h-it").attr("x", X).attr("y", y).attr("width", L).attr("height", bh);
    sel("h-io").attr("x", X + L * u + 0.5).attr("y", y + 0.5).attr("width", Math.max(0, L * (1 - u) - 1)).attr("height", bh - 1);
    sel("h-ia").attr("x", X).attr("y", y).attr("width", L * u).attr("height", bh);
    sel("h-ib").attr("x", X).attr("y", y).attr("width", L * u * lam).attr("height", bh);
    const fh = g.querySelector("#h-fhit"), ih = g.querySelector("#h-ihit");
    d3.select(fh).attr("x", X).attr("y", yRF - 30).attr("width", L).attr("height", 40);
    d3.select(ih).attr("x", X).attr("y", yRI - 30).attr("width", L).attr("height", 40);
    fh.setAttribute("data-tip", `<b>Bought from a formal outlet</b><br>100: statutory VAT on the purchase, the benchmark for every scenario (normalized calculation, Section 2.1).`);
    ih.setAttribute("data-tip", S.scope === "formal" ? `<b>Bought from an informal outlet</b><br>0: ‘formal only’ treats informal purchases as untaxed.` :
      `<b>Bought from an informal outlet</b><br>${f1(100 * u)} per 100 of VAT on the formal purchase.${lam < 0.999 ? ` At λ = ${lam.toFixed(2)}, ${f1(100 * u * lam)} is passed into the price and ${f1(100 * u * (1 - lam))} is absorbed by the seller.` : ""} The other ${f1(100 * (1 - u))} isn’t collected.${R.ribbons === "channels" && f1(R.ch.total) !== f1(100 * u) ? (S.cls === "formal" && S.alt === "headline" ? `<br>The bar weights purchases by their VAT. The ribbons weight them by taxable spending and sum to ${f1(R.ch.total)}, so the two differ slightly.` : `<br>The ribbons split the VAT product by product and sum to ${f1(R.ch.total)}. The bar comes from the full calculation, so the two can differ slightly.`) : R.ribbons === "channels" ? "<br>The bar weights purchases by their VAT. The ribbons weight them by taxable spending." : ""}`);
    const L3 = S.scope === "formal" ? ["assumed untaxed", "", ""]
      : lam < 0.999 ? [`${f0(100 * u * lam)} in the price`, `${f0(100 * u * (1 - lam))} absorbed by the seller`, `${f0(100 * (1 - u))} not collected`]
      : [`${f0(100 * (1 - u))} not collected`, "", ""];
    ["h-in", "h-in2", "h-in3"].forEach((id, i) => { setText(g.querySelector("#" + id), L3[i]); sel(id).attr("x", X).attr("y", y + bh + 14 * (i + 1)); });
  }
  function segs(R) {
    const s = [];
    const formal = 100 - R.sfF;
    s.push({ k: "formal", v: formal, fill: "var(--collected)", t: "Formal purchases" });
    const sfB = S.scope === "import" ? R.sfP : S.scope === "chain" ? R.sfB : R.sfF;
    s.push({ k: "border", v: R.sfF - sfB, fill: "var(--alone)", t: "Border VAT alone" });
    s.push({ k: "dom", v: sfB - R.sfP, fill: "var(--up-light)", t: "Added by the domestic chain" });
    s.push({ k: "short", v: R.sfP, fill: "url(#rhatch)", t: "Not collected" });
    return s;
  }
  function ensureDefs(svg, id) {
    if (svg.querySelector("#" + id)) return;
    const defs = el("defs", {}, svg);
    const pat = el("pattern", { id, width: 6, height: 6, patternUnits: "userSpaceOnUse", patternTransform: "rotate(45)" }, defs);
    el("rect", { width: 6, height: 6, fill: "var(--bg)" }, pat);
    el("line", { x1: 0, y1: 0, x2: 0, y2: 6, style: "stroke:var(--untaxed);stroke-width:2" }, pat);
  }
  function drawRevenue(R) {
    const svg = $("#revenue");
    const W = Math.max(280, svg.parentNode.clientWidth), H = 33;
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`); svg.setAttribute("width", W); svg.setAttribute("height", H);
    ensureDefs(svg, "rhatch");
    const x = d3.scaleLinear().domain([0, 100]).range([0, W]);
    const s = segs(R); let acc = 0;
    s.forEach((d) => { d.x0 = acc; acc += Math.max(0, d.v); d.x1 = acc; });
    const g = d3.select(svg);
    const bar = g.selectAll("g.bar").data([0]).join("g").attr("class", "bar");
    const TIP = {
      formal: (d) => `<b>VAT on formal purchases</b><br>${f1(d.v)}% of the VAT with every purchase taxed`,
      border: (d) => `<b>Border VAT alone</b><br>${f1(d.v)}% of the VAT with every purchase taxed. Informal purchases then carry ${f1(100 * R.ubarB)} per 100.<br>A separate calculation (‘import only’ in the paper) with no domestic supplier registered. The plum ribbon in the diagram is a different amount${R.ribbons === "channels" ? ` (${f1(R.ch.border_final)} per 100)` : ""}. In the full chain, registered firms deduct border VAT and charge VAT on their own sales, which is amber.`,
      dom: (d) => `<b>Added by the domestic chain</b><br>${f1(d.v)}% of the VAT with every purchase taxed: the further increase when domestic suppliers’ registration and input credits are counted.<br>It isn’t the sum of the amber ribbons, which also contain border VAT.`,
      up: (d) => `<b>Upstream VAT carried by informal purchases</b><br>${f1(d.v)}% of the VAT with every purchase taxed`,
      short: (d) => `<b>Not collected</b><br>${f1(d.v)}% of the VAT with every purchase taxed`,
    };
    bar.selectAll("rect.s").data(s, (d) => d.k).join(
      (en) => en.append("rect").attr("class", "s").attr("y", 2).attr("height", 28).attr("x", (d) => x(d.x0)).attr("width", 0).attr("tabindex", 0),
      (up) => up,
      (ex) => ex.remove()
    ).attr("fill", (d) => d.fill).attr("data-tip", (d) => (d.v > 0.005 ? TIP[d.k](d) : null)).attr("tabindex", (d) => (d.v > 0.005 ? 0 : null))
      .style("pointer-events", (d) => (d.v > 0.005 ? null : "none"))
      .transition().duration(dur(600)).ease(d3.easeCubicInOut)
      .attr("x", (d) => x(d.x0)).attr("width", (d) => Math.max(0, x(d.x1) - x(d.x0)));
    const un = s[s.length - 1];
    bar.selectAll("rect.outline").data([un]).join("rect").attr("class", "outline").attr("y", 2.5).attr("height", 27).attr("fill", "none").style("stroke", "var(--ink-3)").style("stroke-width", 1).style("pointer-events", "none").style("opacity", un.v > 0.3 ? 1 : 0)
      .transition().duration(dur(600)).ease(d3.easeCubicInOut).attr("x", x(un.x0) + 0.5).attr("width", Math.max(0, x(un.x1) - x(un.x0) - 1));
    bar.selectAll("text.sv").data(s, (d) => d.k).join("text").attr("class", "sv").attr("y", 20.5).attr("text-anchor", "middle").style("pointer-events", "none")
      .style("font-size", "11.5px").style("font-weight", 600).style("font-variant-numeric", "tabular-nums")
      .style("fill", (d) => (d.k === "formal" ? "var(--on-collected)" : d.k === "border" ? "var(--on-alone)" : d.k === "short" ? "var(--ink)" : "var(--on-up)"))
      .style("paint-order", (d) => (d.k === "short" ? "stroke" : null)).style("stroke", (d) => (d.k === "short" ? "var(--bg)" : null)).style("stroke-width", (d) => (d.k === "short" ? 3 : null))
      .each(function (d) { const on = x(d.x1) - x(d.x0) > 26; if (on || !this.textContent) setText(this, on ? f0(d.v) : "0"); this.setAttribute("aria-hidden", on ? "false" : "true"); })
      .transition().duration(dur(600)).ease(d3.easeCubicInOut).attr("x", (d) => (x(d.x0) + x(d.x1)) / 2).style("opacity", (d) => (x(d.x1) - x(d.x0) > 26 ? 1 : 0));
    const KEYT = { formal: "Formal purchases", border: "Border VAT alone", dom: "Added by the domestic chain", up: "Upstream VAT, border and domestic", short: "Not collected" };
    const KEYTIP = { up: "<b>Upstream VAT, combined</b><br>For this assumption only the total was computed, so border and domestic VAT can’t be shown separately." };
    setHTML($("#rev-key"), s.filter((d) => d.v > 0.05 || d.k === "short").map((d) => `<span${KEYTIP[d.k] ? ` class="term" tabindex="0" data-tip="${KEYTIP[d.k].replace(/"/g, "&quot;")}"` : ""}><i class="key${d.k === "short" ? " boxed" : ""}" style="background:${d.k === "short" ? "repeating-linear-gradient(45deg,var(--untaxed) 0 2px,transparent 2px 5px)" : d.fill}"></i>${KEYT[d.k]}</span>`).join(""));
    if (S.scope === "formal") {
      setRoll($("#rev-v"), `<span class="n" data-cap="‘formal only’"><span class="num">${f0(R.sfF)}%</span></span>`);
    } else {
      setRoll($("#rev-v"), `<span class="n" data-cap="‘formal only’"><span class="num">${f0(R.sfF)}%</span></span><span class="to"> → </span><span class="n up" data-cap="with ${S.scope === "import" ? "border VAT alone" : "upstream VAT"}"><span class="num">${f0(R.sfP)}%</span></span>`);
    }
    const extra = S.scope === "formal" ? "<br>All VAT on informal purchases counted as lost." : `<br>= ‘formal only’ shortfall × (1 − upstream share) = ${f1(R.sfF)} × (1 − ${f2(R.ubar)})${R.lam < 0.999 ? "<br>Pass-through below 1 doesn’t change revenue. Sellers absorb the rest." : ""}`;
    bar.selectAll("rect.s").filter((d) => d.k === "short").attr("data-tip", (d) => TIP.short(d) + extra);
  }
  function drawIncidence(R, quickAxis) {
    const svg = $("#incidence");
    const W = Math.max(280, svg.parentNode.clientWidth), H = incHeight();
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`); svg.setAttribute("width", W); svg.setAttribute("height", H);
    ensureDefs(svg, "ihatch");
    const ndTop = S.tab === "rate" && S.scope !== "formal" && !R.ratesP;
    const m = { l: 38, r: S.tab === "rate" ? 112 : 12, t: ndTop ? 42 : 10, b: 46 };
    const g = d3.select(svg);
    const xb = d3.scaleBand().domain(d3.range(1, 11)).range([m.l, W - m.r]).paddingInner(0.22);
    const x = (d) => xb(d) + xb.bandwidth() / 2;
    const AX = DATA.axes, ushTop = Math.max(0, ...(R.ush || []), ...(R.ushB || []));
    const ushMax = Math.max(AX.ushare_default_max, Math.ceil(ushTop / AX.ushare_step - 1e-9) * AX.ushare_step);
    const animAxis = !RM.matches && S.tab === "ushare" && svg.dataset.tab === "ushare" && !quickAxis;
    const still = quickAxis || svg.dataset.tab !== S.tab, D_ = (ms) => (still ? 0 : dur(ms));
    svg.dataset.tab = S.tab;
    const wasStill = STILL; STILL = STILL || still;
    let y, ticks, fmtT;
    if (S.tab === "rate") { y = d3.scaleLinear().domain([0, DATA.axes.rate_max]).range([H - m.b, m.t]); ticks = d3.range(0, DATA.axes.rate_max + 0.5, 1); fmtT = (d) => d + "%"; }
    else if (S.tab === "ushare") { y = d3.scaleLinear().domain([0, ushMax]).range([H - m.b, m.t]); ticks = d3.range(0, ushMax + 0.01, 0.25); fmtT = (d) => d.toFixed(2); }
    else { y = d3.scaleLinear().domain([0, 1]).range([H - m.b, m.t]); ticks = [0, 0.25, 0.5, 0.75, 1]; fmtT = (d) => d * 100 + "%"; }
    const ax = g.selectAll("g.axes").data([0]).join("g").attr("class", "axes");
    const axT = (sel) => (animAxis ? sel.transition().duration(500) : sel.interrupt());
    const axExit = (sel, f) => (animAxis ? f(sel.transition().duration(500)).style("opacity", 0).remove() : sel.interrupt().remove());
    const putL = (q) => q.attr("y1", (d) => y(d)).attr("y2", (d) => y(d)), putT = (q) => q.attr("y", (d) => y(d) + 3.5);
    const gl0 = ax.selectAll("line.gridline").data(ticks, (d) => d).join((en) => putL(en.append("line").attr("class", "gridline")), (up) => up, (ex) => { axExit(ex.classed("gridline", false), putL); return ex; });
    gl0.attr("x1", m.l).attr("x2", W - m.r); putL(axT(gl0));
    const tx0 = ax.selectAll("text.yt").data(ticks, (d) => d).join((en) => putT(en.append("text").attr("class", "yt axis")), (up) => up, (ex) => { axExit(ex.classed("yt", false), putT); return ex; });
    tx0.attr("x", m.l - 6).attr("text-anchor", "end").style("font-size", "11px").style("fill", "var(--ink-3)").text(fmtT); putT(axT(tx0));
    ax.selectAll("text.xt").data(d3.range(1, 11)).join("text").attr("class", "xt").attr("x", (d) => x(d)).attr("y", H - m.b + 15).attr("text-anchor", "middle").style("font-size", "11px").style("fill", "var(--ink-3)").text((d) => d);
    ax.selectAll("text.xl").data([0]).join("text").attr("class", "xl").attr("text-anchor", "middle").attr("x", (m.l + W - m.r) / 2).attr("y", H - m.b + 34).style("font-size", "11px").style("fill", "var(--ink-3)").text("Decile of equivalized consumption, poorest to richest");

    const layers = ["rate", "basket", "ushare"];
    layers.forEach((L) => g.selectAll("g.L-" + L).data([0]).join("g").attr("class", "L-" + L).style("display", L === S.tab ? null : "none"));
    const key = $("#inc-key"), note = { set innerHTML(v) {}, get innerHTML() { return ""; } };
    const c = C();

    if (S.tab === "rate") {
      const gl = g.select("g.L-rate");
      const T = R.ratesT, F = R.ratesF, P = R.ratesP;
      const dx = d3.range(10);
      const area = d3.area().x((i) => x(i + 1)).curve(d3.curveMonotoneX);
      const line = d3.line().x((i) => x(i + 1)).curve(d3.curveMonotoneX);
      const hasP = !!P && S.scope !== "formal";
      const Pd = hasP ? P : F;
      const tr = (s) => s.transition().duration(D_(650)).ease(d3.easeCubicInOut);
      gl.selectAll("path.aF").data([0]).join("path").attr("class", "aF").style("fill", "var(--collected-soft)").call((s) => tr(s).attr("d", area.y0(y(0)).y1((i) => y(F[i]))(dx)));
      gl.selectAll("path.aGap").data([0]).join("path").attr("class", "aGap").style("fill", "url(#ihatch)").style("opacity", 0.55).call((s) => tr(s).attr("d", area.y0((i) => y(Pd[i])).y1((i) => y(T[i]))(dx)));
      gl.selectAll("path.aU").data([0]).join("path").attr("class", "aU").style("fill", "var(--ser-soft)").style("opacity", 0.85).call((s) => tr(s).attr("d", area.y0((i) => y(F[i])).y1((i) => y(Pd[i]))(dx)));
      gl.selectAll("path.lF").data([0]).join("path").attr("class", "lF").style("fill", "none").style("stroke", "var(--collected)").style("stroke-width", 2).call((s) => tr(s).attr("d", line.y((i) => y(F[i]))(dx)));
      gl.selectAll("path.lP").data([0]).join("path").attr("class", "lP").style("fill", "none").style("stroke", "var(--ser)").style("stroke-width", 2.2).call((s) => tr(s).attr("d", line.y((i) => y(Pd[i]))(dx)).style("opacity", hasP ? 1 : 0));
      gl.selectAll("path.lT").data([0]).join("path").attr("class", "lT").style("fill", "none").style("stroke", "var(--ink)").style("stroke-width", 1.5).style("stroke-dasharray", "4 3").call((s) => tr(s).attr("d", line.y((i) => y(T[i]))(dx)));
      const dots = gl.selectAll("circle.dP").data(dx);
      dots.join("circle").attr("class", "dP").attr("r", 2.6).style("fill", "var(--ser)").call((s) => tr(s).attr("cx", (i) => x(i + 1)).attr("cy", (i) => y(Pd[i])).style("opacity", hasP ? 1 : 0));
      const lbP = S.scope === "import" ? "With border VAT alone" : "With upstream VAT";
      const nd = !hasP && S.scope !== "formal";
      const ndText = S.cls !== "formal" ? ["Decile rates with upstream VAT were simulated for the headline", "outlet classification only. Revenue and progressivity use this one."]
        : ["Decile rates with upstream VAT weren’t simulated for this", "assumption. Revenue and progressivity use it."];
      const ndg = gl.selectAll("g.nodata").data([0]).join((en) => { const q = en.append("g").attr("class", "nodata"); q.append("rect"); q.append("text").attr("class", "a"); q.append("text").attr("class", "b"); return q; });
      ndg.style("display", nd ? null : "none").style("pointer-events", "none");
      ndg.select("rect").attr("x", m.l).attr("y", 2).attr("width", W - m.l - 8).attr("height", 32).style("fill", "var(--bg)").style("opacity", 0.92);
      ndg.select("text.a").attr("x", m.l + 4).attr("y", 14).style("font-size", "11.5px").style("fill", "var(--ink-2)").text(ndText[0]);
      ndg.select("text.b").attr("x", m.l + 4).attr("y", 28).style("font-size", "11.5px").style("fill", "var(--ink-2)").text(ndText[1]);
      gl.selectAll("g.hits").data([0]).join("g").attr("class", "hits").selectAll("rect").data(dx).join("rect").attr("class", "hit").attr("tabindex", 0)
        .attr("x", (i) => xb(i + 1) - xb.step() * xb.paddingInner() / 2).attr("width", xb.step()).attr("y", m.t).attr("height", H - m.b - m.t)
        .attr("data-tip", (i) => `<b>Decile ${i + 1}</b>` + tipTable([["var(--ink)", "All purchases taxed", f2(T[i]) + "%"]].concat(hasP ? [["var(--ser)", lbP + (R.lam < 0.999 ? ` (λ = ${R.lam.toFixed(2)})` : ""), f2(Pd[i]) + "%"]] : [], [["var(--collected)", "Formal only", f2(F[i]) + "%"]])) + `<span class="u">VAT as % of consumption before indirect taxes</span>`);
      const labs = [
        { k: "T", v: T[9], t: "All taxed", c: "var(--ink)" },
        { k: "P", v: Pd[9], t: S.scope === "import" ? "Border alone" : "With upstream", c: "var(--ser-text)", hide: !hasP },
        { k: "F", v: F[9], t: "Formal only", c: "var(--collected)" },
      ].filter((d) => !d.hide).sort((a, b) => b.v - a.v);
      let lastY = -1e9;
      labs.forEach((d) => { d.y = Math.max(y(d.v) + 4, lastY + 30); lastY = d.y; });
      const over = labs.length ? labs[labs.length - 1].y - (H - m.b) : 0;
      if (over > 0) labs.forEach((d) => (d.y -= over));
      const lg = gl.selectAll("g.el").data(labs, (d) => d.k).join((en) => { const q = en.append("g").attr("class", "el").style("opacity", 0); q.append("text").attr("class", "a"); q.append("text").attr("class", "b"); return q; }, (up) => up, (ex) => { tr(ex.classed("el", false)).style("opacity", 0).remove(); });
      tr(lg).style("opacity", 1);
      lg.select("text.a").attr("x", W - m.r + 8).style("font-size", "11.5px").style("fill", (d) => d.c).style("font-weight", 600).each(function (d) { setText(this, d.t); }).call((s) => tr(s).attr("y", (d) => d.y - 6));
      lg.select("text.b").attr("x", W - m.r + 8).style("font-size", "11.5px").style("fill", "var(--ink-2)").style("font-variant-numeric", "tabular-nums").each(function (d) { setText(this, `${f2(d.v)}% in decile 10`); }).call((s) => tr(s).attr("y", (d) => d.y + 8));
      setHTML(key, `<span><i class="key line"></i>All taxed</span><span><i class="key" style="background:repeating-linear-gradient(45deg,var(--untaxed) 0 2px,transparent 2px 5px)"></i>${R.lam < 0.999 ? `<span class="term" tabindex="0" data-tip="&lt;b&gt;Not borne by households&lt;/b&gt;&lt;br&gt;VAT not collected, plus upstream VAT absorbed by the seller.">Not borne</span>` : "Not collected"}</span>` +
        (hasP ? `<span><i class="key" style="background:var(--ser-soft);border-top:2px solid var(--ser)"></i>${S.scope === "import" ? "Border VAT alone" : "Upstream VAT"}</span>` : "") +
        `<span><i class="key" style="background:var(--collected-soft);border-top:2px solid var(--collected)"></i>Formal purchases</span>`);
      if (S.scope === "formal") note.innerHTML = `VAT as % of consumption before indirect taxes, fixed deciles (Figure 5).`;
      else if (!P) note.innerHTML = `Decile rates for this combination weren’t simulated in EUROMOD, so only the ‘formal only’ and ‘all purchases taxed’ profiles are drawn. The meter below uses the item-level calculation.`;
      else {
        note.innerHTML = `Poorest decile <b>${f2(F[0])}% → ${f2(P[0])}%</b>, richest <b>${f2(F[9])}% → ${f2(P[9])}%</b>. Decile 10 over decile 1: ${f1(F[9] / F[0])} ‘formal only’, ${f1(P[9] / P[0])} with ${S.scope === "import" ? "border VAT" : "upstream VAT"}, ${f1(T[9] / T[0])} all taxed (Figure 5).`;
        if (R.lam < 0.999) note.innerHTML = `Poorest decile <b>${f2(F[0])}% → ${f2(P[0])}%</b>, richest <b>${f2(F[9])}% → ${f2(P[9])}%</b>. Rates at <i>λ</i> = ${R.lam.toFixed(2)} mix the EUROMOD liabilities exactly: <i>F</i> + <i>λ</i>(<i>P</i> − <i>F</i>).`;
      }
    } else if (S.tab === "basket") {
      const gl = g.select("g.L-basket");
      const bk = (c.basket_cls && c.basket_cls[CLS_KEY[S.cls]]) || c.basket; const rows = d3.range(1, 11).map((d) => bk[String(d)]);
      const clsName = S.cls === "formal" ? "headline classification" : CLS_TEXT[S.cls] + " classification";
      const keys = [["taxable_formal", "var(--collected)", "Taxable, formal outlet"], ["taxable_informal", "var(--up-light)", "Taxable, informal outlet"], ["untaxed_by_law", "var(--surface-2)", "Exempt or zero-rated"]];
      const st = rows.map((r0, i) => { let a = 0; return keys.map(([kk]) => { const v = r0[kk] / 100; const o = { i, kk, y0: a, y1: a + v }; a += v; return o; }); }).flat();
      gl.selectAll("rect.b").data(st, (d) => d.i + d.kk).join("rect").attr("class", "b")
        .attr("x", (d) => xb(d.i + 1)).attr("width", xb.bandwidth())
        .style("fill", (d) => keys.find((q) => q[0] === d.kk)[1])
        .transition().duration(D_(500)).attr("y", (d) => y(d.y1)).attr("height", (d) => Math.max(0, y(d.y0) - y(d.y1)));
      gl.selectAll("text.bl").data([0, 9]).join("text").attr("class", "bl").attr("text-anchor", "middle").style("font-size", "11px").style("font-weight", 600).style("fill", "var(--on-up)")
        .attr("x", (i) => xb(i + 1) + xb.bandwidth() / 2)
        .each(function (i) { setText(this, f0(rows[i].taxable_informal)); })
        .transition().duration(D_(500)).attr("y", (i) => y((rows[i].taxable_formal + rows[i].taxable_informal / 2) / 100) + 4);
      gl.selectAll("g.hits").data([0]).join("g").attr("class", "hits").raise().selectAll("rect").data(d3.range(10)).join("rect").attr("class", "hit").attr("tabindex", 0)
        .attr("x", (i) => xb(i + 1) - xb.step() * xb.paddingInner() / 2).attr("width", xb.step()).attr("y", m.t).attr("height", H - m.b - m.t)
        .attr("data-tip", (i) => `<b>Decile ${i + 1}</b>` + tipTable(keys.slice().reverse().map(([kk, col, t]) => [col, t, f1(rows[i][kk]) + "%"])) + `<span class="u">% of recorded purchases, ${clsName}</span>`);
      setHTML(key, keys.slice().reverse().map(([kk, col, t]) => `<span><i class="key" style="background:${col};"></i>${t}</span>`).join(""));
      const r1 = rows[0], r10 = rows[9];
      note.innerHTML = `Shares of recorded purchases, ${clsName}${S.cls === "formal" ? "" : ""}. In the poorest decile <b>${f0(r1.taxable_informal)}%</b> of spending is taxable but bought informally, against <b>${f0(r1.taxable_formal)}%</b> taxable and formal; in the richest, ${f0(r10.taxable_informal)}% against ${f0(r10.taxable_formal)}%. Upstream VAT acts on the amber part. Online Appendix Tables OA.34–OA.35.`;
    } else {
      const gl = g.select("g.L-ushare");
      const line = d3.line().x((d, i) => x(i + 1)).y((d) => y(d)).curve(d3.curveMonotoneX);
      const lab1 = S.scope === "formal" ? "This setting: no upstream VAT counted" : "This setting", labB = "Border VAT alone";
      const own = S.scope === "import" ? [["border", "var(--alone)", labB, R.ush]] : [["chain", "var(--up)", lab1, R.ush], ["border", "var(--alone)", labB, R.ushB]];
      const series = own.filter((d) => d[3]);
      const base = (own.find((d) => d[0] === "border") || own[0])[3] || series[0][3];
      const tu = (sel) => sel.transition().duration(D_(500)).ease(d3.easeCubicInOut);
      gl.selectAll("path.u").data(series, (d) => d[0]).join(
        (en) => en.append("path").attr("class", "u").style("fill", "none").style("stroke-width", 2.2).style("opacity", 0).attr("d", line(base)),
        (up) => up,
        (ex) => { tu(ex.classed("u", false)).attr("d", line(base)).style("opacity", 0).remove(); })
        .style("stroke", (d) => d[1]).call((sel) => tu(sel).attr("d", (d) => line(d[3])).style("opacity", 1));
      gl.selectAll("g.ud").data(series, (d) => d[0]).join(
        (en) => { const q = en.append("g").attr("class", "ud").style("opacity", 0); q.selectAll("circle").data(base).join("circle").attr("r", 2.6).attr("cx", (v, i) => x(i + 1)).attr("cy", (v) => y(v)); return q; },
        (up) => up,
        (ex) => { const q = ex.classed("ud", false); q.selectAll("circle").each(function (v, i) { tu(d3.select(this)).attr("cy", y(base[i])); }); tu(q).style("opacity", 0).remove(); })
        .each(function (d) { tu(d3.select(this).selectAll("circle").data(d[3]).style("fill", d[1])).attr("cx", (v, i) => x(i + 1)).attr("cy", (v) => y(v)); })
        .call((sel) => tu(sel).style("opacity", 1));
      gl.selectAll("line.ue").data([]).join("line").attr("class", "ue").style("stroke", "var(--up)").style("stroke-dasharray", "3 3").style("opacity", 0.7)
        .attr("x1", m.l).attr("x2", W - m.r).attr("y1", (d) => y(d)).attr("y2", (d) => y(d));
      gl.selectAll("g.hits").data([0]).join("g").attr("class", "hits").selectAll("rect").data(d3.range(10)).join("rect").attr("class", "hit").attr("tabindex", 0)
        .attr("x", (i) => xb(i + 1) - xb.step() * xb.paddingInner() / 2).attr("width", xb.step()).attr("y", m.t).attr("height", H - m.b - m.t)
        .attr("data-tip", (i) => `<b>Decile ${i + 1}</b>` + tipTable(series.map((d) => [d[1], d[2], f2(d[3][i])])) + `<span class="u">Upstream VAT as a share of the VAT the same informal purchases would carry if bought formally</span>`);
      const kItem = ([, col, t]) => `<span><i class="key" style="background:${col};height:3px"></i>${t}</span>`;
      setHTML(key, series.map(kItem).join(""));
      const p = R.ush || [];
      note.innerHTML = p.length ? `Upstream VAT on informal purchases as a share of the VAT they would carry if bought formally. Decile 1: <b>${f2(p[0])}</b>; decile 10: <b>${f2(p[9])}</b>. A share that falls with consumption makes the gradient factor exceed one${R.fac ? ` (here <b>${f2(R.fac.grad)}</b>)` : ""}.` : "No upstream VAT counted.";
    }
    STILL = wasStill;
  }
  function kakAxis(R) {
    const v = [R.KT, R.KF, R.KP], a = Math.min(...v), b = Math.max(...v);
    if (!G.port) return { lo: Math.min(0, 5 * Math.floor(a / 5)), hi: Math.max(30, 5 * Math.ceil(b / 5)), step: 5 };
    const pad = Math.max(1, 0.12 * (b - a), (8 - (b - a)) / 2), lo = Math.floor(a - pad), hi = Math.ceil(b + pad);
    return { lo, hi, step: hi - lo <= 14 ? 2 : 5 };
  }
  function drawMeter(R) {
    const svg = $("#meter");
    const W = Math.max(280, svg.parentNode.clientWidth), H = 106;
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`); svg.setAttribute("width", W); svg.setAttribute("height", H);
    const c = C();
    const { lo, hi, step } = kakAxis(R);
    const x = d3.scaleLinear().domain([lo, hi]).range([10, W - 10]), x0 = svg.xOld || x; // ticks slide from the old axis to the new one
    svg.xOld = x;
    const yA = 67;
    ensureDefs(svg, "mhatch");
    const g = d3.select(svg);
    const tr = (s) => s.transition().duration(dur(650)).ease(d3.easeCubicInOut);
    const ticks = d3.range(Math.ceil(lo / step) * step, hi + 0.01, step);
    g.selectAll("line.ax").data([0]).join("line").attr("class", "ax").attr("x1", 10).attr("x2", W - 10).attr("y1", yA).attr("y2", yA).style("stroke", "var(--ink-3)");
    g.selectAll("g.tk").data(ticks, (d) => d).join(
      (en) => { const q = en.append("g").attr("class", "tk").style("opacity", svg.drawn ? 0 : 1); q.append("line").attr("x1", (d) => x0(d)).attr("x2", (d) => x0(d)); q.append("text").attr("x", (d) => x0(d)); return q; },
      (up) => up,
      (ex) => ex.call((q) => { tr(q.select("line")).attr("x1", (d) => x(d)).attr("x2", (d) => x(d)); tr(q.select("text")).attr("x", (d) => x(d)); tr(q).style("opacity", 0).remove(); }))
      .call((q) => tr(q).style("opacity", 1))
      .call((q) => { q.select("line").attr("y1", yA).attr("y2", yA + 4).style("stroke", "var(--ink-3)"); q.select("text").attr("y", yA + 15).attr("text-anchor", "middle").style("font-size", "11px").style("fill", "var(--ink-3)").text((d) => fx(d, 0)); })
      .call((q) => tr(q.select("line")).attr("x1", (d) => x(d)).attr("x2", (d) => x(d)))
      .call((q) => tr(q.select("text")).attr("x", (d) => x(d)));
    g.selectAll("text.cap").data([0]).join("text").attr("class", "cap").attr("x", W / 2).attr("y", yA + 34).attr("text-anchor", "middle").style("font-size", "11px").style("fill", "var(--ink-3)").text("Kakwani index of VAT × 100; higher is more progressive");
    svg.drawn = true;
    const gainL = Math.min(R.KT, R.KF), gainR = Math.max(R.KT, R.KF);
    g.selectAll("rect.gain").data([0]).join("rect").attr("class", "gain").attr("y", yA - 12).attr("height", 12).style("fill", "url(#mhatch)").call((s) => tr(s).attr("x", x(gainL)).attr("width", x(gainR) - x(gainL)));
    const showP = S.scope !== "formal";
    const rmL = Math.min(R.KP, R.KF), rmR = Math.max(R.KP, R.KF);
    g.selectAll("rect.rem").data([0]).join("rect").attr("class", "rem").attr("y", yA - 12).attr("height", 12).style("fill", "var(--ser-soft)").call((s) => tr(s).attr("x", x(rmL)).attr("width", x(rmR) - x(rmL)).style("opacity", showP ? 0.9 : 0));
    const mk = [
      { k: "T", v: R.KT, fill: "var(--bg)", stroke: "var(--ink)", t: "All taxed" },
      { k: "F", v: R.KF, fill: "var(--collected)", stroke: "var(--collected)", t: "Formal only" },
      { k: "P", v: R.KP, fill: "var(--ser)", stroke: "var(--ser)", t: S.scope === "import" ? "Border alone" : "With upstream", hide: !showP },
    ];
    const vis = mk.filter((d) => !d.hide).sort((a, b) => x(a.v) - x(b.v));
    const rowsEnd = [-1e9, -1e9, -1e9];
    vis.forEach((d) => {
      const w = 6.6 * (d.t.length + 6);
      const cx = Math.min(Math.max(x(d.v), 10 + w / 2), W - 10 - w / 2);
      let r = 0; while (r < 2 && cx - w / 2 <= rowsEnd[r] + 6) r++;
      rowsEnd[r] = cx + w / 2; d.row = r; d.lx = cx;
    });
    const mg = g.selectAll("g.mk").data(mk, (d) => d.k).join((en) => { const q = en.append("g").attr("class", "mk"); q.append("line"); q.append("circle"); q.append("text"); return q; });
    tr(mg).style("opacity", (d) => (d.hide ? 0 : 1));
    mg.select("circle").attr("r", 5.5).style("fill", (d) => d.fill).style("stroke", (d) => d.stroke).style("stroke-width", 2).call((s) => tr(s).attr("cx", (d) => x(d.v)).attr("cy", yA - 6));
    mg.select("line").style("stroke", "var(--rule)").call((s) => tr(s).attr("x1", (d) => x(d.v)).attr("x2", (d) => d.lx ?? x(d.v)).attr("y1", yA - 12).attr("y2", (d) => 15 + 16 * (d.row || 0)));
    mg.select("text").attr("text-anchor", "middle").style("font-size", "11.5px").style("font-weight", 600).style("font-variant-numeric", "tabular-nums")
      .style("fill", (d) => (d.k === "P" ? "var(--ser-text)" : d.k === "F" ? "var(--collected)" : "var(--ink)"))
      .each(function (d) { setText(this, `${d.t} ${f1(d.v)}`); }).call((s) => tr(s).attr("x", (d) => d.lx ?? x(d.v)).attr("y", (d) => 11 + 16 * (d.row || 0)));
    const TIPM = { T: "every taxable purchase taxed as if bought formally", F: "only formal purchases taxed", P: S.scope === "import" ? "formal purchases plus border VAT alone on informal purchases" : "formal purchases plus upstream VAT on informal purchases" };
    mg.attr("tabindex", (d) => (d.hide ? null : 0)).attr("data-tip", (d) => (d.hide ? null : `<b>${d.t}: ${f2(d.v)}</b><br>Kakwani index of VAT × 100, ${TIPM[d.k]}`));
    g.selectAll("rect.rem").attr("data-tip", showP && !R.noGain ? `<b>Gain removed</b><br>${f1(R.removed)}% of the ‘formal only’ rise in the Kakwani index (${f1(R.KF)} − ${f1(R.KT)})` : null);
    const v = $("#meter-v"), t = $("#meter-t");
    if (S.scope === "formal") { setRoll(v, `<span class="up">0%</span>`); setHTML(t, `of the ${term("gain", "progressivity gain")} removed: no upstream VAT counted`); }
    else if (R.noGain) { setRoll(v, "–"); setHTML(t, "no ‘formal only’ progressivity gain to remove under this classification"); }
    else {
      setRoll(v, `<span class="up">${f1(R.removed)}%</span>`);
      setHTML(t, `of the ${term("formalonly", "‘formal only’")} ${term("gain", "progressivity gain")} removed by ${S.scope === "import" ? "border VAT alone" : "upstream VAT"}`);
    }
    let pm = `<p><b>Share of the gain removed</b> = (<i>K</i><sub>F</sub> − <i>K</i><sub>P</sub>)/(<i>K</i><sub>F</sub> − <i>K</i><sub>T</sub>)</p>`;
    if (R.fac && !R.noGain && S.scope !== "formal") {
      const lam = R.lam, sEF = R.fac.sEF, uE = R.fac.uE;
      const acc = (lam * uE) / (sEF + (1 - sEF) * lam * uE);
      pm += `<p>Accounting factor <b>${f2(acc)}</b> × gradient factor <b>${f2(R.fac.grad)}</b> (${citeRemoved(R) === "Paper, Table 4" ? "Paper, Table 4" : "authors’ calculations"})</p>`;
    }
    if (R.ci && !R.noGain && S.scope !== "formal") pm += `<p>95% interval: ${f1(R.ci[0])} to ${f1(R.ci[1])}%</p>`;
    pm += `<p class="src2">Share removed: ${citeRemoved(R)}.</p>`;
    const mtip = pm.replace(/<p class="src2">/g, "<p class=\"u\">").replace(/<\/?p[^>]*>/g, (m0) => (m0.startsWith("</") ? "<br>" : "")).replace(/(<br>)+$/, "");
    v.setAttribute("tabindex", "0"); v.setAttribute("data-tip", mtip);
  }
  function drawCompare() {
    const svg = $("#cmp-rev");
    const W = Math.max(280, svg.parentNode.clientWidth), rowH = 38, H = rowH * 4 + 40, lw = 92, rw = 62;
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`); svg.setAttribute("width", W); svg.setAttribute("height", H);
    ensureDefs(svg, "chatch");
    const x = d3.scaleLinear().domain([0, 100]).range([lw, W - rw]);
    const g = d3.select(svg);
    D.order.forEach((cc, i) => {
      const c = D.countries[cc], t5 = c.t5;
      const sfF = t5.formal_only.shortfall, sfB = t5.import_only.shortfall, sfP = t5.headline.shortfall;
      const s = [[0, 100 - sfF, "var(--collected)", "VAT on formal purchases"], [100 - sfF, 100 - sfB, "var(--alone)", "Border VAT alone", `A separate calculation (‘import only’ in the paper). The plum ribbon in the diagram is smaller (${f1(c.chain.channels.border_final)} per 100).`], [100 - sfB, 100 - sfP, "var(--up-light)", "Added by the domestic chain", "The further increase when domestic suppliers’ registration and input credits are counted."], [100 - sfP, 100, "url(#chatch)", "Not collected"]];
      const y0 = 8 + i * rowH;
      const row = g.selectAll("g.r" + cc).data([0]).join("g").attr("class", "r" + cc);
      row.selectAll("text.n").data([0]).join("text").attr("class", "n").attr("x", 0).attr("y", y0 + 17).style("font-size", "13px").style("font-weight", 600).style("fill", "var(--ink)").text(c.name);
      row.selectAll("rect.s").data(s).join("rect").attr("class", "s").attr("tabindex", 0).attr("data-tip", (d) => `<b>${c.name}: ${d[3]}</b><br>${f1(d[1] - d[0])}% of the VAT with every purchase taxed${d[4] ? "<br>" + d[4] : ""}<br><span class="u">Informal share of the VAT base ${f0(sfF)}%, upstream share ${f2(c.chain.ubar)}, wholesale supply registered ${f0(100 * c.chain.phiW)}%</span>`).attr("x", (d) => x(d[0])).attr("width", (d) => x(d[1]) - x(d[0])).attr("y", y0 + 4).attr("height", 18).attr("fill", (d) => d[2]);
      row.selectAll("rect.o").data([0]).join("rect").attr("class", "o").attr("x", x(100 - sfP) + 0.5).attr("width", Math.max(0, x(100) - x(100 - sfP) - 1)).attr("y", y0 + 4.5).attr("height", 17).style("fill", "none").style("pointer-events", "none").style("stroke", "var(--ink-3)");
      row.selectAll("text.v").data([0]).join("text").attr("class", "v").attr("x", W - rw + 8).attr("y", y0 + 17).style("font-size", "12.5px").style("font-variant-numeric", "tabular-nums").style("fill", "var(--ink)").text(`${f0(sfF)} → ${f0(sfP)}`);
    });
    g.selectAll("text.hd").data([0]).join("text").attr("class", "hd").attr("text-anchor", "end").attr("x", W - 1).attr("y", H - 12).style("font-size", "11px").style("fill", "var(--ink-3)").text("shortfall %");
    const s2 = $("#cmp-rem");
    const W2 = Math.max(280, s2.parentNode.clientWidth), H2 = rowH * 4 + 40;
    s2.setAttribute("viewBox", `0 0 ${W2} ${H2}`); s2.setAttribute("width", W2); s2.setAttribute("height", H2);
    const x2 = d3.scaleLinear().domain([0, DATA.axes.removed_max]).range([lw, W2 - 14]);
    const g2 = d3.select(s2);
    g2.selectAll("g.ax").data([0]).join("g").attr("class", "ax").call((q) => {
      q.selectAll("line").data([0, 25, 50, 75, 100]).join("line").attr("x1", (d) => x2(d)).attr("x2", (d) => x2(d)).attr("y1", 4).attr("y2", H2 - 26).style("stroke", (d) => (d === 100 ? "var(--ink-3)" : "var(--grid)"));
      q.selectAll("text").data([0, 25, 50, 75, 100]).join("text").attr("x", (d) => x2(d)).attr("y", H2 - 12).attr("text-anchor", "middle").style("font-size", "11px").style("fill", "var(--ink-3)").text((d) => d + "%");
    });
    D.order.forEach((cc, i) => {
      const c = D.countries[cc], t5 = c.t5, gr = c.grid;
      const alts = [t5.balanced_half.removed, t5.balanced_maximum.removed, t5.balanced_measured.removed, gr.formal.reg50.removed, gr.formal.reg150.removed];
      ["low", "med", "high"].forEach((k) => { if (c.scen[k].kakwani > c.scen.unadj.kakwani) alts.push(gr[k].chain.removed); });
      const lo = Math.min(...alts), hi = Math.max(...alts);
      const y = 18 + i * rowH;
      const row = g2.selectAll("g.r" + cc).data([0]).join("g").attr("class", "r" + cc);
      row.selectAll("text.n").data([0]).join("text").attr("class", "n").attr("x", 0).attr("y", y + 4).style("font-size", "13px").style("font-weight", 600).style("fill", "var(--ink)").text(c.name);
      row.selectAll("line.rg").data([0]).join("line").attr("class", "rg").attr("tabindex", 0).attr("data-tip", `<b>${c.name}: alternative assumptions</b><br>${f1(lo)}% to ${f1(hi)}% of the gain removed (sorting, registration ×0.5 and ×1.5, outlet classifications)`).attr("x1", x2(lo)).attr("x2", x2(hi)).attr("y1", y).attr("y2", y).style("stroke", "var(--untaxed)").style("stroke-width", 5).style("stroke-linecap", "round");
      const pts = [
        { k: "imp", v: t5.import_only.removed, sh: "sq", t: "Border VAT alone" },
        { k: "head", v: c.decomp.removed, sh: "dot", t: "Headline" },
      ];
      const pg = row.selectAll("g.p").data(pts, (d) => d.k).join("g").attr("class", "p").attr("tabindex", 0).attr("data-tip", (d) => `<b>${c.name}: ${d.t}</b><br>${f1(d.v)}% of the ‘formal only’ progressivity gain removed`).attr("transform", (d) => `translate(${x2(d.v)},${y})`);
      pg.selectAll("*").remove();
      pg.each(function (d) {
        const q = d3.select(this);
        if (d.sh === "sq") q.append("rect").attr("x", -4.5).attr("y", -4.5).attr("width", 9).attr("height", 9).style("fill", "var(--alone)");
        else if (d.sh === "ring") q.append("circle").attr("r", 4.5).style("fill", "var(--bg)").style("stroke", "var(--up)").style("stroke-width", 1.8);
        else if (d.sh === "dia") q.append("rect").attr("x", -4).attr("y", -4).attr("width", 8).attr("height", 8).attr("transform", "rotate(45)").style("fill", "var(--bg)").style("stroke", "var(--ink-2)").style("stroke-width", 1.5);
        else q.append("circle").attr("r", 6.5).style("fill", "var(--up)");
      });
      row.selectAll("text.hv").style("pointer-events", "none").data([0]).join("text").attr("class", "hv").attr("x", x2(c.decomp.removed)).attr("y", y + 19).attr("text-anchor", "middle").style("font-size", "11.5px").style("font-weight", 600).style("fill", "var(--up-text)").style("font-variant-numeric", "tabular-nums").text(f1(c.decomp.removed));
    });
  }

  function remKey() {
    $("#cmp-key").innerHTML = [["var(--collected)", "Formal purchases"], ["var(--alone)", "Border VAT alone"], ["var(--up-light)", "Added by the domestic chain"], ["repeating-linear-gradient(45deg,var(--untaxed) 0 2px,transparent 2px 5px)", "Not collected"]].map(([c, t]) => `<span><i class="key${t === "Not collected" ? " boxed" : ""}" style="background:${c}"></i>${t}</span>`).join("");
    $("#rem-key").innerHTML = `<span><i class="key" style="background:var(--alone);width:9px;height:9px"></i>Border VAT alone</span><span><i class="key" style="background:var(--up);border-radius:50%;width:10px;height:10px"></i>Headline</span><span><i class="key" style="background:var(--untaxed);height:5px"></i>Alternative assumptions</span>`;
  }
  const SENS = {
    title: "Share of the <span class=\"term\" data-term=\"formalonly\" tabindex=\"0\">‘formal only’</span> <span class=\"term\" data-term=\"gain\" tabindex=\"0\">progressivity gain</span> removed by upstream VAT (%)",
    lede: "With other assumptions about who sells to whom, supplier registration, and outlets, upstream VAT still removes about half or more of the progressivity gain. It removes less when informal sellers pass on only part of the tax and in Peru’s calibration to its 2007 national accounts, and observed prices fit these cases less well.",
    caption: "Share of the ‘formal only’ progressivity gain removed by upstream VAT, %, by assumption and country. 0 leaves the gain from treating informal purchases as untaxed intact, and 100 removes all of it. Each row changes one assumption from the headline.",
    countries: ["Rwanda", "Uganda", "Mozambique", "Peru"],
    short: ["Rwa.", "Uga.", "Moz.", "Peru"],
    scale: [0, 100], half: 50,
    headline: {
      label: "Headline", tip: "Suppliers sell to all buyers alike, and informal prices pass on all upstream VAT.",
      values: [66.5, 87.7, 70.4, 83.3], ci: [[65.3, 67.8], [84.8, 91.0], [69.1, 71.8], [82.8, 83.8]],
      src: "Paper, Tables 4 and 5",
    },
    groups: [
      { label: "Who sells to whom", rows: [
        { label: "Full sorting of suppliers", tip: "Registered suppliers sell first to buyers who can claim credits (equal demand shares).", values: [50.7, 70.3, 71.4, 86.1], src: "Paper, Table 5" },
        { label: "Full sorting, measured demand shares", tip: "Demand shares of credit-claiming buyers taken from the accounts and surveys.", values: [72.2, 90.2, 76.9, 87.5], src: "Paper, Table 5" },
      ] },
      { label: "How much VAT suppliers charge", rows: [
        { label: "Registration shares halved", tip: "Every domestic registration proxy multiplied by 0.5.", values: [57.9, 73.1, 57.4, 66.1], src: "Online appendix, Table OA.5" },
        { label: "Peru: 2007 accounts calibration", short: "Peru: 2007 calibration", tip: "Registration scaled down to match VAT recorded in Peru’s 2007 national accounts (two targets).", values: [null, null, null, [39.8, 57.6]], parts: ["VAT recorded on household purchases", "Also VAT on their inputs"], src: "Paper, Table 5" },
      ] },
      { label: "How much reaches prices", rows: [
        { label: "Half pass-through", tip: "Informal sellers pass half of their upstream VAT into prices.", values: [42.1, 57.4, 41.0, 50.8], src: "Paper, Table 5" },
        { label: "Quarter pass-through", tip: "Informal sellers pass a quarter of their upstream VAT into prices.", values: [24.2, 34.0, 22.4, 28.6], src: "Paper, Table 5" },
        { label: "Mexican pass-through estimates", tip: "75% pass-through of statutory VAT at formal and 16% at informal outlets, as estimated for Mexico.", values: [46.2, 44.3, 31.5, 33.2], src: "Online appendix, Table OA.32" },
      ] },
      { label: "Measurement", rows: [
        { label: "Ambiguous outlets counted formal", tip: "Outlets of uncertain status treated as VAT-remitting (‘high formal’).", values: [57.9, 68.4, "nogain", 79.2], src: "Online appendix, Table OA.15" },
      ] },
    ],
    noGain: "No gain",
    noGainTip: "Treating informal purchases as untaxed doesn’t make VAT more progressive in Mozambique under this classification, so there is nothing to remove.",
    key: { headline: "Headline", alt: "Changed assumption", tick: "Headline value", half: "Half of the gain" },
    notes: "0 leaves the gain from treating informal purchases as untaxed intact, and 100 removes all of it. Each row changes one assumption from the headline. “No gain”: treating informal purchases as untaxed doesn’t make VAT more progressive in Mozambique under this classification, so there is nothing to remove. Sorting, registration, and outlet rows use the item-level calculation and have no sampling intervals. Headline 95% intervals: Rwanda 65.3–67.8, Uganda 84.8–91.0, Mozambique 69.1–71.8, Peru 82.8–83.8. Paper, Tables 4 and 5. Online appendix, Tables OA.5, OA.15, and OA.32.",
    price: {
      title: "Price evidence",
      text: "If informal purchases carried no VAT, informal shops would be about 15–17% cheaper on taxable goods than on exempt goods, relative to formal shops. In Peru, Uganda, and Mozambique the observed extra gap is between −2% and 3%, smaller than even the headline predicts (4–7%). The low cases predict a larger gap and fit less well: Peru’s 2007 calibrations predict 9–12% against 0.4% observed. Unit values also reflect quality and shop differences, and Rwanda’s 16 items fit both predictions, so the paper concludes that prices do not identify a preferred sourcing or pass-through assumption.",
      head: "Extra price advantage of informal shops on taxable goods (%)",
      cols: ["Observed", "No VAT", "Headline"],
      rows: [
        [16, 12.7, [2.5, 23.2], 16.6, 9.9, null],
        [33, 2.9, [-1.8, 8.1], 15.9, 6.5, null],
        [34, -2.0, [-6.3, 3.4], 15.3, 5.4, null],
        [123, 0.4, [-2.6, 3.7], 16.6, 4.3, [9.3, 12.0]],
      ],
      scale: [-10, 25], ticks: [-10, 0, 10, 20],
      key: { obs: "Observed, 95% interval", none: "If informal purchases carried no VAT", head: "Headline", cal: "Peru 2007 calibrations" },
      notes: "Taxed-minus-exempt difference in the formal-minus-informal log unit value, × 100. A larger value means informal shops are cheaper on taxable goods. Online appendix, Table OA.21.",
      src: "Online appendix, Table OA.21, panels A and B",
    },
    caveats: {
      title: "Caveats",
      items: [
        ["Compliance.", "The model assumes registered suppliers remit VAT on every taxable sale and claim all the credits they are entitled to, so under-reporting would mean less upstream VAT and unclaimed credits would mean more."],
        ["Registration proxies.", "Sector-level proxies can overstate the share of sales made with a VAT invoice, and one national wholesale share applies to all goods."],
        ["Dated accounts.", "The input-output tables for Uganda (2016/17) and Mozambique (2019) predate the surveys, and Peru’s product table is reconstructed from its 2022 supply and use table, which can shift the estimates either way."],
        ["Fixed behaviour.", "Purchases, outlet choices, and trading links stay fixed in every scenario and policy simulation, and no behavioural responses are estimated."],
        ["Survey coverage.", "Surveys under-represent the richest households and some purchases, and simulated household VAT equals 65% of reported collections in Rwanda, 61% in Uganda, 41% in Mozambique, and 20% in Peru, where collections also cover business and government purchases."],
      ],
      notes: "Paper, Sections 2.1, 2.3, 2.6, 4, 5, and 6, Table 1, and Appendix B.2. Online appendix, Table OA.1.",
    },
  };

  function renderLimits() {
    const S0 = SENS, [lo, hi] = S0.scale, pos = (v) => (100 * (Math.max(lo, Math.min(hi, v)) - lo) / (hi - lo)).toFixed(2) + "%";
    const qa = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
    const pct = (v) => f1(v) + "%";
    const H = S0.headline.values;
    const refs = `<i class="lim-r50" style="left:${pos(S0.half)}"></i><i class="lim-r100" style="left:${pos(100)}"></i>`;
    const track = (marks, h) => {
      let s = refs;
      if (h != null) {
        s += `<i class="lim-hd" style="left:${pos(h)}"></i>`;
        const ends = [h, ...marks.map((m) => m.v)], a = Math.min(...ends), b = Math.max(...ends);
        s += `<i class="lim-ln" style="left:${pos(a)};width:calc(${pos(b)} - ${pos(a)})"></i>`;
      }
      marks.forEach((m) => { s += `<i class="lim-m ${m.cls}" style="left:${pos(m.v)}"></i>`; });
      return `<span class="lim-t" aria-hidden="true">${s}</span>`;
    };
    const diff = (v, h) => { const d = v - h; return Math.abs(d) < 0.05 ? "Same as the headline" : `${f1(Math.abs(d))} points ${d < 0 ? "below" : "above"} the headline (${pct(h)})`; };
    const cell = (row, i) => {
      const v = row.values[i], c = S0.countries[i], h = H[i], head = `<b>${c}: ${row.label}</b><br>`;
      if (v === null) return `<td class="lim-c lim-na"><span class="sr-only">Not computed</span></td>`;
      if (v === "nogain") return `<td class="lim-c lim-ng" data-tip="${qa(head + S0.noGainTip)}"><span class="lim-in"><span class="lim-n"></span><span class="lim-ngt">${S0.noGain}</span></span></td>`;
      const cls = row.mark === "alone" ? "lim-sq" : "lim-dot";
      if (Array.isArray(v)) {
        const tip = head + v.map((x, k) => `${row.parts[k]}: ${pct(x)} of the gain removed.`).join("<br>") + `<br><span class="u">${diff(v[0], h)}</span>`;
        return `<td class="lim-c lim-two" data-tip="${qa(tip)}"><span class="lim-in"><span class="lim-n">${v.map(f1).join(" / ")}</span>${track(v.map((x) => ({ v: x, cls })), h)}</span></td>`;
      }
      const tip = head + `${pct(v)} of the gain removed.<br><span class="u">${diff(v, h)}</span>`;
      return `<td class="lim-c" data-tip="${qa(tip)}"><span class="lim-in"><span class="lim-n">${f1(v)}</span>${track([{ v, cls }], h)}</span></td>`;
    };
    const label = (row) => `<th scope="row"><span class="term" tabindex="0" data-tip="${qa(`<b>${row.label}</b><br>${row.tip}`)}">${row.short ? `<span class="lg">${row.label}</span><span class="sm" aria-hidden="true">${row.short}</span>` : row.label}</span></th>`; // phones show the short label
    const ax = `<span class="lim-ax">${[lo, S0.half, hi].map((t) => `<b style="left:${pos(t)}"${t === S0.half ? ' class="h"' : ""}>${t}</b>`).join("")}</span>`;
    const thead = `<thead><tr><th scope="col" class="lim-a"><span class="sr-only">Assumption</span></th>${S0.countries.map((c, i) => `<th scope="col"><span class="lg">${c}</span><span class="sm" aria-hidden="true">${S0.short[i]}</span></th>`).join("")}</tr>` +
      `<tr class="lim-axr" aria-hidden="true"><td></td>${S0.countries.map(() => `<td><span class="lim-in"><span class="lim-n"></span>${ax}</span></td>`).join("")}</tr></thead>`;
    const hl = S0.headline;
    const headRow = `<tbody class="lim-hl"><tr>${label(hl)}${H.map((v, i) => `<td class="lim-c" data-tip="${qa(`<b>${S0.countries[i]}: ${hl.label}</b><br>${pct(v)} of the gain removed.<br><span class="u">95% interval ${f1(hl.ci[i][0])} to ${f1(hl.ci[i][1])}</span>`)}"><span class="lim-in"><span class="lim-n">${f1(v)}</span>${track([{ v, cls: "lim-big" }], null)}</span></td>`).join("")}</tr></tbody>`;
    const body = S0.groups.map((g) => `<tbody><tr class="lim-g"><th scope="rowgroup" colspan="${S0.countries.length + 1}">${g.label}</th></tr>${g.rows.map((r) => `<tr>${label(r)}${S0.countries.map((_, i) => cell(r, i)).join("")}</tr>`).join("")}</tbody>`).join("");
    $("#lim-h").innerHTML = S0.title;
    $("#lim-lede").textContent = S0.lede;
    $("#lim-tab").innerHTML = `<caption class="sr-only">${S0.caption}</caption><colgroup><col class="lim-cl">${S0.countries.map(() => "<col>").join("")}</colgroup>` + thead + headRow + body;
    const K = S0.key;
    $("#lim-key").innerHTML = `<span><i class="lim-k lim-big"></i>${K.headline}</span><span><i class="lim-k lim-dot"></i>${K.alt}</span><span><i class="lim-k lim-tick"></i>${K.tick}</span><span><i class="lim-k lim-half"></i>${K.half}</span>`;
    $("#lim-notes").innerHTML = `<p class="notes-label">Notes and sources</p><p>${S0.notes}</p>`;
    const P = S0.price, [plo, phi] = P.scale, pp = (v) => (100 * (Math.max(plo, Math.min(phi, v)) - plo) / (phi - plo)).toFixed(2) + "%";
    const pax = `<span class="lim-ax">${P.ticks.map((t) => `<b style="left:${pp(t)}"${t === 0 ? ' class="h"' : ""}>${fx(t, 0)}</b>`).join("")}</span>`;
    const prow = (r, i) => {
      const [n, obs, ci, none, head, cal] = r, c = S0.countries[i];
      const tip = `<b>${c}, ${n} items</b>` + tipTable([["var(--ink)", P.key.obs, `${f1(obs)} [${f1(ci[0])}, ${f1(ci[1])}]`], ["var(--collected)", "No VAT on informal purchases", f1(none)], ["var(--up)", P.key.head, f1(head)]].concat(cal ? [["var(--untaxed)", P.key.cal, `${f1(cal[0])} to ${f1(cal[1])}`]] : [])) + `<span class="u">Extra informal price advantage on taxable goods (%)</span>`;
      const marks = `<i class="lim-r0" style="left:${pp(0)}"></i>` + (cal ? `<i class="lim-band" style="left:${pp(cal[0])};width:calc(${pp(cal[1])} - ${pp(cal[0])})"></i>` : "") +
        `<i class="lim-ci" style="left:${pp(ci[0])};width:calc(${pp(ci[1])} - ${pp(ci[0])})"></i><i class="lim-m lim-none" style="left:${pp(none)}"></i><i class="lim-m lim-ph" style="left:${pp(head)}"></i><i class="lim-m lim-dot" style="left:${pp(obs)}"></i>`;
      return `<tr data-tip="${qa(tip)}"><th scope="row">${c} <span class="lim-items">${n} items</span></th><td class="pn">${f1(obs)}</td><td class="pn">${f1(none)}</td><td class="pn">${f1(head)}</td><td class="pc"><span class="lim-t" aria-hidden="true">${marks}</span></td></tr>`;
    };
    $("#lim-price-h").textContent = P.title;
    $("#lim-price").innerHTML = `<p class="lim-p">${P.text}</p>` +
      `<table class="lim-pt" aria-label="${qa(P.head)}"><thead><tr><th scope="col"><span class="sr-only">Country</span></th>${P.cols.map((t) => `<th scope="col" class="pn">${t}</th>`).join("")}<th class="pc" aria-hidden="true">${pax}</th></tr></thead><tbody>${P.rows.map(prow).join("")}</tbody></table>` +
      `<div class="keyrow lim-pkey"><span><i class="lim-k lim-obsk"></i>${P.key.obs}</span><span><i class="lim-k lim-none"></i>${P.key.none}</span><span><i class="lim-k lim-ph"></i>${P.key.head}</span><span><i class="lim-k lim-bandk"></i>${P.key.cal}</span></div>` +
      `<div class="notes"><p class="notes-label">Notes and sources</p><p>${P.notes}</p></div>`;
    $("#lim-cav-h").textContent = S0.caveats.title;
    $("#lim-cav").innerHTML = S0.caveats.items.map(([b, t]) => `<li><b>${b}</b> ${t}</li>`).join("");
    $("#lim-cav-notes").innerHTML = `<p class="notes-label">Notes and sources</p><p>${S0.caveats.notes}</p>`;
  }

  let regTab = "revenue"; // phones show one of the two registration charts at a time
  function drawPolicy(move) {
    const phone = window.innerWidth <= PHONE;
    const svg = $("#pol-food");
    const W = Math.max(280, svg.parentNode.clientWidth), rowH = 19, lw = W < 520 ? 84 : 118, headH = 17, gapC = 12;
    const H = D.order.length * (headH + 2 * rowH + gapC) + 26;
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`); svg.setAttribute("width", W); svg.setAttribute("height", H);
    const x = d3.scaleLinear().domain(DATA.axes.food).range([lw + 34, W - 40]);
    const g = d3.select(svg); g.selectAll("*").remove();
    d3.range(DATA.axes.food[0], DATA.axes.food[1] + 0.01, 0.4).forEach((v) => {
      g.append("line").attr("x1", x(v)).attr("x2", x(v)).attr("y1", 4).attr("y2", H - 22).style("stroke", v === 0 ? "var(--ink-3)" : "var(--grid)");
      g.append("text").attr("x", x(v)).attr("y", H - 8).attr("text-anchor", "middle").style("font-size", "11px").style("fill", "var(--ink-3)").text(W < 310 && Math.abs(Math.abs(v) - 0.4) < 0.01 ? "" : (v > 0 ? "+" : "") + fx(v, 1) + "%");
    });
    let y = 4;
    D.order.forEach((cc) => {
      const t6 = D.countries[cc].t6;
      const hd = g.append("text").attr("x", 0).attr("y", y + 12).style("font-size", "12.5px").style("font-weight", 600).style("fill", "var(--ink)");
      hd.append("tspan").text(D.countries[cc].name);
      if (!phone) hd.append("tspan").attr("dx", 8).style("font-weight", 400).style("font-size", "11px").style("fill", "var(--ink-3)").text(`revenue-neutral rate ${f1(t6.resolved.rate)}%`);
      ["d1", "d10"].forEach((d, j) => {
        const yy = y + headH + 8 + j * rowH;
        g.append("text").attr("x", 0).attr("y", yy + 4).style("font-size", "11px").style("fill", "var(--ink-2)").text(j ? "richest 10%" : "poorest 10%");
        const vals = [t6.formal_only[d], t6.resolved[d]];
        g.append("line").attr("x1", x(Math.min(...vals))).attr("x2", x(Math.max(...vals))).attr("y1", yy).attr("y2", yy).style("stroke", "var(--rule)").style("stroke-width", 2);
        const dl = j ? "richest decile" : "poorest decile";
        const tp = (conv, v) => `<b>${D.countries[cc].name}, ${dl}: ${conv}</b><br>${fx(v, 2)}% of consumption before indirect taxes`;
        g.append("circle").attr("tabindex", 0).attr("data-tip", tp("‘formal only’", t6.formal_only[d])).attr("cx", x(t6.formal_only[d])).attr("cy", yy).attr("r", 4.5).style("fill", "var(--bg)").style("stroke", "var(--collected)").style("stroke-width", 1.8);
        g.append("circle").attr("tabindex", 0).attr("data-tip", tp("with upstream VAT, recalculated after the reform", t6.resolved[d])).attr("cx", x(t6.resolved[d])).attr("cy", yy).attr("r", 5).style("fill", "var(--up)");
        const right = Math.max(...vals);
        g.append("text").attr("x", t6.resolved[d] < 0 ? x(t6.resolved[d]) - 9 : x(right) + 9).attr("text-anchor", t6.resolved[d] < 0 ? "end" : "start").attr("y", yy + 4).style("font-size", "11px").style("font-weight", 600).style("fill", "var(--up-text)").style("font-variant-numeric", "tabular-nums").text(fx(t6.resolved[d], 2));
      });
      y += headH + 2 * rowH + gapC;
    });
    $("#food-key").innerHTML = `<span><i class="key" style="background:var(--up);border-radius:50%;width:10px;height:10px"></i>With upstream VAT, recalculated after the reform (value shown)</span><span><i class="key" style="border:1.8px solid var(--collected);border-radius:50%;width:9px;height:9px"></i>‘Formal only’</span>`;
    const s2 = $("#pol-reg");
    const W2 = Math.max(280, s2.parentNode.clientWidth);
    const regRows = [
      ["RW", "high", "Rwanda", "markets, meat/fish shops"], ["UG", "high", "Uganda", "general shops, meat/fish shops"],
      ["MZ", "high", "Mozambique", "all market vendors"], ["PE", "high", "Peru", "all market vendors"], ["PE", "high_bodegas", "Peru", "markets and retail bodegas"],
    ];
    const side2 = window.innerWidth >= 980, H2 = side2 ? H : regRows.length * (phone ? 46 : 38) + (phone ? 68 : 52), rh = (H2 - (phone ? 68 : 52)) / regRows.length, foot = phone ? 42 : 26, split2 = W2 < 520 ? 0.56 : 0.58, top2 = 17;
    s2.setAttribute("viewBox", `0 0 ${W2} ${H2}`); s2.setAttribute("width", W2); s2.setAttribute("height", H2);
    const g2 = d3.select(s2); g2.selectAll("*").remove();
    const maxLW = Math.min(190, Math.max(96, W2 * 0.34));
    const measure = (txt, size, weight) => { const t = g2.append("text").style("font-size", size).style("font-weight", weight).text(txt); const w = t.node().getComputedTextLength(); t.remove(); return w; };
    const labs = regRows.map(([, , nm, cat]) => {
      let lines = [cat];
      if (measure(cat, "11px", 400) > maxLW - 12 && cat.includes(", ")) { const i = cat.indexOf(", "); lines = [cat.slice(0, i + 1), cat.slice(i + 2)]; }
      else if (phone && measure(cat, "11px", 400) > 110 && cat.includes(" and ")) { const i = cat.indexOf(" and ") + 4; lines = [cat.slice(0, i), cat.slice(i + 1)]; }
      return { nm, lines, w: Math.max(measure(nm, "12.5px", 600), ...lines.map((l) => measure(l, "11px", 400))) };
    });
    const lw2 = Math.ceil(Math.max(...labs.map((l) => l.w))) + 14;
    const xa = d3.scaleLinear().domain([0, DATA.axes.reg_revenue_max]).range([lw2, phone ? W2 - 18 : W2 * split2 - 34]);
    const xbb = d3.scaleLinear().domain([0, DATA.axes.burden_max]).range([phone ? lw2 : W2 * split2 + 14, W2 - (phone ? 36 : 10)]);
    const both = !phone, rev = both || regTab === "revenue", bur = both || regTab === "burden", grow = (s, f) => (move && dur(1) ? f(s.transition().duration(dur(600)).ease(d3.easeCubicOut)) : f(s));
    if (rev) [0, 50, 100].forEach((v) => {
      g2.append("line").attr("x1", xa(v)).attr("x2", xa(v)).attr("y1", top2).attr("y2", H2 - foot).style("stroke", v === 100 ? "var(--ink-3)" : "var(--grid)").style("stroke-dasharray", v === 100 ? "4 3" : null);
      g2.append("text").attr("x", xa(v)).attr("y", H2 - foot + 14).attr("text-anchor", "middle").style("font-size", "11px").style("fill", "var(--ink-3)").text(v + "%");
    });
    if (rev) g2.append("text").attr("x", phone ? W2 - 1 : xa(100)).attr("y", 12).attr("text-anchor", phone ? "end" : "middle").style("font-size", "11px").style("fill", "var(--ink-3)").text("statutory forecast");
    if (bur) d3.range(0, DATA.axes.burden_max + 0.01, 1).forEach((v) => {
      g2.append("line").attr("x1", xbb(v)).attr("x2", xbb(v)).attr("y1", top2).attr("y2", H2 - foot).style("stroke", "var(--grid)");
      if (v > 0 || phone) g2.append("text").attr("x", xbb(v)).attr("y", H2 - foot + 14).attr("text-anchor", "middle").style("font-size", "11px").style("fill", "var(--ink-3)").text(v + "%");
    });
    if (phone) g2.append("text").attr("x", W2 / 2).attr("y", H2 - 5).attr("text-anchor", "middle").style("font-size", "11px").style("fill", "var(--ink-3)").text(rev ? "Revenue gained, % of the statutory forecast" : "VAT added for the poorest decile, % of consumption");
    else g2.append("text").attr("x", xbb(1.5)).attr("y", 12).attr("text-anchor", "middle").style("font-size", "11px").style("fill", "var(--ink-3)").text("poorest decile’s burden");
    regRows.forEach(([cc, k, nm, cat], i) => {
      const t = D.countries[cc].t7[k], y = top2 + 8 + i * rh;
      g2.append("text").attr("class", "rlab").attr("x", 0).attr("y", y + 9).style("font-size", "12.5px").style("font-weight", 600).style("fill", "var(--ink)").text(nm);
      labs[i].lines.forEach((ln, j) => g2.append("text").attr("class", "rlab").attr("x", 0).attr("y", y + 22 + 11 * j).style("font-size", "11px").style("fill", "var(--ink-3)").text(ln));
      if (rev) g2.append("rect").attr("class", "rbar").attr("tabindex", 0).attr("data-tip", `<b>${nm}, ${cat}</b><br>Revenue gained: ${f1(t.revenue)}% of statutory VAT on the same net purchases`).attr("x", xa(0)).attr("y", y + 2).attr("height", 14).attr("width", move ? 0 : xa(t.revenue) - xa(0)).style("fill", "var(--collected)").call((s) => grow(s, (q) => q.attr("width", xa(t.revenue) - xa(0))));
      if (rev) g2.append("text").attr("x", xa(t.revenue) + 5).attr("y", y + 13).style("font-size", "11.5px").style("font-weight", 600).style("fill", "var(--ink)").style("font-variant-numeric", "tabular-nums").text(f0(t.revenue));
      const yy = y + 9;
      if (!bur) return;
      g2.append("line").attr("x1", xbb(Math.min(t.d1_chain, t.d1_statutory))).attr("x2", xbb(Math.max(t.d1_chain, t.d1_statutory))).attr("y1", yy).attr("y2", yy).style("stroke", "var(--rule)").style("stroke-width", 2);
      const tb = (what, v) => `<b>${nm}, ${cat}</b><br>Poorest decile’s added burden, ${what}: ${f2(v)}% of consumption`;
      g2.append("circle").attr("tabindex", 0).attr("data-tip", tb("if sales were untaxed before", t.d1_statutory)).attr("cx", xbb(move ? 0 : t.d1_statutory)).attr("cy", yy).attr("r", 4.5).style("fill", "var(--bg)").style("stroke", "var(--ink-2)").style("stroke-width", 1.6).call((s) => grow(s, (q) => q.attr("cx", xbb(t.d1_statutory))));
      g2.append("circle").attr("tabindex", 0).attr("data-tip", tb("with upstream VAT already in prices", t.d1_chain)).attr("cx", xbb(move ? 0 : t.d1_chain)).attr("cy", yy).attr("r", 5).style("fill", "var(--up)").call((s) => grow(s, (q) => q.attr("cx", xbb(t.d1_chain))));
      if (phone) [[t.d1_chain, -10, "end", "var(--up-text)"], [t.d1_statutory, 10, "start", "var(--ink-2)"]].forEach(([v, dx, a, c]) => g2.append("text").attr("x", xbb(v) + dx).attr("y", yy + 4).attr("text-anchor", a).style("font-size", "11px").style("font-weight", 600).style("fill", c).style("font-variant-numeric", "tabular-nums").text(f2(v)));
    });
    const kRev = `<span><i class="key" style="background:var(--collected)"></i>Revenue gained</span>`, kBur = `<span><i class="key" style="background:var(--up);border-radius:50%;width:10px;height:10px"></i>Burden with upstream VAT</span><span><i class="key" style="border:1.6px solid var(--ink-2);border-radius:50%;width:9px;height:9px"></i>Burden if sales were untaxed before</span>`;
    $("#reg-key").innerHTML = (rev ? kRev : "") + (bur ? kBur : "");
    $$("#reg-tabs button").forEach((b) => b.setAttribute("aria-selected", String(b.dataset.v === regTab)));
  }
  function tbl(head, rows, opts) {
    opts = opts || {};
    return `<div class="tablewrap"><table class="dt ${opts.cls || ""}"><thead><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr class="${r.hl ? "hl" : ""}">${(r.cells || r).map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  }
  const srcList = (t) => `<p class="src">Source${/;/.test(t) ? "s" : ""}: ${t.split("; ").map((x) => x[0].toUpperCase() + x.slice(1)).join(". ")}.</p>`;
  function toyChain(phi, phiW, am) {
    const tau = 0.18, a = 0.2, v = 1 - a - am, beta = 0.6, omega = 0.15, gamma = 0.25;
    const a11 = 1 - a * phi, a12 = -a * (1 - phi), b1 = am + v;
    const a21 = -a * (1 + tau) * phi, a22 = 1 - a * (1 - phi), b2 = (1 + tau) * am + v;
    const det = a11 * a22 - a12 * a21;
    const pC = (b1 * a22 - a12 * b2) / det, pN = (a11 * b2 - a21 * b1) / det;
    const et = pC - 1;
    const qR = beta * (phi * (1 + et) + (1 - phi) * pN) + omega;          // (B3), distributors' inputs untaxed
    const qU = beta * (phi * (1 + tau) * (1 + et) + (1 - phi) * pN) + omega; // (B4)
    const E = phiW * qR + (1 - phiW) * qU - (beta + omega);                // VAT inside the goods' cost
    const inv = phiW * tau * qR;                                           // registered wholesaler's invoice VAT
    const till = tau * (1 + E);                                            // formal shop's output VAT net of credits
    const eT = inv + E, eF = till + E;                                     // (B5), (B6)
    return { tau, a, v, am, beta, omega, gamma, pC, pN, qR, qU, E, inv, till, eT, eF, u: eT / eF };
  }

  const DRAWERS = {
    intro() {
      return {
        title: "What is this?",
        src: "Lastunen and Chang (2026), WIDER Working Paper, version of 23 November 2026",
        html: `
<p>VAT is a major revenue source in developing countries. Poorer households make a larger share of their purchases at informal shops, which may charge no VAT on their sales. Some studies count these purchases as untaxed. VAT then looks more progressive, and more of its revenue seems to go uncollected.</p>
<p>But informal shops buy from importers, manufacturers, and wholesalers, and some of these goods carry VAT charged at the border or by registered suppliers. Shops outside the VAT system can’t reclaim that VAT, so it stays in their costs and may reach customers through higher prices.</p>
<p>The paper behind this page measures this upstream VAT in Rwanda, Uganda, Mozambique, and Peru. Its contribution is to show how counting this VAT changes estimates of revenue, tax burdens, and the effects of reforms. It links household surveys and input-output tables to tax-benefit models, and traces VAT through production and distribution, so the estimates vary across products and countries.</p>
<p>In the headline estimates, all buyers have equal access to registered suppliers. Taxable informal purchases then carry 33 to 68 per cent of the VAT on comparable formal purchases. If prices fully reflect this VAT, counting it removes 66 to 88 per cent of the extra progressivity attributed to informal shopping. Under alternative assumptions, the share removed stays large.</p>
<p>The paper simulates two reforms with full pass-through and fixed purchases. The first taxes food at the standard rate and uses the revenue to lower that rate. Food exemptions are usually defended on equity grounds, and with informal purchases counted as untaxed, removing them leaves the poorest decile almost unaffected. Once VAT charged by suppliers is counted, the poorest decile loses 0.3 to 0.7 per cent of consumption. The second registers selected informal retailers for VAT. A newly registered retailer deducts the VAT on its suppliers’ invoices, so registration raises only 40 to 85 per cent of the statutory VAT on the same purchases.</p>
<p>The page compares three ways of treating informal purchases: ${term("alltaxed", "all purchases taxed")} at the statutory rate, ${term("formalonly", "‘formal only’")} (informal purchases carry no VAT), and with ${term("upstream", "upstream VAT")} (they carry the VAT paid by their suppliers, the paper’s main estimate).</p>
<p>The diagram on the left follows VAT along the supply chain, and the controls below it change the assumptions. The charts on the right show how much VAT is collected, who bears it, and how progressive it is. The sections at the bottom compare countries and show the reforms.</p>
<p>Hover over or tap any chart, box, or dotted term for values and definitions. ‘More’ and ‘Method’ open explanations and sources.</p>`,
      };
    },
    example() {
      const c = C();
      const L = (k, inner) => `<span class="lk" data-link="${k}">${inner}</span>`;
      return {
        title: "Worked example with illustrative numbers",
        src: "Paper, Section 2.6 and Appendix B, simplified to a single sector with round numbers that aren’t country data",
        html: `
<p>One good taxed at <i>τ</i> = 18%. Per 1 of a producer’s output: 0.20 of inputs bought from other producers (<i>a</i>), imported inputs <i>a</i><sup>m</sup> (slider), and value added <i>v</i> = 1 − <i>a</i> − <i>a</i><sup>m</sup>. Per 1 of the good’s value at the shop, without VAT: factory value <i>β</i> = 0.60, wholesale margin <i>ω</i> = 0.15, shop margin <i>γ</i> = 0.25. Distributors’ own running costs carry no VAT here. Hover a number or a formula to see which belongs to which.</p>
<div class="ex-ctl">
<label for="ex-phi">Producers registered for VAT, <i>φ</i></label><output id="ex-phi-o"></output><input type="range" id="ex-phi" min="0" max="1" step="0.05" value="0.5">
<label for="ex-phiw">Wholesalers registered for VAT, <i>φ</i><sup>W</sup></label><output id="ex-phiw-o"></output><input type="range" id="ex-phiw" min="0" max="1" step="0.05" value="0.5">
<label for="ex-am">Imported inputs per 1 of output, <i>a</i><sup>m</sup></label><output id="ex-am-o"></output><input type="range" id="ex-am" min="0" max="0.5" step="0.05" value="0.2">
</div>
<h3>Step 1. Producers’ costs</h3>
<p>The unit cost is <i>p</i><sup>C</sup> for a registered producer and <i>p</i><sup>N</sup> for an unregistered one. Both are 1 without VAT. A registered producer pays net prices because it deducts the VAT on invoices. An unregistered producer pays VAT on inputs from registered suppliers and on imports, which remains in its costs. Producers buy from each other, so the two costs are solved together.</p>
<div class="eqs">
<div class="eqrow">${L("pc", `<i>p</i><sup>C</sup> = <i>a</i>[<i>φ p</i><sup>C</sup> + (1 − <i>φ</i>) <i>p</i><sup>N</sup>] + <i>a</i><sup>m</sup> + <i>v</i>`)}<span class="tag">(B1)</span></div>
<div class="eqrow fill" id="ex-f-pc"></div>
<div class="eqrow">${L("pn", `<i>p</i><sup>N</sup> = <i>a</i>[(1 + <i>τ</i>) <i>φ p</i><sup>C</sup> + (1 − <i>φ</i>) <i>p</i><sup>N</sup>] + (1 + <i>τ</i>) <i>a</i><sup>m</sup> + <i>v</i>`)}<span class="tag">(B2)</span></div>
<div class="eqrow fill" id="ex-f-pn"></div>
</div>
<div class="tablewrap"><table class="dt"><thead><tr><th>VAT remaining in costs, per 100 of output</th><th>Registered</th><th>Unregistered</th></tr></thead><tbody>
<tr><td>(<i>p</i> − 1) × 100</td><td>${L("pc", `<span id="ex-eC"></span>`)}</td><td class="stuck">${L("pn", `<span id="ex-eN"></span>`)}</td></tr>
</tbody></table></div>
<h3>Step 2. Wholesalers’ prices</h3>
<p>Selling prices before the wholesaler’s own VAT are <i>q</i><sup>R</sup> if it’s registered and <i>q</i><sup>U</sup> if it isn’t. A registered wholesaler buys the good net of VAT. An unregistered one pays the VAT of registered producers, which remains in its costs. Both add the margin <i>ω</i>.</p>
<div class="eqs">
<div class="eqrow">${L("qr", `<i>q</i><sup>R</sup> = <i>β</i>[<i>φ p</i><sup>C</sup> + (1 − <i>φ</i>) <i>p</i><sup>N</sup>] + <i>ω</i>`)}<span class="tag">(B3)</span></div>
<div class="eqrow fill" id="ex-f-qr"></div>
<div class="eqrow">${L("qu", `<i>q</i><sup>U</sup> = <i>β</i>[(1 + <i>τ</i>) <i>φ p</i><sup>C</sup> + (1 − <i>φ</i>) <i>p</i><sup>N</sup>] + <i>ω</i>`)}<span class="tag">(B4)</span></div>
<div class="eqrow fill" id="ex-f-qu"></div>
</div>
<h3>Step 3. VAT in the shop’s price</h3>
<p>The shop buys from a registered wholesaler with probability <i>φ</i><sup>W</sup>. <i>E</i> is the VAT left in the cost of the goods, on top of their value without VAT, <i>β</i> + <i>ω</i>.</p>
<div class="eqs">
<div class="eqrow">${L("E", `VAT inside the cost: <i>E</i> = <i>φ</i><sup>W</sup><i>q</i><sup>R</sup> + (1 − <i>φ</i><sup>W</sup>) <i>q</i><sup>U</sup> − (<i>β</i> + <i>ω</i>)`)}</div>
<div class="eqrow fill" id="ex-f-E"></div>
<div class="eqrow">${L("inv", `Wholesaler’s invoice VAT: <i>τ φ</i><sup>W</sup> <i>q</i><sup>R</sup>`)}</div>
<div class="eqrow fill" id="ex-f-inv"></div>
<div class="eqrow">${L("till", `VAT on the formal shop’s sale: <i>τ</i>(1 + <i>E</i>)`)}</div>
<div class="eqrow fill" id="ex-f-till"></div>
</div>
<div class="tablewrap"><table class="dt"><thead><tr><th>Per 100 of the good’s value</th><th>Informal shop</th><th>Formal shop</th></tr></thead><tbody>
<tr><td>VAT inside the goods’ cost</td><td class="stuck">${L("E", `<span id="ex-E1"></span>`)}</td><td class="stuck">${L("E", `<span id="ex-E2"></span>`)}</td></tr>
<tr><td>Registered wholesaler’s invoice VAT</td><td class="stuck">${L("inv", `<span id="ex-inv"></span>`)}</td><td class="cred">deducted</td></tr>
<tr><td>VAT charged on the sale</td><td>none</td><td class="coll">${L("till", `<span id="ex-till"></span>`)}</td></tr>
<tr class="hl"><td>Total VAT in the price</td><td>${L("eT", `<span id="ex-eT"></span>`)}</td><td>${L("eF", `<span id="ex-eF"></span>`)}</td></tr>
</tbody></table></div>
<div class="eqs">
<div class="eqrow">${L("eT", `Informal: <i>e</i><sup>T</sup> = wholesaler’s invoice VAT + <i>E</i>`)}<span class="tag">(B5)</span></div>
<div class="eqrow">${L("eF", `Formal: <i>e</i><sup>F</sup> = <i>τ</i>(1 + <i>E</i>) + <i>E</i>`)}<span class="tag">(B6)</span></div>
<div class="eqrow">${L("u", `Upstream share: <i>u</i> = <i>e</i><sup>T</sup> / <i>e</i><sup>F</sup>`)}</div>
<div class="eqrow fill" id="ex-f-u"></div>
</div>
<div class="ex-res">
<span>Bought formally</span><span class="bar"><i id="ex-bF" style="background:var(--collected)"></i></span><b id="ex-vF"></b>
<span>Bought informally</span><span class="bar"><i id="ex-bT" style="background:var(--up)"></i></span><b id="ex-vT"></b>
</div>
<p id="ex-u"></p>
<p class="small">Checks: both registration sliders at 100% with no imports give <i>u</i> = 0.75, because only the shop’s own margin is untaxed. This is the paper’s Equation (1) with every supplier registered. Both at 0 with no imports give 0. The formal shop’s total exceeds the statutory 18 when its suppliers include unregistered firms, because their embedded VAT is taxed again. The upstream share divides by this formal total, as in the paper.</p>
<p><button class="btnlink" type="button" id="ex-back">Back to ${c.name}’s supply chain</button></p>`,
        after() {
          const ids = ["ex-phi", "ex-phiw", "ex-am"];
          const n2 = (x) => x.toFixed(2), n3 = (x) => x.toFixed(3);
          const set = (id, h) => { $("#" + id).innerHTML = h; };
          const f = () => {
            const [phi, phiW, am] = ids.map((i) => +$("#" + i).value);
            $("#ex-phi-o").textContent = f0(100 * phi) + "%"; $("#ex-phiw-o").textContent = f0(100 * phiW) + "%"; $("#ex-am-o").textContent = n2(am);
            const t = toyChain(phi, phiW, am);
            set("ex-f-pc", `= 0.20 × [${n2(phi)} × ${n3(t.pC)} + ${n2(1 - phi)} × ${n3(t.pN)}] + ${n2(am)} + ${n2(t.v)} = <b>${n3(t.pC)}</b>`);
            set("ex-f-pn", `= 0.20 × [1.18 × ${n2(phi)} × ${n3(t.pC)} + ${n2(1 - phi)} × ${n3(t.pN)}] + 1.18 × ${n2(am)} + ${n2(t.v)} = <b>${n3(t.pN)}</b>`);
            set("ex-f-qr", `= 0.60 × [${n2(phi)} × ${n3(t.pC)} + ${n2(1 - phi)} × ${n3(t.pN)}] + 0.15 = <b>${n3(t.qR)}</b>`);
            set("ex-f-qu", `= 0.60 × [1.18 × ${n2(phi)} × ${n3(t.pC)} + ${n2(1 - phi)} × ${n3(t.pN)}] + 0.15 = <b>${n3(t.qU)}</b>`);
            set("ex-f-E", `= ${n2(phiW)} × ${n3(t.qR)} + ${n2(1 - phiW)} × ${n3(t.qU)} − 0.75 = <b>${n3(t.E)}</b>`);
            set("ex-f-inv", `= 0.18 × ${n2(phiW)} × ${n3(t.qR)} = <b>${n3(t.inv)}</b>`);
            set("ex-f-till", `= 0.18 × (1 + ${n3(t.E)}) = <b>${n3(t.till)}</b>`);
            set("ex-f-u", `= ${n3(t.eT)} / ${n3(t.eF)} = <b>${n2(t.u)}</b>`);
            $("#ex-eC").textContent = f1(100 * (t.pC - 1)); $("#ex-eN").textContent = f1(100 * (t.pN - 1));
            $("#ex-E1").textContent = f1(100 * t.E); $("#ex-E2").textContent = f1(100 * t.E);
            $("#ex-inv").textContent = f1(100 * t.inv); $("#ex-till").textContent = f1(100 * t.till);
            $("#ex-eT").textContent = f1(100 * t.eT); $("#ex-eF").textContent = f1(100 * t.eF);
            const mx = Math.max(t.eF, 0.18) * 1.05;
            $("#ex-bF").style.width = (100 * t.eF / mx).toFixed(1) + "%"; $("#ex-bT").style.width = (100 * t.eT / mx).toFixed(1) + "%";
            $("#ex-vF").textContent = f1(100 * t.eF); $("#ex-vT").textContent = f1(100 * t.eT);
            $("#ex-u").innerHTML = `${term("ushare", "Upstream share")} in this example: <b>${f2(t.u)}</b>. In ${c.name}’s full model the same ratio, averaged over everything bought informally, is <b>${f2(c.chain.ubar)}</b>.`;
          };
          ids.forEach((i) => $("#" + i).addEventListener("input", f)); f();
          const body = $("#drawer-body");
          const lit = (k, on) => $$(`.lk[data-link="${k}"]`, body).forEach((e) => e.classList.toggle("lit", on));
          $$(".lk", body).forEach((e) => { e.addEventListener("mouseenter", () => lit(e.dataset.link, true)); e.addEventListener("mouseleave", () => lit(e.dataset.link, false)); });
          $$(".eqrow.fill", body).forEach((e) => { const prev = e.previousElementSibling && e.previousElementSibling.querySelector(".lk"); if (prev) { e.addEventListener("mouseenter", () => lit(prev.dataset.link, true)); e.addEventListener("mouseleave", () => lit(prev.dataset.link, false)); } });
          $("#ex-back").addEventListener("click", backToMain);
        },
      };
    },
    chain() {
      const c = C(), ch = c.chain.channels;
      const rows = [["invoice", "Immediate supplier’s invoice VAT"], ["border_final", "Border VAT retained"], ["producer_invoice", "Producer’s invoice VAT, retained at wholesale"], ["inherited", "VAT inherited in producers’ input costs"], ["wholesale_inputs", "Wholesale operating inputs"], ["retail_inputs", "Retail operating inputs"], ["total", "Total"]];
      return {
        title: "The VAT chain",
        src: "Paper, Sections 2.1 and 2.6, Equation (1), Figure 2, Table 3, and Appendix B; online appendix, Tables OA.2, OA.3, and OA.10",
        html: `
<p><button class="btnlink" type="button" data-drawer="example">Worked example with illustrative numbers</button></p>
<p>A registered firm charges VAT on its sales and deducts the VAT shown on its suppliers’ invoices. An unregistered firm charges no VAT and deducts nothing, so the VAT on what it buys stays in its costs. If it prices to cover costs, that tax reaches its customers even though the final sale is informal.</p>
<h3>A worked example</h3>
<p>An unregistered retailer buys a good for 100 plus 18 in VAT, adds 20 in value, and sells it for 138. A registered retailer with the same costs sells it for 141.6 (120 × 1.18) and remits 3.6 after deducting the 18. The informal sale already carries 18 in VAT, and registration adds only 3.6.</p>
<h3>VAT carried by an informal sale</h3>
<p>For a good worth 1 without VAT, let <i>e</i><sup>T</sup> be the VAT an informal sale carries and <i>τ</i> the statutory VAT rate. Then</p>
<div class="eq"><i>e</i><sup>T</sup>/<i>τ</i> = (1 − <i>γ</i>) [<i>φ</i><sup>W</sup> + (1 − <i>φ</i><sup>W</sup>) <i>κ</i>] + <i>γ κ</i><sup>R</sup><span class="lab">Eq. (1)</span></div>
<ul class="defs">
<li><i>γ</i>: the shop’s retail margin, from the national accounts</li>
<li><i>φ</i><sup>W</sup>: the probability that its wholesaler is registered (the national wholesale registration share, ${f2(c.chain.phiW)} in ${c.name})</li>
<li><i>κ</i>: VAT already embedded in an unregistered wholesaler’s supply, as a share of statutory VAT</li>
<li><i>κ</i><sup>R</sup>: VAT on the shop’s own operating purchases, as a share of the VAT on its margin</li>
</ul>
<p>With <i>φ</i><sup>W</sup> = <i>κ</i> = <i>κ</i><sup>R</sup> = 0 the sale is untaxed, the ‘formal only’ case. With <i>φ</i><sup>W</sup> = 1 it carries all statutory VAT except the tax on the shop’s own margin, part of which is paid through its operating purchases. For a service such as hairdressing, <i>γ</i> = 1 and only <i>κ</i><sup>R</sup> remains. Dividing by <i>e</i><sup>F</sup>, the VAT on the same purchase bought formally, gives the upstream share <i>u</i> = <i>e</i><sup>T</sup>/<i>e</i><sup>F</sup>.</p>
<h3>Input-output calculation</h3>
<p><button class="btnlink" type="button" data-drawer="example">Open the worked example with illustrative numbers</button></p>
<p>Each product has two unit costs: <b>p</b><sup>C</sup> for producers that can deduct input VAT and <b>p</b><sup>N</sup> for producers that can’t. A cost is 1 without VAT, so anything above 1 is VAT left in costs. Producers buy from each other, so the two are solved together from the input-output table (here with random sourcing and standard-rated output):</p>
<div class="eq"><b>p</b><sup>C</sup> = <b>A</b>′[<b>S p</b><sup>C</sup> + (<b>I</b> − <b>S</b>) <b>p</b><sup>N</sup>] + <b>a</b><sup>m</sup> + <b>v</b><span class="lab">(B1)</span><br><b>p</b><sup>N</sup> = <b>A</b>′[(1 + <i>τ</i>) <b>S p</b><sup>C</sup> + (<b>I</b> − <b>S</b>) <b>p</b><sup>N</sup>] + (<b>I</b> + <b>T</b><sup>m</sup>) <b>a</b><sup>m</sup> + <b>v</b><span class="lab">(B2)</span></div>
<ul class="defs">
<li><b>A</b>′, <b>a</b><sup>m</sup>, and <b>v</b>: domestic inputs (by using sector), imported inputs, and value added, per unit of output</li>
<li><b>S</b> = diag(<i>φ</i><sub>i</sub><i>θ</i><sub>i</sub>): for product <i>i</i>, the share sold by registered firms (<i>φ</i><sub>i</sub>) times the share that is standard-rated (<i>θ</i><sub>i</sub>)</li>
<li><b>T</b><sup>m</sup>: border VAT rates on imported inputs. <b>I</b> is the identity matrix</li>
</ul>
<p>Wholesale and retail margins are added on top (Equations (B3) to (B6)), so an informal shop can sell goods made by registered producers. Each survey item is mapped to a product of the table and keeps its own VAT treatment.</p>
<h3>Tax content by channel</h3>
${tbl(["Points per 100 on a formal purchase", "Rwanda", "Uganda", "Mozambique", "Peru"], rows.map(([k, t]) => ({ cells: [(CH.find((o) => o.key === k) ? `<i class="key" style="background:${CH.find((o) => o.key === k).color};margin-right:6px"></i>` : "") + t].concat(D.order.map((cc) => f1(D.countries[cc].chain.channels[k]))), hl: k === "total" })))}
<p>These contributions are the ribbon widths in the diagram (online Appendix Table OA.10). They attribute tax content within the headline calculation and don’t show which firm remits the tax.</p>
<p>The values cover goods and services together. For services, the ‘Immediate supplier’ row is VAT on the provider’s own domestic input invoices, and ‘Border VAT retained’ includes border VAT on the provider’s imported inputs. The drawn routes are simplified: VAT inherited in producers’ input costs and wholesalers’ inputs also pass through registered wholesalers.</p>
<p>Several amber ribbons contain border VAT, for example on imported inputs or on imported goods resold with a registered wholesaler’s invoice. The plum ribbon is therefore not all border VAT. The plum segment of the revenue bar is a separate amount, larger in the headline case. It assumes that no domestic supplier is registered, so none of the border VAT is deducted on the way.</p>
<p>The ribbons average over taxable informal spending. The price bar is VAT-weighted, from simulated revenue, so the two can differ slightly (Mozambique: ${f1(D.countries.MZ.chain.channels.total)} against ${f1(100 * D.countries.MZ.chain.ubar)}).</p>
<h3>Upstream share by product group, ${c.name}</h3>
${tbl(["Group", "Share of taxable informal spending", "Upstream share, border VAT alone", "Upstream share, headline"], c.chain.ucat.map((r) => [r.group, f0(r.share) + "%", f2(r.uB), f2(r.u)]))}
<p>Goods supplied by registered manufacturers or importers carry more VAT than services with large labour costs. Restaurant meals, the largest taxable informal service in Rwanda and Uganda, carry about a fifth or less of the VAT on comparable formal meals.</p>
`,
      };
    },
    revenue() {
      const c = C(), t5 = c.t5, sF = 1 - t5.formal_only.shortfall / 100;
      const pts = [
        ["Border VAT alone", 1 - t5.import_only.shortfall / t5.formal_only.shortfall],
        ["Headline", c.chain.ubar],
        ["Partial sorting", 1 - t5.balanced_half.shortfall / t5.formal_only.shortfall],
        ["Full sorting", 1 - t5.balanced_maximum.shortfall / t5.formal_only.shortfall],
        ["Measured shares", 1 - t5.balanced_measured.shortfall / t5.formal_only.shortfall],
        ["Proxies ×½", 1 - c.grid.formal.reg50.shortfall / t5.formal_only.shortfall],
        ["Proxies ×1.5", 1 - c.grid.formal.reg150.shortfall / t5.formal_only.shortfall],
      ];
      const list = pts.map(([n, u]) => `<span style="position:absolute;left:${(100 * u).toFixed(2)}%;top:0;transform:translateX(-50%);width:6px;height:12px;background:linear-gradient(var(--up),var(--up)) center/2px 100% no-repeat" tabindex="0" data-tip="<b>${n}</b><br>upstream share ${f2(u)}"></span>`).join("");
      return {
        title: "Revenue shortfall",
        src: "Paper, Sections 2.2 and 3.2, Tables 1, 3, and 5, and Figure 3; online appendix, Proposition OA.1; authors’ calculations",
        html: `
<p>The calculation uses three quantities:</p>
<ul class="defs">
<li><i>T</i>: VAT if every taxable purchase were taxed as if bought formally</li>
<li><i>F</i>: VAT on formal purchases alone. Their share of the total is <i>s</i><sub>F</sub> = <i>F</i>/<i>T</i></li>
<li><i>ū</i>: the average upstream share, the VAT that informal purchases carry relative to what they would carry if bought formally</li>
</ul>
<p>Informal retailers remit nothing themselves, so VAT revenue with upstream VAT is</p>
<div class="eq"><i>P</i> = <i>F</i> + <i>ū</i> (<i>T</i> − <i>F</i>)</div>
<p>With the full amount <i>T</i> set to 1 and <i>ū</i><sup>B</sup> the average upstream share under border VAT alone, revenue and the shortfall split into</p>
<div class="eq">1 = <i>s</i><sub>F</sub> + (1 − <i>s</i><sub>F</sub>) <i>ū</i><sup>B</sup> + (1 − <i>s</i><sub>F</sub>)(<i>ū</i> − <i>ū</i><sup>B</sup>) + (1 − <i>s</i><sub>F</sub>)(1 − <i>ū</i>)<span class="lab">Prop. OA.1</span></div>
<p>The four terms are the bar segments: VAT on formal purchases, border VAT alone (‘import only’ in the paper), what the domestic chain adds, and the remaining shortfall. Both averages weight each item by the statutory VAT on its informal purchases. The second and third terms compare two calculations. They don’t say where the tax was remitted, and they aren’t the ribbons in the diagram.</p>
<h3>Remaining shortfall by upstream share, ${c.name}</h3>
<div class="slider-demo">
<input type="range" id="ubar-demo" min="0" max="1" step="0.01" value="${c.chain.ubar.toFixed(2)}" aria-label="Upstream share ū">
<div style="position:relative;height:12px;margin:0 8px">${list}</div>
<p class="out" id="ubar-out"></p>

</div>
<p>Exact identity with <i>s</i><sub>F</sub> = ${f2(sF)} held at ${c.name}’s headline classification. Ticks mark computed scenarios. Each one’s <i>ū</i> is implied by its own shortfall (Table 5 for border VAT alone, the headline, and sorting, and authors’ calculations for the proxies).</p>
<h3>Shortfall components by country</h3>
${tbl(["", "1 − <i>s</i><sub>F</sub>", "<i>ū</i><sup>B</sup>", "<i>ū</i>", "Remaining", "Wholesale registered"], D.order.map((cc) => { const k = D.countries[cc]; return { cells: [k.name, f2(k.t5.formal_only.shortfall / 100), f2(k.chain.ubarB), f2(k.chain.ubar), f0(k.t5.headline.shortfall) + "%", f0(100 * k.chain.phiW) + "%"], hl: cc === S.cc }; }))}
<p>The remaining shortfall is smallest in Mozambique and Peru, for two reasons. Less spending is informal (49 per cent in both, against 75 in Rwanda and 60 in Uganda), and more wholesale supply is registered, so a larger share of what informal shops buy already carries VAT. Totals are household purchases in the survey. Administrative collections also cover business and government purchases, so they aren’t a like-for-like benchmark.</p>
`,
        after() {
          const inp = $("#ubar-demo"), out = $("#ubar-out");
          const sfF = t5.formal_only.shortfall;
          const f = () => { const u = +inp.value; out.innerHTML = `<i>ū</i> = <b>${u.toFixed(2)}</b>: remaining shortfall <b>${f1(sfF * (1 - u))}%</b> of the ‘all purchases taxed’ VAT. Upstream VAT closes ${f0(100 * u)}% of the ${f0(sfF)}% shortfall.`; };
          inp.addEventListener("input", f); f();
        },
      };
    },
    incidence() {
      const c = C(), k = c.components;
      return {
        title: "Accounting and gradient factors",
        src: "Paper, Sections 2.2 and 3.3, Equation (2), Table 4, and Figures 4 and 5; online appendix, Propositions OA.2 to OA.4, Tables OA.12 and OA.13, and Figure OA.1",
        html: `
<p>The Kakwani index <i>K</i> measures how progressive a tax is. It’s the concentration index <i>C</i> of the tax (higher when richer households pay more of it) minus the Gini index of consumption. Above zero, richer households pay a larger share of the tax than of consumption.</p>
<p>A subscript shows which amount of VAT an index refers to:</p>
<ul class="defs">
<li><b>T</b>: VAT if every taxable purchase were taxed</li>
<li><b>F</b>: VAT on formal purchases alone</li>
<li><b>I</b> = T − F: the VAT informal purchases would carry if bought formally</li>
<li><b>U</b>: the upstream VAT informal purchases do carry</li>
<li><b>P</b> = F + U: formal plus upstream VAT</li>
</ul>
<p>The share of the ‘formal only’ progressivity gain that upstream VAT removes is</p>
<div class="eq"><i>A</i> = <span class="frac"><span><i>K</i><sub>F</sub> − <i>K</i><sub>P</sub></span><span><i>K</i><sub>F</sub> − <i>K</i><sub>T</sub></span></span><span class="lab">Eq. (2)</span></div>
<p>Zero leaves the gain intact, and one removes it entirely. Above one, VAT with upstream tax is less progressive than with every purchase taxed, even if it stays progressive.</p>
<h3>Two factors</h3>
<p>The share removed is the product of an accounting factor and a gradient factor (online Appendix Proposition OA.4).</p>
<p>The <b>accounting factor</b> is the share removed if every household’s informal purchases carried the same upstream share. It depends on two numbers: <i>s</i><sup>E</sup><sub>F</sub>, the formal share of VAT (F relative to T), and <i>ū</i><sup>E</sup>, the average upstream share (U relative to I).</p>
<div class="eq">Accounting factor = <span class="frac"><span><i>ū</i><sup>E</sup></span><span><i>s</i><sup>E</sup><sub>F</sub> + (1 − <i>s</i><sup>E</sup><sub>F</sub>) <i>ū</i><sup>E</sup></span></span></div>
<p>The <b>gradient factor</b> adds the effect of differences between households’ baskets.</p>
<div class="eq">Gradient factor = 1 − <span class="frac"><span><i>C</i><sub>U</sub> − <i>C</i><sub>I</sub></span><span><i>C</i><sub>F</sub> − <i>C</i><sub>I</sub></span></span></div>
<p>Where poorer households’ informal purchases carry a larger upstream share (the ‘Upstream share’ tab), upstream VAT is less concentrated among the rich than the VAT those purchases would carry if bought formally (<i>C</i><sub>U</sub> &lt; <i>C</i><sub>I</sub>), and the factor exceeds one. VAT on formal purchases is more concentrated among the rich in all four countries (<i>C</i><sub>F</sub> &gt; <i>C</i><sub>I</sub>).</p>
${tbl(["", "<i>s</i><sup>E</sup><sub>F</sub>", "<i>ū</i><sup>E</sup>", "Accounting", "Gradient", "<i>A</i> (%)", "<i>K</i><sub>F</sub>", "<i>K</i><sub>I</sub>", "<i>K</i><sub>U</sub>"], D.order.map((cc) => { const q = D.countries[cc]; return { cells: [q.name, f2(q.decomp.sEF), f2(q.chain.ubarE), f2(q.decomp.accounting), f2(q.decomp.gradient), f1(q.decomp.removed), f1(q.components.KF), f1(q.components.KI), f1(q.components.KU)], hl: cc === S.cc }; }), { cls: "tight" })}
<p>Every <i>K</i> subtracts the same Gini index, so differences between them equal differences in <i>C</i>. The superscript E marks averages over persons of VAT adjusted for household size, so <i>s</i><sup>E</sup><sub>F</sub> and <i>ū</i><sup>E</sup> differ slightly from the revenue-weighted <i>s</i><sub>F</sub> and <i>ū</i> under ‘Revenue shortfall’. <i>s</i><sup>E</sup><sub>F</sub> is recovered from the published accounting factor and <i>ū</i><sup>E</sup>, and matches Table OA.13.</p>
<h3>Pass-through</h3>
<p>If every informal seller passes a share <i>λ</i> of its upstream VAT into prices, households bear F + <i>λ</i>U. The gradient factor doesn’t change, because concentration indices don’t depend on the size of the tax. In the accounting factor, <i>ū</i><sup>E</sup> becomes <i>λ</i><i>ū</i><sup>E</sup>. The λ slider uses this formula, which reproduces Table 5 at <i>λ</i> = 0.5 and 0.25. Decile effective rates combine simulated liabilities as F + <i>λ</i>(P − F), and <i>K</i><sub>P</sub> = <i>K</i><sub>F</sub> − <i>A</i>(<i>K</i><sub>F</sub> − <i>K</i><sub>T</sub>).</p>
<h3>Effective rates by decile</h3>
<p>A decile’s rate is its survey-weighted VAT over its consumption before indirect taxes, with deciles fixed by the ‘all purchases taxed’ ranking. Upstream VAT raises poorer households’ rates relative to ‘formal only’, but VAT stays progressive in Rwanda, Uganda, and Mozambique and is close to proportional in Peru.</p>
`,
      };
    },
    data() {
      const rowsT1 = ["Survey", "Households", "Persons", "Tax-benefit model", "Simulated policy system", "Standard VAT rate (%)", "VAT turnover threshold", "Input-output table", "Informal share of spending (%)", "Decile 1 / decile 10 (%)"];
      return {
        title: "Data and models",
        src: "Paper, Sections 2.3 and 2.6 and Tables 1 and 3; authors’ calculations (number of product groups)",
        html: `
<p>Each country combines a household expenditure survey, a SOUTHMOD tax-benefit model built on EUROMOD, and the national input-output table. The tax-benefit model applies the detailed VAT, excise, and fuel tax rules to each household’s purchases. The input-output calculation supplies the upstream tax.</p>
${tbl(["", "Rwanda", "Uganda", "Mozambique", "Peru"], rowsT1.map((r) => [r].concat(D.order.map((cc) => esc(D.countries[cc].table1[r])))), { cls: "nw" })}
<h3>Input-output tables</h3>
${tbl(["", "Production groups", "Source"], D.order.map((cc) => ({ cells: [D.countries[cc].name, D.countries[cc].chain.production_groups, esc(D.countries[cc].chain.production_source.replace("; ", ", "))], hl: cc === S.cc })), { cls: "text" })}
<p>The tables are valued at basic prices. Trade and transport margins come from the same accounts and are split between wholesale and retail with a national wholesale share (Table 3: ${D.order.map((cc) => `${D.countries[cc].name} ${f2(D.countries[cc].chain.wholesale_margin)}`).join(", ")}, where Peru assumes an equal split). Unregistered producers are assumed to use the same input proportions as registered ones.</p>
<p>Expenditures enter net of indirect taxes in Rwanda, Uganda, and Mozambique and tax-inclusive in Peru. Own production stays in the welfare aggregate and is untaxed in every scenario. Policy systems match the survey reference years: 2024 in Rwanda and Uganda, 2022 in Mozambique and Peru.</p>
`,
      };
    },
    registration() {
      const c = C(), gf = c.grid.formal;
      const rows = [["×0.25", gf.reg25], ["×0.5", gf.reg50], ["Headline", { removed: c.decomp.removed, shortfall: c.t5.headline.shortfall }], ["×1.5, capped at one", gf.reg150], ["All producers and wholesalers registered", c.robust.allreg]];
      const SRCTXT = {
        RW: "Self-reported VAT payment weighted by turnover bands in the 2023 Establishment Census, scaled down by the census’s share of total employment. Without that coverage adjustment, upstream VAT removes 80 per cent of the gain instead of 66.",
        UG: "Formal value added as a share of total value added, revised 2016/17 estimates matched to the supply and use table. The 2023/24 shares give 84 per cent instead of 88.",
        MZ: "2021 informal-sector value added subtracted from national totals in eight compatible activity groups. Elsewhere, Uganda’s revised shares (mainly crops, livestock, utilities, and most services). Formal-employment shares give similar results.",
        PE: "Corporate and government gross output as a share of total output in fourteen industries, translated to products with the 2022 production matrix.",
      };
      return {
        title: "Registration proxies",
        src: "Paper, Sections 2.6 and 4, Tables 4 and 5, and Appendix B.2; online appendix, Tables OA.4, OA.5, and OA.7; authors’ calculations (shortfalls)",
        html: `
<p>The national accounts don’t say how much of each sector’s output is sold by VAT-registered firms. Each country uses a proxy, interpreted as the share of a sector’s supply sold by registered firms at net value. None measures that share directly, and none can separate lawful non-registration below a threshold, failure to register, and under-reporting by registered firms.</p>
<p><b>${c.name}.</b> ${SRCTXT[S.cc]}</p>
<h3>Proportional changes to the proxies, ${c.name}</h3>
${tbl(["Domestic registration shares", "Gain removed (%)", "Shortfall (%)"], rows.map(([n, r]) => ({ cells: [n, f1(r.removed), f1(r.shortfall)], hl: n === "Headline" })))}
<p>Halving every domestic share lowers the share of the gain removed only to 57 to 73 per cent across countries, from 66 to 88. With no domestic registration at all, border VAT alone removes 29 to 46 per cent (the ‘Border VAT alone’ setting). With every producer and wholesaler registered, only the shop’s margin is untaxed and 90 to 109 per cent is removed. Alternative data sources lower the share removed by at most 4 points. Dropping Rwanda’s coverage adjustment raises it to 80 per cent.</p>
<p>Rows other than the headline use the item-level calculation. The share removed is printed in the online appendix. The shortfalls are the authors’ calculations.</p>
`,
      };
    },
    classification() {
      const c = C();
      return {
        title: "Outlet classification",
        src: "Paper, Section 2.5, Table 2, and Figure 1; online appendix, Tables OA.15, OA.34, and OA.35",
        html: `
<p>Purchases are classified by the outlet the survey records, adapting the modern and traditional distinction of Bachas et al. (2024). Registered utility, telecommunications, and insurance suppliers are formal wherever the bill is paid. The headline treats ambiguous outlets as informal. ‘Medium formal’ and ‘high formal’ treat half or all of them as VAT-remitting, and ‘low formal’ treats spending with no recorded outlet as informal.</p>
${tbl(["", c.name], c.table2.map(([a, b]) => [esc(a.replace("; ", ", ")), esc(b.replace(/; (.)/g, (m, x) => (/formal/.test(b) ? ". " + x.toUpperCase() : ", and " + x)))]), { cls: "text" })}
<h3>Informal share of spending by decile, ${c.name}</h3>
<svg id="dr-fig1" role="img" aria-label="Informal share by decile under four classifications"></svg>
<p class="small"><b>Thick line</b>: headline. <b class="cname-grey">Grey</b> lines: ‘low’, ‘medium’, and ‘high formal’. Circle size: decile’s share of national purchases. The percentages beside the lines are for all deciles together. Paper Figure 1.</p>
<p>The classification sets how much spending is informal. Registration and sourcing set how much VAT those purchases carry. Where a ‘formal only’ gain remains under the alternative classifications, upstream VAT removes 58 to 81 per cent of it under ‘medium’ and ‘high formal’ and 69 to 102 per cent under ‘low formal’. Mozambique’s survey records only four outlet types, so its scenarios move large blocks at once, such as all market purchases (41 per cent of the total). Under ‘high formal’ it has no gain left to remove.</p>
`,
        after() { drawFig1Small($("#dr-fig1"), c); },
      };
    },
    sourcing() {
      const c = C(), gf = c.grid.formal, t5 = c.t5;
      const rows = [
        ["Random (headline)", c.decomp.removed, t5.headline.shortfall],
        ["α = 0.5, δ = 0.25", gf.sort50d25.removed, gf.sort50d25.shortfall], ["α = 0.5, δ = 0.5", t5.balanced_half.removed, t5.balanced_half.shortfall], ["α = 0.5, δ = 0.75", gf.sort50d75.removed, gf.sort50d75.shortfall],
        ["α = 1, δ = 0.25", gf.sort100d25.removed, gf.sort100d25.shortfall], ["α = 1, δ = 0.5", t5.balanced_maximum.removed, t5.balanced_maximum.shortfall], ["α = 1, δ = 0.75", gf.sort100d75.removed, gf.sort100d75.shortfall],
        ["α = 1, δ measured", t5.balanced_measured.removed, t5.balanced_measured.shortfall],
      ];
      return {
        title: "Sourcing",
        src: "Paper, Sections 2.6 and 4 and Table 5; online appendix, Section OA.7.1 and Tables OA.18 and OA.36; authors’ calculations (rows with δ = 0.25 and 0.75: shortfalls, and shares removed at α = 0.5)",
        html: `
<p>The headline assumes random sourcing: buyers with and without input credit rights obtain the same share of their purchases from registered suppliers, the proportionality assumption input-output analysis usually applies to imports. Firms in fact tend to trade with suppliers of the same status, as de Paula and Scheinkman (2010) and Gadenne et al. (2023) show.</p>
<p>Sorting sends registered supply first to buyers who can claim credits, keeping total registered supply fixed:</p>
<div class="eq"><i>J</i> = (1 − <i>α</i>) <i>δφ</i> + <i>α</i> min(<i>δ</i>, <i>φ</i>), &nbsp; <i>ρ</i><sup>C</sup> = <i>J</i>/<i>δ</i>, &nbsp; <i>ρ</i><sup>N</sup> = (<i>φ</i> − <i>J</i>)/(1 − <i>δ</i>)</div>
<ul class="defs">
<li><i>φ</i>: the share of supply that is registered</li>
<li><i>δ</i>: the share of demand from buyers who can claim credits</li>
<li><i>α</i>: the degree of sorting, from 0 (random) to 1 (the most the totals allow)</li>
<li><i>J</i>: registered supply bought by those who can claim credits, as a share of all supply</li>
<li><i>ρ</i><sup>C</sup> and <i>ρ</i><sup>N</sup>: the share of purchases that buyers with and without credit rights get from registered suppliers</li>
</ul>
<p>Sorting lowers the VAT in informal purchases but also the tax embedded in comparable formal purchases, so the share removed can go either way: it falls in Rwanda and Uganda and rises in Mozambique and Peru. With demand shares measured from the accounts and surveys, formal outlets buy less than registered wholesalers supply, so those wholesalers must still sell to informal shops. Formal purchases then lose most of their embedded tax, and the share removed rises to 72 to 90 per cent.</p>
<h3>Sorting scenarios, ${c.name}</h3>
${tbl(["Sourcing", "Gain removed (%)", "Shortfall (%)"], rows.map(([n, a, b], i) => ({ cells: [n, f1(a), f1(b)], hl: i === 0 })))}
<p>All sorting rows use the item-level calculation. Across the six stipulated scenarios the share removed ranges from 49 to 95 per cent in the four countries. The lowest values come from full sorting when credit-claiming buyers make up three-quarters of demand, the case nearest to Abramovsky et al. (2026).</p>
`,
      };
    },
    passthrough() {
      const c = C();
      return {
        title: "Pass-through",
        src: "Paper, Sections 2.1 and 4 and Tables 4 and 5; online appendix, Proposition OA.4 and Tables OA.13, OA.17 to OA.19, OA.21, and OA.32",
        html: `
<p>An informal seller passes a share <i>λ</i> of its upstream VAT into its price. The headline sets <i>λ</i> = 1, cost pricing: the long-run outcome when entry into informal retail is free and unit costs are constant. Under parity pricing the seller would instead match the formal tax-inclusive price, and burdens would equal the ‘all purchases taxed’ scenario.</p>
<p>Lower pass-through doesn’t change revenue: the tax has already been collected upstream. Sellers absorb the rest from their business incomes, which the page, like the paper, leaves out of household burdens.</p>
<h3>Formula</h3>
<div class="eq"><i>A</i>(<i>λ</i>) = <i>g</i> × <span class="frac"><span><i>λ ū</i><sup>E</sup></span><span><i>s</i><sup>E</sup><sub>F</sub> + (1 − <i>s</i><sup>E</sup><sub>F</sub>) <i>λ ū</i><sup>E</sup></span></span></div>
<p><i>A</i>(<i>λ</i>) is the share of the ‘formal only’ progressivity gain removed, <i>g</i> the gradient factor, <i>ū</i><sup>E</sup> the average upstream share, and <i>s</i><sup>E</sup><sub>F</sub> the formal share of VAT, all explained under <button class="linkbtn" type="button" data-drawer="incidence">Accounting and gradient factors</button>.</p>
<p>For ${c.name}: <i>g</i> = ${f2(c.decomp.gradient)}, <i>ū</i><sup>E</sup> = ${f2(c.chain.ubarE)}, <i>s</i><sup>E</sup><sub>F</sub> = ${f2(c.decomp.sEF)}. At <i>λ</i> = 0.5 this gives ${f1(c.t5["pass_through_0.5"].removed)} per cent and at 0.25 gives ${f1(c.t5["pass_through_0.25"].removed)}, as in Table 5. ‘Border VAT alone’ uses the same formula with its own average upstream share and the gradient factor implied by its EUROMOD result.</p>
<h3>Price evidence</h3>
<p>If informal purchases carried no VAT, the formal-informal price gap would be larger for taxable than for exempt goods by roughly the VAT rate. In Peru, Uganda, and Mozambique the additional gap is close to zero, below even the headline’s prediction, which fits full pass-through better than the lower cases. Applying the Mexican estimates of Bachas et al. (2024), 75 per cent pass-through at formal and 16 per cent at informal outlets, removes 32 to 46 per cent of the gain. The share removed depends on the ratio of informal to formal pass-through.</p>
`,
      };
    },
    caveats() {
      return {
        title: "Caveats",
        src: "Paper, Sections 2.1 to 2.6, 4, and 6; online appendix, Tables OA.1 and OA.14; authors’ calculations",
        html: `
<ul>
<li><b>Compliance.</b> Registered suppliers are assumed to remit statutory VAT and eligible firms to claim their credits. Under-reporting would mean less upstream VAT than modelled, and unclaimed credits would mean more.</li>
<li><b>Registration proxies.</b> Sector-level proxies can’t separate lawful non-registration, failure to register, and under-reporting, and they apply one national wholesale share to all goods.</li>
<li><b>Fixed behaviour.</b> Purchases, outlet choices, and trading relationships are held fixed, including in the policy simulations. No behavioural responses are estimated.</li>
<li><b>Survey coverage.</b> Household surveys under-represent the richest households and some purchases. Simulated household VAT equals ${D.order.map((cc) => `${f0(D.countries[cc].context.simulated_pct_reported)}% in ${D.countries[cc].name}`).join(", ").replace(/, (?=[^,]*$)/, ", and ")} of reported collections, which also cover business and government purchases. Scenarios are compared on the same purchases.</li>
<li><b>Input-output vintages.</b> Uganda’s table is from 2016/17 and Peru’s product table is reconstructed from the 2022 supply and use tables. Either can shift the estimates in both directions.</li>
<li><b>Normalization.</b> Formal purchases are assigned statutory VAT, and informal liabilities are scaled by the same factor. Keeping the full embedded tax instead gives 67 to 86 per cent of the gain removed, within three points of the headline.</li>
<li><b>Settings without their own simulation.</b> Sorting, registration multipliers, and most classification combinations apply upstream shares to the same purchases outside EUROMOD, and have no sampling intervals. In the headline case this reproduces EUROMOD’s decile rates within 0.01 percentage points in all four countries. Totals differ most in Uganda: by 0.04 in the Kakwani index (× 100), 0.17 per cent in revenue, and 0.3 points in the share removed.</li>
<li><b>Sellers’ incomes.</b> With pass-through below one, sellers absorb part of the tax. Household burdens leave this loss of business income out.</li>
</ul>
`,
      };
    },
  };

  function drawFig1Small(svg, c) {
    const cs = getComputedStyle(svg.parentNode), W = Math.min(560, svg.parentNode.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight)), H = 204, m = { l: 38, r: 126, t: 14, b: 24 };
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`); svg.setAttribute("width", W); svg.setAttribute("height", H);
    const x = d3.scalePoint().domain(d3.range(1, 11)).range([m.l + 6, W - m.r]);
    const y = d3.scaleLinear().domain([0, 100]).range([H - m.b, m.t]);
    const g = d3.select(svg);
    [0, 25, 50, 75, 100].forEach((v) => { g.append("line").attr("x1", m.l).attr("x2", W - m.r).attr("y1", y(v)).attr("y2", y(v)).style("stroke", "var(--grid)"); g.append("text").attr("x", m.l - 5).attr("y", y(v) + 3.5).attr("text-anchor", "end").style("font-size", "11px").style("fill", "var(--ink-3)").text(v + "%"); });
    d3.range(1, 11).forEach((d) => g.append("text").attr("x", x(d)).attr("y", H - 8).attr("text-anchor", "middle").style("font-size", "11px").style("fill", "var(--ink-3)").text(d));
    const line = d3.line().x((v, i) => x(i + 1)).y((v) => y(v));
    const lab = { low: "Low formal", formal: "Headline", med: "Medium formal", high: "High formal" };
    const ends = [];
    ["low", "med", "high", "formal"].forEach((k) => {
      const s = c.informal[k].deciles;
      g.append("path").attr("d", line(s)).style("fill", "none").style("stroke", k === "formal" ? "var(--ink)" : "var(--untaxed)").style("stroke-width", k === "formal" ? 2.2 : 1.3);
      ends.push({ k, v: s[9] });
    });
    const ps = c.informal.purchase_share, rmax = Math.max(...ps);
    c.informal.formal.deciles.forEach((v, i) => g.append("circle").attr("cx", x(i + 1)).attr("cy", y(v)).attr("r", 2 + 6 * Math.sqrt(ps[i] / rmax)).style("fill", "var(--ink)").style("opacity", 0.85));
    ends.sort((a, b) => b.v - a.v); let last = -1e9;
    ends.forEach((e) => { e.y = Math.max(y(e.v) + 4, last + 13); last = e.y; });
    ends.forEach((e) => g.append("text").attr("x", W - m.r + 10).attr("y", e.y).style("font-size", "11px").style("font-weight", e.k === "formal" ? 600 : 400).style("fill", e.k === "formal" ? "var(--ink)" : "var(--ink-2)").text(`${lab[e.k]} ${f0(c.informal[e.k].all)}%`));
  }

  let lastFocus = null;
  function openDrawer(key) {
    const d = DRAWERS[key]();
    $("#drawer-title").innerHTML = esc(d.title);
    $("#drawer-body").innerHTML = d.html + srcList(d.src);
    const dr = $("#drawer"), sc = $("#scrim");
    lastFocus = document.activeElement;
    dr.hidden = false; sc.hidden = false;
    requestAnimationFrame(() => { dr.classList.add("open"); sc.classList.add("open"); });
    $("#drawer-body").scrollTop = 0;
    if (d.after) d.after();
    setTimeout(() => $("#drawer-close").focus(), 30);
  }
  function closeDrawer() {
    const dr = $("#drawer"), sc = $("#scrim");
    dr.classList.remove("open"); sc.classList.remove("open");
    setTimeout(() => { dr.hidden = true; sc.hidden = true; }, RM.matches ? 0 : 320);
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }
  function backToMain() {
    closeDrawer();
    const tab = $("#tab-" + S.cc); if (tab) tab.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: RM.matches ? "auto" : "smooth" });
  }
  function buildSwipe() {
    const dr = $("#drawer"), sc = $("#scrim");
    let g = null;
    const blocked = (t) => { if (t.closest("input, select, textarea")) return true; for (let e = t; e && e !== dr; e = e.parentElement) if (e.scrollLeft > 0) return true; return false; };
    const place = (x) => { dr.style.transform = x === null ? "" : `translateX(${x}px)`; sc.style.opacity = x === null ? "" : String(1 - x / dr.offsetWidth); };
    const live = (on) => { dr.style.transition = sc.style.transition = on ? "none" : ""; };
    dr.addEventListener("touchstart", (e) => {
      if (g && g.on) { g.on = false; live(false); place(null); }
      g = e.touches.length === 1 && dr.classList.contains("open") && !blocked(e.target) ? { x: e.touches[0].clientX, y: e.touches[0].clientY, on: false, dx: 0, log: [[e.timeStamp, 0]] } : null;
    }, { passive: true });
    dr.addEventListener("touchmove", (e) => {
      if (!g) return;
      const t = e.touches[0], dx = t.clientX - g.x, dy = t.clientY - g.y;
      if (!g.on) {
        if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
        if (dx <= 0 || Math.abs(dx) < 1.2 * Math.abs(dy) || !e.cancelable) { g = null; return; }
        g.on = true; live(true);
      }
      e.preventDefault();
      g.dx = Math.max(0, dx - 8); g.log.push([e.timeStamp, g.dx]);
      place(g.dx);
    }, { passive: false });
    const end = (e) => {
      const q = g; g = null;
      if (!q || !q.on) return;
      const z = q.log[q.log.length - 1], a = q.log.find((m) => z[0] - m[0] < 130), v = z[0] > a[0] && e.timeStamp - z[0] < 110 ? (z[1] - a[1]) / (z[0] - a[0]) : 0; // speed over the last moments, px per ms
      const out = e.type === "touchend" && (q.dx > dr.offsetWidth / 3 || (q.dx > 30 && v > 0.25));
      void dr.offsetWidth; live(false); place(null); // the normal transition takes over from where the finger left the panel
      if (out) closeDrawer();
    };
    dr.addEventListener("touchend", end); dr.addEventListener("touchcancel", end);
  }
  function buildDrawers() {
    document.addEventListener("click", (e) => {
      const b = e.target.closest("[data-drawer]");
      if (b) { e.preventDefault(); openDrawer(b.dataset.drawer); }
    });
    $("#drawer-close").addEventListener("click", closeDrawer);
    $("#scrim").addEventListener("click", closeDrawer);
    buildSwipe();
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !$("#drawer").hidden) closeDrawer();
      if (e.key === "Tab" && !$("#drawer").hidden) {
        const f = $$("#drawer button, #drawer input, #drawer a[href]");
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
        else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
      }
    });
  }
  const tipEl = () => $("#tip");
  const SENT = /([.!?]\)?)\s+(?=[A-Z‘“])/;
  function tipLines(t) {
    const gap = () => { const g = document.createElement("span"); g.className = "gap"; return g; };
    $$("br", t).forEach((b) => b.replaceWith(gap()));
    const w = document.createTreeWalker(t, NodeFilter.SHOW_TEXT), list = [];
    while (w.nextNode()) if (!w.currentNode.parentNode.closest("table")) list.push(w.currentNode);
    list.forEach((n) => {
      let m, rest = n;
      while ((m = SENT.exec(rest.data))) { const tail = rest.splitText(m.index + m[1].length); tail.data = tail.data.replace(/^\s+/, ""); tail.parentNode.insertBefore(gap(), tail); rest = tail; }
    });
  }
  function placeLinkTip(el, x, y, w, h, vw, vh) {
    const m = el.getScreenCTM(), L = el.getTotalLength(), n = Math.max(12, Math.ceil(L / 6)), pts = [];
    for (let i = 0; i <= n; i++) { const q = el.getPointAtLength((L * i) / n); pts.push([q.x * m.a + m.e, q.y * m.d + m.f]); }
    const half = (parseFloat(el.getAttribute("stroke-width")) || 10) * m.a / 2 + 5;
    if (x === null) [x, y] = pts[Math.floor(n / 2)];
    const xs = pts.map((q) => q[0]), ys = pts.map((q) => q[1]);
    const bx = { l: Math.min(...xs) - half, r: Math.max(...xs) + half, t: Math.min(...ys) - half, b: Math.max(...ys) + half };
    const cand = [];
    const lefts = [x - w / 2, x + half + 6, x - w - half - 6, bx.r + 4, bx.l - w - 4], tops = [y - h / 2, y - h - half - 6, y + half + 6, bx.t - h - 4, bx.b + 4, y - 24, y - h + 24];
    lefts.forEach((l) => tops.forEach((t) => cand.push([Math.max(8, Math.min(l, vw - w - 8)), Math.max(8, Math.min(t, vh - h - 8))])));
    let best = cand[0], bs = Infinity;
    cand.forEach(([l, t]) => {
      let hit = 0;
      pts.forEach(([px, py]) => { if (px > l - half && px < l + w + half && py > t - half && py < t + h + half) hit++; });
      const under = x > l - 6 && x < l + w + 6 && y > t - 6 && y < t + h + 6 ? 1 : 0;
      const dx = Math.max(l - x, 0, x - l - w), dy = Math.max(t - y, 0, y - t - h);
      const score = hit * 400 + under * 4000 + Math.hypot(dx, dy) * 3 + Math.hypot(l + w / 2 - x, t + h / 2 - y) * 0.3;
      if (score < bs) { bs = score; best = [l, t]; }
    });
    return best;
  }
  const SPR = { x: 0, y: 0, vx: 0, vy: 0, tx: 0, ty: 0, raf: 0, t: 0 };
  const K = 210, DAMP = 20;
  function drawTip() { tipEl().style.transform = `translate3d(${SPR.x.toFixed(1)}px, ${SPR.y.toFixed(1)}px, 0)`; }
  function springStep(now) {
    let dt = Math.min(0.034, Math.max(0.001, (now - SPR.t) / 1000)); SPR.t = now;
    for (let left = dt; left > 1e-6; left -= 0.004) {
      const h = Math.min(0.004, left);
      SPR.vx += (K * (SPR.tx - SPR.x) - DAMP * SPR.vx) * h; SPR.vy += (K * (SPR.ty - SPR.y) - DAMP * SPR.vy) * h;
      SPR.x += SPR.vx * h; SPR.y += SPR.vy * h;
    }
    if (Math.abs(SPR.tx - SPR.x) + Math.abs(SPR.ty - SPR.y) < 0.4 && Math.abs(SPR.vx) + Math.abs(SPR.vy) < 6) { SPR.x = SPR.tx; SPR.y = SPR.ty; SPR.vx = SPR.vy = 0; SPR.raf = 0; drawTip(); return; }
    drawTip(); SPR.raf = requestAnimationFrame(springStep);
  }
  function moveTip(l, t, jump) {
    SPR.tx = Math.round(l); SPR.ty = Math.round(t);
    if (jump || RM.matches) { cancelAnimationFrame(SPR.raf); SPR.raf = 0; SPR.x = SPR.tx; SPR.y = SPR.ty; SPR.vx = SPR.vy = 0; drawTip(); return; }
    if (!SPR.raf) { SPR.t = performance.now(); SPR.raf = requestAnimationFrame(springStep); }
  }
  function placeTip(el, x, y) {
    const t = tipEl(), w = t.offsetWidth, h = t.offsetHeight, vw = document.documentElement.clientWidth, vh = window.innerHeight, gap = 10;
    if (el.classList.contains("rhit")) { return placeLinkTip(el, x, y, w, h, vw, vh); }
    const b = el.getBoundingClientRect();
    let left, top;
    if (b.height > 110) {
      left = b.right + gap + 4; if (left + w > vw - 8) left = b.left - w - gap;
      top = b.top + 6;
    } else {
      left = b.left + b.width / 2 - w / 2;
      top = b.top - h - gap; if (top < 8) top = b.bottom + gap;
    }
    left = Math.max(8, Math.min(left, vw - w - 8)); top = Math.max(8, Math.min(top, vh - h - 8));
    return [left, top];
  }
  const TIP = { el: null, want: null, showT: 0, hideT: 0, offT: 0, lastHide: -1e9, muted: null, pin: null, lastBox: null, wx: 0, wy: 0, quick: false };
  const isText = (el) => el.classList.contains("term") || el.hasAttribute("data-slow");
  const boxOf = (el) => (el.closest && el.closest("svg, table")) || null;
  const isCtl = (el) => !!el.closest("button, summary, a, input, label");
  function openTip(el, x, y) {
    const t = tipEl(), html = el.getAttribute("data-tip");
    if (!html) return;
    clearTimeout(TIP.showT); clearTimeout(TIP.hideT); clearTimeout(TIP.offT);
    const fresh = t.hidden || !t.classList.contains("on");
    if (t.dataset.src !== html || t.hidden) { t.innerHTML = html; t.dataset.src = html; tipLines(t); }
    t.hidden = false;
    t.classList.toggle("tip-narrow", el.classList.contains("hit"));
    const [l, tp] = placeTip(el, x, y);
    const jump = fresh || Math.hypot(l - SPR.x, tp - SPR.y) > 250;
    moveTip(l, tp, jump);
    if (jump) { t.classList.remove("on"); t.classList.add("jump"); void t.offsetWidth; }
    t.classList.remove("jump"); t.classList.add("on");
    TIP.el = el; TIP.want = null; TIP.pin = null;
  }
  function closeTip(now, keep) {
    const t = tipEl();
    clearTimeout(TIP.hideT); clearTimeout(TIP.offT);
    if (!keep) { clearTimeout(TIP.showT); TIP.want = null; }
    TIP.pin = null;
    if (!t || t.hidden) { TIP.el = null; return; }
    if (TIP.el) { TIP.lastHide = performance.now(); TIP.lastBox = boxOf(TIP.el); }
    TIP.el = null;
    t.classList.remove("on");
    if (now || RM.matches) t.hidden = true; else TIP.offT = setTimeout(() => { t.hidden = true; }, 240);
  }
  function markAt(e) {
    const direct = e.target.closest && e.target.closest("[data-tip]");
    if (direct && direct.getAttribute("data-tip")) return direct;
    const svg = e.target.closest && e.target.closest("svg");
    if (!svg || svg.id === "chain") return null;
    let best = null, bd = 9;
    svg.querySelectorAll("circle[data-tip], rect[data-tip], line[data-tip], g[data-tip]").forEach((q) => {
      const b = q.getBoundingClientRect(); if (!b.width && !b.height) return;
      const d = Math.hypot(Math.max(b.left - e.clientX, 0, e.clientX - b.right), Math.max(b.top - e.clientY, 0, e.clientY - b.bottom));
      if (d < bd && q.getAttribute("data-tip")) { bd = d; best = q; }
    });
    return best;
  }
  function buildTips() {
    const onMove = (e) => {
      if (e.pointerType !== "mouse" || e.buttons) return;
      const el = markAt(e);
      if (TIP.muted && el !== TIP.muted) TIP.muted = null;
      if (el && el === TIP.el) { TIP.leaving = false; clearTimeout(TIP.hideT); clearTimeout(TIP.showT); TIP.want = null; return; }
      if (el && el === TIP.muted) return;
      if (!el) {
        clearTimeout(TIP.showT); TIP.want = null;
        if (TIP.el && !TIP.leaving && TIP.pin !== TIP.el) { TIP.leaving = true; const same = TIP.el.ownerSVGElement && e.target.closest && e.target.closest("svg") === TIP.el.ownerSVGElement; TIP.hideT = setTimeout(() => { TIP.leaving = false; closeTip(); }, same ? 320 : 140); }
        return;
      }
      clearTimeout(TIP.hideT); TIP.leaving = false;
      if (el === TIP.want && (TIP.quick || Math.hypot(e.clientX - TIP.wx, e.clientY - TIP.wy) <= 4)) return;
      clearTimeout(TIP.showT); TIP.want = el; TIP.wx = e.clientX; TIP.wy = e.clientY;
      const ctl = isCtl(el) && !isText(el), box = boxOf(el);
      const warm = !ctl && !!box && ((TIP.el && boxOf(TIP.el) === box) || (performance.now() - TIP.lastHide < 300 && TIP.lastBox === box));
      const wait = ctl ? 800 : warm ? 40 : isText(el) ? 600 : 400; // controls, the same chart, words, marks
      TIP.quick = warm;
      if (TIP.el && !warm && TIP.pin !== TIP.el) TIP.hideT = setTimeout(() => closeTip(false, true), ctl ? 80 : 140);
      const x = e.clientX, y = e.clientY;
      TIP.showT = setTimeout(() => { if (TIP.want === el && el.isConnected) openTip(el, x, y); }, wait);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", (e) => { if (e.pointerType === "mouse") closeTip(); });
    document.addEventListener("pointerdown", (e) => {
      const el = e.target.closest && e.target.closest("[data-tip]");
      if (e.pointerType === "mouse") {
        if (TIP.pin && TIP.pin !== el) closeTip();
        if (el && isText(el) && el.getAttribute("data-tip")) { if (TIP.pin === el) { TIP.muted = el; closeTip(); } else { if (TIP.el !== el) openTip(el, e.clientX, e.clientY); TIP.pin = el; } return; }
        if (el && !isCtl(el)) return; TIP.muted = el; closeTip(); return;
      }
      TIP.tap = { id: e.pointerId, x: e.clientX, y: e.clientY, t: performance.now(), el, was: TIP.el };
    }, { passive: true });
    document.addEventListener("pointercancel", () => { TIP.tap = null; });
    document.addEventListener("click", (e) => { if (e.target.closest && e.target.closest("label .term")) e.preventDefault(); });
    document.addEventListener("pointerup", (e) => {
      const q = TIP.tap; TIP.tap = null; TIP.tapped = performance.now();
      if (e.pointerType === "mouse" || !q || q.id !== e.pointerId) return;
      if (Math.hypot(e.clientX - q.x, e.clientY - q.y) > 10 || performance.now() - q.t > 500) return;
      if (q.el && !isCtl(q.el) && q.el.getAttribute("data-tip") && q.was !== q.el) openTip(q.el, e.clientX, e.clientY); else closeTip();
    }, { passive: true });
    window.addEventListener("scroll", () => closeTip(true), { passive: true });
    document.addEventListener("focusin", (e) => {
      const el = e.target.closest && e.target.closest("[data-tip]");
      if (el && el.getAttribute("data-tip") && el.matches(":focus-visible") && el !== TIP.muted) { clearTimeout(TIP.showT); TIP.want = el; TIP.showT = setTimeout(() => { if (document.activeElement === el) openTip(el, null, null); }, isCtl(el) ? 650 : 80); }
    });
    document.addEventListener("focusout", () => { if (performance.now() - TIP.tapped > 600 || !TIP.tapped) closeTip(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" || e.key === "Enter" || e.key === " " || e.key.startsWith("Arrow")) { TIP.muted = isCtl(e.target) ? e.target : null; closeTip(); } });
  }
  function buildPops() {
    const closeAll = () => { $$(".pop").forEach((p) => (p.hidden = true)); $$("[data-pop]").forEach((b) => b.setAttribute("aria-expanded", "false")); };
    document.addEventListener("click", (e) => {
      const b = e.target.closest("[data-pop]");
      if (b) { const p = $("#pop-" + b.dataset.pop), was = !p.hidden; closeAll(); if (!was) { p.hidden = false; b.setAttribute("aria-expanded", "true"); } return; }
      if (!e.target.closest(".pop")) closeAll();
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAll(); });
  }
  const FOLD_DRAW = { compare: () => { drawCompare(); remKey(); }, policy: () => drawPolicy(), limits: () => {}, paper: () => {} };
  let foldAnim = null;
  const clipOf = (d) => d.querySelector(".fold-clip");
  function animateFolds(anchor, openId) {
    if (foldAnim) { cancelAnimationFrame(foldAnim.raf); foldAnim.stop(); foldAnim = null; }
    const folds = $$("details.fold"), sum = anchor.querySelector("summary"), root = document.documentElement;
    const before = sum.getBoundingClientRect().top, scroll0 = window.scrollY;
    const from = folds.map((d) => (d.open ? clipOf(d).getBoundingClientRect().height : 0));
    const height = (d, h) => { const c = clipOf(d); c.style.height = h === null ? "" : h + "px"; c.style.overflow = h === null ? "" : "hidden"; };
    folds.forEach((d, k) => { d.classList.toggle("on", d.id === openId); if (d.id === openId) d.open = true; height(d, d.open ? from[k] : null); });
    if (openId) FOLD_DRAW[openId]();
    const to = folds.map((d) => (d.id === openId ? clipOf(d).firstElementChild.getBoundingClientRect().height : 0));
    folds.forEach((d, k) => { if (d.open) height(d, to[k]); });
    const headEnd = sum.getBoundingClientRect().top + window.scrollY, maxEnd = Math.max(0, root.scrollHeight - window.innerHeight);
    const bar = window.innerWidth <= PHONE ? null : $(".site-header"), barH = bar ? bar.offsetHeight : 0, barNow = bar ? Math.max(0, bar.getBoundingClientRect().bottom) : 0;
    const goal = headEnd - 20 - scroll0 >= barNow ? headEnd - 20 : headEnd - 20 - barH;
    const want = openId ? goal : Math.min(scroll0, headEnd - 20 - barH);
    const scrollEnd = Math.max(0, Math.min(want, maxEnd)), after = headEnd - scrollEnd;
    let steer = true;
    const set = (e) => {
      folds.forEach((d, k) => { if (d.open) height(d, from[k] + (to[k] - from[k]) * e); });
      if (steer) window.scrollTo(0, sum.getBoundingClientRect().top + window.scrollY - (before + (after - before) * e));
    };
    const finish = () => folds.forEach((d) => { if (d.id !== openId) d.open = false; height(d, null); });
    if (RM.matches) { finish(); window.scrollTo(0, scrollEnd); return; }
    root.style.overflowAnchor = "none";
    set(0);
    const free = () => { steer = false; };
    window.addEventListener("wheel", free, { passive: true, once: true });
    window.addEventListener("touchmove", free, { passive: true, once: true });
    const stop = () => { window.removeEventListener("wheel", free); window.removeEventListener("touchmove", free); root.style.overflowAnchor = ""; };
    const T = 950, ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    let t0 = null;
    const step = (now) => {
      if (t0 === null) t0 = now;
      const t = Math.min(1, (now - t0) / T);
      set(ease(t));
      if (t < 1) foldAnim.raf = requestAnimationFrame(step);
      else { finish(); stop(); foldAnim = null; }
    };
    foldAnim = { raf: requestAnimationFrame(step), stop };
  }
  function openFold(id) {
    const target = $("#" + id);
    if (!RM.matches) { $$("details.fold").forEach((d) => d.classList.remove("flash")); target.classList.add("flash"); clearTimeout(openFold.t); openFold.t = setTimeout(() => target.classList.remove("flash"), 1500); }
    animateFolds(target, id);
  }
  function buildFolds() {
    $$("details.fold").forEach((d) => {
      const body = d.querySelector(".fold-body"), clip = document.createElement("div");
      clip.className = "fold-clip"; d.insertBefore(clip, body); clip.appendChild(body);
      d.querySelector("summary").addEventListener("click", (e) => { e.preventDefault(); if (d.classList.contains("on")) animateFolds(d, null); else openFold(d.id); });
    });
    $$('a[href="#paper"]').forEach((a) => a.addEventListener("click", (e) => { e.preventDefault(); openFold("paper"); }));
  }
  const NAV = { at: 0, away: false, queued: false };
  function measureNav() {
    const nav = $("#topnav");
    nav.style.position = "static"; NAV.at = nav.getBoundingClientRect().top + window.scrollY; nav.style.position = "";
    trackNav();
  }
  function trackNav() {
    NAV.queued = false;
    const nav = $("#topnav"), root = document.documentElement, phone = window.innerWidth <= PHONE;
    root.style.setProperty("--p", phone ? Math.max(0, Math.min(1, window.scrollY / Math.max(1, NAV.at))).toFixed(3) : "0");
    const top = $("#compare").getBoundingClientRect().top / window.innerHeight;
    NAV.away = phone && top < (NAV.away ? 0.5 : 0.45);
    nav.classList.toggle("away", NAV.away);
  }
  function buildNav() {
    window.addEventListener("scroll", () => { if (!NAV.queued) { NAV.queued = true; requestAnimationFrame(trackNav); } }, { passive: true });
    trackNav();
  }
  function update(quick) {
    STILL = !!quick;
    if (!available("alt", S.alt)[0]) S.alt = "headline";
    if (!available("cls", S.cls)[0]) S.cls = "formal";
    if (!lamAvailable()) S.lam = 1;
    const R = resolve();
    syncControls(R);

    drawChain(R, quick);
    drawRevenue(R);
    drawIncidence(R);
    drawMeter(R);
  }
  function init() {
    renderLimits();
    buildCountries();
    buildControls();
    buildDrawers();
    buildTips();
    buildNav();
    buildPops();
    syncTabs();
    layoutPage();
    update(true);
    buildFolds();
    const settle = () => { if (foldAnim) return; const y = window.scrollY; layoutPage(); update(true); if ($("#compare").open) drawCompare(); if ($("#policy").open) drawPolicy(); if (window.scrollY !== y) window.scrollTo(0, y); };
    if (document.fonts && document.fonts.ready) { document.fonts.ready.then(settle); if (document.fonts.addEventListener) document.fonts.addEventListener("loadingdone", settle); }
    window.addEventListener("load", settle);
    let t;
    window.addEventListener("resize", () => { clearTimeout(t); t = setTimeout(() => { STILL = true; layoutPage(); const R = resolve(); drawChain(R, true); drawRevenue(R); drawIncidence(R, true); drawMeter(R); if ($("#compare").open) drawCompare(); if ($("#policy").open) drawPolicy(); }, 120); });
    if (location.hash && /^#(RW|UG|MZ|PE)$/i.test(location.hash)) { S.cc = location.hash.slice(1).toUpperCase(); update(true); }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
