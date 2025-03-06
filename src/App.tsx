import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Rooms from "./Pages/Rooms"


function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
    </>
  )
}

export default App
