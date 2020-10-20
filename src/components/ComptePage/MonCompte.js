import React, { useContext, useState, useEffect } from "react";
import { ServiceContext } from "../../context/context";
import Loading from "../Loading";
const MonCompte = () => {
  const { authUser, currentUser } = useContext(ServiceContext);
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);
  return (
    <>
      {authUser ? (
        <div className='row  justify-content-center w-60'>
          <div className='col-10 col-md-6  border-right my-3 border-warning'>
            <div className='form-group mt-5 text-right'>
              <label htmlFor='nom'>
                 {user.nom}:<strong> إسم </strong>
              </label>
              <br />
              <br />
              <label htmlFor='email'>
               {user.email} : <strong> البريد الالكتروني</strong>
              </label>
              <br />
              <br />
              <label htmlFor='adresse'>
               {user.adresse}: <strong> العنوان</strong> 
              </label>
              <br />
              <br />
              <label htmlFor='telephone'>
                 {user.telephone}:<strong> الهاتف</strong>
              </label>
              <br />
              <br />
              <label htmlFor='ville'>
              <span> {user.ville}</span> : <strong className="text-right"> المدينة</strong>
              </label>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default MonCompte;
