import axios from "axios";

const sortById = (data) =>{
  data.sort((a,b)=>{
    return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
  })
}

export default{
  getAllTodoFromServer(context){
    axios({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'get'
    }).then((res)=>{
      sortById(res.data)
      context.commit('SET_NEWTODOS', res.data);
    })
  },
  getTodo(){
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then(resp => {
      console.log(resp);
    });
  }
}