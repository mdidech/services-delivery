import React, { createContext, useState, useEffect } from "react";
import firebase, { firebaseAuth } from "./firebase";

export const ServiceContext = createContext();
const ServiceProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [subCategories, setsubCategories] = useState([]);
  const [produits, setProduits] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [alert, setAlert] = useState(null);
  const [authUser, setAuthUser] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [userDocId, setUserDocId] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userCommandes, setUserCommandes] = useState([]);
  const [commandeAttente, setCommandeAttente] = useState([]);

  //recuperer les données depuis la base de données.
  useEffect(() => {
    try {
      setIsLoading(true)
      const unsubscribe = firebaseAuth.onAuthStateChanged(async (user) => {
        if (user) {
          // recuperer l'utilisateur déja connecté
          
          await setAuthUser(user);
          await fetchUser(user);
          await setIsLoading(false)
        
        } else {
          await setAuthUser(null);
        }
      });
      getData().then(() => {
        setIsLoading((prevState) => {

          return !prevState;
        });
      });
      
     
      return () => {
        unsubscribe();
       
      };

    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line
  }, []);
  const getData = async () => {
    try{
      setIsLoading(true);
      await firebase
        .collection("categories")
        .orderBy("id")
        .onSnapshot((snapShot) => {
          const tempCategories = snapShot.docs.map((doc) => {
            return { ...doc.data(), docId: doc.id };
          });
          setCategories(tempCategories);
        });
      await firebase
        .collection("sous-categories")
        .orderBy("id")
        .onSnapshot((snapShot) => {
          const tempSubCategories = snapShot.docs.map((doc) => {
            return { ...doc.data(), docId: doc.id };
          });
  
          setsubCategories(tempSubCategories);
        });
      await firebase
        .collection("produits")
        .orderBy("id")
        .onSnapshot((snapShot) => {
          const tempProduits = snapShot.docs.map((doc) => {
            return { ...doc.data(), docId: doc.id };
          });
          setProduits(tempProduits);
          setCart(getStorageCart());
          if (getStorageCart().length > 0) {
            addTotals(getStorageCart());
          }
        });
       
      return;
    }catch (err){
        console.log(err)
    } 
  };

  // cette fonction va retourner 2 variables:  total de la cart et le nombres des éléments dans la cart
  const getTotals = (tempcart) => {
    let total = 0;
    let cartElements = 0;
    if (tempcart.length > 0) {
      tempcart.forEach((item) => {
        total += parseFloat(item.total);
        cartElements += 1;
      });
    }
    total = parseFloat(total.toFixed(2));
    return {
      cartElements,
      total,
    };
  };
  // cette fonction affecte le total de la cart et le nombre des elements à deux state
  const addTotals = async (tempcart) => {
    const totals = getTotals(tempcart);
    await setCartItems(totals.cartElements);
    await setCartTotal(totals.total);
  };
  const syncStorage = (tempcart) => {
    localStorage.setItem("cart", JSON.stringify(tempcart));
  };
  const updateCart = async (tempcart) => {
    await setCart([...tempcart]);
    return;
  };

  //cette fonction permet d'ajouter des produits a partir de la liste dans la cart
  const addToCart = (id, countElements) => {
    let tempCart = [...cart];
    let tempProducts = [...produits];
    let tempItem = tempCart.find((item) => item.id === id);
    if (!tempItem) {
      // si le produit ajouter n'existe pas déja dans la cart
      tempItem = tempProducts.find((item) => item.id === id);
      let total = tempItem.prix * countElements;
      let cartItem = { ...tempItem, quantite: countElements, total };
      tempCart = [...tempCart, cartItem];
    } else {
      // si le produit ajouté existe dans la cart
      tempItem.quantite++;
      tempItem.total =
        parseFloat(tempItem.total.toFixed(2)) + parseFloat(tempItem.prix);
    }
    updateCart(tempCart).then(async () => {
      await addTotals(tempCart);
      await syncStorage(tempCart);
      return;
    });
  };

  const getStorageCart = () => {
    let tempCart;
    if (localStorage.getItem("cart")) {
      tempCart = JSON.parse(localStorage.getItem("cart"));
    } else {
      tempCart = [];
    }
    return tempCart;
  };
  
  const setAlerts = (alert) => {
    setAlert(alert);
    setTimeout(() => setAlert(null), 5000);
  };

  const getUser = (user) => {
    try {
      firebase
        .collection("users")
        .where("email", "==", user.email)
        .get()
        .then(async (snapshot) => {
          const docs = await snapshot.docs.map((doc) => {
            return doc;
          });
          if (docs.length > 0) {
            setUserDocId(docs[0].id);
            setCurrentUser(docs[0].data());
          } else {
            console.log("aucune commande n'existe");
          }
        });
 
    } catch (error) {
      console.log(error);
    }
  };

  async function fetchUser(user) {
    setIsLoading(true)
    await getUser(user);
    await getCommandes(user);
    return;
  }
  const logoutUser = () => {
    setAuthUser(null);
    setIsLoading(true)
    setCurrentUser(null);
  };
  // pour ouvrir et fermer le side bar
  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
   //incrementer le nombre des elements à commander d'un produit
  const increment = (id) => {
    let tempCart = [...cart];
    const cartItem = tempCart.find((item) => item.id === id);
    cartItem.quantite=cartItem.quantite + cartItem.unite_increment;
    cartItem.total = cartItem.quantite * cartItem.prix;
    cartItem.total = parseFloat(cartItem.total.toFixed(2));
    updateCart(tempCart).then(async () => {
      await addTotals(tempCart);
      await syncStorage(tempCart);
      return;
    });
  };
  //decrementer le nombre des elements à commander d'un produit
  const decrement = (id) => {
    let tempCart = [...cart];
    const cartItem = tempCart.find((item) => item.id === id);
    cartItem.quantite = cartItem.quantite - cartItem.unite_increment;
    if (cartItem.quantite > 0) {
      cartItem.total = cartItem.quantite * cartItem.prix;
      cartItem.total = parseFloat(cartItem.total.toFixed(2));
       updateCart(tempCart).then(async () => {
      await addTotals(tempCart);
      await syncStorage(tempCart);
      return;
    });
    } else {
      removeItem(id);
    }
  };
  //supprimer un element de la cart par son id
 const removeItem = (id) => {
    let tempCart = [...cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    updateCart(tempCart).then(async () => {
      await addTotals(tempCart);
      await syncStorage(tempCart);
      return;
    });
  };
//vider la cart
const clearCart = () => {
  const tempCart=[] 
  updateCart(tempCart).then(async () => {
    await addTotals(tempCart);
    await syncStorage(tempCart);
    return;
  });
};
const getCommandes = (user) => {
  try {
    firebase
      .collection("commandes")
      .where("user", "==", user.email)
      .get()
      .then(async (snapshot) => {
        let docs = await snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        if (docs.length !== 0) {
          setUserCommandes(docs);
        } else {
          setUserCommandes([]);
          setCommandeAttente([])
        }
      });
      setIsLoading((prevState) => {

        return !prevState;
      });
  } catch (error) {
    console.log(error);
    setIsLoading((prevState) => {

      return !prevState;
    });
  }
};
const removeCommande = (id) => {
  firebase
        .collection("commandes")
        .doc(id)
        .delete()
        .then(function () {
          console.log("Document successfully deleted!");
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
        getCommandes(authUser);
};
  return (
    <ServiceContext.Provider
      value={{
        categories,
        subCategories,
        isLoading,
        produits,
        addToCart,
        cart,
        cartItems,
        cartTotal,
        setAlerts,
        alert,
        authUser,
        logoutUser,
        sidebarOpen,
        handleSidebar,
        userDocId,
        increment,
        decrement,
        removeItem,
        clearCart,
        currentUser,
        getUser,
        getCommandes,
        userCommandes,
        commandeAttente,
        removeCommande
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceProvider;
