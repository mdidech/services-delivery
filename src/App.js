import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import SubCategories from "./pages/SubCategoriesPage";
import Produits from "./pages/ProduitsPage";
import LoginPage from "./pages/SigninPage";
import RegisterPage from "./pages/RegisterPage";
import MonComptePage from "./pages/MonComptePage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import Error from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/SideBar";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/sous-categories/:id'>
          <SubCategories />
        </Route>
        <Route path='/produits/:id'>
          <Produits />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/register'>
          <RegisterPage />
        </Route>
        <Route path='/moncompte'>
          <MonComptePage />
        </Route>
        <Route path='/panier'>
          <CartPage />
        </Route>
        <Route path='/contact-nous'>
          <ContactPage />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
