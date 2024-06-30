import Account from "../components/Account";
import NavbarAccount from "../components/NavbarAccount";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../services/auth.service";
import { toast, Bounce } from "react-toastify";
import Title from "../components/Title";

const AccountPage = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const checkUser = async () => {
      try {
        const response = await getUser(token);

        if (response) {
          setIsAuthenticated(true);
        } else {
          navigate("/restricted");
        }
      } catch (err) {
        toast.error("Your session has expired, please log in again.", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        if (err.message === "jwt malformed" || err.message === "jwt expired") {
          localStorage.removeItem("token");
        }
      }
    };

    if (!token) {
      navigate("/restricted");
    } else {
      checkUser();
    }
  }, [navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <Title text={"Profile"} />
      <NavbarAccount />
      <Account />
    </>
  );
};

export default AccountPage;
