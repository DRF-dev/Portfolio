import { config } from 'dotenv';
import http from "http";
import app from "./app";
config();

const PORT = process.env.PORT;
const server = http.createServer(app);
server.listen(PORT, () => console.log(`Serveur sur le port ${PORT}`));