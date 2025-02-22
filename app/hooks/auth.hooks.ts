"use client";

import {
	useMutation,
	type UseMutationOptions,
	useQuery,
	type UseQueryOptions,
} from "@tanstack/react-query";
import {
	changePassword,
	getMe,
	loginEmail,
	logout,
	registerEmail,
	resetPassword,
} from "@/app/services/auth/auth.service";
import useAuthStore from "@/app/stores/useAuthStore";
import type {
	IChangePasswordResponse,
	IGetMeResponse,
	ILoginUserByEmailResponse,
	ILogoutResponse,
	IRegisterUserByEmailResponse,
	IResetPasswordResponse,
} from "../services/auth/auth.types";
import type {
	ChangePasswordSchemaType,
	LoginUserByEmailSchemaType,
	RegisterUserByEmailSchemaType,
	ResetPasswordSchemaType,
} from "../services/auth/auth.schema";

export const useGetMe = (options?: UseQueryOptions<IGetMeResponse>) => {
	const { token } = useAuthStore();

	return useQuery({
		...options,
		queryKey: ["auth", "me", token],
		queryFn: () => getMe(token),
		enabled: !!token,
	});
};

export const useLoginEmail = (
	options?: UseMutationOptions<
		ILoginUserByEmailResponse,
		Error,
		LoginUserByEmailSchemaType
	>,
) => {
	return useMutation({
		...options,
		mutationFn: loginEmail,
	});
};

export const useRegisterEmail = (
	options?: UseMutationOptions<
		IRegisterUserByEmailResponse,
		Error,
		RegisterUserByEmailSchemaType
	>,
) => {
	return useMutation({
		...options,
		mutationFn: registerEmail,
	});
};

export const useLogout = (
	options?: UseMutationOptions<ILogoutResponse, Error>,
) => {
	const { removeToken } = useAuthStore();

	return useMutation({
		...options,
		mutationFn: logout,
		onSuccess: (data, variables, context) => {
			removeToken();
			options?.onSuccess?.(data, variables, context);
		},
	});
};

export const useChangePassword = (
	options?: UseMutationOptions<
		IChangePasswordResponse,
		Error,
		ChangePasswordSchemaType
	>,
) => {
	return useMutation({
		...options,
		mutationFn: changePassword,
	});
};

export const useResetPassword = (
	options?: UseMutationOptions<
		IResetPasswordResponse,
		Error,
		ResetPasswordSchemaType
	>,
) => {
	return useMutation({
		...options,
		mutationFn: resetPassword,
	});
};
