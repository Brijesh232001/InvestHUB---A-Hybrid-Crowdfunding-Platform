import { connectMongoDB } from "@/lib/mongodb";
import Charity from "@/models/charity";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const {
    
        title,
        introduction,
        purpose,
        help,
        requiredFunding,
    totalFunding,
        raiserName,
        raiserEmail,
        raiserPhoneNumber,
        additionalInformation,
        error,
        success
  } = await req.json();
  

  try {
    await connectMongoDB();
    await Charity.create({ 
      
        title,
        introduction,
        purpose,
        help,
        requiredFunding,
    totalFunding,
        raiserName,
        raiserEmail,
        raiserPhoneNumber,
        additionalInformation,
        error,
        success});

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
      return NextResponse.json({ msg: ["Unable to send Data."] });
    }
  }
}


export async function GET() {
    try {
      await connectMongoDB();
      const charities = await Charity.find();
      return NextResponse.json({ msg: ["Data is fetched"], data: charities });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ msg: ["Unable to fetch data."] });
    }
  }