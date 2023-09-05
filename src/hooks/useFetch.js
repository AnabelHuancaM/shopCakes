import {useEffect, useState } from "react"
import Axios from 'axios'

const useFetch = (endpoint) => {
    const [data, setData] = useState()
    const [error, setError] = useState()

    useEffect( () => {
        Axios.get(`http://localhost:3050/${endpoint}`)
         .then(({ data }) => setData(data)) 
         .catch(err => setError(err))
     }, [endpoint])
    
    return [data, error]
}

export default useFetch
