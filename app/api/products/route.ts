/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { dbConnect }  from "@/lib/db"; // Corrected import
import Product from "@/models/Product";

export async function GET() {
  try {
    await dbConnect(); // Ensure DB connection
    const products = await Product.find({});
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
