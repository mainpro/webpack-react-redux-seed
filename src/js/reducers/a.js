import update from 'react/lib/update'
import {A_ADD,A_REDUCE} from 'actions/a';


const  aReducer = (state = 0, action) =>{
    switch (action.type) {
        /*
         *  加法
         *  使用update更新state
         */
        case A_ADD:
            return  update(state,{$set:state+action.payload});
        /*
         *  减法
         *  使用update更新state
         */
        case A_REDUCE:
            return  update(state,{$set:state-action.payload});
        default:
            return state;
    }
}
export default aReducer;