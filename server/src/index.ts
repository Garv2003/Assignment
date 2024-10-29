import express from 'express'
import cors from 'cors'
import compression from 'compression'
import dotenv from 'dotenv'
import morgan from 'morgan'
import router from './routes'

dotenv.config()

const app = express()

app.use(cors({
    origin: process.env.CLIENT_URL
}))
app.use(compression())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 5000;

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
