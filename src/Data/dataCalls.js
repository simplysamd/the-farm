import axios from 'axios'

// HomePage
export const fetchSwapiLuke = () => {
  axios.get('http://localhost:5000/test')
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
