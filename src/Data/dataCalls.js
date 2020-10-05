import axios from 'axios'

// HomePage
export const searchForPlayer = name => {
  return Promise.resolve(
    axios.get(`http://localhost:5000/characterSearch?name=${name}`)
      .then(res => JSON.parse(res.data.body)['Response'])
      .catch(err => {
        console.log('error came back from express for', 'fetchUserInfo', err)
        return 'error'
      })
  )
}

export const fetchCharacterDataById = id => {
  return Promise.resolve(
    axios.get(`http://localhost:5000/charactersForId?id=${id}`)
      .then(res => {
        console.log(res)
        return JSON.parse(res.data.body)
      })
      .catch(err => {
        console.log('error came back from express for', 'fetchCharacterDataById', err)
        return 'error'
      })
  )
}

export const fetchPlayerById = userId => {
  return Promise.resolve(
    axios.get(`http://localhost:5000/characterById?id=${userId}`)
      .then(res => {
        console.log(res, res.data, JSON.parse(res.data.body)['Response'])
        return []
      })
      .catch(err => {
        console.log('error came back from express for', 'fetchUserById', err)
        return 'error'
      })
  )
}
