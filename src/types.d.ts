export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor' | 'bad'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

/* TODO: extendible interface (Reads better ✅)
export interface DiaryEntryWithId extends DiaryEntry {
  id: number
} */

// TODO: extendible with type (Poorly legible 😓)
// type DiaryEntryWithId = DiaryEntry & { id: number }
