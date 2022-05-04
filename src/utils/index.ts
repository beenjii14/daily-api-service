import { Visibility, Weather } from 'enums'
import { NewDiaryEntry } from 'types'

const isString = (text: any): boolean => {
  return typeof text === 'string' || text instanceof String
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isWeather = (weather: any): boolean => {
  return Object.values(Weather).includes(weather)
}

const isVisibility = (visibility: any): boolean => {
  return Object.values(Visibility).includes(visibility)
}

const parseComment = (comment: any): string => {
  if (!isString(comment)) {
    throw new Error('The comment must be a string')
  }
  return comment
}

const parseDate = (date: any): string => {
  if (!isString(date) || !isDate(date)) {
    throw new Error('The date must be a string')
  }
  return date
}

const parseWeather = (weather: any): Weather => {
  if (!isString(weather) || !isWeather(weather)) {
    throw new Error('The weather must be a string')
  }
  return weather
}

const parseVisibility = (visibility: any): Visibility => {
  if (!isString(visibility) || !isVisibility(visibility)) {
    throw new Error('The visibility must be a string')
  }
  return visibility
}

export const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }

  return newEntry
}
