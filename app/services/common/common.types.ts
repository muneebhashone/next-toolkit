export interface IAPIResponse<T> {
	data: T;
	message: string;
	success: boolean;
}

