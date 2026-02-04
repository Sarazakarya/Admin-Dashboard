import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashBoard } from "./Pages/Home/DashBoard";
import { LayOut } from "./Components/LayOut/LayOut";
import { ProductView } from "./Pages/ProductView/ProductView";
import { SignUp } from "./Pages/SignUp/SignUp";
import { Login } from "./Pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<LayOut />}>
          <Route index element={<DashBoard />} />
          <Route path="/Product/:id" element={<ProductView />} />
          <Route path="/Product" element={<ProductView />} />
          <Route path="*" element={<h1>Page 404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
