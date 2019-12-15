import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import config from './config/'
import cors from 'cors'
import booksRouter from './resources/books/books.router'
import authRouter from './resources/auth/auth.router'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api/auth', authRouter)
app.use('/api/books', booksRouter)

export const start = () => {
  app.listen(5000, () => {
    console.log(`REST API on http://localhost:5000/api`)
  })
}
