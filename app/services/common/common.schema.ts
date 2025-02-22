import { z } from "zod";
import {isStrongPassword} from "validator";

export const passwordValidationSchema = (fieldName: string) =>
	z
		.string({ required_error: `${fieldName} is required` })
		.min(8)
		.max(64)
		.refine(
			(value) =>
				isStrongPassword(value, {
					minLength: 8,
					minLowercase: 1,
					minNumbers: 1,
					minUppercase: 1,
					minSymbols: 1,
				}),
			"Password is too weak",
		);