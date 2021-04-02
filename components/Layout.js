import Nav from "../components/Nav";

const Layout = ({ children }) => {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
        rel="stylesheet"
      ></link>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
