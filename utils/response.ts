export class SuccessResponse<T> {
	public status: string = 'success'
	constructor(public data: T) {}
}

export class ErrorResponse {
	public status: string = 'error'
	constructor(public message: string) {}
}
