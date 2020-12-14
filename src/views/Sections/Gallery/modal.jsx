import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

import './modal.scss';

const GalleryModal = ({ show, onHide, children }) => (
  <Modal
    show={show}
    onHide={onHide}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
    <Modal.Header closeButton />
    <Modal.Body>
      {children}
    </Modal.Body>
  </Modal>
);
GalleryModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default GalleryModal;
