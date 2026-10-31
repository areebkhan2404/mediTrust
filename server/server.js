import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import connectDB from "./dbConfig.js"


dotenv.config()


import authRoutes from "./routes/authRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"
import aiRoutes from "./routes/aiRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import pathologistRoutes from "./routes/pathologistRoutes.js"
import doctorRoutes from "./routes/doctorRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import errorHandler from "./middleware/error.handler.js"


const PORT = process.env.PORT || 5000
const app = express()


// DB CONNECTION 

connectDB() 

// Body-parser
app.use(express.json())
app.use(express.urlencoded())


// AUTH ROUTES 
app.use("/api/auth", authRoutes)

// ADMIN ROUTES 
app.use("/api/admin", adminRoutes)

//  AI Routes 
app.use("/api/ai", aiRoutes)

//  Product Routes 
app.use("/api/products", productRoutes)


// Pathologist Routes 
app.use("/api/pathologist", pathologistRoutes)

//  Doctor Routes 
app.use("/api/doctor", doctorRoutes)

// Order Routes 

app.use("/api/orders", orderRoutes)

// Error Handler
app.use(errorHandler)


app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING AT PORT : ${PORT}`.bgBlue)
})