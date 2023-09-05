import Navbar from "./components/Navbar";
import Principal from "./components/Principal";
import Servicios from "./components/Servicios";
import { ServicioProvider } from "./context/ServiciosContext";

function App() {
  return (
    <div>
       <Navbar></Navbar>
       <Principal></Principal>
       <ServicioProvider>
          <Servicios/>
       </ServicioProvider>
       
    </div>
  );
}

export default App;
