import { Request, Response, NextFunction } from "express"
import messagesModel from "../Models/messagesModel"

const saveMessage = async (req:Request, res: Response, next:NextFunction) => {
    const newMessage = new messagesModel({ ...req.body })
    try {
        await newMessage.save()
        res.status(200).json({ mess: "Message enrengistré avec succès" })
    } catch (error) {
        res.status(500).json({ mess: error })
    }
}

export { saveMessage }