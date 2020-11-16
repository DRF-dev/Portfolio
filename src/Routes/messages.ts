import { Router } from "express"
import { saveMessage } from "../Controllers/messageController"
import { mail } from "../Middleware/envoiMail"

const router = Router()

router.post('/', mail, saveMessage)

export default router