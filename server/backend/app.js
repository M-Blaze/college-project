import authRoutes from './routes/authRoutes.js'
import digiRoutes from './routes/digiRoutes.js'
import express, { urlencoded as _urlencoded } from 'express'
import { connect } from 'mongoose'
import { config } from 'dotenv'
import cors from 'cors'

config()
const { PORT, DB_URI } = process.env
const app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ urlencoded: true }));
app.get('/', (req, res) => {
    res.send('Api is running!')
})

connect(DB_URI)
    .then((result) => {
        console.log("connected to mongo db")
        return app.listen(PORT, () => {
            console.log(`Express server is running at ${PORT}`);
          })})
    .catch((err) => console.log(err))

app.use('/', authRoutes)
app.use('/', digiRoutes)

app.use((req, res, next) => {
    const error = new Error(`Not Found -${req.originalUrl}`)
    res.status(404)
    next(error)
})

app.use((err, req, res, next) => {
    const statusCode = res.statusCode == 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({ message: err.message })
    next()
})


