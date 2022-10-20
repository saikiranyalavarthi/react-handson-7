import React from 'react';
import {Link, useLocation} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {editStudent} from './pages/Action';


const  Edit = () => {
        
     let students = useSelector(state => state.Students); 
     console.log(students);
     let dispatch = useDispatch();
     const location = useLocation();
     const params = new URLSearchParams(location.search);
     let ind =  params.get('n') - 1;

     console.log(ind);
     let v1 = '', v2 = '', v3 = '', v4 ='';
        return(
            <div className="fields">
                <div>
                        <fieldset><legend>Name</legend>
                            <input id ="ip1"  className='inp1' type="text" onChange={(e) => {v1 = e.target.value}}/>
                        </fieldset>
                </div>
                <div>
                        <fieldset><legend>Age</legend>
                        <input id ="ip2"  className='inp1' type="text" onChange={(e) => {v2 = e.target.value}}/>
                        </fieldset>
                </div>
                <div>
                        <fieldset><legend>Course</legend>
                        <input id ="ip3"  className='inp1' type="text" onChange={(e) => {v3 = e.target.value}}/>
                        </fieldset>
                </div>
                <div>
                        <fieldset><legend>Batch</legend>
                        <input id ="ip4" className='inp1' type="text" onChange={(e) => {v4 = e.target.value}}/>
                        </fieldset>
                </div>

                <div className='fix-3'>
                        <Link to="/students"><button className='one' id='student-add'style={{color:"green"}}>Cancel</button></Link>
                        <Link to="/students"><button className='two' onClick={() => {
                                dispatch(editStudent(v1, v2, v3, v4, ind))
                        }} id='student-add' style={{color:"green"}}>Update</button></Link>
                </div>
                


            </div>
        );
        
}



export default Edit;