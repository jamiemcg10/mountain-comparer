type Wind = {
  speed: number,
  deg: number,
  gust: number
}

type Main = {
  feels_like: number
  grnd_level: number
  humidity: number
  pressure: number
  sea_level: number
  temp: number
  temp_kf: number
  temp_max: number
  temp_min: number
}

type Weather = {
  description: string
  icon: '11d' | '09d' | '10d' | '13d' | '50d' | '01d' | '03d'
  id: number
  main: string
}

export type Hour = {
  clouds: Record<'all', number>
  dt: number
  dt_txt: string
  main: Main
  pop: number
  sys: Record<'pod', string>
  visibility: number
  weather: Weather[]
  wind: Wind
}