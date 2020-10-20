import React, { useContext, useState } from "react";
import {ServiceContext } from "../../context/context";
import Loading from "../Loading";

import firebase from "../../context/firebase";
const AdressDelivery = () => {
  const { authUser,userDocId,getUser } = useContext(ServiceContext);

  const [userCredentials, setUserCredentials] = useState({
    nom: "",
    adresse: "",
    ville: "",
    telephone: "",
  });

  const handleChange = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
   await  update(userCredentials);
    await setUserCredentials({
      nom: "",
      adresse: "",
      ville: "",
      telephone: "",
    });
    await getUser(authUser);
  };
  const update = ({ nom, adresse, ville, telephone }) => {
    firebase.collection("users").doc(userDocId).update({
      nom: nom,
      adresse: adresse,
      ville: ville,
      telephone: telephone,
    });
  };
  return (
    <div>
      {authUser ? (
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <form onSubmit={handleSubmit} className='mt-5'>
              <div className='form-group'>
                <label htmlFor='email' className="d-block text-center">{authUser.email}</label>
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  required
                  className='form-control text-right'
                  name='nom'
                  onChange={handleChange}
                  value={userCredentials.nom}
                  placeholder='الاسم الاول والاخير'
                  autoComplete='off'
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  required
                  className='form-control text-right'
                  name='adresse'
                  onChange={handleChange}
                  value={userCredentials.adresse}
                  placeholder='العنوان البريدي'
                  autoComplete='off'
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  required
                  className='form-control text-right'
                  name='ville'
                  onChange={handleChange}
                  value={userCredentials.ville}
                  placeholder='المدينة'
                  autoComplete='off'
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  required
                  className='form-control text-right'
                  name='telephone'
                  onChange={handleChange}
                  value={userCredentials.telephone}
                  placeholder='الهاتف'
                  autoComplete='off'
                />
              </div>
              <div className='form-group mt-3'>
                <button
                  type='submit'
                  className='form-control btn btn-outline-warning'
                >
                  موافق
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default AdressDelivery;
