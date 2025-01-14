import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/global.css';
import './styles/reset/reset.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Notice from './pages/Notice';
import CartPage from './pages/CartPage';
import EventPage from './pages/EventPage';
import FAQPage from './pages/FAQPage';
import LoginPage from './pages/LoginPage';
import QNAPage from './pages/Q&APage';
import ReviewPage from './pages/ReviewPage';
import SeasonPage from './pages/SeasonPage';
import ShoppingPage from './pages/ShoppingPage';
import CollectionPage from './pages/CollectionPage';
import Signup from './pages/Signup';
import OrderHistory from './pages/OrderHistory';
import SearchResults from './pages/SearchResults';
import Exchange from './pages/Exchange';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/cart" element={<CartPage></CartPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/notice" element={<Notice></Notice>}></Route>
        <Route path="/event" element={<EventPage></EventPage>}></Route>
        <Route path="/faq" element={<FAQPage></FAQPage>}></Route>
        <Route path="/qna" element={<QNAPage></QNAPage>}></Route>
        <Route path="/review" element={<ReviewPage></ReviewPage>}></Route>
        <Route path="/season/:seasonId" element={<SeasonPage></SeasonPage>}></Route>
        <Route path="/collection" element={<CollectionPage></CollectionPage>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/orderhistory" element={<OrderHistory></OrderHistory>}></Route>
        <Route path="/exchange" element={<Exchange></Exchange>}></Route>
        <Route path="/result/:resultId" element={<SearchResults></SearchResults>}></Route>
        <Route path="/shop/:shopId" element={<ShoppingPage></ShoppingPage>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
