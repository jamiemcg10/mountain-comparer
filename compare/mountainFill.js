export function mountainFill(selectEle, region, pass) {
	if (pass == 'epic') {
		if (region == 'East') {
			let opt_stowe = document.createElement('option')
			opt_stowe.innerText = 'Stowe'
			let opt_okemo = document.createElement('option')
			opt_okemo.innerText = 'Okemo'
			let opt_mtsnow = document.createElement('option')
			opt_mtsnow.innerText = 'Mount Snow'
			let opt_hunter = document.createElement('option')
			opt_hunter.innerText = 'Hunter'
			let opt_attitash = document.createElement('option')
			opt_attitash.innerText = 'Attitash'
			let opt_wildcat = document.createElement('option')
			opt_wildcat.innerText = 'Wildcat'
			let opt_sunapee = document.createElement('option')
			opt_sunapee.innerText = 'Mount Sunapee'
			let opt_crotched = document.createElement('option')
			opt_crotched.innerText = 'Crotched'
			let opt_liberty = document.createElement('option')
			opt_liberty.innerText = 'Liberty'
			let opt_roundtop = document.createElement('option')
			opt_roundtop.innerText = 'Roundtop'
			let opt_whitetail = document.createElement('option')
			opt_whitetail.innerText = 'Whitetail'
			let opt_jackFrost = document.createElement('option')
			opt_jackFrost.innerText = 'Jack Frost'
			let opt_bigBoulder = document.createElement('option')
			opt_bigBoulder.innerText = 'Big Boulder'

			selectEle.appendChild(opt_attitash)
			selectEle.appendChild(opt_bigBoulder)
			selectEle.appendChild(opt_crotched)
			selectEle.appendChild(opt_hunter)
			selectEle.appendChild(opt_jackFrost)
			selectEle.appendChild(opt_liberty)
			selectEle.appendChild(opt_mtsnow)
			selectEle.appendChild(opt_sunapee)
			selectEle.appendChild(opt_okemo)
			selectEle.appendChild(opt_roundtop)
			selectEle.appendChild(opt_stowe)
			selectEle.appendChild(opt_whitetail)
			selectEle.appendChild(opt_wildcat)
		}

		if (region == 'Midwest') {
			let opt_wilmot = document.createElement('option')
			opt_wilmot.innerText = 'Wilmot'
			let opt_aftonAlps = document.createElement('option')
			opt_aftonAlps.innerText = 'Afton Alps'
			let opt_mtBrighton = document.createElement('option')
			opt_mtBrighton.innerText = 'Mt. Brighton'
			let opt_alpineValley = document.createElement('option')
			opt_alpineValley.innerText = 'Alpine Valley'
			let opt_bostonMills = document.createElement('option')
			opt_bostonMills.innerText = 'Boston Mills'
			let opt_brandywine = document.createElement('option')
			opt_brandywine.innerText = 'Brandywine'
			let opt_madRiverMtn = document.createElement('option')
			opt_madRiverMtn.innerText = 'Mad River Mountain'
			let opt_hiddenValley = document.createElement('option')
			opt_hiddenValley.innerText = 'Hidden Valley'
			let opt_snowCreek = document.createElement('option')
			opt_snowCreek.innerText = 'Snow Creek'
			let opt_paoliPeaks = document.createElement('option')
			opt_paoliPeaks.innerText = 'Paoli Peaks'

			selectEle.appendChild(opt_aftonAlps)
			selectEle.appendChild(opt_alpineValley)
			selectEle.appendChild(opt_bostonMills)
			selectEle.appendChild(opt_brandywine)
			selectEle.appendChild(opt_hiddenValley)
			selectEle.appendChild(opt_madRiverMtn)
			selectEle.appendChild(opt_mtBrighton)
			selectEle.appendChild(opt_paoliPeaks)
			selectEle.appendChild(opt_snowCreek)
			selectEle.appendChild(opt_wilmot)
		}

		if (region == 'Rockies') {
			let opt_vail = document.createElement('option')
			opt_vail.innerText = 'Vail'
			let opt_beaverCreek = document.createElement('option')
			opt_beaverCreek.innerText = 'Beaver Creek'
			let opt_breckenridge = document.createElement('option')
			opt_breckenridge.innerText = 'Breckenridge'
			let opt_parkCity = document.createElement('option')
			opt_parkCity.innerText = 'Park City'
			let opt_keystone = document.createElement('option')
			opt_keystone.innerText = 'Keystone'
			let opt_crestedButte = document.createElement('option')
			opt_crestedButte.innerText = 'Crested Butte'

			selectEle.appendChild(opt_beaverCreek)
			selectEle.appendChild(opt_breckenridge)
			selectEle.appendChild(opt_crestedButte)
			selectEle.appendChild(opt_keystone)
			selectEle.appendChild(opt_parkCity)
			selectEle.appendChild(opt_vail)
		}

		if (region == 'West') {
			let opt_heavenly = document.createElement('option')
			opt_heavenly.innerText = 'Heavenly'
			let opt_northstar = document.createElement('option')
			opt_northstar.innerText = 'Northstar'
			let opt_kirkwood = document.createElement('option')
			opt_kirkwood.innerText = 'Kirkwood'
			let opt_stevensPass = document.createElement('option')
			opt_stevensPass.innerText = 'Stevens Pass'

			selectEle.appendChild(opt_heavenly)
			selectEle.appendChild(opt_kirkwood)
			selectEle.appendChild(opt_northstar)
			selectEle.appendChild(opt_stevensPass)
		}
	}

	if (pass == 'ikon') {
		if (region == 'East') {
			let opt_stratton = document.createElement('option')
			opt_stratton.innerText = 'Stratton'
			let opt_killington = document.createElement('option')
			opt_killington.innerText = 'Killington'
			let opt_pico = document.createElement('option')
			opt_pico.innerText = 'Pico'
			let opt_sugarbush = document.createElement('option')
			opt_sugarbush.innerText = 'Sugarbush Resort'
			let opt_snowshoe = document.createElement('option')
			opt_snowshoe.innerText = 'Snowshoe Mountain'
			let opt_sundayRiver = document.createElement('option')
			opt_sundayRiver.innerText = 'Sunday River'
			let opt_sugarloaf = document.createElement('option')
			opt_sugarloaf.innerText = 'Sugarloaf'
			let opt_loon = document.createElement('option')
			opt_loon.innerText = 'Loon Mountain'

			selectEle.appendChild(opt_killington)
			selectEle.appendChild(opt_loon)
			selectEle.appendChild(opt_pico)
			selectEle.appendChild(opt_snowshoe)
			selectEle.appendChild(opt_stratton)
			selectEle.appendChild(opt_sugarbush)
			selectEle.appendChild(opt_sugarloaf)
			selectEle.appendChild(opt_sundayRiver)
		}
		if (region == 'Midwest') {
			let opt_boyneHighlands = document.createElement('option')
			opt_boyneHighlands.innerText = 'Boyne Highlands'
			let opt_boyneMountain = document.createElement('option')
			opt_boyneMountain.innerText = 'Boyne Mountain'

			selectEle.appendChild(opt_boyneHighlands)
			selectEle.appendChild(opt_boyneMountain)
		}
		if (region == 'Rockies') {
			let opt_steamboat = document.createElement('option')
			opt_steamboat.innerText = 'Steamboat'
			let opt_aspen = document.createElement('option')
			opt_aspen.innerText = 'Aspen Snowmass'
			let opt_winterPark = document.createElement('option')
			opt_winterPark.innerText = 'Winter Park Resort'
			let opt_copper = document.createElement('option')
			opt_copper.innerText = 'Copper Mountain'
			let opt_arapahoe = document.createElement('option')
			opt_arapahoe.innerText = 'Arapahoe Basin Ski Area'
			let opt_eldora = document.createElement('option')
			opt_eldora.innerText = 'Eldora Mountain Resort'
			let opt_bigSky = document.createElement('option')
			opt_bigSky.innerText = 'Big Sky Resort'
			let opt_jacksonHole = document.createElement('option')
			opt_jacksonHole.innerText = 'Jackson Hole Mountain Resort'
			let opt_taos = document.createElement('option')
			opt_taos.innerText = 'Taos Ski Valley'
			let opt_deerValley = document.createElement('option')
			opt_deerValley.innerText = 'Deer Valley Resort'
			let opt_solitude = document.createElement('option')
			opt_solitude.innerText = 'Solitude Mountain Resort'
			let opt_brighton = document.createElement('option')
			opt_brighton.innerText = 'Brighton'
			let opt_alta = document.createElement('option')
			opt_alta.innerText = 'Alta'
			let opt_snowbird = document.createElement('option')
			opt_snowbird.innerText = 'Snowbird'

			selectEle.appendChild(opt_alta)
			selectEle.appendChild(opt_arapahoe)
			selectEle.appendChild(opt_aspen)
			selectEle.appendChild(opt_bigSky)
			selectEle.appendChild(opt_brighton)
			selectEle.appendChild(opt_copper)
			selectEle.appendChild(opt_deerValley)
			selectEle.appendChild(opt_eldora)
			selectEle.appendChild(opt_jacksonHole)
			selectEle.appendChild(opt_snowbird)
			selectEle.appendChild(opt_solitude)
			selectEle.appendChild(opt_steamboat)
			selectEle.appendChild(opt_taos)
			selectEle.appendChild(opt_winterPark)
		}
		if (region == 'West') {
			let opt_squawValley = document.createElement('option')
			opt_squawValley.innerText = 'Squaw Valley'
			let opt_june = document.createElement('option')
			opt_june.innerText = 'June Mountain'
			let opt_mammoth = document.createElement('option')
			opt_mammoth.innerText = 'Mammoth Mountain'
			let opt_bigBear = document.createElement('option')
			opt_bigBear.innerText = 'Big Bear Mountain Resort'
			let opt_crystal = document.createElement('option')
			opt_crystal.innerText = 'Crystal Mountain'
			let opt_summitAtSnoqualmie = document.createElement('option')
			opt_summitAtSnoqualmie.innerText = 'The Summit at Snoqualmie'

			selectEle.appendChild(opt_bigBear)
			selectEle.appendChild(opt_crystal)
			selectEle.appendChild(opt_june)
			selectEle.appendChild(opt_mammoth)
			selectEle.appendChild(opt_squawValley)
			selectEle.appendChild(opt_summitAtSnoqualmie)
		}
	}
}
