import axios from "axios";

const base_url=`http://localhost/api/v1/answer`;

const  addAnswer = async (answerModel) =>{
    const response = await axios({
        method : 'POST',
        url:base_url+`/add-answer`,
        data: answerModel,
        headers: {"Content-Type": "application/json;charset-UTF-8"}
    });
    
    return await response.data;
}



export {addAnswer};