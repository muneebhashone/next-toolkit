"use client";

import { useLogout } from "../hooks/auth.hooks";

export const Logout = () => {
	const { mutateAsync: logout, isPending } = useLogout({
		onSuccess: () => {
			window.location.reload();
		},
	});

	return (
		<button type="button" onClick={() => logout()} disabled={isPending}>
			{isPending ? "Logging out..." : "Logout"}
		</button>
	);
};