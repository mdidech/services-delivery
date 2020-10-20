import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import { Link } from "react-router-dom";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
const ModalCart = ({ validCart, auth }) => {
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
        <DialogTitle className="text-right">تاكيد</DialogTitle>
        <DialogContent>
          <DialogContentText>
            هل انت موافق لاتمام الطلب
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose} className='btn btn-outline-danger mx-auto'>
            الغاء
          </button>
            <Link to={auth} className='btn btn-outline-success mx-auto' onClick={() => {
              validCart();
              handleClose();
            }}>
              موافق
            </Link>
         
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalCart;
