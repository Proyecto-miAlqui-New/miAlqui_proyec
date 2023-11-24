import { Routes, Route } from "react-router-dom";
import { Public } from "./pages/public";
import { Main } from "./pages/Mialqui";
import { FormAlqui } from "./pages/registroAlquiler/RegAlqui";
import { Contact } from "./components/contact/contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/public" element={<Public></Public>} />
        <Route path="/registerAlqui" element={<FormAlqui></FormAlqui>} />
        <Route path="/Contact" element={<Contact></Contact>} />
      </Routes>
    </div>
  );
}

export default App;