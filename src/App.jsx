import AOS from "aos";
import "aos/dist/aos.css";
import DefaultLayout from "./layouts/DefaultLayout";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="App font-Lexend">
      <BrowserRouter>
        <DefaultLayout>
          <AppRoutes />
        </DefaultLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
