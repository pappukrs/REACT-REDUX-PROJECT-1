
import './App.css';
import Header from './containers/Header'
import {BrowserRouter ,Routes,Route}  from 'react-router-dom';
import ProductListing from './containers/ProductListing'
import ProductDetail from './containers/ProductDetail';
import Navbar from './Navbar/Navbar.jsx'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header/>
       <Navbar/>
       <Routes>
       <Route path="/" element={<ProductListing/>} />
       <Route path="/product/:productId" element={<ProductDetail/>} />
       <Route path='/*' >404 Not Found</Route>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
