import { handlers } from "@/auth";

console.log("AUTH_SECRET exists:", !!process.env.AUTH_SECRET);
console.log("GOOGLE_CLIENT_ID exists:", !!process.env.GOOGLE_CLIENT_ID);

export async function GET(request: Request) {
  // 确保 URL 包含完整的 query string
  const url = new URL(request.url);
  console.log("GET callback URL:", url.toString());
  console.log("GET search params:", url.searchParams.toString());
  return handlers.GET(request);
}

export async function POST(request: Request) {
  return handlers.POST(request);
}
