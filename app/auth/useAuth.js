import { useContext } from "react";

import AuthContext from "./context";
import data from "../../data.json";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = () => {
    const user = data.userInfo;
    setUser(user);
  };

  const logOut = () => {
    setUser(null);
  };

  return { user, logIn, logOut };
};
