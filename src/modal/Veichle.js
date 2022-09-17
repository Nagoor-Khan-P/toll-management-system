import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Dropdown from "./Dropdown";

export default function TollModal({ viecleModal, veichleToggle }) {
  return (
    <div>
      <Modal isOpen={viecleModal} toggle={veichleToggle}>
        <ModalHeader toggle={veichleToggle}>Add New Entry</ModalHeader>
        <ModalBody>
          <form className="row">
            <div className="mb-1">
              <label className="starlabel form-label mb-1">
                Select Toll Name<span class="required">*</span>
              </label>
              <Dropdown />
              <label className="starlabel form-label mb-1">
                Select Vehicl Type Name<span class="required">*</span>
              </label>
              <div className="flex-container my-2 ">
                <div className="dropdown ">
                  <select className="btn btn-secondary d-grid gap-2">
                    <option>Select Veichle Type</option>
                    <option>Car/Jeep/Van</option>
                    <option>LCV</option>
                    <option>Truck/Bus</option>
                    <option>Heavy vehicle</option>
                  </select>
                </div>
              </div>
              <label className="starlabel form-label mb-1">
                Select Vehicl Type Name<span class="required">*</span>
              </label>
              <input
                type="text"
                className="form-control "
                // value={taskName}
                placeholder="Add Toll Name"
                // onChange={handleChange}
              ></input>

              <label className="starlabel form-label mb-1">
                Tarif<span class="required">*</span>
              </label>
              <input
                type="number"
                className="form-control "
                // value={taskName}
                placeholder="enter amount.."
                // onChange={handleChange}
              ></input>
            </div>

            {/* body Part */}
            <div className="d-grid gap-2 col-12 my-2">
              <button className="btn btn-primary btn-sm">Add Toll</button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}
