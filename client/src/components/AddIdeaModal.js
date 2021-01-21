import React, { useState } from "react";
import { Button, Form, Header, Image, Modal } from "semantic-ui-react";

const AddIdeaModal = ({ query }) => {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = () => {};

  const handleChange = () => {};

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color="teal">Create New Idea</Button>}
    >
      <Modal.Header>Create New Idea</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>{query}</Header>
          <Form id="newIdea" onSubmit={handleSubmit}>
            <br />
            <Form.Input
              label="First Name"
              placeholder="First Name"
              name="firstname"
              value=""
              onChange={handleChange}
            />
            <Form.Input
              label="Last Name"
              placeholder="Last Name"
              name="lastname"
              value=""
              onChange={handleChange}
            />
            <Form.Input
              label="Image"
              placeholder="Image"
              name="image"
              value=""
              onChange={handleChange}
            />
            <Form.Input
              label="GitHub"
              placeholder="GitHub Link"
              name="github_link"
              value=""
              onChange={handleChange}
            />
            <Form.Input
              label="Personal Site"
              placeholder="Personal Site URL"
              name="personal_site"
              value=""
              onChange={handleChange}
            />
            <Form.Input
              label="Linkedin"
              placeholder="Linkedin"
              name="linkedin_link"
              value=""
              onChange={handleChange}
            />
            <Form.Input
              label="Tag"
              placeholder="Tag"
              name="tag"
              value=""
              onChange={handleChange}
            />
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          form="newIdea"
          content="Create Idea"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default AddIdeaModal;
