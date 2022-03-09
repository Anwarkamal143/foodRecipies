import uuid from "react-uuid"
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
