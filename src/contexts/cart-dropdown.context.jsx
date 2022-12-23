
import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
  dropdownStatus:  null,
  setDropdownStatus: () => null
});

export const CartDropdownProvider = ({ children }) => {

  const [dropdownStatus, setDropdownStatus] = useState(false);

  const value = { dropdownStatus, setDropdownStatus };

  return <CartDropdownContext.Provider value={value}>{ children }</CartDropdownContext.Provider>

}