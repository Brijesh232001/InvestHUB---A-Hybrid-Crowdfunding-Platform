import { connectMongoDB } from "@/lib/mongodb";
import Business from "@/models/business";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const {
    businessName,
    
    ownerName,
    email,
    phoneNumber,
    businessAddress,
    requiredFunding,
    totalFunding,
    businessDescription,
    productDescription,
    websiteUrl,
    termsConditions
  } = await req.json();

  try {
    await connectMongoDB();
    await Business.create({ 
      businessName,
      
      ownerName,
      email,
      phoneNumber,
      businessAddress,
      requiredFunding,
      totalFunding,
      businessDescription,
      productDescription,
      websiteUrl,
      termsConditions
    });

    return NextResponse.json({
      msg: ["Data sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      console.error(error);
      return NextResponse.json({ msg: ["Unable to send Data."] });
    }
  }
}



export async function GET() {
  try {
    await connectMongoDB();
    const businesses = await Business.find();
    return NextResponse.json({ msg: ["Data is fetched"], data: businesses });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ msg: ["Unable to fetch data."] });
  }
}