import 'dotenv/config'

export async function get({ params }) {
    
    const { slug } = params

    return {
        body: {
            weather: await sendWeatherRequest(slug)
        }
    }
}



async function sendWeatherRequest(zipcode: string) {
    const req = await fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},us&units=imperial&appid=${process.env.APIKEY}`)
    
    if (!req.ok){
        return null
    }

    if (req.ok){
        const json = req.json()
        return json
    }
}
