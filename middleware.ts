import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getMe } from "./app/services/auth/auth.service";

export async function middleware(request: NextRequest) {
	console.log("[Middleware] Processing request:", request.url);
	const token = request.cookies.get("accessToken");

	console.log("[Middleware] Token:", token);

	if (!token?.value) {
		console.log("[Middleware] No access token found, redirecting to login");
		return NextResponse.redirect(new URL("/login", request.url));
	}

	try {
		console.log("[Middleware] Validating access token");
		await getMe(token?.value);
		console.log("[Middleware] Token validation successful");
	} catch {
		console.log("[Middleware] Token validation failed, redirecting to login");
		return NextResponse.redirect(new URL("/login", request.url));
	}

	console.log("[Middleware] Request authorized, proceeding");
	return NextResponse.next();
}

export const config = {
	matcher: [
		"/((?!login|register|forget-password|reset-password|assets|favicon|_next|static|api|.*\\.(?:jpg|jpeg|gif|png|svg|webp|ico|css|js|woff|woff2)).*)",
		"/protected/:path*",
	],
};
