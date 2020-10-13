import React, { useContext } from "react";
import { ServiceContext } from "../context/context";
import { FaInfoCircle } from "react-icons/fa";
const Alert = () => {
  const { alert } = useContext(ServiceContext);
  return (
    alert !== null && (
      <div className='alert alert-danger'>
        <FaInfoCircle /> البريد الالكتروني أو كلمة المرور خاطئة
      </div>
    )
  );
};

export default Alert;
