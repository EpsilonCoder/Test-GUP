import { state } from "@angular/animations";
import { ActionReducer, createReducer, MetaReducer, on, props } from "@ngrx/store";
import { changeUsername, initAction } from "../actions/action";


const initialState={
    appName:'ngRx',
    user :{
      username :'',
      isAdmin : false
    }
}

function log(reducer:ActionReducer<any>):ActionReducer<any>{
    return(state,action)=>{
        const currentState=reducer(state,action);
        console.groupCollapsed(action.type)
        console.log('Etat initiale',state);
        console.log('l action', action);
        console.log('Etat Suivante', currentState);
        console.groupEnd()
        return currentState;
        

    }
}


export const metaReducers:MetaReducer[]=[log];

export const rootReducer=createReducer(initialState ,
    on(initAction,(state)=>{
        return{
            ...state,
            user :{
                ...state.user,
                isAdmin:false
            }
        }
        
    }),
     on(changeUsername, (state,props)=> {
        return{
            ...state,
            user:{
            ...state.user,
            username:props.username
            }
        }
     } )

    );