import { DiaryEntry } from 'types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[] // assertion to make sure it's an array

export const getEntries = (): DiaryEntry[] => diaries

export const addEntry = (): undefined => undefined
