import { clerkClient } from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { userId } = auth();
    const { age } = await request.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!age || age < 1 || age > 120) {
      return new NextResponse("Invalid age", { status: 400 });
    }

    await clerkClient.users.updateUser(userId, {
      publicMetadata: {
        age: age
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating age:', error);
    return new NextResponse("Error updating age", { status: 500 });
  }
}