import mongoose from 'mongoose'
import { IProduct } from '../types/IProduct'

const Schema = new mongoose.Schema<IProduct>({
	type: {
		type: String,
		required: true,
	},
	cost: {
		type: Number,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	image: {
		type: String,
	},
})

export const Product = mongoose.model('Product', Schema)
