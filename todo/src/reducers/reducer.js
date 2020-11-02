
export const initialState = {
    data:[
        {
            item: 'Walk the dog',
            completed: false,
            id: Date.now(),
        }
    ]
}    

const reducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default reducer;
