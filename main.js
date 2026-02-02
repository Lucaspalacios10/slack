import { connectMongoDB } from "./config/mongoDB.config.js";
import express, { request, response } from "express";
import authRouter from "./routes/auth.router.js";
import workspaceRouter from "./routes/workspace.router.js";
import workspaceRepository from "./Repository/workspace.repository.js";
import cors from "cors";


connectMongoDB()

//Crear un servidor web (Express app)
const app = express()
app.use(cors())

//Habilita a mi servidor a recibir json por body
app.use(express.json())


app.use("/api/auth", authRouter)
app.use("/api/workspace",  workspaceRouter)
/*  async function crearEspacioDeTrabajo (){

    //Creo el espacio de trabajo de prueba
    const workspace = await workspaceRepository.create(
        '696f73124c45ed630e4780ff', //Remplazen por su id
        'test',
        'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'Descripcion del espacio de trabajo'
    )
    //Me agrego como miembro
    await workspaceRepository.addMember(workspace._id, '696f73124c45ed630e4780ff', 'Owner')
}

crearEspacioDeTrabajo()  */



app.listen(
    8080, 
    () => {
        console.log('Nuestra app se escucha en el puerto 8080')
    }
)

/* mail_transporter.sendMail({
    from: ENVIRONMENT.GMAIL_USERNAME,
    to: ENVIRONMENT.GMAIL_USERNAME,
    subject: 'Correo de prueba desde Node.js',
    html: '<h1>Este es un correo de prueba</h1>'
}) */