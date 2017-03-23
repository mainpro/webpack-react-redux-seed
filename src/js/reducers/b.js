import update from 'react/lib/update'
import {B_ADD,B_REDUCE} from 'actions/a';


const  bReducer = (state = 0, action) =>{
    switch (action.type) {
        /*
         *  加法
         *  使用update更新state
         */
        case B_ADD:
            return  update(state,{$set:state+action.payload});
        /*
         *  减法
         *  使用update更新state
         */
        case B_REDUCE:
            return  update(state,{$set:state-action.payload});
        default:
            return state;
    }
}
export default bReducer;