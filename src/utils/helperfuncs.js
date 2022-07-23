/* eslint-disable no-unused-vars */
const isValidUrl = (str) => {
  let url
  try {
    url = Boolean(new URL(str))
  } catch (error) {
    // No OP
  }
  return url
}

const makeRequest = async ({ url, body = {}, method = 'GET', headers = {} }) => {
  const start = new Date().getMilliseconds()
  const res = await fetch(url, {
    ...(method !== 'GET' ? body : ''),
    headers,
    method,
  })

  const end = new Date().getMilliseconds()
  res.time = Math.floor(end - start)
  return res
}

const debounce = (callback, delay = 500) => {
  let timer
  // eslint-disable-next-line func-names
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      callback.apply(this, [...args])
    })
  }
}
export { isValidUrl, makeRequest, debounce }
