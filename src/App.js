import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Form from "./components/Form/Form";
import MenuCategory from "./components/MenuCategory/MenuCategory";
import Products from "./components/Products/Products";
import Container from "./redux/Container";
import Thankyou from "./components/Thankyou/Thankyou";
import GetData from "./components/GetData/GetData";
import CheckMenuMilk from "./components/MenuCategory/CheckMenuMilk";
import CheckMenuMilkProtien from "./components/MenuCategory/CheckMilkProtien";
import CheckCheese from "./components/MenuCategory/CheckCheese";
import CheckFatVariants from "./components/MenuCategory/CheckFatVariants";
import BioContainer from "./redux/Containers/BioContainer";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/bio" element={<BioContainer />}></Route>
            <Route path="/category" element={<MenuCategory />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/thankyou" element={<Thankyou />}></Route>
            <Route path="/getData" element={<GetData />}></Route>
            <Route path="/checkMilkPowders" element={<CheckMenuMilk />}></Route>
            <Route path="/checkProtienCont" element={<CheckMenuMilkProtien />}></Route>
            <Route path="/checkCheeseCont" element={<CheckCheese />}></Route>
            <Route path="/CheckFatCont" element={<CheckFatVariants />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
