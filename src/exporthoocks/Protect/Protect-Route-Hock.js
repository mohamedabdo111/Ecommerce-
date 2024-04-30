import { faL } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";

const ProtectRouteHock = () => {
  const [userDate, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [isUser, setIsuser] = useState();
  const [isAdmin, setIsAdmin] = useState();

  useEffect(() => {
    if (userDate != null) {
      if (userDate.role === "user") {
        setIsAdmin(false);
        setIsuser(true);
      } else {
        setIsAdmin(true);
        setIsuser(false);
      }
    } else {
      setIsAdmin(false);
      setIsuser(false);
    }
  }, []);

  return [isUser, isAdmin, userDate];
};

export default ProtectRouteHock;
