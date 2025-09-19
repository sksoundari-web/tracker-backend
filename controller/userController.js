const userModel=require("../models/User")

exports.getUser= async(req,res)=>{
    try {
     const User=  await userModel.find();
     res.json(User)

    } catch (error) {
        console.error(error);
    res.status(500).json({error:"Server Error"})
    }
}

exports.postUser=async(req,res)=>{
  const {title,amount}=req.body;
  try {
    const newUser=new userModel({title,amount})
    await newUser.save()
    res.status(201).json(newUser)
  } catch (error) {
    console.error(error);
    res.status(500).json({error:"Server Error"})
  }
}

exports.deleteUser=async(req,res)=>{
const id=req.params.id;
const deleted= await userModel.findByIdAndDelete(id)
      if(!deleted){
        return res.status(404).json({message:"Person not found"})
      }
    res.status(204).json({message:"Person deleted"})
}


exports.updateUser = async (req, res) => {
  try {
    const { title,amount } = req.body;
    const id = req.params.id;
    const updatedPerson = await userModel.findByIdAndUpdate(
      id,
      { title,amount},
      { new: true }
    );
    if (!updatedPerson) {
      return res.status(404).json({ message: "Person not found" });
    }
    res.json(updatedPerson);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};