import axios from "axios";

const base_url=`http://localhost/api/v1/answer/`;

const  addAnswer = async (answerModel) =>{
    try {
        const response = await axios({
            method : 'POST',
            url:base_url+`add-answer`,
            data: answerModel,
            headers: {"Content-Type": "application/json;charset-UTF-8"}
        });
        
        return  response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }

}

const getAnswer = async(answerId) =>{
    try {
        const response = await axios({
            method:"GET",
            url:base_url+`get-answer`,
            params:answerId,
            headers: {"Content-Type": "application/json;charset-UTF-8"}
        })
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const getAllAnswer = async()=>{
    try {
        const response = await axios.get(`get-all-answer`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const  updateUser = async (updateAnswerModel) =>{
    try {
        const response = await axios({
            method : 'POST',
            url:base_url+`update-answer`,
            data: updateAnswerModel,
            headers: {"Content-Type": "application/json;charset-UTF-8"}
        });
        
        return  response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }

}

const getAllAnswerByQuestionId = async(questionId) => {
    try {
        const response = await axios({
            method:'GET',
            url:base_url+`get-all-answer-by-question-id`,
            params:questionId,
            headers: {"Content-Type": "application/json;charset-UTF-8"}
        })
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export {addAnswer , getAnswer , getAllAnswer , getAllAnswerByQuestionId};