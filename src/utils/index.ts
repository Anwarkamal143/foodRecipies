import uuid from "react-uuid"
import numberFormater from "easy-number-formatter"
export function omit<T extends object, K extends keyof T>(
  obj: T,
  fields: K[]
): Omit<T, K> {
  const clone = { ...obj }

  if (Array.isArray(fields)) {
    fields.forEach(key => {
      delete clone[key]
    })
  }

  return clone
}
/* eslint-disable @typescript-eslint/no-explicit-any */
export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export const callAll =
  (...fns: any[]) =>
  (...args: any[]) =>
    fns.forEach(fn => fn && fn(...args))

export function setItemId() {
  return uuid()
}

export const setLocalStorage = (name: string, value: any, strigify = true) => {
  if (strigify) {
    return localStorage.setItem(name, JSON.stringify(value))
  } else {
    return localStorage.setItem(name, value)
  }
}

export const getLocalStorage = (name: string, parse = true) => {
  try {
    if (parse) {
      return JSON.parse(localStorage.getItem(name) || "{}")
    } else {
      return localStorage.getItem(name)
    }
  } catch (e) {
    return undefined
  }
}

export const removeLocalStorage = (name: string) => {
  localStorage.removeItem(name)
}

export const FormatNumber = (number: number | string) => {
  let newNumber = number
  const isString = typeof newNumber === "string"
  if (isString) {
    const updatedNumber = Number(newNumber)
    if (typeof updatedNumber !== "number") {
      throw Error("please provide a vaild number")
    }

    newNumber = updatedNumber
  }

  return numberFormater.formatNumber(newNumber)
}
