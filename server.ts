import * as http from "http"
import app from "./app"

const PORT = process.env.PORT || 4000
const server = http.createServer(app)
server.listen(PORT, () => console.log(`Serveur sur le port ${PORT}`))