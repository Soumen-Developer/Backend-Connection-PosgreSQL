import express from 'express';
import { getALLEmp, addEmp, updateEmp,deleteEmp } from '../controller/userController.js';


const router = express.Router();

router.get("/getAll",getALLEmp);

router.post("/addEmp",addEmp);

router.put("/emp/:empid",updateEmp);

router.delete("/emp/:empid",deleteEmp);



export default router;
