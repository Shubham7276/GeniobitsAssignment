import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";


const CakeDevision = () => {
  const [data, setData] = useState({
    departmentName: "",
    incharge: "Manohar Patnaik",
    inchargeEmailId: "manoharp@gmail.com",
    totalEmployeesWork: "10",
  });

  const [display, setDisplay] = useState([])

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange=(e)=>{
    const { name, value } = e.target;

         setData({
           ...data,
           [name]: value,
         });
         console.log(data)
  }

  const handleClick=()=>{
    if(data.departmentName === '' && data.incharge==='' && data.inchargeEmailId ==='' && data.totalEmployeesWork === ''){
      alert("Please type somthing")
    }else{
      const Records = [...display,data]
      setDisplay(Records)
      handleClose()
      setData("")
      console.log(display)
    }
   
  }

  return (
    <div className="conatiner">
    <div className="container-fluid container1">
      <div className="row row1">
        {display.map((dis,index)=>(
         
          <div className="card" style={{ width: "18rem" }}>
          <h5 className="title">Cake Division</h5>
          <div className="card-body">

            <p className="card-text">Incharge :{dis.incharge} </p>
            <p className="card-text">Email ID : {dis.inchargeEmailId}</p>
            <p className="card-text">Total Employees: {dis.totalEmployeesWork}</p>
          </div>
        </div>
        
        ))}

        
      </div>

      <div className="row2">
        {/* _____________________________________Add Cake division____________________________________________ */}

        <button
          type="button"
          className="form-control btn btn-primary"
          onClick={handleClickOpen}
        >
          Add New Division
        </button>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ width: "550px" }} id="alert-dialog-title">
          {"Add New Division"}
        </DialogTitle>
        <DialogContent>
          <label className="form-label">
            Department Name
          </label>
          <input
            type="text"
            className="form-control"
            name="departmentName"
            value={data.departmentName}
            onChange={handleChange}
            placeholder="Department Name"
          />

          <label  className="form-label">
            Incharge
          </label>
          <input 
            type="text" 
            className="form-control"
            value={data.incharge}
            name="incharge"
            onChange={handleChange}
            placeholder="Incharge" />

          <label  className="form-label">
            Incharge E-mail ID
          </label>
          <input
            type="text"
            className="form-control"
            value={data.inchargeEmailId}
            name="inchargeEmailId"
            onChange={handleChange}
            placeholder="Enter Email ID"
          />

          <label  className="form-label">
            Total Employees Working
          </label>
          <input 
            type="text" 
            name="totalEmployeesWork"
            value={data.totalEmployeesWork}
            onChange={handleChange}
            className="form-control" />
        </DialogContent>
        <DialogActions>
          <button type="button" className="btn btn-light" onClick={handleClose}>
            cancle
          </button>
          <button type="button" className="btn" onClick={handleClick}>
            Add
          </button>
        </DialogActions>
      </Dialog>
    </div>
    </div>
  );
};

export default CakeDevision;
