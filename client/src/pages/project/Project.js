import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";
import Comments from "./Comments";

const Project = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await axios.get(`/api/projects/${props.match.params.id}`);
      setData(res.data);
      console.log(res);
    } catch (err) {
      alert(err);
    }
  };

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
            href={"https://github.com/devpointlabs/life-after-dev"}
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
};

export default Project;
