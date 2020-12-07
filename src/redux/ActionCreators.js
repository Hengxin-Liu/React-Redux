import * as ActioonTypes from './ActionTypes';

export const addComment=(dishId,rating,author,comment)=>({
    type: ActioonTypes.ADD_COMMENT,
    payload:{
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    }
});