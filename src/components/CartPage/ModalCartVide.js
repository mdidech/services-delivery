import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
const ModalCart = () => {
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
            className='btn btn-success  my-4'
            onClick={handleClickOpen}
          >
            تنفيذ الطلب
          </button>
      <Dialog open={open} onClose={handleClose}>
        <div className='bg-white'>
          <DialogTitle className="text-center text-danger font-weight-bold">خطأ</DialogTitle> 
          <DialogContent>
            <DialogContentText>
            لا يوجد اي شيء في سلة المشتريات 
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button onClick={handleClose} className='mx-auto btn btn-outline-warning text-center'>
              موافق
            </button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default ModalCart;
