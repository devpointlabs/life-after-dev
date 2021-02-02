import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Header, Image, Modal } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
import EditProjectForm from "./projectForm/EditProjectForm";

const EditProjectModal = ({ project, deleteProject }) => {
  const [open, setOpen] = React.useState(false);
  const [projects, setProjects] = useState([]);
  const { user } = useContext(AuthContext);

  const onSubmit = () => {
    deleteProject(project.id);
    setOpen(false);
  };

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="small"
      trigger={<Button>Delete Project</Button>}
    >
      <Header icon>
        <Icon name="trash" />
        Are you sure?
      </Header>
      <Modal.Content>
        <p>
          Deleting this project will delete all associated information with it.
          It will delete all comments and remove any contributors from accessing
          it.
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" inverted onClick={() => setOpen(false)}>
          <Icon name="remove" /> Cancel
        </Button>
        <Button color="green" inverted onClick={() => onSubmit()}>
          <Icon name="checkmark" /> Yes, delete it
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default EditProjectModal;
