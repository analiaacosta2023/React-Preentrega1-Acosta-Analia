import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartView from './components/CartView/CartView';
import NoMatch from './components/NoMatch/NoMatch';


function App() {
  return (
    <BrowserRouter>
      <header className="bg-primary-light-5">
        <NavBar/>
      </header>
      <div className='bg-primary-light-5'>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:coleccion" element={<ItemListContainer/>} />
          <Route path="/item/:productId" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<CartView/>} />
          <Route path='*' element= {<NoMatch/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
