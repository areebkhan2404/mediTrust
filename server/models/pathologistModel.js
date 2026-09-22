import mongoose from "mongoose";

const pathologistSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
        },

        laboratoryName: {
            type: String,
            required: true,
        },

        laboratoryAddress: {
            type: String,
            required: true,
        },
          qualification :{
            type : String,
            required: true
          } ,


        registrationNumber: {
            type: String,
            required: true,
            unique: true,
        },

        experience: {
            type: String,
            default: 0,
        },

        specialization: [
            {
            type: String,
        } 
    ],


        phone: {
            type: String,
            required: true,
        },
          
        email: {
            type: String
        },

       
        consultationFee: {
            type: String,
            required: true,
        },

        workingHours: {
            type: String,
            required: true,
        },

        availableDays: [
            {
                type: String,
                enum: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"

                ]
            },
        ],

        isVerified: {
            type: Boolean,
            default: false,
        },

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

const Pathologist = mongoose.model(
    "Pathologist", pathologistSchema
);

export default Pathologist;