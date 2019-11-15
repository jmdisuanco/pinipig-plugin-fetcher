# Fetcher Plugin

- a helper to fetch REST api from other pinipig microservice instances

## Installation

`pinipig install fetcher`

## Sample Usage

```javascript
const fetcher = require('plugins/fetcher')

const post = fetcher('https://api.server.com/posts') //instantiate

post('list').then((res) => console.log(res))

//or async pattern

const logList = async () => {
  let postList = await post('list')
  console.log(postList)
}

logList()
```

to instanciate and api endpint

`fetcher(ENDPOINT)`
example
`const post = fetcher('https://api.server.com/posts')`

| Verb    | Description                                               | Usage (based on the instantiation example above) |
| ------- | --------------------------------------------------------- | ------------------------------------------------ |
| count   | to get the total number of records on an endpoint         | post('count')                                    |
| create  | to create a new entry                                     | post('create',{name:'john'})                     |
| destroy | to delete an entry                                        | post('destroy',RECORD_ID)                        |
| get     | to get an entry via id                                    | post('get',RECORD_ID)                            |
| list    | to list all the entries                                   | post('list')                                     |
| pick    | to pick an item or list items on limit and skip condition | post('pick',LIMIT,SKIP)                          |
| update  | to update an entry                                        | post('update',RECORD_ID,{name:'john'})           |
