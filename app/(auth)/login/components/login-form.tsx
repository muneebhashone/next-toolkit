"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	loginUserByEmailSchema,
	type LoginUserByEmailSchemaType,
} from "@/app/services/auth/auth.schema";
import { useLoginEmail } from "@/app/hooks/auth.hooks";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(loginUserByEmailSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const router = useRouter();
	const { mutateAsync: login, isPending } = useLoginEmail();

	const onSubmit = async (data: LoginUserByEmailSchemaType) => {
		await login(data);
		router.push("/protected");
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
			<div>
				<label
					htmlFor="email"
					className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
				>
					Email address
				</label>
				<div className="mt-2">
					<input
						id="email"
						type="email"
						required
						autoComplete="email"
						className={`block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:focus:outline-indigo-500 sm:text-sm/6 ${errors.email ? "outline-red-500 dark:outline-red-500" : ""}`}
						{...register("email")}
					/>
					{errors.email && (
						<p className="mt-1 text-sm text-red-500 dark:text-red-400">
							{errors.email.message as string}
						</p>
					)}
				</div>
			</div>

			<div>
				<div className="flex items-center justify-between">
					<label
						htmlFor="password"
						className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
					>
						Password
					</label>
					<div className="text-sm">
						<a
							href="/forget-password"
							className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
						>
							Forgot password?
						</a>
					</div>
				</div>
				<div className="mt-2">
					<input
						id="password"
						type="password"
						required
						autoComplete="current-password"
						className={`block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:focus:outline-indigo-500 sm:text-sm/6 ${errors.password ? "outline-red-500 dark:outline-red-500" : ""}`}
						{...register("password")}
					/>
					{errors.password && (
						<p className="mt-1 text-sm text-red-500 dark:text-red-400">
							{errors.password.message as string}
						</p>
					)}
				</div>
			</div>

			<div>
				<button
					disabled={isPending}
					type="submit"
					className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-70 disabled:cursor-not-allowed dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
				>
					{isPending ? "Signing in..." : "Sign in"}
				</button>
			</div>
		</form>
	);
};
