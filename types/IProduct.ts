import type mongoose from 'mongoose'

export interface IProduct {
	_id: mongoose.Schema.Types.ObjectId
	name: string
	type: string
	cost: number
	image: string
}

export type IUserCreation = Omit<IProduct, '_id'>
