import dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.SERVER_PORT || 8080
export const MONGOOSE_URI = process.env.MONGOOSE_URI || ''
