import axios from 'axios'
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes'
export const findBooks = searchTerm => {
  return axios
    .get(`${BASE_URL}?q=${searchTerm}&maxResults=40`)
    .then(books => books.data)
    .catch(error => console.log('Report errors to a logger'))
}
