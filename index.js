import express from 'express';
import cors from 'cors';
import { connection } from './postgres/postgres.js';
import router from './view/routes.js';
import dotenv from 'dotenv';
dotenv.config();



const port = process.env.PORT || 3000;
const app = express();


app.use(cors())
app.use(express.json())
app.use (router)



app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
     console.log(`server is running on http://localhost:${port}`)
      console.log(`server is running on http://localhost:${port}`)
       console.log(`server is running on http://localhost:${port}`)
        console.log(`server is running on http://localhost:${port}`)
         console.log(`server is running on http://localhost:${port}`)
          console.log(`server is running on http://localhost:${port}`)
});

connection();