import { json } from "body-parser";
import cors from "cors";
import { config } from 'dotenv';
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { connect } from "mongoose";
import morgan from "morgan";
import { join } from "path";
import messages from "./Routes/messages";
config();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, //1000 milliseconde * 60 = 1 minute; 1min*15 = 15min
  max: 100
});
const URI = (process.env.MONGO_URI as string);
console.log(URI);
//Connexion base de donnée
connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log("Base de donnée connecté avec succès"))
  .catch(err => console.log(err));

//Notre app
const app = express();

app.use(helmet())
  .use(limiter)
  .use(morgan('common'))
  .use(cors())
  .use(json())

  .use(express.static(join(__dirname, "../client/build")))
  .get('*', (req: express.Request, res: express.Response) => {
    res.sendFile(join(__dirname, '../client/build/index.html'));
  })
  .use('/messages', messages);

export default app;