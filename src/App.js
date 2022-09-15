import logo from "./logo.svg";
import "./App.css";
import TextField from "@mui/material/TextField";

function App() {
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
        <div className="container-fluid">
          <div class="row align-items-start">
            <div class="col align-self-start"><p className="lead text-muted">Toll Entries/Veichle Entries : </p></div>
            <div class="col align-self-start"><input type="text" className="seatch" placeholder="Serach.." name="search" /></div>
            <div class="col">One of three columns</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
