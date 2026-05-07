import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Competition from "./pages/Competition";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Seminar from "./pages/Seminar";
import Talkshow from "./pages/Talkshow";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import Workshop from "./pages/Workshop";


function App() {
  return <BrowserRouter>
    <Routes>
      {/* landing page */}
      <Route path="/" element={<MainLayout />} >
        <Route path="/" element={<Beranda />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/seminar" element={<Seminar />} />
        <Route path="/talkshow" element={<Talkshow />} />
        <Route path="/workshop" element={<Workshop />} />
      </Route>

      {/* auth */}
      <Route path="/" element={<AuthLayout />} >
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

    </Routes>



  </BrowserRouter>;
}

export default App;