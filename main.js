import { connectMongoDB } from "./config/mongoDB.config.js";
import User from "./models/user.model.js";
import userRepository from "./Repository/user.repositery.js";
import express, { request, response } from "express";
import testRouter from "./routes/test.router.js";
import authRouter from "./routes/auth.router.js";


connectMongoDB()


const app = express()

app.use(express.json())

app.get(
    '/',
    (request, response) => {
        response.send('Aplicacion ejecutandose correctamente')
    }
)

app.get(
    '/test',
    (request, response) => {
        response.send('Estas testeando el servidor')
    }
)

app.listen(
    8080,
    () => {
        console.log('nuestra app se escucha en el puerto 8080')
    }
)

app.post(
    '/test',
    (request, response) => {
        console.log(request.body)
        response.send('gracias por el objeto')
    }
)


/* app.post(
    '/auth/register',
    async (request, response) => {
        try {
            const { username, email, password } = request.body
            if (!username || !email || !password) {
                return response.send('Error: Nomber, Email o usuario son incorrectos')
            }
            const user = await userRepository.buscarUnoPorEmail(email)
            if(user){
                return response.send(`Usuario con email${email} ya esta registrado`)
            }
            

            await userRepository.crear(username, email, password)
            return response.send('Usuario creado correctamente')
        }


        catch(error){
            console.error('Error al crear el usuario:', error)
            return response.send('Error interno del servidor')
        }
    }

    
) */

app.use('/api/test', testRouter);

app.use('/api/auth', authRouter)