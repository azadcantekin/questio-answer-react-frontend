import axios from "axios";

const base_url=`http://localhost:8081/api/v1/question/`;

const  addQuestion = async (questionModel) =>{
const response = await axios({
    method : 'POST',
    url:base_url+`/add-question`,
    data: question,
    headers: {"Content-Type": "application/json;charset-UTF-8"}
});

return await response.data;

}

const getAllQuestion = async () =>{
    const response = await axios.get(base_url+`get-all-question`);
    const data = await response.data;
    return data ;
}

const getQuestion = async ()=>{
    const response = await axios.get(base_url +`/get-question`);
    const data = await response.json();

    return data ;
}

const deleteQuestion = async ()=>{
    const response = await axios.get(base_url +`/delete-question`);
    const data = await response.data;

    return data ;
}

export  {addQuestion , getAllQuestion , getQuestion , deleteQuestion};