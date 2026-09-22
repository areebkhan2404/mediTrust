import express  from "express"
import orderController from "../controllers/order/orderController.js"
import protect from "../middleware/authMiddleware.js"


  

const router = express.Router()


router.get("/" , protect.forUser , orderController.getAllOrders )
router.get("/:oid" , protect.forUser , orderController.getOrder)

router.post("/create",  protect.forUser ,orderController.createOrder)

router.put("/:oid",  protect.forUser ,orderController.updateOrder)




   

 export default router 