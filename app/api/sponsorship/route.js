import { connectMongoDB } from "@/lib/mongodb";
import Sponsorship from "@/models/sponsorship";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const {
    
    eventName,
    eventId,
    organizerName,
    email,
    phoneNumber,
    eventDate,
    eventVenue,
    requiredSponsorship,
    totalSponsorship,
    eventDescription,
    audienceDemographics,
    benefitsForSponsors,
    websiteUrl,
    termsAndConditions,
    error,
    success
  } = await req.json();
  

  try {
    await connectMongoDB();
    await Sponsorship.create({ 
      
        eventName,
        eventId,
        organizerName,
        email,
        phoneNumber,
        eventDate,
        eventVenue,
        requiredSponsorship,
        totalSponsorship,
        eventDescription,
        audienceDemographics,
        benefitsForSponsors,
        websiteUrl,
        termsAndConditions,
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
      const sponsorships = await Sponsorship.find();
      return NextResponse.json({ msg: ["Data is fetched"], data: sponsorships });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ msg: ["Unable to fetch data."] });
    }
  }
