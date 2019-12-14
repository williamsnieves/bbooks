import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import config from './config/index'
import cors from 'cors'
import booksRouter from './resources/books/books.router'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/test', (req, res) => {
  res.json({
    message: 'init endpoints from node'
  })
})

app.use('/api/books', booksRouter)

export const start = () => {
  app.listen(3000, () => {
    console.log(`REST API on http://localhost:3000/api`)
  })
}
