import {useEffect, useState } from "react"
import Axios from 'axios'

export const useAxiosOnMount = (url) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(()=> {
    Axios.get(url).then((res)=>{
      setData(res.data)
      setError(null)
    }).catch((err)=>{
      setError(err.response)
    }).finally(()=>{
      setLoading(false)
    })
  },[])

  return [data, loading, error]
}