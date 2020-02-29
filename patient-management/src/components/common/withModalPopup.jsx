import React from "react";
import Modal from "react-bootstrap/Modal";

function WithModalPopup(Component) {
  return class WithModalPopup extends React.Component {
    render() {
      const { headerName, onClickClose } = this.props;
      return (
        <Modal show={true}
        onHide={() => onClickClose()}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          
            <Modal.Header closeButton>
              <Modal.Title>{headerName}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Component />
            </Modal.Body>

            {/* <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer> */}
         
        </Modal>
      );
    }
  };
}

export default WithModalPopup;
