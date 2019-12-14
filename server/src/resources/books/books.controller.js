import Books from '../books/books.model'
import { findBooks } from '../../services/Books'

const getBooks = async (req, res) => {
  const { term } = req.params
  const booksData = await findBooks(term)

  res.json({
    data: booksData
  })
}
export default {
  getBooks
}
