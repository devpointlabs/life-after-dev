import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Header, Image, Modal } from "semantic-ui-react";

const formFields = [
  { title: "Project Title", name: "title" },
  { title: "Github Link", name: "github_link" },
  { title: "Description", name: "description" },
  { title: "Live Link", name: "live_link" },
];

const EditProjectForm = ({
  query,
  addProject,
  closeModal,
  p,
  editProject,
  updateProjects,
}) => {
  const [project, setProject] = useState({
    id: p.id,
    title: p.title,
    picture: p.picture,
    github_link: p.github_link,
    description: p.description,
    live_link: p.live_link,
  });

  const handleSubmit = (e) => {
    // console.log("Project Edit submit clicked");
    editProject(project);
    updateProjects(project);
    closeModal();
  };

  return (
    <>
      <Header>Edit Project</Header>

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
        <Button color="green">Submit</Button>
      </Form>
    </>
  );
};

export default EditProjectForm;
