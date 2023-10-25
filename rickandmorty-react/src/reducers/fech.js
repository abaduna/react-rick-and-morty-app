import {ACTIONS} from "../Acion/Fech"

export const initialState = {
    loading: true ,
    error: false,
    data: {},
}

export const fechReducer = (state,action) =>{
    switch (action.type) {
        case ACTIONS.SET_DATA:
            return{
                loading: false,
                error: false,
                data: {
                    info: action.payload.info,
                    results:action.payload.results
                }
            }

        case (ACTIONS.SET_ERROR):
            return {
                ...initialState,
                error: true,
                loading: false,

            }
        
        default:
            return state 

    }
}