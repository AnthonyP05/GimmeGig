import { connectMongoDB } from "../../../lib/mongodb";
import User from "../../../models/userSchema";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { userID, category } = await req.json();
    await connectMongoDB();
    await User.create({ userID, category });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
