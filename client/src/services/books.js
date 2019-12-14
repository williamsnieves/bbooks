import axios from 'axios'
import services from './services'
export const getBooks = (searchTerm) => {
    const booksUrl = `${services.books}/${searchTerm}`
    return axios.get(booksUrl)
            .then(booksResponse => booksResponse)
            .catch(error => console.log("handle errors to loggers like sentry"))
}   