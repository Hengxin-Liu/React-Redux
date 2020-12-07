import { COMMENTS } from '../shared/comments';
import * as ActioonTypes from './ActionTypes';

export const Comments=(state=COMMENTS,action)=>{
    switch(action.type){
        case ActioonTypes.ADD_COMMENT:
             var comment=action.payload;
             comment.id = state.length;
             comment.date = new Date().toISOString();
             console.log("Comment: ", comment);
             return state.concat(comment);
             
        default:
            return state;
    }
}