// src/app/api/posts/route.ts

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc", // Sort posts by the date they were created
      },
    });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.error();
  }
}
