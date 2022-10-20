const ADD_STUDENT = "ADD_STUDENT";
const EDIT_STUDENT = "EDIT_STUDENT";

const addStudent = (load) => {
   return {
       type: ADD_STUDENT,
       payload: load
   }
}

const editStudent = (load1, load2, load3, load4, ind) => {
   return {
       type: EDIT_STUDENT,
       payload1: load1,
       payload2: load2,
       payload3: load3,
       payload4: load4,
       index: ind
   }
}

export {addStudent};
export {editStudent};