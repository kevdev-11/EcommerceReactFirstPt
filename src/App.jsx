import { HashRouter, Routes, Route } from 'react-router-dom'//El hashrouter funcion con /#/
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import ProductsDetail from './pages/ProductsDetail';
import Purchases from './pages/Purchases';
import NavBar from './Components/NavBar';
import LoadingPage from './Components/LoadingPage';
import { useSelector } from 'react-redux';
import Footer from './Components/Footer';

function App() {

      const isLoading = useSelector(state=>state.loading);

  return (
    <div className="App">
      <HashRouter>
      {isLoading && <LoadingPage/>}
        <NavBar ></NavBar>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='Login' element={<Login/>}/>
          <Route path='/products' element={<Products/>} />
          <Route path='/products/:id' element={<ProductsDetail/>} />
          <Route path='Purchases' element={<Purchases/>} />
        </Routes>
        <Footer></Footer>
      </HashRouter>
    </div>
  )
}

export default App
