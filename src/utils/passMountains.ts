export const passMountains: Record<
	string,
	{
		region: 'East' | 'Midwest' | 'Rockies' | 'West'
		zipcode: string
		snowReportLink: string
    trailReportLink: string
		numTrails: number
		pass: 'Epic' | 'Ikon'
	}
> = {
  'Afton Alps': {
    numTrails: 48,
    pass: "Epic",
    region: "Midwest",
    snowReportLink: "https://www.aftonalps.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx",
    trailReportLink: "https://www.aftonalps.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx",
    zipcode: "55033"
  },
  'Alpine Valley Resort': {
    numTrails: 20,
    pass: "Epic",
    region: "Midwest",
    snowReportLink: "",
    trailReportLink: "https://www.alpinevalleyresort.com/the-mountain/snow-report/",
    zipcode: "48383"
  },
  'Alta': {
    numTrails: 119,
    pass: "Ikon",
    region: "Rockies",
    snowReportLink: "https://www.alta.com/weather",
    trailReportLink: "https://www.alta.com/lift-terrain-status",
    zipcode: "84092"
  },
  'Arapahoe Basin': {
    numTrails: 145,
    pass: "Ikon",
    region: "Rockies",
    snowReportLink: "https://www.arapahoebasin.com/summer-forecast-and-trail-status/",
    trailReportLink: "https://www.arapahoebasin.com/summer-forecast-and-trail-status/",
    zipcode: "80435"
  },
  'Aspen Snowmass': {
    numTrails: 98,
    pass: "Ikon",
    region: "Rockies",
    snowReportLink: "https://www.aspensnowmass.com/our-mountains/snow-report",
    trailReportLink: "https://www.aspensnowmass.com/our-mountains/snow-report",
    zipcode: "81615"
  },
  'Attitash': {
    numTrails: 68,
    pass: "Epic",
    region: "East",
    snowReportLink: "https://www.attitash.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx",
    trailReportLink: "https://www.attitash.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx",
    zipcode: "03812"
  },
  'Beaver Creek': {
    numTrails: 150,
    pass: "Epic",
    region: "Rockies",
    snowReportLink: "https://www.beavercreek.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx",
    trailReportLink: "https://www.beavercreek.com/the-mountain/mountain-conditions/terrain-and-lift-status.aspx",
    zipcode: "81620"
  },
  'Big Bear Mountain Resort': {
    numTrails: 41,
    pass: "Ikon",
    region: "West",
    snowReportLink: "https://www.bigbearmountainresort.com/mountain-information",
    trailReportLink: "https://www.bigbearmountainresort.com/mountain-information",
    zipcode: "92315"
  },
  'Big Sky Resort': {
    numTrails: 310,
    pass: "Ikon",
    region: "Rockies",
    snowReportLink: "https://bigskyresort.com/current-conditions",
    trailReportLink: "https://bigskyresort.com/current-conditions",
    zipcode: "59716"
  },
  'Boston Mills/Brandywine': {
    numTrails: 7,
    pass: "Epic",
    region: "Midwest",
    snowReportLink: "https://www.bmbw.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx",
    trailReportLink: "https://www.bmbw.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx",
    zipcode: "44264"
  },
  'Boyne Mountain': {
    numTrails: 60,
    pass: "Ikon",
    region: "Midwest",
    snowReportLink: "https://www.boynemountain.com/current-conditions",
    trailReportLink: "https://www.boynemountain.com/current-conditions",
    zipcode: "49713"
  },
  'Breckenridge': {
    numTrails: 187,
    pass: "Epic",
    region: "Rockies",
    snowReportLink: "https://www.breckenridge.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx",
    trailReportLink: "https://www.breckenridge.com/the-mountain/mountain-conditions/terrain-and-lift-status.aspx",
    zipcode: "80424"
  },
  'Brighton': {
    numTrails: 66,
    pass: "Ikon",
    region: "Rockies",
    snowReportLink: "https://brightonresort.com/conditions",
    trailReportLink: "https://brightonresort.com/conditions",
    zipcode: "84121"
  },
  'Copper Mountain': {
    numTrails: 149,
    pass: "Ikon",
    region: "Rockies",
    snowReportLink: "https://www.coppercolorado.com/the-mountain/conditions-weather/snow-report",
    trailReportLink: "https://www.coppercolorado.com/the-mountain/trail-lift-info/winter-trail-report",
    zipcode: "80443"
  },
  'Crested Butte': {
    numTrails: 121,
    pass: "Epic",
    region: "Rockies",
    snowReportLink: "https://www.skicb.com/the-mountain/mountain-conditions/weather-report.aspx",
    trailReportLink: "https://www.skicb.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx",
    zipcode: "81225"
  },
  'Crotched Mtn': {
    numTrails: 25,
    pass: "Epic",
    region: "East",
    snowReportLink: "https://www.crotchedmtn.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx",
    trailReportLink: "https://www.crotchedmtn.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx",
    zipcode: "03043"
  },
  'Crystal Mountain': {
    numTrails: 85,
    pass: "Ikon",
    region: "West",
    snowReportLink: "https://www.crystalmountainresort.com/the-mountain/mountain-report-and-webcams",
    trailReportLink: "https://www.crystalmountainresort.com/the-mountain/mountain-report-and-webcams",
    zipcode: "98022"
  },
  'Deer Valley': {
    numTrails: 103,
    pass: "Ikon",
    region: "Rockies",
    snowReportLink: "https://www.deervalley.com/explore-the-mountain/mountain-report",
    trailReportLink: "https://www.deervalley.com/explore-the-mountain/mountain-report#lift-and-trail-status",
    zipcode: "84060"
  },
  'Eldora Mountain Resort': {
    numTrails: 63,
    pass: "Ikon",
    region: "Rockies",
    snowReportLink: "https://www.eldora.com/the-mountain/conditions-weather/current-conditions-forecast",
    trailReportLink: "https://www.eldora.com/the-mountain/lift-trail-report/snow-grooming-alpine",
    zipcode: "80466"
  },
  'Heavenly': {
    numTrails: 97,
    pass: "Epic",
    region: "West",
    snowReportLink: "https://www.skiheavenly.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx",
    trailReportLink: "https://www.skiheavenly.com/the-mountain/mountain-conditions/terrain-and-lift-status.aspx",
    zipcode: "89449"
  },
  'Hidden Valley': {
    numTrails: 17,
    pass: "Epic",
    region: "Midwest",
    snowReportLink: "https://www.hiddenvalleyski.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx",
    trailReportLink: "https://www.hiddenvalleyski.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx",
    zipcode: "63025"
  },
  'Hunter Mountain': {
    numTrails: 67,
    pass: "Epic",
    region: "East",
    snowReportLink: "https://www.huntermtn.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx",
    trailReportLink: "https://www.huntermtn.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx",
    zipcode: "12492"
  },
  'Jack Frost and Big Boulder': {
    numTrails: 20,
    pass: "Epic",
    region: "East",
    snowReportLink: "https://www.jfbb.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx",
    trailReportLink: "",
    zipcode: "18661"
  },
  'Jackson Hole Mountain Resort': {
    numTrails: 133,
    pass: "Ikon",
    region: "Rockies",
    snowReportLink: "https://www.jacksonhole.com/mountain-report",
    trailReportLink: "https://www.jacksonhole.com/mountain-report",
    zipcode: "83025"
  },
  'June Mountain': {
    numTrails: 45,
    pass: "Ikon",
    region: "West",
    snowReportLink: "https://www.junemountain.com/mountain-information/mountain-report",
    trailReportLink: "https://www.junemountain.com/mountain-information/mountain-report",
    zipcode: "93529"
  },
  'Keystone': {
    numTrails: 128,
    pass: "Epic",
    region: "Rockies",
    snowReportLink: "https://www.keystoneresort.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx",
    trailReportLink: "https://www.keystoneresort.com/the-mountain/mountain-conditions/terrain-and-lift-status.aspx",
    zipcode: "80435"
  },
  'Killington': {
    numTrails: 155,
    pass: "Ikon",
    region: "East",
    snowReportLink: "https://www.killington.com/the-mountain/conditions-weather/current-conditions-weather",
    trailReportLink: "https://www.killington.com/the-mountain/conditions-weather/lifts-trails-report",
    zipcode: "05751"
  },
  'Kirkwood': {
    numTrails: 86,
    pass: "Epic",
    region: "West",
    snowReportLink: "https://www.kirkwood.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx",
    trailReportLink: "https://www.kirkwood.com/the-mountain/mountain-conditions/terrain-and-lift-status.aspx",
    zipcode: "95646"
  },
  'Liberty Mountain Resort': {
    numTrails: 18,
    pass: "Epic",
    region: "East",
    snowReportLink: "https://www.libertymountainresort.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx",
    trailReportLink: "https://www.libertymountainresort.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx",
    zipcode: "17320"
  },
  'Loon Mountain': {
    numTrails: 61,
    pass: "Ikon",
    region: "East",
    snowReportLink: "https://www.loonmtn.com/conditions",
    trailReportLink: "https://www.loonmtn.com/conditions",
    zipcode: "03251"
  },
  'Mad River Mountain': {
    numTrails: 20,
    pass: "Epic",
    region: "Midwest",
    snowReportLink: "https://www.skimadriver.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx",
    trailReportLink: "https://www.skimadriver.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx",
    zipcode: "43360"
  },
  'Mammoth Mountain': {
    numTrails: 161,
    pass: "Ikon",
    region: "West",
    snowReportLink: "https://www.mammothmountain.com/on-the-mountain/mountain-report",
    trailReportLink: "https://www.mammothmountain.com/on-the-mountain/mountain-report#lifts-and-trails",
    zipcode: "93546"
  },
  'Mount Snow': {
    numTrails: 88,
    pass: "Epic",
    region: "East",
    snowReportLink: "https://www.mountsnow.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx",
    trailReportLink: "https://www.mountsnow.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx",
    zipcode: "05356"
  },
  'Mount Sunapee': {
    numTrails: 67,
    pass: "Epic",
    region: "East",
    snowReportLink: "https://www.mountsunapee.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx",
    trailReportLink: "https://www.mountsunapee.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx",
    zipcode: "03255"
  },
  'Mt. Brighton': {
    numTrails: 25,
    pass: "Epic",
    region: "Midwest",
    snowReportLink: "https://www.mtbrighton.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx",
    trailReportLink: "https://www.mtbrighton.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx",
    zipcode: "48116"
  },
  'Northstar': {
    numTrails: 100,
    pass: "Epic",
    region: "West",
    snowReportLink: "https://www.northstarcalifornia.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx",
    trailReportLink: "https://www.northstarcalifornia.com/the-mountain/mountain-conditions/terrain-and-lift-status.aspx",
    zipcode: "96161"
  },
  'Okemo': {
    numTrails: 121,
    pass: "Epic",
    region: "East",
    snowReportLink: "https://www.okemo.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx",
    trailReportLink: "https://www.okemo.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx",
    zipcode: "05149"
  },
  'Palisades Tahoe': {
    numTrails: 270,
    pass: "Ikon",
    region: "West",
    snowReportLink: "https://www.palisadestahoe.com/mountain-information/snow-and-weather",
    trailReportLink: "https://www.palisadestahoe.com/mountain-information/lift-and-grooming-status",
    zipcode: "96146"
  },
  'Paoli Peaks': {
    numTrails: 16,
    pass: "Epic",
    region: "Midwest",
    snowReportLink: "https://www.paolipeaks.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx",
    trailReportLink: "https://www.paolipeaks.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx",
    zipcode: "47454"
  },
  'Park City': {
    numTrails: 330,
    pass: "Epic",
    region: "Rockies",
    snowReportLink: "https://www.parkcitymountain.com/the-mountain/mountain-conditions/weather-report.aspx",
    trailReportLink: "https://www.parkcitymountain.com/the-mountain/mountain-conditions/terrain-and-lift-status.aspx",
    zipcode: "84060"
  },
  'Pico Mountain': {
    numTrails: 58,
    pass: "Ikon",
    region: "East",
    snowReportLink: "https://www.picomountain.com/the-mountain/conditions-weather/current-conditions-weather",
    trailReportLink: "https://www.picomountain.com/the-mountain/conditions-weather/current-conditions-weather",
    zipcode: "05701"
  },
  'Roundtop Mountain Resort': {
    numTrails: 21,
    pass: "Epic",
    region: "East",
    snowReportLink: "https://www.skiroundtop.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx",
    trailReportLink: "https://www.skiroundtop.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx",
    zipcode: "17339"
  },
  'Snow Creek': {
    numTrails: 14,
    pass: "Epic",
    region: "Midwest",
    snowReportLink: "https://www.skisnowcreek.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx",
    trailReportLink: "https://www.skisnowcreek.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx",
    zipcode: "64098"
  },
  'Snowbird': {
    numTrails: 140,
    pass: "Ikon",
    region: "Rockies",
    snowReportLink: "https://www.snowbird.com/mountain-report/",
    trailReportLink: "https://www.snowbird.com/mountain-report/",
    zipcode: "84092"
  },
  'Snowshoe Mountain': {
    numTrails: 61,
    pass: "Ikon",
    region: "East",
    snowReportLink: "https://www.snowshoemtn.com/mountain-info/mountain-report/",
    trailReportLink: "https://www.snowshoemtn.com/mountain-info/mountain-report#lift-and-trail-status",
    zipcode: "26209"
  },
  'Solitude Mountain Resort': {
    numTrails: 82,
    pass: "Ikon",
    region: "Rockies",
    snowReportLink: "https://www.solitudemountain.com/mountain-and-village/conditions-and-maps",
    trailReportLink: "https://www.solitudemountain.com/mountain-and-village/conditions-and-maps#lift-and-trail-status",
    zipcode: "84121"
  },
  'Steamboat': {
    numTrails: 169,
    pass: "Ikon",
    region: "Rockies",
    snowReportLink: "https://www.steamboat.com/the-mountain/mountain-report/",
    trailReportLink: "https://www.steamboat.com/the-mountain/mountain-report#lift-and-trail-status",
    zipcode: "80487"
  },
  'Stevens Pass': {
    numTrails: 52,
    pass: "Epic",
    region: "West",
    snowReportLink: "https://www.stevenspass.com/the-mountain/mountain-conditions/weather-report.aspx",
    trailReportLink: "https://www.stevenspass.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx",
    zipcode: "98288"
  },
  'Stowe': {
    numTrails: 116,
    pass: "Epic",
    region: "East",
    snowReportLink: "https://www.stowe.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx",
    trailReportLink: "https://www.stowe.com/the-mountain/mountain-conditions/terrain-and-lift-status.aspx",
    zipcode: "05672"
  },
  'Stratton': {
    numTrails: 99,
    pass: "Ikon",
    region: "East",
    snowReportLink: "https://www.stratton.com/the-mountain/mountain-report/",
    trailReportLink: "https://www.stratton.com/the-mountain/mountain-report#lift-and-trail-status",
    zipcode: "05155"
  },
  'Sugarbush Resort': {
    numTrails: 111,
    pass: "Ikon",
    region: "East",
    snowReportLink: "https://www.sugarbush.com/mountain/conditions",
    trailReportLink: "https://www.sugarbush.com/mountain/conditions",
    zipcode: "05674"
  },
  'Sugarloaf': {
    numTrails: 162,
    pass: "Ikon",
    region: "East",
    snowReportLink: "https://www.sugarloaf.com/conditions-and-cams",
    trailReportLink: "https://www.sugarloaf.com/conditions-and-cams",
    zipcode: "04947"
  },
  'Sunday River': {
    numTrails: 135,
    pass: "Ikon",
    region: "East",
    snowReportLink: "https://www.sundayriver.com/mountain-report",
    trailReportLink: "https://www.sundayriver.com/mountain-report",
    zipcode: "04261"
  },
  'Taos Ski Valley': {
    numTrails: 110,
    pass: "Ikon",
    region: "Rockies",
    snowReportLink: "",
    trailReportLink: "",
    zipcode: "87525"
  },
  'The Highlands': {
    numTrails: 55,
    pass: "Ikon",
    region: "Midwest",
    snowReportLink: "https://www.highlandsharborsprings.com/mountain-report",
    trailReportLink: "https://www.highlandsharborsprings.com/mountain-report",
    zipcode: "49740"
  },
  'The Summit at Snoqualmie': {
    numTrails: 115,
    pass: "Ikon",
    region: "West",
    snowReportLink: "https://summitatsnoqualmie.com/conditions",
    trailReportLink: "https://summitatsnoqualmie.com/liftsandtrails",
    zipcode: "98068"
  },
  'Vail': {
    numTrails: 195,
    pass: "Epic",
    region: "Rockies",
    snowReportLink: "https://www.vail.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx",
    trailReportLink: "https://www.vail.com/the-mountain/mountain-conditions/terrain-and-lift-status.aspx",
    zipcode: "81657"
  },
  'Whitetail Resort': {
    numTrails: 23,
    pass: "Epic",
    region: "East",
    snowReportLink: "https://www.skiwhitetail.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx",
    trailReportLink: "https://www.skiwhitetail.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx",
    zipcode: "17236"
  },
  'Wildcat Mountain': {
    numTrails: 48,
    pass: "Epic",
    region: "East",
    snowReportLink: "https://www.skiwildcat.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx",
    trailReportLink: "https://www.skiwildcat.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx",
    zipcode: "03581"
  },
  'Wilmot': {
    numTrails: 23,
    pass: "Epic",
    region: "Midwest",
    snowReportLink: "https://www.wilmotmountain.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx",
    trailReportLink: "https://www.wilmotmountain.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx",
    zipcode: "53192"
  },
  'Winter Park Resort': {
    numTrails: 166,
    pass: "Ikon",
    region: "Rockies",
    snowReportLink: "https://www.winterparkresort.com/the-mountain/mountain-report/",
    trailReportLink: "https://www.winterparkresort.com/the-mountain/mountain-report#lift-and-trail-status",
    zipcode: "80482"
  }
}
