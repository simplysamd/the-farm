import axios from 'axios'

// HomePage
export const fetchUserInfo = name => {
  return Promise.resolve(
    axios.get(`http://localhost:5000/characterInfo?name=${name}`)
      .then(res => {
        return JSON.parse(res.data.body)['Response']
      })
      .catch(err => {
        console.log('error', err)
        return 'error'
      })
  )
}
