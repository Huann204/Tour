import AOS from "aos";
import "aos/dist/aos.css";
import DefaultLayout from "./layouts/DefaultLayout";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App font-Lexend">
      <BrowserRouter>
        <AppRoutes />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
