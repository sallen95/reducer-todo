
const addTodoAction = (todo) => {
    return({type:'ADD', payload:todo});
}

export default addTodoAction;