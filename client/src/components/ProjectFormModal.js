import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Header, Image, Modal } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
import ProjectForm from "./projectForm/ProjectForm";

const ProjectFormModal = ({ query, editing }) => {
  const [open, setOpen] = React.useState(false);
  const [projects, setProjects] = useState([]);
  const { user } = useContext(AuthContext);

  console.log("query", query);

  const getProjects = () => {};

  const editProject = () => {};

  const addProject = async (newProject) => {
    // debugger;
    try {
      let res = await Axios.post(`/api/users/${user.id}/projects`, newProject);
      console.log("project added", res);
    } catch (err) {
      console.log(err);
    }
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
      trigger={<Button color="teal">Create New Project</Button>}
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
        <Button
          form="newProject"
          content="Create Project"
          labelPosition="right"
          icon="checkmark"
          onClick={() => closeModal()}
          positive
          type="submit"
        />
      </Modal.Actions>
    </Modal>
  );
};

export default ProjectFormModal;
