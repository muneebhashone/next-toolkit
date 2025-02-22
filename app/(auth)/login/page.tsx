import { LoginForm } from "./components/login-form";

const LoginPage = () => {
	return (
		<>
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<img
					alt="Next Toolkit"
					src="/logo.webp"
					className="mx-auto h-16 w-auto"
				/>
				<h2 className="mt-4 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-gray-100">
					Sign in to your account
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<LoginForm />
			</div>
		</>
	);
};

export default LoginPage;
