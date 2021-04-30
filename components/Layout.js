import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Heebo:wght@400&display=swap"
        rel="stylesheet"
      />
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
