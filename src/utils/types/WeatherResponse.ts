import type { Hour } from './Hour'

type City = {
  coord: {
    lat: number,
    long: number
  },
  country: string
  id: number
  name: string
  population: number
  sunrise: number
  sunset: number
  timezone: number
}

export type WeatherResponse = {
  city: City,
  cnt: number,
  cod: string,
  list: Hour[],
  message: number
}