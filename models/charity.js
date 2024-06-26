import mongoose, { Schema } from "mongoose";

const charitySchema = new Schema({
    
       
    title: 
    {

        type: String,
        required: [true, 'Title is required.']

    },
    introduction: 
    {
        type: String,
        required: [true, 'Introduction is required.']
    },
    purpose: 
    {
        type: String,
        required: [true, 'Purpose is required.']
    },
    help: 
    {
        type: String,
        required: [true, 'How Can You Help is required.']
    },
    requiredFunding: {
        type: String,
         required: [true, 'Required funding is required.'] 
    },
   totalFunding: {
        type: String, 
        required: [true, 'Total funding is required.'] 
    },
    raiserName: 
    {
        type: String,
        required: [true, 'Raiser Name is required.']
    },
    raiserEmail: 
    {
        type: String,
        required: [true, 'Raiser Email is required.']
    },
    raiserPhoneNumber: 
    {
        type: String,
        required: [true, 'Raiser Phone Number is required.']
    },
    additionalInformation: 
    {
        type: String,
        required: [true, 'Additional Information is required.']
    },
});

const Charity =
  mongoose.models.Charity || mongoose.model("Charity", charitySchema);

export default Charity;