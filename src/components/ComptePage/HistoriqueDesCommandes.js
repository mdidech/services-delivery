import React, { useContext } from "react";
import { ServiceContext } from "../../context/context";
import Loading from "../Loading";
import CommandeColumns from "./ColonnesDesCommandes";
import CommandesList from "./CommandesList";
const HistoriqueCommandes = () => {
  const { authUser,  userCommandes } = useContext(ServiceContext);

  return (
    <>
      {authUser ? (
        <section className='py-3'>
          <div className='table-responsive-sm py-3 text-center'>
            <table className='table table-hover table-sm'>
              <CommandeColumns addRemove={false} />
              <CommandesList commandes={userCommandes} addRemove={false} />
            </table>
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default HistoriqueCommandes;
