import { ADD_USER  } from "./action";

const initialState ={
    user:[]
}

export const userReducer = (store = initialState  , {type, payload}) =>{
       
    switch(type){
        case ADD_USER:
        return {...store , user:payload }

        default : return store
    }
}