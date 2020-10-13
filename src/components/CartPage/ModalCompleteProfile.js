import React, { useState, useContext } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link } from "react-router-dom";
import { ServiceContext } from "../../context/context";
const ModalCompleteProfile = () => {
  const { authUser } = useContext(ServiceContext);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
          <button
            className='btn btn-success my-4'
            onClick={handleClickOpen}
          >
            تنفيذ الطلب
          </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="text-center text-danger font-weight-bold">
          {authUser
            ? "compléter votre profile:adresse/telephone"
            : "تسجيل الدخول"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {authUser
              ? "svp, complétez votre profile avec : telephone et/ou adresse ...etc"
              : "تسجيل الدخول ضروري لاتمام العملية"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        {authUser
              ? (<Link to='/moncompte' onClick={handleClose} className="mx-auto btn btn-outline-warning text-center">
                موافق
            </Link>)
              : (<Link to='/login' onClick={handleClose} className="mx-auto btn btn-outline-warning text-center">
                موافق
            </Link>)}
          
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalCompleteProfile;
