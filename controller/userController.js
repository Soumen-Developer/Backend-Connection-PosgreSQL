import { UserModel } from "../postgres/postgres.js";
import { getUserModel } from "../postgres/postgres.js";



//get
export const getALLEmp = async (req,res)=>{
        const UserModel = getUserModel();
    try{
        const users =await UserModel.findAll();
        if (users.length==0){
            return res.status(200).json({"error":"User Not Found"}) 
        }
        return res.status(200).json(users)
    }
    catch(error){
        console.log(error)
        return res.status(500).json({"error":"Internal Server Error"})
    }
}

//post
export const addEmp = async (req, res) => {
    const UserModel = getUserModel();
    const { name, email, designation, password } = req.body;

    try {
        const emp = await UserModel.findOne({ where: { email } });
        if (!emp) {
            await UserModel.create({ name, email, designation, password });
            return res.status(201).json({ message: "Employee Added Successfully" });
        }
        return res.status(200).json({ message: "Employee Already Exist" });
    } catch (e) {
        console.error("Error in addEmp:", e.message, e.errors || e);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}


//put
export const updateEmp = async (req, res) => {
    const UserModel = getUserModel();
    const empid = req.params.empid;
    const { name, email, phone, address, designation, password } = req.body;
    try {
        const [updated] = await UserModel.update(
            { name, email, phone, address, designation, password },
            { where: { empid: empid } }
        );
        if (updated) {
            return res.status(200).json({ message: "Updated Successfully" });
        }
        return res.status(404).json({ message: "Employee Not Found" });
    } catch (error) {
        console.error("Error in updateEmp:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


//delete
export const deleteEmp = async (req, res) =>{
    const UserModel = getUserModel();
    const empid = req.params.empid;
    try{
        const deleted = await UserModel.destroy({
            where: { empid: empid }
        })
        if(deleted){
            return res.status(200).json({"message":"User Deleted Successfully"})
        }
        return res.status(404).json({"error":"User Not Found"})
    }
    catch(e){
        console.log(e)
        return res.status(500).json({"error":"Internal Server Error"})
    }
}