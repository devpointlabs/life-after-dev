import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Header, Image, Modal } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
import { EditButton } from "../styles/ProjectShowStyle";
import EditProjectForm from "./projectForm/EditProjectForm";

const EditProjectModal = ({ project, updateProjects }) => {
  const [open, setOpen] = React.useState(false);
  const [projects, setProjects] = useState([]);
  const { user } = useContext(AuthContext);

  // console.log("project", project);

  const getProjects = () => {};

  const editProject = async (updatedProject) => {
    try {
      let res = await Axios.patch(
        `/api/users/${user.id}/projects/${project.id}`,
        updatedProject
      );
      console.log("edit Project success", updatedProject);
    } catch (err) {
      // console.log("edit project error", err);
    }
  };

  const addProject = async (newProject) => {
    try {
      let res = await Axios.post(`/api/users/${user.id}/projects`, newProject);
      // console.log("project added", res);
    } catch (err) {
      // console.log(err);
    }
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<EditButton>Edit</EditButton>}
    >
      <Modal.Header>Edit Project</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          {open && (
            <EditProjectForm
              p={project}
              editProject={editProject}
              closeModal={closeModal}
              updateProjects={updateProjects}
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

export default EditProjectModal;
