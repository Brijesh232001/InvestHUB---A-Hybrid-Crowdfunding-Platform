import mongoose, { Schema } from "mongoose";

const businessSchema = new Schema({
    
       
        businessName: { 
            type: String, 
            required: [true, 'Business name is required.'] 
        },
        ownerName: { 
            type: String, 
            required: [true, 'Owner name is required.'] 
        },
        email: { 
            type: String, 
            required: [true, 'Email is required.']
         },
        phoneNumber: { 
            type: String,
             required: [true, 'Phone number is required.']
        },
        businessAddress: { 
            type: String, 
            required: [true, 'Business address is required.']
         },
        requiredFunding: {
             type: String,
              required: [true, 'Required funding is required.'] 
         },
        totalFunding: {
             type: String, 
             required: [true, 'Total funding is required.'] 
         },
        businessDescription: { 
            type: String, 
            required: [true, 'Business description is required.'] 
         },
        productDescription: {
             type: String, 
             required: [true, 'Product description is required.']
        },
        websiteUrl: { 
            type: String, 
            required: [true, 'Website URL is required.']
         },
        termsConditions: {
             type: String,
              required: [true, 'Terms and conditions are required.'] 
        },
        date: {
            type: Date,
            default: Date.now,
        },
});

const Business =
  mongoose.models.Business || mongoose.model("Business", businessSchema);

export default Business;