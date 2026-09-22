import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

import User from "./server/models/userModel.js";
import Product from "./server/models/productModel.js";
import Pathologist from "./server/models/pathologistModel.js";

dotenv.config();

const seedData = async () => {
  try {
    // =========================
    // DATABASE CONNECTION
    // =========================

    await mongoose.connect(process.env.MONGO_URI);

    console.log("DB CONNECTION SUCCESS");

    // =========================
    // CLEAR EXISTING DATA
    // =========================

    await User.deleteMany();
    await Product.deleteMany();
    await Pathologist.deleteMany();

    console.log("Old data deleted");

    // =========================
    // USERS
    // =========================

    const users = [
      {
        name: "Rahul Sharma",
        email: "rahul@example.com",
        phone: "9876543210",
        password: await bcrypt.hash("Password@123", 10),
        age: 22,
        gender: "male",
        address: "Indore, Madhya Pradesh",
        userType: "USER",
      },

      {
        name: "Priya Sharma",
        email: "priya@example.com",
        phone: "9876543211",
        password: await bcrypt.hash("Password@123", 10),
        age: 24,
        gender: "female",
        address: "Bhopal, Madhya Pradesh",
        userType: "USER",
      },

      {
        name: "Amit Verma",
        email: "amit@example.com",
        phone: "9876543212",
        password: await bcrypt.hash("Password@123", 10),
        age: 35,
        gender: "male",
        address: "Indore, Madhya Pradesh",
        userType: "DOCTOR",
      },

      {
        name: "Neha Singh",
        email: "neha@example.com",
        phone: "9876543213",
        password: await bcrypt.hash("Password@123", 10),
        age: 31,
        gender: "female",
        address: "Ujjain, Madhya Pradesh",
        userType: "DOCTOR",
      },

      {
        name: "Ravi Pathology",
        email: "ravi.pathology@example.com",
        phone: "9876543214",
        password: await bcrypt.hash("Password@123", 10),
        age: 40,
        gender: "male",
        address: "Indore, Madhya Pradesh",
        userType: "PATHOLOGIST",
      },

      {
        name: "Sneha Jain",
        email: "sneha@example.com",
        phone: "9876543215",
        password: await bcrypt.hash("Password@123", 10),
        age: 26,
        gender: "female",
        address: "Indore, Madhya Pradesh",
        userType: "USER",
      },

      {
        name: "Raj Patel",
        email: "raj@example.com",
        phone: "9876543216",
        password: await bcrypt.hash("Password@123", 10),
        age: 28,
        gender: "male",
        address: "Dewas, Madhya Pradesh",
        userType: "USER",
      },

      {
        name: "Admin User",
        email: "admin@example.com",
        phone: "9876543217",
        password: await bcrypt.hash("Admin@123", 10),
        age: 30,
        gender: "male",
        address: "Indore, Madhya Pradesh",
        userType: "ADMIN",
      },
    ];

    const createdUsers = await User.insertMany(users);

    console.log(`${createdUsers.length} users created`);

    // =========================
    // PATHOLOGIST
    // =========================

    const pathologistUser = createdUsers.find(
      (user) => user.userType === "PATHOLOGIST"
    );

    const pathologist =  await Pathologist.create({
  user: pathologistUser._id,

  laboratoryName: "MediTrust Diagnostic Laboratory",

  laboratoryAddress: "Vijay Nagar, Indore, Madhya Pradesh",
   
    qualification: "M.Sc. Medical Laboratory Technology",

  registrationNumber: "PATH-IND-1001",

  experience: "8 Years",

  specialization: [
    "Clinical Pathology",
    "Hematology",
    "Biochemistry",
    "Microbiology",
  ],


  email: "pathologist@meditrust.com",

  consultationFee: "500",

  workingHours: "09:00 AM - 06:00 PM",

  availableDays: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],

  isVerified: true,

  isActive: true,
});;

    await Pathologist.create(pathologist);

    console.log("Pathologist created");

    // =========================
    // PRODUCTS
    // =========================

    const products = [
      {
        name: "Paracetamol 500mg",
        description: "Used for fever and mild pain relief",
        price: 10,
        stock: 100,
        expiresOn: "2027-12-31",
        image: "paracetamol.jpg",
        isActive: true,
      },

      {
        name: "Vitamin C Tablets",
        description: "Vitamin C supplement",
        price: 120,
        stock: 50,
        expiresOn: "2027-10-15",
        image: "vitamin-c.jpg",
        isActive: true,
      },

      {
        name: "Cough Syrup",
        description: "Used for temporary relief from cough",
        price: 95,
        stock: 40,
        expiresOn: "2027-08-20",
        image: "cough-syrup.jpg",
        isActive: true,
      },

      {
        name: "Antiseptic Liquid",
        description: "Antiseptic solution for external use",
        price: 85,
        stock: 60,
        expiresOn: "2028-01-10",
        image: "antiseptic.jpg",
        isActive: true,
      },

      {
        name: "Digital Thermometer",
        description: "Digital thermometer for temperature measurement",
        price: 250,
        stock: 25,
        expiresOn: "2030-01-01",
        image: "thermometer.jpg",
        isActive: true,
      },

      {
        name: "First Aid Kit",
        description: "Basic first aid medical kit",
        price: 450,
        stock: 20,
        expiresOn: "2029-06-30",
        image: "first-aid-kit.jpg",
        isActive: true,
      },
    ];

    const createdProducts = await Product.insertMany(products);

    console.log(`${createdProducts.length} products created`);

    // =========================
    // SEEDING COMPLETED
    // =========================

    console.log("================================");
    console.log("SEEDING COMPLETED 🚀");
    console.log("================================");

    console.log("👤 Users        :", createdUsers.length);
    console.log("🔬 Pathologists :", 1);
    console.log("💊 Products     :", createdProducts.length);

    // =========================
    // LOGIN CREDENTIALS
    // =========================

    console.log("");
    console.log("🔐 LOGIN CREDENTIALS");
    console.log("");

    console.log("Admin:");
    console.log("Email    : admin@example.com");
    console.log("Password : Admin@123");

    console.log("");

    console.log("Doctor:");
    console.log("Email    : amit@example.com");
    console.log("Password : Password@123");

    console.log("");

    console.log("Patient:");
    console.log("Email    : rahul@example.com");
    console.log("Password : Password@123");

    console.log("");

    console.log("Pathologist:");
    console.log("Email    : ravi.pathology@example.com");
    console.log("Password : Password@123");

    console.log("");

    // =========================
    // CLOSE DATABASE
    // =========================

    await mongoose.connection.close();

    console.log("Database connection closed");

    process.exit(0);

  } catch (error) {
    console.error("SEED ERROR:", error);

    await mongoose.connection.close();

    process.exit(1);
  }
};

// =========================
// RUN SEED
// =========================

seedData();