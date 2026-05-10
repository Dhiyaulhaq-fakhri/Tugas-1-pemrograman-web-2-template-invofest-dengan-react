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
import CreateCategoty from "./pages/dashboard/categories/CreateCategory";
import CreateEvent from "./pages/dashboard/events/CreateEvent";
import CreateSpeakers from "./pages/dashboard/speakers/CreateSpeakers";


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

        <Route path="/category/create" element={<CreateCategoty />} />
        <Route path="/events/create" element={<CreateEvent />} />
        <Route path="/speaker/create" element={<CreateSpeakers />} />
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