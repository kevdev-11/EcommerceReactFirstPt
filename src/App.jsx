import { HashRouter, Routes, Route } from 'react-router-dom'//El hashrouter funcion con /#/
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import ProductsDetail from './pages/ProductsDetail';
import Purchases from './pages/Purchases';
import NavBar from './Components/NavBar';
import LoadingPage from './Components/LoadingPage';
import { useSelector } from 'react-redux';
import ProtectedRute from './Components/ProtectedRute';

function App() {

      const isLoading = useSelector(state=>state.loading);

  return (
    <div className="App">
      <HashRouter>
      <NavBar >
          </NavBar>
      {isLoading && <LoadingPage/>}
        
        <Routes>
          
          <Route element={<ProtectedRute/>}> </Route>
          <Route path='Purchases' element={<Purchases/>} />
         
          <Route path='/login' element={<Login/>} />
          
          <Route path='/' element={<Home/>}/>
          <Route path='products/:id' element={<ProductsDetail/>} />
        </Routes> 
      </HashRouter>
    </div>
  )
}

export default App
