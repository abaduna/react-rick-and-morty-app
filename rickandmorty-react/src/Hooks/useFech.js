
import {useCallback, useEffect,useState} from "react"
//import { axios  } from "axios";
import {API} from "../API"

export const  useFech =(endpoint ="character")=> { //useFech("character")
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState({})
    const [error,setError] = useState(false)
    const getData =  useCallback(async ()=>{
        try{
            const {data} = await API.get(`${endpoint}`) //data : {} STATUS:...
            setData(data)
            setLoading(false)
        } catch (e) {
            console.error(e)
            setError(true)
        }
    },[endpoint])

    useEffect(()=>{
        getData()
    },[endpoint,getData])

    return [data,loading,error]
}
