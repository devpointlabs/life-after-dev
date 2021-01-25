import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";
import Comments from "./Comments";
// let logo ={
//   picture:
//     "https://res.cloudinary.com/lifeafterdev/image/upload/v1610151677/markus-spiske-466ENaLuhLY-unsplash_jrcxan.jpg",

// let github ={
//   github: "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png",
//}

export default function Project() {
  const [data, setData] = useState(null);
  // const [user, setUser] = useState();
  ///api/users/1
  useEffect(() => {
    getData();
  }, []);
  // useEffect(() => {
  //   getUser();
  // }, [data]);

  //component didupdate

  const getData = async () => {
    try {
      let res = await axios.get("/api/projects/1");
      setData(res.data);
      console.log(res);
    } catch (err) {
      alert(err);
    }
  };

  // const getUser = async () => {
  //   try {
  //     let res = await axios.get("/api/users/1");
  //     setUser(res.data);
  //     console.log(res);
  //   } catch (err) {
  //     alert(err);
  //   }
  // };

  return (
    <div className="Project_Title">
      <h1> {data?.title} </h1>
      <div className="Project_Image">
        <img className="project_image" src={data?.picture} />

        <div className="description">
          <p>{data?.description}</p>
        </div>
        <div className="links">
          <a
            href={data?.github_link}
            onClick="console.log('The link was clicked.'); return false"
          >
            Github
          </a>
          <br />
          <a
            href={data?.live_link}
            onClick="console.log('The link was clicked.'); return false"
          >
            Live_Link
          </a>
        </div>
        {data && <Comments project={data} />}
      </div>
    </div>
  );
}
