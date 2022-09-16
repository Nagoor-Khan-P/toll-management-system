import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Dropdown from "./Dropdown";

export default function TollModal({ tollModal, toggle }) {
  return (
    <div>
      <Modal isOpen={tollModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add a new toll entry</ModalHeader>
        <ModalBody>
          <form className="row">
            <div className="mb-1">
              <label className="form-label mb-1">Toll Name<span class="required">*</span></label>
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

            {/* body Part */}

            <label className="starlabel form-label mb-1">Toll Name<span class="required">*</span></label>
            <Dropdown />
            <Dropdown />
            <Dropdown />
            <Dropdown />
            <div className="d-grid gap-2 col-12">
               <button className="btn btn-primary btn-sm">Add Toll</button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}
