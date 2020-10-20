import React from "react";

const OrdersColumns = ({ addRemove }) => {
  return (
   
    <thead style={{ fontSize: "12px" }} className='bg-warning'>
      <tr>
      {addRemove ? (
          <th className='col-lg-2 ' style={{ width: "10%" }}></th>
        ) : (
          <></>
        )}
         <th className='col-lg-2 ' style={{ width: "20%" }}>
         الحالة
        </th>
        <th className='col-lg-2 ' style={{ width: "20%" }}>
         التاريخ
        </th>
        <th className='col-lg-2 ' style={{ width: "20%" }}>
          المجموع
        </th>
        <th className='col-lg-3 ' style={{ width: "25%" }}>
          العدد
        </th>
        <th className='col-lg-3 ' style={{ width: "25%" }}>
          الرقم
        </th>
       
        
       
        
      </tr>
    </thead>
  );
};

export default OrdersColumns;
