import { DataTypes} from "sequelize";

export const createUserModel=async(Sequelize)=>{

    const User=Sequelize.define(

        "User",
        {
            empid:{
                type:DataTypes.INTEGER,
                autoIncrement:true,
                primaryKey:true,
                allowNull:false,
                unique:true
            },
            name:{
                type:DataTypes.STRING,
                allowNull:false,
            },
            email:{
                type:DataTypes.STRING,
                allowNull:false,
                isLowercase:true,
                unique:true
            },
            designation:{
                type:DataTypes.STRING,
                allowNull:false,
            },

            password:{
                type:DataTypes.STRING,
                allowNull:false,
            },
        }
    );
    return User;
}