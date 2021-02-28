import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styles from '../styles/Layout.module.scss';

const Layout = ({children}) => {
 return (
     <div>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"></link>
         <Nav />
         <main>
             {children}
         </main>
         <Footer />
     </div>
     
 )
}

export default Layout;