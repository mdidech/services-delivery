import React from "react";
// import { FaTrash } from "react-icons/fa";
import Modal from "../Modal";
import moment from "moment";
const Commande = ({ commande, addRemove }) => {
  const {id, total, progress, order,date } = commande;
  // const [list, setList] = useState({ id, total, progress, order });

  // const updateOrder = (id) => {
  //   setList({ id, total, progress, order });
  // };
  const date1= moment(date.toDate()).locale("fr").format("llll")
  return (
    <tr style={{ fontSize: "12px" }}>
       {addRemove && (
        <td
          className='col-lg-2 text-center'
          style={{ width: "10%", fontSize: "10px" }}
        >
          <Modal id={id} />
        </td>
      ) }
      <td className='col-lg-2 ' style={{ width: "20%" }}>
        {progress}
      </td>
      <td className='col-lg-2 ' style={{ width: "20%" }}>
      {date1}
      </td>
      <td className='col-lg-2 ' style={{ width: "20%" }}>
        {total} Dhs
      </td>
      <td className='col-lg-3 ' style={{ width: "25%" }}>
        {order.length}
      </td>
      <td className='col-lg-3 ' style={{ width: "25%" }}>
        {id}
      </td>
    </tr>
  );
};

export default Commande;
