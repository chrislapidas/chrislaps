import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init({ disable: "mobile" });
  }, []);

  return (
    <div>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap"
        rel="stylesheet"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-backstretch/2.1.18/jquery.backstretch.min.js" />
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
