import axios from "axios";

export default{
  getAllTodoFromServer(){
    axios({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'get'
    }).then((res)=>{
      console.log(res)
    })
  },
  getTodo(){
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then(resp => {
      console.log(resp);
    });
  }
}