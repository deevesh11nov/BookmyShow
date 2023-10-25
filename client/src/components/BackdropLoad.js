import React from 'react';
import { Spinner, Modal } from 'react-bootstrap';

const BackdropLoad = ({ show }) => {
    console.log
  return (
    <Modal
      show={show}
      backdrop="static"
      keyboard={false}
      centered
      dialogClassName="backdroploader"
    >
      <Spinner animation="border"  variant="white" />
    </Modal>
  );
};

export default BackdropLoad;
