
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './components/Cart/Cart';
import MainNav from './components/navbar/MainNav';

function App() {
  return (
    <div className="App-header">
    
       <MainNav/>
       <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/cart' element = {<Cart/>}/>
       </Routes>
    </div>
  );
}

export default App;
