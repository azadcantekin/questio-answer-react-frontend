import axios from "axios";

const base_url=`http://localhost/api/v1/user/`;

let token = null ;

const register = async (userModel)=>{
    try {
        const response = await axios({
            method:"POST",
            url: base_url+`auth-register`,
            data: userModel,
            headers: {"Content-Type": "application/json;charset-UTF-8"}
        });
        token = response.data.token;
        return await response.data;

    } catch (error) {
        console.log(error);
        throw error;
    }
  
   
}

const getToken = ()=>{
    return token;
}

const login = async (userId)=>{
    try {
        const response = await axios({
            method:"POST",
            url:base_url+`auth/login`,
            data:userId,
            headers: {"Content-Type": "application/json;charset-UTF-8"}
        });
        token = response.data.token;
        return await response.data;
   
    } catch (error) {
        console.log(error);
        throw error;
    }
}  

const updateUser = async (updateUserModel)=>{
    try {
        const response = await axios({
            method:"POST",
            url: base_url+`update-user`,
            data: updateUserModel,
            headers: {"Content-Type": "application/json;charset-UTF-8"}
        });
        return await response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
  
}

const deleteUser= async (userId)=>{
    try {
        const response = await axios({
            method:"DELETE",
            url:base_url+`delete-user`,
            data:userId,
            headers: {"Content-Type": "application/json;charset-UTF-8"}
        
        })
        return response.data ;
    } catch (error) {
        console.log(error);
        throw error;
    }

}

export default {addUser,getToken ,getUser,updateUser,deleteUser} 
