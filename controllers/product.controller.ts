import type { Request, Response } from 'express'

import { Product } from '../models/product.model'
import { ErrorResponse, SuccessResponse } from '../utils'

export const createProduct = async (req: Request, res: Response) => {
	try {
		const product = req.body
		const newProduct = await Product.create(product)

		if (!newProduct) return res.status(500).json(new ErrorResponse('Product can not create'))
		return res.status(200).json(new SuccessResponse(newProduct))
	} catch (error) {
		return res.status(500).json('Error')
	}
}

export const getProducts = async (req: Request, res: Response) => {
	try {
		const products = await Product.find({})

		return res.status(200).json(new SuccessResponse(products))
	} catch (error) {
		return res.status(500).json('Error')
	}
}

export const getProductById = async (req: Request, res: Response) => {
	try {
		const { productId } = req.params
		const products = await Product.findById(productId)

		return res.status(200).json(new SuccessResponse(products))
	} catch (error) {
		return res.status(500).json('Error')
	}
}

export const updateProductById = async (req: Request, res: Response) => {
	try {
		const { productId } = req.params
		const updateProduct = req.body
		const updatedProduct = await Product.findByIdAndUpdate(productId, updateProduct, { new: true }).lean()

		if (!updatedProduct) return res.status(404).json(new ErrorResponse('Product not found'))

		return res.status(200).json(new SuccessResponse(updatedProduct))
	} catch (error) {
		return res.status(500).json('Error')
	}
}

export const deleteProductById = async (req: Request, res: Response) => {
	try {
		const { productId } = req.params
		const deletedProduct = await Product.findByIdAndDelete(productId, { new: true }).lean()

		if (!deletedProduct) return res.status(404).json(new ErrorResponse('Product not found'))

		return res.status(200).json(new SuccessResponse(deletedProduct))
	} catch (error) {
		return res.status(500).json('Error')
	}
}
