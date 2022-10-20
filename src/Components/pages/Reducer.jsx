const ADD_STUDENT = "ADD_STUDENT";
const EDIT_STUDENT = "EDIT_STUDENT";

const initial = {
    Students : [],
    count: 0
 }


const Reducer = (state=initial, action) => {
    switch(action.type) {
        case ADD_STUDENT: return {...state,count: state.count+1, Students: [...state.Students, action.payload]};
        case EDIT_STUDENT: {
            let t = state;
            if(action.payload1 !== "") {
                t.Students[action.index][0] = action.payload1;
            }
            if(action.payload2 !== "") {
                t.Students[action.index][1] = action.payload2;
            }
            if(action.payload3 !== "") {
                t.Students[action.index][2] = action.payload3;
            }
            if(action.payload4 !== "") {
                t.Students[action.index][3] = action.payload4;
            }
            return t;
        }
        
        default:  return state;
    }
}

export default Reducer;