// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
// export type Visibility = 'great' | 'good' | 'ok' | 'poor' | 'bad'

import { Visibility, Weather } from 'enums'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// inherit values from DiaryEntry (first form)
// export type NonSenSitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'> // utility type 1

export type NonSenSitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'> // utility type 2

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>

/* TODO: extendible interface (Reads better ✅)
export interface DiaryEntryWithId extends DiaryEntry {
  id: number
} */

// TODO: extendible with type (Poorly legible 😓)
// type DiaryEntryWithId = DiaryEntry & { id: number }
