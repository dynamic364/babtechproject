import React from "react";
import Navbar from "../../navBar/navBar"; // Make sure you have the correct path to your Navbar component
import SupportNav from "../../supportNav/supportNav";
import { useLocation } from "react-router-dom";
import Footer from "../../footer/footer";

const pageWithNav = (WrappedComponent) => {
  const WithNavbar = (props) => {
    const location = useLocation();
    return (
      <div>
        {location.pathname === "/support" ? <SupportNav /> : <Navbar />}
        <WrappedComponent {...props} />
        <Footer />
      </div>
    );
  };
  return WithNavbar;
};

export default pageWithNav;
