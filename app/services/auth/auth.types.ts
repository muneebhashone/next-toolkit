import type { IAPIResponse } from "../common/common.types";
import type { IUser } from "../user/user.types";

export interface IRegisterUserByEmailResponse extends IAPIResponse<IUser> {}

export interface ILoginUserByEmailResponse extends IAPIResponse<{token: string}> {}

export interface ILogoutResponse extends IAPIResponse<void> {}

export interface IChangePasswordResponse extends IAPIResponse<void> {}

export interface IResetPasswordResponse extends IAPIResponse<void> {}

export interface IForgetPasswordResponse extends IAPIResponse<void> {}

export interface IGetMeResponse extends IAPIResponse<IUser> {}

