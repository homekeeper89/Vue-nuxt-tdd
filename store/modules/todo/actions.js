import axios from "axios";

export default{
  getAllTodoFromServer(context){
    axios({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'get'
    }).then((res)=>{
      console.log(res.data)
      context.commit('SET_NEWTODOS', res.data);
    })
  },
  getTodo(){
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then(resp => {
      console.log(resp);
    });
  }
}