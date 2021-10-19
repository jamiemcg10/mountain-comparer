import { getWeather } from '../../utils/getWeather'
import { APIKEY } from '../../../apk'


export async function get({ params }) {
    
    const { slug } = params

    console.log(slug)

    // return {
    //     body: {
    //         weather: {test: 'text'}
    //     }
    // }

    console.log(await sendWeatherRequest(slug))

    return {
        body: {
            weather: await sendWeatherRequest(slug)
        }
    }
}



async function sendWeatherRequest(zipcode: string) {
    const req = await fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},us&units=imperial&appid=${APIKEY}`)
    
    if (!req.ok){
        return null
    }

    if (req.ok){
        const json = req.json()
        return json
    }
}
