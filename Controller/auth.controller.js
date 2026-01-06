import express from 'express';
import userRepository from '../Repository/user.repository.js';

class AuthController{
    async post (request, response) {
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
}

const authController = new AuthController()
export default authController