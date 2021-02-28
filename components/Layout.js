import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styles from '../styles/Layout.module.scss';

const Layout = ({children}) => {
 return (
     <div>
         
         <Nav />
         <main>
             {children}
         </main>
         <Footer />
     </div>
     
 )
}

export default Layout;