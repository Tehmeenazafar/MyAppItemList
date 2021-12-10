import {ADD_ITEM_LIST,DELETE_ITEM_LIST } from '../actions/types';

const initialState = {
    itemList : []
}

const aroundyouReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ITEM_LIST:
           return{ ...state,
            userList: state.itemList.concat({
                title:action.item.title,
                description:action.item.description,
                favourite:action.item.favourite,
                date:action.item.date,
                id:action.item.id

            })
           };
        case DELETE_ITEM_LIST:
            return{ ...state,
             userList: state.itemList.filter((item)=>
                 item.id !== action.key
             )
            };
               
        default:
            return state;
    }
}