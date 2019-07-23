
import axios from 'axios'
export default {
    getToDos({commit}){
        axios.get('http://localhost:3001/todos').then(res=>
        {
            commit('toSetList',res.data)
            console.log(this.$store.state.todolist)
        }).catch(error=>console.log(error))

    },
    postToDos({commit,dispatch},toDoEvent){
       axios.post('http://localhost:3001/todos',{
            content:toDoEvent,
            status:false,
            isShow:true

        }).then(()=>dispatch('getToDos'))


    },
    delToDos({commit,dispatch},index){
        axios.delete(`http://localhost:3001/todos/${index}`).then(()=>dispatch('getToDos'))


    },
    putToDos({commit,dispatch,state},id){
        axios.put(`http://localhost:3001/todos/${id}`,).then(()=>dispatch('getToDos'))
    }
}