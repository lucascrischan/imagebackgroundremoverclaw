export const runtime = 'nodejs';  // ← 新增这行

import { handlers } from "@/auth";

export const { GET, POST } = handlers;
