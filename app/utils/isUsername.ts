const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;

export const isValidUsername = (username: string) =>
	usernameRegex.test(username);
