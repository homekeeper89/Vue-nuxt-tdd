import axios from "axios"

const API_USER_LOGIN = "https://jsonplaceholder.typicode.com/todos/1";
export default {
  loginUser(){
    axios.get(API_USER_LOGIN).then((resp)=>{
      console.log(resp)
    })
  }
}
