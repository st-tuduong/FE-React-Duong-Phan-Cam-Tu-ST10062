export const getData = (key: string) => {
  const value = localStorage.getItem(key)
  if  (value) {
    return JSON.parse(value) ;
  }
  return null;
}

export const storeData = (key: string, value: any) => {
  return localStorage.setItem(key, JSON.stringify(value));
}