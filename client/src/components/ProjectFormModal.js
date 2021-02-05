import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, Header, Image, Modal } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
import { SearchCreateButton } from "../styles/LandingPageStyle";
import ProjectForm from "./projectForm/ProjectForm";

const ProjectFormModal = ({ query, editing }) => {
  const [open, setOpen] = React.useState(false);
  const [projects, setProjects] = useState([]);
  const { user } = useContext(AuthContext);
  let history = useHistory()
  console.log("query", query);

  const getProjects = () => {};

  const editProject = () => {};

  const addProject = (newProject, image, history) => {
    if (image == null) {
      alert("Image can't be blank");
      return;
    }
    const options = {
      params: {
        title: newProject.title,
        github_link: newProject.github_link,
        live_link: newProject.live_link,
        description: newProject.description,
      },
    };
    console.log(newProject);
    let data = new FormData();
    data.append("file", image);
    
    Axios.post(
      `/api/users/${user.id}/projects`,
      data,
      options
    ).then ((res)=> 
  
      history.push(`/projects/${res.data.id}`)
    ) .catch ((err) =>
      console.log(err)
    )
  };

  const closeModal = () => {
    // handleSubmit();
    setOpen(false);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<SearchCreateButton>Create New Project</SearchCreateButton>}
    >
      <Modal.Header>Create New Project</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          {open && (
            <ProjectForm
              query={query}
              addProject={addProject}
              closeModal={closeModal}
            />
          )}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ProjectFormModal;
