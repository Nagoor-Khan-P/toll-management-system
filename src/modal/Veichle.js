import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Dropdown from "./Dropdown";
import { useState } from "react";

export default function TollModal({ viecleModal, veichleToggle }) {
  const [vehicleType, setVehicleType] = useState(["Select Veichle Type", "Car/Jeep/Van", "LCV", "Truck/Bus", "Heavy vehicle"]);
  const Add = vehicleType.map((Add) => Add);
  const handleAddrTypeChange = (e) => {
    console.clear(); 
          console.log((vehicleType[e.target.value])); 
          setVehicleType(vehicleType[e.target.value]) 
  }

  const [vehicleNumber, setVehicleNumber] = useState(0);

  const [tariff, setTariff] = useState(0);

  const handleChange = (e) => {
      const {name, value} =e. target;
      if(name === "vnumber"){
        setVehicleNumber(value);
        console.log(vehicleNumber);
      }
      else if(name === "tariff"){
        setTariff(value);
        console.log(tariff);
      }
  }

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
                  <select
                    onChange={handleAddrTypeChange}
                    name="vtype"
                    className="browser-default custom-select form-control"
                  >
                    {Add.map((address, key) => (
                      <option value={key}>{address}</option>
                    ))}
                  </select>
                </div>
              </div>
              <label className="starlabel form-label mb-1">
                Vehicle Number<span class="required">*</span>
              </label>
              <input
                type="number"
                name="vnumber"
                className="form-control "
                 value={vehicleNumber}
                placeholder="Number.."
                 onChange={handleChange}
              ></input>

              <label className="starlabel form-label mb-1" >
                Tarif<span class="required">*</span>
              </label>
              <input
                type="number"
                name="tariff"
                className="form-control "
                 value={tariff}
                placeholder="enter amount.."
                 onChange={handleChange}
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
