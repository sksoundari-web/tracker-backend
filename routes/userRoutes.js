const express =require("express")
const { getUser, postUser, deleteUser, updateUser } = require("../controller/userController")
const router=express.Router()
router.get("/getdata",getUser)
router.post("/",postUser)
router.delete("/:id",deleteUser)
router.put("/:id",updateUser)
module.exports=router;