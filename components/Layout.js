import Nav from '../components/Nav';
import styles from '../styles/Layout.module.scss';

const Layout = ({children}) => {
 return (
     <div>
         
         <Nav />
         <main>
             {children}
         </main>
     </div>
     
 )
}

export default Layout;