import { connectMongoDB } from "./config/mongoDB.config.js";
import User from "./models/user.model.js";
import UserRepository from "./Repository/user.repository.js";
import express, { request, response } from "express";
import testRouter from "./routes/test.router.js";
import authRouter from "./routes/auth.router.js";
import mail_transporter from "./config/mail.config.js";
import ENVIRONMENT from "./config/Environment.config.js";


connectMongoDB()

//Crear un servidor web (Express app)
const app = express()


//Habilita a mi servidor a recibir json por body
app.use(express.json())


app.use('/api/test', testRouter)
app.use("/api/auth", authRouter)



app.listen(
    8080, 
    () => {
        console.log('Nuestra app se escucha en el puerto 8080')
    }
)

mail_transporter.sendMail({
    from: ENVIRONMENT.GMAIL_USERNAME,
    to: ENVIRONMENT.GMAIL_USERNAME,
    subject: 'Correo de prueba desde Node.js',
    html: '<h1>Este es un correo de prueba</h1>'
})