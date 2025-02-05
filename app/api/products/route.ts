// /app/api/products/route.ts
import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/db';
import Product from '@/models/Product';
import fs from 'fs';
import path from 'path';


export async function GET() {
  try {
    await dbConnect(); // Ensure DB connection
    const products = await Product.find({});
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    // Ensure DB connection
    await dbConnect();

    // Get form data
    const formData = await request.formData();
    const name = formData.get('name')?.toString() || '';
    const description = formData.get('description')?.toString() || '';
    const price = parseFloat(formData.get('price')?.toString() || '0');
    const category = formData.get('category')?.toString() || '';
    const image = formData.get('image') as File;

    if (!image) {
      return NextResponse.json({ error: 'No image uploaded' }, { status: 400 });
    }

    // Create the uploads directory if it doesn't exist
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Save image to the uploads directory
    const imagePath = path.join(uploadDir, image.name);
    const buffer = Buffer.from(await image.arrayBuffer());
    fs.writeFileSync(imagePath, buffer);

    // Create product entry
    const newProduct = new Product({
      name,
      description,
      price,
      image: `/uploads/${image.name}`, // Save relative path
      category,
    });

    await newProduct.save();

    // Return success response with product data
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error('Error saving product:', error);
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
