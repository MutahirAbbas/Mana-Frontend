import {ADD_ITEM} from './constant';

export const addData=(data)=>{
    console.log("action Data", data);
    return{
        type:ADD_ITEM,
        data:data
    }
}

export const removeData=()=>{
    console.log("action Remove");
    return{
        type:'REMOVE_ITEM'
    }
}