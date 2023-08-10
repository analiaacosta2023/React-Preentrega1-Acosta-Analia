import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './context/cartContext';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartView from './components/CartView/CartView';
import NoMatch from './components/NoMatch/NoMatch';
import Footer from './components/Footer/Footer';


/* import { initializeApp } from "firebase/app";
import { getFirestore } from "firabse/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAp66Onn5bKL9gp6RIazSwgq_oJRgQXq14",
  authDomain: "react-ecommerce-7606d.firebaseapp.com",
  projectId: "react-ecommerce-7606d",
  storageBucket: "react-ecommerce-7606d.appspot.com",
  messagingSenderId: "537587402818",
  appId: "1:537587402818:web:9096a4024447c1388f85db"
};

const appFirebase = initializeApp(firebaseConfig); */

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <header className="bg-primary-light-5">
          <NavBar />
        </header>
        <div className='bg-primary-light-5'>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:coleccion" element={<ItemListContainer />} />
            <Route path="/item/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView />} />
            <Route path='/comingsoon' element={<NoMatch Title="Página en construcción">Próximamente</NoMatch>} />
            <Route path='*' element={<NoMatch Title="Página no encontrada">Error 404</NoMatch>} />
          </Routes>
        </div>
        <footer className="bg-secondary-light-5">
          <Footer />
        </footer>
      </BrowserRouter>
    </CartContextProvider>

  );
}

export default App;
