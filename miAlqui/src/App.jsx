import { Routes, Route } from "react-router-dom";
import { Public } from "./pages/public";
import { Main } from "./pages/Mialqui";
import { FormAlqui } from "./pages/registroAlquiler/RegAlqui";
<<<<<<< HEAD
import { Contact } from "./components/contact/contact";
=======
import { Contact } from "./components/contact/contact"


>>>>>>> 9d00acdf86bf44ea008dcc1aa575e0392a3847d7
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/public" element={<Public></Public>} />
        <Route path="/registerAlqui" element={<FormAlqui></FormAlqui>} />
<<<<<<< HEAD
=======
        <Route path="/PasoTres" element={<PasoTres></PasoTres>} />
>>>>>>> 9d00acdf86bf44ea008dcc1aa575e0392a3847d7
        <Route path="/Contact" element={<Contact></Contact>} />
      </Routes>
    </div>
  );
}

export default App;