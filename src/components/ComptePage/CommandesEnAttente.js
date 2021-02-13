import React, { useContext, useEffect,useState } from "react";
import { ServiceContext } from "../../context/context";
import Loading from "../Loading";
import CommandeColumns from "./ColonnesDesCommandes";
import CommandesList from "./CommandesList";

const Status = () => {
  const { authUser, userCommandes } = useContext( 
    ServiceContext
  );
  const [orderEnAttente,setOrderEnAttente]=useState([])
  useEffect(() => {
    const orders=userCommandes.filter(commande=>{
        return commande.progress==="في الانتظار"
    })
    setOrderEnAttente(orders)
    // eslint-disable-next-line
  }, [userCommandes]);
  return (
       <>
      {authUser ? (
        <section className='py-3'>
          <div className='table-responsive-sm py-3 text-center'>
            <table className='table table-hover table-sm'>
              <CommandeColumns addRemove={true} />
           <CommandesList commandes={orderEnAttente} addRemove={true} />
              
            </table>
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  
  );
};

export default Status;
