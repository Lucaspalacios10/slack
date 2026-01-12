import express from 'express';
import userRepository from '../Repository/user.repository.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import ENVIRONMENT from '../config/Environment.config.js';

class AuthController {
    async register (request, response) {

        try{     

            const {email, password, username} = request.body
            if(!email || !password || !username){
                return response.send('Error: Nombre, email o usuario invalido')
            }

            const user = await userRepository.buscarUnoPorEmail(email)
            if(user){
                return response.send(`Usuario con email ${email} ya registrado`)
            }
            let hashed_password = await bcrypt.hash(password, 10)
            await userRepository.crear(email, hashed_password, username)
    
            return response.send('Usuario creado exitosamente')
        }
        catch(error){
            console.error('Error al crear usuario:', error)

            return response.send('Error interno del servidor')
        }
    }

    async login (request, response){
        const {email, password} = request.body
        /* 
        Aplicar validaciones sobre el email y la password
        */
        if(!email){
            return response.json({
                ok: false,
                message: 'Debes enviar un email',
                status: 400,
                data: null
            })
        }
        else if(!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))){
            return response.json({
                ok: false,
                status: 400,
                message: 'El email no es valido', 
                data: null
            })
        }

        const usuario_encontrado = await userRepository.buscarUnoPorEmail(email)

        if(!usuario_encontrado){
            return response.json(
                {
                    message: 'Credenciales invalidas', 
                    status: 401, 
                    ok: false,
                    data: null
                }
            )
        }

        if( !( await bcrypt.compare(password, usuario_encontrado.password) ) ){     
            /* Respondemos igual a que si no existiese para mayor seguridad */
            return response.json(
                {
                    message: 'Credenciales invalidas',
                    status: 401, 
                    ok: false,
                    data: null
                }
            )
        }

        const datos_del_token = {
            username: usuario_encontrado.username,
            email: usuario_encontrado.email,
            id: usuario_encontrado.id
        }


        const auth_token = jwt.sign(datos_del_token, ENVIRONMENT.JWT_SECRET_KEY)
        return response.json({
            message: 'Inicio de sesion exitoso',
            ok: true,
            status: 200,
            data: {
                auth_token: auth_token
            }
        })
    }
}

const authController = new AuthController()
export default authController