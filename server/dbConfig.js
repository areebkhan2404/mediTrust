import mongoose from "mongoose"
// import dns from 'node:dns'


const connectDB  = async() => {
// dns.setServers(['8.8.8.8', '8.8.4.4']);
     try {
         const conn = await  mongoose.connect(process.env.MONGO_URI)
        console.log(`DB CONNECTION SUCCESS : ${conn.connection.name}`.bgGreen.black);
     } catch (error) {
      // console.log(error)
        console.log(`DB CONNECTION FAILED  : ${error.message}`.bgRed)
        
     }
}

 export default connectDB
