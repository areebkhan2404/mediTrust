import Order from "../../models/orderModel.js"


const createOrder = async  (req , res) => {

    

        const { product , quantity }  = req.body 

        const order = await Order.create({

        user: req.user._id,
        product,
        quantity
        }) 
             
        const populateOrder = await Order.findById(order._id).populate('user').populate('product')


           if(!order){
             res.status(409)
            throw new Error("Order Not Created!")
           }

        res.status(201).json(populateOrder)
        
    }
        

    const getAllOrders  =   async (req, res) => {
         
        const orders = await Order.find().populate('user').populate('product')

        if(!orders){
            res.status(409)
            throw new Error("Orders Not Found")

        }

    res.status(200).json(orders)

}
  
 

    const getOrder  =   async (req, res) => {
          
          const orderId = req.params.oid 

        const order = await Order.findById(orderId).populate('user').populate('product')

        if(!order){
            res.status(409)
            throw new Error("Order Not Found")

        }

    res.status(200).json(order)

}


  const updateOrder = async (req,res) => {

    const orderId =  req.params.oid

      const order = await Order.findById(orderId)

      
        if(!order){
            res.status(404)
            throw new Error("Order Not Found!")
        }
        

     const updatedOrder =  await Order.findByIdAndUpdate(orderId , req.body , { new : true }).populate('user').populate('product')


        if(!updatedOrder){
            res.status(409)
            throw new Error("Order Not Updated!")

        }
        res.status(200).json(updatedOrder)
     }



   const orderController = {
     createOrder , 
     getAllOrders,
     getOrder,
     updateOrder
    



   }

    export default  orderController