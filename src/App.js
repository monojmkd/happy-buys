import './App.scss';
import { Route,HashRouter,Routes } from 'react-router-dom';
// pages
import {Home, Category, Cart} from "./pages/index";
// components
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import {Provider} from 'react-redux';
import store from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route exact path = "/" element = {<Home />} />
            <Route exact path = "/category/:id" element = {<Category />} />
            <Route exact path = "/cart" element = {<Cart />} />
          </Routes>
          <Footer />
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
