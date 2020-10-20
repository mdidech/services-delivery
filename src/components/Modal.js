import React, { useState, useContext } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { FaTrash } from "react-icons/fa";
import { ServiceContext } from "../context/context";
import {Link} from "react-router-dom"
const Modal = ({ id }) => {
  const { removeCommande } = useContext(ServiceContext);
  const [open, setOpen] = useState(false);
  const removeById = (id) => {
    removeCommande(id);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link to="#" onClick={handleClickOpen}>
        <FaTrash className='cart-icon text-danger m-0' />
      </Link>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="text-right">تاكيد</DialogTitle>
        <DialogContent>
          <DialogContentText className="text-right">
            هل انت متأكدة -- تريد حدف الطلب
          </DialogContentText>
        </DialogContent>
        <DialogActions className="text-center">
          <button onClick={handleClose} className='btn btn-outline-danger mx-auto' autoFocus>
            الغاء
          </button>
          <button  autoFocus
            onClick={() => {
              removeById(id);
              handleClose();
            }} 
            className='mx-auto btn btn-outline-warning text-center'>
          تأكيد
            </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
