import { Suspense, lazy, useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase";
import { setCurrentUser } from "./store/user/userSlice";
import { useDispatch } from "react-redux";
import { Spinner } from "./components/spinner/spinner.component";

const Checkout = lazy(() => import("./routes/checkout/checkout.component"));
const Home = lazy(() => import("./routes/home/home.component"));
const Shop = lazy(() => import("./routes/shop/shop.component"));
const Authentication = lazy(() =>
  import("./components/authentication/authentication.component")
);
const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);

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
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
