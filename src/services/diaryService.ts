import { DiaryEntry, NonSenSitiveInfoDiaryEntry, NewDiaryEntry } from 'types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[] // assertion to make sure it's an array

export const getEntries = (): DiaryEntry[] => diaries

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const id = Math.max(...diaries.map(d => d.id)) + 1 // get the highest id and add 1
  const newDiary = { id, ...newDiaryEntry } // add the id to the new diary
  diaries.push(newDiary)
  return newDiary
}

export const findById = (id: number): DiaryEntry | undefined => {
  return diaries.find(d => d.id === id)
}

export const getEntriesWithOutSensitiveInfo = (): NonSenSitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({ id, date, weather, visibility }))
}
