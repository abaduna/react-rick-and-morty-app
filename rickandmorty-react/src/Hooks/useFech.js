
import {useCallback, useEffect,useReducer,useState} from "react"

import {API} from "../API"
import { fechReducer, initialState } from "../reducers/fech"
import { ACTIONS } from "../Acion/Fech"

export const  useFech =(endpoint ="character")=> { 

    const [state,dispach] = useReducer(fechReducer,initialState)
    const getData =  useCallback(async ()=>{
        try{
            const {data} = await API.get(`${endpoint}`) //data : {} STATUS:...
            dispach({type:ACTIONS.SET_DATA , payload: data})
            console.log(data)


        } catch (e) {
            console.error(e)
            dispach({type:ACTIONS.SET_ERROR})
        }
    },[endpoint])

    useEffect(()=>{
        getData()
    },[endpoint,getData])

    return state
}
