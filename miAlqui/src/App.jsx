import { Routes, Route } from "react-router-dom";
import { Public } from "./pages/public";
import { Main } from "./pages/Mialqui";

import { Contact } from "./components/contact/contact";
import { FormAlqui } from "./pages/registroAlquiler/FormAlqui";
import { AdminAloj } from "./pages/admin/adminAloj";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/public" element={<Public></Public>} />
        <Route path="/Contact" element={<Contact></Contact>} />
        <Route path="/registerAlqui" element={<FormAlqui></FormAlqui>} />
        <Route path="/adminAloj" element={<AdminAloj></AdminAloj>} />
      </Routes>
    </div>
  );
}

export default App;
