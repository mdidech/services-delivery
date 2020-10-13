import React, { useContext, useState } from "react";
import { ServiceContext } from "../../context/context";
import firebase from "../../context/firebase";
import ModalCart from "./ModalCart";
import ModalCartVide from "./ModalCartVide";
import ModalCompleteProfile from "./ModalCompleteProfile";
const CartTotal = () => {
  const {
    clearCart,
    cartTotal,
    cart,
    authUser,
    currentUser
  } = useContext(ServiceContext);
  const [auth, setAuth] = useState("/moncompte");

  const commandes = cart.map((order) => {
    return {
      id: order.id,
      nom: order.titre,
      quantite: order.quantite,
      desc: order.categorie,
      prix: order.prix,
      somme: order.total,
    };
  });
  const validCart = () => {
    if (cart.length> 0 && authUser) {
      firebase.collection("commandes").add({
        progress: "en attente",
        order: commandes,
        total: cartTotal,
        user: authUser.email,
        date: new Date(),
      });
      clearCart();
    }else{
      setAuth("/login");
    }
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col text-title text-center my-5'>
        <h3> {cartTotal} dhs : المبلغ الكلي</h3>
          <h6 className="text-muted"> لم يتم إضافة مصاريف الشحن بعد</h6>
          <div className="row justify-content-center">
          
          {cart.length===0 ? (
            <ModalCartVide />
          ) : currentUser !== null ? (
            currentUser.adresse || currentUser.telephone ? (
              <ModalCart validCart={validCart} auth={auth} />
            ) : (
              <ModalCompleteProfile auth={auth}  />
            )
          ) : (
            <ModalCompleteProfile auth={auth}  />
          )}
          <button
            className='btn btn-outline-danger my-4 mx-2'
            onClick={() => {
              clearCart();
            }}
          >
            إفراغ السلة
          </button>
          
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
