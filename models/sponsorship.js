import mongoose, { Schema } from "mongoose";

const sponsorshipSchema = new Schema({
    
       
    eventName: 
    {

        type: String,
        required: [true, 'Event name is required.']

    },
    eventId: 
    {
        type: String,
        required: [true, 'Event ID is required.']
    },
    organizerName: 
    {
        type: String,
        required: [true, 'Organizer name is required.']
    },
    email: 
    {
        type: String,
        required: [true, 'Email is required.']
    },
    phoneNumber: 
    {
        type: String,
        required: [true, 'Phone number is required.']
    },
    eventDate: 
    {
        type: String,
        required: [true, 'Event date is required.']
    },
    eventVenue: 
    {
        type: String,
        required: [true, 'Event venue is required.']
    },
    requiredSponsorship: 
    {
        type: String,
        required: [true, 'Required sponsorship is required.']
    },
    totalSponsorship: 
    {
        type: String,
        required: [true, 'Total sponsorship is required.']
    },
    eventDescription: 
    {
        type: String,
        required: [true, 'Event description is required.']
    },
    audienceDemographics: 
    {
        type: String,
        required: [true, 'Audience demographics are required.']
    },
    benefitsForSponsors: 
    {
        type: String,
        required: [true, 'Benefits for sponsors are required.']
    },
    websiteUrl: 
    {
        type: String,
        required: [true, 'Website URL is required.']
    },
    termsAndConditions: 
    {
        type: String,
        required: [true, 'Terms and conditions are required.']
    },
});

const Sponsorship =
  mongoose.models.Sponsorship || mongoose.model("Sponsorship", sponsorshipSchema);

export default Sponsorship;