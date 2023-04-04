import { useEffect } from "react";

import "./categories.styles.scss";
import { Home } from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./routes/navigation/navigation.component";
import { Authentication } from "./components/authentication/authentication.component";
import { Shop } from "./routes/shop/shop.component";
import { Checkout } from "./routes/checkout/checkout.component";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase";
import { setCurrentUser } from "./store/user/userSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsuscribe = onAuthStateChangedListener((user) => {
      dispatch(setCurrentUser(user?.uid));
      if (user) {
        createUserDocumentFromAuth(user);
      }
    });
    return unsuscribe;
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
