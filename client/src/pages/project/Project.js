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
    <div>
      <h1 className="header">{data?.title}</h1>
      <img className="picture" src={data?.picture} />
      <p className="description">{data?.description}</p>
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

      <h2 className="project">Project Members</h2>
      <div className="container">
        {"user1"} {"user2"}
      </div>
    </div>
  );
}
