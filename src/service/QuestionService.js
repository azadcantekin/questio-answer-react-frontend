import axios from "axios";

const base_url=`http://localhost:8081/api/v1/question/`;

const  addQuestion = async (questionModel) =>{
    try {
        const response = await axios({
            method : 'POST',
            url:base_url+`/add-question`,
            data: questionModel,
            headers: {"Content-Type": "application/json;charset-UTF-8"}
        });
        
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const getAllQuestion = async () =>{
    try {
        const response = await axios.get(base_url+`get-all-question`);
        return response.data ;
    } catch (error) {
        console.log(error);
        throw error;
    }
   
}

const getAllQuestionByUser = async(userId)=>{
    try {
        const response = await axios({
            method:"GET",
            url:base_url +`/get-all-question-by-user-id`,
            params:userId,
            headers: {"Content-Type": "application/json;charset-UTF-8"}
        });
        return response.data;
    } catch (error) {
       console.log(error);
       throw error; 
    }
}

const getQuestion = async (questionId)=>{
    try {
        const response = await axios({
            method:"GET",
            url:base_url +`/get-question`,
            params:questionId,
            headers: {"Content-Type": "application/json;charset-UTF-8"}
        });
        return response.data;
    } catch (error) {
       console.log(error);
       throw error; 
    }
   
}

const deleteQuestion = async (questionId)=>{
    try {
        const response = await axios({
            method:"POST",
            url:base_url +`/delete-question`,
            data: questionId,
            headers: {"Content-Type": "application/json;charset-UTF-8"}
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
 
}

export  {addQuestion , getAllQuestion, getAllQuestionByUser , getQuestion , deleteQuestion};