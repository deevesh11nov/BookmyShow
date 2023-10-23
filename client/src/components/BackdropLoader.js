import React from 'react';
import { Spinner, Modal } from 'react-bootstrap';

const BackdropLoader = ({ show }) => {
    console.log
  return (
    <Modal
      show={show}
      backdrop="static"
      keyboard={false}
      centered
      dialogClassName="backdrop-loader"
    >
      <Spinner animation="border"  variant="white" />
    </Modal>
  );
};

export default BackdropLoader;
