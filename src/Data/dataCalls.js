import axios from 'axios'

// HomePage
export const fetchSwapiLuke = () => {
  return Promise.resolve(axios.get('http://localhost:5000/test')
    .then(res => {
      console.log(res)
      return res.data.body
    })
    .catch(err => console.log(err))
  )
}
