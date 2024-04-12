import { dbConnect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { getTokenData } from "@/helpers/getTokenData";

dbConnect();

export async function POST(request: NextRequest) {
  try {
    const userId = await getTokenData(request);

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return NextResponse.json(
        { error: "User does not exists", success: false },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "user fetched successfully", data: user, success: true },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
