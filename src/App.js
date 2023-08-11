import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './context/cartContext';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartView from './components/CartView/CartView';
import NoMatch from './components/NoMatch/NoMatch';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';
import OrderConfirm from './components/OrderConfirm/OrderConfirm';

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
            <Route path="/checkout" element={<Checkout />} />
            <Route path='/order-confirmation/:id' element={<OrderConfirm />} />
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
