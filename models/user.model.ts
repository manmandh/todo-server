import mongoose from 'mongoose'
import { IUser } from '../types'

const Schema = new mongoose.Schema<IUser>({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
})

export const User = mongoose.model('User', Schema)
