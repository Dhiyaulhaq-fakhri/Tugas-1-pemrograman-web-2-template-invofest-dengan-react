import Login from "./pages/Login";
import Register from "./pages/Register";
import Registrasievent from "./pages/RegistrasiEvent";

function App() {
  return (
    <>
      <div className="container mx-auto grid grid-cols-2 gap-6 p-10">
        <Login />

        <Register />
      </div>

      <div className="flex justify-center m-10">
        <div className="border rounded-lg max-w-100 min-w-80">
          <h2 className="text-center m-5">Registrasi event</h2>
          <div className="flex align-middle justify-center">
            <Registrasievent />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;