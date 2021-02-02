import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Header, Icon, Image, Modal } from "semantic-ui-react";

const DeleteProjectModal = ({ project, deleteProject }) => {
  const [open, setOpen] = React.useState(false);
  const [projects, setProjects] = useState([]);

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
      trigger={
        <Button basic color="red">
          Delete Project
        </Button>
      }
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
        <Button color="red" inverted onClick={() => onSubmit()}>
          <Icon name="checkmark" /> Yes, delete it
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteProjectModal;
