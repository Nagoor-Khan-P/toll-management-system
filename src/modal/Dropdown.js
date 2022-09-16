import React from 'react'

export default function Dropdown() {
  return (
    <div>
      <div className="flex-container my-2">
            <div className="dropdown">
                <select className="btn btn-secondary">
                  <option>Select Veichle Type</option>
                  <option>Car/Jeep/Van</option>
                  <option>LCV</option>
                  <option>Truck/Bus</option>
                  <option>Heavy vehicle</option>
                </select>
              </div>

              <div className="ms-2">
                <input
                  type="number"
                  className="form-control"
                  id="title"
                  name="title"
                  // value={taskName}
                  placeholder="Single journey"
                  // onChange={handleChange}
                ></input>
              </div>
              <div className="ms-2">
                <input
                  type="number"
                  className="form-control"
                  id="title"
                  name="title"
                  // value={taskName}
                  placeholder="Return journey"
                  // onChange={handleChange}
                ></input>
              </div>
            </div>
    </div>
  )
}
