import * as express from "express"
import { connect } from "mongoose"
import { json } from "body-parser"
import { join } from "path"
require('dotenv').config()

//Sécurités basiques
import * as helmet from "helmet"
import * as morgan from "morgan"
import * as cors from "cors"
import * as rateLimit from "express-rate-limit"
const limiter = rateLimit({
    windowMs: 15*60*1000, //1000 milliseconde * 60 = 1 minute; 1min*15 = 15min
    max: 100
})

//Nos routes
import messages from "./Routes/messages"

//Connexion base de donnée
connect(process.env.MONGO_URI || "mongodb+srv://DRF:0614012176Df99@cluster0-ybmru.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => console.log("Base de donnée connecté avec succès"))
    .catch(err => console.log(err))

//Notre app
const app = express()

app.use(helmet())
.use(limiter)
.use(morgan('common'))
.use(cors())
.use(json())

.use(express.static(join(__dirname, "client/build")))
.get('*', (req: express.Request, res: express.Response) => {
    res.sendFile(join(__dirname, './client/build/index.html'))
})
.use('/messages', messages)

export default app