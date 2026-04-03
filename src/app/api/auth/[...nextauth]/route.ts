import { handlers } from "@/auth";

console.log("AUTH_SECRET exists:", !!process.env.AUTH_SECRET);
console.log("GOOGLE_CLIENT_ID exists:", !!process.env.GOOGLE_CLIENT_ID);

export const { GET, POST } = handlers;
