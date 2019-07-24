
import axios from 'axios'

const getToDos=({commit})=>{
    axios.get('http://localhost:3001/todos').then(res=>
    {
        commit('toSetList',res.data)
        console.log(this.$store.state.todolist)
    }).catch(error=>console.log(error))

}
const postToDos=({commit,dispatch},toDoEvent)=>{
    axios.post('http://localhost:3001/todos',{
        content:toDoEvent,
        status:false,
        isShow:true,
        editable:true

    }).then(()=>dispatch('getToDos'))


}
const delToDos=({commit,dispatch},index)=>{
    axios.delete(`http://localhost:3001/todos/${index}`).then(()=>dispatch('getToDos'))


}
const putToDos=({dispatch,state},id)=>{
    let toDo=state.todolist.find(toDo=>toDo.id==id)
    axios.patch(`http://localhost:3001/todos/${id}`,{
        content:toDo.content
    }).then(()=>dispatch('getToDos')).catch(error=>console.log(error))
}
export default {
    getToDos,
    postToDos,
    delToDos,
    putToDos

}