import * as actionTypes from "./types";
export const additem = (item) => ({
    type: actionTypes.ADD_ITEM_LIST,
    item
})
export const deleteitem = (key) => ({
    type: actionTypes.DELETE_ITEM_LIST,
    key
})
