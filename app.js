import express from 'express'
import { MongoClient } from 'mongodb'
import { setClient } from './db/db.js'
import { render404 } from './helpers/render404.js';
import { MONGO_URI, PORT } from './config.js';

//import routes
import { homeRouter } from './routes/homeRouter.js';
import { aboutRouter } from './routes/aboutRouter.js';
import { categoryRouter } from './routes/categoryRouter.js';

const app = express()

// setup express app
app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.static('public'))

//db connection
const client = new MongoClient(MONGO_URI);
await client.connect();
setClient(client);

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