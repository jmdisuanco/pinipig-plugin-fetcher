const Fetch = require('./fetch')

let url = ''

const list = async (args) => {
  let options = typeof args != 'undefined' && args.length == 1 ? args[0] : null
  let result = await Fetch('GET', url, null, options)
  return result
}

const pick = async (args) => {
  let options = typeof args != 'undefined' && args.length == 3 ? args[2] : null
  let result = await Fetch(
    'GET',
    `${url}?limit=${args[0]}&skip=${args[1]}`,
    null,
    options,
  )
  return result
}

const get = async (args) => {
  let options = typeof args != 'undefined' && args.length == 2 ? args[1] : null
  let result = await Fetch('GET', `${url}/${args[0]}`, null, options || null)
  return result
}

const create = async (args) => {
  let options = typeof args != 'undefined' && args.length == 2 ? args[1] : null

  let result = await Fetch('POST', `${url}`, args[0], options)
  return result
}

const update = async (args) => {
  let options = typeof args != 'undefined' && args.length === 3 ? args[2] : null
  let result = await Fetch('PUT', `${url}/${args[0]}`, args[1], args[2])
  return result
}

const destroy = async (args) => {
  let options = typeof args != 'undefined' && args.length === 2 ? args[1] : null
  let result = await Fetch('DELETE', `${url}/${args[0]}`, null, options)
  return result
}

const count = async (args) => {
  let options = typeof args != 'undefined' && args.length != 0 ? args[0] : null
  let result = await Fetch('GET', `${url}/count`, null, options)
  return result
}

const action = { count, create, destroy, get, list, pick, update }

const fetcher = (endpoint) => (fn, ...args) => {
  url = endpoint
  return action[fn](args)
}

module.exports = fetcher
