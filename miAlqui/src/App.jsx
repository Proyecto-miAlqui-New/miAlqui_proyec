import { Routes, Route } from "react-router-dom";
import { Register } from "./pages/register/register";
import { Public } from "./pages/public";
import { Main } from "./pages/Mialqui";
import { PasoTwo } from "./pages/register/pasoTwo";
import { PasoTres } from "./pages/register/pasoTres";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Main></Main>} />
        <Route path="/public" element={<Public></Public>} />
        <Route path="/PasoTwo" element={<PasoTwo></PasoTwo>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/PasoTres" element={<PasoTres></PasoTres>} />
      </Routes>
    </div>
  );
}

export default App;
