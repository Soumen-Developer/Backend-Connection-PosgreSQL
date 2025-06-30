import {Sequelize} from 'sequelize';
import { createUserModel } from '../model/userSchema.js';
import env from 'dotenv';
env.config();

const sequelize = new Sequelize(process.env.dbname, process.env.dbuser, process.env.dbpassword, {
  host: process.env.host,
  dialect: process.env.dialect
});

let UserModel=null;
const connection=async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        UserModel= await createUserModel(sequelize)
        await sequelize.sync();
        console.log("DataBase Synced");
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
};

const getUserModel = () => UserModel;

export{
  sequelize,
  connection,
  UserModel,
  getUserModel
}
