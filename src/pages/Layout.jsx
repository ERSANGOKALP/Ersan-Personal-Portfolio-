import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet styled={{ margin: "0", padding: "0" }} />
      <Footer />
    </>
  );
};

export default Layout;
