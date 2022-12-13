import { ActionReducer, createReducer, MetaReducer } from "@ngrx/store";


const initialState={
    appName:'ngRx'
}

function log(reducer:ActionReducer<any>):ActionReducer<any>{
    return(state,action)=>{
        const currentState=reducer(state,action);

        console.log('Etat initiale',state);
        console.log('Etat Suivante', currentState);
        

        return currentState;
        

    }
}


export const metaReducers:MetaReducer[]=[log];

export const rootReducer=createReducer(initialState);