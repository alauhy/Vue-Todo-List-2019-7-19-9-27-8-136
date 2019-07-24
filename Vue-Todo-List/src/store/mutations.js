const toSetList = (state, list) => {
    state.todolist = list
}
const addToList = (state, event) => {
    state.todolist.push(event)
}
const setStatusFalse = (state, index) => {
    state.todolist[index].status = false;
}
const setEditableFalse = (state, index) => {
    state.todolist[index].editable = false;
}
const setEditableTrue = (state, index) => {
    state.todolist[index].editable = true;
}
const setStatusTrue = (state, index) => {
    state.todolist[index].status = true;
}
const atAll = (state) => {
    state.todolist.map(e => e.isShow = true);
}
const atActive=(state)=> {
    state.todolist.map(e => {
        e.status ? e.isShow = false : e.isShow = true
    });

}
const atComplete=(state)=> {
    state.todolist.map(e => {
        e.status ? e.isShow = true : e.isShow = false
    });

}
export default {
    toSetList,
    addToList,
    setStatusFalse,
    setEditableFalse,
    setEditableTrue,
    setStatusTrue,
    atAll,
    atActive,
    atComplete


}