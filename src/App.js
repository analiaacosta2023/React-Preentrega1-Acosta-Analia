import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <body className='bg-primary-light-5'>
        <ItemListContainer greetings="Bienvenid@ a Ana Random Store">Tienda de zapatos de diseño</ItemListContainer>
      </body>
    </div>
  );
}

export default App;
