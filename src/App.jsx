import { Routes, Route } from "react-router-dom";
import { Register } from "./pages/register/register";
import { Public } from "./pages/public";
import { Main } from "./pages/Mialqui";
import { PasoTwo } from "./pages/register/pasoTwo";
import { PasoTres } from "./pages/register/pasoTres";
import { FormAlqui } from "./pages/registroAlquiler/RegAlqui";
import { Contact } from "./components/contact/contact"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/public" element={<Public></Public>} />
        <Route path="/PasoTwo" element={<PasoTwo></PasoTwo>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/registerAlqui" element={<FormAlqui></FormAlqui>} />
        <Route path="/PasoTres" element={<PasoTres></PasoTres>} />
        <Route path="/Contact" element={<Contact></Contact>} />
      </Routes>
    </div>
  );
}

export default App;
