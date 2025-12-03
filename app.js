import express from 'express'
import dotenv from 'dotenv'
import { MongoClient } from 'mongodb'
import { setClient } from './db/db.js'
import { render404 } from './helpers/render404.js';

//import routes
import { homeRouter } from './routes/homeRouter.js';
import { aboutRouter } from './routes/aboutRouter.js';
import { categoryRouter } from './routes/categoryRouter.js';

//config
dotenv.config()
const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017'

const app = express()

// setup express app
app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.static('public'))

//db connection
const client = new MongoClient(MONGO_URI);
await client.connect();
setClient(client);
console.log(`connect to MongoDB - OK`);

app.use('/', homeRouter)
app.use('/about', aboutRouter)
app.use('/category', categoryRouter)

// 404 handler
app.use(async (req, res) => {
    return await render404(res, "Page not found");
});

app.listen(PORT, () => {
    console.log(`Server working on http://localhost:${PORT}`)
})

import './db/shutdown.js';