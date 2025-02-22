import type {
	ChangePasswordSchemaType,
	ForgetPasswordSchemaType,
	LoginUserByEmailSchemaType,
	RegisterUserByEmailSchemaType,
	ResetPasswordSchemaType,
} from "./auth.schema";
import apiClient from "@/app/lib/api-client";
import type {
	ILoginUserByEmailResponse,
	ILogoutResponse,
	IChangePasswordResponse,
	IRegisterUserByEmailResponse,
	IForgetPasswordResponse,
	IResetPasswordResponse,
	IGetMeResponse,
} from "./auth.types";

export const loginEmail = async (
	data: LoginUserByEmailSchemaType,
): Promise<ILoginUserByEmailResponse> => {
	const response = await apiClient.post("/auth/login/email", data);
	return response.data;
};

export const registerEmail = async (
	data: RegisterUserByEmailSchemaType,
): Promise<IRegisterUserByEmailResponse> => {
	const response = await apiClient.post("/auth/register/email", data);
	return response.data;
};

export const logout = async (): Promise<ILogoutResponse> => {
	const response = await apiClient.post("/auth/logout");
	return response.data;
};

export const changePassword = async (
	data: ChangePasswordSchemaType,
): Promise<IChangePasswordResponse> => {
	const response = await apiClient.post("/auth/change-password", data);
	return response.data;
};

export const resetPassword = async (
	data: ResetPasswordSchemaType,
): Promise<IResetPasswordResponse> => {
	const response = await apiClient.post("/auth/reset-password", data);
	return response.data;
};

export const forgetPassword = async (
	data: ForgetPasswordSchemaType,
): Promise<IForgetPasswordResponse> => {
	const response = await apiClient.post("/auth/forget-password", data);
	return response.data;
};

export const getMe = async (accessToken?: string | null): Promise<IGetMeResponse> => {

    const headers = accessToken ? {
        Authorization: `Bearer ${accessToken}`,
    } : undefined

    console.log(headers);

	const response = await apiClient.get("/auth/me", { headers });
	return response.data;
};
