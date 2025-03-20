import type mongoose from 'mongoose'

export interface IUser {
	_id: mongoose.Schema.Types.ObjectId
	email: string
	password: string
}

export type IUserCreation = Omit<IUser, '_id'>
