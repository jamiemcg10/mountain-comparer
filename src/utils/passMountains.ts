export const passMountains: Record<
	string,
	{
		region: 'East' | 'Midwest' | 'Rockies' | 'West'
		zipcode: string
		reportLink: string
		numTrails: number
		pass: 'Epic' | 'Ikon'
	}
> = {
	Stowe: {
		region: 'East',
		zipcode: '05672',
		reportLink:
			'https://www.stowe.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
		numTrails: 116,
		pass: 'Epic'
	},
	Okemo: {
		region: 'East',
		zipcode: '05149',
		reportLink: 'https://www.okemo.com/the-mountain/mountain-conditions/conditions-report.aspx',
		numTrails: 121,
		pass: 'Epic'
	},
	'Mount Snow': {
		region: 'East',
		zipcode: '05356',
		reportLink: 'https://www.mountsnow.com/ski-ride/snow-report/',
		numTrails: 88,
		pass: 'Epic'
	},
	Hunter: {
		region: 'East',
		zipcode: '12492',
		reportLink: 'https://www.huntermtn.com/mountain-info/snow-report/',
		numTrails: 67,
		pass: 'Epic'
	},
	Attitash: {
		region: 'East',
		zipcode: '03812',
		reportLink: 'https://www.attitash.com/the-mountain/snow-report/',
		numTrails: 68,
		pass: 'Epic'
	},
	Wildcat: {
		region: 'East',
		zipcode: '03581',
		reportLink: 'https://www.skiwildcat.com/snow-report/',
		numTrails: 48,
		pass: 'Epic'
	},
	'Mount Sunapee': {
		region: 'East',
		zipcode: '03255',
		reportLink: 'https://www.mountsunapee.com/the-mountain/mountain-conditions/snow-report.aspx',
		numTrails: 67,
		pass: 'Epic'
	},
	Crotched: {
		region: 'East',
		zipcode: '03043',
		reportLink: 'https://www.crotchedmtn.com/snow-report/',
		numTrails: 25,
		pass: 'Epic'
	},
	Liberty: {
		region: 'East',
		zipcode: '17320',
		reportLink:
			'https://www.libertymountainresort.com/winter-sports-liberty/mountain/snow-grooming-report',
		numTrails: 18,
		pass: 'Epic'
	},
	Roundtop: {
		region: 'East',
		zipcode: '17339',
		reportLink: 'https://www.skiroundtop.com/weather-report',
		numTrails: 20,
		pass: 'Epic'
	},
	Whitetail: {
		region: 'East',
		zipcode: '17236',
		reportLink: 'https://skiwhitetail.com/our-mountain',
		numTrails: 23,
		pass: 'Epic'
	},
	'Jack Frost': {
		region: 'East',
		zipcode: '18661',
		reportLink: 'https://www.jfbb.com/snow-report/',
		numTrails: 20,
		pass: 'Epic'
	},
	'Big Boulder': {
		region: 'East',
		zipcode: '18624',
		reportLink: 'https://www.jfbb.com/snow-report/',
		numTrails: 16,
		pass: 'Epic'
	},
	Wilmot: {
		region: 'Midwest',
		zipcode: '53192',
		reportLink:
			'https://www.wilmotmountain.com/about-wilmot/current-conditions/weather-report.aspx',
		numTrails: 23,
		pass: 'Epic'
	},
	'Afton Alps': {
		region: 'Midwest',
		zipcode: '55033',
		reportLink: 'https://www.aftonalps.com/explore-the-resort/current-conditions/snow-report',
		numTrails: 48,
		pass: 'Epic'
	},
	'Mt. Brighton': {
		region: 'Midwest',
		zipcode: '48116',
		reportLink: 'https://www.mtbrighton.com/the-mountain/about-the-mountain/snow-report',
		numTrails: 25,
		pass: 'Epic'
	},
	'Alpine Valley': {
		region: 'Midwest',
		zipcode: '48383',
		reportLink: 'https://www.alpinevalleyresort.com/the-mountain/snow-report/',
		numTrails: 20,
		pass: 'Epic'
	},
	'Boston Mills': {
		region: 'Midwest',
		zipcode: '44264',
		reportLink: 'https://www.bmbw.com/snow-report/',
		numTrails: 7,
		pass: 'Epic'
	},
	Brandywine: {
		region: 'Midwest',
		zipcode: '44264',
		reportLink: 'https://www.bmbw.com/snow-report/',
		numTrails: 11,
		pass: 'Epic'
	},
	'Mad River Mountain': {
		region: 'Midwest',
		zipcode: '43360',
		reportLink: 'https://www.skimadriver.com/snow-report/',
		numTrails: 20,
		pass: 'Epic'
	},
	'Hidden Valley': {
		region: 'Midwest',
		zipcode: '63025',
		reportLink: 'https://www.hiddenvalleyski.com/snow-report/',
		numTrails: 17,
		pass: 'Epic'
	},
	'Snow Creek': {
		region: 'Midwest',
		zipcode: '64098',
		reportLink: 'https://www.skisnowcreek.com/snow-report/',
		numTrails: 14,
		pass: 'Epic'
	},
	'Paoli Peaks': {
		region: 'Midwest',
		zipcode: '47454',
		reportLink: 'https://www.paolipeaks.com/snow-report/',
		numTrails: 16,
		pass: 'Epic'
	},
	Vail: {
		region: 'Rockies',
		zipcode: '81657',
		reportLink:
			'https://www.vail.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
		numTrails: 195,
		pass: 'Epic'
	},
	'Beaver Creek': {
		region: 'Rockies',
		zipcode: '81620',
		reportLink:
			'https://www.beavercreek.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
		numTrails: 150,
		pass: 'Epic'
	},
	Breckenridge: {
		region: 'Rockies',
		zipcode: '80424',
		reportLink:
			'https://www.breckenridge.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
		numTrails: 187,
		pass: 'Epic'
	},
	'Park City': {
		region: 'Rockies',
		zipcode: '84060',
		reportLink:
			'https://www.parkcitymountain.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
		numTrails: 330,
		pass: 'Epic'
	},
	Keystone: {
		region: 'Rockies',
		zipcode: '80435',
		reportLink: 'keystoneresort.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
		numTrails: 128,
		pass: 'Epic'
	},
	'Crested Butte': {
		region: 'Rockies',
		zipcode: '81225',
		reportLink: 'https://www.skicb.com/the-mountain/mountain-conditions/weather-report.aspx',
		numTrails: 121,
		pass: 'Epic'
	},
	Heavenly: {
		region: 'West',
		zipcode: '89449',
		reportLink:
			'https://www.skiheavenly.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
		numTrails: 97,
		pass: 'Epic'
	},
	Northstar: {
		region: 'West',
		zipcode: '96161',
		reportLink:
			'https://www.northstarcalifornia.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
		numTrails: 100,
		pass: 'Epic'
	},
	Kirkwood: {
		region: 'West',
		zipcode: '95646',
		reportLink:
			'https://www.kirkwood.com/the-mountain/mountain-conditions/snow-and-weather-report.aspx',
		numTrails: 86,
		pass: 'Epic'
	},
	'Stevens Pass': {
		region: 'West',
		zipcode: '98288',
		reportLink: 'https://www.stevenspass.com/the-mountain/mountain-conditions/weather-report.aspx',
		numTrails: 52,
		pass: 'Epic'
	},
	Stratton: {
		region: 'East',
		zipcode: '05155',
		reportLink: 'https://www.stratton.com/the-mountain/mountain-report#/',
		numTrails: 99,
		pass: 'Ikon'
	},
	Killington: {
		region: 'East',
		zipcode: '05751',
		reportLink:
			'https://www.killington.com/the-mountain/conditions-weather/current-conditions-weather',
		numTrails: 155,
		pass: 'Ikon'
	},
	Pico: {
		region: 'East',
		zipcode: '05701',
		reportLink:
			'https://www.picomountain.com/the-mountain/conditions-weather/current-conditions-weather',
		numTrails: 58,
		pass: 'Ikon'
	},
	'Sugarbush Resort': {
		region: 'East',
		zipcode: '05674',
		reportLink: 'https://www.sugarbush.com/mountain/snow-report/',
		numTrails: 111,
		pass: 'Ikon'
	},
	'Snowshoe Mountain': {
		region: 'East',
		zipcode: '26209',
		reportLink: 'https://www.snowshoemtn.com/mountain-info/mountain-report#/',
		numTrails: 61,
		pass: 'Ikon'
	},
	'Sunday River': {
		region: 'East',
		zipcode: '04261',
		reportLink: 'https://www.sundayriver.com/mountain-report',
		numTrails: 135,
		pass: 'Ikon'
	},
	Sugarloaf: {
		region: 'East',
		zipcode: '04947',
		reportLink: 'https://www.sugarloaf.com/conditions-and-cams',
		numTrails: 162,
		pass: 'Ikon'
	},
	'Loon Mountain': {
		region: 'East',
		zipcode: '03251',
		reportLink: 'https://www.loonmtn.com/conditions',
		numTrails: 61,
		pass: 'Ikon'
	},
	'Boyne Highlands': {
		region: 'Midwest',
		zipcode: '49740',
		reportLink: 'https://www.boynehighlands.com/conditions-winter',
		numTrails: 55,
		pass: 'Ikon'
	},
	'Boyne Mountain': {
		region: 'Midwest',
		zipcode: '49713',
		reportLink: 'https://www.boynemountain.com/current-conditions',
		numTrails: 60,
		pass: 'Ikon'
	},
	Steamboat: {
		region: 'Rockies',
		zipcode: '80487',
		reportLink: 'https://www.steamboat.com/the-mountain/mountain-report#/',
		numTrails: 169,
		pass: 'Ikon'
	},
	'Aspen Snowmass': {
		region: 'Rockies',
		zipcode: '81615',
		reportLink: 'https://www.aspensnowmass.com/our-mountains/snow-report',
		numTrails: 98,
		pass: 'Ikon'
	},
	'Winter Park Resort': {
		region: 'Rockies',
		zipcode: '80482',
		reportLink: 'https://www.winterparkresort.com/the-mountain/mountain-report#/',
		numTrails: 166,
		pass: 'Ikon'
	},
	'Copper Mountain': {
		region: 'Rockies',
		zipcode: '80443',
		reportLink: 'https://www.coppercolorado.com/the-mountain/conditions-weather/snow-report',
		numTrails: 149,
		pass: 'Ikon'
	},
	'Arapahoe Basin Ski Area': {
		region: 'Rockies',
		zipcode: '80435',
		reportLink: 'https://www.arapahoebasin.com/snow-conditions/',
		numTrails: 145,
		pass: 'Ikon'
	},
	'Eldora Mountain Resort': {
		region: 'Rockies',
		zipcode: '80466',
		reportLink:
			'https://www.eldora.com/the-mountain/conditions-weather/current-conditions-forecast',
		numTrails: 63,
		pass: 'Ikon'
	},
	'Big Sky Resort': {
		region: 'Rockies',
		zipcode: '59716',
		reportLink: 'https://bigskyresort.com/current-conditions',
		numTrails: 310,
		pass: 'Ikon'
	},
	'Jackson Hole Mountain Resort': {
		region: 'Rockies',
		zipcode: '83025',
		reportLink: 'https://www.jacksonhole.com/mountain-status.html',
		numTrails: 133,
		pass: 'Ikon'
	},
	'Taos Ski Valley': {
		region: 'Rockies',
		zipcode: '87525',
		reportLink: 'https://www.skitaos.com/ski-ride/cams-conditions',
		numTrails: 110,
		pass: 'Ikon'
	},
	'Deer Valley Resort': {
		region: 'Rockies',
		zipcode: '84060',
		reportLink: 'https://www.deervalley.com/explore-the-mountain/mountain-report#/',
		numTrails: 103,
		pass: 'Ikon'
	},
	'Solitude Mountain Resort': {
		region: 'Rockies',
		zipcode: '84121',
		reportLink: 'https://www.solitudemountain.com/mountain-and-village/conditions-and-maps#/',
		numTrails: 82,
		pass: 'Ikon'
	},
	Brighton: {
		region: 'Rockies',
		zipcode: '84121',
		reportLink: 'https://brightonresort.com/conditions',
		numTrails: 66,
		pass: 'Ikon'
	},
	Alta: {
		region: 'Rockies',
		zipcode: '84092',
		reportLink: 'https://www.alta.com/weather',
		numTrails: 119,
		pass: 'Ikon'
	},
	Snowbird: {
		region: 'Rockies',
		zipcode: '84092',
		reportLink: 'https://www.snowbird.com/mountain-report/',
		numTrails: 140,
		pass: 'Ikon'
	},
	'Squaw Valley': {
		region: 'West',
		zipcode: '96146',
		reportLink: 'https://squawalpine.com/mountain-information/snow-weather-reports-lake-tahoe',
		numTrails: 270,
		pass: 'Ikon'
	},
	'June Mountain': {
		region: 'West',
		zipcode: '93529',
		reportLink: 'https://www.junemountain.com/winter/mountain-information/mountain-information',
		numTrails: 45,
		pass: 'Ikon'
	},
	'Mammoth Mountain': {
		region: 'West',
		zipcode: '93546',
		reportLink: 'https://www.mammothmountain.com/winter/mountain-information',
		numTrails: 161,
		pass: 'Ikon'
	},
	'Big Bear Mountain Resort': {
		region: 'West',
		zipcode: '92315',
		reportLink:
			'https://www.bigbearmountainresort.com/winter/mountain-information/mountain-info/mountain-report',
		numTrails: 41,
		pass: 'Ikon'
	},
	'Crystal Mountain': {
		region: 'West',
		zipcode: '98022',
		reportLink: 'https://www.crystalmountainresort.com/the-mountain/mountain-report-and-webcams#/',
		numTrails: 85,
		pass: 'Ikon'
	},
	'The Summit at Snoqualmie': {
		region: 'West',
		zipcode: '98068',
		reportLink: 'https://summitatsnoqualmie.com/conditions',
		numTrails: 115,
		pass: 'Ikon'
	}
}
