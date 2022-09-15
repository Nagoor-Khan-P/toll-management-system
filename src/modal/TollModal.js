import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function TollModal({ tollModal, status }) {
  return (
    <div>
      <Modal isOpen={tollModal} status={status}>
        <ModalHeader status={status}>Add a new toll entry</ModalHeader>
        <ModalBody>
          <form className="row g-3">
            <div className="mb-1">
              <label className="form-label">Toll Name</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                // value={taskName}
                placeholder="Add Toll Name"
                // onChange={handleChange}
              ></input>
            </div>
            <div className="flex-container">
              <div className="col-auto mb-1">
                <label className="form-label">Toll Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  // value={taskName}
                  placeholder="Add Toll Name"
                  // onChange={handleChange}
                ></input>
              </div>
              <div className="ms-2">
              <label className="form-label">Toll Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  // value={taskName}
                  placeholder="Add Toll Name"
                  // onChange={handleChange}
                ></input>
              </div>
              <div className="ms-2">
              <label className="form-label">Toll Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  // value={taskName}
                  placeholder="Add Toll Name"
                  // onChange={handleChange}
                ></input>
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="success">Add</Button>{" "}
          <Button color="danger">Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
