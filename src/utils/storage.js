const KEY = 'sl-exp-token'

export const getToken = () => {
  return localStorage.getItem(KEY)
}

export const setToken = (newToken) => {
  localStorage.setItem(KEY, newToken)
}

export const delToken = () => {
  localStorage.removeItem(KEY)
}
