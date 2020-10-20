import React from "react";
import Commande from "./Commande";

const CommandesList = ({ commandes, addRemove }) => {

  return (
    <tbody>
      {commandes.length > 0 ? (
        <>
          {commandes.map((commande) => (
            <Commande key={commande.id} commande={commande} addRemove={addRemove} />
          ))}
        </>
      ) : (
        <tr className='my-5 '>
          <td className='text-title text-center' colSpan='5'>
          لا يوجد طلبات مسبقة
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default CommandesList;
