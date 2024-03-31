export const getStorageValue = (key: string) => localStorage.getItem(key)

export const setStorageValue = (key: string, value: string) => {
  localStorage.setItem(key, value)
}