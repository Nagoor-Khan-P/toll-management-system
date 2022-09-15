import React from "react";
import { useState } from "react";
import TollModal from "../modal/TollModal";

export default function Toll() {
  const [tollModal, setTollModal] = useState(false);
  const status = () => setTollModal(!tollModal);
  return (
      <>
        <div className="container-fluid my-3">
          {/* header container */}
          <div className="container-lg text-center">
            <h1 className="display-5 text-primary">
              {" "}
              <span>
                <i class="fa-solid fa-list"></i>
              </span>
              Toll Managemen System
            </h1>
          </div>
          <div className="container-lg my-5">
            <div class="row align-items-start">
              <div class="col-3 align-self-start">
                <p className="lead text-muted">
                  Toll Entries/Veichle Entries :{" "}
                </p>
              </div>
              <div class="col align-self-start">
                <input
                  type="text"
                  className="seatch"
                  placeholder="Serach.."
                  name="search"
                />
              </div>
              <div class="col">
                <button
                  className="btn btn-primary ms-2"
                  onClick={() => setTollModal(true)}
                >
                  Add Viechile Entry
                </button>
                <button className="btn btn-primary ms-2">Add New Toll</button>
                <button className="btn btn-primary ms-2">View All Tolls</button>
              </div>
            </div>
          </div>
          <div>
            {/* for the list purpose */}
          </div>
        </div>
        <TollModal tollModal={tollModal} status={status} />
      </>
  );
}
