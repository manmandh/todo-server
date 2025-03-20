import express from 'express'
import { createProduct, deleteProductById, getProductById, getProducts, updateProductById } from '../controllers'

const productRoutes = express.Router()

productRoutes.get('/', getProducts)
productRoutes.get('/:productId', getProductById)
productRoutes.post('/', createProduct)
productRoutes.patch('/:productId', updateProductById)
productRoutes.delete('/:productId', deleteProductById)

export { productRoutes }
