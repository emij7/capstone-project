import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { CartDropdown } from "../../components/cart-dropdown/cart-dropdown.component";
import { CartIcon } from "../../components/cart-icon/cart-icon.component";
import { getCartStatus } from "../../store/cart/cartSlice";
import { useAppSelector } from "../../store/hooks";
import { getUser } from "../../store/user/userSlice";
import { signOutUser } from "../../utils/firebase/firebase";
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
} from "./navigation.styles";

export const Navigation = () => {
  const currentUser = useAppSelector(getUser);
  const isCartOpen = useAppSelector(getCartStatus);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
