import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET() {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}

export async function POST(request: Request) {
    const data = await request.json();
    const res = await prisma.user.create({ data });
    return NextResponse.json(res);
}