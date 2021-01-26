import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Header, Image, Modal } from "semantic-ui-react";

const formFields = [
  { title: "Project Title", name: "title" },
  { title: "Github Link", name: "github_link" },
  { title: "Picture", name: "picture" },
  { title: "Description", name: "description" },
  { title: "Live Link", name: "live_link" },
];

const ProjectForm = ({ query, addProject, closeModal }) => {
  const [project, setProject] = useState(
    // ?
    {
      title: query,
      picture: "",
      github_link: "",
      description: "",
      live_link: "",
    }
    // :
    //  {
    //     title: "",
    //     picture: "",
    //     github_link: "",
    //     description: "",
    //     live_link: "",
    //   }
  );

  const handleSubmit = (e) => {
    console.log("Project Add submit clicked");
    addProject(project);
  };

  return (
    <>
      <Header>{query}</Header>

      <Form id="newProject" onSubmit={handleSubmit}>
        <br />
        {formFields.map((item) => (
          <Form.Input
            label={item.title}
            placeholder={item.title}
            name={item.name}
            value={project[item.name]}
            onChange={(e) =>
              setProject({ ...project, [e.target.name]: e.target.value })
            }
          />
        ))}
        <Button>Submit</Button>
      </Form>
    </>
  );
};

export default ProjectForm;
