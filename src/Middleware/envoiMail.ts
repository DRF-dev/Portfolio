import { Request, Response, NextFunction } from "express"
import * as nodemailer from "nodemailer"

const mail = (req: Request, res: Response, next: NextFunction) => {
    const transporteur = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: process.env.MAIL,
            pass: process.env.MDPMAIL
        }
    })
    
    const info = {
        from: 'dany.francisco@outlook.com',
        to: 'dany94francisco@gmail.com',
        subject: 'Message portfolio',
        html: `<p>${req.body.message}</p>`
    }
    
    transporteur.sendMail(info, (err, info) => {
        if (err) return console.log(err)
        console.log('Message envoyé avec succès')
    })

    transporteur.close()
    next()
}

export { mail }