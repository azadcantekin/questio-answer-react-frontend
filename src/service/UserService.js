import axios from "axios";

const base_url=`http://localhost/api/v1/user/`;

const register = async (userModel)=>{
   const response = await axios({
        method:"POST",
        url: base_url+`auth-register`,
        data: userModel,
        headers: {"Content-Type": "application/json;charset-UTF-8"}
    });

    return await response.data;
   
}

const login = async (userId)=>{
    const response = await axios({
        method:"POST",
        url:base_url+`auth-login`,
        data:userId,
        headers: {"Content-Type": "application/json;charset-UTF-8"}
    });
    return await response.data;
}

const updateUser = async (updateUserModel)=>{
    const response = await axios({
        method:"POST",
        url: base_url+`update-user`,
        data: updateUserModel,
        headers: {"Content-Type": "application/json;charset-UTF-8"}
    });

    return await response.data;
}

const deleteUser= async ()=>{

}

export default {addUser,getUser,updateUser,deleteUser} 
