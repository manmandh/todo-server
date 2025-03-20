import express from 'express'
import { createUser, getUserByEmail, getUsers } from '../controllers'

const userRoutes = express.Router()

userRoutes.get('/', getUsers)
userRoutes.get('/:email', getUserByEmail)
userRoutes.post('/', createUser)

export { userRoutes }
