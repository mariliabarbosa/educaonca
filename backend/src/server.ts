import express from 'express';
import cors from 'cors'


const app = express();
const routes = require('./routes')

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3000, () => console.log("Server running on http://localhost:3000"))