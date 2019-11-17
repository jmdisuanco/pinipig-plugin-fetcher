/**
 *
 * @param {GET, POST, PUT, DELETE} method
 * @param {*} url
 * @param {*} body
 * @param {*} options
 */
require('es6-promise').polyfill()
require('isomorphic-fetch')

const Fetch = async (method, url, body, options = null) => {
  options != null
    ? null
    : (options = {
        method: method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'omit',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
  const response = await fetch(url, options)
  if (response.ok) {
    return await response.json()
  } else {
    return JSON.stringify(response)
  }
}

module.exports = Fetch
