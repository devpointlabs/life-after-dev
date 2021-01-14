import {useEffect, useState, prevState } from "react";
import Axios from 'axios';
import useInfiniteScroll from "../../hooks/useInfiniteScroll";



const LandingPage = () => {
  
  
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(Array.from(Array(20).keys(), n => n + 1));
  const [error, setError] = useState(null)
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  useEffect(()=> {
    Axios.get("/api/projects").then((res)=>{
      console.log(res)
      setData(res.data)
      setError(null)
    }).catch((err)=>{
      setError(err.response)
    }).finally(()=>{
      setLoading(false)
    })
  },[])

  function fetchMoreListItems() {
    setTimeout(() => {
      setData(prevState => ([...prevState, ...Array.from(Array(12).keys(), n => n + prevState.length + 1)]));
      setIsFetching(false);
    }, 100);
  }
  
  const bigTime = {
    height: "50px"

  }
  
  return (
    <>
      <ul className="list-group mb-2">
        {data.map(data => <li style = {bigTime}  className="list-group-item">{data.picture}</li>)}
      </ul>
      {isFetching && 'Fetching more list items...'}
    </>
  );
};

export default LandingPage;






