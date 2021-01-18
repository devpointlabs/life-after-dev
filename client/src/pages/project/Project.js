import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";

// let logo ={
//   picture:
//     "https://res.cloudinary.com/lifeafterdev/image/upload/v1610151677/markus-spiske-466ENaLuhLY-unsplash_jrcxan.jpg",

// let github ={
//   github: "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png",
//}

export default function Project() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await axios.get("/api/projects/1");
      setData(res.data);
      console.log(res);
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div>
      <h1 className="header">{data.title}</h1>
      <img className="picture" src={data.picture} />
      <p className="description">{data.description}</p>
      <p className="github">{data.github_link} </p>
      <p className="liveLink">{data.live_link}</p>
    </div>
  );
}
