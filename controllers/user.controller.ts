import type { Request, Response } from 'express'
import { User } from '../models/user.model'
import { ErrorResponse, SuccessResponse } from '../utils'

export const getUsers = async (req: Request, res: Response) => {
	try {
		const users = await User.find({})
		return res.status(200).json(new SuccessResponse(users))
	} catch (error) {
		return res.status(500).json(new ErrorResponse(String(error)))
	}
}

export const getUserByEmail = async (req: Request, res: Response) => {
	try {
		const { email } = req.params
		console.log(req.params)
		const user = await User.findOne({ email }).lean()
		if (!user) return res.status(404).json(new ErrorResponse('User not found'))
		return res.status(200).json(new SuccessResponse(user))
	} catch (error) {
		return res.status(500).json(new ErrorResponse(String(error)))
	}
}

export const createUser = async (req: Request, res: Response) => {
	try {
		const user = req.body
		const newUser = await User.create(user)

		if (!newUser) return res.status(500).json(new ErrorResponse('Can not create user'))

		return res.status(200).json(new SuccessResponse(newUser))
	} catch (error) {
		return res.status(500).json(new ErrorResponse(String(error)))
	}
}
