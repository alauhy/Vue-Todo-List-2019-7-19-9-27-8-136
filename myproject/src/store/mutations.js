
export default {
    toSetList(state,list){
        state.todolist = list
    },
    addToList(state,event) {
        state.todolist.push(event)
    },
    setStatusFalse(state,index) {
        state.todolist[index].status = false;
    },
    setEditableFalse(state,index) {
        state.todolist[index].editable = false;
    },
    setEditableTrue(state,index) {
        state.todolist[index].editable = true;
    },

    setStatusTrue(state,index) {
        state.todolist[index].status = true;
    },
    atAll (state){
        state.todolist.map(e => e.isShow = true);
    },
    atActive(state) {
        state.todolist.map(e => {
            e.status ? e.isShow = false : e.isShow = true
        });

    },
    atComplete(state) {
        state.todolist.map(e => {
            e.status ? e.isShow = true : e.isShow = false
        });

    }
}