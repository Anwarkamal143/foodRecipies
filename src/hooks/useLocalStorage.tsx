import { getLocalStorage, removeLocalStorage, setLocalStorage } from "@utils"
import { useState } from "react"

function useLocalStorage(key: string) {
  const [state, setState] = useState<any>(getLocalStorage(key))

  const setStoredValue = (value: any) => {
    setLocalStorage(key, value)
    setState(value)
  }

  const removeStoreValue = (value: any) => {
    removeLocalStorage(key)
    setState(undefined)
  }
  return [state, setStoredValue, removeStoreValue]
}

export default useLocalStorage
