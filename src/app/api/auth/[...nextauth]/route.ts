import { NextRequest } from "next/server";
import { handlers } from "@/auth";

console.log("AUTH_SECRET exists:", !!process.env.AUTH_SECRET);
console.log("GOOGLE_CLIENT_ID exists:", !!process.env.GOOGLE_CLIENT_ID);

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  console.log("GET callback URL:", url.toString());
  console.log("GET search params:", url.searchParams.toString());
  return handlers.GET(request);
}

export async function POST(request: NextRequest) {
  return handlers.POST(request);
}
