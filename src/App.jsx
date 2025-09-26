// import image1 from "./assets/Images/Frontendpage3.png";
import "./App.css";
import CardslideImage from "./Component/CardslideImage/CardslideImage";
import Cardslidercomp from "./Component/Cardslidercomp/Cardslidercompp";
import StackedCards from "./Component/Cardslidercomp/Cardslidercompp";
import Frontpage from "./Component/FrontPage/Frontpage";
import Header from "./Component/Header/Header";
import Randomanimation from "./Component/Randomanimation/Randomanimation";
import ChooseDress from "./Component/ChooseDress/ChooseDress";
import Mapcard from "./Component/ProductsCards/Mapcard";
import { useState } from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import ProductPage from "./Component/ProductPage/ProductPage";
import Footer from "./Component/Footer/Footer";

function App() {
  const [isclick, setclick] = useState("Mens");

  

  const [isproductpageimage,setproductpageimage] = useState();

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          
          <Route
            path="/"
            element={
              <div className="appcomponentdivv">
                
                <Frontpage />
                <div className="cardslidercompooo">
                  <Cardslidercomp />
                </div>
                <div className="secondanimation">
                  <Randomanimation />
                </div>
                <ChooseDress isclickfn={setclick} />

                <div className="productcarddddd">
                  <Mapcard Data={isclick} getimage={setproductpageimage} />
                </div>
              </div>
            }
          />

          <Route path="/productpage" element={<ProductPage imagee={isproductpageimage} />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}
export default App;
