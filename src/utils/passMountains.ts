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
	Stowe: {
		region: 'East',
		zipcode: '05672',
		snowReportLink:
			'https://www.stowe.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
      trailReportLink: 'https://www.stowe.com/the-mountain/mountain-conditions/terrain-and-lift-status.aspx',
		numTrails: 116,
		pass: 'Epic'
	},
	Okemo: {
		region: 'East',
		zipcode: '05149',
		snowReportLink: 'https://www.okemo.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
    trailReportLink: 'https://www.okemo.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx',
		numTrails: 121,
		pass: 'Epic'
	},
	'Mount Snow': {
		region: 'East',
		zipcode: '05356',
		snowReportLink: 'https://www.mountsnow.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
    trailReportLink: 'https://www.mountsnow.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx',
		numTrails: 88,
		pass: 'Epic'
	},
	"Hunter Mountain": {
		region: 'East',
		zipcode: '12492',
		snowReportLink: 'https://www.huntermtn.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
    trailReportLink: 'https://www.huntermtn.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx',
		numTrails: 67,
		pass: 'Epic'
	},
	Attitash: {
		region: 'East',
		zipcode: '03812',
		snowReportLink: 'https://www.attitash.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
    trailReportLink: 'https://www.attitash.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx',
		numTrails: 68,
		pass: 'Epic'
	},
	"Wildcat Mountain": {
		region: 'East',
		zipcode: '03581',
		snowReportLink: 'https://www.skiwildcat.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
    trailReportLink: 'https://www.skiwildcat.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx',
		numTrails: 48,
		pass: 'Epic'
	},
	'Mount Sunapee': {
		region: 'East',
		zipcode: '03255',
		snowReportLink: 'https://www.mountsunapee.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
    trailReportLink: 'https://www.mountsunapee.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx',
		numTrails: 67,
		pass: 'Epic'
	},
	'Crotched Mtn': {
		region: 'East',
		zipcode: '03043',
		snowReportLink: 'https://www.crotchedmtn.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
    trailReportLink: 'https://www.crotchedmtn.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx',
		numTrails: 25,
		pass: 'Epic'
	},
	'Liberty Mountain Resort': {
		region: 'East',
		zipcode: '17320',
		snowReportLink: 'https://www.libertymountainresort.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
    trailReportLink: 'https://www.libertymountainresort.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx',
		numTrails: 18,
		pass: 'Epic'
	},
	'Roundtop Mountain Resort': {
		region: 'East',
		zipcode: '17339',
		snowReportLink: 'https://www.skiroundtop.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
    trailReportLink: 'https://www.skiroundtop.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx',
		numTrails: 21,
		pass: 'Epic'
	},
	'Whitetail Resort': {
		region: 'East',
		zipcode: '17236',
		snowReportLink: 'https://www.skiwhitetail.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
    trailReportLink: 'https://www.skiwhitetail.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx',
		numTrails: 23,
		pass: 'Epic'
	},
	'Jack Frost and Big Boulder': {
		region: 'East',
		zipcode: '18661',
		snowReportLink: 'https://www.jfbb.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx',
    trailReportLink: '',
		numTrails: 20,
		pass: 'Epic'
	},
	Wilmot: {
		region: 'Midwest',
		zipcode: '53192',
		snowReportLink:
			'https://www.wilmotmountain.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
      trailReportLink: 'https://www.wilmotmountain.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx',
		numTrails: 23,
		pass: 'Epic'
	},
	'Afton Alps': {
		region: 'Midwest',
		zipcode: '55033',
		snowReportLink: 'https://www.aftonalps.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
    trailReportLink: 'https://www.aftonalps.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx',
		numTrails: 48,
		pass: 'Epic'
	},
	'Mt. Brighton': {
		region: 'Midwest',
		zipcode: '48116',
		snowReportLink: 'https://www.mtbrighton.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
    trailReportLink: 'https://www.mtbrighton.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx',
		numTrails: 25,
		pass: 'Epic'
	},
	'Alpine Valley Resort': {
		region: 'Midwest',
		zipcode: '48383',
		snowReportLink: '',
    trailReportLink: 'https://www.alpinevalleyresort.com/the-mountain/snow-report/',
		numTrails: 20,
		pass: 'Epic'
	},
	'Boston Mills/Brandywine': {
		region: 'Midwest',
		zipcode: '44264',
		snowReportLink: 'https://www.bmbw.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
    trailReportLink: 'https://www.bmbw.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx',
		numTrails: 7,
		pass: 'Epic'
	},
	'Mad River Mountain': {
		region: 'Midwest',
		zipcode: '43360',
		snowReportLink: 'https://www.skimadriver.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
    trailReportLink: 'https://www.skimadriver.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx',
		numTrails: 20,
		pass: 'Epic'
	},
	'Hidden Valley': {
		region: 'Midwest',
		zipcode: '63025',
		snowReportLink: 'https://www.hiddenvalleyski.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
    trailReportLink: 'https://www.hiddenvalleyski.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx',
		numTrails: 17,
		pass: 'Epic'
	},
	'Snow Creek': {
		region: 'Midwest',
		zipcode: '64098',
		snowReportLink: 'https://www.skisnowcreek.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
    trailReportLink: 'https://www.skisnowcreek.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx',
		numTrails: 14,
		pass: 'Epic'
	},
	'Paoli Peaks': {
		region: 'Midwest',
		zipcode: '47454',
		snowReportLink: 'https://www.paolipeaks.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
    trailReportLink: 'https://www.paolipeaks.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx',
		numTrails: 16,
		pass: 'Epic'
	},
	Vail: {
		region: 'Rockies',
		zipcode: '81657',
		snowReportLink:
			'https://www.vail.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
      trailReportLink: 'https://www.vail.com/the-mountain/mountain-conditions/terrain-and-lift-status.aspx',
		numTrails: 195,
		pass: 'Epic'
	},
	'Beaver Creek': {
		region: 'Rockies',
		zipcode: '81620',
		snowReportLink:
			'https://www.beavercreek.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
      trailReportLink: 'https://www.beavercreek.com/the-mountain/mountain-conditions/terrain-and-lift-status.aspx',
		numTrails: 150,
		pass: 'Epic'
	},
	Breckenridge: {
		region: 'Rockies',
		zipcode: '80424',
		snowReportLink:
			'https://www.breckenridge.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
      trailReportLink: 'https://www.breckenridge.com/the-mountain/mountain-conditions/terrain-and-lift-status.aspx',
		numTrails: 187,
		pass: 'Epic'
	},
	'Park City': {
		region: 'Rockies',
		zipcode: '84060',
		snowReportLink:
			'https://www.parkcitymountain.com/the-mountain/mountain-conditions/weather-report.aspx',
      trailReportLink: 'https://www.parkcitymountain.com/the-mountain/mountain-conditions/terrain-and-lift-status.aspx',
		numTrails: 330,
		pass: 'Epic'
	},
	Keystone: {
		region: 'Rockies',
		zipcode: '80435',
		snowReportLink: 'https://www.keystoneresort.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
    trailReportLink: 'https://www.keystoneresort.com/the-mountain/mountain-conditions/terrain-and-lift-status.aspx',
		numTrails: 128,
		pass: 'Epic'
	},
	'Crested Butte': {
		region: 'Rockies',
		zipcode: '81225',
		snowReportLink: 'https://www.skicb.com/the-mountain/mountain-conditions/weather-report.aspx',
    trailReportLink: 'https://www.skicb.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx',
		numTrails: 121,
		pass: 'Epic'
	},
	Heavenly: {
		region: 'West',
		zipcode: '89449',
		snowReportLink:
			'https://www.skiheavenly.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
      trailReportLink: 'https://www.skiheavenly.com/the-mountain/mountain-conditions/terrain-and-lift-status.aspx',
		numTrails: 97,
		pass: 'Epic'
	},
	Northstar: {
		region: 'West',
		zipcode: '96161',
		snowReportLink:
			'https://www.northstarcalifornia.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
      trailReportLink: 'https://www.northstarcalifornia.com/the-mountain/mountain-conditions/terrain-and-lift-status.aspx',
		numTrails: 100,
		pass: 'Epic'
	},
	Kirkwood: {
		region: 'West',
		zipcode: '95646',
		snowReportLink:
			'https://www.kirkwood.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
      trailReportLink: 'https://www.kirkwood.com/the-mountain/mountain-conditions/terrain-and-lift-status.aspx',
		numTrails: 86,
		pass: 'Epic'
	},
	'Stevens Pass': {
		region: 'West',
		zipcode: '98288',
		snowReportLink: 'https://www.stevenspass.com/the-mountain/mountain-conditions/weather-report.aspx',
    trailReportLink: 'https://www.stevenspass.com/the-mountain/mountain-conditions/lift-and-terrain-status.aspx',
		numTrails: 52,
		pass: 'Epic'
	},
	Stratton: {
		region: 'East',
		zipcode: '05155',
		snowReportLink: 'https://www.stratton.com/the-mountain/mountain-report/',
    trailReportLink: 'https://www.stratton.com/the-mountain/mountain-report#lift-and-trail-status',
		numTrails: 99,
		pass: 'Ikon'
	},
	Killington: {
		region: 'East',
		zipcode: '05751',
		snowReportLink:
			'https://www.killington.com/the-mountain/conditions-weather/current-conditions-weather',
      trailReportLink: 'https://www.killington.com/the-mountain/conditions-weather/lifts-trails-report',
		numTrails: 155,
		pass: 'Ikon'
	},
	'Pico Mountain': {
		region: 'East',
		zipcode: '05701',
		snowReportLink:
			'https://www.picomountain.com/the-mountain/conditions-weather/current-conditions-weather',
      trailReportLink: 'https://www.picomountain.com/the-mountain/conditions-weather/current-conditions-weather',
		numTrails: 58,
		pass: 'Ikon'
	},
	'Sugarbush Resort': {
		region: 'East',
		zipcode: '05674',
		snowReportLink: 'https://www.sugarbush.com/mountain/conditions',
    trailReportLink: 'https://www.sugarbush.com/mountain/conditions',
		numTrails: 111,
		pass: 'Ikon'
	},
	'Snowshoe Mountain': {
		region: 'East',
		zipcode: '26209',
		snowReportLink: 'https://www.snowshoemtn.com/mountain-info/mountain-report/',
    trailReportLink: 'https://www.snowshoemtn.com/mountain-info/mountain-report#lift-and-trail-status',
		numTrails: 61,
		pass: 'Ikon'
	},
	'Sunday River': {
		region: 'East',
		zipcode: '04261',
		snowReportLink: 'https://www.sundayriver.com/mountain-report',
    trailReportLink: 'https://www.sundayriver.com/mountain-report',
		numTrails: 135,
		pass: 'Ikon'
	},
	Sugarloaf: {
		region: 'East',
		zipcode: '04947',
		snowReportLink: 'https://www.sugarloaf.com/conditions-and-cams',
    trailReportLink: 'https://www.sugarloaf.com/conditions-and-cams',
		numTrails: 162,
		pass: 'Ikon'
	},
	'Loon Mountain': {
		region: 'East',
		zipcode: '03251',
		snowReportLink: 'https://www.loonmtn.com/conditions',
    trailReportLink: 'https://www.loonmtn.com/conditions',
		numTrails: 61,
		pass: 'Ikon'
	},
	'The Highlands': {
		region: 'Midwest',
		zipcode: '49740',
		snowReportLink: 'https://www.highlandsharborsprings.com/mountain-report',
    trailReportLink: 'https://www.highlandsharborsprings.com/mountain-report',
		numTrails: 55,
		pass: 'Ikon'
	},
	'Boyne Mountain': {
		region: 'Midwest',
		zipcode: '49713',
		snowReportLink: 'https://www.boynemountain.com/current-conditions',
    trailReportLink: 'https://www.boynemountain.com/current-conditions',
		numTrails: 60,
		pass: 'Ikon'
	},
	Steamboat: {
		region: 'Rockies',
		zipcode: '80487',
		snowReportLink: 'https://www.steamboat.com/the-mountain/mountain-report/',
    trailReportLink: 'https://www.steamboat.com/the-mountain/mountain-report#lift-and-trail-status',
		numTrails: 169,
		pass: 'Ikon'
	},
	'Aspen Snowmass': {
		region: 'Rockies',
		zipcode: '81615',
		snowReportLink: 'https://www.aspensnowmass.com/our-mountains/snow-report',
    trailReportLink: 'https://www.aspensnowmass.com/our-mountains/snow-report',
		numTrails: 98,
		pass: 'Ikon'
	},
	'Winter Park Resort': {
		region: 'Rockies',
		zipcode: '80482',
		snowReportLink: 'https://www.winterparkresort.com/the-mountain/mountain-report/',
    trailReportLink: 'https://www.winterparkresort.com/the-mountain/mountain-report#lift-and-trail-status',
		numTrails: 166,
		pass: 'Ikon'
	},
	'Copper Mountain': {
		region: 'Rockies',
		zipcode: '80443',
		snowReportLink: 'https://www.coppercolorado.com/the-mountain/conditions-weather/snow-report',
    trailReportLink: 'https://www.coppercolorado.com/the-mountain/trail-lift-info/winter-trail-report',
		numTrails: 149,
		pass: 'Ikon'
	},
	'Arapahoe Basin': {
		region: 'Rockies',
		zipcode: '80435',
		snowReportLink: 'https://www.arapahoebasin.com/summer-forecast-and-trail-status/',
    trailReportLink: 'https://www.arapahoebasin.com/summer-forecast-and-trail-status/',
		numTrails: 145,
		pass: 'Ikon'
	},
	'Eldora Mountain Resort': {
		region: 'Rockies',
		zipcode: '80466',
		snowReportLink:
			'https://www.eldora.com/the-mountain/conditions-weather/current-conditions-forecast',
      trailReportLink: 'https://www.eldora.com/the-mountain/lift-trail-report/snow-grooming-alpine',
		numTrails: 63,
		pass: 'Ikon'
	},
	'Big Sky Resort': {
		region: 'Rockies',
		zipcode: '59716',
		snowReportLink: 'https://bigskyresort.com/current-conditions',
    trailReportLink: 'https://bigskyresort.com/current-conditions',
		numTrails: 310,
		pass: 'Ikon'
	},
	'Jackson Hole Mountain Resort': {
		region: 'Rockies',
		zipcode: '83025',
		snowReportLink: 'https://www.jacksonhole.com/mountain-report',
    trailReportLink: 'https://www.jacksonhole.com/mountain-report',
		numTrails: 133,
		pass: 'Ikon'
	},
	'Taos Ski Valley': {
		region: 'Rockies',
		zipcode: '87525',
		snowReportLink: '',
    trailReportLink: '',
		numTrails: 110,
		pass: 'Ikon'
	},
	'Deer Valley': {
		region: 'Rockies',
		zipcode: '84060',
		snowReportLink: 'https://www.deervalley.com/explore-the-mountain/mountain-report',
    trailReportLink: 'https://www.deervalley.com/explore-the-mountain/mountain-report#lift-and-trail-status',
		numTrails: 103,
		pass: 'Ikon'
	},
	'Solitude Mountain Resort': {
		region: 'Rockies',
		zipcode: '84121',
		snowReportLink: 'https://www.solitudemountain.com/mountain-and-village/conditions-and-maps',
    trailReportLink: 'https://www.solitudemountain.com/mountain-and-village/conditions-and-maps#lift-and-trail-status',
		numTrails: 82,
		pass: 'Ikon'
	},
	Brighton: {
		region: 'Rockies',
		zipcode: '84121',
		snowReportLink: 'https://brightonresort.com/conditions',
    trailReportLink: 'https://brightonresort.com/conditions',
		numTrails: 66,
		pass: 'Ikon'
	},
	Alta: {
		region: 'Rockies',
		zipcode: '84092',
		snowReportLink: 'https://www.alta.com/weather',
    trailReportLink: 'https://www.alta.com/lift-terrain-status',
		numTrails: 119,
		pass: 'Ikon'
	},
	Snowbird: {
		region: 'Rockies',
		zipcode: '84092',
		snowReportLink: 'https://www.snowbird.com/mountain-report/',
    trailReportLink: 'https://www.snowbird.com/mountain-report/',
		numTrails: 140,
		pass: 'Ikon'
	},
	'Palisades Tahoe': {
		region: 'West',
		zipcode: '96146',
		snowReportLink: 'https://www.palisadestahoe.com/mountain-information/snow-and-weather',
    trailReportLink: 'https://www.palisadestahoe.com/mountain-information/lift-and-grooming-status',
		numTrails: 270,
		pass: 'Ikon'
	},
	'June Mountain': {
		region: 'West',
		zipcode: '93529',
		snowReportLink: 'https://www.junemountain.com/mountain-information/mountain-report',
    trailReportLink: 'https://www.junemountain.com/mountain-information/mountain-report',
		numTrails: 45,
		pass: 'Ikon'
	},
	'Mammoth Mountain': {
		region: 'West',
		zipcode: '93546',
		snowReportLink: 'https://www.mammothmountain.com/on-the-mountain/mountain-report',
    trailReportLink: 'https://www.mammothmountain.com/on-the-mountain/mountain-report#lifts-and-trails',
		numTrails: 161,
		pass: 'Ikon'
	},
	'Big Bear Mountain Resort': {
		region: 'West',
		zipcode: '92315',
		snowReportLink:
			'https://www.bigbearmountainresort.com/mountain-information',
      trailReportLink: 'https://www.bigbearmountainresort.com/mountain-information',
		numTrails: 41,
		pass: 'Ikon'
	},
	'Crystal Mountain': {
		region: 'West',
		zipcode: '98022',
		snowReportLink: 'https://www.crystalmountainresort.com/the-mountain/mountain-report-and-webcams',
    trailReportLink: 'https://www.crystalmountainresort.com/the-mountain/mountain-report-and-webcams',
		numTrails: 85,
		pass: 'Ikon'
	},
	'The Summit at Snoqualmie': {
		region: 'West',
		zipcode: '98068',
		snowReportLink: 'https://summitatsnoqualmie.com/conditions',
    trailReportLink: 'https://summitatsnoqualmie.com/liftsandtrails',
		numTrails: 115,
		pass: 'Ikon'
	}
}
